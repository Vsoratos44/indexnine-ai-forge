import React, { useEffect } from 'react';

interface PipedriveFormProps {
  className?: string;
  formUrl?: string;
}

const PipedriveForm: React.FC<PipedriveFormProps> = ({ 
  className = '', 
  formUrl = "https://webforms.pipedrive.com/f/6iJKYx7GXkP1sfQnzIq6XAmhH7GDCWRXAfrcML1rxQOZ05Wu8LPXWKkbls6Ch4p3Dt"
}) => {
  useEffect(() => {
    // Load Pipedrive script if not already loaded
    const existingScript = document.querySelector('script[src="https://webforms.pipedrive.com/f/loader"]');
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://webforms.pipedrive.com/f/loader';
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div className={className}>
      <div 
        className="pipedriveWebForms" 
        data-pd-webforms={formUrl}
      />
    </div>
  );
};

export default PipedriveForm;