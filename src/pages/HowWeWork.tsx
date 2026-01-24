import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { SEO, schemas } from "@/components/shared/SEO";
import { 
  ArrowRight, 
  Zap, 
  Users, 
  CheckCircle2,
  XCircle,
  ChevronDown,
  Phone,
  Mail,
  MessageCircle
} from "lucide-react";
import { useState, useEffect, useRef, useCallback } from "react";
import { cn } from "@/lib/utils";

// The 9Yards Advantage - Visual cards with images
const advantages = [
  {
    id: "speed",
    title: "Speed Meets Affordability",
    description: "AI-powered workflows deliver world-class creative at local prices with lightning-fast turnarounds.",
    accentColor: "bg-orange-500",
    overlayTint: "from-orange-950/80 via-black/60",
    image: "/images/miscellany/graphic.jpg",
  },
  {
    id: "flexible",
    title: "Work Your Way",
    description: "Monthly subscriptions, one-off projects, or a mix. No long-term contracts required.",
    accentColor: "bg-blue-500",
    overlayTint: "from-blue-950/80 via-black/60",
    image: "/images/miscellany/strategy.jpg",
  },
  {
    id: "onestop",
    title: "Everything Under One Roof",
    description: "Video, design, web, social, and strategy from a single partner. One team, one vision, zero coordination headaches.",
    accentColor: "bg-emerald-500",
    overlayTint: "from-emerald-950/80 via-black/60",
    image: "/images/miscellany/Post-production-specialists.jpg",
  },
  {
    id: "local",
    title: "Local Insight, Global Polish",
    description: "We know the Ugandan market inside out and deliver work that competes on a global stage.",
    accentColor: "bg-purple-500",
    overlayTint: "from-purple-950/80 via-black/60",
    image: "/images/miscellany/multi language.png",
  },
];

// Simplified comparison - Feature-focused
const comparisonFeatures = [
  {
    title: "All-in-One Creative Partner",
    description: "Video, design, web, social media, and strategy under one roof. No more juggling multiple vendors.",
    others: "Freelancers specialize in one area. Agencies charge per service.",
  },
  {
    title: "Predictable Monthly Pricing",
    description: "Subscription plans with unlimited requests. Know exactly what you'll spend each month.",
    others: "Hourly rates, scope creep, and surprise invoices.",
  },
  {
    title: "Fast Turnarounds",
    description: "Most projects delivered in days, not weeks. AI-assisted workflows accelerate everything.",
    others: "Traditional agencies take 4-8 weeks. Freelancers juggle multiple clients.",
  },
  {
    title: "Dedicated Team",
    description: "Same people on every project. They know your brand inside and out.",
    others: "New faces each project. Constant re-explaining of your brand.",
  },
];

// Process steps with numbers
const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description: "We dive deep into your brand, goals, and target audience to understand exactly what you need.",
    details: ["Stakeholder interviews", "Brand audit", "Competitor research", "Goal definition"],
  },
  {
    number: "02",
    title: "Strategy",
    description: "We develop a comprehensive creative strategy tailored to your objectives and timeline.",
    details: ["Creative brief", "Concept exploration", "Timeline planning", "Resource allocation"],
  },
  {
    number: "03",
    title: "Creation",
    description: "Our experts bring ideas to life using cutting-edge tools and proven creative processes.",
    details: ["Design & production", "Regular check-ins", "Progress updates", "Quality assurance"],
  },
  {
    number: "04",
    title: "Refinement",
    description: "We collaborate closely to refine every detail until it perfectly matches your vision.",
    details: ["Client review", "Revision rounds", "Fine-tuning", "Final approval"],
  },
  {
    number: "05",
    title: "Delivery",
    description: "Final assets delivered on time, in all formats you need, ready to make an impact.",
    details: ["Multi-format exports", "Platform optimization", "Asset handover", "Launch support"],
  },
];

// Team roles
const teamRoles = [
  {
    role: "Account Manager",
    description: "Your single point of contact. Coordinates all projects, handles communication, and ensures deadlines are met.",
    icon: MessageCircle,
  },
  {
    role: "Creative Lead",
    description: "Oversees creative direction across all your projects. Ensures brand consistency and quality.",
    icon: Zap,
  },
  {
    role: "Specialist Team",
    description: "Designers, videographers, developers, and strategists. Experts in their craft, dedicated to your success.",
    icon: Users,
  },
];

