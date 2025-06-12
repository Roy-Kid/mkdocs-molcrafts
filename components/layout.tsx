import type { ReactNode } from "react";
import { useState } from "react";
import { DocumentBody } from "./document-body";
import { DocsFooter } from "./footer";
import { DocsNavbar } from "./navbar";
import { DocSidebar } from "./sidebar";
import type { IThemeConfig } from "./theme-config";

export type DocTheme = "molpy" | "molpot" | "molvis";

interface Section {
  title: string;
  id: string;
}

interface DocumentationLayoutProps {
  children?: ReactNode;
  theme?: DocTheme;
  sections?: Section[];
}

const themeStyles = {
  molpy: {
    active: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
    hover: "hover:bg-blue-50 dark:hover:bg-blue-900/20",
  },
  molpot: {
    active:
      "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
    hover: "hover:bg-green-50 dark:hover:bg-green-900/20",
  },
  molvis: {
    active:
      "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
    hover: "hover:bg-purple-50 dark:hover:bg-purple-900/20",
  },
};

export const DocumentationLayout = ({
  children,
  theme = "molpy",
  sections = [],
}: DocumentationLayoutProps) => {
  const [activeSectionId, setActiveSectionId] = useState(sections[0]?.id ?? "");

  return (
    <div className="flex items-start gap-8">
      {sections.length > 0 && (
        <DocSidebar
          styles={themeStyles[theme]}
          sections={sections}
          activeSectionId={activeSectionId}
          onSectionClick={setActiveSectionId}
        />
      )}
      <DocumentBody>{children}</DocumentBody>
    </div>
  );
};

export interface NotFoundLayoutProps {
  children?: ReactNode;
}

export const NotFoundLayout = ({ children }: NotFoundLayoutProps) => {
  return (
    <div className="flex items-center justify-center py-20">{children}</div>
  );
};

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
