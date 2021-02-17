import { createCss } from "@stitches/react";
import { mixins } from "stitches-mixins";

export const { css, getCssString, styled, global, theme } = createCss({
  theme: {
    colors: {
      // Palette
      white: "white",
      black: "black",
      gray200: "#F1F5F9",
      gray400: "#94A3B8",
      turquoise: "turquoise",
      webSafeBlue: "blue",
      // Semantic
      background: "$gray200",
      text: "$black",
      link: "$black",
      divider: "$gray400",
      buttonText: "$white",
      buttonBackground: "$black",
      buttonBorder: "$black",
    },
    space: {
      1: "0.25rem",
      2: "0.5rem",
      3: "0.75rem",
      4: "1rem",
      6: "1.5rem",
      8: "2rem",
    },
    sizes: { container: "64rem" },
    fonts: {
      system:
        'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      sfMono: "SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace",
      comicSans: "Comic Sans MS, Chalkboard SE, sans-serif",
      serif: "serif",
      body: "$system",
      heading: "$system",
      code: "$sfMono",
    },
    borderStyles: {
      button: "solid",
    },
    fontSizes: {
      base: "1rem",
    },
    lineHeights: {
      base: "1.5",
    },
  },
  utils: { include: mixins() },
});

export const retroThemeClassName = "theme-retro";
export const retroTheme = theme(retroThemeClassName, {
  colors: {
    background: "$black",
    text: "$white",
    link: "$turquoise",
    divider: "$white",
    buttonText: "$webSafeBlue",
    buttonBackground: "$gray200",
    buttonBorder: "$black",
  },
  borderStyles: {
    button: "ridge",
  },
  fonts: {
    body: "$serif",
    heading: "$comicSans",
  },
});

export const globalStyles = global({
  "*, *::before, *::after": { boxSizing: "border-box" },
  "body, h1, h2, h3, h4, p, figure, blockquote, dl, dd, ul, ol": {
    margin: "0",
  },
  'ul[role="list"], ol[role="list"]': { listStyle: "none" },
  body: {
    include: "minHeightScreen",
    backgroundColor: "$background",
    fontSize: "$base",
    lineHeight: "$base",
    fontFamily: "$body",
    color: "$text",
    overflowY: "scroll",
    WebkitTextSizeAdjust: "100%",
    msTextSizeAdjust: "100%",
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    [`.${retroThemeClassName} &`]: {
      backgroundImage: 'url("/assets/image/retro.gif")',
    },
  },
  code: {
    fontFamily: "$mono",
  },
  "img, picture": { display: "block", maxWidth: "100%" },
  "input, button, textarea, select": { font: "inherit" },
});
