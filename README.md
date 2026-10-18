# Aman Tyagi - Modern Developer & AI Researcher Portfolio

An enterprise-grade, responsive, and visually aesthetic developer portfolio crafted with **React.js**, **Vite**, and **Tailwind CSS**. Built specifically for **Aman Tyagi**, highlighting experience as **Software Engineer II at HCL Software**, **Teaching Assistant at NIT Kurukshetra**, and author of **2 published research papers on Diabetic Retinopathy Classification**.

---

## 🌟 Key Highlights & Features

- **Current Professional Role:** Software Engineer II @ HCL Software
- **Academic Credentials:** M.Tech in Computer Engineering from **NIT Kurukshetra** (CGPA: 8.36), B.Tech from **University of Allahabad** (CGPA: 8.3)
- **GATE CS/IT 2024:** Qualified with score **525** and **96.3 Percentile**
- **Research Spotlight (2 Published Papers):**
  - *Diabetic Retinopathy Classification and Multi-Stage Grading Using EfficientNet-B3* (achieved **90% validation accuracy** on Messidor dataset).
  - *Automated Screening and Lesion Feature Extraction for Early-Stage Diabetic Retinopathy in Fundus Photography*.
- **Featured Projects:**
  - **Uber Clone Application** (React.js, Node.js, Express.js, MongoDB, MERN Stack, Geolocation, Ride Booking, Auth)
  - **Diabetic Retinopathy Classification** (PyTorch, CNN, EfficientNet-B3, Messidor dataset, 90% Acc)
  - **Multi-Source Text Summarization using LLMs** (LangChain, Groq LLaMA3, Streamlit, YouTube/Web/PDF summarization)
  - **Food Recipe Web Application** (React.js, Express, MongoDB, REST API, Recipe search and ingredient breakdown)
  - **Real-Time Weather Intelligence App** (React.js, Tailwind CSS, OpenWeatherMap API, Geolocation)
- **Competitive Coding:**
  - 600+ DSA Problems Solved on LeetCode & GeeksforGeeks
  - 5 Stars on HackerRank (Problem Solving)
  - 3 Stars on GeeksforGeeks with Contest Rating 1705
- **Interactive UI Capabilities:**
  - Dark Mode / Light Mode with automatic `localStorage` persistence
  - Interactive Code Terminal in Hero with live copy
  - Dynamic Project Filtering by category (All, Full Stack, AI & Machine Learning, Web Apps)
  - Deep-dive Modal for project case studies and research paper abstracts
  - Complete Printable / PDF Resume Modal with instant copy
  - Interactive Contact Form with real-time feedback, direct mailto fallback, and 1-click clipboard copy for phone (`+91 8923358230`) and email (`tyagiaman8923@gmail.com`)

---

## 📁 Project Structure

```
PortfolioNew/
├── public/                     # Static public assets
├── src/
│   ├── assets/                 # Icons & image assets
│   ├── components/
│   │   ├── Navbar.jsx          # Responsive header with theme toggle & mobile drawer
│   │   ├── Hero.jsx            # Dynamic Hero section with code terminal & CTAs
│   │   ├── HighlightsBar.jsx   # 4 Core impact stats (600+ solved, 2 papers, GATE, 1705)
│   │   ├── About.jsx           # Background narrative & 4 engineering pillars
│   │   ├── Experience.jsx      # HCL Software (SE-II) & NIT Kurukshetra (TA) timeline
│   │   ├── ResearchPublications.jsx # Dedicated Diabetic Retinopathy papers & metrics
│   │   ├── Projects.jsx        # Category-filtered project showcase
│   │   ├── ProjectModal.jsx    # In-depth case study & paper architecture modal
│   │   ├── Skills.jsx          # Tabbed technical competencies & proficiency levels
│   │   ├── Achievements.jsx    # Coding platforms (LeetCode, GfG, HackerRank, GATE)
│   │   ├── Education.jsx       # Academic credentials timeline
│   │   ├── Contact.jsx         # Interactive contact form & 1-click copy cards
│   │   ├── Footer.jsx          # Footer with social links & back-to-top
│   │   ├── ResumeModal.jsx     # Printable resume dialog with copy & print
│   │   └── SocialIcons.jsx     # Crisp SVGs for GitHub, LinkedIn, and LeetCode
│   ├── data/
│   │   └── portfolioData.js    # Single source of truth for all portfolio data
│   ├── App.jsx                 # Main application layout coordinator
│   ├── index.css               # Tailwind CSS directives, glassmorphism & gradients
│   └── main.jsx                # React DOM entry point
├── index.html                  # HTML entry point with Google Fonts & metadata
├── tailwind.config.js          # Tailwind CSS theme customization
├── postcss.config.js           # PostCSS configuration
├── vite.config.js              # Vite build tool configuration
└── package.json                # Project dependencies and npm scripts
```

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:3000` (or the URL displayed in your terminal).

### 3. Build for Production
```bash
npm run build
```
Creates an optimized production bundle inside the `dist/` directory.

### 4. Preview the Production Build
```bash
npm run preview
```

---

## ✏️ How to Customize Your Information

All your personal details, experience, publications, projects, and skills are stored in a single, well-documented file:
```
src/data/portfolioData.js
```
Simply edit this file to update your phone number, email, social links, add new research papers, or include new projects. The website will automatically update everywhere!
