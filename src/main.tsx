import { DocumentBody } from "@/components/document-body";
import { BaseLayout, DocumentationLayout } from "@/components/layout";
import { DocSidebar } from "@/components/sidebar";
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

const extractPageTOC = () => {
    const page_toc_container = document.getElementById("page-toc");
    if (page_toc_container) {
        const page_toc = page_toc_container.innerHTML;
        page_toc_container.remove();
        return page_toc;
    }
}

export const MainPage = () => {

    const pageContent = extractPageContent();
    const pageTOC = extractPageTOC();

  return (
    <MolCraftsDocThemeProvider>
      <BaseLayout config={themeConfig}>
        <DocumentationLayout>
          <DocSidebar>
            {pageTOC}
          </DocSidebar>
          <DocumentBody>
            {pageContent}
          </DocumentBody>
        </DocumentationLayout>
      </BaseLayout>
    </MolCraftsDocThemeProvider>
  );
};

const root = createRoot(document.getElementById("react-root"));

if (root) {
  root.render(<MainPage />);
}
