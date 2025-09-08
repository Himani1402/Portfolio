# Portfolio Website Deployment Guide

## Free Hosting Options

### 1. GitHub Pages (Recommended)
1. Create a new repository on GitHub
2. Upload all your portfolio files to the repository
3. Go to repository Settings > Pages
4. Select "Deploy from a branch" and choose "main"
5. Your site will be available at: `https://yourusername.github.io/repository-name`

### 2. Netlify
1. Go to [netlify.com](https://netlify.com)
2. Sign up for a free account
3. Drag and drop your portfolio folder to deploy
4. Get a custom domain like: `yourname.netlify.app`

### 3. Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign up and connect your GitHub account
3. Import your repository
4. Deploy automatically with custom domain

### 4. Firebase Hosting
1. Install Firebase CLI: `npm install -g firebase-tools`
2. Run `firebase login`
3. Run `firebase init hosting`
4. Run `firebase deploy`

## Quick GitHub Pages Setup

1. **Create GitHub Repository:**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to repository Settings
   - Scroll to "Pages" section
   - Source: Deploy from a branch
   - Branch: main
   - Folder: / (root)

3. **Your portfolio will be live at:**
   `https://yourusername.github.io/portfolio`

## Custom Domain (Optional)
- Purchase a domain from Namecheap, GoDaddy, etc.
- Point DNS to your hosting provider
- Configure SSL certificate

## Performance Tips
- Optimize images before uploading
- Enable compression on your hosting platform
- Use a CDN for faster loading
- Test on mobile devices

## Maintenance
- Keep your portfolio updated with new projects
- Regularly update dependencies
- Monitor website performance
- Backup your code regularly

