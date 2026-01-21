import { memo } from "react";

/**
 * Lightweight loading spinner for lazy-loaded routes
 * Uses CSS-only animation for minimal JS overhead
 */
export const PageLoader = memo(function PageLoader() {
  return (
    <div 
      className="min-h-screen flex items-center justify-center bg-background"
      role="status"
      aria-label="Loading page"
    >
      <div className="flex flex-col items-center gap-4">
        {/* CSS-only spinner */}
        <div className="w-10 h-10 border-4 border-muted rounded-full border-t-accent animate-spin" />
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
});
