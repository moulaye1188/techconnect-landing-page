# TechConnect Landing Page

Landing page professionnelle pour attirer des partenaires vers la plateforme TechConnect CEDEAO.

## 🚀 Démarrage rapide

```bash
# Installation des dépendances
npm install

# Développement local
npm run dev

# Build de production
npm run build

# Prévisualiser le build
npm run preview
```

## 🌍 Déploiement

Ce projet est configuré pour le déploiement automatique sur GitHub Pages via GitHub Actions.

### Configuration GitHub Pages

1. Créez un nouveau repository sur GitHub
2. Poussez ce code vers le repository
3. Activez GitHub Pages dans les paramètres du repository :
   - Source : GitHub Actions
   - La page sera disponible à l'adresse : `https://[username].github.io/[repository-name]`

### Workflow automatique

Le workflow `.github/workflows/deploy.yml` se déclenche automatiquement à chaque push sur la branche `main` et :
1. Installe les dépendances
2. Build le projet
3. Déploie sur GitHub Pages

## 🎯 Fonctionnalités

- **Design responsive** : Compatible mobile, tablette et desktop
- **Performance optimisée** : Bundle optimisé avec Vite
- **SEO friendly** : Structure HTML sémantique
- **Conversion focus** : Call-to-actions optimisés pour les partenaires

## 🛠️ Technologies utilisées

- **React 18** + **TypeScript**
- **Vite** pour le build
- **Tailwind CSS** pour le styling
- **Heroicons** pour les icônes
- **GitHub Actions** pour le déploiement

## 📧 Contact partenaires

La page redirige vers : `partenaires@techconnect-cedeao.com`

---

**Note**: Ce projet est complètement isolé du projet principal TechConnect pour éviter tout conflit ou impact sur l'application principale.