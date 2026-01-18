import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Palette,
  Video,
  Share2,
  Globe,
  Sparkles,
  Mic,
  Image,
  Mail,
  Users,
  PenTool,
  Cpu,
  LineChart,
  Printer,
  ArrowRight,
  Check,
  RefreshCw,
  FileText,
  Blend,
  Target,
  Lightbulb,
  Play,
  Code,
  Megaphone,
  MailOpen,
  Brain,
  MessageSquare,
  Map,
  Zap,
  Layers,
  TrendingUp,
  Award,
  Phone,
  Camera,
} from "lucide-react";

// Service pills for the horizontal scroll
const servicePills = [
  { name: "Graphic Design" },
  { name: "Video Production" },
  { name: "Branding" },
  { name: "Social Media" },
  { name: "Web Development" },
  { name: "Motion Design" },
  { name: "AI Creative" },
  { name: "Podcast Studio" },
  { name: "Email Marketing" },
  { name: "Copywriting" },
  { name: "Digital Strategy" },
  { name: "Photography" },
];

// Creative Services
const creativeServices = [
  {
    icon: Palette,
    title: "Graphic Design Services",
    description: "Logos, posters, social graphics, brochures—if it's visual, we design it. Professional designs delivered fast.",
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
    description: "Complete brand identities from scratch or refreshing what you already have. Logo, colors, typography, voice, guidelines—everything.",
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
    description: "Brochures, flyers, billboards, catalogs—high-impact designs optimized for physical printing at any scale.",
    startingPrice: "800K - 2M UGX per project",
    href: "/services/print-design",
  },
  {
    icon: Play,
    title: "Motion Design Services",
    description: "Animated logos, explainer videos, kinetic typography—motion graphics that bring your brand to life.",
    startingPrice: "1.2M UGX per 30 seconds",
    href: "/services/motion-design",
  },
];

