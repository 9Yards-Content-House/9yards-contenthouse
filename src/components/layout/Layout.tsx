import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface LayoutProps {
  children: ReactNode;
  hideFooterCta?: boolean;
  ctaTitle?: string;
  ctaDescription?: string;
}

export function Layout({ 
  children, 
  hideFooterCta = false,
  ctaTitle,
  ctaDescription
}: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer 
        hideCtaSection={hideFooterCta} 
        ctaTitle={ctaTitle}
        ctaDescription={ctaDescription}
      />
    </div>
  );
}
