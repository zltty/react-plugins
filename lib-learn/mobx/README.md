1. react
```js
npm i --save-dev babel-plugin-transform-decorators-legacy
```

2. 配置
```js
.bablerc配置
{
  "presets": ["react-native"],
  "plugins": ["transform-decorators-legacy"]
}

2.rn
{
  "presets": [
    "babel-preset-react-native-stage-0/decorator-support"
  ]
}
```