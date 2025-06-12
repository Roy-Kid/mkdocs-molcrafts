import { themeConfig } from "./theme-config";

export const Footer = () => {
  return (
    <footer className="border-t py-6 text-center text-sm text-muted-foreground">
      &copy; {new Date().getFullYear()} {themeConfig.site_name}
    </footer>
  );
};
