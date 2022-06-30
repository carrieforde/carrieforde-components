module.exports = {
  extends: ["react-app", "react-app/jest", "plugin:storybook/recommended"],
  rules: {
    "no-console": ["log", { allow: ["error", "warn"] }],
  },
};
