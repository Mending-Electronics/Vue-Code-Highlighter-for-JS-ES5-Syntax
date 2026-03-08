# Vue (WithoutBuildTools) Syntax Extension

**Author:** Alexandre JALLET | https://github.com/Mending-Electronics

---

## 📖 Overview

This extension provides syntax highlighting for **Vue Single File Components (.vue) without build tools**.  
It treats `.vue` files as **JavaScript** files with embedded HTML in `template: \`...\`` literals, enabling:

- Full JavaScript syntax highlighting and snippets (outside template literals)
- HTML syntax highlighting inside `template: \`...\`` strings
- Vue-specific bindings (`v-*`, `:*`, `@*`) with JavaScript expression highlighting in attribute values
- Vue interpolations (`{{ ... }}` and `[[ ... ]]`) with JavaScript highlighting

---

## 🎯 Use Cases

### ✅ Recommended
- Vue components written **without build tools** (e.g., via CDN, simple script tags)
- Projects mixing Vue with Jinja/Django/other templating engines where `{{ }}` conflicts
- Single-file components loaded directly in browsers without compilation

### ❌ Not Recommended
- Projects using Vue CLI, Vite, or other build tools (use Volar instead)
- Complex Vue 3 setups requiring TypeScript, props validation, or advanced language features

---

## 🚀 Features

| Feature | Status | Details |
|---------|--------|---------|
| JavaScript highlighting | ✅ Full | All JS features, snippets, and IntelliSense |
| HTML in `template: \`...\`` | ✅ Full | Standard HTML tags and attributes |
| Vue bindings (`v-*`, `:*`, `@*`) | ✅ Partial | Attribute names recognized, JS expressions highlighted |
| Interpolations `{{ ... }}` | ✅ Full | JavaScript expressions inside moustache |
| Interpolations `[[ ... ]]` | ✅ Full | Alternative delimiter (useful with Jinja) |
| Language icon | ✅ | Vue icon in file explorer and tabs |
| Auto-completion | ✅ | JavaScript snippets globally; HTML inside templates |

---

## 📁 File Structure

```
.vscode/
├── launch.json          # Extension development launcher
src/
├── html/                # Original HTML language mode (VSCode source)
│   └── syntaxes/
│       └── html.tmLanguage.json
├── javascript/          # Original JavaScript language mode (VSCode source)
│   └── syntaxes/
│       └── JavaScript.tmLanguage.json
syntaxes/
├── vue-html.tmLanguage.json           # Vue-aware HTML grammar
├── vue-withoutbuildtools.template-injection.tmLanguage.json  # Template literal injection
package.json                           # Extension manifest
language-configuration.json           # Vue language configuration
vue.svg                                # Vue icon (favicon)
```

---

## ⚙️ How It Works

### Language Registration
- `.vue` files are registered as **JavaScript** (`source.js`) to get full JS features
- A **template literal injection** detects `template: \`...\`` and switches to HTML mode inside

### Grammar Chain
1. **JavaScript** (`source.js`) → handles everything outside template literals
2. **Injection** (`vue-withoutbuildtools.template-injection`) → detects `template: \`...\``
3. **Vue HTML** (`text.html.vue-withoutbuildtools`) → HTML with Vue-specific rules:
   - `v-*`, `:*`, `@*` attributes → JS in values
   - `{{ ... }}` and `[[ ... ]]` → JS expressions

### Key Files
- `package.json`: Registers language, grammars, and icon
- `syntaxes/vue-html.tmLanguage.json`: HTML grammar with Vue injections
- `syntaxes/vue-withoutbuildtools.template-injection.tmLanguage.json`: Template literal detection

---

## 🛠️ Installation

### From VSIX (Recommended)
1. Build the extension (see Build section below)
2. Install the `.vsix` file:
   ```bash
   code --install-extension vue-withoutbuildtools-*.vsix
   ```

### Development Install
1. Clone this repository
2. Open in VSCode/Windsurf
3. Press **F5** to launch Extension Development Host
4. Test with `.vue` files

---

## 🔧 Development

### Prerequisites
- VSCode or Windsurf
- Node.js (for packaging, not required for development)