export default function HowWeWork() {
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});
  const [activeStep, setActiveStep] = useState(0);
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    
    Object.keys(sectionRefs.current).forEach((key) => {
      const element = sectionRefs.current[key];
      if (element) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setIsVisible((prev) => ({ ...prev, [key]: true }));
            }
          },
          { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
        );
        observer.observe(element);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  // Keyboard navigation for process steps
  const handleStepKeyDown = useCallback((e: React.KeyboardEvent, index: number) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveStep(Math.min(processSteps.length - 1, index + 1));
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveStep(Math.max(0, index - 1));
    } else if (e.key === 'Home') {
      e.preventDefault();
      setActiveStep(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      setActiveStep(processSteps.length - 1);
    }
  }, []);

  const scrollToContent = () => {
    const advantageSection = document.getElementById("advantage-section");
    if (advantageSection) {
      advantageSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Layout hideFooterCta={true}>
      <SEO 
        title="How We Work | 9Yards Content House Process"
        description="Discover how 9Yards Content House delivers world-class creative at local prices. Our AI-powered workflows, flexible engagement models, and proven process."
        url="/how-we-work"
        schema={schemas.organization}
      />
      {/* Hero Section - Left Aligned */}
      <section 
        className="relative min-h-[100svh] flex items-center overflow-hidden"
        aria-labelledby="how-we-work-hero-heading"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <img
            src="/images/miscellany/about-hero-9-yards.jpg"
            alt=""
            loading="eager"
            decoding="sync"
            fetchPriority="high"
            className="w-full h-full object-cover object-[70%_center] md:object-[65%_center] lg:object-[60%_center]"
          />
          {/* Gradient overlay - stronger on left for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/30 md:from-black md:via-black/70 md:to-transparent" />
        </div>

        {/* Content - Left Aligned */}
        <div className="relative z-10 w-full">
          <div className="container-custom py-24 sm:py-28 lg:py-32">
            <div className="max-w-2xl">
              {/* Eyebrow */}
              <span 
                className="inline-block text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-4 sm:mb-5 animate-fade-in opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards] motion-reduce:animate-none motion-reduce:opacity-100"
              >
                The 9Yards Way
              </span>

              {/* Headline */}
              <h1 
                id="how-we-work-hero-heading"
                className="text-3xl sm:text-4xl md:text-[2.75rem] lg:text-5xl xl:text-6xl font-bold text-white leading-[1.1] mb-5 sm:mb-6 tracking-tight animate-fade-in opacity-0 [animation-delay:400ms] [animation-fill-mode:forwards] motion-reduce:animate-none motion-reduce:opacity-100"
              >
                Built for creatives.
                <br />
                <span className="text-accent">Delivers excellence.</span>
              </h1>

              {/* Subheadline */}
              <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed mb-8 sm:mb-10 max-w-lg animate-fade-in opacity-0 [animation-delay:600ms] [animation-fill-mode:forwards] motion-reduce:animate-none motion-reduce:opacity-100">
                From concept to final cut, we bring your vision to life with world-class equipment, seasoned creatives, and the speed your deadlines demand.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-in opacity-0 [animation-delay:800ms] [animation-fill-mode:forwards] motion-reduce:animate-none motion-reduce:opacity-100">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-accent hover:bg-[#C93917] active:bg-[#AB3013] text-white px-6 sm:px-8 h-12 sm:h-14 text-sm sm:text-base font-semibold shadow-xl hover:shadow-2xl hover:shadow-accent/25 transition-all duration-300"
                >
                  <Link to="/get-started">
                    Start Your Project
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" aria-hidden="true" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-6 sm:px-8 h-12 sm:h-14 text-sm sm:text-base font-semibold transition-all duration-300"
                >
                  <Link to="/portfolio">
                    View Our Work
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToContent}
          aria-label="Scroll to learn more"
          className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-full p-2 animate-fade-in opacity-0 [animation-delay:1200ms] [animation-fill-mode:forwards] motion-reduce:animate-none motion-reduce:opacity-100"
        >
          <span className="text-[10px] sm:text-xs tracking-widest uppercase">Learn More</span>
          <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 animate-bounce motion-reduce:animate-none" aria-hidden="true" />
        </button>
      </section>

      {/* The 9Yards Advantage - Bento Grid with Images */}
      <section id="advantage-section" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div
            ref={(el) => (sectionRefs.current["advantage"] = el)}
            className={cn(
              "max-w-3xl mb-10 sm:mb-14 lg:mb-16 transition-all duration-700",
              isVisible["advantage"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-accent mb-3">The 9Yards Advantage</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.1]">
              Why brands choose us
            </h2>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {/* Speed - Large Card (spans 2 cols on lg) */}
            <div
              ref={(el) => (sectionRefs.current["adv-0"] = el)}
              role="article"
              className={cn(
                "group relative lg:col-span-2 rounded-2xl sm:rounded-3xl overflow-hidden min-h-[280px] sm:min-h-[320px] lg:min-h-[360px] transition-all duration-700",
                isVisible["adv-0"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
            >
              {/* Background Image */}
              <img
                src={advantages[0].image}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Gradient Overlay with Color Tint */}
              <div className={cn("absolute inset-0 bg-gradient-to-t to-black/20", advantages[0].overlayTint)} />
              {/* Content */}
              <div className="absolute inset-0 p-5 sm:p-7 lg:p-8 flex flex-col justify-end">
                <div className={cn("w-1 h-8 sm:h-10 rounded-full mb-4 animate-pulse", advantages[0].accentColor)} aria-hidden="true" />
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-3">
                  {advantages[0].title}
                </h3>
                <p className="text-sm sm:text-base text-white/80 max-w-md leading-relaxed">
                  {advantages[0].description}
                </p>
              </div>
            </div>

            {/* Flexible - Medium Card */}
            <div
              ref={(el) => (sectionRefs.current["adv-1"] = el)}
              role="article"
              className={cn(
                "group relative rounded-2xl sm:rounded-3xl overflow-hidden min-h-[280px] sm:min-h-[320px] lg:min-h-[360px] transition-all duration-700",
                isVisible["adv-1"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: "100ms" }}
            >
              <img
                src={advantages[1].image}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className={cn("absolute inset-0 bg-gradient-to-t to-black/20", advantages[1].overlayTint)} />
              <div className="absolute inset-0 p-5 sm:p-7 flex flex-col justify-end">
                <div className={cn("w-1 h-8 sm:h-10 rounded-full mb-4", advantages[1].accentColor)} aria-hidden="true" />
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  {advantages[1].title}
                </h3>
                <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                  {advantages[1].description}
                </p>
              </div>
            </div>

            {/* One Stop - Medium Card */}
            <div
              ref={(el) => (sectionRefs.current["adv-2"] = el)}
              role="article"
              className={cn(
                "group relative rounded-2xl sm:rounded-3xl overflow-hidden min-h-[280px] sm:min-h-[320px] transition-all duration-700",
                isVisible["adv-2"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: "200ms" }}
            >
              <img
                src={advantages[2].image}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className={cn("absolute inset-0 bg-gradient-to-t to-black/20", advantages[2].overlayTint)} />
              <div className="absolute inset-0 p-5 sm:p-7 flex flex-col justify-end">
                <div className={cn("w-1 h-8 sm:h-10 rounded-full mb-4", advantages[2].accentColor)} aria-hidden="true" />
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  {advantages[2].title}
                </h3>
                <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                  {advantages[2].description}
                </p>
              </div>
            </div>

            {/* Local Global - Full Width Card (spans 2 cols on lg) */}
            <div
              ref={(el) => (sectionRefs.current["adv-3"] = el)}
              role="article"
              className={cn(
                "group relative lg:col-span-2 rounded-2xl sm:rounded-3xl overflow-hidden min-h-[240px] sm:min-h-[280px] transition-all duration-700",
                isVisible["adv-3"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: "300ms" }}
            >
              <img
                src={advantages[3].image}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className={cn("absolute inset-0 bg-gradient-to-t to-black/20", advantages[3].overlayTint)} />
              <div className="absolute inset-0 p-5 sm:p-7 lg:p-8 flex flex-col justify-end">
                <div className={cn("w-1 h-8 sm:h-10 rounded-full mb-4", advantages[3].accentColor)} aria-hidden="true" />
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-3">
                  {advantages[3].title}
                </h3>
                <p className="text-sm sm:text-base text-white/80 max-w-lg leading-relaxed">
                  {advantages[3].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section - Simplified Visual Cards */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-[#181818]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div
            ref={(el) => (sectionRefs.current["comparison"] = el)}
            className={cn(
              "max-w-3xl mx-auto mb-10 sm:mb-14 lg:mb-16 text-center transition-all duration-700",
              isVisible["comparison"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-accent mb-3">The Difference</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.1] mb-4 sm:mb-5">
              9Yards vs the rest
            </h2>
            <p className="text-base sm:text-lg text-white/70 max-w-xl mx-auto">
              Here's what makes working with us different from the alternatives.
            </p>
          </div>

          {/* Comparison Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {comparisonFeatures.map((feature, index) => (
              <div
                key={feature.title}
                ref={(el) => (sectionRefs.current[`comp-${index}`] = el)}
                className={cn(
                  "relative rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-700",
                  isVisible[`comp-${index}`] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Card Content */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 h-full hover:border-emerald-500/30 transition-colors duration-300">
                  {/* Header with checkmark */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400" aria-hidden="true" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Others comparison */}
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <div className="flex items-start gap-3">
                      <XCircle className="w-4 h-4 text-red-400/60 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <p className="text-sm text-white/50">
                        <span className="inline-block px-2 py-0.5 text-xs font-medium bg-red-500/10 text-red-400/70 rounded-full mr-2">Others</span>{feature.others}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Options */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div
            ref={(el) => (sectionRefs.current["engagement"] = el)}
            className={cn(
              "max-w-3xl mx-auto mb-10 sm:mb-14 lg:mb-16 text-center transition-all duration-700",
              isVisible["engagement"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-accent mb-3">Engagement Options</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.1] mb-4">
              Choose how to work with us
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto">
              Flexible engagement models designed to fit your needs and budget.
            </p>
          </div>

          {/* Engagement Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8 max-w-4xl mx-auto">
            {/* Subscription Card */}
            <div
              ref={(el) => (sectionRefs.current["eng-0"] = el)}
              className={cn(
                "relative rounded-2xl sm:rounded-3xl border-2 border-accent bg-accent/5 p-5 sm:p-6 lg:p-8 transition-all duration-700",
                isVisible["eng-0"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
            >
              {/* Badge */}
              <span className="inline-block text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full bg-accent text-white mb-4">
                Recommended
              </span>

              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                Subscription Plans
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
                Ongoing creative support with predictable monthly costs. Perfect for brands that need consistent content.
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-6" role="list">
                {["Dedicated account manager", "Priority turnaround times", "No long-term contracts", "Pause or cancel anytime"].map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-foreground">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>

              <p className="text-xs text-muted-foreground mb-6">
                <span className="font-semibold">Best for:</span> Growing brands, marketing teams, agencies
              </p>

              {/* CTA */}
              <Button
                asChild
                variant="accent"
                className="w-full rounded-full h-12"
              >
                <Link to="/contact">
                  <Phone className="w-4 h-4 mr-2" aria-hidden="true" />
                  Schedule a Call
                </Link>
              </Button>
            </div>

            {/* Project-Based Card */}
            <div
              ref={(el) => (sectionRefs.current["eng-1"] = el)}
              className={cn(
                "relative rounded-2xl sm:rounded-3xl border-2 border-border bg-muted/30 p-5 sm:p-6 lg:p-8 transition-all duration-700 hover:border-accent/50",
                isVisible["eng-1"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: "100ms" }}
            >
              {/* Badge */}
              <span className="inline-block text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full bg-muted text-muted-foreground mb-4">
                Flexible
              </span>

              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                Project-Based
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
                One-off projects with clear deliverables and timelines. Ideal for specific campaigns or initiatives.
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-6" role="list">
                {["Fixed scope and pricing", "Milestone-based delivery", "Revisions included", "Post-project support"].map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-foreground">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>

              <p className="text-xs text-muted-foreground mb-6">
                <span className="font-semibold">Best for:</span> Launches, campaigns, rebrands, events
              </p>

              {/* CTA */}
              <Button
                asChild
                variant="outline"
                className="w-full rounded-full h-12"
              >
                <Link to="/get-started">
                  Get a Quote
                  <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process - Numbered Steps */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-[#f8f8f5]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div
            ref={(el) => (sectionRefs.current["process"] = el)}
            className={cn(
              "max-w-3xl mx-auto mb-10 sm:mb-14 lg:mb-16 text-center transition-all duration-700",
              isVisible["process"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-accent mb-3">Our Process</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.1] mb-4">
              From idea to impact
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto">
              A proven 5-step process that ensures every project delivers exceptional results.
            </p>
          </div>

          {/* Process Content */}
          <div className="max-w-5xl mx-auto">
            {/* Step Selector - Desktop */}
            <div 
              className="hidden lg:flex items-stretch justify-between mb-10 relative"
              role="tablist"
              aria-label="Process steps"
            >
              {/* Progress line background */}
              <div className="absolute top-6 left-0 right-0 h-0.5 bg-border" aria-hidden="true" />
              {/* Progress line active */}
              <div 
                className="absolute top-6 left-0 h-0.5 bg-accent transition-all duration-500"
                style={{ width: `${(activeStep / (processSteps.length - 1)) * 100}%` }}
                aria-hidden="true"
              />
              
              {processSteps.map((step, index) => (
                <button
                  key={step.number}
                  onClick={() => setActiveStep(index)}
                  onKeyDown={(e) => handleStepKeyDown(e, index)}
                  role="tab"
                  aria-selected={activeStep === index}
                  aria-controls={`step-panel-${index}`}
                  id={`step-tab-${index}`}
                  tabIndex={activeStep === index ? 0 : -1}
                  className={cn(
                    "relative z-10 flex flex-col items-center gap-3 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-lg p-2 -m-2",
                    activeStep === index ? "scale-105" : "opacity-60 hover:opacity-100"
                  )}
                >
                  <div className={cn(
                    "w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-300",
                    activeStep === index 
                      ? "bg-accent text-white shadow-lg shadow-accent/30" 
                      : "bg-background border-2 border-border text-foreground"
                  )}>
                    {step.number}
                  </div>
                  <span className={cn(
                    "text-sm font-semibold transition-colors",
                    activeStep === index ? "text-accent" : "text-muted-foreground"
                  )}>
                    {step.title}
                  </span>
                </button>
              ))}
            </div>

            {/* Step Content */}
            <div
              ref={(el) => (sectionRefs.current["step-content"] = el)}
              className={cn(
                "bg-background rounded-2xl sm:rounded-3xl shadow-lg transition-all duration-700 overflow-hidden",
                isVisible["step-content"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
            >
              {/* Mobile Step Selector */}
              <div className="lg:hidden flex overflow-x-auto gap-2 p-4 border-b border-border scrollbar-hide" role="tablist" aria-label="Process steps">
                {processSteps.map((step, index) => (
                  <button
                    key={step.number}
                    onClick={() => setActiveStep(index)}
                    role="tab"
                    aria-selected={activeStep === index}
                    aria-controls={`step-panel-${index}`}
                    id={`step-tab-mobile-${index}`}
                    className={cn(
                      "flex items-center gap-2 px-4 py-2.5 rounded-full whitespace-nowrap transition-all duration-300 flex-shrink-0",
                      activeStep === index 
                        ? "bg-accent text-white" 
                        : "bg-muted text-muted-foreground hover:bg-muted/80"
                    )}
                  >
                    <span className="font-bold">{step.number}</span>
                    <span className="text-sm font-medium">{step.title}</span>
                  </button>
                ))}
              </div>

              {/* Active Step Panel */}
              {processSteps.map((step, index) => (
                <div
                  key={step.number}
                  id={`step-panel-${index}`}
                  role="tabpanel"
                  aria-labelledby={`step-tab-${index}`}
                  hidden={activeStep !== index}
                  className="p-5 sm:p-6 lg:p-10"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
                    {/* Left - Title & Description */}
                    <div>
                      <div className="flex items-baseline gap-4 mb-4">
                        <span className="text-5xl sm:text-6xl lg:text-7xl font-bold text-accent/20">
                          {step.number}
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                    
                    {/* Right - Details */}
                    <div className="flex flex-col justify-center">
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-accent mb-4">
                        What happens in this phase
                      </h4>
                      <ul className="space-y-3" role="list">
                        {step.details.map((detail) => (
                          <li key={detail} className="flex items-center gap-3 text-foreground">
                            <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                              <CheckCircle2 className="w-3.5 h-3.5 text-accent" aria-hidden="true" />
                            </div>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}

              {/* Navigation */}
              <div className="flex items-center justify-between p-4 sm:p-5 border-t border-border bg-muted/30">
                <button
                  onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                  disabled={activeStep === 0}
                  aria-label="Previous step"
                  className={cn(
                    "flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full transition-all",
                    activeStep === 0 
                      ? "text-muted-foreground/50 cursor-not-allowed" 
                      : "text-foreground hover:bg-muted"
                  )}
                >
                  <ArrowRight className="w-4 h-4 rotate-180" aria-hidden="true" />
                  <span className="hidden sm:inline">Previous</span>
                </button>
                
                {/* Step Indicators */}
                <div className="flex gap-1.5" role="group" aria-label="Step indicators">
                  {processSteps.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveStep(index)}
                      aria-label={`Go to step ${index + 1}`}
                      aria-current={activeStep === index ? "step" : undefined}
                      className={cn(
                        "h-2 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                        activeStep === index ? "bg-accent w-6" : "bg-border w-2 hover:bg-muted-foreground/50"
                      )}
                    />
                  ))}
                </div>
                
                <button
                  onClick={() => setActiveStep(Math.min(processSteps.length - 1, activeStep + 1))}
                  disabled={activeStep === processSteps.length - 1}
                  aria-label="Next step"
                  className={cn(
                    "flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full transition-all",
                    activeStep === processSteps.length - 1 
                      ? "text-muted-foreground/50 cursor-not-allowed" 
                      : "text-foreground hover:bg-muted"
                  )}
                >
                  <span className="hidden sm:inline">Next</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Your Team Section - Improved */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div
            ref={(el) => (sectionRefs.current["team"] = el)}
            className={cn(
              "max-w-3xl mx-auto mb-10 sm:mb-14 lg:mb-16 text-center transition-all duration-700",
              isVisible["team"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-accent mb-3">Your Team</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.1] mb-4">
              Real people, real relationships
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto">
              When you work with us, you're not a ticket number. You get a dedicated team that knows your brand inside and out.
            </p>
          </div>

          {/* Team Content - Image + Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Image */}
            <div
              ref={(el) => (sectionRefs.current["team-image"] = el)}
              className={cn(
                "relative rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-700 order-2 lg:order-1",
                isVisible["team-image"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
            >
              <img
                src="/images/team/team.jpg"
                alt="9Yards Content House team collaborating on a project"
                className="w-full h-[300px] sm:h-[400px] lg:h-[480px] object-cover"
              />
              {/* Floating badge */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Users className="w-5 h-5 sm:w-6 sm:h-6 text-accent" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Your Creative Partners</p>
                    <p className="text-sm text-muted-foreground">Same team, every project</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Role Cards */}
            <div 
              className="space-y-4 order-1 lg:order-2"
              ref={(el) => (sectionRefs.current["team-roles"] = el)}
            >
              {teamRoles.map((role, index) => (
                <div
                  key={role.role}
                  className={cn(
                    "flex items-start gap-4 p-4 sm:p-5 rounded-xl bg-muted/50 border border-border/50 transition-all duration-700 hover:border-accent/30",
                    isVisible["team-roles"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  )}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <role.icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1 text-base sm:text-lg">{role.role}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{role.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        ref={(el) => (sectionRefs.current["cta"] = el)}
        className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#f8f8f5]"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Card Container */}
          <div
            className={cn(
              "relative rounded-2xl sm:rounded-3xl overflow-hidden min-h-[400px] sm:min-h-[450px] md:min-h-[500px] shadow-2xl transition-all duration-700",
              isVisible["cta"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src="/images/team/9yards-office.jpg"
                alt=""
                aria-hidden="true"
                loading="lazy"
                className="w-full h-full object-cover object-center"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/40 sm:from-black/90 sm:via-black/70 sm:to-black/30" />
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex items-center px-5 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16">
              <div className="max-w-lg">
                {/* Eyebrow */}
                <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-accent mb-3 sm:mb-4">
                  Ready to Start?
                </p>
                
                {/* Headline */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.1] mb-4 sm:mb-5">
                  Let's build something{" "}
                  <span className="text-accent">extraordinary</span>
                </h2>

                {/* Description */}
                <p className="text-sm sm:text-base md:text-lg text-white/80 leading-relaxed mb-6 sm:mb-8">
                  Whether you need ongoing creative support or a one-time project, we're ready to be your creative partner.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="rounded-full bg-accent hover:bg-[#C93917] active:bg-[#AB3013] text-white px-6 sm:px-8 h-12 sm:h-14 text-sm sm:text-base font-semibold shadow-xl hover:shadow-2xl hover:shadow-accent/20 transition-all duration-300"
                  >
                    <Link to="/get-started">
                      Start Your Project
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" aria-hidden="true" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="rounded-full border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-6 sm:px-8 h-12 sm:h-14 text-sm sm:text-base font-semibold transition-all duration-300"
                  >
                    <a href="mailto:contenthouse@9yards.co.ug">
                      <Mail className="w-4 h-4 mr-2" aria-hidden="true" />
                      Email Us
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
