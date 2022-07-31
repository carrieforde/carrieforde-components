import { Global, ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import React, { FC, ReactNode } from "react";
import { theme } from "../../theme";

export type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => (
  <EmotionThemeProvider theme={theme}>
    <Global
      styles={{
        html: {
          fontSize: theme.htmlFontSize,
        },

        body: {
          backgroundColor: "#fff",
          color: theme.palette.default.main,
          fontFamily: theme.fonts.body,
          lineHeight: 1.7,
          wordWrap: "break-word",
        },

        "pre, code": {
          fontFamily: theme.fonts.monospace,
          fontSize: theme.fontSize(12),
        },
      }}
    />
    {children}
  </EmotionThemeProvider>
);
