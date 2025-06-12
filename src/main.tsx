import { pageContent, toc } from "@/components/page-data";
const sections = toc.map((item) => ({ id: item.id, title: item.title }));
          {/* biome-ignore lint/security/noDangerouslySetInnerHtml: page content comes from mkdocs */}
          <div dangerouslySetInnerHTML={{ __html: pageContent }} />
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
