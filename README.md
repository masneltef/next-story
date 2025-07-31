# 📖 NextStory

> A beautiful markdown-based storytelling platform built with Next.js

Transform your markdown files into stunning stories with timeline views, dynamic routing, and modern design.

## ✨ Features

- 📝 **Markdown-Powered** - Write stories in simple markdown
- ⚡ **Lightning Fast** - Built with Next.js 14+ 
- 📱 **Responsive Design** - Works perfectly on all devices
- 🎯 **SEO Optimized** - Complete meta tags and social sharing
- 🎭 **Timeline View** - Beautiful chronological story display
- 🏷️ **Tag System** - Organize stories with tags
- 🔍 **TypeScript** - Fully typed for better development

## 🚀 Quick Start

```bash
# Clone and install
git clone https://github.com/masneltef/nextstory.git
cd nextstory
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

## 📁 Project Structure

```
src/
├── app/                 # Next.js pages
├── components/          # React components
├── lib/                # Utilities
└── stories/            # Your markdown stories
```

## ✍️ Writing Stories

Create `.md` files in `src/stories/`:

```markdown
---
title: "My Amazing Story"
date: "2024-01-15"
summary: "A brief description"
tags: ["personal", "travel"]
---

# Your Story Content

Write your story here using **markdown** syntax!
```

## 🎨 Customization

- Edit `src/app/globals.css` for styling
- Modify components in `src/components/`
- Update `tailwind.config.js` for theme changes

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import in Vercel
3. Deploy automatically

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Other Options
- **Netlify**: Build command `npm run build`
- **Manual**: Upload `.next` folder after build

## 🛠️ Development

```bash
npm run dev      # Development server
npm run build    # Production build
npm run start    # Production server
```

## 📊 Tech Stack

- Next.js 14 + TypeScript
- Tailwind CSS
- Markdown processing (gray-matter + remark)
- Responsive design + SEO

## 🤝 Contributing

1. Fork the repo
2. Create feature branch
3. Make changes
4. Submit PR
