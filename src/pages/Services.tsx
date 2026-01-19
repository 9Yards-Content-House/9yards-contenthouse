import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import {
  Palette,
  Video,
  Share2,
  Globe,
  Sparkles,
  Mic,
  Mail,
  Users,
  PenTool,
  Cpu,
  Printer,
  ArrowRight,
  ArrowLeft,
  Check,
  RefreshCw,
  FileText,
  Blend,
  Target,
  Lightbulb,
  Play,
  Code,
  Megaphone,
  Brain,
  Map,
  Zap,
  Layers,
  TrendingUp,
  Award,
  Phone,
  Camera,
} from "lucide-react";

// Creative Services
const creativeServices = [
  {
    icon: Palette,
    title: "Graphic Design Services",
    description: "Logos, posters, social graphics, and brochures. If it's visual, we design it. Professional designs delivered fast.",
    startingPrice: "500K UGX/month subscription or custom project pricing",
    href: "/services/graphic-design",
  },
  {
    icon: Video,
    title: "Video Production Services",
    description: "Instagram Reels to full documentaries. Scripting, shooting, editing, and color correction that makes your brand look cinematic.",
    startingPrice: "800K UGX/month (short-form) or 3M+ UGX per video",
    href: "/services/video-production",
  },
  {
    icon: Camera,
    title: "Photography Services",
    description: "Product photography, corporate headshots, event coverage, and brand photography. Professional images that tell your story.",
    startingPrice: "500K UGX/session or subscription packages",
    href: "/services/photography",
  },
  {
    icon: Sparkles,
    title: "Branding Services",
    description: "Complete brand identities from scratch or refreshing what you already have. Logo, colors, typography, voice, and guidelines. Everything.",
    startingPrice: "3M UGX (full identity)",
    href: "/services/branding",
  },
  {
    icon: Target,
    title: "Ad Creative Services",
    description: "Eye-catching ads designed to stop the scroll and drive conversions. Multiple variations to beat ad fatigue.",
    startingPrice: "1.5M UGX per campaign (5 variations)",
    href: "/services/social-media-creative",
  },
  {
    icon: Share2,
    title: "Social Media Creative",
    description: "Platform-specific content that actually performs. We understand algorithms, trends, and what makes people engage.",
    startingPrice: "Included in subscriptions or 1.2M+ UGX/month standalone",
    href: "/services/social-media-creative",
  },
  {
    icon: Lightbulb,
    title: "Concept Creation",
    description: "Big ideas for 360° campaigns. Strategic concepts that resonate with your audience and work across every channel.",
    startingPrice: "2M+ UGX per campaign concept",
    href: "/services/concept-creation",
  },
  {
    icon: Printer,
    title: "Print Design Services",
    description: "Brochures, flyers, billboards, and catalogs. High-impact designs optimized for physical printing at any scale.",
    startingPrice: "800K - 2M UGX per project",
    href: "/services/print-design",
  },
  {
    icon: Play,
    title: "Motion Design Services",
    description: "Animated logos, explainer videos, and kinetic typography. Motion graphics that bring your brand to life.",
    startingPrice: "1.2M UGX per 30 seconds",
    href: "/services/motion-design",
  },
];

// Digital Marketing Services
const digitalServices = [
  {
    icon: Share2,
    title: "Social Media Management",
    description: "We handle everything: content creation, posting, community management, and strategy. Your social presence, managed professionally.",
    startingPrice: "1M UGX/month",
    href: "/services/social-media-marketing",
  },
  {
    icon: Code,
    title: "Website Development",
    description: "Custom websites that look incredible and actually convert. From landing pages to full e-commerce, built on the platform that fits your needs.",
    startingPrice: "1.5M UGX (landing page) to 12M+ UGX (e-commerce)",
    href: "/services/website-development",
  },
  {
    icon: Megaphone,
    title: "Influencer Marketing",
    description: "Connect with the right influencers for your brand. Strategy, outreach, management, and performance tracking.",
    startingPrice: "2M UGX per influencer/month",
    href: "/services/influencer-marketing",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Campaigns that actually get opened. Strategic email marketing that nurtures leads and drives sales.",
    startingPrice: "600K UGX/month (4 campaigns)",
    href: "/services/email-marketing",
  },
  {
    icon: PenTool,
    title: "Copywriting Services",
    description: "Words that sell without sounding sales-y. Website copy, ad copy, scripts, and captions. We write it all.",
    startingPrice: "Included in most services or custom pricing",
    href: "/services/copywriting",
  },
  {
    icon: Map,
    title: "Digital Strategy Development",
    description: "Comprehensive marketing plans built on data and insight. We map out exactly how to reach your goals.",
    startingPrice: "2M - 5M UGX",
    href: "/services/digital-strategy",
  },
];

