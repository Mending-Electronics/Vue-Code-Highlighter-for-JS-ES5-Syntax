# Vue Code Highlighter - Snippet Optimization

## Problem Solved

When typing "div" in VS Code, the first suggestion was often a word-based suggestion [abc] that just returns "div", forcing users to use arrow keys to select the second option for the actual `<div></div>` snippet.

## Solution Implemented

This extension now automatically configures VS Code settings to prioritize snippets over word-based suggestions:

### Automatic Configuration

When the extension is activated, it automatically applies these settings:

1. **Disable word-based suggestions**: `editor.suggest.showWords = false`
2. **Enable tab completion**: `editor.tabCompletion = "on"`

### Manual Configuration Options

You can also configure these settings manually in VS Code:

#### Option 1 - VS Code Settings UI
1. Open Settings (Ctrl + ,)
2. Search for "Show Words"
3. Disable: Editor › Suggest: Show Words

#### Option 2 - settings.json
```json
{
  "editor.suggest.showWords": false,
  "editor.tabCompletion": "on"
}
```

## Benefits

- **Snippets appear first**: When you type "div", `<div></div>` becomes the #1 suggestion
- **Faster coding**: Use Tab to immediately insert snippets
- **Better workflow**: No more arrow key navigation to reach snippets

## How It Works

The extension includes:
- Configuration settings in `package.json`
- Automatic application of settings when activated
- User notification when settings are applied

## Development

To build the extension:
```bash
npm install
npm run compile
```

The compiled JavaScript will be output to `out/src/extension.js`.
