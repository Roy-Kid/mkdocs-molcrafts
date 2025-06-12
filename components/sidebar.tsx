import type React from "react";
interface DocSidebarProps {
  children: React.ReactNode;
}

export const DocSidebar: React.FC<DocSidebarProps> = ({
  children
}) => {
  return (
    <div className="w-64 pr-4">
        { children }
    </div>
  );
};
