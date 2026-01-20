import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <Layout headerDarkMode={false}>
      <section className="min-h-[80vh] flex items-center py-20">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <div className="relative mb-8">
              <div className="text-[180px] md:text-[240px] font-bold text-primary/10 leading-none select-none">
                404
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-accent/10 flex items-center justify-center">
                  <Search className="w-12 h-12 text-accent" />
                </div>
              </div>
            </div>
            <h1 className="text-display-3 md:text-display-2 mb-4">Oops! Page Not Found</h1>
            <p className="text-body-lg text-muted-foreground mb-8">
              The page you're looking for doesn't exist. Let's get you back on track.
            </p>
            <Button variant="accent" size="lg" asChild>
              <Link to="/"><Home className="w-4 h-4" />Back to Home</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
