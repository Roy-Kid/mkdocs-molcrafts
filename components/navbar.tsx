import React from "react";
import { motion } from "framer-motion";
import { DocTheme } from "../DocumentationLayout";
import { ModeToggle } from "./mode-toggle";
import { LogoIcon } from "./Icons";

interface DocsNavbarProps {
  site_name: string;
}

export const DocsNavbar: React.FC<DocsNavbarProps> = ({ site_name }) => {

  const title = site_name.charAt(0).toUpperCase() + theme.slice(1);

  const site_name = themeConfig.site_name;

  const routeList: RouteProps[] = [];
    if (themeConfig.nav) {
      // nav is array of [{Home: 'index.md'}, ]
      for (const route of themeConfig.nav) {
        const [key, value] = Object.entries(route)[0]
        routeList.push({
          href: value,
          label: key,
        });
      }
    }

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`sticky top-0 z-10 bg-background/80 backdrop-blur-md border-b ${styles.border} py-3`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-6">
          {/* <motion.a
            href="/"
            className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
            whileHover={{ x: -5 }}
          >
            <ChevronLeft size={20} />
            <span className="font-medium">Home</span>
          </motion.a> */}

          <div className="flex items-center space-x-3">
            <LogoIcon />
            <span className={`font-bold text-lg ${styles.accent}`}>{title} Documentation</span>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex space-x-3">
            {routeList.map((route) => (
              <motion.a
              key={route.href}
              href={route.href}
              className={`text-sm font-medium ${
                theme === route.label.toLowerCase()
                ? styles.accent
                : "text-muted-foreground"
              } ${styles.hover} transition-colors`}
              whileHover={{ y: -2 }}
              >
              {route.label}
              </motion.a>
            ))}
          </div>
          <ModeToggle />
        </div>
      </div>
    </motion.header>
  );
}; 
