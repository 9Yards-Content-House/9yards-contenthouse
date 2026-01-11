import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { PortfolioCard } from "@/components/shared/PortfolioCard";
import { TestimonialCard } from "@/components/shared/TestimonialCard";
import { StatCounter } from "@/components/shared/StatCounter";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Palette,
  Video,
  Share2,
  Globe,
  Sparkles,
  Mic,
  ArrowRight,
  Zap,
  Users,
  Target,
  Award,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

// Import images
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";

// Hero portfolio images - row 1 (scrolls left)
const heroPortfolioRow1 = [
  { image: portfolio1, title: "Brand Identity", logo: "Legensity" },
  { image: portfolio2, title: "Music Video", logo: "Afro Beats" },
  { image: portfolio3, title: "Web Design", logo: "TechUG" },
  { image: portfolio4, title: "Social Campaign", logo: "Safari" },
  { image: portfolio5, title: "Motion Graphics", logo: "Motion" },
  { image: portfolio6, title: "Print Design", logo: "Print" },
];

// Hero portfolio images - row 2 (scrolls right)
const heroPortfolioRow2 = [
  { image: portfolio3, title: "Tech Website", logo: "StartupUG" },
  { image: portfolio1, title: "Branding", logo: "Kampala" },
  { image: portfolio4, title: "Marketing", logo: "Uganda Air" },
  { image: portfolio2, title: "Video Prod", logo: "Pearl" },
  { image: portfolio6, title: "Design", logo: "Rolex" },
  { image: portfolio5, title: "Animation", logo: "Animate" },
];

const services = [
  {
    icon: Palette,
    title: "Graphic Design",
    description:
      "Eye-catching visuals that communicate your brand's message with impact and clarity.",
    href: "/services/graphic-design",
  },
  {
    icon: Video,
    title: "Video Production",
    description:
      "Cinematic storytelling from concept to delivery, capturing your brand's essence.",
    href: "/services/video-production",
  },
  {
    icon: Share2,
    title: "Social Media Management",
    description:
      "Strategic content creation and community engagement that builds loyal audiences.",
    href: "/services/social-media",
  },
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Fast, responsive, and beautiful websites that convert visitors into customers.",
    href: "/services/web-development",
  },
  {
    icon: Sparkles,
    title: "Branding",
    description:
      "Complete brand identities that stand out and resonate with your target audience.",
    href: "/services/branding",
  },
  {
    icon: Mic,
    title: "Podcast Studio",
    description:
      "Professional recording studio with top-tier equipment and audio engineering support.",
    href: "/studio",
  },
];

const whyChooseUs = [
  {
    icon: Zap,
    title: "AI-Powered Speed & Affordability",
    description:
      "Cutting-edge AI workflows deliver world-class creative at local prices with lightning-fast turnarounds.",
  },
  {
    icon: Users,
    title: "Flexible Engagement Models",
    description:
      "Choose subscription plans or project-based pricing that fits your needs and budget perfectly.",
  },
  {
    icon: Target,
    title: "Full-Spectrum Creative",
    description:
      "From branding to video, web to social—one team handles all your creative needs seamlessly.",
  },
  {
    icon: Award,
    title: "East African Excellence",
    description:
      "Ugandan creativity meets international standards. Local expertise, global quality.",
  },
];

const portfolioItems = [
  {
    image: portfolio1,
    title: "Legensity Brand Identity",
    category: "Branding",
    href: "/portfolio/legensity-brand",
  },
  {
    image: portfolio2,
    title: "Music Video Production",
    category: "Video",
    href: "/portfolio/music-video",
  },
  {
    image: portfolio3,
    title: "Tech Startup Website",
    category: "Web Design",
    href: "/portfolio/tech-website",
  },
  {
    image: portfolio4,
    title: "Social Media Campaign",
    category: "Social Media",
    href: "/portfolio/social-campaign",
  },
  {
    image: portfolio5,
    title: "Motion Graphics Reel",
    category: "Motion",
    href: "/portfolio/motion-graphics",
  },
  {
    image: portfolio6,
    title: "Print Design Collection",
    category: "Print",
    href: "/portfolio/print-design",
  },
];

const testimonials = [
  {
    quote:
      "9Yards transformed our brand completely. Their creativity and professionalism exceeded all our expectations. The team's attention to detail is unmatched.",
    author: "Sarah Namukasa",
    role: "Marketing Director",
    company: "TechUganda Ltd",
    rating: 5,
  },
  {
    quote:
      "The video production quality is on par with international studios. Fast delivery, excellent communication, and stunning results every time.",
    author: "David Okello",
    role: "CEO",
    company: "Afro Beats Records",
    rating: 5,
  },
  {
    quote:
      "Their social media management doubled our engagement in just 3 months. They truly understand the Ugandan market while maintaining global standards.",
    author: "Grace Achieng",
    role: "Brand Manager",
    company: "Safari Tours Uganda",
    rating: 5,
  },
];