// Digital Marketing Services
const digitalServices = [
  {
    icon: Share2,
    title: "Social Media Management",
    description: "We handle everything—content creation, posting, community management, strategy. Your social presence, managed professionally.",
    startingPrice: "1M UGX/month",
    href: "/services/social-media-marketing",
  },
  {
    icon: Code,
    title: "Website Development",
    description: "Custom websites that look incredible and actually convert. From landing pages to full e-commerce—built on the platform that fits your needs.",
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
    description: "Words that sell without sounding sales-y. Website copy, ad copy, scripts, captions—we write it all.",
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

export default function Services() {
  return (
    <Layout hideFooterCta={true}>
      {/* Hero Section */}
      <section className="relative min-h-[100svh] flex flex-col overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-grid/graphic-design.jpg"
            alt="Creative services collage"
            className="w-full h-full object-cover scale-105"
          />
          {/* Gradient overlay - responsive: full coverage on mobile, split on desktop */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 lg:bg-gradient-to-r lg:from-black/95 lg:via-black/60 lg:via-55% lg:to-black/20" />
        </div>

        {/* Main Content - Flex grow to push cards to bottom */}
        <div className="relative z-10 flex-1 flex items-center">
          <div className="container-custom py-20 sm:py-24 lg:py-28">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Left side - Text content */}
              <div className="flex flex-col justify-center animate-fade-in">
                {/* Eyebrow */}
                <span className="inline-block text-xs sm:text-sm font-semibold tracking-widest uppercase text-accent mb-3 sm:mb-4">
                  Our Services
                </span>

                {/* Headline */}
                <h1 className="text-[1.75rem] sm:text-3xl md:text-4xl lg:text-[2.5rem] xl:text-[2.6rem] font-bold text-white leading-[1.2] mb-4 sm:mb-5 tracking-tight drop-shadow-sm">
                  Every Creative Service Your Brand Needs. <span className="text-accent">One Trusted Partner.</span>
                </h1>

                {/* Description */}
                <p className="text-sm sm:text-base lg:text-lg text-white/80 leading-relaxed mb-6 sm:mb-8 max-w-xl">
                  From a single social media post to a complete brand transformation—we've got the expertise, the tools, and the team to make it happen.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  <Button 
                    asChild
                    size="lg"
                    className="rounded-full bg-accent hover:bg-accent/90 text-white px-6 sm:px-8 h-11 sm:h-12 lg:h-14 text-sm sm:text-base font-semibold shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <Link to="/get-started">
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                  <Button 
                    asChild
                    size="lg"
                    variant="outline"
                    className="rounded-full border-white/30 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 hover:border-white/50 px-6 sm:px-8 h-11 sm:h-12 lg:h-14 text-sm sm:text-base font-semibold transition-all duration-300"
                  >
                    <Link to="/pricing">
                      View Pricing
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Right side - Empty space to show background */}
              <div className="hidden lg:block" aria-hidden="true" />
            </div>
          </div>
        </div>

        {/* Service Pills Carousel - Fixed at bottom */}
        <div className="relative z-20 pb-4 sm:pb-6 lg:pb-8">
          {/* Gradient fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 lg:w-40 bg-gradient-to-r from-black via-black/50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 lg:w-40 bg-gradient-to-l from-black via-black/50 to-transparent z-10 pointer-events-none" />
          
          {/* Infinite scrolling carousel */}
          <div className="overflow-hidden">
            <div 
              className="flex gap-2.5 sm:gap-3 lg:gap-4"
              style={{
                animation: 'smoothMarquee 30s linear infinite',
                willChange: 'transform',
              }}
            >
              {/* Render 4 sets of pills for seamless loop */}
              {[...Array(4)].map((_, setIndex) => (
                servicePills.map((service) => (
                  <div 
                    key={`set-${setIndex}-${service.name}`}
                    className="flex-shrink-0 bg-white rounded-full py-2.5 sm:py-3 lg:py-3.5 px-5 sm:px-6 lg:px-8 flex items-center cursor-pointer hover:bg-gray-100 hover:scale-[1.02] transition-all duration-200 shadow-sm"
                  >
                    <span className="font-medium text-foreground text-xs sm:text-sm lg:text-base whitespace-nowrap">{service.name}</span>
                  </div>
                ))
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator - desktop only */}
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-10 hidden lg:flex flex-col items-center gap-2 opacity-60 animate-bounce">
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
                <h2 className="text-xs sm:text-sm font-semibold text-accent uppercase tracking-widest">Your Complete Creative Department</h2>
                <p className="mt-4 sm:mt-5 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground leading-[1.2]">
                  Stop juggling freelancers. Start getting results.
                </p>
                <p className="mt-4 sm:mt-5 lg:mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
                  Stop juggling five different freelancers. Stop wondering if your designer will actually reply this time. Stop compromising between quality and budget.
                </p>
                <p className="mt-3 sm:mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
                  We're your complete creative department—accessible, affordable, and actually reliable. Whether you need ongoing creative support or a one-time project, we've built our services around one simple goal: making world-class creative easy to access.
                </p>
                <p className="mt-4 sm:mt-6 text-lg sm:text-xl font-semibold text-foreground">
                  Pick your service. Choose how you want to work. Get exceptional results.
                </p>
                <div className="mt-6 sm:mt-8 lg:mt-10">
                  <Button variant="accent" size="lg" className="w-full sm:w-auto" asChild>
                    <Link to="/contact">
                      Schedule Free Consultation
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
                  src="/images/hero-grid/branding.jpg" 
                  alt="9Yards Content House creative work" 
                  className="relative w-full h-auto rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl ring-1 ring-foreground/10 object-cover aspect-[4/3] sm:aspect-[5/4] lg:aspect-[4/5]" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How You Want to Work Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-4xl mx-auto mb-10 sm:mb-12 lg:mb-16 text-center">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-accent mb-3 sm:mb-4">Flexible Engagement</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.1] mb-4 sm:mb-6">
              Subscribe or Book Projects—Your Choice
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              We're flexible because your business is. Choose the model that makes sense for you.
            </p>
          </div>

          {/* Three Option Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {/* Option 1: Monthly Subscriptions */}
            <div className="group bg-card rounded-xl sm:rounded-2xl border border-border p-6 sm:p-8 hover:shadow-xl hover:border-accent/30 transition-all duration-300">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5 sm:mb-6">
                <RefreshCw className="w-6 h-6 sm:w-7 sm:h-7 text-accent" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">Ongoing Creative Support</h3>
              <p className="text-accent font-bold text-base sm:text-lg mb-3 sm:mb-4">Starting at 500K UGX/month</p>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                Need consistent content? Subscribe monthly and get unlimited requests (completed sequentially), fast turnarounds, and a dedicated team that learns your brand inside and out.
              </p>
              <p className="text-sm text-muted-foreground mb-5 sm:mb-6">
                <span className="font-semibold text-foreground">Best for:</span> Businesses that need regular social posts, ads, videos, or design work. Think of it as your creative team on retainer.
              </p>
              <Button variant="accent" className="w-full" asChild>
                <Link to="/pricing">
                  View Subscription Plans
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>

            {/* Option 2: Project-Based */}
            <div className="group bg-card rounded-xl sm:rounded-2xl border border-border p-6 sm:p-8 hover:shadow-xl hover:border-primary/30 transition-all duration-300">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 sm:mb-6">
                <FileText className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">One-Time Projects</h3>
              <p className="text-primary font-bold text-base sm:text-lg mb-3 sm:mb-4">Varies by project</p>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                Got a specific project? Book it. Whether it's a music video, a complete rebrand, or a new website—we take on individual projects with the same obsessive attention to detail.
              </p>
              <p className="text-sm text-muted-foreground mb-5 sm:mb-6">
                <span className="font-semibold text-foreground">Best for:</span> One-time needs like brand launches, music videos, website builds, or major campaigns.
              </p>
              <Button variant="default" className="w-full" asChild>
                <Link to="/contact">
                  Get Project Quote
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>

            {/* Option 3: Hybrid Approach */}
            <div className="group bg-card rounded-xl sm:rounded-2xl border border-border p-6 sm:p-8 hover:shadow-xl hover:border-accent/30 transition-all duration-300">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-accent/10 to-primary/10 flex items-center justify-center mb-5 sm:mb-6">
                <Blend className="w-6 h-6 sm:w-7 sm:h-7 text-accent" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">Mix & Match</h3>
              <p className="text-accent font-bold text-base sm:text-lg mb-3 sm:mb-4">Custom solutions</p>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                Subscribe for ongoing design work, then book video production projects when you need them. Combine services however makes sense for your business.
              </p>
              <p className="text-sm text-muted-foreground mb-5 sm:mb-6">
                <span className="font-semibold text-foreground">Best for:</span> Growing businesses with both regular needs and occasional big projects.
              </p>
              <Button variant="outline" className="w-full" asChild>
                <Link to="/contact">
                  Talk to Us
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* All Services Section - Creative Services */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-4xl mx-auto mb-10 sm:mb-12 lg:mb-16 text-center">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-accent mb-3 sm:mb-4">What We Create</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.1] mb-4 sm:mb-6">
              Browse Our Complete Service Lineup
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Click any service to learn more about what we deliver, how we work, and what it costs.
            </p>
          </div>

          {/* Creative Services Grid */}
          <div className="mb-12 sm:mb-16 lg:mb-20">
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <Palette className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground">Creative Services</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
              {creativeServices.map((service) => (
                <Link 
                  key={service.title}
                  to={service.href}
                  className="group bg-card rounded-xl sm:rounded-2xl border border-border p-5 sm:p-6 hover:shadow-lg hover:border-accent/30 transition-all duration-300"
                >
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors">{service.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">{service.description}</p>
                  <p className="text-xs sm:text-sm text-accent font-semibold mb-3">{service.startingPrice}</p>
                  <span className="inline-flex items-center text-sm font-semibold text-foreground group-hover:text-accent transition-colors">
                    Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Digital Marketing Services Grid */}
          <div className="mb-12 sm:mb-16 lg:mb-20">
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Globe className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground">Digital Marketing Services</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
              {digitalServices.map((service) => (
                <Link 
                  key={service.title}
                  to={service.href}
                  className="group bg-card rounded-xl sm:rounded-2xl border border-border p-5 sm:p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300"
                >
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{service.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">{service.description}</p>
                  <p className="text-xs sm:text-sm text-primary font-semibold mb-3">{service.startingPrice}</p>
                  <span className="inline-flex items-center text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                    Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* AI-Powered Services Grid */}
          <div className="mb-12 sm:mb-16 lg:mb-20">
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <Cpu className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground">AI-Powered Services</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
              {aiServices.map((service) => (
                <Link 
                  key={service.title}
                  to={service.href}
                  className="group bg-card rounded-xl sm:rounded-2xl border border-border p-5 sm:p-6 hover:shadow-lg hover:border-accent/30 transition-all duration-300"
                >
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors">{service.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">{service.description}</p>
                  <p className="text-xs sm:text-sm text-accent font-semibold mb-3">{service.startingPrice}</p>
                  <span className="inline-flex items-center text-sm font-semibold text-foreground group-hover:text-accent transition-colors">
                    Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Studio Services Grid */}
          <div>
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Mic className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground">Studio Services</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
              {studioServices.map((service) => (
                <Link 
                  key={service.title}
                  to={service.href}
                  className="group bg-card rounded-xl sm:rounded-2xl border border-border p-5 sm:p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300"
                >
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{service.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">{service.description}</p>
                  <p className="text-xs sm:text-sm text-primary font-semibold mb-3">{service.startingPrice}</p>
                  <span className="inline-flex items-center text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                    Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Not Sure What You Need Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-[#1c1e70]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-accent mb-3 sm:mb-4">Need Guidance?</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.1] mb-4 sm:mb-6">
              Let's Figure It Out Together
            </h2>
            <p className="text-base sm:text-lg text-white/70 leading-relaxed mb-6 sm:mb-8">
              Looking at 19 services and feeling overwhelmed? That's completely normal.
            </p>
            <p className="text-base sm:text-lg text-white/70 leading-relaxed mb-8 sm:mb-10">
              Most clients don't know exactly what they need when they first reach out—and that's fine. We start every relationship with a free consultation where we dig into your business, your goals, and your challenges. Then we recommend the services that'll actually move the needle.
            </p>
            <p className="text-lg sm:text-xl text-white font-semibold mb-8 sm:mb-10">
              No pressure. No commitment. Just honest advice on what you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button 
                asChild
                size="lg"
                className="rounded-full bg-accent hover:bg-accent/90 text-white px-6 sm:px-8 h-11 sm:h-12 lg:h-14 text-sm sm:text-base font-semibold"
              >
                <Link to="/contact">
                  Schedule a Free Consultation
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 justify-center text-white/60 text-sm sm:text-base">
              <a href="tel:0700488870" className="flex items-center justify-center gap-2 hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
                <span>0700488870</span>
              </a>
              <a href="mailto:info@9yards.co.ug" className="flex items-center justify-center gap-2 hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
                <span>info@9yards.co.ug</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-4xl mx-auto mb-10 sm:mb-12 lg:mb-16 text-center">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-accent mb-3 sm:mb-4">Quick Comparison</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.1] mb-4 sm:mb-6">
              Subscriptions vs. Projects
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Still deciding between ongoing support and project-based work? Here's what you need to know.
            </p>
          </div>

          {/* Desktop Table - Hidden on mobile */}
          <div className="hidden md:block overflow-hidden rounded-2xl border border-border">
            <table className="w-full">
              <thead>
                <tr className="bg-muted/50">
                  <th className="text-left p-4 lg:p-6 font-bold text-foreground border-b border-border">Feature</th>
                  <th className="text-left p-4 lg:p-6 font-bold text-accent border-b border-border">Monthly Subscription</th>
                  <th className="text-left p-4 lg:p-6 font-bold text-primary border-b border-border">Project-Based</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={row.feature} className={index % 2 === 0 ? 'bg-background' : 'bg-muted/30'}>
                    <td className="p-4 lg:p-6 font-semibold text-foreground border-b border-border">{row.feature}</td>
                    <td className="p-4 lg:p-6 text-muted-foreground border-b border-border">{row.subscription}</td>
                    <td className="p-4 lg:p-6 text-muted-foreground border-b border-border">{row.project}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards - Shown on mobile only */}
          <div className="md:hidden space-y-4">
            {comparisonData.map((row) => (
              <div key={row.feature} className="bg-card rounded-xl border border-border p-4">
                <p className="font-bold text-foreground mb-3">{row.feature}</p>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <p className="text-xs font-semibold text-accent mb-1">Subscription</p>
                    <p className="text-muted-foreground">{row.subscription}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-primary mb-1">Project-Based</p>
                    <p className="text-muted-foreground">{row.project}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Below Table */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 sm:mt-12">
            <Button variant="accent" size="lg" asChild>
              <Link to="/pricing">
                View Subscription Plans
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/contact">
                Get a Project Quote
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Clients Choose Us Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-4xl mx-auto mb-10 sm:mb-12 lg:mb-16 text-center">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-accent mb-3 sm:mb-4">More Than Just Services</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.1] mb-4 sm:mb-6">
              Why Clients Choose Us
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              What you're really buying isn't design or video—it's peace of mind.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {whyChooseUs.map((benefit) => (
              <div key={benefit.title} className="bg-card rounded-xl sm:rounded-2xl border border-border p-5 sm:p-6 lg:p-8">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4 sm:mb-5">
                  <benefit.icon className="w-6 h-6 sm:w-7 sm:h-7 text-accent" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">{benefit.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
            {/* Text Content */}
            <div>
              <div className="w-12 h-1 bg-accent rounded-full mb-4"></div>
              <h2 className="text-xs sm:text-sm font-semibold text-accent uppercase tracking-widest">Who We Work With</h2>
              <p className="mt-4 sm:mt-5 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground leading-[1.2]">
                Industries We Serve
              </p>
              <p className="mt-4 sm:mt-5 lg:mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
                Our client list spans entertainment, retail, hospitality, technology, education, and beyond. We've worked with solo entrepreneurs launching their first business and established enterprises managing multi-channel campaigns.
              </p>
              <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
                <span className="font-semibold text-foreground">Some of our clients include:</span>
              </p>
              <ul className="mt-4 space-y-3">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground"><span className="font-semibold text-foreground">Music artists</span> like Spice Diana</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground"><span className="font-semibold text-foreground">Public figures and influencers</span></span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground"><span className="font-semibold text-foreground">Growing SMEs</span> across East Africa</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground"><span className="font-semibold text-foreground">International brands</span> discovering African talent</span>
                </li>
              </ul>
              <p className="mt-6 text-base sm:text-lg font-semibold text-foreground">
                What they all have in common: they demand excellence and we deliver it.
              </p>
            </div>

            {/* Image Collage / Grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="space-y-3 sm:space-y-4">
                <div className="aspect-[4/5] rounded-xl sm:rounded-2xl overflow-hidden">
                  <img src="/images/hero-grid/video-production.jpg" alt="Video production client work" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-square rounded-xl sm:rounded-2xl overflow-hidden">
                  <img src="/images/hero-grid/branding.jpg" alt="Branding client work" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="space-y-3 sm:space-y-4 pt-8">
                <div className="aspect-square rounded-xl sm:rounded-2xl overflow-hidden">
                  <img src="/images/hero-grid/social-media-marketing.jpg" alt="Social media client work" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-[4/5] rounded-xl sm:rounded-2xl overflow-hidden">
                  <img src="/images/hero-grid/graphic-design.jpg" alt="Graphic design client work" className="w-full h-full object-cover" />
                </div>
              </div>
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
                <h2 className="text-[1.5rem] sm:text-[1.75rem] md:text-3xl lg:text-4xl xl:text-[2.75rem] font-bold text-white leading-[1.2] sm:leading-[1.15] mb-3 sm:mb-4 md:mb-5 lg:mb-6">
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
