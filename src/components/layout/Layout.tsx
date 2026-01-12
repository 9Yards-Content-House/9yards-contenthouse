import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface LayoutProps {
  children: ReactNode;
  hideFooterCta?: boolean;
}

export function Layout({ children, hideFooterCta = false }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer hideCtaSection={hideFooterCta} />
    </div>
  );
}
