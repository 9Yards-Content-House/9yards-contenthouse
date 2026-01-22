import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/shared/SEO";
import { ArrowRight, ChevronDown, FileText, Scale, Briefcase, AlertTriangle, CreditCard, Copyright, Ban, RefreshCw, Mail } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

// Terms sections for quick navigation
const termsSections = [
  { id: "services", title: "Our Services", icon: Briefcase },
  { id: "engagement", title: "Engagement & Payment", icon: CreditCard },
  { id: "intellectual-property", title: "Intellectual Property", icon: Copyright },
  { id: "client-responsibilities", title: "Client Responsibilities", icon: Scale },
  { id: "limitations", title: "Limitations of Liability", icon: AlertTriangle },
  { id: "termination", title: "Termination", icon: Ban },
  { id: "changes", title: "Changes to Terms", icon: RefreshCw },
  { id: "contact", title: "Contact Us", icon: Mail },
];

export default function TermsOfService() {
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
    const contentSection = document.getElementById("services");
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
        title="Terms of Service | 9Yards Content House"
        description="Read the terms and conditions for using 9Yards Content House services. Understand our policies on projects, payments, and intellectual property."
        url="/terms-of-service"
      />

      {/* Hero Section */}
      <section className="relative min-h-[60svh] sm:min-h-[70svh] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <div className="w-full h-full bg-gradient-to-br from-[#1c1e70] via-[#212282] to-[#1a1c6e]" />
          {/* Pattern overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl" />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full">
          <div className="container-custom py-24 sm:py-28 lg:py-32">
            <div className="max-w-3xl mx-auto text-center">
              {/* Icon */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mx-auto mb-6 animate-fade-in opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards]">
                <FileText className="w-8 h-8 sm:w-10 sm:h-10 text-white" aria-hidden="true" />
              </div>

              {/* Eyebrow */}
              <span className="inline-block text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-4 animate-fade-in opacity-0 [animation-delay:300ms] [animation-fill-mode:forwards]">
                Legal
              </span>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-5 sm:mb-6 tracking-tight animate-fade-in opacity-0 [animation-delay:400ms] [animation-fill-mode:forwards]">
                Terms of Service
              </h1>

              {/* Subheadline */}
              <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed mb-6 animate-fade-in opacity-0 [animation-delay:500ms] [animation-fill-mode:forwards]">
                The terms and conditions that govern our working relationship. Please read carefully before engaging our services.
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
          aria-label="Scroll to terms content"
          className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-full p-2 animate-fade-in opacity-0 [animation-delay:800ms] [animation-fill-mode:forwards]"
        >
          <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 animate-bounce" aria-hidden="true" />
        </button>
      </section>

      {/* Terms Content */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Sidebar Navigation - Desktop */}
            <aside className="hidden lg:block lg:col-span-3">
              <div className="sticky top-24 space-y-1">
                <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-4">
                  On This Page
                </p>
                <nav aria-label="Terms sections">
                  {termsSections.map((section) => (
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
                    Welcome to 9Yards Content House. These Terms of Service ("Terms") govern your use of our website and services. By engaging our services or using our website, you agree to be bound by these Terms. If you do not agree with any part of these Terms, please do not use our services.
                  </p>
                </div>

                {/* Our Services */}
                <div
                  id="services"
                  ref={(el) => (sectionRefs.current["services"] = el)}
                  className={cn(
                    "mb-12 scroll-mt-24 transition-all duration-700",
                    isVisible["services"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  )}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                      <Briefcase className="w-5 h-5 text-accent" aria-hidden="true" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-foreground m-0">
                      Our Services
                    </h2>
                  </div>

                  <div className="space-y-4 text-muted-foreground">
                    <p className="leading-relaxed">
                      9Yards Content House provides creative and marketing services including, but not limited to:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li><strong>Creative Services:</strong> Graphic design, video production, photography, branding, print design, motion graphics, and visual content creation</li>
                      <li><strong>Digital Marketing:</strong> Social media management, influencer marketing, email marketing, website development, and digital strategy</li>
                      <li><strong>Media Production:</strong> Podcast production, TV and radio production, voice-over recording, and studio rental services</li>
                      <li><strong>Strategy & Consulting:</strong> Brand strategy, creative consulting, and AI-powered workflow solutions</li>
                    </ul>
                    <p className="leading-relaxed">
                      All services are subject to availability and the specific terms outlined in individual project proposals or subscription agreements.
                    </p>
                  </div>
                </div>

                {/* Engagement & Payment */}
                <div
                  id="engagement"
                  ref={(el) => (sectionRefs.current["engagement"] = el)}
                  className={cn(
                    "mb-12 scroll-mt-24 transition-all duration-700",
                    isVisible["engagement"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  )}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                      <CreditCard className="w-5 h-5 text-accent" aria-hidden="true" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-foreground m-0">
                      Engagement & Payment
                    </h2>
                  </div>

                  <div className="space-y-6 text-muted-foreground">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Project-Based Work</h3>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>All projects begin upon receipt of a signed proposal/agreement and any required deposit</li>
                        <li>Project scope, deliverables, timeline, and pricing are defined in individual proposals</li>
                        <li>Changes to project scope may result in additional charges and timeline adjustments</li>
                        <li>A deposit of 50% is typically required before project commencement, with the balance due upon delivery</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Subscription Services</h3>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Subscription plans are billed monthly in advance</li>
                        <li>Subscriptions may be paused or cancelled with 30 days' written notice</li>
                        <li>Unused credits or requests do not roll over to subsequent months unless specified</li>
                        <li>Subscription terms are outlined in separate subscription agreements</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Payment Terms</h3>
                      <ul className="list-disc pl-5 space-y-2">
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
                    "mb-12 scroll-mt-24 transition-all duration-700",
                    isVisible["intellectual-property"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  )}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                      <Copyright className="w-5 h-5 text-accent" aria-hidden="true" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-foreground m-0">
                      Intellectual Property
                    </h2>
                  </div>

                  <div className="space-y-6 text-muted-foreground">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Ownership of Deliverables</h3>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Upon full payment, clients receive full ownership rights to final approved deliverables, unless otherwise specified</li>
                        <li>Source files, working files, and raw materials remain the property of 9Yards Content House unless explicitly transferred</li>
                        <li>We may provide source files upon request for an additional fee</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Portfolio Rights</h3>
                      <p className="leading-relaxed mb-3">
                        Unless otherwise agreed in writing, 9Yards Content House reserves the right to:
                      </p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Display completed work in our portfolio, website, and marketing materials</li>
                        <li>Describe the work and the nature of the project in case studies</li>
                        <li>Submit work for industry awards and recognition</li>
                      </ul>
                      <p className="leading-relaxed mt-3">
                        Clients may request confidentiality for sensitive projects, which will be honored upon written agreement.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Third-Party Assets</h3>
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
                    "mb-12 scroll-mt-24 transition-all duration-700",
                    isVisible["client-responsibilities"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  )}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                      <Scale className="w-5 h-5 text-accent" aria-hidden="true" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-foreground m-0">
                      Client Responsibilities
                    </h2>
                  </div>

                  <div className="space-y-4 text-muted-foreground">
                    <p className="leading-relaxed">
                      To ensure successful project delivery, clients agree to:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Provide clear project briefs, brand assets, and required materials in a timely manner</li>
                      <li>Designate a single point of contact for project communications and approvals</li>
                      <li>Provide feedback within agreed timeframes (typically 48-72 hours for review rounds)</li>
                      <li>Ensure all materials provided do not infringe on third-party intellectual property rights</li>
                      <li>Obtain necessary permissions for use of any logos, images, or content provided</li>
                      <li>Comply with all applicable laws and regulations related to their industry</li>
                    </ul>
                    <p className="leading-relaxed">
                      Delays caused by client-side issues may result in timeline extensions and potential additional charges.
                    </p>
                  </div>
                </div>

                {/* Revisions & Approvals */}
                <div
                  ref={(el) => (sectionRefs.current["revisions"] = el)}
                  className={cn(
                    "mb-12 scroll-mt-24 transition-all duration-700",
                    isVisible["revisions"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  )}
                >
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                    Revisions & Approvals
                  </h2>

                  <div className="space-y-4 text-muted-foreground">
                    <ul className="list-disc pl-5 space-y-2">
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
                    "mb-12 scroll-mt-24 transition-all duration-700",
                    isVisible["limitations"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  )}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                      <AlertTriangle className="w-5 h-5 text-accent" aria-hidden="true" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-foreground m-0">
                      Limitations of Liability
                    </h2>
                  </div>

                  <div className="space-y-4 text-muted-foreground">
                    <p className="leading-relaxed">
                      To the maximum extent permitted by law:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
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
                    "mb-12 scroll-mt-24 transition-all duration-700",
                    isVisible["confidentiality"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  )}
                >
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                    Confidentiality
                  </h2>

                  <div className="space-y-4 text-muted-foreground">
                    <p className="leading-relaxed">
                      Both parties agree to maintain the confidentiality of proprietary information shared during the course of our engagement. This includes:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
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
                    "mb-12 scroll-mt-24 transition-all duration-700",
                    isVisible["termination"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  )}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                      <Ban className="w-5 h-5 text-accent" aria-hidden="true" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-foreground m-0">
                      Termination
                    </h2>
                  </div>

                  <div className="space-y-4 text-muted-foreground">
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Either party may terminate a project with 14 days' written notice</li>
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
                    "mb-12 scroll-mt-24 transition-all duration-700",
                    isVisible["changes"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  )}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                      <RefreshCw className="w-5 h-5 text-accent" aria-hidden="true" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-foreground m-0">
                      Changes to Terms
                    </h2>
                  </div>

                  <div className="space-y-4 text-muted-foreground">
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
                    "mb-12 scroll-mt-24 transition-all duration-700",
                    isVisible["governing-law"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  )}
                >
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                    Governing Law
                  </h2>

                  <div className="space-y-4 text-muted-foreground">
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
                      If you have questions about these Terms of Service, please contact us:
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
                  </div>
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
              Ready to Get Started?
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Now that you understand our terms, let's discuss how we can help bring your creative vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                variant="accent"
                size="lg"
                className="rounded-full px-8"
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
                className="rounded-full px-8"
              >
                <Link to="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
