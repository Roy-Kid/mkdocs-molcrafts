import { BaseLayout } from "@/components/base-layout";
import { DocumentationLayout } from "@/components/layout";
import { themeConfig } from "@/components/theme-config";
import { MolCraftsDocThemeProvider } from "@/components/theme-provider";
import * as React from "react";
import { createRoot } from "react-dom/client";

export const MainPage = () => {
  return (
    <MolCraftsDocThemeProvider>
      <BaseLayout config={themeConfig}>
        <DocumentationLayout />
      </BaseLayout>
    </MolCraftsDocThemeProvider>
  );
};

const root = createRoot(document.getElementById("main-root"));

if (root) {
  root.render(<MainPage />);
}
