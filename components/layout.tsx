import type { ReactNode } from "react";
import { useState } from "react";
import { DocumentBody } from "./document-body";
import { DocsFooter } from "./footer";
import { DocsNavbar } from "./navbar";
import { DocSidebar } from "./sidebar";
import type { IThemeConfig } from "./theme-config";

}

  color?: string;
  color = "purple",
  const activeClass = `bg-${color}-800`;

          activeClass={activeClass}

interface BaseLayoutProps {
  children: ReactNode;
  config: IThemeConfig;
}

export const BaseLayout = ({ children, config }: BaseLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <DocsNavbar site_name={config.site_name} nav={config.nav} />
      <main className="flex-1 container mx-auto px-4 pt-4">{children}</main>
      <DocsFooter site_name={config.site_name} />
    </div>
  );
};
