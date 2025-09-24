import React, { useEffect, useRef } from "react";

const CareersForm = ({ className = "", formUrl }) => {
  const popcontRef = useRef(null);

  useEffect(() => {
    // Remove existing children (handles remounts in dialogs/modals)
    if (popcontRef.current) {
      popcontRef.current.innerHTML = `<div class="pipedriveWebForms" data-pd-webforms="${formUrl}"></div>`;
    }

    // Remove loader script if it already exists (to force re-run)
    const oldScript = document.querySelector(
      'script[src="https://webforms.pipedrive.com/f/loader"]'
    );
    if (oldScript) {
      oldScript.remove();
    }

    const script = document.createElement("script");
    script.src = "https://webforms.pipedrive.com/f/loader";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [formUrl]);

  return <div className={className} ref={popcontRef} />;
};

export default CareersForm;
