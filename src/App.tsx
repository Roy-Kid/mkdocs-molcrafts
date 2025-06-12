import type { ReactNode } from "react";
import favicon from "@/assets/favicon.ico";
import { Helmet } from "react-helmet";
import "./App.css";
import { BaseLayout } from "@/layouts/BaseLayout";

const DefaultFavIcon = () => (
  <Helmet>
    <link rel="icon" href={favicon} />
  </Helmet>
);

const App = ({ children }: { children?: ReactNode }) => {
  return (
    <>
      <DefaultFavIcon />
      <BaseLayout>{children}</BaseLayout>
    </>
  );
};

export default App;
