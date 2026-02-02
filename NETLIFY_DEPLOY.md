# 🚀 Netlify Deployment Guide - Step by Step

Follow these simple steps to deploy your UK Sponsorship Filter to Netlify via GitHub.

---

## 📋 Prerequisites

- [x] GitHub account ([Sign up free](https://github.com/signup))
- [x] Netlify account ([Sign up free](https://app.netlify.com/signup))
- [x] Git installed on your computer

---

## 🎯 Deployment Steps

### Step 1: Create GitHub Repository

1. **Go to GitHub** and create a new repository:
   - Visit: https://github.com/new
   - Repository name: `ukco-sponsorship-filter` (or your choice)
   - Description: `UK Company Sponsorship Filter - Search and filter UK sponsorship data`
   - Visibility: **Public** (recommended) or Private
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
   - Click **"Create repository"**

2. **Copy the repository URL** (you'll need this in Step 2)
   - Example: `https://github.com/YOUR-USERNAME/ukco-sponsorship-filter.git`

---

### Step 2: Push Code to GitHub

Run these commands in your terminal:

```bash
# Navigate to your project directory
cd C:\Users\Goutam\OneDrive\Desktop\UKCO

# Check current status
git status

# Add the GitHub remote (replace with YOUR repository URL)
git remote add origin https://github.com/YOUR-USERNAME/ukco-sponsorship-filter.git

# Push to GitHub
git push -u origin main
```

**If you get an error about the branch name**, try:
```bash
git branch -M main
git push -u origin main
```

---

### Step 3: Connect Netlify to GitHub

1. **Login to Netlify**: Go to https://app.netlify.com

2. **Import Project**:
   - Click **"Add new site"** → **"Import an existing project"**
   - Choose **"Deploy with GitHub"**
   - Authorize Netlify to access your GitHub account (if first time)

3. **Select Repository**:
   - Find and click on `ukco-sponsorship-filter` (or your repo name)

4. **Configure Build Settings**:
   - **Branch to deploy**: `main`
   - **Build command**: Leave empty (or use: `echo "No build needed"`)
   - **Publish directory**: `.` (current directory)
   - Click **"Deploy site"**

---

### Step 4: Wait for Deployment

- Netlify will automatically deploy your site
- This takes about **30-60 seconds**
- You'll see a live URL like: `https://random-name-123456.netlify.app`

---

### Step 5: Customize Your Site (Optional)

#### Change Site Name
1. Go to **Site settings** → **General** → **Site details**
2. Click **"Change site name"**
3. Enter your preferred name (e.g., `ukco-sponsorship`)
4. Your URL becomes: `https://ukco-sponsorship.netlify.app`

#### Add Custom Domain (Optional)
1. Go to **Domain settings**
2. Click **"Add custom domain"**
3. Follow the DNS configuration steps

---

## ✅ Verify Deployment

After deployment, test these features:

1. **Visit your live site** (use the Netlify URL)
2. **Upload a CSV file** (test with a small sample)
3. **Test search filters**:
   - Search by city
   - Search by keyword
   - Combined search
4. **Export results** to CSV
5. **Test on mobile** (open on your phone)

---

## 🔄 Future Updates

To update your deployed site:

```bash
# Make your changes to the code
# Then commit and push:

git add .
git commit -m "Your update message"
git push
```

Netlify will **automatically redeploy** within seconds! 🎉

---

## 📊 Netlify Features You Get (Free)

- ✅ **HTTPS** - Automatic SSL certificate
- ✅ **Global CDN** - Fast loading worldwide
- ✅ **Automatic deployments** - Push to deploy
- ✅ **Deploy previews** - Test before going live
- ✅ **Custom domain** - Free SSL for your domain
- ✅ **Form handling** - If you add forms later
- ✅ **Analytics** - Basic traffic stats

---

## 🎨 Update README with Live URL

After deployment, update your README.md:

1. Copy your Netlify URL
2. Edit README.md and replace `#` in the "Live Demo" section
3. Update the Netlify badge at the top:
   - Go to Netlify → Site settings → Status badges
   - Copy the markdown code
   - Replace the badge in README.md

---

## 🆘 Troubleshooting

### Issue: "Permission denied" when pushing to GitHub
**Solution**: Set up SSH keys or use HTTPS with Personal Access Token
- Guide: https://docs.github.com/en/authentication

### Issue: Build failed on Netlify
**Solution**: Check the deploy logs in Netlify dashboard. For this static site, there should be no build errors.

### Issue: Site shows 404 error
**Solution**: Verify that `index.html` is in the root directory and `netlify.toml` is configured correctly.

### Issue: CSV upload not working
**Solution**: Check browser console for errors. Ensure PapaParse CDN is accessible.

---

## 🎯 Next Steps

After successful deployment:

1. ✅ Share your live URL with users
2. ✅ Add the URL to your CV/portfolio
3. ✅ Update README with the live link
4. ✅ Consider adding Google Analytics (optional)
5. ✅ Monitor usage via Netlify dashboard

---

## 📞 Support Resources

- **Netlify Docs**: https://docs.netlify.com
- **GitHub Docs**: https://docs.github.com
- **Your Netlify Dashboard**: https://app.netlify.com

---

**Ready to deploy? Start with Step 1! 🚀**
