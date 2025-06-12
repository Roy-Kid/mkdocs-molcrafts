import type React from "react";
interface DocSidebarProps {
  styles: {
    active: string;
    hover: string;
  };
  sections: {
    title: string;
    id: string;
  }[];
  activeSectionId: string;
  onSectionClick: (id: string) => void;
}

export const DocSidebar: React.FC<DocSidebarProps> = ({
  styles,
  sections,
}) => {
  return (
    <div className="w-64 pr-4">
      <nav className="sticky top-20">
        <ul className="space-y-1">
          {sections.map((section) => (
            <li key={section.id}>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
