import { BaseLayout, DocumentationLayout } from "@/components/layout";
import { themeConfig } from "@/components/theme-config";
import { MolCraftsDocThemeProvider } from "@/components/theme-provider";
import * as React from "react";
import { createRoot } from "react-dom/client";

const extractPageContent = () => {
    const page_content_container = document.getElementById("page-content");
    if (page_content_container) {
        const page_content = page_content_container.innerHTML;
        page_content_container.remove();
        return page_content;
    }
}

export const MainPage = () => {

    const pageContent = extractPageContent();
    console.log("Page content extracted:", pageContent);
    console.log("TOC:", window.mkdocs_page_toc);
    const sections = window.mkdocs_page_toc.map((item) => ({
      id: item.id,
      title: item.title,
    }));

  return (
    <MolCraftsDocThemeProvider>
      <BaseLayout config={themeConfig}>
        <DocumentationLayout theme="molvis" sections={sections}>
          {pageContent}
        </DocumentationLayout>
      </BaseLayout>
    </MolCraftsDocThemeProvider>
  );
};

const root = createRoot(document.getElementById("react-root"));

if (root) {
  root.render(<MainPage />);
}
