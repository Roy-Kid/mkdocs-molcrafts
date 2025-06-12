import * as React from "react";
import { createRoot } from 'react-dom/client';
import { MolCraftsDocThemeProvider } from "@/components/theme-provider"
import { DocumentationLayout } from "@/components/layout"
import { themeConfig } from "@/components/theme-config"

export const MainPage = () => {

    return (
        <MolCraftsDocThemeProvider config={themeConfig}>
            <DocumentationLayout />
        </MolCraftsDocThemeProvider>
    )
}

const root = createRoot(document.getElementById("main-root"));

if (root) {
    root.render(<MainPage />);
}
