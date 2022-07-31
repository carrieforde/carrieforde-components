export type Color =
  | "default"
  | "primary"
  | "secondary"
  | "info"
  | "success"
  | "warning"
  | "error";

export type ColorValues = {
  main: string;
  contrast: string;
  light: string;
  dark: string;
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
};

export type Palette = Record<Color, ColorValues>;

export type Theme = {
  borderRadius: string;
  htmlFontSize: number;
  fontSize: (size: number) => string;
  spacing: (size: number) => string;
  palette: Palette;
  zIndex?: Record<string, number>;
  fonts: {
    body: string;
    [x: string]: string;
  };
};

export const baseFontSize = 18;
export const baseSpacingSize = 8;
export const baseDarkTextColor = "#334e68";
export const baseLightTextColor = "#fff";

export function pxToRem(size: number, baseSize: number = baseFontSize) {
  return `${size / baseSize}rem`;
}

export function pxToEm(size: number, parentSize: number) {
  return `${size / parentSize}em`;
}

export function getSpacing(size: number, baseSize: number = baseSpacingSize) {
  return `${size * baseSize}px`;
}

export type CustomThemeArgs = {
  htmlFontSize?: number;
  spacingSize?: number;
  defaultDarkTextColor?: string;
  defaultLightTextColor?: string;
};

export const defaultThemeArgs = {
  htmlFontSize: baseFontSize,
  spacingSize: baseSpacingSize,
  defaultDarkTextColor: baseDarkTextColor,
  defaultLightTextColor: baseLightTextColor,
};

export function buildCustomTheme(args?: CustomThemeArgs): Theme {
  const {
    htmlFontSize,
    spacingSize,
    defaultDarkTextColor,
    defaultLightTextColor,
  } = { ...defaultThemeArgs, ...args };

  return {
    borderRadius: "4px",
    htmlFontSize,
    fontSize: (size: number) => pxToRem(size, htmlFontSize),
    spacing: (size: number) => getSpacing(size, spacingSize),
    fonts: {
      body: "'Libre Franklin', sans-serif",
      monospace: "'IBM Plex Mono', monospace",
    },
    palette: {
      default: {
        main: defaultDarkTextColor,
        contrast: defaultLightTextColor,
        light: "#f0f4f8",
        dark: "#243b53",
        50: "#f0f4f8",
        100: "#d9e2ec",
        200: "#bcccdc",
        300: "#9fb3c8",
        400: "#829ab1",
        500: "#627d98",
        600: "#486581",
        700: "#334e68",
        800: "#243b53",
        900: "#102a43",
      },
      primary: {
        main: "#3525e6",
        contrast: defaultLightTextColor,
        light: "#e6e6ff",
        dark: "#1d0ebe",
        50: "#e6e6ff",
        100: "#c4c6ff",
        200: "#a2a5fc",
        300: "#8888fc",
        400: "#7069fa",
        500: "#5d55fa",
        600: "#4d3df7",
        700: "#3525e6",
        800: "#1d0ebe",
        900: "#0c008c",
      },
      secondary: {
        main: "#27ab83",
        contrast: defaultLightTextColor,
        light: "#effcf6",
        dark: "#014d40",
        50: "#effcf6",
        100: "#c6f7e2",
        200: "#8eedc7",
        300: "#65d6ad",
        400: "#3ebd93",
        500: "#27ab83",
        600: "#199473",
        700: "#147d64",
        800: "#0c6b58",
        900: "#014d40",
      },
      info: {
        main: "#1992d4",
        contrast: defaultLightTextColor,
        light: "#e3f8ff",
        dark: "#035388",
        50: "#e3f8ff",
        100: "#b3ecff",
        200: "#81defd",
        300: "#5ed0fa",
        400: "#40c3f7",
        500: "#2bb0ed",
        600: "#1992d4",
        700: "#127fbf",
        800: "#0b69a3",
        900: "#035388",
      },
      error: {
        main: "#ab091e",
        contrast: defaultLightTextColor,
        light: "#ffe3e3",
        dark: "#610316",
        50: "#ffe3e3",
        100: "#ffbdbd",
        200: "#ff9b9b",
        300: "#f86a6a",
        400: "#ef4e4e",
        500: "#e12d39",
        600: "#cf1124",
        700: "#ab091e",
        800: "#8a041a",
        900: "#610316",
      },
      warning: {
        main: "#f7c948",
        contrast: defaultDarkTextColor,
        light: "#fffbea",
        dark: "#8d2b0b",
        50: "#fffbea",
        100: "#fff3c4",
        200: "#fce588",
        300: "#fadb5f",
        400: "#f7c948",
        500: "#f0b429",
        600: "#de911d",
        700: "#cb6e17",
        800: "#b44d12",
        900: "#8d2b0b",
      },
      success: {
        main: "#0c6b58",
        contrast: "#fff",
        light: "#effcf6",
        dark: "#014d40",
        50: "#effcf6",
        100: "#c6f7e2",
        200: "#8eedc7",
        300: "#65d6ad",
        400: "#3ebd93",
        500: "#27ab83",
        600: "#199473",
        700: "#147d64",
        800: "#0c6b58",
        900: "#014d40",
      },
    },
  };
}

export const theme = buildCustomTheme();
