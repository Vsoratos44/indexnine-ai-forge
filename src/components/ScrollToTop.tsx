import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation();
  const isBackNavigationRef = useRef(false);

  useEffect(() => {
    // Store current scroll position for this route
    const storeScrollPosition = () => {
      sessionStorage.setItem(`scroll-${location.pathname}`, window.scrollY.toString());
    };

    // Handle popstate event (back/forward button)
    const handlePopState = () => {
      isBackNavigationRef.current = true;
    };

    // Store scroll position before user navigates away
    window.addEventListener('beforeunload', storeScrollPosition);
    window.addEventListener('popstate', handlePopState);

    return () => {
      storeScrollPosition();
      window.removeEventListener('beforeunload', storeScrollPosition);
      window.removeEventListener('popstate', handlePopState);
    };
  }, [location.pathname]);

  useEffect(() => {
    if (isBackNavigationRef.current) {
      // This is back navigation, restore scroll position
      const savedPosition = sessionStorage.getItem(`scroll-${location.pathname}`);
      if (savedPosition) {
        window.scrollTo(0, parseInt(savedPosition, 10));
      }
      isBackNavigationRef.current = false;
    } else {
      // This is forward navigation, scroll to top
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return null;
};

export default ScrollToTop;