# SMATO GLOBAL RESOURCE — One Company. Infinite Capabilities.

A professional, high-converting website for a diversified global conglomerate. Built with semantic HTML5, hand-crafted CSS3, and vanilla JavaScript.

## Project Structure
```
smato-global-resource/
│
├── index.html        # Homepage
├── about.html        # Company Story & Leadership
├── divisions.html    # Detailed Business Sectors
├── services.html     # Service Breakdown & FAQ
├── contact.html      # Inquiry & Locations
│
├── assets/
│   ├── css/
│   │   ├── main.css          # Design Tokens & Global Styles
│   │   ├── components.css    # UI Kit (Navbar, Buttons, Cards)
│   │   ├── animations.css    # Keyframes & Scroll Reveals
│   │   └── responsive.css    # Adaptive Breakpoints
│   │
│   ├── js/
│   │   ├── main.js           # Module Initializer
│   │   ├── navbar.js         # Navigation Behavior
│   │   ├── animations.js     # Intersection Observer & Counters
│   │   └── contact.js        # Form Validation & Handling
│
└── README.md
```

## How to Run Locally
1. Clone or download the project files.
2. Open the project folder in **VS Code**.
3. Use the **Live Server** extension to launch `index.html`.
4. Alternatively, use any local HTTP server: `npx serve .`

## Customization
### Colors & Typography
All design tokens are managed via CSS Custom Properties in `assets/css/main.css` under the `:root` selector.
- Update `--color-gold` to change the primary accent.
- Update `--font-display` to swap titles (default: Cormorant Garamond).

### Adding/Editing Divisions
To add a new business sector:
1. Open `divisions.html`.
2. Duplicate a division `grid` block.
3. Update the description and SVG icon.

## Deployment
- **Netlify/Vercel**: Simply drag and drop the root folder into the dashboard.
- **GitHub Pages**: Push the files to a repository and enable GitHub Pages in settings.

## Credits
- **Typography**: Google Fonts (Cormorant Garamond, Outfit, JetBrains Mono).
- **Icons**: Lucide Icons (SVG references).
- **Development**: AI Studio Build.
