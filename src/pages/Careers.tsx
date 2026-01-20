import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ChevronDown,
  Heart,
  Zap,
  Users,
  Rocket,
  Coffee,
  Sparkles,
  MapPin,
  Clock,
  Mail,
  CheckCircle2,
  Lightbulb,
  Target,
  TrendingUp,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

// Company values
const values = [
  {
    icon: Zap,
    title: "Move Fast",
    description: "We ship quickly and iterate. Speed is a feature, not an afterthought.",
    color: "bg-orange-500",
  },
  {
    icon: Heart,
    title: "Care Deeply",
    description: "We're obsessed with quality. Every pixel, every frame, every word matters.",
    color: "bg-pink-500",
  },
  {
    icon: Users,
    title: "Win Together",
    description: "No egos, just collaboration. The best ideas win, regardless of who has them.",
    color: "bg-blue-500",
  },
  {
    icon: Lightbulb,
    title: "Stay Curious",
    description: "We're always learning. AI, new tools, emerging trends — we embrace it all.",
    color: "bg-yellow-500",
  },
];

// Benefits/Perks
const perks = [
  {
    icon: Coffee,
    title: "Flexible Hours",
    description: "Work when you're most productive. We care about output, not hours.",
  },
  {
    icon: Rocket,
    title: "Growth Budget",
    description: "Annual learning stipend for courses, conferences, and skill development.",
  },
  {
    icon: Sparkles,
    title: "Creative Freedom",
    description: "Own your projects from concept to completion. Your ideas matter here.",
  },
  {
    icon: Target,
    title: "Real Impact",
    description: "Work directly with clients on campaigns that reach millions.",
  },
  {
    icon: TrendingUp,
    title: "Career Path",
    description: "Clear progression with mentorship from industry veterans.",
  },
  {
    icon: Users,
    title: "Small Team Energy",
    description: "Tight-knit culture where everyone knows your name and celebrates wins.",
  },
];

// Team culture highlights
const cultureHighlights = [
  {
    stat: "15+",
    label: "Talented Creatives",
    description: "A diverse team of designers, filmmakers, developers, and strategists.",
  },
  {
    stat: "100+",
    label: "Projects Per Year",
    description: "From music videos to brand campaigns, we stay busy.",
  },
  {
    stat: "24hrs",
    label: "Average Response",
    description: "We move fast on opportunities and decisions.",
  },
];

