# AlternativeTo Browse All Apps - Redesigned

A modern, production-ready redesign of the AlternativeTo "Browse All Apps" page built with Next.js 14, React, Tailwind CSS, and Framer Motion.

## 🚀 Live Demo

Visit the redesigned page at: https://alternativeto.net/browse/

## ✨ Features

### Design
- **Modern SaaS-style UI** with dark navy/blue primary palette
- **Responsive design** - Mobile-first approach with breakpoints for all devices
- **Smooth animations** using Framer Motion for entrance effects and transitions
- **Frosted glass navbar** with scroll-based styling changes
- **Interactive filter chips** for categories and platforms
- **Accessible** - Semantic HTML, ARIA labels, focus-visible outlines

### Content Preserved
- All 27 categories with icons and links
- Top 6 platforms with app counts (Windows 43.2K, Mac 27.1K, etc.)
- 13 platform groups with counts
- Navigation links, search bar, social sharing

### Technical
- **Next.js 14** with App Router
- **React 18** with functional components and hooks
- **Tailwind CSS 3.4** for all styling
- **Lucide React** for icons
- **Framer Motion** for animations

## 📁 Project Structure

```
web502/
├── src/
│   ├── app/
│   │   ├── page.tsx          # Main page component
│   │   ├── layout.tsx        # Root layout
│   │   └── globals.css       # Global styles
│   └── components/           # Component directory (extensible)
├── scripts/
│   └── daily-discovery.py    # Daily automation script
├── data/
│   └── daily-discoveries/    # Daily discovery JSON files
│       └── 2026-04-22.json   # Initial discoveries
├── public/                   # Static assets
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## 🛠️ Setup & Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🤖 Daily Automation

This project includes a daily automation system that:

1. **Discovers new apps** from:
   - GitHub Trending repositories
   - AlternativeTo new releases
   - Reddit (r/opensource, r/selfhosted, r/webdev, r/programming, r/freesoftware)

2. **Saves structured data** to `data/daily-discoveries/YYYY-MM-DD.json`

3. **Commits and pushes** to GitHub daily

### Manual Execution

```bash
cd /home/workspace/web502
python3 scripts/daily-discovery.py
```

## 📊 Data Format

Each discovery is stored as:

```json
{
  "name": "App Name",
  "url": "https://github.com/example/app",
  "description": "Short description",
  "category": "AI Tools & Services",
  "platforms": ["Web", "Linux"],
  "source": "GitHub Trending",
  "discovered_date": "2026-04-22",
  "stars": 1000,
  "language": "Python"
}
```

## 🎨 Design System

### Colors
- **Primary**: Electric Blue (#3B82F6) to Indigo (#6366F1)
- **Navy**: Dark backgrounds (#0F172A, #1E293B)
- **Slate**: Text and UI elements

### Typography
- **Display**: Sora font for headings
- **Body**: Inter font for body text

### Components
- Category cards with hover effects
- Platform stat cards with gradient accents
- Filter inputs with real-time filtering
- Social share buttons
- Responsive navigation

## 📄 License

This project is for educational and demonstration purposes.

## 🙏 Credits

- Original design inspiration: [AlternativeTo](https://alternativeto.net/)
- Icons: [Lucide React](https://lucide.dev/)
- Fonts: [Google Fonts](https://fonts.google.com/)
