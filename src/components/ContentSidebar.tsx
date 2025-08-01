import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ChevronRight, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Section {
  id: string;
  title: string;
  subsections?: {
    id: string;
    title: string;
  }[];
}

interface ContentSidebarProps {
  sections: Section[];
  activeSection?: string;
  onSectionClick?: (sectionId: string) => void;
}

export const ContentSidebar: React.FC<ContentSidebarProps> = ({
  sections,
  activeSection,
  onSectionClick
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());

  const toggleSection = (sectionId: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId);
    } else {
      newExpanded.add(sectionId);
    }
    setExpandedSections(newExpanded);
  };

  const handleSectionClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    onSectionClick?.(sectionId);
    if (window.innerWidth < 1024) {
      setIsOpen(false);
    }
  };

  // Auto-close on mobile when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const sidebar = document.getElementById('content-sidebar');
      const toggle = document.getElementById('sidebar-toggle');
      if (
        isOpen &&
        sidebar &&
        !sidebar.contains(event.target as Node) &&
        toggle &&
        !toggle.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <>
      {/* Mobile Toggle Button */}
      <Button
        id="sidebar-toggle"
        variant="outline"
        size="sm"
        className="fixed top-24 left-4 z-50 lg:hidden bg-background/90 backdrop-blur-sm"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        <span className="ml-2">Contents</span>
      </Button>

      {/* Sidebar */}
      <div
        id="content-sidebar"
        className={cn(
          "fixed lg:sticky top-24 left-0 h-[calc(100vh-6rem)] w-80 bg-gradient-card backdrop-blur-xl border-r border-glass-border z-40 transition-transform duration-300 overflow-y-auto",
          "lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4 font-montserrat">
            Table of Contents
          </h3>
          
          <nav className="space-y-2">
            {sections.map((section) => (
              <div key={section.id}>
                <button
                  onClick={() => {
                    handleSectionClick(section.id);
                    if (section.subsections) {
                      toggleSection(section.id);
                    }
                  }}
                  className={cn(
                    "w-full text-left px-3 py-2 text-sm rounded-lg transition-colors duration-200 flex items-center justify-between",
                    "hover:bg-background/50",
                    activeSection === section.id
                      ? "bg-brand-primary/10 text-brand-primary font-medium"
                      : "text-foreground-muted"
                  )}
                >
                  <span className="font-montserrat">{section.title}</span>
                  {section.subsections && (
                    <ChevronRight
                      className={cn(
                        "w-4 h-4 transition-transform duration-200",
                        expandedSections.has(section.id) ? "rotate-90" : ""
                      )}
                    />
                  )}
                </button>
                
                {section.subsections && expandedSections.has(section.id) && (
                  <div className="ml-4 mt-1 space-y-1">
                    {section.subsections.map((subsection) => (
                      <button
                        key={subsection.id}
                        onClick={() => handleSectionClick(subsection.id)}
                        className={cn(
                          "w-full text-left px-3 py-1 text-xs rounded-lg transition-colors duration-200",
                          "hover:bg-background/50",
                          activeSection === subsection.id
                            ? "bg-brand-primary/10 text-brand-primary font-medium"
                            : "text-foreground-muted"
                        )}
                      >
                        <span className="font-montserrat">{subsection.title}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};