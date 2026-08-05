# Portfolio — Oyougou Daniel Israël

Portfolio immersif React pour **Oyougou Daniel Israël**, Développeur Full-Stack Junior spécialisé Backend, IA & Automatisation.

## Stack
- **React 18** + **Vite** (port 5000)
- **Framer Motion** — animations scroll & hover
- **react-icons** — icônes officielles tech (Si, Hi, Tb, Md)
- **Space Grotesk** + **JetBrains Mono** (Google Fonts)

## Structure
```
portfolio/
├── src/
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   ├── hooks/useInView.js
│   └── components/
│       ├── Nav.jsx      — navigation fixe avec scroll-spy
│       ├── Hero.jsx     — hero plein écran + canvas particules
│       ├── About.jsx    — profil + photo
│       ├── Skills.jsx   — grille compétences avec icônes officielles
│       ├── Projects.jsx — cartes projets interactives (expand)
│       └── Contact.jsx  — liens de contact
├── public/
│   └── avatar.jpg       — photo de profil
└── vite.config.js
```

## Lancer
```bash
cd portfolio && npm run dev
```
Le workflow **CV Preview** démarre automatiquement.

## User preferences
- Langue : Français
- Thème : fond sombre (#080e14) + accent or (#ffcc00)
- Font : Space Grotesk + JetBrains Mono
