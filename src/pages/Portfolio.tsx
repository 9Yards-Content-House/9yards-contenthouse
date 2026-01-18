import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { PortfolioCard } from "@/components/shared/PortfolioCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";

const portfolioItems = [
  {
    image: portfolio1,
    title: "Legensity Brand Identity",
    category: "Branding",
    href: "/portfolio/legensity-brand",
  },
  {
    image: portfolio2,
    title: "Spice Diana Music Video",
    category: "Video",
    href: "/portfolio/spice-diana-video",
  },
  {
    image: portfolio3,
    title: "TechStartup Website",
    category: "Web Design",
    href: "/portfolio/tech-startup-website",
  },
  {
    image: portfolio4,
    title: "Travel Brand Social Campaign",
    category: "Social Media",
    href: "/portfolio/travel-social-campaign",
  },
  {
    image: portfolio5,
    title: "Motion Graphics Showreel",
    category: "Motion Graphics",
    href: "/portfolio/motion-showreel",
  },
  {
    image: portfolio6,
    title: "Magazine Print Design",
    category: "Print",
    href: "/portfolio/magazine-design",
  },
  {
    image: portfolio2,
    title: "Corporate Documentary",
    category: "Video",
    href: "/portfolio/corporate-documentary",
  },
  {
    image: portfolio1,
    title: "Restaurant Rebrand",
    category: "Branding",
    href: "/portfolio/restaurant-rebrand",
  },
  {
    image: portfolio3,
    title: "E-commerce Platform",
    category: "Web Design",
    href: "/portfolio/ecommerce-platform",
  },
  {
    image: portfolio4,
    title: "Fashion Brand Campaign",
    category: "Social Media",
    href: "/portfolio/fashion-campaign",
  },
  {
    image: portfolio5,
    title: "Product Animation",
    category: "Motion Graphics",
    href: "/portfolio/product-animation",
  },
  {
    image: portfolio6,
    title: "Annual Report Design",
    category: "Print",
    href: "/portfolio/annual-report",
  },
];

const filters = [
  "All",
  "Branding",
  "Video",
  "Social Media",
  "Web Design",
  "Print",
  "Motion Graphics",
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredItems =
    activeFilter === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  const visibleItems = filteredItems.slice(0, visibleCount);
  const hasMore = visibleCount < filteredItems.length;

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-primary">
        <div className="container-custom text-center">
          <h1 className="text-display-2 md:text-display-1 text-primary-foreground mb-6">
            Our <span className="text-accent">Portfolio</span>
          </h1>
          <p className="text-body-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Explore our collection of impactful creative projects for brands
            across Uganda and beyond.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-background border-b border-border sticky top-[60px] z-30">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => {
                  setActiveFilter(filter);
                  setVisibleCount(6);
                }}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all",
                  activeFilter === filter
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                )}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleItems.map((item) => (
              <PortfolioCard
                key={item.title}
                image={item.image}
                title={item.title}
                category={item.category}
                href={item.href}
              />
            ))}
          </div>

          {hasMore && (
            <div className="text-center mt-12">
              <Button
                variant="outline"
                size="lg"
                onClick={() => setVisibleCount((prev) => prev + 6)}
              >
                Load More Projects
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary">
        <div className="container-custom text-center">
          <h2 className="text-display-3 text-primary-foreground mb-6">
            Like What You See?
          </h2>
          <p className="text-primary-foreground/80 text-body-lg mb-8 max-w-2xl mx-auto">
            Let's create something amazing for your brand. Start your project
            today.
          </p>
          <Button variant="cta" size="xl" asChild>
            <Link to="/contact">
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
