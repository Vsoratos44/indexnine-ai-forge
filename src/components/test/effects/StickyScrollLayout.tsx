import React from "react";

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
  stickyClassName = "",
  scrollingClassName = "",
  containerClassName = "",
  stickyPosition = "120px",
}) => {
  return (
    <div
      className={`grid md:grid-cols-3 gap-12 items-start ${containerClassName}`}
    >
      {/* Sticky Column */}
      <div
        className={`col-span-1 lg:sticky ${stickyClassName}`}
        style={{ top: stickyPosition }}
      >
        {stickyContent}
      </div>

      {/* Scrolling Column */}
      <div className={`col-span-2 space-y-12 ${scrollingClassName}`}>
        {scrollingContent}
      </div>
    </div>
  );
};

export default StickyScrollLayout;
