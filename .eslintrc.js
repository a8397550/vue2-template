const NODE_ENV = process.env.NODE_ENV;

module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:vue/essential"
  ],
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "modules": true
    }
  },
  "plugins": [
    "vue"
  ],
  "rules": {
    "no-console": NODE_ENV === "production" ? 2 : 1,
    "no-debugger": NODE_ENV === "production" ? 2 : 1,
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "vue/multi-word-component-names": "off"
  }
};
