import type { ReactNode } from "react";
import { BaseLayout } from "./BaseLayout";

export const NotFoundLayout = ({ children }: { children?: ReactNode }) => {
  return <BaseLayout>{children}</BaseLayout>;
};
