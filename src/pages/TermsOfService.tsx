import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { SEO, schemas } from "@/components/shared/SEO";
import { 
  ArrowRight, 
  ChevronDown, 
  ChevronUp,
  FileText, 
  Scale, 
  Briefcase, 
  AlertTriangle, 
  CreditCard, 
  Copyright, 
  Ban, 
  RefreshCw, 
  Mail,
  Clock,
  Home,
  ChevronRight,
  Link as LinkIcon,
  Menu
} from "lucide-react";
import { useState, useEffect, useRef, useMemo } from "react";
import { cn } from "@/lib/utils";

// Terms sections for quick navigation
const termsSections = [
  { id: "services", title: "Our Services", icon: Briefcase },
  { id: "engagement", title: "Engagement and Payment", icon: CreditCard },
  { id: "intellectual-property", title: "Intellectual Property", icon: Copyright },
  { id: "client-responsibilities", title: "Client Responsibilities", icon: Scale },
  { id: "limitations", title: "Limitations of Liability", icon: AlertTriangle },
  { id: "termination", title: "Termination", icon: Ban },
  { id: "changes", title: "Changes to Terms", icon: RefreshCw },
  { id: "contact", title: "Contact Us", icon: Mail },
];

// Calculate reading time based on word count
const WORD_COUNT = 1200;
const WORDS_PER_MINUTE = 200;
const READING_TIME = Math.ceil(WORD_COUNT / WORDS_PER_MINUTE);

// Get auto-updating date (first of current month)
function getLastUpdatedDate(): string {
  const now = new Date();
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  return `${months[now.getMonth()]} 1, ${now.getFullYear()}`;
}

