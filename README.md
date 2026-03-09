# Vue Code Highlighter for JS ES5 Syntax

**Author:** Alexandre JALLET | https://github.com/Mending-Electronics

---

## 🎯 **Coloration Syntaxique pour Fichiers *.vue en JavaScript ES5 Sans Build Tools**

Cette extension fournit la coloration syntaxique pour les fichiers **`.vue`** contenant du **JavaScript ES5 pur**, directement interprétable par le navigateur, **sans Runtime JS**, **sans Build Tools** et **sans Bundler JS**.

---

## 📋 **Comparaison des Approches**

### ❌ **Fichier *.vue avec Runtime + Build Tools** (Extension Vue Officielle)

```vue
<template>
  <div class="hello">
    <p>{{ message }}</p>
    <button @click="increment">
      Compteur : {{ count }}
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Props
defineProps({
  message: {
    type: String,
    required: true
  }
})

// State
const count = ref(0)

// Méthodes
function increment() {
  count.value++
}
</script>

<style scoped>
.hello {
  margin-top: 20px;
}
button {
  padding: 8px 12px;
  cursor: pointer;
}
</style>
```

### ✅ **Fichier *.vue 100% JavaScript ES5** (Cette Extension)

```javascript
const HelloView = {
  props: {
    message: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      count: 0
    }
  },

  methods: {
    increment() {
      this.count++
    }
  },

  template: `
    <div class="hello" style="margin-top: 20px;">
      <p>{{ message }}</p>
      <button 
        @click="increment"
        style="padding: 8px 12px; cursor: pointer;"
      >
        Compteur : {{ count }}
      </button>
    </div>
  `
}

app.component("hello-view", HelloView)
```

---

## 🚀 **Fonctionnalités de l'Extension**

### ✅ **Ce que l'extension permet :**

- **Coloriser le code** et utiliser les snippets JavaScript par défaut
- **Utiliser les snippets Vue personnalisés** pour JavaScript ES5
- **Coloriser le code et utiliser les snippets HTML** dans les éléments `template: \`\``
- **Coloriser les syntaxes moustache `{{}}` et `[[]]`** dans les éléments `template: \`\`` pour les rendus Vue, DTL/Jinja*

> ***Note** : DTL/Jinja utilise déjà la syntaxe moustache `{{}}`, donc il est possible de déclarer à Vue l'utilisation de délimiteurs `[[]]` pour éviter les conflits.*

---

## 📝 **Snippets Vue Personnalisés Disponibles**

| Snippet | Préfixe | Utilité |
|---------|---------|---------|
| **Vue Template** | `template` | Insère `template: \`\`` |
| **Vue Component Basic** | `vue-component` | Structure de composant Vue de base |
| **Vue Component with Props** | `vue-component-props` | Composant avec props |
| **Vue Component with Computed** | `vue-component-computed` | Composant avec propriétés calculées |
| **Vue Component with Watch** | `vue-component-watch` | Composant avec watchers |
| **Vue Component Full** | `vue-component-full` | Structure complète de composant |
| **Vue App** | `vue-app` | Application Vue complète avec createApp |
| **Vue v-if** | `v-if` | Directive conditionnelle |
| **Vue v-for** | `v-for` | Directive de boucle |
| **Vue v-model** | `v-model` | Liaison de données bidirectionnelle |
| **Vue @click** | `@click` | Gestionnaire d'événement clic |
| **Vue :class** | `:class` | Liaison de classe CSS |
| **Vue interpolation** | `{{` | Interpolation Vue `{{ }}` |
| **Vue interpolation alternative** | `[[` | Interpolation alternative `[[ ]]` |
| **Vue lifecycle** | `vue-beforeCreate`, `vue-created`, `vue-beforeMount`, `vue-mounted`, `vue-beforeUpdate`, `vue-updated`, `vue-beforeDestroy`, `vue-destroyed`, `vue-activated`, `vue-deactivated`, `vue-errorCaptured` | Tous les hooks de cycle de vie Vue |
| **Vue blocks (avec préfixe vue-)** | `vue-data`, `vue-props`, `vue-methods`, `vue-computed`, `vue-watch` | Blocs complets de composants |
| **Vue blocks (préfixes courts)** | `data`, `props`, `methods`, `computed`, `watch` | Blocs complets sans préfixe |
| **Vue single items** | `vue-method`, `vue-computed-property`, `vue-watcher`, `method`, `computed-property`, `watcher` | Méthodes, propriétés calculées, watchers individuels |
| **Vue emit event** | `vue-emit` | Émission d'événement |

---

## 🚀 **Installation**

1. Installez VS Code
2. Installez l'extension *.VSIX disponible dans le dossier `build` 
3. Créez des fichiers `.vue` avec du JavaScript ES5
4. Bénéficiez automatiquement de la coloration syntaxique et des snippets

---

## 🚀 **Utilisation Rapide**

1. Créez un fichier `app.vue`
2. Tapez `vue-component` et Tab pour insérer un composant
3. Tapez `div` et Tab pour insérer `<div></div>` dans le template
4. Utilisez `[[ ]]` pour éviter les conflits avec Jinja/Django

---



## 🔧 Development

### Prerequisites
- **VSCode** (for development and testing)
- **Node.js** (version 14.0.0 or higher) - Required for packaging and building
- **npm** (comes with Node.js) - Package manager and build tools

### Installing Node.js and npm

#### Option 1: Official Installer (Recommended)
1. Download Node.js from [https://nodejs.org/](https://nodejs.org/)
2. Choose the LTS (Long Term Support) version
3. Run the installer for your operating system
4. Verify installation:
   ```bash
   node --version
   npm --version
   ```

#### Option 2: Package Manager
- **macOS (Homebrew):**
  ```bash
  brew install node
  ```
- **Ubuntu/Debian:**
  ```bash
  sudo apt update
  sudo apt install nodejs npm
  ```
- **Windows (Chocolatey):**
  ```bash
  choco install nodejs
  ```

### Building the Extension

#### Step 1: Install vsce (VSCode Extension CLI)
```bash
# Install globally
npm install -g vsce

# Or install locally in the project
npm install vsce --save-dev
```

#### Step 2: Package into VSIX
```bash
# From the project root directory
vsce package

# This creates a .vsix file: vue-js-es5-highlighter-*.vsix
```

---


## 📄 **License**

MIT License - voir fichier LICENSE pour plus de détails.
