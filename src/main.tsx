import { BaseLayout, DocumentationLayout } from "@/components/layout";
import { themeConfig } from "@/components/theme-config";
import { MolCraftsDocThemeProvider } from "@/components/theme-provider";
import * as React from "react";
import { createRoot } from "react-dom/client";

const sections = [
  { id: "introduction", title: "Introduction" },
  { id: "installation", title: "Installation" },
  { id: "usage", title: "Usage" },
];

export const MainPage = () => {
  return (
    <MolCraftsDocThemeProvider>
      <BaseLayout config={themeConfig}>
        <DocumentationLayout theme="molvis" sections={sections}>
          <section id="introduction" className="space-y-2">
            <h2>Introduction</h2>
            <p>Placeholder text for the introduction section.</p>
          </section>
          <section id="installation" className="space-y-2">
            <h2>Installation</h2>
            <p>Steps on how to install the package.</p>
          </section>
          <section id="usage" className="space-y-2">
            <h2>Usage</h2>
            <p>Examples of how to use the library in your project.</p>
          </section>
        </DocumentationLayout>
      </BaseLayout>
    </MolCraftsDocThemeProvider>
  );
};

const root = createRoot(document.getElementById("main-root"));

if (root) {
  root.render(<MainPage />);
}
