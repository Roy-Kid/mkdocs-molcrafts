import * as React from "react";
import { createContext, useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { IThemeConfig } from "./theme-config";
import { DocsNavbar } from "./navbar";
import "../src/globals.css";

type Theme = "dark" | "light" | "system";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
  config: IThemeConfig;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  color: {
    accent: string;
    hover: string;
    border: string;
  }
};

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
  color: {
    accent: "text-blue-600 dark:text-blue-400",
    hover: "hover:text-blue-700 dark:hover:text-blue-300",
    border: "border-blue-200 dark:border-blue-800"
  }
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export const MolCraftsDocThemeProvider = ({
  children,
  defaultTheme = "dark",
  storageKey = "vite-ui-theme",
  ...props
}: ThemeProviderProps) => {
  const { config } = props;
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme,
  );
  console.log("config", config);
  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove("light", "dark");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";

      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme]);

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-background dark:bg-background"
      >
        <DocsNavbar site_name={config.site_name} />
        <div className="pt-4">
          <div className="container mx-auto px-4">
            <main>{children}</main>
          </div>
        </div>
        {/* <DocsFooter site_name={config.site_name} /> */}
      </motion.div>
    </ThemeProviderContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};
