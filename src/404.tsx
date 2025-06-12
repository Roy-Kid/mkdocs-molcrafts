import * as React from "react";
import { createRoot } from "react-dom/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ThemeProvider } from "@/components/theme-provider";
import App from "./App";
import { NotFoundLayout } from "@/layouts/NotFoundLayout";

const NotFoundPage = () => (
  <NotFoundLayout>
    <div className="flex items-center justify-center py-20">
      <Card className="max-w-md w-full shadow-lg">
        <CardHeader>
          <CardTitle className="text-4xl font-bold text-center text-destructive">
            404
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-4">
          <p className="text-lg text-center text-muted-foreground">
            Oops! The page you are looking for does not exist.
          </p>
          <Button asChild>
            <a href="/">Go back home</a>
          </Button>
        </CardContent>
      </Card>
    </div>
  </NotFoundLayout>
);

const container = document.getElementById("react-root");
if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <ThemeProvider>
        <App>
          <NotFoundPage />
        </App>
      </ThemeProvider>
    </React.StrictMode>,
  );
}
