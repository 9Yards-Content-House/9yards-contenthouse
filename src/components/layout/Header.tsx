import { useState, useEffect, useCallback, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, ArrowRight, X } from "lucide-react";
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
    { name: "Motion Design", href: "/services/motion-design" },
  ],
  digital: [
    { name: "Social Media Marketing", href: "/services/social-media-marketing" },
    { name: "Website Development", href: "/services/website-development" },
    { name: "Influencer Marketing", href: "/services/influencer-marketing" },
    { name: "Email Marketing", href: "/services/email-marketing" },
    { name: "Digital Strategy", href: "/services/digital-strategy" },
  ],
  media: [
    { name: "Podcast Production", href: "/services/podcast-production" },
    { name: "TV & Radio Production", href: "/services/tv-radio-production" },
    { name: "Voice-Over Recording", href: "/services/voice-over" },
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

  // Auto-close other accordions when one opens
  const handleServicesToggle = () => {
    setIsServicesOpen(!isServicesOpen);
    if (!isServicesOpen) {
      setIsWhyUsOpen(false);
      setIsCompanyOpen(false);
    }
  };

  const handleWhyUsToggle = () => {
    setIsWhyUsOpen(!isWhyUsOpen);
    if (!isWhyUsOpen) {
      setIsServicesOpen(false);
      setIsCompanyOpen(false);
    }
  };

  const handleCompanyToggle = () => {
    setIsCompanyOpen(!isCompanyOpen);
    if (!isCompanyOpen) {
      setIsServicesOpen(false);
      setIsWhyUsOpen(false);
    }
  };

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

  // Click outside to close desktop dropdowns
  useEffect(() => {
    if (!openDropdown) return;
    
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if click is inside a dropdown or trigger
      if (!target.closest('.mega-menu-trigger') && !target.closest('[data-dropdown-content]')) {
        setOpenDropdown(null);
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [openDropdown]);

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
    // Small delay to allow cursor to move between trigger and menu
    closeTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 50); // 50ms - just enough to bridge the gap
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
                    <div
                      className={cn(
                        "flex items-center gap-0.5 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative select-none",
                        isActive
                          ? isScrolled
                            ? "text-primary bg-primary/5"
                            : "text-white bg-white/10"
                          : isScrolled
                            ? "text-foreground hover:text-primary hover:bg-primary/5"
                            : "text-white/90 hover:text-white hover:bg-white/10"
                      )}
                      aria-haspopup="true"
                    >
                      {/* Text label - clicking navigates to the page */}
                      <Link 
                        to={link.href} 
                        className="cursor-pointer"
                        onClick={() => setOpenDropdown(null)}
                      >
                        {link.name}
                      </Link>
                      {/* Chevron icon - clicking toggles dropdown */}
                      <button
                        type="button"
                        className="cursor-pointer p-1 -mr-1 rounded hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
                        aria-expanded={openDropdown === link.dropdownType}
                        aria-label={`Toggle ${link.name} dropdown`}
                        onClick={(e) => {
                          e.stopPropagation();
                          if (openDropdown === link.dropdownType) {
                            setOpenDropdown(null);
                          } else {
                            setOpenDropdown(link.dropdownType);
                          }
                        }}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            if (openDropdown === link.dropdownType) {
                              setOpenDropdown(null);
                            } else {
                              setOpenDropdown(link.dropdownType);
                            }
                          }
                        }}
                      >
                        <ChevronDown className={cn(
                          "w-4 h-4 transition-transform duration-200",
                          openDropdown === link.dropdownType && "rotate-180"
                        )} />
                      </button>
                      {/* Active indicator line */}
                      {(isActive || openDropdown === link.dropdownType) && (
                        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-6 h-0.5 rounded-full bg-accent" />
                      )}
                    </div>
                  ) : (
                    <Link
                      to={link.href}
                      className={cn(
                        "flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative cursor-pointer",
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
                      {/* Active indicator line */}
                      {isActive && (
                        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-6 h-0.5 rounded-full bg-accent" />
                      )}
                    </Link>
                  )}

                {/* Mega Menu for Services - Modern Clean Design */}
                {link.dropdownType === "services" && openDropdown === "services" && (
                  <div 
                    className={cn(
                      "fixed left-0 right-0 pt-2 flex justify-center px-4 z-50",
                      isScrolled ? "top-[56px]" : "top-[72px]"
                    )}
                    onMouseEnter={() => handleMouseEnter("services")}
                    onMouseLeave={handleMouseLeave}
                    data-dropdown-content
                  >
                    <div className="bg-background/95 backdrop-blur-xl rounded-2xl shadow-2xl shadow-black/10 border border-border/50 overflow-hidden w-full max-w-[880px]">
                      {/* Header */}
                      <div className="px-6 py-4 border-b border-border/50">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-bold text-foreground">Services</h3>
                            <p className="text-sm text-muted-foreground">Creative solutions tailored to your goals</p>
                          </div>
                          <Link
                            to="/services"
                            onClick={() => setOpenDropdown(null)}
                            className="group flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-accent bg-accent/10 hover:bg-accent/20 rounded-lg transition-colors"
                          >
                            View all
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                      
                      {/* Content Grid */}
                      <div className="p-6">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x divide-border/50">
                          {/* Creative Services */}
                          <div className="lg:pr-6">
                            <h4 className="text-[11px] font-bold uppercase tracking-wider text-accent mb-3 flex items-center gap-2">
                              <span className="w-1 h-4 bg-accent rounded-full"></span>
                              Creative
                            </h4>
                            <ul className="space-y-0.5">
                              {services.creative.map((item) => (
                                <li key={item.name}>
                                  <Link
                                    to={item.href}
                                    onClick={() => setOpenDropdown(null)}
                                    className={cn(
                                      "block py-1.5 px-2 -mx-2 text-[13px] rounded-md transition-colors duration-150 cursor-pointer",
                                      location.pathname === item.href
                                        ? "text-accent font-medium bg-accent/10"
                                        : "text-foreground/70 hover:text-foreground hover:bg-muted"
                                    )}
                                  >
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          {/* Digital & Strategy */}
                          <div className="lg:px-6">
                            <h4 className="text-[11px] font-bold uppercase tracking-wider text-accent mb-3 flex items-center gap-2">
                              <span className="w-1 h-4 bg-accent rounded-full"></span>
                              Digital & Strategy
                            </h4>
                            <ul className="space-y-0.5">
                              {services.digital.map((item) => (
                                <li key={item.name}>
                                  <Link
                                    to={item.href}
                                    onClick={() => setOpenDropdown(null)}
                                    className={cn(
                                      "block py-1.5 px-2 -mx-2 text-[13px] rounded-md transition-colors duration-150 cursor-pointer",
                                      location.pathname === item.href
                                        ? "text-accent font-medium bg-accent/10"
                                        : "text-foreground/70 hover:text-foreground hover:bg-muted"
                                    )}
                                  >
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          {/* Media & AI */}
                          <div className="lg:px-6">
                            <h4 className="text-[11px] font-bold uppercase tracking-wider text-accent mb-3 flex items-center gap-2">
                              <span className="w-1 h-4 bg-accent rounded-full"></span>
                              Media Production
                            </h4>
                            <ul className="space-y-0.5">
                              {services.media.map((item) => (
                                <li key={item.name}>
                                  <Link
                                    to={item.href}
                                    onClick={() => setOpenDropdown(null)}
                                    className={cn(
                                      "block py-1.5 px-2 -mx-2 text-[13px] rounded-md transition-colors duration-150 cursor-pointer",
                                      location.pathname === item.href
                                        ? "text-accent font-medium bg-accent/10"
                                        : "text-foreground/70 hover:text-foreground hover:bg-muted"
                                    )}
                                  >
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                            
                            <div className="my-4 border-t border-border/50"></div>
                            
                            <h4 className="text-[11px] font-bold uppercase tracking-wider text-accent mb-3 flex items-center gap-2">
                              <span className="w-1 h-4 bg-accent rounded-full"></span>
                              AI Services
                            </h4>
                            <ul className="space-y-0.5">
                              {services.ai.map((item) => (
                                <li key={item.name}>
                                  <Link
                                    to={item.href}
                                    onClick={() => setOpenDropdown(null)}
                                    className={cn(
                                      "block py-1.5 px-2 -mx-2 text-[13px] rounded-md transition-colors duration-150 cursor-pointer",
                                      location.pathname === item.href
                                        ? "text-accent font-medium bg-accent/10"
                                        : "text-foreground/70 hover:text-foreground hover:bg-muted"
                                    )}
                                  >
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          {/* CTA Column */}
                          <div className="hidden lg:flex flex-col lg:pl-6">
                            <div className="flex-1 flex flex-col justify-between bg-gradient-to-br from-accent/5 to-accent/10 border border-accent/20 rounded-xl p-5">
                              <div>
                                <h4 className="font-semibold text-foreground mb-2">Not sure where to start?</h4>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                  Tell us about your project and we'll recommend the perfect solution.
                                </p>
                              </div>
                              <Button variant="accent" size="sm" className="w-full mt-4" asChild>
                                <Link to="/get-started" onClick={() => setOpenDropdown(null)}>
                                  Get Started
                                  <ArrowRight className="w-4 h-4 ml-1" />
                                </Link>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Footer */}
                      <div className="px-6 py-3 bg-muted/30 border-t border-border/50 flex items-center justify-between text-xs text-muted-foreground">
                        <span>Need help choosing? <a href="mailto:contenthouse@9yards.co.ug" onClick={() => setOpenDropdown(null)} className="text-accent hover:underline cursor-pointer">Contact us</a></span>
                        <span className="hidden sm:inline">Response within 24 hours</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Dropdown for Why Us */}
                {link.dropdownType === "whyUs" && openDropdown === "whyUs" && (
                  <div 
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[220px] z-50"
                    onMouseEnter={() => handleMouseEnter("whyUs")}
                    onMouseLeave={handleMouseLeave}
                    data-dropdown-content
                  >
                    <div className="bg-background/95 backdrop-blur-xl rounded-xl shadow-2xl shadow-black/10 border border-border/50 overflow-hidden">
                      <div className="p-3">
                        {whyUsItems.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            onClick={() => setOpenDropdown(null)}
                            className={cn(
                              "block px-3 py-2.5 text-[13px] rounded-lg transition-colors duration-150 cursor-pointer",
                              location.pathname === item.href
                                ? "text-accent font-medium bg-accent/10"
                                : "text-foreground/70 hover:text-foreground hover:bg-muted"
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
                {link.dropdownType === "company" && openDropdown === "company" && (
                  <div 
                    className="absolute top-full right-0 pt-2 w-[200px] z-50"
                    onMouseEnter={() => handleMouseEnter("company")}
                    onMouseLeave={handleMouseLeave}
                    data-dropdown-content
                  >
                    <div className="bg-background/95 backdrop-blur-xl rounded-xl shadow-2xl shadow-black/10 border border-border/50 overflow-hidden">
                      <div className="p-3">
                        {companyItems.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            onClick={() => setOpenDropdown(null)}
                            className={cn(
                              "block px-3 py-2.5 text-[13px] rounded-lg transition-colors duration-150 cursor-pointer",
                              location.pathname === item.href
                                ? "text-accent font-medium bg-accent/10"
                                : "text-foreground/70 hover:text-foreground hover:bg-muted"
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
            <div className="flex-1 overflow-y-auto px-4 sm:px-6 pt-6 pb-4">
              {/* Services Dropdown with accordion animation */}
              <div className={cn(
                "rounded-xl transition-colors duration-200",
                isServicesOpen && "bg-muted/50"
              )}>
                <button
                  onClick={handleServicesToggle}
                  className={cn(
                    "flex items-center justify-between w-full py-4 px-3 text-base sm:text-lg font-medium rounded-lg tap-highlight transition-colors min-h-[52px] active:bg-muted/70",
                    isServicesActive ? "text-accent" : "text-foreground",
                    isServicesOpen && "text-accent"
                  )}
                >
                  <span className="flex items-center gap-2">
                    {isServicesActive && <span className="w-1.5 h-1.5 rounded-full bg-accent" />}
                    Services
                  </span>
                  <div className={cn(
                    "flex items-center justify-center w-7 h-7 rounded-full transition-all duration-200",
                    isServicesOpen ? "bg-accent/20 text-accent rotate-180" : "bg-muted"
                  )}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>
                <div className={cn("accordion-content", isServicesOpen && "open")}>
                  <div className="accordion-inner">
                    {/* Quick link to all services */}
                    <Link
                      to="/services"
                      className="flex items-center justify-between mx-3 mb-4 py-2.5 px-3 text-sm font-medium text-accent bg-accent/10 rounded-lg hover:bg-accent/20 transition-colors"
                    >
                      View All Services
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <div className="space-y-5 pb-3 mx-3">
                      <div>
                        <h5 className="text-[11px] font-bold uppercase tracking-wider text-accent mb-2 px-2 flex items-center gap-2">
                          <span className="w-1 h-4 bg-accent rounded-full"></span>
                          Creative Services
                        </h5>
                        {services.creative.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className={cn(
                              "flex items-center py-2.5 px-2 text-[13px] rounded-md tap-highlight transition-colors min-h-[40px]",
                              location.pathname === item.href
                                ? "text-accent font-medium bg-accent/10"
                                : "text-foreground/70 hover:text-foreground hover:bg-muted"
                            )}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                      <div className="border-t border-border/50 pt-4">
                        <h5 className="text-[11px] font-bold uppercase tracking-wider text-accent mb-2 px-2 flex items-center gap-2">
                          <span className="w-1 h-4 bg-accent rounded-full"></span>
                          Digital & Strategy
                        </h5>
                        {services.digital.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className={cn(
                              "flex items-center py-2.5 px-2 text-[13px] rounded-md tap-highlight transition-colors min-h-[40px]",
                              location.pathname === item.href
                                ? "text-accent font-medium bg-accent/10"
                                : "text-foreground/70 hover:text-foreground hover:bg-muted"
                            )}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                      <div className="border-t border-border/50 pt-4">
                        <h5 className="text-[11px] font-bold uppercase tracking-wider text-accent mb-2 px-2 flex items-center gap-2">
                          <span className="w-1 h-4 bg-accent rounded-full"></span>
                          Media Production
                        </h5>
                        {services.media.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className={cn(
                              "flex items-center py-2.5 px-2 text-[13px] rounded-md tap-highlight transition-colors min-h-[40px]",
                              location.pathname === item.href
                                ? "text-accent font-medium bg-accent/10"
                                : "text-foreground/70 hover:text-foreground hover:bg-muted"
                            )}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                      <div className="border-t border-border/50 pt-4">
                        <h5 className="text-[11px] font-bold uppercase tracking-wider text-accent mb-2 px-2 flex items-center gap-2">
                          <span className="w-1 h-4 bg-accent rounded-full"></span>
                          AI Services
                        </h5>
                        {services.ai.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className={cn(
                              "flex items-center py-2.5 px-2 text-[13px] rounded-md tap-highlight transition-colors min-h-[40px]",
                              location.pathname === item.href
                                ? "text-accent font-medium bg-accent/10"
                                : "text-foreground/70 hover:text-foreground hover:bg-muted"
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
              <div className="h-px bg-border/50 mx-2" />

              {/* Our Work Link */}
              <Link
                to="/portfolio"
                className={cn(
                  "flex items-center gap-2 py-4 px-3 text-base sm:text-lg font-medium rounded-lg tap-highlight transition-colors min-h-[52px]",
                  location.pathname === "/portfolio"
                    ? "text-accent"
                    : "text-foreground hover:text-accent"
                )}
              >
                {location.pathname === "/portfolio" && <span className="w-1.5 h-1.5 rounded-full bg-accent" />}
                Our Work
              </Link>

              {/* Separator */}
              <div className="h-px bg-border/50 mx-2" />

              {/* Why Us Dropdown with accordion animation */}
              <div className={cn(
                "rounded-xl transition-colors duration-200",
                isWhyUsOpen && "bg-muted/50"
              )}>
                <button
                  onClick={handleWhyUsToggle}
                  className={cn(
                    "flex items-center justify-between w-full py-4 px-3 text-base sm:text-lg font-medium rounded-lg tap-highlight transition-colors min-h-[52px] active:bg-muted/70",
                    isWhyUsActive ? "text-accent" : "text-foreground",
                    isWhyUsOpen && "text-accent"
                  )}
                >
                  <span className="flex items-center gap-2">
                    {isWhyUsActive && <span className="w-1.5 h-1.5 rounded-full bg-accent" />}
                    Why Us
                  </span>
                  <div className={cn(
                    "flex items-center justify-center w-7 h-7 rounded-full transition-all duration-200",
                    isWhyUsOpen ? "bg-accent/20 text-accent rotate-180" : "bg-muted"
                  )}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>
                <div className={cn("accordion-content", isWhyUsOpen && "open")}>
                  <div className="accordion-inner">
                    <div className="pb-3 mx-3">
                      {whyUsItems.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className={cn(
                            "flex items-center py-2.5 px-2 text-[13px] rounded-md tap-highlight transition-colors min-h-[40px]",
                            location.pathname === item.href
                              ? "text-accent font-medium bg-accent/10"
                              : "text-foreground/70 hover:text-foreground hover:bg-muted"
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
              <div className="h-px bg-border/50 mx-2" />

              {/* Company Dropdown with accordion animation */}
              <div className={cn(
                "rounded-xl transition-colors duration-200",
                isCompanyOpen && "bg-muted/50"
              )}>
                <button
                  onClick={handleCompanyToggle}
                  className={cn(
                    "flex items-center justify-between w-full py-4 px-3 text-base sm:text-lg font-medium rounded-lg tap-highlight transition-colors min-h-[52px] active:bg-muted/70",
                    isCompanyActive ? "text-accent" : "text-foreground",
                    isCompanyOpen && "text-accent"
                  )}
                >
                  <span className="flex items-center gap-2">
                    {isCompanyActive && <span className="w-1.5 h-1.5 rounded-full bg-accent" />}
                    Company
                  </span>
                  <div className={cn(
                    "flex items-center justify-center w-7 h-7 rounded-full transition-all duration-200",
                    isCompanyOpen ? "bg-accent/20 text-accent rotate-180" : "bg-muted"
                  )}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>
                <div className={cn("accordion-content", isCompanyOpen && "open")}>
                  <div className="accordion-inner">
                    <div className="pb-3 mx-3">
                      {companyItems.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className={cn(
                            "flex items-center py-2.5 px-2 text-[13px] rounded-md tap-highlight transition-colors min-h-[40px]",
                            location.pathname === item.href
                              ? "text-accent font-medium bg-accent/10"
                              : "text-foreground/70 hover:text-foreground hover:bg-muted"
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
            <div className="flex-shrink-0 border-t border-border/50 bg-muted/30 px-4 sm:px-6 py-4 mobile-menu-safe-area">
              <Button variant="accent" size="lg" className="w-full mb-3" asChild>
                <Link to="/get-started">
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              
              {/* Quick Contact Info */}
              <div className="flex items-center justify-center text-xs text-muted-foreground">
                <a 
                  href="mailto:contenthouse@9yards.co.ug" 
                  className="hover:text-accent transition-colors"
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
