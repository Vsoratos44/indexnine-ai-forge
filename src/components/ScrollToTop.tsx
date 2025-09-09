import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const lastPathnameRef = useRef<string>('');

  useEffect(() => {
    const currentPathname = pathname;
    const lastPathname = lastPathnameRef.current;

    // Store current scroll position before navigating
    if (lastPathname) {
      sessionStorage.setItem(`scroll-${lastPathname}`, window.scrollY.toString());
    }

    // Check if this is a back navigation by comparing with stored positions
    const storedPosition = sessionStorage.getItem(`scroll-${currentPathname}`);
    
    if (storedPosition && window.history.state?.idx !== undefined) {
      // This is likely a back navigation, restore scroll position
      setTimeout(() => {
        window.scrollTo(0, parseInt(storedPosition, 10));
      }, 0);
    } else {
      // This is forward navigation, scroll to top
      window.scrollTo(0, 0);
    }

    lastPathnameRef.current = currentPathname;
  }, [pathname]);

  return null;
};

export default ScrollToTop;