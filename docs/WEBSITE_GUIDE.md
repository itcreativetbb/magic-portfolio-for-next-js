# Portfolio Website Guide

## Table of Contents
1. [Getting Started](#getting-started)
2. [Managing Content](#managing-content)
3. [Adding New Projects](#adding-new-projects)
4. [Creating Blog Posts](#creating-blog-posts)
5. [Managing the Gallery](#managing-the-gallery)
6. [Customizing the Website](#customizing-the-website)

## Getting Started

### Initial Setup
1. Make sure you have Node.js installed on your computer
2. Open the project folder in your code editor
3. Install dependencies by running: `npm install` or `pnpm install`
4. Start the development server: `npm run dev` or `pnpm dev`
5. Open your browser and go to: `http://localhost:3000`

## Managing Content

### File Structure
- `/src/app/` - Contains all your pages
- `/src/components/` - Contains reusable components
- `/public/images/` - Store all your images here
- `/src/resources/` - Contains website configuration

### Important Files
- `src/app/layout.tsx` - Main layout template
- `src/resources/content.tsx` - Website content configuration
- `src/utils/utils.ts` - Helper functions

## Adding New Projects

### Step 1: Create Project File
1. Go to `/src/app/work/projects/`
2. Create a new `.mdx` file (e.g., `my-new-project.mdx`)
3. Use this template:
```mdx
---
title: Your Project Title
description: Brief description of your project
date: YYYY-MM-DD
image: /images/projects/your-project/cover.jpg
---

Your project content here...
```

### Step 2: Add Project Images
1. Create a folder in `/public/images/projects/your-project-name/`
2. Add your project images there
3. Reference images in your MDX file using: `/images/projects/your-project-name/image.jpg`

## Creating Blog Posts

### Step 1: Create Blog Post
1. Navigate to `/src/app/blog/posts/`
2. Create a new `.mdx` file (e.g., `my-blog-post.mdx`)
3. Use this template:
```mdx
---
title: Your Blog Title
description: Brief description of your blog post
date: YYYY-MM-DD
---

Your blog content here...
```

### Step 2: Add Blog Images
1. Add images to `/public/images/`
2. Reference them in your blog post using: `![Alt text](/images/your-image.jpg)`

## Managing the Gallery

### Adding Gallery Images
1. Place your images in `/public/images/gallery/`
2. Images will automatically appear in the gallery page
3. Supported formats: JPG, PNG, WebP
4. Recommended image size: 1200x800 pixels or similar ratio

## Customizing the Website

### Changing Colors and Theme
1. Open `src/resources/once-ui.config.ts`
2. Modify the color variables:
   - `brand`: Main brand color
   - `accent`: Secondary accent color
   - `neutral`: Text and background colors

### Updating Personal Information
1. Open `src/resources/content.tsx`
2. Update these sections:
   - `home`: Homepage content
   - `about`: About page content
   - `social`: Social media links
   - `footer`: Footer information

### Modifying Navigation
1. The navigation menu is in `src/components/Header.tsx`
2. Update the links array to add/remove pages

## Performance and Analytics

### Vercel Analytics
- Analytics are automatically enabled
- View statistics in your Vercel dashboard
- Tracks page views and performance metrics

### Speed Insights
- Monitors website performance
- Provides real-user performance data
- Access insights through Vercel dashboard

## Troubleshooting

### Common Issues
1. If images don't appear:
   - Check file paths are correct
   - Verify image files exist in the correct folders
   - Make sure file names match exactly (case-sensitive)

2. If pages don't update:
   - Clear your browser cache
   - Restart the development server
   - Check for syntax errors in your MDX files

### Need Help?
- Check the [Next.js documentation](https://nextjs.org/docs)
- Review MDX syntax at [MDX documentation](https://mdxjs.com/)
- Visit [Vercel's help center](https://vercel.com/help)

## Best Practices

### Images
- Optimize images before uploading
- Use descriptive file names
- Keep image sizes reasonable (under 500KB if possible)

### Content
- Use clear, descriptive titles
- Include relevant meta descriptions
- Keep URLs simple and meaningful
- Update content regularly

### Development
- Always test changes locally first
- Commit changes regularly
- Back up your content
- Keep dependencies updated

Remember to regularly update your website with fresh content and monitor its performance through the Vercel dashboard. This will help maintain an engaging and well-performing portfolio website.