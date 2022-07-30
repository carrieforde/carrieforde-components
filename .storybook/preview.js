import "../src/styles/theme.css";
import "../src/styles/global.css";
import "../src/styles/light.css";
// import "../src/styles/dark.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
