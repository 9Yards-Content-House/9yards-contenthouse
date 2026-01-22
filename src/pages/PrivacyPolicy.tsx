import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/shared/SEO";
import { ArrowRight, ChevronDown, Shield, Lock, Eye, Database, UserCheck, Globe, Mail } from "lucide-react";
import { useState, useEffect, useRef } from "react";
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

export default function PrivacyPolicy() {
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});
  const [activeSection, setActiveSection] = useState<string>("");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

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
    }
  };

  return (
    <Layout hideFooterCta>
      <SEO
        title="Privacy Policy | 9Yards Content House"
        description="Learn how 9Yards Content House collects, uses, and protects your personal information. Your privacy matters to us."
        url="/privacy-policy"
      />

      {/* Hero Section */}
      <section className="relative min-h-[60svh] sm:min-h-[70svh] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <div className="w-full h-full bg-gradient-to-br from-[#1c1e70] via-[#212282] to-[#1a1c6e]" />
          {/* Pattern overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl" />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full">
          <div className="container-custom py-24 sm:py-28 lg:py-32">
            <div className="max-w-3xl mx-auto text-center">
              {/* Icon */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mx-auto mb-6 animate-fade-in opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards]">
                <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-white" aria-hidden="true" />
              </div>

              {/* Eyebrow */}
              <span className="inline-block text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-4 animate-fade-in opacity-0 [animation-delay:300ms] [animation-fill-mode:forwards]">
                Legal
              </span>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-5 sm:mb-6 tracking-tight animate-fade-in opacity-0 [animation-delay:400ms] [animation-fill-mode:forwards]">
                Privacy Policy
              </h1>

              {/* Subheadline */}
              <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed mb-6 animate-fade-in opacity-0 [animation-delay:500ms] [animation-fill-mode:forwards]">
                Your privacy matters to us. Learn how we collect, use, and protect your personal information.
              </p>

              {/* Last Updated */}
              <p className="text-sm text-white/60 animate-fade-in opacity-0 [animation-delay:600ms] [animation-fill-mode:forwards]">
                Last updated: January 22, 2026
              </p>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToContent}
          aria-label="Scroll to policy content"
          className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-full p-2 animate-fade-in opacity-0 [animation-delay:800ms] [animation-fill-mode:forwards]"
        >
          <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 animate-bounce" aria-hidden="true" />
        </button>
      </section>

      {/* Policy Content */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Sidebar Navigation - Desktop */}
            <aside className="hidden lg:block lg:col-span-3">
              <div className="sticky top-24 space-y-1">
                <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-4">
                  On This Page
                </p>
                <nav aria-label="Policy sections">
                  {policySections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={cn(
                        "flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-sm text-left transition-all duration-200",
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
              <div className="prose prose-lg max-w-none">
                {/* Introduction */}
                <div
                  ref={(el) => (sectionRefs.current["intro"] = el)}
                  className={cn(
                    "mb-12 transition-all duration-700",
                    isVisible["intro"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  )}
                >
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    9Yards Content House ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or engage with us in any way. Please read this policy carefully to understand our practices regarding your personal data.
                  </p>
                </div>

                {/* Information We Collect */}
                <div
                  id="information-we-collect"
                  ref={(el) => (sectionRefs.current["information-we-collect"] = el)}
                  className={cn(
                    "mb-12 scroll-mt-24 transition-all duration-700",
                    isVisible["information-we-collect"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  )}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                      <Database className="w-5 h-5 text-accent" aria-hidden="true" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-foreground m-0">
                      Information We Collect
                    </h2>
                  </div>

                  <div className="space-y-6 text-muted-foreground">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Personal Information You Provide</h3>
                      <p className="leading-relaxed mb-3">
                        When you contact us, request a quote, or use our services, you may provide us with:
                      </p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Name and contact information (email address, phone number)</li>
                        <li>Company or organization name</li>
                        <li>Project details and creative briefs</li>
                        <li>Payment and billing information</li>
                        <li>Any other information you choose to share</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Information Collected Automatically</h3>
                      <p className="leading-relaxed mb-3">
                        When you visit our website, we may automatically collect:
                      </p>
                      <ul className="list-disc pl-5 space-y-2">
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
                    "mb-12 scroll-mt-24 transition-all duration-700",
                    isVisible["how-we-use"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  )}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                      <Eye className="w-5 h-5 text-accent" aria-hidden="true" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-foreground m-0">
                      How We Use Your Information
                    </h2>
                  </div>

                  <div className="space-y-4 text-muted-foreground">
                    <p className="leading-relaxed">
                      We use the information we collect to:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
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
                    "mb-12 scroll-mt-24 transition-all duration-700",
                    isVisible["sharing"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  )}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                      <Globe className="w-5 h-5 text-accent" aria-hidden="true" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-foreground m-0">
                      Information Sharing
                    </h2>
                  </div>

                  <div className="space-y-4 text-muted-foreground">
                    <p className="leading-relaxed">
                      We do not sell your personal information. We may share your information with:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
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
                    "mb-12 scroll-mt-24 transition-all duration-700",
                    isVisible["data-security"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  )}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                      <Lock className="w-5 h-5 text-accent" aria-hidden="true" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-foreground m-0">
                      Data Security
                    </h2>
                  </div>

                  <div className="space-y-4 text-muted-foreground">
                    <p className="leading-relaxed">
                      We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
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
                    "mb-12 scroll-mt-24 transition-all duration-700",
                    isVisible["your-rights"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  )}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                      <UserCheck className="w-5 h-5 text-accent" aria-hidden="true" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-foreground m-0">
                      Your Rights
                    </h2>
                  </div>

                  <div className="space-y-4 text-muted-foreground">
                    <p className="leading-relaxed">
                      Depending on your location, you may have the following rights regarding your personal data:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
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
                    "mb-12 scroll-mt-24 transition-all duration-700",
                    isVisible["cookies"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  )}
                >
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                    Cookies & Tracking
                  </h2>

                  <div className="space-y-4 text-muted-foreground">
                    <p className="leading-relaxed">
                      We use cookies and similar technologies to enhance your experience on our website. These include:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
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
                    "scroll-mt-24 transition-all duration-700",
                    isVisible["contact"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  )}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-accent" aria-hidden="true" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-foreground m-0">
                      Contact Us
                    </h2>
                  </div>

                  <div className="space-y-4 text-muted-foreground">
                    <p className="leading-relaxed">
                      If you have questions about this Privacy Policy or wish to exercise your data rights, please contact us:
                    </p>

                    <div className="bg-muted/50 rounded-2xl p-6 border border-border">
                      <p className="font-semibold text-foreground mb-3">9Yards Content House</p>
                      <div className="space-y-2 text-sm">
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
                    "mt-12 pt-8 border-t border-border transition-all duration-700",
                    isVisible["changes"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  )}
                >
                  <h2 className="text-xl font-bold text-foreground mb-3">
                    Changes to This Policy
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Last updated" date. We encourage you to review this policy periodically to stay informed about how we protect your information.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#f8f8f5]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Have Questions?
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              We're happy to answer any questions about our privacy practices or help you exercise your data rights.
            </p>
            <Button
              asChild
              variant="accent"
              size="lg"
              className="rounded-full px-8"
            >
              <Link to="/contact">
                Contact Us
                <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
