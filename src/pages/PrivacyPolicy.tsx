import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/shared/SEO";
import { 
  ArrowRight, 
  ChevronDown, 
  ChevronUp,
  Shield, 
  Lock, 
  Eye, 
  Database, 
  UserCheck, 
  Globe, 
  Mail,
  Clock,
  Home,
  ChevronRight,
  Link as LinkIcon,
  Menu
} from "lucide-react";
import { useState, useEffect, useRef, useMemo } from "react";
import { cn } from "@/lib/utils";

// Policy sections for quick navigation
const policySections = [
  { id: "information-we-collect", title: "Information We Collect", icon: Database },
  { id: "how-we-use", title: "How We Use Your Information", icon: Eye },
  { id: "sharing", title: "Information Sharing", icon: Globe },
  { id: "data-security", title: "Data Security", icon: Lock },
  { id: "your-rights", title: "Your Rights", icon: UserCheck },
  { id: "contact", title: "Contact Us", icon: Mail },
];

// Calculate reading time based on word count
const WORD_COUNT = 850;
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

export default function PrivacyPolicy() {
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
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
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
    const contentSection = document.getElementById("information-we-collect");
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
    const url = `${window.location.origin}/privacy-policy#${sectionId}`;
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
        title="Privacy Policy | 9Yards Content House"
        description="Learn how 9Yards Content House collects, uses, and protects your personal information. Your privacy matters to us."
        url="/privacy-policy"
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
            <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-48 sm:w-80 h-48 sm:h-80 bg-accent/20 rounded-full blur-3xl" />
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
                <span className="text-white">Privacy Policy</span>
              </nav>

              {/* Icon */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mx-auto mb-4 sm:mb-6 animate-fade-in opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards]">
                <Shield className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" aria-hidden="true" />
              </div>

              {/* Headline */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.1] mb-4 sm:mb-5 tracking-tight animate-fade-in opacity-0 [animation-delay:300ms] [animation-fill-mode:forwards]">
                Privacy Policy
              </h1>

              {/* Subheadline */}
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/80 leading-relaxed mb-4 sm:mb-6 px-4 animate-fade-in opacity-0 [animation-delay:400ms] [animation-fill-mode:forwards]">
                Your privacy matters to us. Learn how we collect, use, and protect your personal information.
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
          aria-label="Scroll to policy content"
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
                {policySections.map((section) => (
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

      {/* Policy Content */}
      <section ref={contentRef} className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-12">
            {/* Sidebar Navigation - Desktop */}
            <aside className="hidden lg:block lg:col-span-3 print:hidden">
              <div className="sticky top-8 space-y-1">
                <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-4">
                  On This Page
                </p>
                <nav aria-label="Policy sections">
                  {policySections.map((section) => (
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
                    9Yards Content House ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or engage with us in any way. Please read this policy carefully to understand our practices regarding your personal data.
                  </p>
                </div>

                {/* Information We Collect */}
                <div
                  id="information-we-collect"
                  ref={(el) => (sectionRefs.current["information-we-collect"] = el)}
                  className={cn(
                    "mb-8 sm:mb-10 lg:mb-12 scroll-mt-20 lg:scroll-mt-24 transition-all duration-700",
                    isVisible["information-we-collect"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  )}
                >
                  <div className="flex items-center justify-between gap-3 mb-3 sm:mb-4">
                    <div className="flex items-center gap-2.5 sm:gap-3">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-accent/10 flex items-center justify-center">
                        <Database className="w-4 h-4 sm:w-5 sm:h-5 text-accent" aria-hidden="true" />
                      </div>
                      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground m-0">
                        Information We Collect
                      </h2>
                    </div>
                    <button
                      onClick={() => copyLinkToSection("information-we-collect")}
                      className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors print:hidden"
                      aria-label="Copy link to this section"
                      title="Copy link to section"
                    >
                      <LinkIcon className={cn(
                        "w-4 h-4 transition-colors",
                        copiedSection === "information-we-collect" && "text-accent"
                      )} />
                    </button>
                  </div>

                  <div className="space-y-4 sm:space-y-6 text-muted-foreground">
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">Personal Information You Provide</h3>
                      <p className="leading-relaxed mb-2 sm:mb-3 text-sm sm:text-base">
                        When you contact us, request a quote, or use our services, you may provide us with:
                      </p>
                      <ul className="list-disc pl-4 sm:pl-5 space-y-1.5 sm:space-y-2 text-sm sm:text-base">
                        <li>Name and contact information (email address, phone number)</li>
                        <li>Company or organization name</li>
                        <li>Project details and creative briefs</li>
                        <li>Payment and billing information</li>
                        <li>Any other information you choose to share</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">Information Collected Automatically</h3>
                      <p className="leading-relaxed mb-2 sm:mb-3 text-sm sm:text-base">
                        When you visit our website, we may automatically collect:
                      </p>
                      <ul className="list-disc pl-4 sm:pl-5 space-y-1.5 sm:space-y-2 text-sm sm:text-base">
                        <li>Device information (browser type, operating system)</li>
                        <li>IP address and approximate location</li>
                        <li>Pages visited and time spent on our site</li>
                        <li>Referring website or source</li>
                        <li>Cookies and similar tracking technologies</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* How We Use Your Information */}
                <div
                  id="how-we-use"
                  ref={(el) => (sectionRefs.current["how-we-use"] = el)}
                  className={cn(
                    "mb-8 sm:mb-10 lg:mb-12 scroll-mt-20 lg:scroll-mt-24 transition-all duration-700",
                    isVisible["how-we-use"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  )}
                >
                  <div className="flex items-center justify-between gap-3 mb-3 sm:mb-4">
                    <div className="flex items-center gap-2.5 sm:gap-3">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-accent/10 flex items-center justify-center">
                        <Eye className="w-4 h-4 sm:w-5 sm:h-5 text-accent" aria-hidden="true" />
                      </div>
                      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground m-0">
                        How We Use Your Information
                      </h2>
                    </div>
                    <button
                      onClick={() => copyLinkToSection("how-we-use")}
                      className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors print:hidden"
                      aria-label="Copy link to this section"
                      title="Copy link to section"
                    >
                      <LinkIcon className={cn(
                        "w-4 h-4 transition-colors",
                        copiedSection === "how-we-use" && "text-accent"
                      )} />
                    </button>
                  </div>

                  <div className="space-y-3 sm:space-y-4 text-muted-foreground text-sm sm:text-base">
                    <p className="leading-relaxed">
                      We use the information we collect to:
                    </p>
                    <ul className="list-disc pl-4 sm:pl-5 space-y-1.5 sm:space-y-2">
                      <li><strong>Provide our services:</strong> Deliver creative work including video production, graphic design, branding, social media marketing, and other services you request</li>
                      <li><strong>Communicate with you:</strong> Respond to inquiries, send project updates, and provide customer support</li>
                      <li><strong>Process payments:</strong> Handle billing and financial transactions</li>
                      <li><strong>Improve our services:</strong> Analyze usage patterns to enhance our website and offerings</li>
                      <li><strong>Marketing:</strong> Send promotional materials (with your consent) about our services, new offerings, and industry insights</li>
                      <li><strong>Legal compliance:</strong> Meet legal obligations and protect our rights</li>
                    </ul>
                  </div>
                </div>

                {/* Information Sharing */}
                <div
                  id="sharing"
                  ref={(el) => (sectionRefs.current["sharing"] = el)}
                  className={cn(
                    "mb-8 sm:mb-10 lg:mb-12 scroll-mt-20 lg:scroll-mt-24 transition-all duration-700",
                    isVisible["sharing"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  )}
                >
                  <div className="flex items-center justify-between gap-3 mb-3 sm:mb-4">
                    <div className="flex items-center gap-2.5 sm:gap-3">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-accent/10 flex items-center justify-center">
                        <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-accent" aria-hidden="true" />
                      </div>
                      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground m-0">
                        Information Sharing
                      </h2>
                    </div>
                    <button
                      onClick={() => copyLinkToSection("sharing")}
                      className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors print:hidden"
                      aria-label="Copy link to this section"
                      title="Copy link to section"
                    >
                      <LinkIcon className={cn(
                        "w-4 h-4 transition-colors",
                        copiedSection === "sharing" && "text-accent"
                      )} />
                    </button>
                  </div>

                  <div className="space-y-3 sm:space-y-4 text-muted-foreground text-sm sm:text-base">
                    <p className="leading-relaxed">
                      We do not sell your personal information. We may share your information with:
                    </p>
                    <ul className="list-disc pl-4 sm:pl-5 space-y-1.5 sm:space-y-2">
                      <li><strong>Service providers:</strong> Third-party vendors who help us deliver our services (e.g., payment processors, cloud hosting, analytics providers)</li>
                      <li><strong>Business partners:</strong> Trusted partners who collaborate with us on projects, with your consent</li>
                      <li><strong>Legal requirements:</strong> When required by law, court order, or government request</li>
                      <li><strong>Business transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                    </ul>
                    <p className="leading-relaxed">
                      All third parties are required to handle your data securely and in accordance with applicable privacy laws.
                    </p>
                  </div>
                </div>

                {/* Data Security */}
                <div
                  id="data-security"
                  ref={(el) => (sectionRefs.current["data-security"] = el)}
                  className={cn(
                    "mb-8 sm:mb-10 lg:mb-12 scroll-mt-20 lg:scroll-mt-24 transition-all duration-700",
                    isVisible["data-security"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  )}
                >
                  <div className="flex items-center justify-between gap-3 mb-3 sm:mb-4">
                    <div className="flex items-center gap-2.5 sm:gap-3">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-accent/10 flex items-center justify-center">
                        <Lock className="w-4 h-4 sm:w-5 sm:h-5 text-accent" aria-hidden="true" />
                      </div>
                      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground m-0">
                        Data Security
                      </h2>
                    </div>
                    <button
                      onClick={() => copyLinkToSection("data-security")}
                      className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors print:hidden"
                      aria-label="Copy link to this section"
                      title="Copy link to section"
                    >
                      <LinkIcon className={cn(
                        "w-4 h-4 transition-colors",
                        copiedSection === "data-security" && "text-accent"
                      )} />
                    </button>
                  </div>

                  <div className="space-y-3 sm:space-y-4 text-muted-foreground text-sm sm:text-base">
                    <p className="leading-relaxed">
                      We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                    </p>
                    <ul className="list-disc pl-4 sm:pl-5 space-y-1.5 sm:space-y-2">
                      <li>Secure HTTPS encryption for all website traffic</li>
                      <li>Access controls limiting data access to authorized personnel</li>
                      <li>Regular security assessments and updates</li>
                      <li>Secure payment processing through trusted providers</li>
                    </ul>
                    <p className="leading-relaxed">
                      While we strive to protect your information, no method of transmission over the Internet is 100% secure. We cannot guarantee absolute security.
                    </p>
                  </div>
                </div>

                {/* Your Rights */}
                <div
                  id="your-rights"
                  ref={(el) => (sectionRefs.current["your-rights"] = el)}
                  className={cn(
                    "mb-8 sm:mb-10 lg:mb-12 scroll-mt-20 lg:scroll-mt-24 transition-all duration-700",
                    isVisible["your-rights"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  )}
                >
                  <div className="flex items-center justify-between gap-3 mb-3 sm:mb-4">
                    <div className="flex items-center gap-2.5 sm:gap-3">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-accent/10 flex items-center justify-center">
                        <UserCheck className="w-4 h-4 sm:w-5 sm:h-5 text-accent" aria-hidden="true" />
                      </div>
                      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground m-0">
                        Your Rights
                      </h2>
                    </div>
                    <button
                      onClick={() => copyLinkToSection("your-rights")}
                      className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors print:hidden"
                      aria-label="Copy link to this section"
                      title="Copy link to section"
                    >
                      <LinkIcon className={cn(
                        "w-4 h-4 transition-colors",
                        copiedSection === "your-rights" && "text-accent"
                      )} />
                    </button>
                  </div>

                  <div className="space-y-3 sm:space-y-4 text-muted-foreground text-sm sm:text-base">
                    <p className="leading-relaxed">
                      Depending on your location, you may have the following rights regarding your personal data:
                    </p>
                    <ul className="list-disc pl-4 sm:pl-5 space-y-1.5 sm:space-y-2">
                      <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                      <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data</li>
                      <li><strong>Deletion:</strong> Request deletion of your personal data, subject to legal requirements</li>
                      <li><strong>Opt-out:</strong> Unsubscribe from marketing communications at any time</li>
                      <li><strong>Data portability:</strong> Request your data in a portable format</li>
                    </ul>
                    <p className="leading-relaxed">
                      To exercise any of these rights, please contact us using the information below.
                    </p>
                  </div>
                </div>

                {/* Cookies */}
                <div
                  ref={(el) => (sectionRefs.current["cookies"] = el)}
                  className={cn(
                    "mb-8 sm:mb-10 lg:mb-12 scroll-mt-20 lg:scroll-mt-24 transition-all duration-700",
                    isVisible["cookies"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  )}
                >
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-3 sm:mb-4">
                    Cookies and Tracking
                  </h2>

                  <div className="space-y-3 sm:space-y-4 text-muted-foreground text-sm sm:text-base">
                    <p className="leading-relaxed">
                      We use cookies and similar technologies to enhance your experience on our website. These include:
                    </p>
                    <ul className="list-disc pl-4 sm:pl-5 space-y-1.5 sm:space-y-2">
                      <li><strong>Essential cookies:</strong> Necessary for the website to function properly</li>
                      <li><strong>Analytics cookies:</strong> Help us understand how visitors use our site (Google Analytics)</li>
                      <li><strong>Marketing cookies:</strong> Used to deliver relevant advertisements</li>
                    </ul>
                    <p className="leading-relaxed">
                      You can control cookies through your browser settings. Note that disabling certain cookies may affect website functionality.
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
                      className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors print:hidden"
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
                      If you have questions about this Privacy Policy or wish to exercise your data rights, please contact us:
                    </p>

                    <div className="bg-muted/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-border">
                      <p className="font-semibold text-foreground mb-2 sm:mb-3 text-base sm:text-lg">9Yards Content House</p>
                      <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
                        <p>
                          <strong>Email:</strong>{" "}
                          <a href="mailto:contenthouse@9yards.co.ug" className="text-accent hover:underline">
                            contenthouse@9yards.co.ug
                          </a>
                        </p>
                        <p>
                          <strong>Phone:</strong>{" "}
                          <a href="tel:+256700488870" className="text-accent hover:underline">
                            +256 700 488 870
                          </a>
                        </p>
                        <p><strong>Location:</strong> Kampala, Uganda</p>
                      </div>
                    </div>

                    <p className="leading-relaxed">
                      We will respond to your request within 30 days.
                    </p>
                  </div>
                </div>

                {/* Changes to Policy */}
                <div
                  ref={(el) => (sectionRefs.current["changes"] = el)}
                  className={cn(
                    "mt-8 sm:mt-10 lg:mt-12 pt-6 sm:pt-8 border-t border-border transition-all duration-700",
                    isVisible["changes"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  )}
                >
                  <h2 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">
                    Changes to This Policy
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                    We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated date. We encourage you to review this policy periodically to stay informed about how we protect your information.
                  </p>
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
              Have Questions?
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
              We are happy to answer any questions about our privacy practices or help you exercise your data rights.
            </p>
            <Button
              asChild
              variant="accent"
              size="lg"
              className="rounded-full px-6 sm:px-8 h-11 sm:h-12"
            >
              <Link to="/contact">
                Contact Us
                <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
              </Link>
            </Button>
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
