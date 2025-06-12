import { BaseLayout } from "@/components/layout";
import { NotFoundLayout } from "@/components/layout";
import { themeConfig } from "@/components/theme-config";
import { MolCraftsDocThemeProvider } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import * as React from "react";
import { createRoot } from "react-dom/client";

const NotFoundPage = () => {
  return (
    <MolCraftsDocThemeProvider>
      <BaseLayout config={themeConfig}>
        <NotFoundLayout>
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
        </NotFoundLayout>
      </BaseLayout>
    </MolCraftsDocThemeProvider>
  );
};

const container = document.getElementById("404-root");
if (container) {
  const root = createRoot(container);
  root.render(<NotFoundPage />);
}
