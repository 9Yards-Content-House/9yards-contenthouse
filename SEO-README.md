# SEO Implementation Guide

## Overview
This website has been optimized for search engines with the following implementations:

## ✅ Implemented Features

### 1. Dynamic Meta Tags (react-helmet-async)
- Each page has unique title and description
- Open Graph tags for Facebook/LinkedIn sharing
- Twitter Card meta tags
- Canonical URLs for duplicate content prevention

### 2. Structured Data (JSON-LD)
- **Organization Schema** - Company information on homepage
- **LocalBusiness Schema** - Location, hours, contact info
- **Service Schema** - Individual service pages

### 3. Technical SEO
- `sitemap.xml` - All 30+ pages listed with priorities
- `robots.txt` - Sitemap reference included
- Semantic HTML throughout
- Proper heading hierarchy (h1 → h2 → h3)

## 🖼️ Required: Open Graph Image

**You need to create a social share image:**

**File location:** `/public/images/og/9yards-share-image.jpg`

**Specifications:**
- **Dimensions:** 1200 x 630 pixels (standard OG size)
- **Format:** JPG or PNG
- **File size:** Under 300KB for fast loading
- **Content suggestions:**
  - 9Yards Content House logo
  - Tagline: "World-class design, video, and digital marketing from Kampala to the world"
  - Brand colors (#1c1e70 primary, accent color)
  - High-quality team or work sample imagery

**Design tips:**
- Text should be large enough to read in thumbnails
- Keep important content in the center (social platforms crop edges)
- Use high contrast for readability

## 📁 File Structure

```
src/
├── components/shared/
│   └── SEO.tsx          # Reusable SEO component with schemas
├── pages/
│   ├── Index.tsx        # Homepage with Organization schema
│   ├── About.tsx        # About with Organization schema
│   ├── Contact.tsx      # Contact with LocalBusiness schema
│   ├── Studio.tsx       # Studio with LocalBusiness schema
│   └── services/        # All service pages with Service schemas
public/
├── sitemap.xml          # XML sitemap for search engines
├── robots.txt           # Crawler instructions with sitemap
└── images/og/
    └── 9yards-share-image.jpg  # (TO CREATE)
```

## 🔧 How to Use the SEO Component

```tsx
import { SEO, schemas } from "@/components/shared/SEO";

// Basic usage
<SEO 
  title="Page Title | 9Yards Content House"
  description="Page description for search results"
  url="/page-path"
/>

// With schema
<SEO 
  title="Service Name | 9Yards Content House"
  description="Service description"
  url="/services/service-name"
  schema={schemas.service("Service Name", "Full description")}
/>
```

## 🌐 Production URL
**Base URL:** https://contenthouse.9yards.co.ug

## 📊 SEO Checklist for New Pages

When adding new pages:
1. Import the SEO component
2. Add unique title (60 chars max)
3. Add unique description (155 chars max)
4. Set correct canonical URL
5. Add appropriate schema if applicable
6. Add to sitemap.xml

## 🚀 Pre-rendering (Recommended)

For SPAs, consider implementing pre-rendering with:
- **vite-plugin-prerender** - Static site generation at build time
- **Netlify/Vercel** - Built-in prerendering support

This ensures search engines see fully rendered HTML.

## 📈 Post-Launch SEO Tasks

1. Submit sitemap to Google Search Console
2. Submit sitemap to Bing Webmaster Tools
3. Monitor Core Web Vitals
4. Set up Google Analytics 4
5. Create Google Business Profile
6. Monitor search rankings monthly

---

*Last updated: January 2025*
