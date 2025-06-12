import { useEffect, useRef, useState } from "react";
import { BaseLayout } from "./BaseLayout";

export const DocumentLayout = () => {
  const [content, setContent] = useState("");
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = document.getElementById("page-content");
    if (el) {
      setContent(el.innerHTML);
      el.remove();
    }
  }, []);

  useEffect(() => {
    if (ref.current) {
      ref.current.innerHTML = content;
    }
  }, [content]);

  return (
    <BaseLayout>
      <article ref={ref} className="prose mx-auto w-full" />
    </BaseLayout>
  );
};
