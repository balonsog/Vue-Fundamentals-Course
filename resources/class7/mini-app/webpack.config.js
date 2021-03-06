module.exports = {
  "output": {
    "filename": "[name].pack.js"
  },
  "entry": {
    "index": "./index"
  },
  "resolve": {
    "alias": {
      "vue": 'vue/dist/vue.js'
    }
  },

  "module": {
    "rules": [
      {
        "use": {
          "loader": "vue-loader",
          "options": {
            "presets": [
              "babel-preset-env",
              "babel-preset-react"
            ]
          }
        },
        "exclude": /node_modules/,
        "test": /\.js$/
      }
    ]
  }
};