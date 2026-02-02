# UK Sponsorship Filter

[![Netlify Status](https://api.netlify.com/api/v1/badges/YOUR-SITE-ID/deploy-status)](https://app.netlify.com/sites/YOUR-SITE-NAME/deploys)

A modern web application to filter and search through UK Worker and Temporary Worker sponsorship data.

## 🌐 Live Demo

**[Try it now →](#)** *(Link will be available after deployment)*

## ✨ Features

- 📤 **Drag & Drop Upload** - Simply upload the UK sponsorship CSV file
- 🔍 **Smart Filtering** - Search by city, company keyword, or both
- ⚡ **Instant Results** - Client-side processing for lightning-fast searches
- 💾 **Export to CSV** - Download your filtered results
- 📱 **Fully Responsive** - Works perfectly on desktop, tablet, and mobile
- 🎨 **Modern Design** - Beautiful glassmorphism UI with smooth animations
- 🔒 **Privacy First** - All processing happens in your browser, no data uploaded

## 🚀 Quick Start

1. Visit the live demo
2. Upload the UK sponsorship CSV file (download from [UK Government](https://www.gov.uk/government/publications/register-of-licensed-sponsors-workers))
3. Use the filters to search:
   - **By City**: Find all sponsors in a specific location
   - **By Keyword**: Search company names (e.g., "Tech", "Digital")
   - **Combined**: Filter by both city and keyword
4. Export your results as CSV

## 📋 How It Works

This is a fully **client-side web application** - all data processing happens in your browser:

1. Upload the official UK sponsorship CSV file
2. The app parses it using PapaParse
3. Filter companies by city and/or keyword
4. Export filtered results

**No backend, no database, no data collection** - your data stays private!

## 🛠️ Tech Stack

- **HTML5** - Semantic structure
- **CSS3** - Modern glassmorphism design with animations
- **Vanilla JavaScript** - No frameworks, pure performance
- **PapaParse** - CSV parsing library
- **Netlify** - Hosting and deployment

## 📦 Local Development

Want to run it locally?

```bash
# Clone the repository
git clone https://github.com/YOUR-USERNAME/UKCO.git
cd UKCO

# Open with a local server (Python)
python -m http.server 8000

# Or use any other local server
# Then visit http://localhost:8000
```

## 🚀 Deploy Your Own

This app is ready to deploy on **Netlify**:

### Quick Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/Goutamchandnani/UKCO)

### Manual Deploy

1. **Fork this repository** on GitHub
2. **Connect to Netlify:**
   - Go to [app.netlify.com](https://app.netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Choose GitHub and select your forked repository
   - Click "Deploy site"
3. **Done!** Your app is live in ~30 seconds

No build configuration needed - it's a static site!

For detailed instructions, see [NETLIFY_DEPLOY.md](NETLIFY_DEPLOY.md).


## 📁 Project Structure

```
UKCO/
├── index.html          # Main HTML structure
├── app.js             # Application logic
├── styles.css         # Styling and animations
├── netlify.toml       # Netlify configuration
├── DEPLOYMENT.md      # Detailed deployment guide
└── README.md          # This file
```

## 🎯 Use Cases

- **Job Seekers**: Find companies offering sponsorship in your desired location
- **Recruiters**: Identify sponsors in specific industries or regions
- **Researchers**: Analyze sponsorship patterns across the UK
- **Students**: Discover companies that sponsor international workers

## 📊 Data Source

The app uses official UK government data:
- **Source**: [UK Government - Register of Licensed Sponsors](https://www.gov.uk/government/publications/register-of-licensed-sponsors-workers)
- **Updated**: Regularly by the UK Home Office
- **Format**: CSV file with company details

## 🔒 Privacy & Security

- ✅ **No data collection** - We don't store or track anything
- ✅ **Client-side only** - All processing in your browser
- ✅ **No cookies** - No tracking or analytics
- ✅ **HTTPS enabled** - Secure connection via Netlify
- ✅ **Open source** - Fully transparent code

## 🤝 Contributing

Contributions are welcome! Feel free to:

- Report bugs
- Suggest features
- Submit pull requests
- Improve documentation

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- UK Home Office for providing the sponsorship data
- PapaParse for the excellent CSV parsing library
- Netlify for free hosting

## 📞 Support

Having issues? 
- Check the [Deployment Guide](DEPLOYMENT.md)
- Open an issue on GitHub
- Review the [official data source](https://www.gov.uk/government/publications/register-of-licensed-sponsors-workers)

---

**Made with ❤️ for job seekers and researchers**