// AI-Powered Services
const aiServices = [
  {
    icon: Cpu,
    title: "AI-Powered Creative Services",
    description: "AI-generated concepts, rapid variations, and smart asset generation. The future of creative production, available now.",
    startingPrice: "800K/month (AI Starter subscription)",
    href: "/services/ai-creative",
  },
  {
    icon: Brain,
    title: "AI Consulting",
    description: "Optimize your workflows with AI. We'll show you how to integrate smart tools without losing the human touch.",
    startingPrice: "500K UGX per session",
    href: "/services/ai-consulting",
  },
];

// Studio Services
const studioServices = [
  {
    icon: Mic,
    title: "Podcast Studio",
    description: "Professional podcast studio in Kampala. Recording, editing, and production services. Book by the hour or day.",
    startingPrice: "150K UGX/hour",
    href: "/services/podcast-production",
  },
];

// Main Service Categories for Carousel
const serviceCategories = [
  {
    id: "creative",
    title: "Creative",
    description: "Brand identities, logos, social graphics, and visual content that makes your brand impossible to ignore. We design everything from scratch or refresh what you have.",
    tags: ["Logo Design", "Brand Identity", "Social Media Graphics", "Packaging Design", "Print Materials"],
    href: "/services/graphic-design",
  },
  {
    id: "video",
    title: "Video & Motion",
    description: "From 15-second Reels to full documentary productions. We handle scripting, shooting, editing, and post-production to bring your stories to life on screen.",
    tags: ["Music Videos", "TV Commercials", "Corporate Videos", "Documentaries", "Motion Graphics", "Reels & TikTok"],
    href: "/services/video-production",
  },
  {
    id: "digital",
    title: "Digital Marketing",
    description: "Data-driven campaigns that actually convert. We manage your paid ads, SEO, email marketing, and lead generation to turn clicks into customers.",
    tags: ["Paid Social Ads", "Email Campaigns", "Automation Flows", "Analytics & Reporting", "A/B Testing"],
    href: "/services/social-media-marketing",
  },
  {
    id: "social",
    title: "Social Media",
    description: "Complete social media management. We create content, engage your community, track analytics, and grow your following across all platforms.",
    tags: ["Content Strategy", "Community Management", "Account Management", "Campaign Management", "Influencer Marketing"],
    href: "/services/social-media-marketing",
  },
  {
    id: "ai",
    title: "AI Services",
    description: "Stay ahead with AI-powered creative solutions. We help you automate workflows, generate content faster, and integrate smart tools into your business.",
    tags: ["AI Image Generation", "AI Video Creation", "AI Copywriting", "Workflow Automation", "Team Training"],
    href: "/services/ai-creative",
  },
  {
    id: "studio",
    title: "Studio & Production",
    description: "Professional studio facilities in Kampala. Book our space for podcast recording, voice-overs, photography sessions, and audio production.",
    tags: ["Podcast Recording", "Voice Over", "Product Photography", "Corporate Headshots", "Audio Editing"],
    href: "/services/podcast-production",
  },
];

// Why Choose Us Benefits
const whyChooseUs = [
  {
    icon: Zap,
    title: "Speed",
    description: "You get work back fast. Our AI workflows mean what takes other agencies weeks, we deliver in days. Subscriptions get priority turnaround.",
  },
  {
    icon: Layers,
    title: "Consistency",
    description: "Your brand stays cohesive. We maintain brand libraries, remember your preferences, and ensure every asset feels like it came from the same family.",
  },
  {
    icon: TrendingUp,
    title: "Flexibility",
    description: "Scale up or down. Need more work this month? We've got capacity. Slow season? Pause your subscription. We adapt to your business rhythm.",
  },
  {
    icon: Award,
    title: "Quality",
    description: "Portfolio-worthy, every time. We don't ship work we wouldn't put in our own portfolio. If it's not excellent, it's not done.",
  },
];