export default function Careers() {
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
    const cultureSection = document.getElementById("culture-section");
    if (cultureSection) {
      cultureSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Layout hideFooterCta>
      {/* Hero Section */}
      <section
        className="relative min-h-[100svh] flex items-center overflow-hidden"
        aria-labelledby="careers-hero-heading"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <img
            src="/images/team/team.jpg"
            alt=""
            className="w-full h-full object-cover"
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
                Join Our Team
              </span>

              {/* Headline */}
              <h1
                id="careers-hero-heading"
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-5 sm:mb-6 tracking-tight animate-fade-in opacity-0 [animation-delay:400ms] [animation-fill-mode:forwards] motion-reduce:animate-none motion-reduce:opacity-100"
              >
                Do the best work
                <br />
                <span className="text-accent">of your career</span>
              </h1>

              {/* Subheadline */}
              <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed mb-8 sm:mb-10 max-w-lg animate-fade-in opacity-0 [animation-delay:600ms] [animation-fill-mode:forwards] motion-reduce:animate-none motion-reduce:opacity-100">
                Join a team of passionate creatives building Africa's most innovative content studio. 
                Great work, great people, great culture.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-in opacity-0 [animation-delay:800ms] [animation-fill-mode:forwards] motion-reduce:animate-none motion-reduce:opacity-100">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-accent hover:bg-[#C93917] active:bg-[#AB3013] text-white px-6 sm:px-8 h-12 sm:h-14 text-sm sm:text-base font-semibold shadow-xl hover:shadow-2xl hover:shadow-accent/25 transition-all duration-300"
                >
                  <a href="mailto:careers@9yards.co.ug?subject=Career Inquiry">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" aria-hidden="true" />
                    Get In Touch
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={scrollToContent}
                  className="rounded-full border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-6 sm:px-8 h-12 sm:h-14 text-sm sm:text-base font-semibold transition-all duration-300"
                >
                  Learn About Us
                </Button>
              </div>

              {/* Location Badge */}
              <div className="flex items-center gap-2 mt-8 sm:mt-10 animate-fade-in opacity-0 [animation-delay:1000ms] [animation-fill-mode:forwards] motion-reduce:animate-none motion-reduce:opacity-100">
                <MapPin className="w-4 h-4 text-accent" aria-hidden="true" />
                <span className="text-sm text-white/60">Based in Kampala, Uganda</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToContent}
          aria-label="Scroll to learn more about our culture"
          className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-full p-2 animate-fade-in opacity-0 [animation-delay:1200ms] [animation-fill-mode:forwards] motion-reduce:animate-none motion-reduce:opacity-100"
        >
          <span className="text-[10px] sm:text-xs tracking-widest uppercase">
            Our Culture
          </span>
          <ChevronDown
            className="w-5 h-5 sm:w-6 sm:h-6 animate-bounce motion-reduce:animate-none"
            aria-hidden="true"
          />
        </button>
      </section>

      {/* Culture Stats Section */}
      <section
        id="culture-section"
        className="py-16 sm:py-20 md:py-24 lg:py-28 bg-background"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Stats Grid */}
          <div
            ref={(el) => (sectionRefs.current["stats"] = el)}
            className={cn(
              "grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 transition-all duration-700",
              isVisible["stats"]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            )}
          >
            {cultureHighlights.map((item, index) => (
              <div
                key={item.label}
                className="text-center sm:text-left"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-accent mb-2">
                  {item.stat}
                </div>
                <div className="text-lg sm:text-xl font-semibold text-foreground mb-2">
                  {item.label}
                </div>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section - Bento Grid */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-[#1a1a2e]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div
            ref={(el) => (sectionRefs.current["values-header"] = el)}
            className={cn(
              "max-w-3xl mb-10 sm:mb-14 lg:mb-16 transition-all duration-700",
              isVisible["values-header"]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            )}
          >
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-accent mb-3">
              Our Values
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.1]">
              What we believe in
            </h2>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                ref={(el) => (sectionRefs.current[`value-${index}`] = el)}
                className={cn(
                  "group relative rounded-2xl sm:rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 p-5 sm:p-6 lg:p-8 hover:border-accent/30 transition-all duration-500",
                  isVisible[`value-${index}`]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div
                  className={cn(
                    "w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mb-4 sm:mb-5 transition-transform duration-300 group-hover:scale-110",
                    value.color
                  )}
                >
                  <value.icon
                    className="w-6 h-6 sm:w-7 sm:h-7 text-white"
                    aria-hidden="true"
                  />
                </div>

                {/* Content */}
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">
                  {value.title}
                </h3>
                <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Perks & Benefits Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div
            ref={(el) => (sectionRefs.current["perks-header"] = el)}
            className={cn(
              "max-w-3xl mx-auto mb-10 sm:mb-14 lg:mb-16 text-center transition-all duration-700",
              isVisible["perks-header"]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            )}
          >
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-accent mb-3">
              Perks & Benefits
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.1] mb-4">
              Why you'll love it here
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto">
              We take care of our team so they can focus on doing great work.
            </p>
          </div>

          {/* Perks Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            {perks.map((perk, index) => (
              <div
                key={perk.title}
                ref={(el) => (sectionRefs.current[`perk-${index}`] = el)}
                className={cn(
                  "group p-5 sm:p-6 rounded-2xl border border-border bg-muted/30 hover:border-accent/30 hover:bg-muted/50 transition-all duration-300",
                  isVisible[`perk-${index}`]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: `${index * 75}ms` }}
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <perk.icon
                    className="w-5 h-5 sm:w-6 sm:h-6 text-accent"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">
                  {perk.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {perk.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Life at 9Yards - Image Grid */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-[#f8f8f5]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div
            ref={(el) => (sectionRefs.current["life-header"] = el)}
            className={cn(
              "max-w-3xl mb-10 sm:mb-14 lg:mb-16 transition-all duration-700",
              isVisible["life-header"]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            )}
          >
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-accent mb-3">
              Life at 9Yards
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.1] mb-4">
              A glimpse behind the scenes
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-xl">
              From brainstorming sessions to on-set productions, every day brings new creative challenges.
            </p>
          </div>

          {/* Image Grid */}
          <div
            ref={(el) => (sectionRefs.current["life-images"] = el)}
            className={cn(
              "grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-5 transition-all duration-700",
              isVisible["life-images"]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            )}
          >
            {/* Large image */}
            <div className="col-span-2 lg:col-span-2 row-span-2 relative rounded-2xl sm:rounded-3xl overflow-hidden group">
              <img
                src="/images/team/9Yards-Content-House-Team-01.jpg"
                alt="9Yards team on set"
                className="w-full h-full min-h-[280px] sm:min-h-[400px] lg:min-h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6">
                <span className="text-white/80 text-sm font-medium">On Set</span>
                <p className="text-white font-semibold text-lg sm:text-xl">Where the magic happens</p>
              </div>
            </div>

            {/* Smaller images */}
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden group">
              <img
                src="/images/team/9yards-office.jpg"
                alt="9Yards office space"
                className="w-full h-full min-h-[140px] sm:min-h-[200px] object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4">
                <span className="text-white font-medium text-sm sm:text-base">Our Space</span>
              </div>
            </div>

            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden group">
              <img
                src="/images/team/9yards-team-onset.png"
                alt="Team collaboration"
                className="w-full h-full min-h-[140px] sm:min-h-[200px] object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4">
                <span className="text-white font-medium text-sm sm:text-base">Teamwork</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* No Open Roles - But Stay Connected */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            ref={(el) => (sectionRefs.current["open-roles"] = el)}
            className={cn(
              "max-w-3xl mx-auto text-center transition-all duration-700",
              isVisible["open-roles"]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            )}
          >
            {/* Icon */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6 sm:mb-8">
              <Clock className="w-8 h-8 sm:w-10 sm:h-10 text-accent" aria-hidden="true" />
            </div>

            {/* Content */}
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-accent mb-3">
              Open Positions
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-[1.1] mb-4 sm:mb-5">
              No open roles right now
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto mb-8 sm:mb-10 leading-relaxed">
              We're not actively hiring at the moment, but we're always interested in meeting talented people. 
              Drop us a line and tell us about yourself — great people often create their own opportunities.
            </p>

            {/* What we look for */}
            <div className="bg-muted/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 text-left mb-8 sm:mb-10 border border-border">
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-4 sm:mb-5 text-center sm:text-left">
                What we typically look for
              </h3>
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                {[
                  "Strong portfolio of creative work",
                  "Self-motivated and proactive mindset",
                  "Excellent communication skills",
                  "Passion for learning new tools & tech",
                  "Team player with low ego",
                  "Based in or willing to relocate to Kampala",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      className="w-5 h-5 text-accent flex-shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span className="text-sm sm:text-base text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-accent hover:bg-[#C93917] active:bg-[#AB3013] text-white px-6 sm:px-8 h-12 sm:h-14 text-sm sm:text-base font-semibold shadow-xl hover:shadow-2xl hover:shadow-accent/20 transition-all duration-300"
              >
                <a href="mailto:careers@9yards.co.ug?subject=Career Inquiry - [Your Name]&body=Hi 9Yards Team,%0D%0A%0D%0AI'm interested in joining your team. Here's a bit about me:%0D%0A%0D%0A[Tell us about yourself, your experience, and what role you'd be interested in]%0D%0A%0D%0APortfolio/LinkedIn: [Your link]%0D%0A%0D%0AThanks!">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" aria-hidden="true" />
                  Send Us Your Details
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-6 sm:px-8 h-12 sm:h-14 text-sm sm:text-base font-semibold transition-all duration-300"
              >
                <Link to="/portfolio">
                  View Our Work
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section
        ref={(el) => (sectionRefs.current["cta"] = el)}
        className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#f8f8f5]"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Card Container */}
          <div
            className={cn(
              "relative rounded-2xl sm:rounded-3xl overflow-hidden min-h-[380px] sm:min-h-[420px] md:min-h-[480px] shadow-2xl transition-all duration-700",
              isVisible["cta"]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            )}
          >
            {/* Background Image */}
            <div className="absolute inset-0" aria-hidden="true">
              <img
                src="/images/team/9yards-office-2.jpg"
                alt=""
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
                  Not Looking for a Job?
                </p>

                {/* Headline */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.1] mb-4 sm:mb-5">
                  Work with us on your{" "}
                  <span className="text-accent">next project</span>
                </h2>

                {/* Description */}
                <p className="text-sm sm:text-base md:text-lg text-white/80 leading-relaxed mb-6 sm:mb-8">
                  If you're looking for a creative partner rather than a career, 
                  we'd love to help bring your vision to life.
                </p>

                {/* CTA Button */}
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-accent hover:bg-[#C93917] active:bg-[#AB3013] text-white px-6 sm:px-8 h-12 sm:h-14 text-sm sm:text-base font-semibold shadow-xl hover:shadow-2xl hover:shadow-accent/20 transition-all duration-300"
                >
                  <Link to="/get-started">
                    Start a Project
                    <ArrowRight
                      className="w-4 h-4 sm:w-5 sm:h-5 ml-2"
                      aria-hidden="true"
                    />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
