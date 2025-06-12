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
  activeSectionId,
  onSectionClick,
}) => {
  return (
    <div className="w-64 pr-4">
      <nav className="sticky top-20">
        <ul className="space-y-1">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                onClick={() => onSectionClick(section.id)}
                className={`block px-4 py-2 rounded-md transition-colors ${
                  activeSectionId === section.id
                    ? styles.active
                    : `text-gray-600 dark:text-gray-300 ${styles.hover}`
                }`}
              >
                {section.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
