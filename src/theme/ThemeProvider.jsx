import { createContext, useContext, useEffect, useState } from "react";
import {
  THEME_STORAGE_KEY,
  applyTheme,
  getStoredTheme,
  isValidTheme,
} from "./theme.js";

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(getStoredTheme);

  useEffect(() => {
    applyTheme(theme);
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  function setTheme(nextTheme) {
    if (!isValidTheme(nextTheme)) {
      return;
    }
    setThemeState(nextTheme);
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme debe usarse dentro de ThemeProvider");
  }

  return context;
}
