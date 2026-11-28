import React from "react";
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiPhp,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiJupyter,
  SiGooglecolab,
  SiHtml5,
  SiCss,
  SiReact,
  SiVite,
  SiNextdotjs,
  SiTailwindcss,
  SiPytorch,
  SiOpencv,
  SiMysql,
  SiGit,
  SiGithub,
  SiHuggingface,
  SiReplicate,
  SiUltralytics,
  SiOnnx,
  SiPrisma,
  SiPostgresql,
  SiVercel,
  SiW3Schools,
  SiLaravel,
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import {
  TbDatabase,
  TbChartBar,
  TbChartLine,
  TbTextRecognition,
  TbMathFunction,
  TbBrain,
  TbBinaryTree,
  TbPhoto,
  TbWaveSine,
  TbGridDots,
  TbReplace,
  TbApi,
} from "react-icons/tb";
import { DiVisualstudio } from "react-icons/di";
import { IoLogoTableau } from "react-icons/io5";

/**
 * Maps each technology name to its React icon component.
 * - Brand logos use Simple Icons (Si*) or Font Awesome (Fa*) from react-icons.
 * - Technologies without a brand icon use Tabler Icons (Tb*) as a relevant generic fallback.
 */
export const skillIconMap: Record<string, React.ReactElement> = {
  // Programming Languages
  Python: <SiPython />,
  JavaScript: <SiJavascript />,
  TypeScript: <SiTypescript />,
  Java: <FaJava />,
  PHP: <SiPhp />,
  SQL: <TbDatabase />,

  // Data Science, Visualization & NLP
  Pandas: <SiPandas />,
  NumPy: <SiNumpy />,
  "Scikit-learn": <SiScikitlearn />,
  Matplotlib: <TbChartBar />,
  Seaborn: <TbChartLine />,
  "Jupyter Notebook": <SiJupyter />,
  "Google Colab": <SiGooglecolab />,
  Tableau: <IoLogoTableau />,
  Sastrawi: <TbTextRecognition />,
  "TF-IDF": <TbMathFunction />,
  "Multinomial Naive Bayes": <TbBrain />,

  // Web Development
  HTML: <SiHtml5 />,
  CSS: <SiCss />,
  "W3.CSS": <SiW3Schools />,
  React: <SiReact />,
  Vite: <SiVite />,
  "Next.js": <SiNextdotjs />,
  "Tailwind CSS": <SiTailwindcss />,
  Laravel: <SiLaravel />,
  "REST API": <TbApi />,

  // Machine Learning & Computer Vision
  PyTorch: <SiPytorch />,
  YOLOv11: <SiUltralytics />,
  "ONNX Runtime": <SiOnnx />,
  OpenCV: <SiOpencv />,
  "scikit-image": <TbPhoto />,
  FFT: <TbWaveSine />,
  "Isolation Forest": <TbBinaryTree />,
  "K-Means": <TbGridDots />,

  // Databases & Development Tools
  MySQL: <SiMysql />,
  PostgreSQL: <SiPostgresql />,
  "Prisma ORM": <SiPrisma />,
  Git: <SiGit />,
  Vercel: <SiVercel />,
  GitHub: <SiGithub />,
  "VS Code": <DiVisualstudio />,
  "Hugging Face Spaces": <SiHuggingface />,
  "Replicate API": <SiReplicate />,
};

/**
 * Returns the icon for a given technology name.
 * Falls back to a generic icon if not found in the map.
 */
export function getSkillIcon(name: string): React.ReactElement {
  return skillIconMap[name] ?? <TbReplace />;
}
