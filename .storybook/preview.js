import "../src/styles/theme.css";
import "../src/styles/global.css";
import "../src/styles/light.css";
// import "../src/styles/dark.css";
import React from "react";
import { ThemeProvider } from "@emotion/react";
import { buildTheme } from "../src/theme";

const theme = buildTheme();

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
