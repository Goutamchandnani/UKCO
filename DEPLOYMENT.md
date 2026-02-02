# UK Sponsorship Filter - Deployment Guide

This guide will help you deploy the UK Sponsorship Filter web application to various hosting platforms.

## 🚀 Quick Deploy Options

### Option 1: Vercel (Recommended)

**Fastest deployment - 2 minutes!**

#### Method A: Using Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   cd C:\Users\Goutam\OneDrive\Desktop\UKCO
   vercel
   ```

3. **Follow the prompts:**
   - Set up and deploy? `Y`
   - Which scope? (Select your account)
   - Link to existing project? `N`
   - Project name? `ukco-sponsorship` (or your choice)
   - In which directory is your code located? `./`

4. **Your app is live!** 🎉
   - You'll get a URL like: `https://ukco-sponsorship.vercel.app`

#### Method B: Using Vercel Web Interface

1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login with GitHub
3. Click "Add New Project"
4. Import your Git repository
5. Click "Deploy"
6. Done! Your app is live in ~30 seconds

---

### Option 2: Netlify

#### Method A: Drag & Drop (Easiest)

1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag your project folder onto the page
3. Your app is live instantly!

#### Method B: Using Netlify CLI

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Deploy:**
   ```bash
   cd C:\Users\Goutam\OneDrive\Desktop\UKCO
   netlify deploy
   ```

3. **For production:**
   ```bash
   netlify deploy --prod
   ```

---

### Option 3: GitHub Pages

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/ukco-sponsorship.git
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository settings
   - Navigate to "Pages"
   - Source: "GitHub Actions"
   - The workflow will automatically deploy on push

3. **Your app will be live at:**
   `https://YOUR_USERNAME.github.io/ukco-sponsorship/`

---

## 📋 Pre-Deployment Checklist

- [x] Web app files ready (index.html, app.js, styles.css)
- [x] Deployment configs created (vercel.json, netlify.toml)
- [x] .gitignore updated
- [ ] Choose deployment platform
- [ ] Deploy!

---

## 🔧 Configuration Files

The following configuration files have been created:

- **`vercel.json`** - Vercel deployment configuration
- **`netlify.toml`** - Netlify deployment configuration
- **`.github/workflows/deploy.yml`** - GitHub Pages automation

---

## 🌐 Custom Domain (Optional)

After deployment, you can add a custom domain:

### Vercel
1. Go to your project settings
2. Click "Domains"
3. Add your domain
4. Update DNS records as instructed

### Netlify
1. Go to "Domain settings"
2. Click "Add custom domain"
3. Follow DNS configuration steps

### GitHub Pages
1. Add a `CNAME` file with your domain
2. Update DNS records to point to GitHub Pages

---

## 🔒 Security Features

All deployment configurations include:
- ✅ HTTPS by default
- ✅ Security headers (XSS protection, frame options)
- ✅ Content type sniffing protection
- ✅ Proper caching headers

---

## 📊 Post-Deployment

After deployment, test these features:
1. Upload a CSV file
2. Search by city
3. Search by keyword
4. Combined search
5. Export results to CSV
6. Test on mobile devices

---

## 🆘 Troubleshooting

### Issue: CSV file upload not working
- **Solution:** Check browser console for errors. Ensure PapaParse CDN is loading.

### Issue: Styles not loading
- **Solution:** Clear browser cache. Check if CSS file path is correct.

### Issue: Deployment failed
- **Solution:** Check that all files are committed. Verify deployment logs.

---

## 💡 Tips

- **Free Tier Limits:** All recommended platforms offer generous free tiers
- **Updates:** Just push to Git or re-run deploy command to update
- **Analytics:** Add Google Analytics or Vercel Analytics for usage tracking
- **Performance:** All platforms include global CDN for fast loading

---

## 📞 Support

For deployment issues:
- **Vercel:** [vercel.com/docs](https://vercel.com/docs)
- **Netlify:** [docs.netlify.com](https://docs.netlify.com)
- **GitHub Pages:** [docs.github.com/pages](https://docs.github.com/en/pages)
