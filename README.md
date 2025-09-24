# Rippon Labs Website

A modern, professional website for Rippon Labs built with Next.js and Tailwind CSS.

## Features

- 🎨 Modern design with dark theme
- 📱 Fully responsive layout
- ⚡ Built with Next.js for optimal performance
- 🎯 SEO optimized
- 📧 Contact form integration ready
- 🔒 Privacy policy included
- 📦 Ready for Vercel deployment

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Contact Form Setup

The contact form is configured to use Formspree. To set it up:

1. Go to [formspree.io](https://formspree.io) and create an account
2. Create a new form and get your form endpoint
3. Replace `'https://formspree.io/f/your-form-id'` in `app/page.tsx` with your actual endpoint

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Manual Deployment

```bash
npm run build
```

The site will be built as a static export in the `out/` directory.

## Customization

- **Logo**: Replace the placeholder logo in the header with your actual logo
- **Colors**: Modify the color scheme in the Tailwind classes
- **Content**: Update the content in `app/page.tsx`
- **SEO**: Update metadata in `app/layout.tsx`

## Structure

```
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Main homepage
│   └── privacy/
│       └── page.tsx         # Privacy policy page
├── public/                  # Static assets
├── package.json             # Dependencies
├── next.config.js           # Next.js configuration
├── tailwind.config.ts       # Tailwind configuration
└── vercel.json             # Vercel deployment config
```

## License

© 2025 Rippon Labs LLC. All rights reserved.