// Comparison table data
const comparisonData = [
  { feature: "Best For", subscription: "Regular creative needs", project: "One-time projects" },
  { feature: "Commitment", subscription: "Month-to-month (cancel anytime)", project: "Per project" },
  { feature: "Turnaround", subscription: "Priority queue", project: "Standard timeline" },
  { feature: "Pricing", subscription: "Predictable monthly fee", project: "Custom per project" },
  { feature: "Revisions", subscription: "Included (tier-dependent)", project: "Agreed per project" },
  { feature: "Account Manager", subscription: "Dedicated (Enterprise tier)", project: "Project manager assigned" },
  { feature: "Ideal Clients", subscription: "Active brands, regular content needs", project: "Launches, rebrands, campaigns" },
  { feature: "Flexibility", subscription: "Pause/resume anytime", project: "N/A" },
];

// Services Carousel Component with Continuous Infinite Scroll
function ServicesCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isAutoScrollPaused, setIsAutoScrollPaused] = useState(false);
  
  // Create extended array for seamless infinite scroll (5x for smooth looping)
  const extendedCategories = [...serviceCategories, ...serviceCategories, ...serviceCategories, ...serviceCategories, ...serviceCategories];
  const totalOriginal = serviceCategories.length;

  const getCardWidth = () => {
    if (typeof window === 'undefined') return 700;
    if (window.innerWidth < 640) return window.innerWidth * 0.85;
    if (window.innerWidth < 768) return window.innerWidth * 0.75;
    if (window.innerWidth < 1024) return 600;
    return 700;
  };

  const scrollToIndex = (index: number, smooth = true) => {
    if (carouselRef.current) {
      const cardWidth = getCardWidth();
      const gap = 24;
      // Always scroll forward by adding to current position
      carouselRef.current.scrollTo({
        left: (index + totalOriginal * 2) * (cardWidth + gap),
        behavior: smooth ? 'smooth' : 'auto'
      });
    }
  };

  const handlePrev = () => {
    if (carouselRef.current) {
      const cardWidth = getCardWidth();
      const gap = 24;
      carouselRef.current.scrollBy({
        left: -(cardWidth + gap),
        behavior: 'smooth'
      });
    }
  };

  const handleNext = () => {
    if (carouselRef.current) {
      const cardWidth = getCardWidth();
      const gap = 24;
      carouselRef.current.scrollBy({
        left: cardWidth + gap,
        behavior: 'smooth'
      });
    }
  };

  // Handle scroll to update active index and seamless infinite loop
  const handleScroll = () => {
    if (carouselRef.current) {
      const cardWidth = getCardWidth();
      const gap = 24;
      const scrollPosition = carouselRef.current.scrollLeft;
      const itemWidth = cardWidth + gap;
      const currentIndex = Math.round(scrollPosition / itemWidth);
      
      // Calculate the actual index within original array
      const normalizedIndex = ((currentIndex) % totalOriginal + totalOriginal) % totalOriginal;
      
      if (normalizedIndex !== activeIndex) {
        setActiveIndex(normalizedIndex);
      }
      
      // Seamless infinite scroll: silently jump when approaching edges
      const minThreshold = itemWidth * totalOriginal;
      const maxThreshold = itemWidth * (totalOriginal * 4);
      
      if (scrollPosition <= minThreshold) {
        // Jump forward seamlessly
        carouselRef.current.scrollLeft = scrollPosition + (totalOriginal * 2 * itemWidth);
      } else if (scrollPosition >= maxThreshold) {
        // Jump back seamlessly
        carouselRef.current.scrollLeft = scrollPosition - (totalOriginal * 2 * itemWidth);
      }
    }
  };

  // Initialize scroll position to middle set
  useEffect(() => {
    if (carouselRef.current) {
      const cardWidth = getCardWidth();
      const gap = 24;
      // Start at the middle of the extended array
      carouselRef.current.scrollLeft = totalOriginal * 2 * (cardWidth + gap);
    }
  }, []);

  // Auto-scroll effect - always scrolls forward
  useEffect(() => {
    if (isAutoScrollPaused) return;
    
    const interval = setInterval(() => {
      handleNext();
    }, 4000);
    
    return () => clearInterval(interval);
  }, [isAutoScrollPaused]);

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-muted/40 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-10 sm:mb-12 lg:mb-16 text-center">
          <div className="w-12 h-1 bg-accent rounded-full mb-4 mx-auto"></div>
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-accent mb-3 sm:mb-4">
            What We Do
          </p>
          <h2 className="text-[1.75rem] sm:text-3xl md:text-4xl lg:text-[2.5rem] font-bold tracking-tight text-foreground leading-[1.25] sm:leading-[1.3]">
            One team for every creative<br className="hidden sm:block" /> and marketing need
          </h2>
        </div>
      </div>

      {/* Full-width Carousel Container */}
      <div 
        className="relative"
        onMouseEnter={() => setIsAutoScrollPaused(true)}
        onMouseLeave={() => setIsAutoScrollPaused(false)}
      >
        {/* Navigation Arrows - Desktop - More visible with background */}
        <button
          onClick={handlePrev}
          className="hidden md:flex absolute left-1 lg:left-2 xl:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 lg:w-12 lg:h-12 items-center justify-center rounded-full bg-foreground text-background hover:bg-foreground/90 shadow-lg transition-all duration-200"
          aria-label="Previous service"
        >
          <ArrowLeft className="w-4 h-4 lg:w-5 lg:h-5" />
        </button>
        <button
          onClick={handleNext}
          className="hidden md:flex absolute right-1 lg:right-2 xl:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 lg:w-12 lg:h-12 items-center justify-center rounded-full bg-foreground text-background hover:bg-foreground/90 shadow-lg transition-all duration-200"
          aria-label="Next service"
        >
          <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5" />
        </button>

        {/* Cards Carousel */}
        <div
          ref={carouselRef}
          className="flex gap-4 sm:gap-5 lg:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory hide-scrollbar px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          onScroll={handleScroll}
        >
          {extendedCategories.map((category, index) => (
            <Link
              key={`${category.id}-${index}`}
              to={category.href}
              className="service-card group flex-shrink-0 w-[85vw] sm:w-[70vw] md:w-[550px] lg:w-[600px] xl:w-[700px] snap-center"
            >
              <div className="relative h-full min-h-[300px] sm:min-h-[340px] md:min-h-[380px] lg:min-h-[420px] rounded-xl sm:rounded-2xl lg:rounded-3xl bg-background border border-border/80 p-5 sm:p-7 md:p-8 lg:p-10 overflow-hidden transition-colors duration-200 hover:border-border">
                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-foreground mb-3 sm:mb-4 lg:mb-5 tracking-tight leading-[1.1] group-hover:text-accent transition-colors duration-200">
                    {category.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed max-w-lg">
                    {category.description}
                  </p>

                  {/* Service Tags - Individual hover effects */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-auto pt-6 sm:pt-8 lg:pt-10">
                    {category.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex px-3 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs lg:text-sm font-medium rounded-full bg-muted/80 text-muted-foreground border border-border/50 transition-colors duration-200 hover:bg-accent/10 hover:text-accent hover:border-accent/30 cursor-pointer"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-1.5 sm:gap-2 mt-6 sm:mt-8 lg:mt-10">
          {serviceCategories.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveIndex(index);
                scrollToIndex(index);
              }}
              className={`transition-all duration-300 rounded-full ${
                index === activeIndex
                  ? 'w-6 sm:w-8 h-1.5 sm:h-2 bg-accent'
                  : 'w-1.5 sm:w-2 h-1.5 sm:h-2 bg-foreground/20 hover:bg-foreground/40'
              }`}
              aria-label={`Go to ${serviceCategories[index].title}`}
            />
          ))}
        </div>

        {/* Mobile Navigation Arrows - More visible */}
        <div className="flex md:hidden justify-center gap-3 mt-5">
          <button
            onClick={handlePrev}
            className="w-11 h-11 flex items-center justify-center rounded-full bg-foreground text-background shadow-md hover:bg-foreground/90 transition-all"
            aria-label="Previous service"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <button
            onClick={handleNext}
            className="w-11 h-11 flex items-center justify-center rounded-full bg-foreground text-background shadow-md hover:bg-foreground/90 transition-all"
            aria-label="Next service"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}

export default function Services() {
  return (
    <Layout hideFooterCta={true}>
      {/* Hero Section */}
      <section className="relative min-h-[100svh] flex flex-col overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/team/services section hero.jpg"
            alt="Creative services - professional team at work"
            className="w-full h-full object-cover object-[70%_60%] sm:object-[center_50%] lg:object-[center_40%] scale-105"
          />
          {/* Gradient overlay - stronger on mobile for readability, softer split on desktop */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/75 lg:bg-gradient-to-r lg:from-black/95 lg:via-black/65 lg:via-55% lg:to-black/15" />
        </div>

        {/* Main Content - Better vertical centering on all devices */}
        <div className="relative z-10 flex-1 flex items-center pt-16 sm:pt-20 lg:pt-0">
          <div className="container-custom py-8 sm:py-12 lg:py-20">
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-12">
              {/* Left side - Text content */}
              <div className="flex flex-col justify-center animate-fade-in">
                {/* Eyebrow */}
                <span className="inline-block text-[11px] sm:text-xs md:text-sm font-semibold tracking-widest uppercase text-accent mb-2.5 sm:mb-3 md:mb-4">
                  Our Services
                </span>

                {/* Headline - Tighter line height, better wrapping */}
                <h1 className="text-[1.5rem] sm:text-[1.75rem] md:text-[2rem] lg:text-[2.3rem] font-bold text-white leading-[1.12] sm:leading-[1.15] lg:leading-[1.18] mb-4 sm:mb-5 md:mb-6 tracking-tight drop-shadow-sm">
                  Design. Video. Strategy. Everything your brand needs to{" "}
                  <span className="text-accent whitespace-nowrap">stand out and grow.</span>
                </h1>

                {/* Description - Improved readability */}
                <p className="text-[13px] sm:text-sm md:text-base lg:text-lg text-white/90 leading-[1.6] sm:leading-relaxed mb-5 sm:mb-6 md:mb-8 max-w-md sm:max-w-lg lg:max-w-xl">
                  From scroll-stopping social content to complete brand transformations, we deliver the creative firepower that turns attention into action. One team. Every service. Results that matter.
                </p>

                {/* CTA Button */}
                <div className="flex">
                  <Button 
                    asChild
                    size="lg"
                    className="rounded-full bg-accent hover:bg-[#C93917] active:bg-[#AB3013] text-white px-5 sm:px-6 md:px-8 h-10 sm:h-11 md:h-12 lg:h-14 text-[13px] sm:text-sm md:text-base font-semibold transition-colors duration-200"
                  >
                    <Link to="/get-started">
                      Get Started
                      <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Right side - Empty space to show background */}
              <div className="hidden lg:block" aria-hidden="true" />
            </div>
          </div>
        </div>

        {/* Scroll indicator - desktop only for cleaner mobile/tablet */}
        <div className="absolute bottom-8 lg:bottom-10 left-1/2 -translate-x-1/2 z-10 hidden lg:flex flex-col items-center gap-2 opacity-60 animate-bounce">
          <span className="text-white/60 text-xs uppercase tracking-widest">Scroll</span>
          <svg className="w-5 h-5 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="overflow-hidden bg-background py-12 sm:py-16 md:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 items-center">
            {/* Text Content */}
            <div className="order-2 lg:order-1">
              <div className="max-w-xl lg:max-w-lg">
                {/* Accent bar */}
                <div className="w-12 h-1 bg-accent rounded-full mb-4"></div>
                <h2 className="text-xs sm:text-sm font-semibold text-accent uppercase tracking-widest">Your Creative Partner</h2>
                <p className="mt-4 sm:mt-5 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground leading-[1.3]">
                  One team for everything your brand needs.
                </p>
                <p className="mt-4 sm:mt-5 lg:mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
                  Designers, videographers, strategists, and marketers, all under one roof. No more chasing freelancers, managing multiple contracts, or explaining your brand from scratch every time.
                </p>
                <p className="mt-3 sm:mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
                  We handle the creative so you can focus on running your business. We learn your brand, understand your goals, and deliver work that actually moves things forward. Whether you need a single project or ongoing support, we make world-class creative simple.
                </p>
                <div className="mt-6 sm:mt-8 lg:mt-10">
                  <Button variant="accent" size="lg" className="w-full sm:w-auto" asChild>
                    <Link to="/contact">
                      Let's Talk
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Image */}
            <div className="relative order-1 lg:order-2">
              {/* Decorative accent elements */}
              <div className="absolute -top-3 -right-3 md:-top-4 md:-right-4 w-20 h-20 md:w-24 md:h-24 bg-accent/10 rounded-2xl -z-10 hidden sm:block"></div>
              <div className="absolute -bottom-3 -left-3 md:-bottom-4 md:-left-4 w-24 h-24 md:w-32 md:h-32 bg-primary/10 rounded-2xl -z-10 hidden sm:block"></div>
              
              {/* Image with brand accent border */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl sm:rounded-2xl transform rotate-1 sm:rotate-2 scale-[1.02]"></div>
                <img 
                  src="/images/team/team01.jpg" 
                  alt="9Yards Content House team group" 
                  className="relative w-full h-auto rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl ring-1 ring-foreground/10 object-cover aspect-[4/3] sm:aspect-[5/4] lg:aspect-[4/5]" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Carousel Section */}
      <ServicesCarousel />






      {/* Industries We Serve Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-3xl mb-10 sm:mb-12 lg:mb-16">
            <div className="w-12 h-1 bg-accent rounded-full mb-4"></div>
            <h2 className="text-xs sm:text-sm font-semibold text-accent uppercase tracking-widest">Industries We Serve</h2>
            <p className="mt-4 sm:mt-5 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground leading-[1.3]">
              Creative solutions built for your industry
            </p>
            <p className="mt-4 sm:mt-5 lg:mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
              From music videos to e-commerce product shoots, corporate rebrands to influencer campaigns, we understand the unique creative demands of different industries. Here's who we work with:
            </p>
          </div>

          {/* Industries Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Entertainment & Music */}
            <div className="bg-card rounded-xl sm:rounded-2xl border border-border p-5 sm:p-6 hover:shadow-lg hover:border-accent/30 transition-all duration-300">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                <Play className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">Entertainment & Music</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Music videos, artist branding, album artwork, concert visuals, and social content for musicians, DJs, record labels, and entertainment companies.
              </p>
            </div>

            {/* E-Commerce & Retail */}
            <div className="bg-card rounded-xl sm:rounded-2xl border border-border p-5 sm:p-6 hover:shadow-lg hover:border-accent/30 transition-all duration-300">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                <Layers className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">E-Commerce & Retail</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Product photography, e-commerce websites, packaging design, social media marketing, and email campaigns that drive online sales and in-store traffic.
              </p>
            </div>

            {/* Hospitality & Food */}
            <div className="bg-card rounded-xl sm:rounded-2xl border border-border p-5 sm:p-6 hover:shadow-lg hover:border-accent/30 transition-all duration-300">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                <Camera className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">Hospitality & Food</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Food photography, menu design, restaurant branding, promotional videos, influencer partnerships, and social media management for restaurants, hotels, and cafes.
              </p>
            </div>

            {/* Corporate & Professional Services */}
            <div className="bg-card rounded-xl sm:rounded-2xl border border-border p-5 sm:p-6 hover:shadow-lg hover:border-accent/30 transition-all duration-300">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">Corporate & Professional</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Corporate headshots, company profiles, brand guidelines, presentation design, training videos, and internal communications for businesses and professional services.
              </p>
            </div>

            {/* Startups & Tech */}
            <div className="bg-card rounded-xl sm:rounded-2xl border border-border p-5 sm:p-6 hover:shadow-lg hover:border-accent/30 transition-all duration-300">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                <Cpu className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">Startups & Tech</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Brand identity, website development, explainer videos, pitch deck design, product demos, and digital marketing for tech startups and software companies.
              </p>
            </div>

            {/* Real Estate & Property */}
            <div className="bg-card rounded-xl sm:rounded-2xl border border-border p-5 sm:p-6 hover:shadow-lg hover:border-accent/30 transition-all duration-300">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">Real Estate & Property</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Property photography, virtual tours, brochure design, listing videos, and digital advertising for real estate agents, developers, and property managers.
              </p>
            </div>

            {/* Fashion & Beauty */}
            <div className="bg-card rounded-xl sm:rounded-2xl border border-border p-5 sm:p-6 hover:shadow-lg hover:border-accent/30 transition-all duration-300">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">Fashion & Beauty</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Lookbook photography, brand campaigns, influencer marketing, social media content, e-commerce shoots, and packaging design for fashion and beauty brands.
              </p>
            </div>

            {/* Health & Wellness */}
            <div className="bg-card rounded-xl sm:rounded-2xl border border-border p-5 sm:p-6 hover:shadow-lg hover:border-accent/30 transition-all duration-300">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                <Target className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">Health & Wellness</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Brand identity, educational content, social media marketing, podcast production, and promotional videos for gyms, clinics, wellness brands, and health practitioners.
              </p>
            </div>

            {/* Media & Content Creators */}
            <div className="bg-card rounded-xl sm:rounded-2xl border border-border p-5 sm:p-6 hover:shadow-lg hover:border-accent/30 transition-all duration-300">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                <Mic className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">Media & Content Creators</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Podcast production, video editing, channel branding, thumbnail design, and content strategy for YouTubers, podcasters, influencers, and digital creators.
              </p>
            </div>
          </div>

          {/* Bottom Note */}
          <div className="mt-10 sm:mt-12 lg:mt-16 text-center">
            <p className="text-base sm:text-lg text-muted-foreground">
              Don't see your industry? <span className="font-semibold text-foreground">We adapt.</span> Our creative process works for any business that needs to look great and grow.
            </p>
            <div className="mt-6">
              <Button variant="accent" size="lg" asChild>
                <Link to="/contact">
                  Let's Discuss Your Project
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-[#f5f5f0] py-8 sm:py-10 md:py-14 lg:py-20 xl:py-24">
        <div className="mx-auto max-w-7xl px-3 sm:px-5 md:px-6 lg:px-8 xl:px-10">
          {/* Card Container */}
          <div className="relative rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden min-h-[380px] sm:min-h-[420px] md:min-h-[460px] lg:min-h-[500px] xl:min-h-[540px]">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img 
                src="/images/hero-grid/video-production.jpg" 
                alt="Creative production"
                className="w-full h-full object-cover object-[70%_center] sm:object-center"
              />
              {/* Gradient overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/20 sm:from-black/80 sm:via-black/45 sm:to-transparent md:from-black/75 md:via-black/35 lg:from-black/70 lg:via-black/25 lg:to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex items-center px-5 sm:px-7 md:px-10 lg:px-12 xl:px-16 py-8 sm:py-10 md:py-12 lg:py-14 xl:py-16">
              <div className="max-w-[280px] sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
                {/* Headline */}
                <h2 className="text-[1.5rem] sm:text-[1.75rem] md:text-3xl lg:text-4xl xl:text-[2.75rem] font-bold text-white leading-[1.3] mb-3 sm:mb-4 md:mb-5 lg:mb-6">
                  Ready to Elevate{' '}
                  <span className="text-accent">Your Brand?</span>
                </h2>

                {/* Description */}
                <p className="text-[13px] sm:text-sm md:text-base lg:text-lg xl:text-xl text-white/75 leading-relaxed mb-5 sm:mb-6 md:mb-7 lg:mb-8">
                  Pick a service. Choose how you work. Get world-class creative without the world-class invoice.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Button 
                    asChild
                    size="lg"
                    className="rounded-full bg-accent hover:bg-accent/90 text-white px-5 sm:px-7 md:px-8 lg:px-10 h-10 sm:h-11 md:h-12 lg:h-14 text-[13px] sm:text-sm md:text-base lg:text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                  >
                    <Link to="/get-started">
                      Get Started
                      <ArrowRight className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 ml-2" />
                    </Link>
                  </Button>
                  <Button 
                    asChild
                    size="lg"
                    variant="outline"
                    className="rounded-full border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 hover:border-white/50 px-5 sm:px-7 md:px-8 lg:px-10 h-10 sm:h-11 md:h-12 lg:h-14 text-[13px] sm:text-sm md:text-base lg:text-lg font-semibold transition-all"
                  >
                    <Link to="/portfolio">
                      View Our Work
                    </Link>
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
