# Salman Faris Alhaitami | Personal Portfolio Website

[![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite_8-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

A modern, responsive personal portfolio website showcasing data science pipelines, machine learning projects, and full-stack web applications. Built with React 19, TypeScript, and a customized Tailwind CSS design system, with a focus on accessibility, maintainability, and a consistent user experience.

🔗 **Live Demo:** [https://salman-portfolio-web.vercel.app/](https://salman-portfolio-web.vercel.app/)  
📁 **Repository:** [https://github.com/SalmanFrs/my-portfolio-web](https://github.com/SalmanFrs/my-portfolio-web)

---

## 🌟 Key Features

- **Data-Driven Architecture:** Profile information, project details, work experience, certifications, and technical skills are centralized in `src/data/portfolioData.ts`, making content easier to update and maintain.
- **Interactive Project Carousel:** Responsive 16:9 project image carousels with smooth transitions, 5-second auto-slide, pause-on-hover/focus, keyboard arrow navigation (`Left`/`Right`), and support for `prefers-reduced-motion`.
- **Accessible & Human-Centric UI:**
  - Keyboard focus indicators using `focus-visible` for interactive buttons and links.
  - Touch-friendly interactive elements with minimum 44 × 44 px tap targets where applicable.
  - Color contrast designed with readability and accessibility in mind.
- **Engineered Dark Aesthetics:** A custom dark theme using a curated palette (`#051424` background, periwinkle `#c0c1ff` primary, and soft blue `#adc6ff` secondary), paired with Geist sans-serif and JetBrains Mono typography.
- **Certificate Showcase:** Dedicated certificate cards with certificate images, issuer information, dates, credential IDs, and verification links when available.
- **Instant Actions:** CV download, a "Copy Email" button with clipboard feedback, and smooth section navigation with scroll-spy.

---

## 🛠️ Technology Stack

| Category | Technology | Description |
|---|---|---|
| **Frontend Framework** | [React 19](https://react.dev/) | Component-based user interface library |
| **Language** | [TypeScript](https://www.typescriptlang.org/) | Typed JavaScript for improved code maintainability |
| **Build Tool** | [Vite 8](https://vite.dev/) | Fast development server and production bundler |
| **Styling** | [Tailwind CSS v3](https://tailwindcss.com/) | Utility-first CSS framework with customized design tokens |
| **Typography** | [Geist](https://vercel.com/font) & [JetBrains Mono](https://www.jetbrains.com/lp/mono/) | Sans-serif and monospace typography |
| **Icons** | [Material Symbols Outlined](https://fonts.google.com/icons) & [React Icons](https://react-icons.github.io/react-icons/) | Interface icons and brand icons |
| **Linter & Code Quality** | [oxlint](https://oxc.rs/) | JavaScript and TypeScript linting |
| **Deployment** | [Vercel](https://vercel.com/) | Website hosting and deployment |

---

## 📁 Project Structure

```text
my-portfolio-web/
├── public/
│   ├── profile.jpg                     
│   ├── favicon.svg                    
│   ├── CV Salman Faris Alhaitami.pdf   
│   └── images/
│       ├── brin-anomaly.png             
│       ├── brin-dashboard.png            
│       ├── fate-series.png               
│       ├── hoyoverse.png                    
│       ├── mini-blog-ibm.png              
│       ├── pothole-classification.png    
│       ├── pothole-interface.png         
│       ├── logos/                        
│       │   ├── tableau.svg
│       │   └── vscode.svg
│       └── certifications/              
│           ├── BNSP - Certified Associate Data Scientist 1.png
│           ├── BNSP - Certified Associate Data Scientist 2.png
│           ├── CCNA Introduction to Networks.png
│           ├── Code Generation and Optimization Using IBM Granite.png
│           ├── Fundamental Algoritma Coding Studio.png
│           ├── Gemini Certified Student University.png
│           └── TOEFL Language Center UNIKOM.png
├── src/
│   ├── components/
│   │   ├── Navbar.tsx                       
│   │   ├── Hero.tsx                      
│   │   ├── About.tsx                     
│   │   ├── Skills.tsx                 
│   │   ├── Projects.tsx                  
│   │   ├── Experience.tsx                
│   │   ├── Certificates.tsx              
│   │   ├── Contact.tsx                   
│   │   ├── Footer.tsx                    
│   │   └── SocialIcons.tsx               
│   ├── data/
│   │   ├── portfolioData.ts              
│   │   └── skillIcons.tsx                
│   ├── types/
│   │   └── portfolio.ts                  
│   ├── App.tsx                           
│   ├── index.css                         
│   └── main.tsx                          
├── tailwind.config.js                    
├── vite.config.ts                        
├── tsconfig.json                         
└── package.json                          
```

---

## 🚀 Getting Started

### Prerequisites

Install [Node.js](https://nodejs.org/) and npm. Use a Node.js version compatible with the dependencies specified in `package.json`.

### Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/SalmanFrs/my-portfolio-web.git
   cd my-portfolio-web
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open the local URL shown in your terminal, typically `http://localhost:5173/`.

4. **Build for production:**
   ```bash
   npm run build
   ```
   The production-ready files will be generated in the `dist/` directory.

5. **Run lint checks:**
   ```bash
   npm run lint
   ```

---

## 📝 Customization Guide

Portfolio content is managed in `src/data/portfolioData.ts`, with related TypeScript interfaces defined in `src/types/portfolio.ts`.

### 1. Adding or Updating Projects

Add or update an entry in the `projects` array in `src/data/portfolioData.ts`. The example below illustrates the general structure; make sure the property names match the project's existing TypeScript types.

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
  description: "Describe the problem, solution, implementation, and results.",
  techStack: [
    { name: "React", colorVariant: "primary" },
    { name: "TypeScript", colorVariant: "secondary" },
    { name: "FastAPI", colorVariant: "neutral" }
  ],
  liveDemoUrl: "https://your-demo-url.com",
  githubUrl: "https://github.com/your-username/repository"
}
```

- **Multi-Screenshot Carousel:** When `images` contains more than one file, the project carousel can display multiple screenshots.
- **Private Repositories:** For projects whose source code cannot be shared, omit public repository URLs and use the project's supported private-project fields if available.

### 2. Updating Profile & Resume

Place CV PDF files in the `public/` directory and update the corresponding CV path field or fields in `src/data/portfolioData.ts`. Make sure the file paths match the actual filenames and the implementation in `Hero.tsx`.

### 3. Adding or Updating Certificates

Place certificate images in `public/images/certifications/`, then update the certificate data in `src/data/portfolioData.ts`.

Include the available details, such as the certificate name, issuer, issue date, credential ID, image path, and official credential URL. Only include a verification link when a genuine link is available.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

## 📬 Contact & Connect

**Salman Faris Alhaitami**  
- **Email:** [salmanfarisalhaitami@gmail.com](mailto:salmanfarisalhaitami@gmail.com)  
- **LinkedIn:** [linkedin.com/in/salman-faris-alhaitami](https://www.linkedin.com/in/salman-faris-alhaitami)  
- **GitHub:** [github.com/SalmanFrs](https://github.com/SalmanFrs)
