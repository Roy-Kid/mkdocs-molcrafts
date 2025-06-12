import { BaseLayout, DocumentationLayout } from "@/components/layout";
import { themeConfig } from "@/components/theme-config";
import { MolCraftsDocThemeProvider } from "@/components/theme-provider";
import * as React from "react";
import { createRoot } from "react-dom/client";

const sections = [
  { id: "introduction", title: "Introduction" },
  { id: "installation", title: "Installation" },
  { id: "usage", title: "Usage" },
  { id: "configuration", title: "Configuration" },
  { id: "api", title: "API" },
  { id: "faq", title: "FAQ" },
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
          <section id="configuration" className="space-y-2">
            <h2>Configuration</h2>
            <p>Guidance on configuring various options.</p>
          </section>
          <section id="api" className="space-y-2">
            <h2>API</h2>
            <p>Summary of public API endpoints.</p>
          </section>
          <section id="faq" className="space-y-2">
            <h2>FAQ</h2>
            <p>Frequently asked questions and their answers.</p>
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
