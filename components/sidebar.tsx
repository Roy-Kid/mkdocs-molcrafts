import type React from "react";
interface DocSidebarProps {
  activeClass: string;
  activeClass,
}) => {
  return (
    <div className="w-64 pr-4">
                    ? activeClass
                    : "text-gray-600 dark:text-gray-300 hover:underline"
  );
};
