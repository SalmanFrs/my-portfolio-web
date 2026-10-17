# Salman Faris Alhaitami | Personal Portfolio Website

[![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite_8-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

A modern, responsive personal portfolio website showcasing data science pipelines, machine learning projects, and full-stack web applications. Built with React 19, TypeScript, and a tailored Tailwind CSS design system with an emphasis on craftsmanship, accessibility, and content-driven architecture.

🔗 **Live Demo:** [https://salman-portfolio-web.vercel.app/](https://salman-portfolio-web.vercel.app/)  
📁 **Repository:** [https://github.com/SalmanFrs/my-portfolio-Web](https://github.com/SalmanFrs/my-portfolio-Web)

---

## 🌟 Key Features

- **Data-Driven Architecture:** All profile metadata, project details, work experience, certifications, and technical competencies are centralized in a single typed configuration (`src/data/portfolioData.ts`), making updates fast and maintainable.
- **Interactive Project Carousel:** 16:9 responsive media carousels with smooth transitions, 5-second auto-slide, pause-on-hover/focus, keyboard arrow navigation (`Left`/`Right`), and full support for `prefers-reduced-motion`.
- **Accessible & Human-Centric UI:**
  - Strict compliance with WCAG AA contrast standards (minimum 4.5:1 ratio for body and secondary text).
  - Visible `focus-visible` keyboard focus indicators for all interactive buttons and links.
  - Comfortable touch interaction on mobile devices with minimum 44 × 44 px tap targets.
- **Engineered Dark Aesthetics:** Bespoke dark theme using a curated palette (`#051424` surface background, periwinkle `#c0c1ff` primary, soft blue `#adc6ff` secondary) paired with modern Geist sans-serif and JetBrains Mono typography.
- **Instant Actions:** One-click direct PDF CV download, interactive "Copy Email" button with real-time clipboard feedback, and smooth navigation scroll-spy.

---

## 🛠️ Technology Stack

| Category | Technology | Description |
|---|---|---|
| **Frontend Framework** | [React 19](https://react.dev/) | Modern component-based user interface library |
| **Language** | [TypeScript](https://www.typescriptlang.org/) | Strongly typed JavaScript for compile-time safety |
| **Build Tool** | [Vite 8](https://vitejs.dev/) | Next-generation fast frontend tooling and bundler |
| **Styling** | [Tailwind CSS v3](https://tailwindcss.com/) | Utility-first CSS framework with customized design tokens |
| **Typography** | [Geist](https://vercel.com/font) & [JetBrains Mono](https://www.jetbrains.com/lp/mono/) | Clean body sans-serif and developer-centric monospace font |
| **Icons** | [Material Symbols Outlined](https://fonts.google.com/icons) & [React Icons](https://react-icons.github.io/react-icons/) | High-clarity system icons and verified brand logos |
| **Linter & Code Quality** | [oxlint](https://oxc.rs/) | High-performance JavaScript/TypeScript linter |
| **Deployment** | [Vercel](https://vercel.com/) | Edge-optimized deployment platform |

---

## 📁 Project Structure

```
my-portofolio-web/
├── public/
│   ├── images/                        # Project screenshots and visual assets
│   ├── profile.jpg                    # Author profile photo
│   ├── favicon.svg                    # Web favicon
│   ├── CV Salman Faris Alhaitami.pdf  # Curriculum Vitae (PDF)
│   └── logos/                         # Company and technology logos
│       ├── tableau.svg                # Tableau logo
│       └── vscode.svg                 # Virtual Studio Code logo
├── src/
│   ├── components/
│   │   ├── Navbar.tsx                 # Sticky navigation, scroll-spy, and mobile drawer
│   │   ├── Hero.tsx                   # Bio, profile card, direct CV download, and stats
│   │   ├── Skills.tsx                 # Grouped competencies with brand icons
│   │   ├── Projects.tsx               # Project cards with interactive screenshot carousels
│   │   ├── Experience.tsx             # Vertical timeline for experience, education, & certs
│   │   ├── About.tsx                  # Engineering philosophy and core strengths
│   │   ├── Contact.tsx                # Collaboration banner, email links, and copy utility
│   │   ├── Footer.tsx                 # Site credits, quick links, and copyright
│   │   └── SocialIcons.tsx            # Accessible social brand links (GitHub, LinkedIn)
│   ├── data/
│   │   ├── portfolioData.ts           # Central data source for all portfolio content
│   │   └── skillIcons.tsx             # Curated SVG brand icon mappings
│   ├── types/
│   │   └── portfolio.ts               # TypeScript interfaces and data models
│   ├── App.tsx                        # Main application layout
│   ├── index.css                      # Tailwind base layers, scrollbars, and icon styles
│   └── main.tsx                       # React DOM root entry
├── tailwind.config.js                 # Design tokens (colors, typography, spacing, radius)
├── vite.config.ts                     # Vite build configuration
├── tsconfig.json                      # TypeScript project references
└── package.json                       # Dependencies and project scripts
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine (version 18 or newer recommended).

### Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/SalmanFrs/My-Portofolio-Web.git
   cd My-Portofolio-Web
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173/`.

4. **Build for production:**
   ```bash
   npm run build
   ```
   The production-ready bundle will be generated in the `dist/` directory.

5. **Lint and format checks:**
   ```bash
   npm run lint
   ```

---

## 📝 Customization Guide

All portfolio content is decoupled from UI components and managed in `src/data/portfolioData.ts`.

### 1. Adding or Updating Projects
Add an entry to the `projects` array in `src/data/portfolioData.ts`:

```typescript
{
  id: "your-project-id",
  title: "Project Name",
  subtitle: "Brief one-line summary",
  category: "Web Application",
  tagLabel: "Personal Project",
  images: [
    "/images/screenshot-1.png",
    "/images/screenshot-2.png"
  ],
  description: "Detailed description of the problem solved, architecture, and results.",
  techStack: [
    { name: "React", colorVariant: "primary" },
    { name: "TypeScript", colorVariant: "secondary" },
    { name: "FastAPI", colorVariant: "neutral" }
  ],
  liveDemoUrl: "https://your-demo-url.com",
  githubUrl: "https://github.com/your-username/repo"
}
```

* **Multi-Screenshot Carousel:** When `images` contains more than one file, the interactive carousel is automatically enabled.
* **Private Repositories:** For proprietary research or internal projects, omit public URLs and add `isPrivate: true` and `tagLabel: "Private Project"` to render an honest private status badge.

### 2. Updating Profile & Resume
Place your updated resume PDF in the `public/` directory and update the `cvUrl` field in `portfolioData.ts`:
```typescript
profile: {
  fullName: "Your Name",
  cvUrl: "/Your_Resume.pdf",
  // ...
}
```

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

## 📬 Contact & Connect

**Salman Faris Alhaitami**  
- **Email:** [salmanfarisalhaitami@gmail.com](mailto:salmanfarisalhaitami@gmail.com)  
- **LinkedIn:** [linkedin.com/in/salman-faris-alhaitami](https://www.linkedin.com/in/salman-faris-alhaitami)  
- **GitHub:** [github.com/SalmanFrs](https://github.com/SalmanFrs)
