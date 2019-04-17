module.exports = {
  extends: ["airbnb-base", "prettier", "plugin:jest/recommended"],
  env: {
    node: true,
    es6: true
  },
  parserOptions: {
    ecmaVersion: 9,
    sourceType: "module"
  },
  plugins: ["jest"]
};
