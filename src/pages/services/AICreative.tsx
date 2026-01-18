import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { ArrowRight, Sparkles, Zap, Brain, Palette, Wand2, Clock, Image, Video, PenTool } from "lucide-react";
import { useRef, useState, useEffect } from "react";

// AI Creative service categories for the horizontal scroll
const aiCreativeServices = [
  { name: "AI Image Generation" },
  { name: "AI Video Creation" },
  { name: "AI Copywriting" },
  { name: "AI Photo Editing" },
  { name: "AI Voiceovers" },
  { name: "AI Motion Graphics" },
  { name: "AI Brand Assets" },
  { name: "AI Social Content" },
  { name: "AI Ad Creatives" },
  { name: "AI Avatars" },
  { name: "AI Product Shots" },
];

export default function AICreative() {
  // Timeline scroll animation state
  const timelineSectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [lineProgress, setLineProgress] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Process steps data
  const processSteps = [
    {
      number: 1,
      title: "Brief & Vision",
      description: "Share your creative vision, brand guidelines, and project goals. We analyze your needs and recommend the best AI-powered approach for your project."
    },
    {
      number: 2,
      title: "AI Generation",
      description: "Using cutting-edge AI tools like Midjourney, DALL-E, Runway, and custom models, we generate multiple concepts and creative variations."
    },
    {
      number: 3,
      title: "Curation & Selection",
      description: "Our creative team reviews AI outputs, selecting the strongest concepts that align with your brand and objectives."
    },
    {
      number: 4,
      title: "Human Polish",
      description: "Expert designers refine and perfect every detail—color correction, composition, typography, and final touches that AI can't replicate."
    },
    {
      number: 5,
      title: "Delivery & Optimization",
      description: "Final assets delivered in all formats you need—web, print, social, video. Unlimited revisions until you're completely satisfied."
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      const viewportCenter = viewportHeight * 0.5;
      
      // Track which step is currently in view
      let currentStep = 0;
      
      stepRefs.current.forEach((stepRef, index) => {
        if (stepRef) {
          const rect = stepRef.getBoundingClientRect();
          const stepTop = rect.top;
          
          // Step becomes active when its top crosses the viewport center
          if (stepTop <= viewportCenter) {
            currentStep = index + 1;
          }
        }
      });
      
      setActiveStep(currentStep);

      // Calculate line progress based on timeline container
      if (timelineRef.current && stepRefs.current[0] && stepRefs.current[stepRefs.current.length - 1]) {
        const firstStep = stepRefs.current[0];
        const lastStep = stepRefs.current[stepRefs.current.length - 1];
        
        if (firstStep && lastStep) {
          const firstRect = firstStep.getBoundingClientRect();
          const lastRect = lastStep.getBoundingClientRect();
          
          // Line starts at first circle center, ends at last circle center
          const lineStart = firstRect.top + 25; // center of first circle
          const lineEnd = lastRect.top + 25; // center of last circle
          const totalDistance = lineEnd - lineStart;
          
          // Progress based on how far the viewport center has traveled
          const progress = (viewportCenter - lineStart) / totalDistance;
          setLineProgress(Math.max(0, Math.min(1, progress)));
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Layout
      hideFooterCta={true}
    >
      {/* Hero Section */}
      <section className="relative min-h-[100svh] flex flex-col overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-grid/graphic-design.jpg"
            alt="AI-Powered Creative"
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
                  AI-Powered Creative Services
                </span>

                {/* Headline */}
                <h1 className="text-[1.75rem] sm:text-3xl md:text-4xl lg:text-[2.5rem] xl:text-[2.6rem] font-bold text-white leading-[1.2] mb-4 sm:mb-5 tracking-tight drop-shadow-sm">
                  Human creativity meets AI speed. <span className="text-accent">10x faster</span> creative production.
                </h1>

                {/* Description */}
                <p className="text-sm sm:text-base lg:text-lg text-white/80 leading-relaxed mb-6 sm:mb-8 max-w-xl">
                  Leverage the power of AI to produce stunning visuals, videos, and copy at unprecedented speed. Our team combines cutting-edge AI tools with human creativity for results that wow.
                </p>

                {/* CTA Button */}
                <div className="flex">
                  <Button 
                    asChild
                    size="lg"
                    className="rounded-full bg-accent hover:bg-accent/90 text-white px-6 sm:px-8 h-11 sm:h-12 lg:h-14 text-sm sm:text-base font-semibold shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <Link to="/get-started?service=ai-creative">
                      Start Creating
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Right side - Empty space to show background */}
              <div className="hidden lg:block" aria-hidden="true" />
            </div>
          </div>
        </div>

        {/* Service Cards Carousel - Fixed at bottom */}
        <div className="relative z-20 pb-4 sm:pb-6 lg:pb-8">
          {/* Gradient fade edges - stronger for better blend */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 lg:w-40 bg-gradient-to-r from-black via-black/50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 lg:w-40 bg-gradient-to-l from-black via-black/50 to-transparent z-10 pointer-events-none" />
          
          {/* Infinite scrolling carousel - smooth GPU-accelerated animation */}
          <div className="overflow-hidden">
            <div 
              className="flex gap-2.5 sm:gap-3 lg:gap-4"
              style={{
                animation: 'smoothMarquee 30s linear infinite',
                willChange: 'transform',
              }}
            >
              {/* Render 4 sets of cards for ultra-smooth seamless loop */}
              {[...Array(4)].map((_, setIndex) => (
                aiCreativeServices.map((service) => (
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

      {/* AI Creative That Works For You Section */}
      <section className="overflow-hidden bg-background py-12 sm:py-16 md:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 items-center">
            {/* Text Content */}
            <div className="order-2 lg:order-1">
              <div className="max-w-xl lg:max-w-lg">
                {/* Accent bar */}
                <div className="w-12 h-1 bg-accent rounded-full mb-4"></div>
                <h2 className="text-xs sm:text-sm font-semibold text-accent uppercase tracking-widest">AI-Powered Creative That Works For You</h2>
                <p className="mt-4 sm:mt-5 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground leading-[1.2]">
                  The future of creative production is here—and it's faster than ever
                </p>
                <p className="mt-4 sm:mt-5 lg:mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
                  AI has revolutionized creative production. 9Yards Content House combines cutting-edge AI tools with human expertise to deliver stunning visuals, videos, and copy at unprecedented speed and scale.
                </p>
                <p className="mt-3 sm:mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
                  From concept to delivery, we handle everything—AI generation, curation, and that essential human polish that makes creative truly shine.
                </p>
                <div className="mt-6 sm:mt-8 lg:mt-10">
                  <Button variant="accent" size="lg" className="w-full sm:w-auto" asChild>
                    <Link to="/get-started?service=ai-creative">
                      Start Creating
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Image */}
            <div className="relative order-1 lg:order-2">
              {/* Decorative accent elements - visible on tablet and desktop */}
              <div className="absolute -top-3 -right-3 md:-top-4 md:-right-4 w-20 h-20 md:w-24 md:h-24 bg-accent/10 rounded-2xl -z-10 hidden sm:block"></div>
              <div className="absolute -bottom-3 -left-3 md:-bottom-4 md:-left-4 w-24 h-24 md:w-32 md:h-32 bg-primary/10 rounded-2xl -z-10 hidden sm:block"></div>
              
              {/* Image with brand accent border */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl sm:rounded-2xl transform rotate-1 sm:rotate-2 scale-[1.02]"></div>
                <img 
                  src="/images/hero-grid/graphic-design.jpg" 
                  alt="9Yards Content House AI-powered creative production" 
                  className="relative w-full h-auto rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl ring-1 ring-foreground/10 object-cover aspect-[4/3] sm:aspect-[5/4] lg:aspect-[4/5]" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flexible AI Creative Options - Bento Grid Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-4xl mx-auto mb-10 sm:mb-12 lg:mb-16 text-center lg:text-left">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-accent mb-3 sm:mb-4">Full-Service AI Creative Production</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.1] mb-4 sm:mb-6">
              Complete AI-powered services for<br className="hidden sm:block" />
              every creative need
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              From images to videos, copy to motion graphics—AI-accelerated production that doesn't compromise on quality.
            </p>
          </div>

          {/* Bento Grid - Responsive layout matching Photography */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 sm:gap-4 lg:gap-5">
            
            {/* Row 1 */}
            {/* Card 1: AI Image Generation - Large card (5 cols) */}
            <div className="sm:col-span-2 lg:col-span-5 group relative rounded-xl sm:rounded-2xl overflow-hidden h-[300px] sm:h-[340px] lg:h-[400px]">
              <img 
                src="/images/hero-grid/graphic-design.jpg" 
                alt="AI image generation"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Soft localized gradient behind text */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/85 via-black/55 to-transparent" />
              {/* Content */}
              <div className="absolute inset-0 p-5 sm:p-6 lg:p-8 flex flex-col justify-between">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white drop-shadow-lg">AI Image Generation</h3>
                <p className="text-sm sm:text-base text-white/90 max-w-md leading-relaxed drop-shadow-md">
                  Stunning visuals created with Midjourney, DALL-E, and Stable Diffusion. Product shots, lifestyle imagery, concept art, and more—generated in minutes, polished by humans.
                </p>
              </div>
            </div>

            {/* Card 2: AI Video Creation - Medium card (4 cols) */}
            <div className="lg:col-span-4 group relative rounded-xl sm:rounded-2xl overflow-hidden h-[300px] sm:h-[340px] lg:h-[400px]">
              <img 
                src="/images/hero-grid/video-production.jpg" 
                alt="AI video creation"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Soft localized gradient behind text */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-transparent" />
              {/* Content */}
              <div className="absolute inset-0 p-5 sm:p-6 lg:p-8 flex flex-col">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3 drop-shadow-lg">AI Video Creation</h3>
                <p className="text-sm sm:text-base text-white/90 max-w-xs leading-relaxed drop-shadow-md">
                  Text-to-video, AI avatars, and automated editing. Create video content at scale with Runway, Synthesia, and custom workflows.
                </p>
              </div>
            </div>

            {/* Card 3: AI Copywriting - Small card (3 cols) */}
            <div className="lg:col-span-3 group relative rounded-xl sm:rounded-2xl overflow-hidden h-[300px] sm:h-[340px] lg:h-[400px]">
              <img 
                src="/images/hero-grid/branding.jpg" 
                alt="AI copywriting"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Soft localized gradient behind text */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/45 to-transparent" />
              {/* Content */}
              <div className="absolute inset-0 p-5 sm:p-6 lg:p-8 flex flex-col">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3 drop-shadow-lg">AI Copywriting</h3>
                <p className="text-sm text-white/90 leading-relaxed drop-shadow-md">
                  Headlines, ad copy, product descriptions, and long-form content—AI-assisted writing refined by human editors.
                </p>
              </div>
            </div>

            {/* Row 2 */}
            {/* Card 4: AI Photo Editing - Small card (3 cols) */}
            <div className="lg:col-span-3 group relative rounded-xl sm:rounded-2xl overflow-hidden h-[300px] sm:h-[340px] lg:h-[400px]">
              <img 
                src="/images/hero-grid/photography.jpg" 
                alt="AI photo editing"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Soft localized gradient behind text */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/45 to-transparent" />
              {/* Content */}
              <div className="absolute inset-0 p-5 sm:p-6 lg:p-8 flex flex-col">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3 drop-shadow-lg">AI Photo Editing</h3>
                <p className="text-sm text-white/90 leading-relaxed drop-shadow-md">
                  Background removal, retouching, upscaling, and style transfer at scale. Batch processing for thousands of images.
                </p>
              </div>
            </div>

            {/* Card 5: AI Motion Graphics - Small card (3 cols) */}
            <div className="lg:col-span-3 group relative rounded-xl sm:rounded-2xl overflow-hidden h-[300px] sm:h-[340px] lg:h-[400px]">
              <img 
                src="/images/hero-grid/tv-and-radio-production.jpg" 
                alt="AI motion graphics"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Soft localized gradient behind text */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/45 to-transparent" />
              {/* Content */}
              <div className="absolute inset-0 p-5 sm:p-6 lg:p-8 flex flex-col">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3 drop-shadow-lg">AI Motion Graphics</h3>
                <p className="text-sm text-white/90 leading-relaxed drop-shadow-md">
                  Animated logos, social media clips, and dynamic graphics generated and customized with AI assistance.
                </p>
              </div>
            </div>

            {/* Card 6: AI Social Content - Large card (6 cols) */}
            <div className="sm:col-span-2 lg:col-span-6 group relative rounded-xl sm:rounded-2xl overflow-hidden h-[300px] sm:h-[340px] lg:h-[400px]">
              <img 
                src="/images/team/team.jpg" 
                alt="AI social content creation"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Soft localized gradient behind text */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-transparent" />
              {/* Content */}
              <div className="absolute inset-0 p-5 sm:p-6 lg:p-8 flex flex-col">
                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3 drop-shadow-lg">AI Social Content at Scale</h3>
                  <p className="text-sm sm:text-base text-white/90 max-w-lg leading-relaxed drop-shadow-md">
                    Generate months of social media content in days. AI-powered templates, automated resizing, and platform-specific optimization. Perfect for brands that need consistent, high-volume content production.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* AI Creative Expertise Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-[#1c1e70]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-accent mb-3 sm:mb-4">AI Creative Expertise</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15]">
              The best of both worlds:<br className="hidden sm:block" />
              AI speed + human quality
            </h2>
          </div>

          {/* AI Creative Expertise Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
            {/* 10x Faster Card */}
            <div className="group p-5 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300">
              <div className="w-11 h-11 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-lg sm:rounded-xl bg-accent/10 flex items-center justify-center mb-4 sm:mb-5 lg:mb-6">
                <Zap className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-accent" />
              </div>
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-2 sm:mb-3">
                10x Faster Production
              </h3>
              <p className="text-sm sm:text-[15px] lg:text-base text-white/60 leading-relaxed">
                AI-powered workflows deliver polished creative assets in hours, not days or weeks. Meet tight deadlines without sacrificing quality.
              </p>
            </div>

            {/* Human + AI Card */}
            <div className="group p-5 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300">
              <div className="w-11 h-11 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-lg sm:rounded-xl bg-accent/10 flex items-center justify-center mb-4 sm:mb-5 lg:mb-6">
                <Palette className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-accent" />
              </div>
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-2 sm:mb-3">
                Human + AI Creativity
              </h3>
              <p className="text-sm sm:text-[15px] lg:text-base text-white/60 leading-relaxed">
                Our designers guide AI tools to ensure on-brand, high-quality results. The perfect blend of machine efficiency and human intuition.
              </p>
            </div>

            {/* Cutting-Edge Tools Card */}
            <div className="group p-5 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300 sm:col-span-2 lg:col-span-1">
              <div className="w-11 h-11 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-lg sm:rounded-xl bg-accent/10 flex items-center justify-center mb-4 sm:mb-5 lg:mb-6">
                <Brain className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-accent" />
              </div>
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-2 sm:mb-3">
                Cutting-Edge AI Tools
              </h3>
              <p className="text-sm sm:text-[15px] lg:text-base text-white/60 leading-relaxed sm:max-w-md lg:max-w-none">
                We use the latest AI models including Midjourney, DALL-E, Runway, Synthesia, and custom fine-tuned solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative overflow-hidden bg-[#1c1e70] py-3 sm:py-4 md:py-6 lg:py-8">
        {/* Full-width container with rounded corners */}
        <div className="mx-3 sm:mx-4 md:mx-6 lg:mx-8 rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden relative min-h-[700px] sm:min-h-[720px] md:min-h-[760px] lg:min-h-[780px]">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src="/images/hero-grid/graphic-design.jpg" 
              alt="9Yards AI-powered creative team"
              className="w-full h-full object-cover object-[65%_center] sm:object-[60%_center] md:object-center"
            />
            {/* Gradient overlay - responsive for different screens */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/70 to-black/50 sm:bg-gradient-to-r sm:from-black/90 sm:via-black/60 sm:to-black/30 lg:from-black/85 lg:via-black/40 lg:to-transparent" />
          </div>

          {/* Content */}
          <div className="relative z-10 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 py-10 sm:py-14 md:py-16 lg:py-20 xl:py-24">
            <div className="max-w-lg sm:max-w-xl md:max-w-lg lg:max-w-xl">
              {/* Eyebrow */}
              <p className="text-[10px] sm:text-xs md:text-sm font-semibold uppercase tracking-widest text-white/60 mb-2 sm:mb-3 md:mb-4">
                AI Creative Done Right
              </p>
              
              {/* Headline */}
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[2.75rem] font-bold text-white leading-[1.2] sm:leading-[1.15] mb-3 sm:mb-4">
                Why Choose 9Yards for <span className="text-accent">AI Creative</span>
              </h2>
              
              {/* Description */}
              <p className="text-sm sm:text-base md:text-lg text-white/70 leading-relaxed mb-5 sm:mb-6 md:mb-8 lg:mb-10">
                We don't just generate—we curate, refine, and deliver AI-powered creative that's indistinguishable from traditional production.
              </p>

              {/* Reason Cards */}
              <div className="space-y-2 sm:space-y-3 md:space-y-4 mb-5 sm:mb-6 md:mb-8 lg:mb-10">
                {/* Reason 1: Speed Without Compromise */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-5 border border-white/10">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg sm:rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                      <Zap className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white/80" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-white/50 mb-0.5 sm:mb-1">Speed Without Compromise</p>
                      <p className="text-xs sm:text-sm md:text-base text-white font-medium leading-relaxed">
                        Get polished creative assets in hours instead of days. Rush projects are no longer a problem.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Reason 2: Cost-Effective Scaling */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-5 border border-white/10">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg sm:rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white/80" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-white/50 mb-0.5 sm:mb-1">Cost-Effective Scaling</p>
                      <p className="text-xs sm:text-sm md:text-base text-white font-medium leading-relaxed">
                        Produce more content at lower cost. AI automation reduces production expenses by up to 70%.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Reason 3: Human Quality Control */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-5 border border-white/10">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg sm:rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                      <Palette className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white/80" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-white/50 mb-0.5 sm:mb-1">Human Quality Control</p>
                      <p className="text-xs sm:text-sm md:text-base text-white font-medium leading-relaxed">
                        Every AI output is reviewed, refined, and polished by experienced designers and editors.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Reason 4: Unlimited Iterations */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-5 border border-white/10">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg sm:rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white/80" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-white/50 mb-0.5 sm:mb-1">Unlimited Iterations</p>
                      <p className="text-xs sm:text-sm md:text-base text-white font-medium leading-relaxed">
                        AI makes revisions fast and affordable. Keep iterating until you get exactly what you envision.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <Button 
                asChild
                size="lg"
                className="rounded-full bg-accent hover:bg-accent/90 text-white px-5 sm:px-6 md:px-8 h-10 sm:h-11 md:h-12 text-sm sm:text-base"
              >
                <Link to="/get-started?service=ai-creative">
                  Get started
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section - Timeline Design */}
      <section className="bg-[#1c1e70] py-14 sm:py-16 md:py-20 lg:py-28 overflow-clip" ref={timelineSectionRef}>
        <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-10 lg:px-10">
          <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 md:gap-14 lg:gap-20 xl:gap-28">
            
            {/* Left Side - Sticky Sidebar */}
            <div className="lg:flex-1 lg:sticky lg:top-24 lg:h-fit text-center lg:text-left">
              <h2 className="text-[1.625rem] sm:text-3xl md:text-4xl lg:text-[2.6rem] xl:text-[2.6rem] font-bold text-white leading-[1.15] sm:leading-[1.1] mb-4 sm:mb-5 md:mb-6">
                <span className="lg:whitespace-nowrap">Our process makes it easier to</span>{' '}
                <span className="text-accent">create at scale.</span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-white/70 leading-relaxed max-w-xs sm:max-w-sm md:max-w-md mx-auto lg:mx-0 mb-6 sm:mb-8 md:mb-10 lg:mb-14">
                Our AI-powered creative team is built for speed, quality, and seamless delivery from concept to final assets.
              </p>
              
              {/* Stats Grid */}
              <div className="flex flex-row justify-center lg:justify-start gap-4 sm:gap-6 md:gap-8 lg:gap-10">
                <div className="text-center lg:text-left flex-1 max-w-[150px] sm:max-w-[180px] md:max-w-[200px] lg:max-w-none">
                  <p className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-bold text-accent mb-1 sm:mb-2">
                    10x
                  </p>
                  <p className="text-[11px] sm:text-xs md:text-sm text-white/60 mb-2 sm:mb-3 leading-relaxed">
                    faster production than traditional methods
                  </p>
                  <Link to="/portfolio" className="text-[11px] sm:text-xs md:text-sm text-white font-semibold border-b border-accent pb-0.5 hover:opacity-70 transition-opacity duration-300 inline-flex items-center gap-1">
                    View our work <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
                <div className="text-center lg:text-left flex-1 max-w-[150px] sm:max-w-[180px] md:max-w-[200px] lg:max-w-none">
                  <p className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-bold text-accent mb-1 sm:mb-2 whitespace-nowrap">
                    70%
                  </p>
                  <p className="text-[11px] sm:text-xs md:text-sm text-white/60 mb-2 sm:mb-3 leading-relaxed">
                    cost reduction vs. traditional production
                  </p>
                  <Link to="/get-started?service=ai-creative" className="text-[11px] sm:text-xs md:text-sm text-white font-semibold border-b border-accent pb-0.5 hover:opacity-70 transition-opacity duration-300 inline-flex items-center gap-1">
                    Start creating <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Side - Timeline */}
            <div className="lg:flex-[1.2] relative mt-4 sm:mt-6 lg:mt-0" ref={timelineRef}>
              {processSteps.map((step, index) => (
                <div
                  key={step.number}
                  ref={(el) => { stepRefs.current[index] = el; }}
                  className="flex gap-3 sm:gap-5 md:gap-6 lg:gap-8 pb-8 sm:pb-12 md:pb-16 lg:pb-20 relative"
                >
                  {/* Connector Line between circles - only show if not last item */}
                  {index < processSteps.length - 1 && (
                    <>
                      {/* Background line segment */}
                      <div 
                        className="absolute left-[17px] sm:left-[19px] md:left-[21px] lg:left-[23px] top-[38px] sm:top-[42px] md:top-[46px] lg:top-[50px] w-[3px] sm:w-1 bg-white/20 rounded-full"
                        style={{ height: 'calc(100% - 38px)' }}
                      />
                      {/* Animated progress line segment */}
                      <div 
                        className={`absolute left-[17px] sm:left-[19px] md:left-[21px] lg:left-[23px] top-[38px] sm:top-[42px] md:top-[46px] lg:top-[50px] w-[3px] sm:w-1 bg-accent rounded-full transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                          activeStep > step.number ? 'opacity-100' : 'opacity-0'
                        }`}
                        style={{ 
                          height: activeStep > step.number ? 'calc(100% - 38px)' : '0px',
                          transitionProperty: 'height, opacity'
                        }}
                      />
                    </>
                  )}
                  
                  {/* Number Circle */}
                  <div className="flex-shrink-0 relative z-10">
                    <div 
                      className={`w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 rounded-full border-[2.5px] sm:border-[3px] md:border-4 flex items-center justify-center text-sm sm:text-base md:text-lg font-medium bg-[#1c1e70] transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                        activeStep >= step.number
                          ? 'border-accent text-white'
                          : 'border-white/25 text-white/40'
                      }`}
                    >
                      {step.number}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="pt-0.5 sm:pt-1 flex-1 min-w-0">
                    <h3 className={`text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-1.5 sm:mb-2 md:mb-3 lg:mb-4 transition-colors duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                      activeStep >= step.number ? 'text-white' : 'text-white/60'
                    }`}>
                      {step.title}
                    </h3>
                    <p className={`text-[13px] sm:text-sm md:text-base lg:text-lg leading-relaxed max-w-lg transition-colors duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                      activeStep >= step.number ? 'text-white/70' : 'text-white/40'
                    }`}>
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Custom CTA Section - Image Card Style */}
      <section className="bg-[#f5f5f0] py-8 sm:py-10 md:py-14 lg:py-20 xl:py-24">
        <div className="mx-auto max-w-7xl px-3 sm:px-5 md:px-6 lg:px-8 xl:px-10">
          {/* Card Container */}
          <div className="relative rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden min-h-[380px] sm:min-h-[420px] md:min-h-[460px] lg:min-h-[500px] xl:min-h-[540px]">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img 
                src="/images/hero-grid/graphic-design.jpg" 
                alt="AI-powered creative production"
                className="w-full h-full object-cover object-[70%_center] sm:object-center"
              />
              {/* Gradient overlay for text readability - stronger on mobile */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/20 sm:from-black/80 sm:via-black/45 sm:to-transparent md:from-black/75 md:via-black/35 lg:from-black/70 lg:via-black/25 lg:to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex items-center px-5 sm:px-7 md:px-10 lg:px-12 xl:px-16 py-8 sm:py-10 md:py-12 lg:py-14 xl:py-16">
              <div className="max-w-[280px] sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
                {/* Headline */}
                <h2 className="text-[1.5rem] sm:text-[1.75rem] md:text-3xl lg:text-4xl xl:text-[2.75rem] font-bold text-white leading-[1.2] sm:leading-[1.15] mb-3 sm:mb-4 md:mb-5 lg:mb-6">
                  Ready to{' '}
                  <span className="text-accent">supercharge your creative?</span>
                </h2>

                {/* Description */}
                <p className="text-[13px] sm:text-sm md:text-base lg:text-lg xl:text-xl text-white/75 leading-relaxed mb-5 sm:mb-6 md:mb-7 lg:mb-8">
                  Experience the future of creative production. Faster, more affordable, endlessly scalable—with human quality guaranteed.
                </p>

                {/* CTA Button */}
                <Button 
                  asChild
                  size="lg"
                  className="rounded-full bg-accent hover:bg-accent/90 text-white px-5 sm:px-7 md:px-8 lg:px-10 h-10 sm:h-11 md:h-12 lg:h-14 text-[13px] sm:text-sm md:text-base lg:text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  <Link to="/get-started?service=ai-creative">
                    Start Creating
                    <ArrowRight className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 ml-2" />
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
