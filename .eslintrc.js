module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  extends: ["plugin:vue/essential", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-unused-vars": 'off',
    "semi": ['warn', 'always'],
    "quotes": ['warn', 'single'],
  }
};
