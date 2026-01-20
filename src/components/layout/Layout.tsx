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
      <Header darkMode={headerDarkMode} />
      <main className="flex-1">{children}</main>
      <Footer 
        hideCtaSection={hideFooterCta} 
        ctaTitle={ctaTitle}
        ctaDescription={ctaDescription}
      />
    </div>
  );
}
