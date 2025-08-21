import React from 'react';

interface StickyScrollLayoutProps {
  stickyContent: React.ReactNode;
  scrollingContent: React.ReactNode;
  stickyClassName?: string;
  scrollingClassName?: string;
  containerClassName?: string;
  stickyPosition?: string;
}

const StickyScrollLayout: React.FC<StickyScrollLayoutProps> = ({
  stickyContent,
  scrollingContent,
  stickyClassName = '',
  scrollingClassName = '',
  containerClassName = '',
  stickyPosition = '100px'
}) => {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start ${containerClassName}`}>
      {/* Sticky Column */}
      <div 
        className={`lg:sticky ${stickyClassName}`}
        style={{ top: stickyPosition }}
      >
        {stickyContent}
      </div>

      {/* Scrolling Column */}
      <div className={`space-y-12 ${scrollingClassName}`}>
        {scrollingContent}
      </div>
    </div>
  );
};

export default StickyScrollLayout;