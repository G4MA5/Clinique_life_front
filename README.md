# 🏥 Clinique Life — Plateforme Web Frontend

> Application web moderne pour la **Clinique Life** (Abidjan, Côte d'Ivoire). Présentation de la clinique, prise de rendez-vous en ligne, services médicaux, actualités et espace d'administration.

---

## 🚀 Technologies Utilisées

* **Framework :** [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
* **Build Tool :** [Vite 6](https://vitejs.dev/)
* **Styles :** [Tailwind CSS 3](https://tailwindcss.com/) + PostCSS
* **Animations :** [Framer Motion](https://www.framer.com/motion/)
* **Icônes :** [Lucide React](https://lucide.dev/), React Feather, React Icons
* **Routage :** [React Router DOM v7](https://reactrouter.com/)

---

## ⚡ Optimisations de Performance

Une refonte complète des performances réseau et d'affichage a été effectuée :
* **Images compressées (-84%)** : Plus de **65 Mo économisés** sur les images du site, ramenant le poids des visuels principaux de ~4 Mo à moins de 200 Ko chacun.
* **Hero Section allégée** : Retrait du flux vidéo lourd en arrière-plan au profit d'un carrousel d'images fluide et optimisé.
* **Code Splitting (Vite manualChunks)** : Découpage intelligent du bundle JavaScript (`vendor-react`, `vendor-motion`, `vendor-icons`, `index`) pour accélérer le téléchargement et optimiser le cache navigateur.

Consultez le document dédié [`OPTIMISATIONS.md`](./OPTIMISATIONS.md) pour le détail complet avant/après.

---

## 📁 Structure du Projet

```text
Clinique-life-main/
├── public/              # Fichiers statiques publics
├── src/
│   ├── assets/          # Images, logos et médias optimisés
│   ├── components/      # Composants réutilisables
│   │   ├── accueils/    # Composants de la page d'accueil (Hero, Services, Cartes...)
│   │   ├── animations/  # Wrappers d'animation (FadeIn...)
│   │   ├── articles/    # Vues de lecture d'articles de blog
│   │   ├── blogs/       # Composants de la page blog
│   │   ├── contacts/    # Formulaires et infos de contact
│   │   ├── propos/      # Sections de la page À propos
│   │   ├── services/    # Cartes et modales des services médicaux
│   │   ├── specialiste/ # Équipe médicale et spécialistes
│   │   └── ui/          # Composants graphiques atomiques
│   ├── data/            # Données locales (slides carrousel, etc.)
│   ├── pages/           # Pages publiques (Accueil, Rdv, Contact, Blog...)
│   │   └── Admin/       # Espace d'administration complet
│   ├── structures/      # Layouts (StructurePublique, StructureAdmin)
│   ├── App.tsx          # Configuration des routes
│   └── main.tsx         # Point d'entrée de l'application
├── OPTIMISATIONS.md     # Journal d'audit et d'optimisation
├── package.json         # Dépendances et scripts
└── vite.config.ts       # Configuration Vite & Rollup chunks
```

---

## 🛠️ Installation et Démarrage Local

### Prérequis
* [Node.js](https://nodejs.org/) (version 18+ recommandée)
* npm, pnpm ou yarn

### Installation
```bash
# Cloner le dépôt
git clone https://github.com/G4MA5/Clinique_life_front.git

# Se rendre dans le dossier
cd Clinique_life_front

# Installer les dépendances
npm install
```

### Lancement du serveur de développement
```bash
npm run dev
```
L'application sera accessible sur [http://localhost:5173/](http://localhost:5173/).

### Compilation pour la production
```bash
npm run build
```
Les fichiers prêts pour le déploiement seront générés dans le dossier `dist/`.

---

## 🌐 Déploiement en Ligne
Ce projet est prêt pour un déploiement instantané sur :
* **Vercel**
* **Netlify**
* **Hostinger / Serveur Nginx**

---

## 📄 Licence & Droits
© 2025-2026 Clinique Life. Tous droits réservés.
