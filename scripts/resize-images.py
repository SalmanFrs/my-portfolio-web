#!/usr/bin/env python3
"""
Utility script to standardize and resize portfolio screenshots to 1280x720 (16:9).
Usage:
    python scripts/resize-images.py                   # Process all images in public/images/
    python scripts/resize-images.py public/images/abc.png # Process a specific image
    npm run resize-images
"""

import sys
import os
import shutil
from PIL import Image

# Force UTF-8 output on Windows consoles if possible
if hasattr(sys.stdout, 'reconfigure'):
    try:
        sys.stdout.reconfigure(encoding='utf-8')
    except Exception:
        pass

TARGET_WIDTH = 1280
TARGET_HEIGHT = 720
TARGET_SIZE = (TARGET_WIDTH, TARGET_HEIGHT)

IMAGE_DIR = os.path.join(os.path.dirname(__file__), '..', 'public', 'images')
BACKUP_DIR = os.path.join(IMAGE_DIR, '.originals')

def process_image(img_path):
    filename = os.path.basename(img_path)
    if filename.startswith('.') or not filename.lower().endswith(('.png', '.jpg', '.jpeg', '.webp')):
        return False

    os.makedirs(BACKUP_DIR, exist_ok=True)
    backup_path = os.path.join(BACKUP_DIR, filename)

    # Save original if not already backed up
    if not os.path.exists(backup_path):
        shutil.copy2(img_path, backup_path)
        print(f"[BACKUP] Backed up: {filename} -> public/images/.originals/")

    try:
        # Load from backup to prevent re-compressing degraded images
        source_path = backup_path if os.path.exists(backup_path) else img_path
        im = Image.open(source_path)

        # Skip if already exact 1280x720
        if im.size == TARGET_SIZE:
            print(f"[OK] Already 1280x720 (16:9): {filename}")
            return True

        print(f"[RESIZE] Resizing {filename} ({im.size[0]}x{im.size[1]}) -> 1280x720 (16:9)...")

        # Convert to RGB if needed
        if im.mode in ('RGBA', 'LA') or (im.mode == 'P' and 'transparency' in im.info):
            bg = Image.new('RGB', im.size, (14, 17, 23))
            im_converted = im.convert('RGBA')
            bg.paste(im_converted, mask=im_converted.split()[3])
            im = bg
        else:
            im = im.convert('RGB')

        im_w, im_h = im.size
        scale = min(TARGET_WIDTH / im_w, TARGET_HEIGHT / im_h)
        new_w = int(round(im_w * scale))
        new_h = int(round(im_h * scale))

        resized = im.resize((new_w, new_h), Image.Resampling.LANCZOS)

        # Detect corner background color
        try:
            corner_color = im.getpixel((min(5, im_w - 1), min(5, im_h - 1)))
        except Exception:
            corner_color = (14, 17, 23)

        # Canvas with matching corner/dark background
        canvas = Image.new('RGB', TARGET_SIZE, corner_color)
        paste_x = (TARGET_WIDTH - new_w) // 2
        paste_y = (TARGET_HEIGHT - new_h) // 2
        canvas.paste(resized, (paste_x, paste_y))

        canvas.save(img_path, 'PNG', optimize=True)
        print(f"[SUCCESS] Saved standardized: {filename} (1280x720)")
        return True

    except Exception as e:
        print(f"[ERROR] Error processing {filename}: {e}")
        return False

def main():
    if len(sys.argv) > 1:
        target = sys.argv[1]
        if os.path.isfile(target):
            process_image(target)
        else:
            print(f"File not found: {target}")
    else:
        if not os.path.isdir(IMAGE_DIR):
            print(f"Directory not found: {IMAGE_DIR}")
            return
        files = sorted(os.listdir(IMAGE_DIR))
        print(f"Scanning {IMAGE_DIR} ({len(files)} files)...")
        for f in files:
            p = os.path.join(IMAGE_DIR, f)
            if os.path.isfile(p):
                process_image(p)
        print("Done!")

if __name__ == '__main__':
    main()
