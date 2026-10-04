
# Vidya Groups Corporate Website

This is the official corporate website for **Vidya Groups**, serving the Ghaziabad & NCR regions. The project is built using a modern React Static Site Generation (SSG) architecture for ultra-fast performance and top-tier Local SEO.

## 🚀 Tech Stack

- **Framework**: React 18 + Vite
- **Static Site Generation (SSG)**: `vite-react-ssg` (Generates fully static HTML files for every route)
- **Routing**: `react-router-dom`
- **SEO & Meta Tags**: `react-helmet-async` (Injects titles, meta descriptions, and JSON-LD schema)
- **Icons**: `lucide-react`
- **Styling**: Vanilla CSS (Global variables, Glassmorphism, specific themes per vertical)

## 📁 Project Structure & Verticals

Vidya Groups operates in 4 major verticals, each with its own theme and landing page:
1. **Vidya Hostel** (Boys PG & Hostel)
2. **Vidya Mess** (Tiffin & Homely Meals)
3. **Vidya Library** (Premium Reading Space)
4. **Vidya Solar** (Solar Panel Installation & PM Surya Ghar Subsidy)

All pages have been optimized with professional English copy and modern UI components.

## ⚙️ How to Run Locally

To start development and see changes in real-time:

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev
```

## 🏗️ How to Build & Deploy

This website is designed to be hosted on any static hosting provider (Vercel, Netlify, Hostinger, Firebase, GitHub Pages).

```bash
# Generate the static HTML/CSS/JS files
npm run build
```
Once the build is complete, simply upload the contents of the **`dist/`** folder to your hosting provider.

## 🛠️ Where to Change Information

If you need to update contact details, phone numbers, or add new cities for SEO in the future, check these files:

- **Phone Numbers & WhatsApp Links**: 
  - `src/components/Navbar.jsx`
  - `src/components/Footer.jsx`
  - `src/components/WhatsAppFloat.jsx`
  - *Individual pages* (`Home.jsx`, `Solar.jsx`, `Hostel.jsx`, etc.) in the Contact section.
- **Local SEO Landing Pages**: 
  - To add a new city (e.g., "Solar Company in Delhi"), simply open `src/routes.jsx` and add a new route using the `LandingPage` component. The system will automatically generate a dedicated HTML page for it!
- **Colors & Themes**:
  - `src/styles/global.css` contains all the `--theme-main` and `--theme-dark` variables for each specific service.

## 🔍 SEO Features (Programmatic SEO)

This codebase dynamically generates location-specific landing pages for target keywords. For example, `src/routes.jsx` tells the SSG builder to generate files like:
- `/hostel-near-abes-college.html`
- `/solar-company-in-ghaziabad.html`
- `/tiffin-service-in-indirapuram.html`

A complete `sitemap.xml` and `robots.txt` are included in the `public/` directory for Google Search Console integration. Google Analytics (GA4) tracking is also injected into `index.html`.
