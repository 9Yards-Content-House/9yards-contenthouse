import { useState, useEffect, useCallback, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const services = {
  creative: [
    { name: "Video Production", href: "/services/video-production" },
    { name: "Photography", href: "/services/photography" },
    { name: "Graphic Design", href: "/services/graphic-design" },
    { name: "Print Design", href: "/services/print-design" },
    { name: "Branding", href: "/services/branding" },
    { name: "Social Media Creative", href: "/services/social-media-creative" },
    { name: "Concept Creation", href: "/services/concept-creation" },
    { name: "Motion Design", href: "/services/motion-design" },
  ],
  digital: [
    { name: "Social Media Marketing", href: "/services/social-media-marketing" },
    { name: "Website Development", href: "/services/web-development" },
    { name: "Influencer Marketing", href: "/services/influencer-marketing" },
    { name: "Email Marketing", href: "/services/email-marketing" },
    { name: "Copywriting", href: "/services/copywriting" },
    { name: "Digital Strategy", href: "/services/digital-strategy" },
  ],
  media: [
    { name: "Podcast Production", href: "/services/podcast-production" },
    { name: "TV & Radio Production", href: "/services/tv-radio-production" },
  ],
  ai: [
    { name: "AI-Powered Creative", href: "/services/ai-creative" },
    { name: "AI Consulting", href: "/services/ai-consulting" },
  ],
};

const allServiceHrefs = [
  ...services.creative.map(s => s.href),
  ...services.digital.map(s => s.href),
  ...services.media.map(s => s.href),
  ...services.ai.map(s => s.href),
  "/services"
];

const whyUsItems = [
  { name: "How We Work", href: "/how-we-work" },
  { name: "World-Class Team", href: "/team" },
  { name: "AI-Powered Creative", href: "/ai-creative" },
];

const whyUsHrefs = whyUsItems.map(item => item.href);

const companyItems = [
  { name: "About Us", href: "/about" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

const companyHrefs = companyItems.map(item => item.href);

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
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Check if current path matches a child route for parent active state
  const isServicesActive = allServiceHrefs.some(href => location.pathname.startsWith(href.split('/').slice(0, 3).join('/')));
  const isWhyUsActive = whyUsHrefs.includes(location.pathname);
  const isCompanyActive = companyHrefs.includes(location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Body scroll lock when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
    return () => document.body.classList.remove("menu-open");
  }, [isMobileMenuOpen]);

  // Escape key to close dropdowns and mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
        setOpenDropdown(null);
        setIsServicesOpen(false);
        setIsWhyUsOpen(false);
        setIsCompanyOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Focus trap for mobile menu
  useEffect(() => {
    if (!isMobileMenuOpen || !mobileMenuRef.current) return;

    const focusableElements = mobileMenuRef.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;

      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement?.focus();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement?.focus();
      }
    };

    document.addEventListener("keydown", handleTab);
    firstElement?.focus();

    return () => document.removeEventListener("keydown", handleTab);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
    setIsWhyUsOpen(false);
    setIsCompanyOpen(false);
    setOpenDropdown(null);
  }, [location]);

  // Delayed close for desktop dropdowns (prevents accidental close)
  const handleMouseEnter = useCallback((dropdownType: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setOpenDropdown(dropdownType);
  }, []);

  const handleMouseLeave = useCallback(() => {
    closeTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150); // 150ms delay before closing
  }, []);

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

          {/* Desktop Navigation - now shows at md breakpoint */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              // Determine if this nav item is active based on child routes
              const isActive = 
                link.dropdownType === "services" ? isServicesActive :
                link.dropdownType === "whyUs" ? isWhyUsActive :
                link.dropdownType === "company" ? isCompanyActive :
                location.pathname === link.href;

              return (
                <div 
                  key={link.name} 
                  className={cn(
                    "relative mega-menu-trigger",
                    openDropdown === link.dropdownType && "dropdown-open"
                  )}
                  onMouseEnter={() => link.dropdownType && handleMouseEnter(link.dropdownType)}
                  onMouseLeave={handleMouseLeave}
                >
                  {link.dropdownType ? (
                    <button
                      className={cn(
                        "flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative",
                        isActive
                          ? isScrolled
                            ? "text-primary bg-primary/5"
                            : "text-white bg-white/10"
                          : isScrolled
                            ? "text-foreground hover:text-primary hover:bg-primary/5"
                            : "text-white/90 hover:text-white hover:bg-white/10"
                      )}
                      aria-expanded={openDropdown === link.dropdownType}
                      aria-haspopup="true"
                    >
                      {link.name}
                      <ChevronDown className={cn(
                        "w-4 h-4 transition-transform duration-200",
                        openDropdown === link.dropdownType && "rotate-180"
                      )} />
                      {/* Active indicator dot */}
                      {isActive && (
                        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-current" />
                      )}
                    </button>
                  ) : (
                    <Link
                      to={link.href}
                      className={cn(
                        "flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative",
                        isActive
                          ? isScrolled 
                            ? "text-primary bg-primary/5" 
                            : "text-white bg-white/10"
                          : isScrolled
                            ? "text-foreground hover:text-primary hover:bg-primary/5"
                            : "text-white/90 hover:text-white hover:bg-white/10"
                      )}
                    >
                      {link.name}
                      {/* Active indicator dot */}
                      {isActive && (
                        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-current" />
                      )}
                    </Link>
                  )}

                {/* Mega Menu for Services */}
                {link.dropdownType === "services" && (
                  <div className="mega-menu absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[calc(100vw-2rem)] max-w-[820px]">
                    <div className="bg-background rounded-2xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] border border-border overflow-hidden">
                      {/* Header */}
                      <div className="bg-gradient-to-r from-primary/5 via-transparent to-accent/5 px-6 py-4 border-b border-border">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-bold text-foreground">Our Services</h3>
                            <p className="text-sm text-muted-foreground">Everything you need to grow your brand</p>
                          </div>
                          <Link
                            to="/services"
                            className="group flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                          >
                            View all
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                          </Link>
                        </div>
                      </div>
                      
                      {/* Content Grid */}
                      <div className="p-6">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 lg:divide-x divide-border">
                          {/* Creative Services */}
                          <div className="pr-0 lg:pr-6 pb-6 lg:pb-0">
                            <h4 className="font-semibold text-xs uppercase tracking-wider text-primary mb-4 pb-2 border-b-2 border-primary/20 inline-block">
                              Creative
                            </h4>
                            <ul className="space-y-0.5">
                              {services.creative.map((item) => (
                                <li key={item.name}>
                                  <Link
                                    to={item.href}
                                    className={cn(
                                      "block py-2 px-2 -mx-2 text-sm rounded-lg transition-all duration-200",
                                      location.pathname === item.href
                                        ? "text-primary font-medium bg-primary/5"
                                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                                    )}
                                  >
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          {/* Digital & Strategy */}
                          <div className="pl-0 lg:pl-6 pr-0 lg:pr-6 pb-6 lg:pb-0">
                            <h4 className="font-semibold text-xs uppercase tracking-wider text-primary mb-4 pb-2 border-b-2 border-primary/20 inline-block">
                              Digital & Strategy
                            </h4>
                            <ul className="space-y-0.5">
                              {services.digital.map((item) => (
                                <li key={item.name}>
                                  <Link
                                    to={item.href}
                                    className={cn(
                                      "block py-2 px-2 -mx-2 text-sm rounded-lg transition-all duration-200",
                                      location.pathname === item.href
                                        ? "text-primary font-medium bg-primary/5"
                                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                                    )}
                                  >
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          {/* Media Production & AI */}
                          <div className="pl-0 lg:pl-6 pr-0 lg:pr-6">
                            <h4 className="font-semibold text-xs uppercase tracking-wider text-primary mb-4 pb-2 border-b-2 border-primary/20 inline-block">
                              Media Production
                            </h4>
                            <ul className="space-y-0.5">
                              {services.media.map((item) => (
                                <li key={item.name}>
                                  <Link
                                    to={item.href}
                                    className={cn(
                                      "block py-2 px-2 -mx-2 text-sm rounded-lg transition-all duration-200",
                                      location.pathname === item.href
                                        ? "text-primary font-medium bg-primary/5"
                                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                                    )}
                                  >
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                            
                            {/* AI Services */}
                            <h4 className="font-semibold text-xs uppercase tracking-wider text-primary mb-4 pb-2 border-b-2 border-primary/20 inline-block mt-6">
                              AI Services
                            </h4>
                            <ul className="space-y-0.5">
                              {services.ai.map((item) => (
                                <li key={item.name}>
                                  <Link
                                    to={item.href}
                                    className={cn(
                                      "block py-2 px-2 -mx-2 text-sm rounded-lg transition-all duration-200",
                                      location.pathname === item.href
                                        ? "text-primary font-medium bg-primary/5"
                                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                                    )}
                                  >
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          {/* Featured / CTA Column */}
                          <div className="pl-0 lg:pl-6">
                            <div className="bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 rounded-xl p-5 h-full flex flex-col border border-primary/10">
                              <div className="flex-1">
                                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center mb-3">
                                  <span className="text-primary text-lg">?</span>
                                </div>
                                <h4 className="font-bold text-foreground mb-2">Not sure where to start?</h4>
                                <p className="text-sm text-muted-foreground mb-4">
                                  Tell us about your project and we'll recommend the perfect solution.
                                </p>
                              </div>
                              <Button variant="accent" size="sm" className="w-full" asChild>
                                <Link to="/get-started">
                                  Get Started
                                  <ArrowRight className="w-4 h-4 ml-1" />
                                </Link>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Footer */}
                      <div className="px-6 py-3 bg-muted/30 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
                        <span>Need help choosing? <a href="mailto:contenthouse@9yards.co.ug" className="text-primary hover:underline">Contact us</a></span>
                        <span className="hidden sm:inline">Response within 24 hours</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Dropdown for Why Us */}
                {link.dropdownType === "whyUs" && (
                  <div className="mega-menu absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[220px]">
                    <div className="bg-background rounded-xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] border border-border overflow-hidden">
                      <div className="p-2">
                        {whyUsItems.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className={cn(
                              "block px-4 py-2.5 text-sm rounded-lg transition-all duration-200",
                              location.pathname === item.href
                                ? "text-primary font-medium bg-primary/5"
                                : "text-foreground hover:text-primary hover:bg-muted/50"
                            )}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Dropdown for Company */}
                {link.dropdownType === "company" && (
                  <div className="mega-menu absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[200px]">
                    <div className="bg-background rounded-xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] border border-border overflow-hidden">
                      <div className="p-2">
                        {companyItems.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className={cn(
                              "block px-4 py-2.5 text-sm rounded-lg transition-all duration-200",
                              location.pathname === item.href
                                ? "text-primary font-medium bg-primary/5"
                                : "text-foreground hover:text-primary hover:bg-muted/50"
                            )}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
            })}
          </div>

          {/* Desktop CTA - hidden on home page until scroll */}
          <div className={cn(
            "hidden md:flex items-center gap-4 transition-all duration-300",
            location.pathname === "/" && !isScrolled && "opacity-0 pointer-events-none"
          )}>
            <Button variant="accent" asChild>
              <Link to="/get-started">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button - animated hamburger */}
          <button
            className={cn(
              "md:hidden p-2 rounded-lg transition-all duration-300",
              isScrolled || isMobileMenuOpen
                ? "hover:bg-muted text-foreground"
                : "hover:bg-white/10 text-white",
              isMobileMenuOpen && "hamburger-open"
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <div className="flex flex-col justify-center items-center gap-1.5 w-6 h-6">
              <span className="hamburger-line" />
              <span className="hamburger-line" />
              <span className="hamburger-line" />
            </div>
          </button>
        </nav>

        {/* Mobile Menu with focus trap */}
        {isMobileMenuOpen && (
          <div 
            ref={mobileMenuRef}
            className="md:hidden fixed inset-x-0 top-[56px] sm:top-[64px] bottom-0 bg-background z-40 mobile-menu-enter overflow-hidden flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            {/* Scrollable Content Area */}
            <div className="flex-1 overflow-y-auto px-4 sm:px-6 pt-4 sm:pt-6 pb-4">
              {/* Services Dropdown with accordion animation */}
              <div className={cn(
                "rounded-xl transition-colors duration-200",
                isServicesOpen && "bg-primary/5"
              )}>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className={cn(
                    "flex items-center justify-between w-full py-4 px-3 text-base sm:text-lg font-medium rounded-lg tap-highlight transition-colors min-h-[52px]",
                    isServicesActive ? "text-primary" : "text-foreground",
                    isServicesOpen && "text-primary"
                  )}
                >
                  <span className="flex items-center gap-2">
                    {isServicesActive && <span className="w-1.5 h-1.5 rounded-full bg-primary" />}
                    Services
                  </span>
                  <ChevronDown
                    className={cn(
                      "w-5 h-5 transition-transform duration-300",
                      isServicesOpen && "rotate-180"
                    )}
                  />
                </button>
                <div className={cn("accordion-content", isServicesOpen && "open")}>
                  <div className="accordion-inner">
                    {/* Quick link to all services */}
                    <Link
                      to="/services"
                      className="flex items-center justify-between mx-3 mb-3 py-2.5 px-3 text-sm font-medium text-primary bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors"
                    >
                      View All Services
                      <span className="text-xs">→</span>
                    </Link>
                    <div className="pl-4 space-y-4 pb-3 border-l-2 border-primary/20 mx-3">
                      <div>
                        <h5 className="font-semibold text-primary text-sm mb-1 px-3">
                          Creative Services
                        </h5>
                        {services.creative.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className={cn(
                              "flex items-center py-3 px-3 text-sm sm:text-base rounded-lg tap-highlight transition-colors min-h-[44px]",
                              location.pathname === item.href
                                ? "text-primary font-medium bg-primary/10"
                                : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                            )}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                      <div>
                        <h5 className="font-semibold text-primary text-sm mb-1 px-3">
                          Digital & Strategy
                        </h5>
                        {services.digital.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className={cn(
                              "flex items-center py-3 px-3 text-sm sm:text-base rounded-lg tap-highlight transition-colors min-h-[44px]",
                              location.pathname === item.href
                                ? "text-primary font-medium bg-primary/10"
                                : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                            )}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                      <div>
                        <h5 className="font-semibold text-primary text-sm mb-1 px-3">
                          Media Production
                        </h5>
                        {services.media.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className={cn(
                              "flex items-center py-3 px-3 text-sm sm:text-base rounded-lg tap-highlight transition-colors min-h-[44px]",
                              location.pathname === item.href
                                ? "text-primary font-medium bg-primary/10"
                                : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                            )}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                      <div>
                        <h5 className="font-semibold text-primary text-sm mb-1 px-3">
                          AI Services
                        </h5>
                        {services.ai.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className={cn(
                              "flex items-center py-3 px-3 text-sm sm:text-base rounded-lg tap-highlight transition-colors min-h-[44px]",
                              location.pathname === item.href
                                ? "text-primary font-medium bg-primary/10"
                                : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                            )}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Separator */}
              <div className="h-px bg-border mx-2" />

              {/* Our Work Link */}
              <Link
                to="/portfolio"
                className={cn(
                  "flex items-center gap-2 py-4 px-3 text-base sm:text-lg font-medium rounded-lg tap-highlight transition-colors min-h-[52px]",
                  location.pathname === "/portfolio"
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                )}
              >
                {location.pathname === "/portfolio" && <span className="w-1.5 h-1.5 rounded-full bg-primary" />}
                Our Work
              </Link>

              {/* Separator */}
              <div className="h-px bg-border mx-2" />

              {/* Why Us Dropdown with accordion animation */}
              <div className={cn(
                "rounded-xl transition-colors duration-200",
                isWhyUsOpen && "bg-primary/5"
              )}>
                <button
                  onClick={() => setIsWhyUsOpen(!isWhyUsOpen)}
                  className={cn(
                    "flex items-center justify-between w-full py-4 px-3 text-base sm:text-lg font-medium rounded-lg tap-highlight transition-colors min-h-[52px]",
                    isWhyUsActive ? "text-primary" : "text-foreground",
                    isWhyUsOpen && "text-primary"
                  )}
                >
                  <span className="flex items-center gap-2">
                    {isWhyUsActive && <span className="w-1.5 h-1.5 rounded-full bg-primary" />}
                    Why Us
                  </span>
                  <ChevronDown
                    className={cn(
                      "w-5 h-5 transition-transform duration-300",
                      isWhyUsOpen && "rotate-180"
                    )}
                  />
                </button>
                <div className={cn("accordion-content", isWhyUsOpen && "open")}>
                  <div className="accordion-inner">
                    <div className="pl-4 pb-3 border-l-2 border-primary/20 mx-3">
                      {whyUsItems.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className={cn(
                            "flex items-center py-3 px-3 text-sm sm:text-base rounded-lg tap-highlight transition-colors min-h-[44px]",
                            location.pathname === item.href
                              ? "text-primary font-medium bg-primary/10"
                              : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                          )}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Separator */}
              <div className="h-px bg-border mx-2" />

              {/* Company Dropdown with accordion animation */}
              <div className={cn(
                "rounded-xl transition-colors duration-200",
                isCompanyOpen && "bg-primary/5"
              )}>
                <button
                  onClick={() => setIsCompanyOpen(!isCompanyOpen)}
                  className={cn(
                    "flex items-center justify-between w-full py-4 px-3 text-base sm:text-lg font-medium rounded-lg tap-highlight transition-colors min-h-[52px]",
                    isCompanyActive ? "text-primary" : "text-foreground",
                    isCompanyOpen && "text-primary"
                  )}
                >
                  <span className="flex items-center gap-2">
                    {isCompanyActive && <span className="w-1.5 h-1.5 rounded-full bg-primary" />}
                    Company
                  </span>
                  <ChevronDown
                    className={cn(
                      "w-5 h-5 transition-transform duration-300",
                      isCompanyOpen && "rotate-180"
                    )}
                  />
                </button>
                <div className={cn("accordion-content", isCompanyOpen && "open")}>
                  <div className="accordion-inner">
                    <div className="pl-4 pb-3 border-l-2 border-primary/20 mx-3">
                      {companyItems.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className={cn(
                            "flex items-center py-3 px-3 text-sm sm:text-base rounded-lg tap-highlight transition-colors min-h-[44px]",
                            location.pathname === item.href
                              ? "text-primary font-medium bg-primary/10"
                              : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                          )}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sticky Bottom CTA + Contact Info */}
            <div className="flex-shrink-0 border-t border-border bg-background px-4 sm:px-6 py-4 mobile-menu-safe-area">
              <Button variant="accent" size="lg" className="w-full mb-4" asChild>
                <Link to="/get-started">Get Started</Link>
              </Button>
              
              {/* Quick Contact Info */}
              <div className="flex items-center justify-center text-sm text-muted-foreground">
                <a 
                  href="mailto:contenthouse@9yards.co.ug" 
                  className="hover:text-primary transition-colors"
                >
                  contenthouse@9yards.co.ug
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
