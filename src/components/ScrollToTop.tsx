import { useEffect, useLayoutEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

/**
 * ScrollToTop component that scrolls the window to the top
 * when navigating to a new page, but preserves scroll position
 * when using the browser's back/forward buttons.
 * 
 * Uses multiple scroll methods to ensure compatibility across browsers
 * and handles async content loading with lazy routes.
 */
export function ScrollToTop() {
  const { pathname } = useLocation();
  const navigationType = useNavigationType();

  // Use useLayoutEffect to scroll before the browser paints
  // This prevents the flash of old scroll position
  useLayoutEffect(() => {
    // Only scroll to top for new navigations (PUSH), not for back/forward (POP)
    // POP = browser back/forward buttons - let browser restore scroll position
    // PUSH = clicking a link - scroll to top
    // REPLACE = redirect - scroll to top
    if (navigationType === 'POP') {
      // Let the browser handle scroll restoration for back/forward navigation
      return;
    }

    // Temporarily disable smooth scrolling for instant navigation
    const html = document.documentElement;
    const originalScrollBehavior = html.style.scrollBehavior;
    html.style.scrollBehavior = 'auto';
    
    // Immediately scroll to top using multiple methods for maximum compatibility
    
    // Method 1: Standard scroll
    window.scrollTo(0, 0);
    
    // Method 2: Using scrollTo with options (for browsers that support it)
    try {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });
    } catch (e) {
      // Fallback for older browsers
      window.scrollTo(0, 0);
    }
    
    // Method 3: Also scroll document elements (for some edge cases)
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    // Restore smooth scrolling after a brief delay
    requestAnimationFrame(() => {
      html.style.scrollBehavior = originalScrollBehavior;
    });
    
  }, [pathname, navigationType]);

  // Additional useEffect as a backup after render for lazy-loaded content
  useEffect(() => {
    // Only for PUSH/REPLACE navigations, not for back/forward
    if (navigationType === 'POP') {
      return;
    }

    // Small delay to handle lazy-loaded content
    const timeoutId = setTimeout(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 50);

    return () => clearTimeout(timeoutId);
  }, [pathname, navigationType]);

  return null;
}
