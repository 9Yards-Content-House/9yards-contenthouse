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
  PenTool,
  Megaphone,
  Code,
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

// Hero service cards for the masonry grid - 10 services with unique images
const heroServiceCards = [
  { name: "Video Production", image: "/images/hero-grid/video-production.jpg" },
  { name: "Photography", image: "/images/hero-grid/photography.jpg" },
  { name: "Graphic Design", image: "/images/hero-grid/graphic-design.jpg" },
  { name: "Print Design", image: "/images/hero-grid/print-design.jpg" },
  { name: "Branding", image: "/images/hero-grid/branding.jpg" },
  { name: "Social Media Marketing", image: "/images/hero-grid/social-media-marketing.jpg" },
  { name: "Website Development", image: "/images/hero-grid/Website-development.jpg" },
  { name: "Influencer Marketing", image: "/images/hero-grid/influencer-marketing.jpg" },
  { name: "Podcast Production", image: "/images/hero-grid/podcast-production.jpg" },
  { name: "TV & Radio Production", image: "/images/hero-grid/tv-and-radio-production.jpg" },
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
      "From branding to video, web to social. One team handles all your creative needs seamlessly.",
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
            <h1 className="text-[1.5rem] sm:text-[2.25rem] md:text-[2.5rem] lg:text-[2.75rem] xl:text-[3.5rem] 2xl:text-[4rem] leading-[1.15] tracking-tight text-white mb-4 sm:mb-5 md:mb-6 lg:mb-8 text-center lg:text-left">
              <span className="sm:whitespace-nowrap">Everything your brand needs,</span>
              <br className="hidden sm:block" />
              <span className="sm:whitespace-nowrap">one <span className="text-accent">creative partner.</span></span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-[0.9rem] sm:text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-[1.35rem] text-white/70 mb-6 sm:mb-7 lg:mb-10 max-w-sm sm:max-w-md lg:max-w-xl xl:max-w-2xl text-center lg:text-left mx-auto lg:mx-0 leading-[1.7]">
              Whatever your vision, we bring it to life. World-class creative talent and intelligent workflows deliver professional results faster and more affordably than traditional agencies. Your creative department, on demand.
            </p>
            
            {/* CTA Button */}
            <div className="flex justify-center lg:justify-start">
              <Button 
                variant="accent" 
                size="lg" 
                className="px-7 sm:px-8 lg:px-12 py-5 sm:py-6 lg:py-7 text-sm sm:text-base lg:text-lg"
                asChild
              >
                <Link to="/get-started">Get Started</Link>
              </Button>
            </div>
          </div>

          {/* Right Side - Masonry Grid (Desktop) / Horizontal Scroll (Mobile/Tablet) */}
          <div className="w-full lg:w-[40%] relative">
            
            {/* Mobile/Tablet: Horizontal Scrolling Rows with edge fade */}
            <div className="lg:hidden relative mt-2 sm:mt-4 md:mt-6 overflow-hidden pb-4 sm:pb-6 md:pb-8 scroll-container">
              {/* Left edge fade */}
              <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-12 z-10 pointer-events-none bg-gradient-to-r from-primary to-transparent" />
              {/* Right edge fade */}
              <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-12 z-10 pointer-events-none bg-gradient-to-l from-primary to-transparent" />
              
              {/* Row 1 - Scrolls Left - Service cards with varied widths */}
              <div className="mb-1.5 sm:mb-2 md:mb-2.5">
                <div className="flex animate-scroll-left flex-nowrap">
                  {[...heroServiceCards.slice(0, 5), ...heroServiceCards.slice(0, 5), ...heroServiceCards.slice(0, 5), ...heroServiceCards.slice(0, 5)].map((service, index) => {
                    // Pinterest-style varied widths only (height consistent for clean horizontal scroll)
                    const widths = [
                      'w-[130px] sm:w-[160px] md:w-[190px]',  // narrow
                      'w-[170px] sm:w-[210px] md:w-[250px]',  // wide
                      'w-[145px] sm:w-[180px] md:w-[215px]',  // medium
                      'w-[120px] sm:w-[150px] md:w-[180px]',  // small
                      'w-[180px] sm:w-[220px] md:w-[265px]',  // extra wide
                      'w-[155px] sm:w-[190px] md:w-[230px]',  // medium-wide
                      'w-[140px] sm:w-[175px] md:w-[205px]',  // medium-narrow
                      'w-[165px] sm:w-[200px] md:w-[240px]',  // wide
                      'w-[135px] sm:w-[168px] md:w-[200px]',  // narrow-medium
                    ];
                    const width = widths[index % widths.length];
                    return (
                      <div 
                        key={`row1-${index}`} 
                        className={`flex-shrink-0 ${width} h-[100px] sm:h-[130px] md:h-[160px] mx-0.5 sm:mx-1 md:mx-1.5 rounded-lg sm:rounded-xl overflow-hidden relative scroll-grid-image group`}
                      >
                        <img 
                          src={service.image} 
                          alt={service.name}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        {/* Gradient overlay for text readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                        {/* Service name label */}
                        <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3">
                          <h4 className="text-white font-semibold text-[10px] sm:text-xs md:text-sm leading-tight drop-shadow-lg">{service.name}</h4>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Row 2 - Scrolls Right - Service cards with varied widths */}
              <div>
                <div className="flex animate-scroll-right flex-nowrap">
                  {[...heroServiceCards.slice(5, 10), ...heroServiceCards.slice(5, 10), ...heroServiceCards.slice(5, 10), ...heroServiceCards.slice(5, 10)].map((service, index) => {
                    // Different width pattern for row 2
                    const widths = [
                      'w-[160px] sm:w-[195px] md:w-[235px]',  // medium-wide
                      'w-[125px] sm:w-[155px] md:w-[185px]',  // narrow
                      'w-[185px] sm:w-[225px] md:w-[270px]',  // extra wide
                      'w-[140px] sm:w-[175px] md:w-[210px]',  // medium
                      'w-[115px] sm:w-[145px] md:w-[175px]',  // small
                      'w-[170px] sm:w-[210px] md:w-[250px]',  // wide
                      'w-[150px] sm:w-[185px] md:w-[220px]',  // medium
                      'w-[175px] sm:w-[215px] md:w-[255px]',  // wide
                      'w-[130px] sm:w-[160px] md:w-[195px]',  // narrow
                    ];
                    const width = widths[index % widths.length];
                    return (
                      <div 
                        key={`row2-${index}`} 
                        className={`flex-shrink-0 ${width} h-[115px] sm:h-[145px] md:h-[180px] mx-0.5 sm:mx-1 md:mx-1.5 rounded-lg sm:rounded-xl overflow-hidden relative scroll-grid-image group`}
                      >
                        <img 
                          src={service.image} 
                          alt={service.name}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        {/* Gradient overlay for text readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                        {/* Service name label */}
                        <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3">
                          <h4 className="text-white font-semibold text-[10px] sm:text-xs md:text-sm leading-tight drop-shadow-lg">{service.name}</h4>
                        </div>
                      </div>
                    );
                  })}
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

              {/* Grid Container - Service Cards Masonry */}
              <div className="flex h-full gap-1.5 xl:gap-2 pl-3 xl:pl-4 pr-3 xl:pr-4 pt-6">
                {/* Column 1 - Scrolls Up - Services 0-3 */}
                <div className="flex-1 overflow-hidden">
                  <div className="animate-scroll-up-slow">
                    {[...heroServiceCards.slice(0, 4), ...heroServiceCards.slice(0, 4), ...heroServiceCards.slice(0, 4), ...heroServiceCards.slice(0, 4)].map((service, index) => {
                      // Pinterest-style varied heights
                      const heights = [180, 240, 160, 280];
                      const height = heights[index % heights.length];
                      return (
                        <div 
                          key={`col1-${index}`} 
                          className="mb-1.5 xl:mb-2 rounded-lg xl:rounded-xl overflow-hidden relative group scroll-grid-image"
                          style={{ height: `${height}px` }}
                        >
                          <img 
                            src={service.image} 
                            alt={service.name}
                            className="absolute inset-0 w-full h-full object-cover"
                          />
                          {/* Gradient overlay for text readability */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                          {/* Service name label */}
                          <div className="absolute bottom-0 left-0 right-0 p-3 xl:p-4">
                            <h4 className="text-white font-semibold text-sm xl:text-base leading-tight drop-shadow-lg">{service.name}</h4>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Column 2 - Scrolls Down - Services 4-6 */}
                <div className="flex-1 overflow-hidden">
                  <div className="animate-scroll-down-medium pt-6 xl:pt-10">
                    {[...heroServiceCards.slice(4, 7), ...heroServiceCards.slice(4, 7), ...heroServiceCards.slice(4, 7), ...heroServiceCards.slice(4, 7)].map((service, index) => {
                      // Different height pattern for column 2
                      const heights = [220, 170, 260];
                      const height = heights[index % heights.length];
                      return (
                        <div 
                          key={`col2-${index}`} 
                          className="mb-1.5 xl:mb-2 rounded-lg xl:rounded-xl overflow-hidden relative group scroll-grid-image"
                          style={{ height: `${height}px` }}
                        >
                          <img 
                            src={service.image} 
                            alt={service.name}
                            className="absolute inset-0 w-full h-full object-cover"
                          />
                          {/* Gradient overlay for text readability */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                          {/* Service name label */}
                          <div className="absolute bottom-0 left-0 right-0 p-3 xl:p-4">
                            <h4 className="text-white font-semibold text-sm xl:text-base leading-tight drop-shadow-lg">{service.name}</h4>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Column 3 - Scrolls Up - Services 7-9 */}
                <div className="flex-1 overflow-hidden">
                  <div className="animate-scroll-up-fast pt-3 xl:pt-5">
                    {[...heroServiceCards.slice(7, 10), ...heroServiceCards.slice(7, 10), ...heroServiceCards.slice(7, 10), ...heroServiceCards.slice(7, 10)].map((service, index) => {
                      // Different height pattern for column 3
                      const heights = [200, 150, 250];
                      const height = heights[index % heights.length];
                      return (
                        <div 
                          key={`col3-${index}`} 
                          className="mb-1.5 xl:mb-2 rounded-lg xl:rounded-xl overflow-hidden relative group scroll-grid-image"
                          style={{ height: `${height}px` }}
                        >
                          <img 
                            src={service.image} 
                            alt={service.name}
                            className="absolute inset-0 w-full h-full object-cover"
                          />
                          {/* Gradient overlay for text readability */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                          {/* Service name label */}
                          <div className="absolute bottom-0 left-0 right-0 p-3 xl:p-4">
                            <h4 className="text-white font-semibold text-sm xl:text-base leading-tight drop-shadow-lg">{service.name}</h4>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Creative Partner Section */}
      <section className="overflow-hidden bg-background py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 sm:gap-y-12 md:mx-0 md:max-w-none md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-16">
            <div className="md:pr-4 lg:pr-8">
              <div className="md:max-w-md lg:max-w-lg">
                {/* Accent bar */}
                <div className="w-12 h-1 bg-accent rounded-full mb-4"></div>
                <h2 className="text-sm font-semibold text-accent uppercase tracking-widest">Kampala's Creative Powerhouse</h2>
                <p className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground leading-tight">
                  Your creative department has been waiting for you
                </p>
                <p className="mt-5 sm:mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
                  Professional cinema equipment. Podcast studios. Motion designers. Video production. Social media management. 9Yards Content House brings everything you need to scale your brand without the enterprise price tag or endless wait times.
                </p>
                <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
                  From a single Instagram post to complete TV commercials, we deliver world-class creative that traditional agencies can't match. Subscribe monthly or book projects. Your vision, our expertise, exceptional results.
                </p>
                <div className="mt-8 sm:mt-10">
                  <Button variant="accent" size="lg" asChild>
                    <Link to="/services">
                      View Our Services
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            <div className="relative order-first md:order-last">
              {/* Decorative accent elements - hidden on mobile/tablet, visible on desktop */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/10 rounded-2xl -z-10 hidden lg:block"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-2xl -z-10 hidden lg:block"></div>
              
              {/* Image with brand accent border */}
              <div className="relative max-w-sm mx-auto md:max-w-none">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl transform rotate-1 scale-[1.02] md:rotate-2"></div>
                <img 
                  src="/images/team/team.jpg" 
                  alt="9Yards Content House creative team at work" 
                  className="relative w-full h-auto rounded-xl shadow-2xl ring-1 ring-foreground/10 object-cover aspect-[4/5] sm:aspect-[4/5] md:aspect-[3/4] lg:aspect-[3/4]" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section - Modern Stacked List with Hover Images */}
      <section className="bg-background py-20 sm:py-28 lg:py-32 overflow-hidden" id="what-we-create">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">What We Create</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              From a single post to a complete rebrand. We've got you covered.
            </h2>
          </div>

          {/* Services List */}
          <div className="mt-12 sm:mt-16 lg:mt-20">
            
            {/* Service 1: Video Production */}
            <Link 
              to="/services/video-production"
              className="group relative grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 py-8 sm:py-10 lg:py-12 border-t border-foreground/10 items-center"
            >
              {/* Animated underline */}
              <div className="absolute bottom-0 left-0 h-px bg-accent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out w-full"></div>
              
              {/* Number + Tag */}
              <div className="lg:col-span-2 flex items-center gap-4 lg:flex-col lg:items-start lg:gap-2">
                <span className="text-sm font-medium text-muted-foreground/60 tabular-nums">01</span>
                <span className="text-xs font-medium px-2 py-1 rounded-full bg-accent/10 text-accent">Popular</span>
              </div>
              
              {/* Title */}
              <div className="lg:col-span-4">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground group-hover:text-accent transition-colors duration-300 flex items-center gap-3">
                  Video Production
                  <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </h3>
              </div>
              
              {/* Description */}
              <div className="lg:col-span-5">
                <p className="text-muted-foreground text-base lg:text-lg leading-relaxed">
                  From music videos to TV commercials. No 6-month wait, just world-class production.
                </p>
              </div>

              {/* Mobile Image */}
              <div className="lg:hidden mt-4 w-full aspect-video rounded-xl overflow-hidden">
                <img 
                  src="/images/hero-grid/video-production.jpg" 
                  alt="Video Production"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Desktop Hover Image */}
              <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-64 xl:w-72 aspect-video opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out pointer-events-none translate-x-8 rotate-2 group-hover:translate-x-0 group-hover:rotate-0 z-10">
                <img 
                  src="/images/hero-grid/video-production.jpg" 
                  alt="Video Production"
                  className="w-full h-full object-cover rounded-lg shadow-2xl ring-1 ring-foreground/5"
                />
              </div>
            </Link>

            {/* Service 2: Branding Services */}
            <Link 
              to="/services/branding-services"
              className="group relative grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 py-8 sm:py-10 lg:py-12 border-t border-foreground/10 items-center"
            >
              {/* Animated underline */}
              <div className="absolute bottom-0 left-0 h-px bg-primary origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out w-full"></div>
              
              {/* Number + Tag */}
              <div className="lg:col-span-2 flex items-center gap-4 lg:flex-col lg:items-start lg:gap-2">
                <span className="text-sm font-medium text-muted-foreground/60 tabular-nums">02</span>
                <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">Premium</span>
              </div>
              
              {/* Title */}
              <div className="lg:col-span-4">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300 flex items-center gap-3">
                  Branding Services
                  <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </h3>
              </div>
              
              {/* Description */}
              <div className="lg:col-span-5">
                <p className="text-muted-foreground text-base lg:text-lg leading-relaxed">
                  Build a brand that commands attention. Logo, voice, and guidelines that scale with you.
                </p>
              </div>

              {/* Mobile Image */}
              <div className="lg:hidden mt-4 w-full aspect-video rounded-xl overflow-hidden">
                <img 
                  src="/images/hero-grid/branding.jpg" 
                  alt="Branding Services"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Desktop Hover Image */}
              <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-64 xl:w-72 aspect-video opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out pointer-events-none translate-x-8 -rotate-2 group-hover:translate-x-0 group-hover:rotate-0 z-10">
                <img 
                  src="/images/hero-grid/branding.jpg" 
                  alt="Branding Services"
                  className="w-full h-full object-cover rounded-lg shadow-2xl ring-1 ring-foreground/5"
                />
              </div>
            </Link>

            {/* Service 3: Social Media Marketing */}
            <Link 
              to="/services/social-media-management"
              className="group relative grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 py-8 sm:py-10 lg:py-12 border-t border-foreground/10 items-center"
            >
              {/* Animated underline */}
              <div className="absolute bottom-0 left-0 h-px bg-accent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out w-full"></div>
              
              {/* Number + Tag */}
              <div className="lg:col-span-2 flex items-center gap-4 lg:flex-col lg:items-start lg:gap-2">
                <span className="text-sm font-medium text-muted-foreground/60 tabular-nums">03</span>
              </div>
              
              {/* Title */}
              <div className="lg:col-span-4">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground group-hover:text-accent transition-colors duration-300 flex items-center gap-3">
                  Social Media
                  <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </h3>
              </div>
              
              {/* Description */}
              <div className="lg:col-span-5">
                <p className="text-muted-foreground text-base lg:text-lg leading-relaxed">
                  Grow your following while you focus on business. We handle strategy, content, and engagement.
                </p>
              </div>

              {/* Mobile Image */}
              <div className="lg:hidden mt-4 w-full aspect-video rounded-xl overflow-hidden">
                <img 
                  src="/images/hero-grid/social-media-marketing.jpg" 
                  alt="Social Media Marketing"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Desktop Hover Image */}
              <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-64 xl:w-72 aspect-video opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out pointer-events-none translate-x-8 rotate-2 group-hover:translate-x-0 group-hover:rotate-0 z-10">
                <img 
                  src="/images/hero-grid/social-media-marketing.jpg" 
                  alt="Social Media Marketing"
                  className="w-full h-full object-cover rounded-lg shadow-2xl ring-1 ring-foreground/5"
                />
              </div>
            </Link>

            {/* Service 4: Graphic Design */}
            <Link 
              to="/services/graphic-design"
              className="group relative grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 py-8 sm:py-10 lg:py-12 border-t border-foreground/10 items-center"
            >
              {/* Animated underline */}
              <div className="absolute bottom-0 left-0 h-px bg-primary origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out w-full"></div>
              
              {/* Number + Tag */}
              <div className="lg:col-span-2 flex items-center gap-4 lg:flex-col lg:items-start lg:gap-2">
                <span className="text-sm font-medium text-muted-foreground/60 tabular-nums">04</span>
              </div>
              
              {/* Title */}
              <div className="lg:col-span-4">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300 flex items-center gap-3">
                  Graphic Design
                  <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </h3>
              </div>
              
              {/* Description */}
              <div className="lg:col-span-5">
                <p className="text-muted-foreground text-base lg:text-lg leading-relaxed">
                  Scroll-stopping graphics for every platform. Logos, posters, and social content. Always on time.
                </p>
              </div>

              {/* Mobile Image */}
              <div className="lg:hidden mt-4 w-full aspect-video rounded-xl overflow-hidden">
                <img 
                  src="/images/hero-grid/graphic-design.jpg" 
                  alt="Graphic Design"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Desktop Hover Image */}
              <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-64 xl:w-72 aspect-video opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out pointer-events-none translate-x-8 -rotate-2 group-hover:translate-x-0 group-hover:rotate-0 z-10">
                <img 
                  src="/images/hero-grid/graphic-design.jpg" 
                  alt="Graphic Design"
                  className="w-full h-full object-cover rounded-lg shadow-2xl ring-1 ring-foreground/5"
                />
              </div>
            </Link>

            {/* Service 5: Website Development */}
            <Link 
              to="/services/website-development"
              className="group relative grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 py-8 sm:py-10 lg:py-12 border-t border-foreground/10 items-center"
            >
              {/* Animated underline */}
              <div className="absolute bottom-0 left-0 h-px bg-accent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out w-full"></div>
              
              {/* Number + Tag */}
              <div className="lg:col-span-2 flex items-center gap-4 lg:flex-col lg:items-start lg:gap-2">
                <span className="text-sm font-medium text-muted-foreground/60 tabular-nums">05</span>
              </div>
              
              {/* Title */}
              <div className="lg:col-span-4">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground group-hover:text-accent transition-colors duration-300 flex items-center gap-3">
                  Web Development
                  <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </h3>
              </div>
              
              {/* Description */}
              <div className="lg:col-span-5">
                <p className="text-muted-foreground text-base lg:text-lg leading-relaxed">
                  Beautiful, blazing-fast sites that turn visitors into customers. SEO-optimized from day one.
                </p>
              </div>

              {/* Mobile Image */}
              <div className="lg:hidden mt-4 w-full aspect-video rounded-xl overflow-hidden">
                <img 
                  src="/images/hero-grid/Website-development.jpg" 
                  alt="Website Development"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Desktop Hover Image */}
              <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-64 xl:w-72 aspect-video opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out pointer-events-none translate-x-8 rotate-2 group-hover:translate-x-0 group-hover:rotate-0 z-10">
                <img 
                  src="/images/hero-grid/Website-development.jpg" 
                  alt="Website Development"
                  className="w-full h-full object-cover rounded-lg shadow-2xl ring-1 ring-foreground/5"
                />
              </div>
            </Link>

            {/* Service 6: Podcast Studio */}
            <Link 
              to="/services/podcast-studio-rental"
              className="group relative grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 py-8 sm:py-10 lg:py-12 border-t border-b border-foreground/10 items-center"
            >
              {/* Animated underline */}
              <div className="absolute bottom-0 left-0 h-px bg-primary origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out w-full"></div>
              
              {/* Number + Tag */}
              <div className="lg:col-span-2 flex items-center gap-4 lg:flex-col lg:items-start lg:gap-2">
                <span className="text-sm font-medium text-muted-foreground/60 tabular-nums">06</span>
                <span className="text-xs font-medium px-2 py-1 rounded-full bg-muted text-muted-foreground">Studio</span>
              </div>
              
              {/* Title */}
              <div className="lg:col-span-4">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300 flex items-center gap-3">
                  Podcast Studio
                  <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </h3>
              </div>
              
              {/* Description */}
              <div className="lg:col-span-5">
                <p className="text-muted-foreground text-base lg:text-lg leading-relaxed">
                  Professional podcast studio in Kampala. Soundproofed, fully equipped, engineer included.
                </p>
              </div>

              {/* Mobile Image */}
              <div className="lg:hidden mt-4 w-full aspect-video rounded-xl overflow-hidden">
                <img 
                  src="/images/hero-grid/podcast-production.jpg" 
                  alt="Podcast Studio"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Desktop Hover Image */}
              <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-64 xl:w-72 aspect-video opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out pointer-events-none translate-x-8 -rotate-2 group-hover:translate-x-0 group-hover:rotate-0 z-10">
                <img 
                  src="/images/hero-grid/podcast-production.jpg" 
                  alt="Podcast Studio"
                  className="w-full h-full object-cover rounded-lg shadow-2xl ring-1 ring-foreground/5"
                />
              </div>
            </Link>

          </div>

          {/* View All CTA */}
          <div className="mt-12 sm:mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Link 
              to="/services" 
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-foreground text-background font-medium rounded-full hover:bg-foreground/90 transition-colors group w-full sm:w-auto"
            >
              View all services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-foreground/20 text-foreground font-medium rounded-full hover:bg-foreground/5 transition-colors w-full sm:w-auto"
            >
              Get a custom quote
            </Link>
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
            subtitle="Don't just take our word for it. Hear from the brands we've helped succeed."
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
