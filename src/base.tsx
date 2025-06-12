import { ThemeProvider } from "@/components/theme-provider";
import { DocumentLayout } from "@/layouts/DocumentLayout";
import * as React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./base.css";

const container = document.getElementById("react-root");
if (!container) throw new Error("react-root element not found");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App>
        <DocumentLayout />
      </App>
    </ThemeProvider>
  </React.StrictMode>,
);