const clientLogos = [
  { name: "Spice Diana", logo: null },
  { name: "TechUganda", logo: null },
  { name: "Safari Tours", logo: null },
  { name: "Afro Beats", logo: null },
  { name: "Kampala Hotels", logo: null },
  { name: "Uganda Airlines", logo: null },
  { name: "Rolex Café", logo: null },
  { name: "Pearl of Africa", logo: null },
];

const stats = [
  { value: 500, suffix: "+", label: "Projects Delivered" },
  { value: 100, suffix: "+", label: "Happy Clients" },
  { value: 10, suffix: "+", label: "Team Members" },
  { value: 5, suffix: "", label: "Years Experience" },
];

export default function Index() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [activeFilter, setActiveFilter] = useState("All");

  const servicesAnimation = useScrollAnimation<HTMLDivElement>();
  const whyUsAnimation = useScrollAnimation<HTMLDivElement>();
  const portfolioAnimation = useScrollAnimation<HTMLDivElement>();
  const testimonialsAnimation = useScrollAnimation<HTMLDivElement>();
  const statsAnimation = useScrollAnimation<HTMLDivElement>();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const filters = ["All", "Branding", "Video", "Social Media", "Web Design"];

  const filteredPortfolio =
    activeFilter === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <Layout>
      {/* Hero Section - Superside Style */}
      <section className="relative bg-primary overflow-hidden lg:min-h-screen">
        {/* Desktop Layout: Split view */}
        <div className="relative z-10 flex flex-col lg:flex-row lg:min-h-screen">
          
          {/* Left Side - Text Content */}
          <div className="w-full lg:w-[60%] flex flex-col justify-center px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-28 pt-20 sm:pt-24 md:pt-28 lg:pt-0 pb-4 sm:pb-6 lg:pb-0 lg:min-h-screen">
            {/* Main Headline */}
            <h1 className="text-[1.85rem] sm:text-[2.25rem] md:text-[2.5rem] lg:text-[2.75rem] xl:text-[3.5rem] 2xl:text-[4rem] leading-[1.08] tracking-tight text-white mb-4 sm:mb-5 md:mb-6 lg:mb-8 text-center lg:text-left">
              Your <span className="italic font-light text-accent">creative team's</span>
              <br /> creative team<span className="text-accent">™</span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-[0.9rem] sm:text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-[1.35rem] text-white/70 mb-6 sm:mb-7 lg:mb-10 max-w-sm sm:max-w-md lg:max-w-xl xl:max-w-2xl text-center lg:text-left mx-auto lg:mx-0 leading-[1.7]">
              Scale your in-house creative team with top local talent 
              powered by industry-leading AI workflows, delivering 
              anything you can imagine fast and affordably.
            </p>
            
            {/* CTA Button */}
            <div className="flex justify-center lg:justify-start">
              <Button 
                variant="accent" 
                size="lg" 
                className="px-7 sm:px-8 lg:px-12 py-5 sm:py-6 lg:py-7 text-sm sm:text-base lg:text-lg"
                asChild
              >
                <Link to="/contact">Book a demo</Link>
              </Button>
            </div>
          </div>

          {/* Right Side - Masonry Grid (Desktop) / Horizontal Scroll (Mobile/Tablet) */}
          <div className="w-full lg:w-[40%] relative">
            
            {/* Mobile/Tablet: Horizontal Scrolling Rows with edge fade */}
            <div className="lg:hidden relative mt-2 sm:mt-4 md:mt-6 overflow-hidden pb-4 sm:pb-6 md:pb-8">
              {/* Left edge fade */}
              <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-12 z-10 pointer-events-none bg-gradient-to-r from-primary to-transparent" />
              {/* Right edge fade */}
              <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-12 z-10 pointer-events-none bg-gradient-to-l from-primary to-transparent" />
              
              {/* Row 1 - Scrolls Left */}
              <div className="mb-2.5 sm:mb-3 md:mb-4">
                <div className="flex animate-scroll-left">
                  {[...heroPortfolioRow1, ...heroPortfolioRow1, ...heroPortfolioRow1].map((item, index) => (
                    <div 
                      key={`row1-${index}`} 
                      className="flex-shrink-0 w-[140px] sm:w-[180px] md:w-[220px] h-[105px] sm:h-[135px] md:h-[165px] mx-1 sm:mx-1.5 md:mx-2 rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden relative"
                    >
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-1.5 sm:top-2 md:top-3 left-1.5 sm:left-2 md:left-3">
                        <span className="text-white text-[9px] sm:text-[10px] md:text-xs font-medium bg-black/40 backdrop-blur-sm px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md">
                          {item.logo}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Row 2 - Scrolls Right */}
              <div>
                <div className="flex animate-scroll-right">
                  {[...heroPortfolioRow2, ...heroPortfolioRow2, ...heroPortfolioRow2].map((item, index) => (
                    <div 
                      key={`row2-${index}`} 
                      className="flex-shrink-0 w-[140px] sm:w-[180px] md:w-[220px] h-[105px] sm:h-[135px] md:h-[165px] mx-1 sm:mx-1.5 md:mx-2 rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden relative"
                    >
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-1.5 sm:top-2 md:top-3 left-1.5 sm:left-2 md:left-3">
                        <span className="text-white text-[9px] sm:text-[10px] md:text-xs font-medium bg-black/40 backdrop-blur-sm px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md">
                          {item.logo}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Desktop: 3-Column Masonry Grid with Smooth Scrolling */}
            <div className="hidden lg:block h-screen overflow-hidden relative">
              {/* Top Gradient Overlay - ensures nav visibility */}
              <div 
                className="absolute top-0 left-0 right-0 h-28 xl:h-36 z-10 pointer-events-none"
                style={{
                  background: 'linear-gradient(to bottom, hsl(var(--primary)) 0%, hsl(var(--primary)) 40%, transparent 100%)'
                }}
              />
              
              {/* Bottom Gradient Overlay */}
              <div 
                className="absolute bottom-0 left-0 right-0 h-28 xl:h-36 z-10 pointer-events-none"
                style={{
                  background: 'linear-gradient(to top, hsl(var(--primary)) 0%, hsl(var(--primary)) 40%, transparent 100%)'
                }}
              />
              
              {/* Right edge fade */}
              <div 
                className="absolute right-0 top-0 bottom-0 w-6 xl:w-8 z-10 pointer-events-none"
                style={{
                  background: 'linear-gradient(to left, hsl(var(--primary)) 0%, transparent 100%)'
                }}
              />

              {/* Grid Container */}
              <div className="flex h-full gap-2.5 xl:gap-3 2xl:gap-4 pl-4 xl:pl-6 pr-4 xl:pr-6 pt-6">
                {/* Column 1 - Scrolls Up */}
                <div className="flex-1 overflow-hidden">
                  <div className="animate-scroll-up-slow">
                    {[...heroPortfolioRow1, ...heroPortfolioRow1, ...heroPortfolioRow1].map((item, index) => (
                      <div 
                        key={`col1-${index}`} 
                        className="mb-2.5 xl:mb-3 rounded-lg xl:rounded-xl overflow-hidden relative group"
                        style={{ height: index % 3 === 0 ? '160px' : index % 3 === 1 ? '200px' : '140px' }}
                      >
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute top-2 left-2">
                          <span className="text-white text-[10px] xl:text-xs font-medium bg-black/40 backdrop-blur-sm px-2 py-1 rounded-md">
                            {item.logo}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Column 2 - Scrolls Down (opposite) */}
                <div className="flex-1 overflow-hidden">
                  <div className="animate-scroll-down-medium pt-6 xl:pt-10">
                    {[...heroPortfolioRow2, ...heroPortfolioRow2, ...heroPortfolioRow2].map((item, index) => (
                      <div 
                        key={`col2-${index}`} 
                        className="mb-2.5 xl:mb-3 rounded-lg xl:rounded-xl overflow-hidden relative group"
                        style={{ height: index % 3 === 0 ? '180px' : index % 3 === 1 ? '150px' : '170px' }}
                      >
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute top-2 left-2">
                          <span className="text-white text-[10px] xl:text-xs font-medium bg-black/40 backdrop-blur-sm px-2 py-1 rounded-md">
                            {item.logo}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Column 3 - Scrolls Up */}
                <div className="flex-1 overflow-hidden">
                  <div className="animate-scroll-up-fast pt-3 xl:pt-5">
                    {[...heroPortfolioRow1.slice().reverse(), ...heroPortfolioRow1.slice().reverse(), ...heroPortfolioRow1.slice().reverse()].map((item, index) => (
                      <div 
                        key={`col3-${index}`} 
                        className="mb-2.5 xl:mb-3 rounded-lg xl:rounded-xl overflow-hidden relative group"
                        style={{ height: index % 3 === 0 ? '150px' : index % 3 === 1 ? '180px' : '165px' }}
                      >
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute top-2 left-2">
                          <span className="text-white text-[10px] xl:text-xs font-medium bg-black/40 backdrop-blur-sm px-2 py-1 rounded-md">
                            {item.logo}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trusted By Section */}
        <div className="relative z-10 bg-background py-12 md:py-16">
          <div className="container-custom">
            <p className="text-center text-foreground mb-8 md:mb-10 text-lg md:text-xl font-medium">
              Trusted by <span className="font-bold">100+</span> of Uganda's top brands
            </p>
            
            {/* Logo Marquee */}
            <div className="relative overflow-hidden">
              <div className="flex animate-marquee">
                {[...clientLogos, ...clientLogos, ...clientLogos].map((client, index) => (
                  <div 
                    key={`logo-${index}`}
                    className="flex-shrink-0 mx-6 md:mx-10"
                  >
                    <div className="h-8 md:h-10 flex items-center justify-center text-muted-foreground font-semibold text-sm md:text-base whitespace-nowrap hover:text-primary transition-colors">
                      {client.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-background" id="services">
        <div
          ref={servicesAnimation.ref}
          className={cn(
            "container-custom",
            servicesAnimation.isVisible && "animate-fade-in"
          )}
        >
          <SectionHeading
            title="Our Services"
            subtitle="Full-spectrum creative solutions to elevate your brand and accelerate your growth."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                href={service.href}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/services">
                View All Services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-muted">
        <div
          ref={whyUsAnimation.ref}
          className={cn(
            "container-custom",
            whyUsAnimation.isVisible && "animate-fade-in"
          )}
        >
          <SectionHeading
            title="Why Choose 9Yards?"
            subtitle="We combine local expertise with international standards to deliver exceptional results."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={item.title}
                className="flex gap-4 p-6 rounded-xl bg-card border border-border card-hover"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-7 h-7 text-accent" />
                </div>
                <div>
                  <h3 className="text-heading-3 text-card-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="section-padding bg-background" id="portfolio">
        <div
          ref={portfolioAnimation.ref}
          className={cn(
            "container-custom",
            portfolioAnimation.isVisible && "animate-fade-in"
          )}
        >
          <SectionHeading
            title="Featured Work"
            subtitle="Explore our portfolio of impactful creative projects."
          />

          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all",
                  activeFilter === filter
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                )}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Portfolio grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPortfolio.map((item) => (
              <PortfolioCard
                key={item.title}
                image={item.image}
                title={item.title}
                category={item.category}
                href={item.href}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="accent" size="lg" asChild>
              <Link to="/portfolio">
                View Full Portfolio
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Client Logos - Now integrated in hero section, removing this duplicate */}

      {/* Testimonials */}
      <section className="section-padding bg-background">
        <div
          ref={testimonialsAnimation.ref}
          className={cn(
            "container-custom",
            testimonialsAnimation.isVisible && "animate-fade-in"
          )}
        >
          <SectionHeading
            title="What Our Clients Say"
            subtitle="Don't just take our word for it—hear from the brands we've helped succeed."
          />

          {/* Carousel */}
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{
                  transform: `translateX(-${currentTestimonial * 100}%)`,
                }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <TestimonialCard
                      quote={testimonial.quote}
                      author={testimonial.author}
                      role={testimonial.role}
                      company={testimonial.company}
                      rating={testimonial.rating}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <button
                onClick={() =>
                  setCurrentTestimonial(
                    (prev) =>
                      (prev - 1 + testimonials.length) % testimonials.length
                  )
                }
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={cn(
                      "w-3 h-3 rounded-full transition-all",
                      index === currentTestimonial
                        ? "bg-accent w-6"
                        : "bg-muted hover:bg-muted-foreground/30"
                    )}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={() =>
                  setCurrentTestimonial(
                    (prev) => (prev + 1) % testimonials.length
                  )
                }
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary">
        <div
          ref={statsAnimation.ref}
          className={cn(
            "container-custom",
            statsAnimation.isVisible && "animate-fade-in"
          )}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <StatCounter
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                dark
              />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-display-3 mb-4">Stay Updated</h2>
            <p className="text-muted-foreground mb-8">
              Get the latest creative insights, tips, and exclusive offers
              delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
              <Button variant="accent" size="lg">
                Subscribe
              </Button>
            </form>
            <p className="text-sm text-muted-foreground mt-4">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-primary" id="contact-form">
        <div className="container-custom text-center">
          <h2 className="text-display-3 md:text-display-2 text-primary-foreground mb-6">
            Ready to Transform Your Brand?
          </h2>
          <p className="text-primary-foreground/80 text-body-lg mb-8 max-w-2xl mx-auto">
            Let's create something amazing together. Get started with a free
            consultation today.
          </p>
          <Button variant="cta" size="xl" asChild>
            <Link to="/contact">
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
