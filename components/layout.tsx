import React, { ReactNode } from "react";

interface DocumentationLayoutProps {
  children: ReactNode;
  config: DocTheme;
}

export const DocumentationLayout: React.FC<DocumentationLayoutProps> = ({ 
  children,
  config
}) => {
  return (

      <div className="flex gap-8">
        <DocSidebar
          theme="molvis"
          sections={sections}
          activeSectionId={activeSection}
          onSectionClick={handleSectionClick}
        />
        
        <div className="flex-1">
          <DocSection theme="molvis" id="introduction" title="Introduction">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <DocCard theme="molvis" title="What is MolVis?">
                Content placeholder
              </DocCard>
              <DocCard theme="molvis" title="Key Features">
                Content placeholder
              </DocCard>
            </div>
            
            <div className="mt-6 flex gap-4">
              <DocButton theme="molvis">Get Started</DocButton>
              <DocButton theme="molvis" variant="outline">View on GitHub</DocButton>
            </div>
          </DocSection>
          
          <DocSection theme="molvis" id="getting-started" title="Getting Started">
            Content placeholder
          </DocSection>
          
          <DocSection theme="molvis" id="installation" title="Installation">
            Content placeholder
          </DocSection>
          
          <DocSection theme="molvis" id="visualization-tools" title="Visualization Tools">
            Content placeholder
          </DocSection>
          
          <DocSection theme="molvis" id="advanced-features" title="Advanced Features">
            Content placeholder
          </DocSection>
          
          <DocSection theme="molvis" id="examples" title="Examples">
            Content placeholder
          </DocSection>
        </div>
      </div>


  );
}; 