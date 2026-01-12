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
  Check,
  X,
  Building2,
  Briefcase,
  UserCircle,
  Wrench,
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
            <div className="relative order-last">
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


      {/* Services Overview Section */}
      <section className="bg-[#181818] py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden" id="what-we-create">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-4xl mx-auto mb-10 sm:mb-14 lg:mb-20 text-center lg:text-left">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-accent mb-3 sm:mb-4">What We Create</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
              Everything Your Brand<br className="hidden sm:block" /> Needs to Stand Out
            </h2>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-white/60 max-w-2xl mx-auto lg:mx-0">
              One creative team. Endless possibilities. From first concept to final delivery.
            </p>
          </div>

          {/* Services List - Horizontal Rows */}
          <div className="divide-y divide-white/10 rounded-xl sm:rounded-2xl overflow-hidden bg-[#181818]">
            {[
              {
                number: '01',
                title: 'Videography',
                description: 'From concept to screen. Music videos, commercials, and brand films that captivate audiences.',
                to: '/services/video-production',
              },
              {
                number: '02',
                title: 'Graphic Design',
                description: 'Designs that demand attention. Logos, social content, and visuals that elevate your brand.',
                to: '/services/graphic-design',
              },
              {
                number: '03',
                title: 'Social Media Marketing',
                description: 'Grow your audience while you grow your business. Strategy, content, and engagement handled.',
                to: '/services/social-media-management',
              },
              {
                number: '04',
                title: 'Influencer Marketing',
                description: 'The right voices for your brand. Authentic partnerships that expand your reach.',
                to: '/services/influencer-marketing',
              },
              {
                number: '05',
                title: 'Podcast Production',
                description: 'Your voice, professionally produced. Full-service recording, editing, and distribution.',
                to: '/services/podcast-studio-rental',
              },
              {
                number: '06',
                title: 'Website Development',
                description: 'Fast, beautiful, and built to convert. Websites that work as hard as you do.',
                to: '/services/website-development',
              },
            ].map((service) => (
              <Link
                to={service.to}
                key={service.number}
                className="group flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6 md:px-8 py-6 sm:py-7 md:py-8 bg-transparent hover:bg-white/5 transition-colors duration-300 relative"
              >
                <div className="flex items-start sm:items-center gap-4 sm:gap-6 md:gap-8 w-full sm:w-auto">
                  <span className="text-base sm:text-lg font-semibold text-white/50 min-w-[2rem] sm:min-w-[2.5rem] tabular-nums pt-1 sm:pt-0">{service.number}</span>
                  <div className="flex-1 sm:flex-none">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white group-hover:text-accent transition-colors leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-white/60 text-sm sm:text-base md:text-lg mt-1 sm:mt-1.5 max-w-xl leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
                <div className="flex justify-end items-center w-full sm:w-auto mt-2 sm:mt-0 pl-10 sm:pl-0">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-300 flex-shrink-0">
                    <ArrowRight className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white group-hover:text-white" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* More Services Button */}
          <div className="flex justify-center mt-10 sm:mt-12 md:mt-14 lg:mt-16">
            <Button 
              variant="hero-outline" 
              size="lg" 
              className="border-white/30 hover:border-white"
              asChild
            >
              <Link to="/services">
                Explore All Services
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

        </div>
      </section>

      {/* Comparison Section - 9Yards vs Alternatives */}
      <section className="bg-background py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Section Header - Matching App Style */}
          <div className="max-w-4xl mx-auto mb-12 sm:mb-16 lg:mb-20 text-center lg:text-left">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-accent mb-3 sm:mb-4">
              9Yards Content House vs. Traditional Alternatives
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
              Hiring in-house or juggling<br className="hidden sm:block" /> freelancers? Neither.
            </h2>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              There's a better way to get world-class creative without the hassle.
            </p>
          </div>

          {/* Desktop/Tablet Comparison */}
          <div className="hidden lg:block">
            {/* Floating Column Headers - Larger and more prominent */}
            <div className="grid grid-cols-12 mb-6 lg:mb-8 px-8 lg:px-12">
              <div className="col-span-5"></div>
              <div className="col-span-7 grid grid-cols-5">
                <div className="text-center">
                  <span className="text-base lg:text-lg font-semibold text-foreground">Speed</span>
                </div>
                <div className="text-center">
                  <span className="text-base lg:text-lg font-semibold text-foreground">Quality</span>
                </div>
                <div className="text-center">
                  <span className="text-base lg:text-lg font-semibold text-foreground">Flexibility</span>
                </div>
                <div className="text-center">
                  <span className="text-base lg:text-lg font-semibold text-foreground">Scalability</span>
                </div>
                <div className="text-center">
                  <span className="text-base lg:text-lg font-semibold text-foreground">Cost</span>
                </div>
              </div>
            </div>

            {/* 9Yards Row - Highlighted with rounded pill shape */}
            <div className="bg-accent rounded-[3rem] lg:rounded-[4rem] py-8 lg:py-10 px-8 lg:px-12 mb-8">
              <div className="grid grid-cols-12 items-center">
                <div className="col-span-5 pr-4">
                  <h4 className="font-bold text-white text-xl lg:text-2xl mb-2">9Yards Content House</h4>
                  <p className="text-sm lg:text-base text-white/85 leading-relaxed">
                    Your dedicated creative team with professional equipment, proven talent, and intelligent workflows. Subscribe monthly or book projects.
                  </p>
                </div>
                <div className="col-span-7 grid grid-cols-5">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="flex items-center justify-center">
                      <Check className="w-7 h-7 lg:w-8 lg:h-8 text-white" strokeWidth={2.5} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Other Options - Open layout with dividers */}
            <div className="divide-y divide-border/60">
              {/* In-house team */}
              <div className="py-8 lg:py-10 px-6 lg:px-8 hover:bg-muted/10 transition-colors duration-200">
                <div className="grid grid-cols-12 items-center">
                  <div className="col-span-5 flex items-start gap-4 pr-4">
                    <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-muted flex items-center justify-center flex-shrink-0">
                      <Building2 className="w-7 h-7 lg:w-8 lg:h-8 text-muted-foreground" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-lg lg:text-xl mb-1.5">In-house team</h4>
                      <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                        Building an in-house team means high fixed costs for salaries, equipment, and software without the flexibility to scale up or down as your business needs change.
                      </p>
                    </div>
                  </div>
                  <div className="col-span-7 grid grid-cols-5">
                    <div className="flex items-center justify-center">
                      <X className="w-6 h-6 lg:w-7 lg:h-7 text-red-400" strokeWidth={2.5} />
                    </div>
                    <div className="flex items-center justify-center">
                      <X className="w-6 h-6 lg:w-7 lg:h-7 text-red-400" strokeWidth={2.5} />
                    </div>
                    <div className="flex items-center justify-center">
                      <X className="w-6 h-6 lg:w-7 lg:h-7 text-red-400" strokeWidth={2.5} />
                    </div>
                    <div className="flex items-center justify-center">
                      <Check className="w-6 h-6 lg:w-7 lg:h-7 text-green-500" strokeWidth={2.5} />
                    </div>
                    <div className="flex items-center justify-center">
                      <X className="w-6 h-6 lg:w-7 lg:h-7 text-red-400" strokeWidth={2.5} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Traditional agencies */}
              <div className="py-8 lg:py-10 px-6 lg:px-8 hover:bg-muted/10 transition-colors duration-200">
                <div className="grid grid-cols-12 items-center">
                  <div className="col-span-5 flex items-start gap-4 pr-4">
                    <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-muted flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-7 h-7 lg:w-8 lg:h-8 text-muted-foreground" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-lg lg:text-xl mb-1.5">Traditional agencies</h4>
                      <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                        Traditional agencies deliver quality work but come with enterprise pricing, long turnaround times, and rigid processes that don't adapt to your pace.
                      </p>
                    </div>
                  </div>
                  <div className="col-span-7 grid grid-cols-5">
                    <div className="flex items-center justify-center">
                      <X className="w-6 h-6 lg:w-7 lg:h-7 text-red-400" strokeWidth={2.5} />
                    </div>
                    <div className="flex items-center justify-center">
                      <Check className="w-6 h-6 lg:w-7 lg:h-7 text-green-500" strokeWidth={2.5} />
                    </div>
                    <div className="flex items-center justify-center">
                      <X className="w-6 h-6 lg:w-7 lg:h-7 text-red-400" strokeWidth={2.5} />
                    </div>
                    <div className="flex items-center justify-center">
                      <Check className="w-6 h-6 lg:w-7 lg:h-7 text-green-500" strokeWidth={2.5} />
                    </div>
                    <div className="flex items-center justify-center">
                      <X className="w-6 h-6 lg:w-7 lg:h-7 text-red-400" strokeWidth={2.5} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Freelancers */}
              <div className="py-8 lg:py-10 px-6 lg:px-8 hover:bg-muted/10 transition-colors duration-200">
                <div className="grid grid-cols-12 items-center">
                  <div className="col-span-5 flex items-start gap-4 pr-4">
                    <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-muted flex items-center justify-center flex-shrink-0">
                      <UserCircle className="w-7 h-7 lg:w-8 lg:h-8 text-muted-foreground" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-lg lg:text-xl mb-1.5">Freelancers</h4>
                      <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                        Freelancers offer flexibility but managing multiple individuals, dealing with availability issues, and maintaining consistent quality quickly becomes a challenge.
                      </p>
                    </div>
                  </div>
                  <div className="col-span-7 grid grid-cols-5">
                    <div className="flex items-center justify-center">
                      <X className="w-6 h-6 lg:w-7 lg:h-7 text-red-400" strokeWidth={2.5} />
                    </div>
                    <div className="flex items-center justify-center">
                      <X className="w-6 h-6 lg:w-7 lg:h-7 text-red-400" strokeWidth={2.5} />
                    </div>
                    <div className="flex items-center justify-center">
                      <Check className="w-6 h-6 lg:w-7 lg:h-7 text-green-500" strokeWidth={2.5} />
                    </div>
                    <div className="flex items-center justify-center">
                      <X className="w-6 h-6 lg:w-7 lg:h-7 text-red-400" strokeWidth={2.5} />
                    </div>
                    <div className="flex items-center justify-center">
                      <Check className="w-6 h-6 lg:w-7 lg:h-7 text-green-500" strokeWidth={2.5} />
                    </div>
                  </div>
                </div>
              </div>

              {/* DIY tools & templates */}
              <div className="py-8 lg:py-10 px-6 lg:px-8 hover:bg-muted/10 transition-colors duration-200">
                <div className="grid grid-cols-12 items-center">
                  <div className="col-span-5 flex items-start gap-4 pr-4">
                    <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-muted flex items-center justify-center flex-shrink-0">
                      <Wrench className="w-7 h-7 lg:w-8 lg:h-8 text-muted-foreground" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-lg lg:text-xl mb-1.5">DIY tools & templates</h4>
                      <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                        DIY design tools help with basic tasks but lack the strategic thinking, custom execution, and professional polish that truly drives business results.
                      </p>
                    </div>
                  </div>
                  <div className="col-span-7 grid grid-cols-5">
                    <div className="flex items-center justify-center">
                      <Check className="w-6 h-6 lg:w-7 lg:h-7 text-green-500" strokeWidth={2.5} />
                    </div>
                    <div className="flex items-center justify-center">
                      <X className="w-6 h-6 lg:w-7 lg:h-7 text-red-400" strokeWidth={2.5} />
                    </div>
                    <div className="flex items-center justify-center">
                      <X className="w-6 h-6 lg:w-7 lg:h-7 text-red-400" strokeWidth={2.5} />
                    </div>
                    <div className="flex items-center justify-center">
                      <X className="w-6 h-6 lg:w-7 lg:h-7 text-red-400" strokeWidth={2.5} />
                    </div>
                    <div className="flex items-center justify-center">
                      <Check className="w-6 h-6 lg:w-7 lg:h-7 text-green-500" strokeWidth={2.5} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tablet View (md breakpoint) */}
          <div className="hidden md:block lg:hidden">
            {/* Column Headers for Tablet */}
            <div className="flex justify-end mb-6 pr-4">
              <div className="grid grid-cols-5 gap-4 w-[280px]">
                {['Speed', 'Quality', 'Flexibility', 'Scalability', 'Cost'].map((label) => (
                  <div key={label} className="text-center">
                    <span className="text-sm font-semibold text-foreground">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 9Yards Row - Tablet */}
            <div className="bg-accent rounded-[2.5rem] py-6 px-6 mb-6">
              <div className="flex items-center justify-between gap-4">
                <div className="flex-1 max-w-sm">
                  <h4 className="font-bold text-white text-lg mb-1.5">9Yards Content House</h4>
                  <p className="text-sm text-white/85 leading-relaxed">
                    Your dedicated creative team with professional equipment, proven talent, and intelligent workflows.
                  </p>
                </div>
                <div className="grid grid-cols-5 gap-4 w-[280px] flex-shrink-0">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="flex items-center justify-center">
                      <Check className="w-6 h-6 text-white" strokeWidth={2.5} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Other Options - Tablet */}
            <div className="divide-y divide-border/60">
              {[
                { 
                  icon: Building2, 
                  title: 'In-house team', 
                  desc: "Building an in-house team means high fixed costs for salaries, equipment, and software without the flexibility to scale.", 
                  checks: [false, false, false, true, false] 
                },
                { 
                  icon: Briefcase, 
                  title: 'Traditional agencies', 
                  desc: "Traditional agencies deliver quality work but come with enterprise pricing, long turnaround times, and rigid processes.", 
                  checks: [false, true, false, true, false] 
                },
                { 
                  icon: UserCircle, 
                  title: 'Freelancers', 
                  desc: "Freelancers offer flexibility but managing multiple individuals and maintaining consistent quality becomes a challenge.", 
                  checks: [false, false, true, false, true] 
                },
                { 
                  icon: Wrench, 
                  title: 'DIY tools & templates', 
                  desc: "DIY design tools help with basic tasks but lack the strategic thinking and professional polish.", 
                  checks: [true, false, false, false, true] 
                },
              ].map((option) => (
                <div key={option.title} className="py-6 px-4 hover:bg-muted/10 transition-colors duration-200">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-start gap-3 flex-1 max-w-sm">
                      <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center flex-shrink-0">
                        <option.icon className="w-6 h-6 text-muted-foreground" />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground text-base mb-1">{option.title}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{option.desc}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-5 gap-4 w-[280px] flex-shrink-0">
                      {option.checks.map((checked, i) => (
                        <div key={i} className="flex items-center justify-center">
                          {checked ? (
                            <Check className="w-5 h-5 text-green-500" strokeWidth={2.5} />
                          ) : (
                            <X className="w-5 h-5 text-red-400" strokeWidth={2.5} />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Cards View */}
          <div className="md:hidden space-y-4">
            {/* 9Yards Card - Highlighted with rounded pill shape */}
            <div className="rounded-[1.75rem] sm:rounded-[2rem] bg-accent p-5 sm:p-6">
              <h4 className="font-bold text-white text-lg sm:text-xl mb-2">9Yards Content House</h4>
              <p className="text-sm text-white/85 leading-relaxed mb-5">
                Your dedicated creative team with professional equipment, proven talent, and intelligent workflows. Subscribe monthly or book projects.
              </p>
              <div className="grid grid-cols-5 gap-2">
                {['Speed', 'Quality', 'Flexibility', 'Scalability', 'Cost'].map((label) => (
                  <div key={label} className="text-center">
                    <div className="flex items-center justify-center mb-1.5">
                      <Check className="w-5 h-5 sm:w-6 sm:h-6 text-white" strokeWidth={2.5} />
                    </div>
                    <span className="text-[9px] sm:text-[10px] text-white/75 font-medium leading-tight block">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Other options */}
            {[
              { 
                icon: Building2, 
                title: 'In-house team', 
                desc: "Building an in-house team means high fixed costs for salaries, equipment, and software without the flexibility to scale up or down as your business needs change.", 
                checks: [false, false, false, true, false] 
              },
              { 
                icon: Briefcase, 
                title: 'Traditional agencies', 
                desc: "Traditional agencies deliver quality work but come with enterprise pricing, long turnaround times, and rigid processes that don't adapt to your pace.", 
                checks: [false, true, false, true, false] 
              },
              { 
                icon: UserCircle, 
                title: 'Freelancers', 
                desc: "Freelancers offer flexibility but managing multiple individuals, dealing with availability issues, and maintaining consistent quality quickly becomes a challenge.", 
                checks: [false, false, true, false, true] 
              },
              { 
                icon: Wrench, 
                title: 'DIY tools & templates', 
                desc: "DIY design tools help with basic tasks but lack the strategic thinking, custom execution, and professional polish that truly drives business results.", 
                checks: [true, false, false, false, true] 
              },
            ].map((option, index) => (
              <div key={option.title} className={cn(
                "rounded-2xl p-5 sm:p-6",
                index === 0 ? "border-t border-border/60" : "border-t border-border/40"
              )}>
                <div className="flex items-start gap-3 mb-5">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-muted flex items-center justify-center flex-shrink-0">
                    <option.icon className="w-5 h-5 sm:w-6 sm:h-6 text-muted-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-foreground text-base sm:text-lg mb-1">{option.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{option.desc}</p>
                  </div>
                </div>
                <div className="grid grid-cols-5 gap-2">
                  {['Speed', 'Quality', 'Flexibility', 'Scalability', 'Cost'].map((label, i) => (
                    <div key={label} className="text-center">
                      <div className="flex items-center justify-center mb-1.5">
                        {option.checks[i] ? (
                          <Check className="w-5 h-5 sm:w-6 sm:h-6 text-green-500" strokeWidth={2.5} />
                        ) : (
                          <X className="w-5 h-5 sm:w-6 sm:h-6 text-red-400" strokeWidth={2} />
                        )}
                      </div>
                      <span className="text-[9px] sm:text-[10px] text-muted-foreground font-medium leading-tight block">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
