import * as React from "react";
import { retroTheme } from "../stitches.config";

const ThemeContext = React.createContext(null);

const themes = [
  // note: theme-base doesn't actually apply anything,
  //       it's just a placeholder for the default theme
  "theme-base",
  retroTheme,
];

export const useTheme = () => React.useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [themeState, setThemeState] = React.useState<any>(themes[0]);

  const toggle = () => {
    const i = themes.indexOf(themeState);
    const current = themes[i];
    const next = themes[(i + 1) % themes.length];

    document.documentElement.classList.remove(current);
    document.documentElement.classList.add(next);
    setThemeState(next);
  };

  return (
    <ThemeContext.Provider value={{ toggle: toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};
