1. 安装 flow-bin 对应 flow版本
2. 安装 babel-preset for Flow
```js
npm install flow-bin@0.67.1 babel-preset-flow --save-dev
```
3. 配置.babelrc
{
  "presets": [
    "react-native",
    "flow"
  ]
}
4. 安装 vscode-flow-ide
![img](./assets/image1.png)

5. 配置

```js
{
  "workbench.iconTheme": "vscode-icons",
  "window.zoomLevel": 0,
  "java.errors.incompleteClasspath.severity": "ignore",
  "javascript.implicitProjectConfig.experimentalDecorators": true,
  "files.associations": {
    "*.css": "postcss",
  },
  "beautify.language": {
    "js": {
      "type": [
        "javascript",
        "json"
      ],
      "filename": [
        ".jshintrc",
        ".jsbeautifyrc"
      ],
      "ext": [
        "js",
        "json",
      ]
      // ^^ to set extensions to be beautified using the javascript beautifier
    },
    "css": [
      "css",
      "scss",
      "postcss"
    ],
    "html": [
      "htm",
      "html"
    ]
    // ^^ providing just an array sets the VS Code file type
  },
  "beautify.config": {
    "brace_style": "collapse,preserve-inline",
    "end_with_newline": true,
    "indent_size": 2,
    "indent_char": " ",
    "css": {
      "indent_size": 2
    }
  },
  "beautify.ignore": ["*.js"],
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  },
  "javascript.validate.enable": false,
  "eslint.autoFixOnSave": true,
  "editor.tabSize": 2,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "html",
    "jsx",
    "vue",
    {
      "language": "html",
      "autoFix": true
    }
  ],
  "flow.pathToFlow":"${workspaceRoot}/node_modules/.bin/flow"
}

```
  