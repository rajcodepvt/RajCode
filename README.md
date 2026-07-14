# RajCode - Personal Portfolio Website

A responsive freelancer portfolio website built with Next.js (App Router), styled-components, and GSAP scroll animations.

## Tech Stack

- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **styled-components v6** - CSS-in-JS styling with SSR support
- **GSAP** - Scroll animations and transitions
- **react-slick** - Testimonial carousel

## Features

- Server-side rendered with Next.js App Router
- Responsive design for all screen sizes
- Smooth scroll animations with GSAP ScrollTrigger
- Testimonial carousel with react-slick
- Mobile-friendly navigation with hamburger menu
- Floating header with scroll effect
- SEO optimized with Next.js Metadata API
- Google Fonts (Poppins) loaded via layout

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
app/
├── layout.js          # Root layout with metadata + styled-components registry
└── page.js            # Home page composing all sections

components/
├── Header/            # Navigation bar with GSAP scroll effect
├── Footer/            # Footer with social links
├── ScrollToTop/       # Scroll to top button with GSAP
├── Card/              # Testimonial cards
├── TextBlock/         # Text layout component
├── SvgBlock/          # SVG display component
└── Sections/
    ├── Hero/          # Hero banner with CTA
    ├── About/         # About me section
    ├── Services/      # Services with GSAP animations
    ├── Testimonials/  # Client testimonials carousel
    └── Contact/       # Contact section with social links

lib/
└── registry.js        # styled-components SSR registry + GlobalStyle

public/
└── assets/            # Images, SVGs, and other static assets
```

## Deployment

This project is configured for deployment on Vercel. Simply connect your GitHub repository to Vercel for automatic deployments.

## License

Built by RajCode
