import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface LayoutProps {
  children: ReactNode;
  hideFooterCta?: boolean;
  ctaTitle?: string;
  ctaDescription?: string;
  /** When true, header uses light text for dark backgrounds. When false, uses dark text. Default: true */
  headerDarkMode?: boolean;
}

export function Layout({ 
  children, 
  hideFooterCta = false,
  ctaTitle,
  ctaDescription,
  headerDarkMode = true
}: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Skip to main content link for keyboard/screen reader users */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-accent focus:text-white focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
      >
        Skip to main content
      </a>
      <Header darkMode={headerDarkMode} />
      <main id="main-content" className="flex-1" tabIndex={-1}>{children}</main>
      <Footer 
        hideCtaSection={hideFooterCta} 
        ctaTitle={ctaTitle}
        ctaDescription={ctaDescription}
      />
    </div>
  );
}
