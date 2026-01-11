import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const services = {
  creative: [
    { name: "Graphic Design", href: "/services/graphic-design" },
    { name: "Video Production", href: "/services/video-production" },
    { name: "Branding Services", href: "/services/branding" },
    { name: "Motion Design", href: "/services/motion-design" },
    { name: "Print Design", href: "/services/print-design" },
  ],
  digital: [
    { name: "Social Media Management", href: "/services/social-media" },
    { name: "Website Development", href: "/services/web-development" },
    { name: "Email Marketing", href: "/services/email-marketing" },
    { name: "Influencer Marketing", href: "/services/influencer-marketing" },
    { name: "Digital Strategy", href: "/services/digital-strategy" },
  ],
  specialized: [
    { name: "Ad Creative", href: "/services/ad-creative" },
    { name: "AI-Powered Creative", href: "/services/ai-creative" },
    { name: "Copywriting", href: "/services/copywriting" },
    { name: "Podcast Studio", href: "/studio" },
  ],
};

const whyUsItems = [
  { name: "How We Work", href: "/how-we-work" },
  { name: "World Class Team", href: "/team" },
  { name: "AI-Powered Creative", href: "/ai-creative" },
];

const companyItems = [
  { name: "About Us", href: "/about" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

const navLinks = [
  { name: "Services", href: "/services", dropdownType: "services" },
  { name: "Our Work", href: "/portfolio" },
  { name: "Why Us", href: "#", dropdownType: "whyUs" },
  { name: "Company", href: "#", dropdownType: "company" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isWhyUsOpen, setIsWhyUsOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
    setIsWhyUsOpen(false);
    setIsCompanyOpen(false);
  }, [location]);

  // Determine if mobile menu is open - always show full color logo when mobile menu is open
  const showFullColorLogo = isScrolled || isMobileMenuOpen;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg py-2"
          : "bg-transparent py-4",
        isMobileMenuOpen && "bg-background"
      )}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between">
          {/* Logo with transition */}
          <Link to="/" className="flex items-center group relative">
            <div className="relative h-10 sm:h-12 w-auto">
              {/* Inverted Logo (shown before scroll) */}
              <img
                src="/images/logo/9Yards-Logo-Inverted-Color.png"
                alt="9Yards Content House"
                className={cn(
                  "h-full w-auto object-contain transition-opacity duration-300",
                  showFullColorLogo ? "opacity-0" : "opacity-100"
                )}
              />
              {/* Full Color Logo (shown after scroll) */}
              <img
                src="/images/logo/9Yards-Logo-Full-Color.png"
                alt="9Yards Content House"
                className={cn(
                  "h-full w-auto object-contain absolute top-0 left-0 transition-opacity duration-300",
                  showFullColorLogo ? "opacity-100" : "opacity-0"
                )}
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div key={link.name} className="relative mega-menu-trigger">
                {link.dropdownType ? (
                  <button
                    className={cn(
                      "flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300",
                      isScrolled
                        ? "text-foreground hover:text-primary hover:bg-primary/5"
                        : "text-white/90 hover:text-white hover:bg-white/10"
                    )}
                  >
                    {link.name}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                ) : (
                  <Link
                    to={link.href}
                    className={cn(
                      "flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300",
                      location.pathname === link.href
                        ? isScrolled 
                          ? "text-primary bg-primary/5" 
                          : "text-white bg-white/10"
                        : isScrolled
                          ? "text-foreground hover:text-primary hover:bg-primary/5"
                          : "text-white/90 hover:text-white hover:bg-white/10"
                    )}
                  >
                    {link.name}
                  </Link>
                )}

                {/* Mega Menu for Services */}
                {link.dropdownType === "services" && (
                  <div className="mega-menu absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[700px]">
                    <div className="bg-background rounded-xl shadow-2xl border border-border p-6">
                      <div className="grid grid-cols-3 gap-6">
                        <div>
                          <h4 className="font-bold text-primary mb-3 text-sm uppercase tracking-wide">
                            Creative Services
                          </h4>
                          <ul className="space-y-2">
                            {services.creative.map((item) => (
                              <li key={item.name}>
                                <Link
                                  to={item.href}
                                  className="text-sm text-muted-foreground hover:text-primary transition-colors block py-1"
                                >
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-bold text-primary mb-3 text-sm uppercase tracking-wide">
                            Digital Marketing
                          </h4>
                          <ul className="space-y-2">
                            {services.digital.map((item) => (
                              <li key={item.name}>
                                <Link
                                  to={item.href}
                                  className="text-sm text-muted-foreground hover:text-primary transition-colors block py-1"
                                >
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-bold text-primary mb-3 text-sm uppercase tracking-wide">
                            Specialized
                          </h4>
                          <ul className="space-y-2">
                            {services.specialized.map((item) => (
                              <li key={item.name}>
                                <Link
                                  to={item.href}
                                  className="text-sm text-muted-foreground hover:text-primary transition-colors block py-1"
                                >
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
                        <Link
                          to="/services"
                          className="text-sm font-semibold text-primary hover:underline"
                        >
                          View All Services →
                        </Link>
                        <Button variant="accent" size="sm" asChild>
                          <Link to="/contact">Get a Quote</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Simple Dropdown for Why Us */}
                {link.dropdownType === "whyUs" && (
                  <div className="mega-menu absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[220px]">
                    <div className="bg-background rounded-xl shadow-2xl border border-border p-3">
                      <ul className="space-y-1">
                        {whyUsItems.map((item) => (
                          <li key={item.name}>
                            <Link
                              to={item.href}
                              className="text-sm text-foreground hover:text-primary hover:bg-primary/5 transition-colors block py-2 px-3 rounded-lg"
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {/* Simple Dropdown for Company */}
                {link.dropdownType === "company" && (
                  <div className="mega-menu absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[180px]">
                    <div className="bg-background rounded-xl shadow-2xl border border-border p-3">
                      <ul className="space-y-1">
                        {companyItems.map((item) => (
                          <li key={item.name}>
                            <Link
                              to={item.href}
                              className="text-sm text-foreground hover:text-primary hover:bg-primary/5 transition-colors block py-2 px-3 rounded-lg"
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:0700488870"
              className={cn(
                "flex items-center gap-2 text-sm font-medium transition-all duration-300",
                isScrolled 
                  ? "text-muted-foreground hover:text-primary" 
                  : "text-white/90 hover:text-white"
              )}
            >
              <Phone className="w-4 h-4" />
              0700 488 870
            </a>
            <Button variant={isScrolled ? "accent" : "outline"} className={cn(!isScrolled && "border-white text-white hover:bg-white hover:text-primary")} asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={cn(
              "lg:hidden p-2 rounded-lg transition-all duration-300",
              isScrolled || isMobileMenuOpen
                ? "hover:bg-muted text-foreground"
                : "hover:bg-white/10 text-white"
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[56px] sm:top-[64px] bottom-0 bg-background z-40 animate-fade-in overflow-hidden">
            <div className="p-4 sm:p-6 space-y-1 h-full overflow-y-auto pb-20">
              {/* Services Dropdown */}
              <div>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center justify-between w-full py-3 text-base sm:text-lg font-medium text-foreground"
                >
                  Services
                  <ChevronDown
                    className={cn(
                      "w-5 h-5 transition-transform duration-200",
                      isServicesOpen && "rotate-180"
                    )}
                  />
                </button>
                {isServicesOpen && (
                  <div className="pl-4 space-y-4 mt-2 pb-2 animate-fade-in border-l-2 border-primary/20">
                    <div>
                      <h5 className="font-semibold text-primary text-sm mb-2">
                        Creative Services
                      </h5>
                      {services.creative.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="block py-2 text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                    <div>
                      <h5 className="font-semibold text-primary text-sm mb-2">
                        Digital Marketing
                      </h5>
                      {services.digital.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="block py-2 text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                    <div>
                      <h5 className="font-semibold text-primary text-sm mb-2">
                        Specialized
                      </h5>
                      {services.specialized.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="block py-2 text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Our Work Link */}
              <Link
                to="/portfolio"
                className={cn(
                  "block py-3 text-base sm:text-lg font-medium transition-colors",
                  location.pathname === "/portfolio"
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                )}
              >
                Our Work
              </Link>

              {/* Why Us Dropdown */}
              <div>
                <button
                  onClick={() => setIsWhyUsOpen(!isWhyUsOpen)}
                  className="flex items-center justify-between w-full py-3 text-base sm:text-lg font-medium text-foreground"
                >
                  Why Us
                  <ChevronDown
                    className={cn(
                      "w-5 h-5 transition-transform duration-200",
                      isWhyUsOpen && "rotate-180"
                    )}
                  />
                </button>
                {isWhyUsOpen && (
                  <div className="pl-4 mt-2 pb-2 animate-fade-in border-l-2 border-primary/20">
                    {whyUsItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="block py-2 text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Company Dropdown */}
              <div>
                <button
                  onClick={() => setIsCompanyOpen(!isCompanyOpen)}
                  className="flex items-center justify-between w-full py-3 text-base sm:text-lg font-medium text-foreground"
                >
                  Company
                  <ChevronDown
                    className={cn(
                      "w-5 h-5 transition-transform duration-200",
                      isCompanyOpen && "rotate-180"
                    )}
                  />
                </button>
                {isCompanyOpen && (
                  <div className="pl-4 mt-2 pb-2 animate-fade-in border-l-2 border-primary/20">
                    {companyItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="block py-2 text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div className="pt-4 sm:pt-6 border-t border-border space-y-4 mt-4">
                <a
                  href="tel:0700488870"
                  className="flex items-center gap-2 text-base sm:text-lg font-medium text-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-5 h-5 text-primary" />
                  0700 488 870
                </a>
                <Button variant="accent" size="lg" className="w-full" asChild>
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
