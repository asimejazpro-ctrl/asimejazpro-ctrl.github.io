# Asim Ejaz - Professional Multi-Page Portfolio

## 🎉 Complete Website Package

A professional, modern multi-page portfolio website for business development services.

### 📄 Pages Included:
1. **index.html** - Home page with hero, stats, featured services
2. **about.html** - About me, journey, values, skills
3. **services.html** - All 21 iTechtics services categorized
4. **portfolio.html** - Project showcase with testimonials
5. **contact.html** - Contact form and information

### ✨ Features:
- ✅ Advanced cursor effects with hover detection
- ✅ Dark/Light mode toggle (saves preference)
- ✅ Smooth page transitions & animations
- ✅ Scroll progress bar
- ✅ Loading screen
- ✅ Counter animations
- ✅ Progress bar animations
- ✅ Fully responsive design
- ✅ SEO optimized
- ✅ Working contact form

### 🎨 Technologies:
- HTML5
- CSS3 (Advanced animations, flexbox, grid)
- Vanilla JavaScript (ES6+)
- Tabler Icons

### 🚀 How to Use:

#### Option 1: GitHub Pages (Recommended - FREE)
1. Go to https://github.com/asimejazpro-ctrl/asimejazpro-ctrl.github.io
2. Delete old index.html
3. Upload ALL files from this folder
4. Wait 2-3 minutes
5. Visit: https://asimejazpro-ctrl.github.io/

#### Option 2: Any Web Hosting
1. Upload all files to your hosting via FTP
2. Make sure index.html is in root directory
3. Done!

### 📁 File Structure:
```
multipage-portfolio/
├── index.html          (Home page)
├── about.html          (About page)
├── services.html       (Services page)
├── portfolio.html      (Portfolio page)
├── contact.html        (Contact page)
├── styles.css          (All CSS)
├── script.js           (All JavaScript)
└── README.md           (This file)
```

### 🎯 Contact Information:
All pages include your correct contact details:
- Phone: +92 319 0249219
- Email: asimejaz.pro@gmail.com
- LinkedIn: https://www.linkedin.com/in/asimejazitechtics/
- WhatsApp: https://wa.me/923190249219
- Location: Lahore, Pakistan
- Company: iTechtics.org

### 🔧 Customization:

#### Change Colors:
Edit the `:root` variables in `styles.css`:
```css
:root {
    --accent: #3b82f6;  /* Change this for different color */
    --gradient-1: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

#### Update Content:
Simply edit the HTML files - all content is in plain HTML, easy to modify.

#### Add/Remove Services:
Edit `services.html` - copy/paste service cards as needed.

### 💡 Making Contact Form Work (Email Integration):

The form is currently set up to show success messages. To make it actually send emails:

**Option 1: EmailJS (FREE - Recommended)**
1. Sign up at https://www.emailjs.com
2. Get your service ID, template ID, and public key
3. Add this code before closing `</body>` in contact.html:
```html
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
<script>
    emailjs.init("YOUR_PUBLIC_KEY");
</script>
```
4. Update the form submission in `script.js`

**Option 2: Formspree (FREE)**
1. Sign up at https://formspree.io
2. Get your form endpoint
3. Update form action in contact.html:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### 🌙 Dark Mode:
- Toggle button in navbar
- Automatically saves user preference
- Works across all pages

### 📱 Mobile Responsive:
Fully responsive on all devices:
- Desktop (1400px+)
- Laptop (1024px - 1399px)
- Tablet (768px - 1023px)
- Mobile (< 768px)

### ⚡ Performance:
- Fast loading
- Optimized animations
- Smooth scrolling
- Clean code

### 🎨 Services Included (21 Total):

**Web Development (6):**
- WordPress Development
- Full-Stack Development
- E-Commerce Solutions
- Custom Theme Development
- Custom Plugin Development
- API Development & Integration

**Mobile Apps (3):**
- iOS App Development
- Android App Development
- Cross-Platform Apps

**Digital Marketing (4):**
- SEO Services
- Social Media Marketing
- PPC Advertising
- Content Writing

**Design & Branding (4):**
- Graphic Design
- UI/UX Design
- Brand Identity Design
- Logo Design

**Business Solutions (4):**
- CRM Integration
- IT Service Management
- Website Maintenance
- Web Hosting

### 🐛 Troubleshooting:

**Dark mode not saving:**
- Make sure browser allows localStorage

**Animations not working:**
- Check if JavaScript is enabled
- Clear browser cache

**Form not submitting:**
- Follow email integration steps above
- Check browser console for errors

### 📞 Support:
For any questions or customization help:
- Email: asimejaz.pro@gmail.com
- WhatsApp: +92 319 0249219

---

**Created with ❤️ by Claude AI**
**Powered by iTechtics**

© 2026 Asim Ejaz. All rights reserved.
