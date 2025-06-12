import { DocTheme } from "../DocumentationLayout";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { useTheme } from "../theme-provider";

interface DocsFooterProps {
  theme: DocTheme;
}

export const DocsFooter: React.FC<DocsFooterProps> = ({ theme }) => {

  const theme = useTheme();
  const currentYear = new Date().getFullYear();
  const title = theme.charAt(0).toUpperCase() + theme.slice(1);

  return (
    <footer className={`mt-16 border-t ${styles.border} py-6 px-4`}>
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <p className="text-sm text-muted-foreground">
              © {currentYear} <span className={styles.accent}>{title}</span>. All rights reserved.
            </p>
          </div>
          
          <div>
            <nav>
              <ul className="flex flex-col md:flex-row gap-4">
                {theme !== "molpy" && (
                  <li>
                    <motion.a 
                      href="/docs/molpy" 
                      className={`text-sm font-medium text-muted-foreground ${styles.link}`}
                      whileHover={{ x: 5 }}
                    >
                      MolPy Documentation
                    </motion.a>
                  </li>
                )}
                {theme !== "molpot" && (
                  <li>
                    <motion.a 
                      href="/docs/molpot" 
                      className={`text-sm font-medium text-muted-foreground ${styles.link}`}
                      whileHover={{ x: 5 }}
                    >
                      MolPot Documentation
                    </motion.a>
                  </li>
                )}
                {theme !== "molvis" && (
                  <li>
                    <motion.a 
                      href="/docs/molvis" 
                      className={`text-sm font-medium text-muted-foreground ${styles.link}`}
                      whileHover={{ x: 5 }}
                    >
                      MolVis Documentation
                    </motion.a>
                  </li>
                )}
                <li>
                  <motion.a
                    href="https://github.com/MolCrafts"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-sm font-medium text-muted-foreground ${styles.link} inline-flex items-center`}
                    whileHover={{ x: 5 }}
                  >
                    GitHub
                    <GitHubLogoIcon className="ml-1 w-4 h-4" />
                  </motion.a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}; 