### Building the Extension
```bash
# Install vsce (VSCode Extension CLI)
npm install -g vsce

# Package into .vsix
vsce package
```

### Testing
1. Open the project in VSCode/Windsurf
2. Press **F5** → opens new Extension Development Host window
3. Create/open `.vue` files to test syntax highlighting
4. Use `Developer: Inspect Editor Tokens and Scopes` to debug scopes

### Debugging Syntax Issues
If Vue bindings aren't highlighting:
1. Open a `.vue` file
2. Use `Developer: Inspect Editor Tokens and Scopes`
3. Check if tokens have `text.html.vue-withoutbuildtools` scope
4. Verify `package.json` grammar paths are correct
5. Reload Extension Host after changes

---

## 📝 Example Usage

### Basic Vue Component
```javascript
const MyComponent = {
  template: `
    <div class="container">
      <h1>{{ title }}</h1>
      <button @click="increment">Count: {{ count }}</button>
      <div :class="{ active: isActive }">
        <p v-if="showDetails">Details here</p>
      </div>
    </div>
  `,
  data() {
    return {
      title: 'Hello Vue!',
      count: 0,
      isActive: false,
      showDetails: true
    }
  },
  methods: {
    increment() {
      this.count++
    }
  }
}
```

### With Jinja/Python Integration
```javascript
// Using [[ ]] to avoid Jinja {{ }} conflicts
const Component = {
  template: `
    <div>
      <h1>[[ pageTitle ]]</h1>
      <p v-if="user.isLoggedIn">Welcome, [[ user.name ]]!</p>
      <div :class="['card', { highlighted: isFeatured }]">
        Content here
      </div>
    </div>
  `,
  data() {
    return {
      pageTitle: 'Dashboard',
      user: { isLoggedIn: true, name: 'Alex' },
      isFeatured: false
    }
  }
}
```

---

## ⚠️ Limitations & Known Issues

### Current Limitations
- **Vue bindings**: Attribute names are recognized but may not have distinct highlighting from regular HTML attributes
- **No TypeScript support**: This is JavaScript-only
- **No props validation**: No type checking or prop definitions
- **Limited to template literals**: Only works with `template: \`...\`` syntax

### Known Issues
- Some complex Vue expressions in attributes may not highlight perfectly
- Interpolations outside template literals are not supported
- No IntelliSense for Vue-specific APIs

### Scope Conflicts
When using with Jinja/Django:
- Use `[[ ... ]]` interpolations to avoid `{{ }}` conflicts
- Standard `{{ ... }}` still works for pure Vue projects

---

## 🔄 Updates & Maintenance

### Version History
- **0.0.1**: Initial release with basic JS + HTML highlighting

### Contributing
1. Fork the repository
2. Create a feature branch
3. Test with various `.vue` files
4. Submit a pull request

### Reporting Issues
When reporting syntax highlighting issues:
1. Provide a minimal `.vue` example
2. Include output from `Developer: Inspect Editor Tokens and Scopes`
3. Specify VSCode/Windsurf version

---

## 📄 License

This extension uses source grammars from VSCode's built-in JavaScript and HTML languages under their original licenses.

---

## 🙏 Acknowledgments

- **VSCode Team**: For the original JavaScript and HTML TextMate grammars
- **Vue.js Team**: For the amazing Vue.js framework
- **TextMate Community**: For the grammar format and conventions

---

## 📞 Contact

- **Author**: Alexandre JALLET
- **GitHub**: https://github.com/Mending-Electronics
- **Issues**: Report via GitHub Issues on the repository

---

## 🔮 Future Roadmap

### Potential Enhancements
- [ ] Enhanced Vue binding highlighting
- [ ] Support for `<script setup>` syntax
- [ ] Basic component IntelliSense
- [ ] CSS highlighting in `<style>` blocks
- [ ] Snippets for common Vue patterns

### Compatibility
- **VSCode**: 1.50.0+
- **Windsurf**: Supported
- **Vue.js**: 2.x and 3.x (without build tools)

---

*This extension is designed for developers who prefer simplicity over build tool complexity. For full-featured Vue development, consider using Volar with a proper build setup.*
