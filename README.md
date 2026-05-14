# SMATO Global Resource
### One Company. Infinite Capabilities.

> A professional, high-converting corporate website for a diversified global conglomerate operating across trade, logistics, technology, marketing, and more.

**Live Site:** [smatoglobalresource.netlify.app](https://smatoglobalresource.netlify.app/)

---

## Overview

The SMATO Global Resource website is a fully responsive, multi-page corporate web presence built to communicate the brand's scale, credibility, and service offering to a global audience. It features smooth animations, a structured service architecture, and an integrated contact system.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Markup | Semantic HTML5 |
| Styling | Hand-crafted CSS3 with Custom Properties |
| Behaviour | Vanilla JavaScript (ES6+) |
| Fonts | Google Fonts — Cormorant Garamond, Outfit, JetBrains Mono |
| Icons | Lucide Icons (SVG) |
| Hosting | Netlify |

---

## Project Structure

```
smato-global-resource/
│
├── index.html          # Homepage
├── about.html          # Company Story & Leadership
├── divisions.html      # Business Divisions
├── services.html       # Services, Pricing Philosophy & FAQ
├── contact.html        # Enquiry Form & Global Office Locations
│
├── assets/
│   ├── css/
│   │   ├── main.css          # Design Tokens & Global Styles
│   │   ├── components.css    # UI Components (Navbar, Buttons, Cards)
│   │   ├── animations.css    # Keyframes & Scroll Reveal Effects
│   │   └── responsive.css    # Breakpoints & Adaptive Layouts
│   │
│   └── js/
│       ├── main.js           # Module Initializer
│       ├── navbar.js         # Navigation Behaviour
│       ├── animations.js     # Intersection Observer & Counter Animations
│       └── contact.js        # Form Validation & Submission Handling
│
└── README.md
```

---

## Running Locally

**Prerequisites:** Any modern browser and a local HTTP server.

```bash
# Option 1 — VS Code Live Server
# Open the project in VS Code and launch index.html with the Live Server extension.

# Option 2 — Node.js serve
npx serve .
```

Then open `http://localhost:3000` (or the port shown in your terminal).

---

## Customisation

### Design Tokens
All colours, typography, and spacing variables are defined in `assets/css/main.css` under the `:root` selector.

```css
:root {
  --color-gold: #c9a84c;       /* Primary accent */
  --font-display: 'Cormorant Garamond', serif;  /* Heading font */
}
```

### Adding a New Division
1. Open `divisions.html`.
2. Duplicate an existing division block.
3. Update the heading, description, bullet points, and icon.

---

## Deployment

Hosted on **Netlify**. The repository is connected for continuous deployment — pushing to the main branch triggers an automatic build and release.

---

## Development

**Developed by [Prime Motion Studio]()**
All design, markup, styling, and scripting was produced by Prime Motion Studio on behalf of SMATO Global Resource.

---

## License

© 2026 SMATO Global Resource. All Rights Reserved.

This codebase is proprietary. No part of this project may be reproduced, distributed, or transmitted in any form without the express written permission of the client.