export default function TermsOfService() {
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});
  const [activeSection, setActiveSection] = useState<string>("");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedSection, setCopiedSection] = useState<string | null>(null);
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});
  const contentRef = useRef<HTMLElement | null>(null);

  const lastUpdated = useMemo(() => getLastUpdatedDate(), []);

  // Scroll progress and back to top visibility
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);
      setShowBackToTop(scrollTop > 400);
      // Auto-close mobile TOC when scrolling
      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mobileMenuOpen]);

  // Handle hash links on page load
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          setActiveSection(hash);
        }
      }, 100);
    }
  }, []);

  // Intersection Observer for scroll animations and active section tracking
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    Object.keys(sectionRefs.current).forEach((key) => {
      const element = sectionRefs.current[key];
      if (element) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setIsVisible((prev) => ({ ...prev, [key]: true }));
              setActiveSection(key);
            }
          },
          { threshold: 0.1, rootMargin: "-100px 0px -50% 0px" }
        );
        observer.observe(element);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToContent = () => {
    const contentSection = document.getElementById("services");
    if (contentSection) {
      contentSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const copyLinkToSection = async (sectionId: string) => {
    const url = `${window.location.origin}/terms-of-service#${sectionId}`;
    try {
      await navigator.clipboard.writeText(url);
      setCopiedSection(sectionId);
      setTimeout(() => setCopiedSection(null), 2000);
    } catch (err) {
      console.error("Failed to copy link:", err);
    }
  };

  return (
    <Layout hideFooterCta>
      <SEO
        title="Terms of Service | 9Yards Content House"
        description="Read the terms and conditions for using 9Yards Content House services. Understand our policies on projects, payments, and intellectual property."
        url="/terms-of-service"
        schema={schemas.breadcrumb([{ name: "Home", url: "/" }, { name: "Terms of Service", url: "/terms-of-service" }])}
      />

      {/* Reading Progress Bar */}
      <div 
        className="fixed top-0 left-0 right-0 h-1 bg-muted z-50 print:hidden"
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Reading progress"
      >
        <div 
          className="h-full bg-accent transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[50svh] sm:min-h-[55svh] md:min-h-[60svh] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <div className="w-full h-full bg-gradient-to-br from-[#1c1e70] via-[#212282] to-[#1a1c6e]" />
          {/* Pattern overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-1/4 w-48 sm:w-80 h-48 sm:h-80 bg-accent/20 rounded-full blur-3xl" />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full">
          <div className="container-custom py-16 sm:py-20 md:py-24 lg:py-28">
            <div className="max-w-3xl mx-auto text-center">
              {/* Breadcrumb */}
              <nav 
                className="flex items-center justify-center gap-1.5 sm:gap-2 text-white/60 text-xs sm:text-sm mb-4 sm:mb-6 animate-fade-in opacity-0 [animation-delay:100ms] [animation-fill-mode:forwards]"
                aria-label="Breadcrumb"
              >
                <Link to="/" className="flex items-center gap-1 hover:text-white transition-colors">
                  <Home className="w-3 h-3 sm:w-3.5 sm:h-3.5" aria-hidden="true" />
                  <span className="sr-only sm:not-sr-only">Home</span>
                </Link>
                <ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" aria-hidden="true" />
                <span className="text-white/80">Legal</span>
                <ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" aria-hidden="true" />
                <span className="text-white">Terms of Service</span>
              </nav>

              {/* Icon */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mx-auto mb-4 sm:mb-6 animate-fade-in opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards]">
                <FileText className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" aria-hidden="true" />
              </div>

              {/* Headline */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.1] mb-4 sm:mb-5 tracking-tight animate-fade-in opacity-0 [animation-delay:300ms] [animation-fill-mode:forwards]">
                Terms of Service
              </h1>

              {/* Subheadline */}
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/80 leading-relaxed mb-4 sm:mb-6 px-4 animate-fade-in opacity-0 [animation-delay:400ms] [animation-fill-mode:forwards]">
                The terms and conditions that govern our working relationship. Please read carefully before engaging our services.
              </p>

              {/* Meta info */}
              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm text-white/60 animate-fade-in opacity-0 [animation-delay:500ms] [animation-fill-mode:forwards]">
                <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                  {READING_TIME} min read
                </span>
                <span className="bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  Updated {lastUpdated}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToContent}
          aria-label="Scroll to terms content"
          className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 sm:gap-2 text-white/60 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-full p-2 animate-fade-in opacity-0 [animation-delay:700ms] [animation-fill-mode:forwards] print:hidden"
        >
          <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 animate-bounce" aria-hidden="true" />
        </button>
      </section>

      {/* Mobile Table of Contents */}
      <div className="lg:hidden sticky top-1 z-40 px-4 py-2 print:hidden">
        <div className="bg-background/95 backdrop-blur-sm border border-border rounded-xl shadow-lg">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-foreground"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-toc"
          >
            <span className="flex items-center gap-2">
              <Menu className="w-4 h-4" aria-hidden="true" />
              Table of Contents
            </span>
            <ChevronDown 
              className={cn(
                "w-4 h-4 transition-transform duration-200",
                mobileMenuOpen && "rotate-180"
              )} 
              aria-hidden="true" 
            />
          </button>
          
          {mobileMenuOpen && (
            <nav id="mobile-toc" className="px-2 pb-2" aria-label="Table of contents">
              <div className="border-t border-border pt-2">
                {termsSections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={cn(
                      "flex items-center gap-2.5 w-full px-3 py-2.5 rounded-lg text-sm text-left transition-all duration-200",
                      activeSection === section.id
                        ? "bg-accent/10 text-accent font-medium"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    )}
                  >
                    <section.icon className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                    {section.title}
                  </button>
                ))}
              </div>
            </nav>
          )}
        </div>
      </div>

      {/* Terms Content */}
      <section ref={contentRef} className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-12">
            {/* Sidebar Navigation - Desktop */}
            <aside className="hidden lg:block lg:col-span-3 print:hidden">
              <div className="sticky top-8 space-y-1">
                <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-4">
                  On This Page
                </p>
                <nav aria-label="Terms sections">
                  {termsSections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={cn(
                        "flex items-center gap-2.5 w-full px-3 py-2.5 rounded-lg text-sm text-left transition-all duration-200",
                        activeSection === section.id
                          ? "bg-accent/10 text-accent font-medium"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                      )}
                    >
                      <section.icon className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                      {section.title}
                    </button>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Main Content */}
            <div className="lg:col-span-9">
              <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none print:prose-sm">
                {/* Introduction */}
                <div
                  ref={(el) => (sectionRefs.current["intro"] = el)}
                  className={cn(
                    "mb-8 sm:mb-10 lg:mb-12 transition-all duration-700",
                    isVisible["intro"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  )}
                >
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                    Welcome to 9Yards Content House. These Terms of Service ("Terms") govern your use of our website and services. By engaging our services or using our website, you agree to be bound by these Terms. If you do not agree with any part of these Terms, please do not use our services.
                  </p>
                </div>

                {/* Our Services */}
                <div
                  id="services"
                  ref={(el) => (sectionRefs.current["services"] = el)}
                  className={cn(
                    "mb-8 sm:mb-10 lg:mb-12 scroll-mt-20 lg:scroll-mt-24 transition-all duration-700",
                    isVisible["services"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  )}
                >
                  <div className="flex items-center justify-between gap-3 mb-3 sm:mb-4">
                    <div className="flex items-center gap-2.5 sm:gap-3">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-accent/10 flex items-center justify-center">
                        <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-accent" aria-hidden="true" />
                      </div>
                      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground m-0">
                        Our Services
                      </h2>
                    </div>
                    <button
                      onClick={() => copyLinkToSection("services")}
                      className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 focus-visible:text-foreground focus-visible:bg-muted/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent transition-colors print:hidden"
                      aria-label="Copy link to this section"
                      title="Copy link to section"
                    >
                      <LinkIcon className={cn(
                        "w-4 h-4 transition-colors",
                        copiedSection === "services" && "text-accent"
                      )} />
                    </button>
                  </div>

                  <div className="space-y-3 sm:space-y-4 text-muted-foreground text-sm sm:text-base">
                    <p className="leading-relaxed">
                      9Yards Content House provides creative and marketing services including, but not limited to:
                    </p>
                    <ul className="list-disc pl-4 sm:pl-5 space-y-1.5 sm:space-y-2">
                      <li><strong>Creative Services:</strong> Graphic design, video production, photography, branding, print design, motion graphics, and visual content creation</li>
                      <li><strong>Digital Marketing:</strong> Social media management, influencer marketing, email marketing, website development, and digital strategy</li>
                      <li><strong>Media Production:</strong> Podcast production, TV and radio production, voice-over recording, and studio rental services</li>
                      <li><strong>Strategy and Consulting:</strong> Brand strategy, creative consulting, and AI-powered workflow solutions</li>
                    </ul>
                    <p className="leading-relaxed">
                      All services are subject to availability and the specific terms outlined in individual project proposals or subscription agreements.
                    </p>
                  </div>
                </div>

                {/* Engagement and Payment */}
                <div
                  id="engagement"
                  ref={(el) => (sectionRefs.current["engagement"] = el)}
                  className={cn(
                    "mb-8 sm:mb-10 lg:mb-12 scroll-mt-20 lg:scroll-mt-24 transition-all duration-700",
                    isVisible["engagement"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  )}
                >
                  <div className="flex items-center justify-between gap-3 mb-3 sm:mb-4">
                    <div className="flex items-center gap-2.5 sm:gap-3">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-accent/10 flex items-center justify-center">
                        <CreditCard className="w-4 h-4 sm:w-5 sm:h-5 text-accent" aria-hidden="true" />
                      </div>
                      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground m-0">
                        Engagement and Payment
                      </h2>
                    </div>
                    <button
                      onClick={() => copyLinkToSection("engagement")}
                      className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 focus-visible:text-foreground focus-visible:bg-muted/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent transition-colors print:hidden"
                      aria-label="Copy link to this section"
                      title="Copy link to section"
                    >
                      <LinkIcon className={cn(
                        "w-4 h-4 transition-colors",
                        copiedSection === "engagement" && "text-accent"
                      )} />
                    </button>
                  </div>

                  <div className="space-y-4 sm:space-y-6 text-muted-foreground text-sm sm:text-base">
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">Project-Based Work</h3>
                      <ul className="list-disc pl-4 sm:pl-5 space-y-1.5 sm:space-y-2">
                        <li>All projects begin upon receipt of a signed proposal or agreement and any required deposit</li>
                        <li>Project scope, deliverables, timeline, and pricing are defined in individual proposals</li>
                        <li>Changes to project scope may result in additional charges and timeline adjustments</li>
                        <li>A deposit of 50% is typically required before project commencement, with the balance due upon delivery</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">Subscription Services</h3>
                      <ul className="list-disc pl-4 sm:pl-5 space-y-1.5 sm:space-y-2">
                        <li>Subscription plans are billed monthly in advance</li>
                        <li>Subscriptions may be paused or cancelled with 30 days written notice</li>
                        <li>Unused credits or requests do not roll over to subsequent months unless specified</li>
                        <li>Subscription terms are outlined in separate subscription agreements</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">Payment Terms</h3>
                      <ul className="list-disc pl-4 sm:pl-5 space-y-1.5 sm:space-y-2">
                        <li>All prices are quoted in Ugandan Shillings (UGX) unless otherwise specified</li>
                        <li>Invoices are due within 14 days of issue unless otherwise agreed</li>
                        <li>Late payments may incur a 2% monthly interest charge</li>
                        <li>Work may be suspended if payments are overdue by more than 30 days</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Intellectual Property */}
                <div
                  id="intellectual-property"
                  ref={(el) => (sectionRefs.current["intellectual-property"] = el)}
                  className={cn(
                    "mb-8 sm:mb-10 lg:mb-12 scroll-mt-20 lg:scroll-mt-24 transition-all duration-700",
                    isVisible["intellectual-property"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  )}
                >
                  <div className="flex items-center justify-between gap-3 mb-3 sm:mb-4">
                    <div className="flex items-center gap-2.5 sm:gap-3">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-accent/10 flex items-center justify-center">
                        <Copyright className="w-4 h-4 sm:w-5 sm:h-5 text-accent" aria-hidden="true" />
                      </div>
                      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground m-0">
                        Intellectual Property
                      </h2>
                    </div>
                    <button
                      onClick={() => copyLinkToSection("intellectual-property")}
                      className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 focus-visible:text-foreground focus-visible:bg-muted/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent transition-colors print:hidden"
                      aria-label="Copy link to this section"
                      title="Copy link to section"
                    >
                      <LinkIcon className={cn(
                        "w-4 h-4 transition-colors",
                        copiedSection === "intellectual-property" && "text-accent"
                      )} />
                    </button>
                  </div>

                  <div className="space-y-4 sm:space-y-6 text-muted-foreground text-sm sm:text-base">
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">Ownership of Deliverables</h3>
                      <ul className="list-disc pl-4 sm:pl-5 space-y-1.5 sm:space-y-2">
                        <li>Upon full payment, clients receive full ownership rights to final approved deliverables, unless otherwise specified</li>
                        <li>Source files, working files, and raw materials remain the property of 9Yards Content House unless explicitly transferred</li>
                        <li>We may provide source files upon request for an additional fee</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">Portfolio Rights</h3>
                      <p className="leading-relaxed mb-2 sm:mb-3">
                        Unless otherwise agreed in writing, 9Yards Content House reserves the right to:
                      </p>
                      <ul className="list-disc pl-4 sm:pl-5 space-y-1.5 sm:space-y-2">
                        <li>Display completed work in our portfolio, website, and marketing materials</li>
                        <li>Describe the work and the nature of the project in case studies</li>
                        <li>Submit work for industry awards and recognition</li>
                      </ul>
                      <p className="leading-relaxed mt-2 sm:mt-3">
                        Clients may request confidentiality for sensitive projects, which will be honored upon written agreement.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">Third-Party Assets</h3>
                      <p className="leading-relaxed">
                        Projects may incorporate stock images, fonts, music, or other licensed materials. Clients are responsible for any ongoing licensing fees for third-party assets after project completion, unless we provide fully licensed or royalty-free alternatives.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Client Responsibilities */}
                <div
                  id="client-responsibilities"
                  ref={(el) => (sectionRefs.current["client-responsibilities"] = el)}
                  className={cn(
                    "mb-8 sm:mb-10 lg:mb-12 scroll-mt-20 lg:scroll-mt-24 transition-all duration-700",
                    isVisible["client-responsibilities"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  )}
                >
                  <div className="flex items-center justify-between gap-3 mb-3 sm:mb-4">
                    <div className="flex items-center gap-2.5 sm:gap-3">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-accent/10 flex items-center justify-center">
                        <Scale className="w-4 h-4 sm:w-5 sm:h-5 text-accent" aria-hidden="true" />
                      </div>
                      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground m-0">
                        Client Responsibilities
                      </h2>
                    </div>
                    <button
                      onClick={() => copyLinkToSection("client-responsibilities")}
                      className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 focus-visible:text-foreground focus-visible:bg-muted/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent transition-colors print:hidden"
                      aria-label="Copy link to this section"
                      title="Copy link to section"
                    >
                      <LinkIcon className={cn(
                        "w-4 h-4 transition-colors",
                        copiedSection === "client-responsibilities" && "text-accent"
                      )} />
                    </button>
                  </div>

                  <div className="space-y-3 sm:space-y-4 text-muted-foreground text-sm sm:text-base">
                    <p className="leading-relaxed">
                      To ensure successful project delivery, clients agree to:
                    </p>
                    <ul className="list-disc pl-4 sm:pl-5 space-y-1.5 sm:space-y-2">
                      <li>Provide clear project briefs, brand assets, and required materials in a timely manner</li>
                      <li>Designate a single point of contact for project communications and approvals</li>
                      <li>Provide feedback within agreed timeframes (typically 48 to 72 hours for review rounds)</li>
                      <li>Ensure all materials provided do not infringe on third-party intellectual property rights</li>
                      <li>Obtain necessary permissions for use of any logos, images, or content provided</li>
                      <li>Comply with all applicable laws and regulations related to their industry</li>
                    </ul>
                    <p className="leading-relaxed">
                      Delays caused by client-side issues may result in timeline extensions and potential additional charges.
                    </p>
                  </div>
                </div>

                {/* Revisions and Approvals */}
                <div
                  ref={(el) => (sectionRefs.current["revisions"] = el)}
                  className={cn(
                    "mb-8 sm:mb-10 lg:mb-12 scroll-mt-20 lg:scroll-mt-24 transition-all duration-700",
                    isVisible["revisions"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  )}
                >
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-3 sm:mb-4">
                    Revisions and Approvals
                  </h2>

                  <div className="space-y-3 sm:space-y-4 text-muted-foreground text-sm sm:text-base">
                    <ul className="list-disc pl-4 sm:pl-5 space-y-1.5 sm:space-y-2">
                      <li>The number of revision rounds included is specified in each project proposal or subscription tier</li>
                      <li>Additional revisions beyond the included rounds will be billed at our standard hourly rate</li>
                      <li>Major changes to concept direction after approval may be treated as new work and billed accordingly</li>
                      <li>Written approval (email confirmation) is required to proceed with production and final delivery</li>
                      <li>Final approval signifies acceptance of the work as complete</li>
                    </ul>
                  </div>
                </div>

                {/* Limitations of Liability */}
                <div
                  id="limitations"
                  ref={(el) => (sectionRefs.current["limitations"] = el)}
                  className={cn(
                    "mb-8 sm:mb-10 lg:mb-12 scroll-mt-20 lg:scroll-mt-24 transition-all duration-700",
                    isVisible["limitations"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  )}
                >
                  <div className="flex items-center justify-between gap-3 mb-3 sm:mb-4">
                    <div className="flex items-center gap-2.5 sm:gap-3">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-accent/10 flex items-center justify-center">
                        <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-accent" aria-hidden="true" />
                      </div>
                      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground m-0">
                        Limitations of Liability
                      </h2>
                    </div>
                    <button
                      onClick={() => copyLinkToSection("limitations")}
                      className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 focus-visible:text-foreground focus-visible:bg-muted/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent transition-colors print:hidden"
                      aria-label="Copy link to this section"
                      title="Copy link to section"
                    >
                      <LinkIcon className={cn(
                        "w-4 h-4 transition-colors",
                        copiedSection === "limitations" && "text-accent"
                      )} />
                    </button>
                  </div>

                  <div className="space-y-3 sm:space-y-4 text-muted-foreground text-sm sm:text-base">
                    <p className="leading-relaxed">
                      To the maximum extent permitted by law:
                    </p>
                    <ul className="list-disc pl-4 sm:pl-5 space-y-1.5 sm:space-y-2">
                      <li>9Yards Content House shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from our services</li>
                      <li>Our total liability for any claim shall not exceed the amount paid by the client for the specific service giving rise to the claim</li>
                      <li>We are not responsible for the success or failure of marketing campaigns, as results depend on many factors beyond our control</li>
                      <li>We are not liable for any delays or failures caused by circumstances beyond our reasonable control (force majeure)</li>
                      <li>Clients are responsible for reviewing and approving all content before publication; we are not liable for errors in approved work</li>
                    </ul>
                  </div>
                </div>

                {/* Confidentiality */}
                <div
                  ref={(el) => (sectionRefs.current["confidentiality"] = el)}
                  className={cn(
                    "mb-8 sm:mb-10 lg:mb-12 scroll-mt-20 lg:scroll-mt-24 transition-all duration-700",
                    isVisible["confidentiality"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  )}
                >
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-3 sm:mb-4">
                    Confidentiality
                  </h2>

                  <div className="space-y-3 sm:space-y-4 text-muted-foreground text-sm sm:text-base">
                    <p className="leading-relaxed">
                      Both parties agree to maintain the confidentiality of proprietary information shared during the course of our engagement. This includes:
                    </p>
                    <ul className="list-disc pl-4 sm:pl-5 space-y-1.5 sm:space-y-2">
                      <li>Business strategies, marketing plans, and trade secrets</li>
                      <li>Unreleased products, services, or campaigns</li>
                      <li>Financial information and pricing discussions</li>
                      <li>Any information marked as confidential</li>
                    </ul>
                    <p className="leading-relaxed">
                      This obligation survives the termination of our engagement. Specific NDA agreements are available upon request for sensitive projects.
                    </p>
                  </div>
                </div>

                {/* Termination */}
                <div
                  id="termination"
                  ref={(el) => (sectionRefs.current["termination"] = el)}
                  className={cn(
                    "mb-8 sm:mb-10 lg:mb-12 scroll-mt-20 lg:scroll-mt-24 transition-all duration-700",
                    isVisible["termination"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  )}
                >
                  <div className="flex items-center justify-between gap-3 mb-3 sm:mb-4">
                    <div className="flex items-center gap-2.5 sm:gap-3">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-accent/10 flex items-center justify-center">
                        <Ban className="w-4 h-4 sm:w-5 sm:h-5 text-accent" aria-hidden="true" />
                      </div>
                      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground m-0">
                        Termination
                      </h2>
                    </div>
                    <button
                      onClick={() => copyLinkToSection("termination")}
                      className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 focus-visible:text-foreground focus-visible:bg-muted/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent transition-colors print:hidden"
                      aria-label="Copy link to this section"
                      title="Copy link to section"
                    >
                      <LinkIcon className={cn(
                        "w-4 h-4 transition-colors",
                        copiedSection === "termination" && "text-accent"
                      )} />
                    </button>
                  </div>

                  <div className="space-y-3 sm:space-y-4 text-muted-foreground text-sm sm:text-base">
                    <ul className="list-disc pl-4 sm:pl-5 space-y-1.5 sm:space-y-2">
                      <li>Either party may terminate a project with 14 days written notice</li>
                      <li>Upon termination, the client shall pay for all work completed up to the termination date</li>
                      <li>Deposits are non-refundable unless otherwise agreed in writing</li>
                      <li>Upon termination, clients receive deliverables for work paid in full; incomplete work remains property of 9Yards Content House</li>
                      <li>We reserve the right to terminate engagements immediately for non-payment, breach of terms, or unethical conduct</li>
                    </ul>
                  </div>
                </div>

                {/* Changes to Terms */}
                <div
                  id="changes"
                  ref={(el) => (sectionRefs.current["changes"] = el)}
                  className={cn(
                    "mb-8 sm:mb-10 lg:mb-12 scroll-mt-20 lg:scroll-mt-24 transition-all duration-700",
                    isVisible["changes"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  )}
                >
                  <div className="flex items-center justify-between gap-3 mb-3 sm:mb-4">
                    <div className="flex items-center gap-2.5 sm:gap-3">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-accent/10 flex items-center justify-center">
                        <RefreshCw className="w-4 h-4 sm:w-5 sm:h-5 text-accent" aria-hidden="true" />
                      </div>
                      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground m-0">
                        Changes to Terms
                      </h2>
                    </div>
                    <button
                      onClick={() => copyLinkToSection("changes")}
                      className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 focus-visible:text-foreground focus-visible:bg-muted/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent transition-colors print:hidden"
                      aria-label="Copy link to this section"
                      title="Copy link to section"
                    >
                      <LinkIcon className={cn(
                        "w-4 h-4 transition-colors",
                        copiedSection === "changes" && "text-accent"
                      )} />
                    </button>
                  </div>

                  <div className="space-y-3 sm:space-y-4 text-muted-foreground text-sm sm:text-base">
                    <p className="leading-relaxed">
                      We may update these Terms of Service from time to time. Changes will be posted on this page with an updated effective date. Material changes will be communicated to active clients via email.
                    </p>
                    <p className="leading-relaxed">
                      Continued use of our services after changes constitutes acceptance of the updated Terms. We encourage you to review these Terms periodically.
                    </p>
                  </div>
                </div>

                {/* Governing Law */}
                <div
                  ref={(el) => (sectionRefs.current["governing-law"] = el)}
                  className={cn(
                    "mb-8 sm:mb-10 lg:mb-12 scroll-mt-20 lg:scroll-mt-24 transition-all duration-700",
                    isVisible["governing-law"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  )}
                >
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-3 sm:mb-4">
                    Governing Law
                  </h2>

                  <div className="space-y-3 sm:space-y-4 text-muted-foreground text-sm sm:text-base">
                    <p className="leading-relaxed">
                      These Terms shall be governed by and construed in accordance with the laws of the Republic of Uganda. Any disputes arising from these Terms or our services shall be subject to the exclusive jurisdiction of the courts of Uganda.
                    </p>
                  </div>
                </div>

                {/* Contact Us */}
                <div
                  id="contact"
                  ref={(el) => (sectionRefs.current["contact"] = el)}
                  className={cn(
                    "scroll-mt-20 lg:scroll-mt-24 transition-all duration-700",
                    isVisible["contact"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  )}
                >
                  <div className="flex items-center justify-between gap-3 mb-3 sm:mb-4">
                    <div className="flex items-center gap-2.5 sm:gap-3">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-accent/10 flex items-center justify-center">
                        <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-accent" aria-hidden="true" />
                      </div>
                      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground m-0">
                        Contact Us
                      </h2>
                    </div>
                    <button
                      onClick={() => copyLinkToSection("contact")}
                      className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 focus-visible:text-foreground focus-visible:bg-muted/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent transition-colors print:hidden"
                      aria-label="Copy link to this section"
                      title="Copy link to section"
                    >
                      <LinkIcon className={cn(
                        "w-4 h-4 transition-colors",
                        copiedSection === "contact" && "text-accent"
                      )} />
                    </button>
                  </div>

                  <div className="space-y-3 sm:space-y-4 text-muted-foreground text-sm sm:text-base">
                    <p className="leading-relaxed">
                      If you have questions about these Terms of Service, please contact us:
                    </p>

                    <div className="bg-muted/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-border">
                      <p className="font-semibold text-foreground mb-2 sm:mb-3 text-base sm:text-lg">9Yards Content House</p>
                      <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
                        <p>
                          <strong>Email:</strong>{" "}
                          <a href="mailto:contenthouse@9yards.co.ug" className="text-accent hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded">
                            contenthouse@9yards.co.ug
                          </a>
                        </p>
                        <p>
                          <strong>Phone:</strong>{" "}
                          <a href="tel:+256700488870" className="text-accent hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded">
                            +256 700 488 870
                          </a>
                        </p>
                        <p><strong>Location:</strong> Kampala, Uganda</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 sm:py-12 md:py-16 lg:py-20 bg-[#f8f8f5] print:hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-3 sm:mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
              Now that you understand our terms, let us discuss how we can help bring your creative vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button
                asChild
                variant="accent"
                size="lg"
                className="rounded-full px-6 sm:px-8 h-11 sm:h-12"
              >
                <Link to="/get-started">
                  Start a Project
                  <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-6 sm:px-8 h-11 sm:h-12"
              >
                <Link to="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={cn(
          "fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-foreground text-background shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-foreground/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent print:hidden",
          showBackToTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        )}
        aria-label="Back to top"
      >
        <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
      </button>

      {/* Print Styles */}
      <style>{`
        @media print {
          body {
            font-size: 12pt;
            line-height: 1.5;
          }
          .prose {
            max-width: none;
          }
          h1, h2, h3 {
            page-break-after: avoid;
          }
          ul, ol {
            page-break-inside: avoid;
          }
        }
      `}</style>
    </Layout>
  );
}
