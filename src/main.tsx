import { BaseLayout } from "@/components/base-layout";
import { DocumentationLayout } from "@/components/layout";
import { ThemeDataProvider } from "@/components/theme-config";
import { MolCraftsDocThemeProvider } from "@/components/theme-provider";
import * as React from "react";
import { createRoot } from "react-dom/client";

export const MainPage = () => {
  return (
    <MolCraftsDocThemeProvider>
      <ThemeDataProvider>
        <BaseLayout>
          <DocumentationLayout />
        </BaseLayout>
      </ThemeDataProvider>
    </MolCraftsDocThemeProvider>
  );
};

const root = createRoot(document.getElementById("main-root"));

if (root) {
  root.render(<MainPage />);
}
