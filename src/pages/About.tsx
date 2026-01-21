import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { SEO, schemas } from "@/components/shared/SEO";
import {
  ArrowRight,
  ChevronDown,
  Star,
  Zap,
  Lightbulb,
  Eye,
  Target,
  Globe,
  Bot,
  Wallet,
  Shuffle,
  Mic,
  Users,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

// What makes us different
const differentiators = [
  {
    icon: Bot,
    title: "AI-Powered Workflows",
    description:
      "We use AI to handle the repetitive stuff—freeing our creatives to focus on strategic thinking, cultural nuance, and ideas that make people stop scrolling.",
    highlight: "Superside-level quality at local speeds",
  },
  {
    icon: Wallet,
    title: "World-Class Quality, Local Pricing",
    description:
      "Our team includes top 1% talent who've worked with international brands. But because we're based in East Africa with smart AI workflows, our pricing is a fraction of London or New York agencies.",
    highlight: "Portfolio-worthy work without the crushing invoice",
  },
  {
    icon: Shuffle,
    title: "Flexible Engagement Models",
    description:
      "Monthly subscription? Perfect. One-time project? No problem. Need to scale up then scale back? We work with your business, not against it. No 12-month lock-ins.",
    highlight: "Subscribe, book projects, or do both",
  },
  {
    icon: Mic,
    title: "Real Studio in Kampala",
    description:
      "While other agencies are 'virtual first,' we've invested in physical infrastructure—a professional podcast studio at our Kampala HQ where we produce 'Sitwakalaba' and where you can produce yours.",
    highlight: "Book by the hour or day",
  },
];

// Our values
const values = [
  {
    icon: Star,
    title: "Excellence",
    description:
      "We don't do 'good enough.' Every design, video, and campaign gets obsessive attention. If it's not portfolio-worthy, it doesn't ship.",
    color: "bg-amber-500",
  },
  {
    icon: Zap,
    title: "Speed",
    description:
      "Your competitors aren't waiting. AI-enhanced workflows mean professional creative in days, not weeks. Fast turnarounds are our standard.",
    color: "bg-orange-500",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We're early adopters by nature. AI workflows, emerging platforms, new formats—if it helps deliver better work faster, we're testing it.",
    color: "bg-blue-500",
  },
  {
    icon: Eye,
    title: "Transparency",
    description:
      "No hidden fees. No surprise charges. You see our pricing upfront, know what you're paying for, and get exactly what we promised.",
    color: "bg-emerald-500",
  },
  {
    icon: Target,
    title: "Client Success",
    description:
      "We succeed when you succeed. Likes are nice. Conversions are better. Business growth is what we're actually after.",
    color: "bg-pink-500",
  },
  {
    icon: Globe,
    title: "Local Pride, Global Standards",
    description:
      "Proudly East African and unapologetically world-class. We celebrate where we're from while competing with anyone, anywhere.",
    color: "bg-purple-500",
  },
];

// Team expertise areas
const teamExpertise = [
  {
    role: "Graphic Design",
    description: "Brand identities to social media graphics—if it's visual, we've mastered it.",
  },
  {
    role: "Video Production",
    description: "From Instagram Reels to documentaries, stories that stick.",
  },
  {
    role: "Social Media Strategy",
    description: "Platform algorithms change. We stay ahead so your content stays relevant.",
  },
  {
    role: "Web Development",
    description: "Clean code, beautiful interfaces, and websites that convert.",
  },
  {
    role: "Brand Consulting",
    description: "Strategic brand identities from startups to celebrities.",
  },
  {
    role: "Copywriting",
    description: "Words that sell without sounding sales-y.",
  },
];

// Stats
const stats = [
  { value: "100+", label: "Projects Delivered", description: "And counting" },
  { value: "5+", label: "Years of Excellence", description: "Since 2020" },
  { value: "24hrs", label: "Avg Response Time", description: "We move fast" },
];

export default function About() {
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});
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

  const scrollToContent = () => {
    const storySection = document.getElementById("our-story");
    if (storySection) {
      storySection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Layout hideFooterCta>
      <SEO 
        title="About 9Yards Content House | Creative Team Kampala"
        description="Meet the creative minds behind Kampala's leading content agency. AI-powered workflows, world-class talent, and a passion for African storytelling."
        url="/about"
        schema={schemas.organization}
      />
      {/* Hero Section */}
      <section
        className="relative min-h-[100svh] flex items-center overflow-hidden"
        aria-labelledby="about-hero-heading"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <img
            src="/images/team/9Yards-Content-House-Team-01.jpg"
            alt=""
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40 md:from-black md:via-black/70 md:to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full">
          <div className="container-custom py-24 sm:py-28 lg:py-32">
            <div className="max-w-2xl">
              {/* Eyebrow */}
              <span className="inline-block text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-4 sm:mb-5 animate-fade-in opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards] motion-reduce:animate-none motion-reduce:opacity-100">
                About Us
              </span>

              {/* Headline */}
              <h1
                id="about-hero-heading"
                className="text-[1.75rem] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-5 sm:mb-6 tracking-tight animate-fade-in opacity-0 [animation-delay:400ms] [animation-fill-mode:forwards] motion-reduce:animate-none motion-reduce:opacity-100"
              >
                We're proving East Africa creates{" "}
                <span className="text-accent">world-class work</span>
              </h1>

              {/* Subheadline */}
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/80 leading-relaxed mb-8 sm:mb-10 max-w-lg animate-fade-in opacity-0 [animation-delay:600ms] [animation-fill-mode:forwards] motion-reduce:animate-none motion-reduce:opacity-100">
                From Kampala to the world, we're redefining what a creative
                agency can be—combining the speed of AI with the irreplaceable
                magic of human creativity.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-in opacity-0 [animation-delay:800ms] [animation-fill-mode:forwards] motion-reduce:animate-none motion-reduce:opacity-100">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-accent hover:bg-[#C93917] active:bg-[#AB3013] text-white px-6 sm:px-8 h-12 sm:h-14 text-sm sm:text-base font-semibold shadow-xl hover:shadow-2xl hover:shadow-accent/25 transition-all duration-300"
                >
                  <Link to="/get-started">
                    Start a Project
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" aria-hidden="true" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-6 sm:px-8 h-12 sm:h-14 text-sm sm:text-base font-semibold transition-all duration-300"
                >
                  <Link to="/portfolio">View Our Work</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToContent}
          aria-label="Scroll to our story"
          className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-full p-2 animate-fade-in opacity-0 [animation-delay:1200ms] [animation-fill-mode:forwards] motion-reduce:animate-none motion-reduce:opacity-100"
        >
          <span className="text-[10px] sm:text-xs tracking-widest uppercase">
            Our Story
          </span>
          <ChevronDown
            className="w-5 h-5 sm:w-6 sm:h-6 animate-bounce motion-reduce:animate-none"
            aria-hidden="true"
          />
        </button>
      </section>

      {/* Our Story Section */}
      <section
        id="our-story"
        className="py-16 sm:py-20 md:py-24 lg:py-32 bg-background"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Text Content */}
            <div
              ref={(el) => (sectionRefs.current["story"] = el)}
              className={cn(
                "transition-all duration-700",
                isVisible["story"]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              )}
            >
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-accent mb-3">
                Where We Come From
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.1] mb-5 sm:mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  It started with a simple belief: East Africa shouldn't just
                  consume great creative—we should create it.
                </p>
                <p>
                  9Yards Content House is the creative powerhouse of 9Yards, a
                  Kampala-based conglomerate building the future of African
                  business. We focus on one thing: delivering world-class
                  creative that makes your brand impossible to ignore.
                </p>
                <p>
                  We're not trying to be the biggest agency in Uganda. We're
                  building something better—a creative studio that combines
                  global standards with local insight, AI efficiency with human
                  artistry, and international quality with pricing that actually
                  makes sense for East African businesses.
                </p>
                <p className="text-foreground font-medium">
                  Our mission: Scale your in-house creative team with top global
                  talent powered by industry-leading AI workflows, delivering
                  anything you can imagine—fast and affordably.
                </p>
              </div>
            </div>

            {/* Image + Stats */}
            <div
              ref={(el) => (sectionRefs.current["story-image"] = el)}
              className={cn(
                "relative transition-all duration-700",
                isVisible["story-image"]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: "200ms" }}
            >
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden">
                <img
                  src="/images/team/team.jpg"
                  alt="9Yards Content House team"
                  className="w-full h-[300px] sm:h-[400px] lg:h-[480px] object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              {/* Stats Overlay */}
              <div className="absolute -bottom-6 left-4 right-4 sm:left-6 sm:right-6 grid grid-cols-3 gap-2 sm:gap-3">
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className="bg-background/95 backdrop-blur-sm rounded-xl p-3 sm:p-4 text-center shadow-lg border border-border"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-accent">
                      {stat.value}
                    </div>
                    <div className="text-[10px] sm:text-xs text-muted-foreground font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-[#1a1a2e]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div
            ref={(el) => (sectionRefs.current["diff-header"] = el)}
            className={cn(
              "max-w-3xl mb-10 sm:mb-14 lg:mb-16 transition-all duration-700",
              isVisible["diff-header"]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            )}
          >
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-accent mb-3">
              Why Choose Content House
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.1] mb-4">
              What makes us different
            </h2>
            <p className="text-base sm:text-lg text-white/70 max-w-xl">
              Every agency says they're different. Here's what actually sets us
              apart.
            </p>
          </div>

          {/* Differentiators Grid */}
          <div className="grid md:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
            {differentiators.map((item, index) => (
              <div
                key={item.title}
                ref={(el) => (sectionRefs.current[`diff-${index}`] = el)}
                className={cn(
                  "group relative rounded-2xl sm:rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 p-5 sm:p-6 lg:p-8 hover:border-accent/30 transition-all duration-500",
                  isVisible[`diff-${index}`]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-accent/20 flex items-center justify-center mb-4 sm:mb-5 group-hover:bg-accent/30 transition-colors">
                  <item.icon
                    className="w-6 h-6 sm:w-7 sm:h-7 text-accent"
                    aria-hidden="true"
                  />
                </div>

                {/* Content */}
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-white/70 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Highlight */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20">
                  <CheckCircle2
                    className="w-3.5 h-3.5 text-accent"
                    aria-hidden="true"
                  />
                  <span className="text-xs sm:text-sm font-medium text-accent">
                    {item.highlight}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div
            ref={(el) => (sectionRefs.current["values-header"] = el)}
            className={cn(
              "max-w-3xl mx-auto mb-10 sm:mb-14 lg:mb-16 text-center transition-all duration-700",
              isVisible["values-header"]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            )}
          >
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-accent mb-3">
              What We Stand For
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.1] mb-4">
              Our Values
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto">
              Six principles guide everything we create.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                ref={(el) => (sectionRefs.current[`value-${index}`] = el)}
                className={cn(
                  "group p-5 sm:p-6 rounded-2xl border border-border bg-muted/30 hover:border-accent/30 hover:bg-muted/50 transition-all duration-300 text-center",
                  isVisible[`value-${index}`]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: `${index * 75}ms` }}
              >
                {/* Icon */}
                <div
                  className={cn(
                    "w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110",
                    value.color
                  )}
                >
                  <value.icon
                    className="w-6 h-6 sm:w-7 sm:h-7 text-white"
                    aria-hidden="true"
                  />
                </div>

                <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-[#f8f8f5]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Image */}
            <div
              ref={(el) => (sectionRefs.current["team-image"] = el)}
              className={cn(
                "relative rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-700 order-2 lg:order-1",
                isVisible["team-image"]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              )}
            >
              <img
                src="/images/team/9yards-team-onset.png"
                alt="9Yards team on set"
                className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
                loading="lazy"
              />
              {/* Badge */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Users
                      className="w-5 h-5 sm:w-6 sm:h-6 text-accent"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Top 1% Talent</p>
                    <p className="text-sm text-muted-foreground">
                      Elite creatives from East Africa
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div
              ref={(el) => (sectionRefs.current["team-content"] = el)}
              className={cn(
                "order-1 lg:order-2 transition-all duration-700",
                isVisible["team-content"]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              )}
            >
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-accent mb-3">
                Top 1% Global Talent
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.1] mb-5 sm:mb-6">
                Our Team
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6 sm:mb-8">
                We're small by design, elite by necessity. Our team represents
                the best creative minds in East Africa—designers, strategists,
                producers, and technologists who've proven themselves on
                international stages.
              </p>

              {/* Expertise Grid */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {teamExpertise.map((item) => (
                  <div key={item.role} className="flex items-start gap-2">
                    <CheckCircle2
                      className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        {item.role}
                      </p>
                      <p className="text-xs text-muted-foreground hidden sm:block">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-sm text-muted-foreground mt-6 italic">
                Combined experience: Decades of expertise from agencies and
                in-house roles across three continents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={(el) => (sectionRefs.current["cta"] = el)}
        className="py-12 sm:py-16 md:py-20 lg:py-24 bg-background"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Card Container */}
          <div
            className={cn(
              "relative rounded-2xl sm:rounded-3xl overflow-hidden min-h-[420px] sm:min-h-[480px] md:min-h-[520px] shadow-2xl transition-all duration-700",
              isVisible["cta"]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            )}
          >
            {/* Background Image */}
            <div className="absolute inset-0" aria-hidden="true">
              <img
                src="/images/team/9yards-office.jpg"
                alt=""
                loading="lazy"
                className="w-full h-full object-cover object-center"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/40 sm:from-black/90 sm:via-black/70 sm:to-black/30" />
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex items-center px-5 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16">
              <div className="max-w-xl">
                {/* Eyebrow */}
                <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-accent mb-3 sm:mb-4">
                  Want to Work with Us?
                </p>

                {/* Headline */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.1] mb-4 sm:mb-5">
                  Let's create something{" "}
                  <span className="text-accent">amazing</span>
                </h2>

                {/* Description */}
                <p className="text-sm sm:text-base md:text-lg text-white/80 leading-relaxed mb-6 sm:mb-8">
                  Join the growing list of businesses and creators who refuse to
                  compromise between quality and affordability.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8">
                  <Button
                    asChild
                    size="lg"
                    className="rounded-full bg-accent hover:bg-[#C93917] active:bg-[#AB3013] text-white px-6 sm:px-8 h-12 sm:h-14 text-sm sm:text-base font-semibold shadow-xl hover:shadow-2xl hover:shadow-accent/20 transition-all duration-300"
                  >
                    <Link to="/contact">
                      Start a Conversation
                      <ArrowRight
                        className="w-4 h-4 sm:w-5 sm:h-5 ml-2"
                        aria-hidden="true"
                      />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="rounded-full border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-6 sm:px-8 h-12 sm:h-14 text-sm sm:text-base font-semibold transition-all duration-300"
                  >
                    <Link to="/portfolio">See Our Work</Link>
                  </Button>
                </div>

                {/* Contact Info */}
                <div className="flex flex-wrap gap-4 sm:gap-6 text-white/70 text-sm">
                  <a
                    href="tel:+256700488870"
                    className="flex items-center gap-2 hover:text-accent transition-colors"
                  >
                    <Phone className="w-4 h-4" aria-hidden="true" />
                    0700 488 870
                  </a>
                  <a
                    href="mailto:contenthouse@9yards.co.ug"
                    className="flex items-center gap-2 hover:text-accent transition-colors"
                  >
                    <Mail className="w-4 h-4" aria-hidden="true" />
                    contenthouse@9yards.co.ug
                  </a>
                  <span className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" aria-hidden="true" />
                    Kampala, Uganda
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
