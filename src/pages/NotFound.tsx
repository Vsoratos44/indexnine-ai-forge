import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-foreground font-montserrat">404</h1>
        <p className="text-xl text-foreground-muted mb-4 font-montserrat">Oops! Page not found</p>
        <a href="/" className="text-brand-primary hover:text-brand-primary/80 underline font-montserrat">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
