var isDev=require('./webpack/util').isDev
module.exports ={
  //https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  // "extends": "standard",
  "plugins": [
    "react"
  ],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 6,
    "ecmaFeatures": {
      "jsx": true,
      "experimentalObjectRestSpread": true
    }
  },
  "env": {
    "browser": true,
    "node": true,
    "es6": true
    // "mocha": true,
  },
  "rules": {
    'eqeqeq': [2, 'allow-null'],
    'no-eval': 2,
    'no-debugger': isDev ? 0 : 2,
    'no-alert':isDev ? 0 : 1,
    'no-use-before-define':1,
    'no-caller':1,
    //es6/7规则
    'no-var':1
  }
}