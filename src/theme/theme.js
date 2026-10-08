export const THEME_STORAGE_KEY = "kwai-theme";

export const THEMES = [
  { id: "green", label: "Verde" },
  { id: "desert", label: "Desierto" },
  { id: "cold", label: "Frío" },
];

export const DEFAULT_THEME = "green";

export function isValidTheme(theme) {
  return THEMES.some((item) => item.id === theme);
}

export function getStoredTheme() {
  const saved = localStorage.getItem(THEME_STORAGE_KEY);
  return isValidTheme(saved) ? saved : DEFAULT_THEME;
}

export function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
}
