import { THEMES } from "../theme/theme.js";
import { useTheme } from "../theme/ThemeProvider.jsx";
import "../styles/ThemeSwitcher.css";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="theme-switcher" role="group" aria-label="Tema visual">
      {THEMES.map((item) => (
        <button
          key={item.id}
          type="button"
          className={
            item.id === theme
              ? "theme-switcher__button is-active"
              : "theme-switcher__button"
          }
          data-swatch={item.id}
          aria-label={item.label}
          aria-pressed={item.id === theme}
          onClick={() => setTheme(item.id)}
        />
      ))}
    </div>
  );
}
