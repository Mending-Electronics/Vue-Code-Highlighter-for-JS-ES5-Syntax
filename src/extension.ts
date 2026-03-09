import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    console.log('Vue Highlighter for JS ES5 Syntax extension is now active!');

    // Apply language-specific configuration for Vue files
    const vueConfig = vscode.workspace.getConfiguration('[vue-withoutbuildtools]');
    
    // Disable word-based suggestions for Vue files only
    vueConfig.update('editor.suggest.showWords', false, vscode.ConfigurationTarget.Workspace);
    
    // Enable tab completion for Vue files only
    vueConfig.update('editor.tabCompletion', 'on', vscode.ConfigurationTarget.Workspace);
    
    // Show notification to user about the changes
    vscode.window.showInformationMessage(
        'Vue Highlighter: Snippet suggestions optimized for Vue files! Type "div" and press Tab to insert <div></div>.',
        'Dismiss'
    );
}

export function deactivate() {
    console.log('Vue Highlighter for JS ES5 Syntax extension is now deactivated.');
}
