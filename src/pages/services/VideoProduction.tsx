import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { ArrowRight, Play, Tv, MessageSquare, ClipboardList, Sparkles, Wand2 } from "lucide-react";
import { useRef, useState, useEffect } from "react";

// Video service categories for the horizontal scroll
const videoServices = [
  { name: "Music Videos" },
  { name: "Instagram Reels" },
  { name: "YouTube Shorts" },
  { name: "TV Commercials" },
  { name: "Corporate Videos" },
  { name: "Documentaries" },
  { name: "Product Videos" },
  { name: "Event Coverage" },
  { name: "Explainer Videos" },
];

export default function VideoProduction() {
  // Timeline scroll animation state
  const timelineSectionRef = useRef<HTMLDivElement>(null);
  const timelineContainerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [lineProgress, setLineProgress] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Process steps data
  const processSteps = [
    {
      number: 1,
      title: "Strategic planning from the start",
      description: "Get brand-aligned video with thorough content briefs, platform strategy, and clear creative direction. We collaborate to develop concepts that work, whether you come with a full script or just an idea."
    },
    {
      number: 2,
      title: "Flexible engagement model",
      description: "Subscribe for ongoing content or book one-time projects. Our services adapt to your needs. Use us end-to-end or fill specific gaps in your workflow."
    },
    {
      number: 3,
      title: "Local team, professional results",
      description: "Work with experienced cinematographers, editors, and directors based in Kampala. Direct communication, fast revisions, no time zone hassles. Professional cinema equipment on every shoot."
    },
    {
      number: 4,
      title: "Streamlined production",
      description: "Solid pre-production planning means efficient shoot days. We handle locations, talent, equipment, and logistics while maintaining creative excellence at every step."
    },
    {
      number: 5,
      title: "Expert finishing & delivery",
      description: "Professional editing, color grading, motion graphics, and sound design. Delivered in every format you need, optimized for Instagram, YouTube, TV, or web with platform-specific guidance."
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineContainerRef.current) return;

      const container = timelineContainerRef.current;
      const containerRect = container.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Calculate overall progress through the timeline section
      const containerTop = containerRect.top;
      const containerHeight = containerRect.height;
      const scrollStart = viewportHeight * 0.4; // Start when container is 40% from top
      const scrollEnd = -containerHeight + viewportHeight * 0.6; // End when container bottom is 60% from top
      
      const totalScrollDistance = scrollStart - scrollEnd;
      const currentScroll = scrollStart - containerTop;
      const progress = Math.max(0, Math.min(1, currentScroll / totalScrollDistance));
      
      setLineProgress(progress);

      // Determine active step based on individual step positions
      stepRefs.current.forEach((stepRef, index) => {
        if (stepRef) {
          const stepRect = stepRef.getBoundingClientRect();
          const stepCenter = stepRect.top + stepRect.height / 2;
          const triggerPoint = viewportHeight * 0.5;
          
          if (stepCenter <= triggerPoint) {
            setActiveStep(index + 1);
          }
        }
      });

      // Reset if we're above the first step
      if (stepRefs.current[0]) {
        const firstStepRect = stepRefs.current[0].getBoundingClientRect();
        if (firstStepRect.top > viewportHeight * 0.5) {
          setActiveStep(0);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Layout>
      {/* Hero Section - Superside Style */}
      <section className="relative min-h-[100svh] flex flex-col overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            preload="auto"
            poster="/images/hero-grid/video-production.jpg"
            className="w-full h-full object-cover scale-105"
          >
            <source src="/images/team/Spice Diana - Nzigulawo.mp4" type="video/mp4" />
          </video>
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
                  Video Production Services
                </span>

                {/* Headline */}
                <h1 className="text-[1.75rem] sm:text-3xl md:text-4xl lg:text-[2.5rem] xl:text-[2.6rem] font-bold text-white leading-[1.2] mb-4 sm:mb-5 tracking-tight drop-shadow-sm">
                  Stories that captivate. Videos that convert. Production <span className="text-accent">delivered in days</span>, not months.
                </h1>

                {/* Description */}
                <p className="text-sm sm:text-base lg:text-lg text-white/80 leading-relaxed mb-6 sm:mb-8 max-w-xl">
                  From viral Reels to award-worthy music videos, broadcast-quality production delivered in days. Professional crew, cinema-grade equipment, and guaranteed turnarounds.
                </p>

                {/* CTA Button */}
                <div className="flex">
                  <Button 
                    asChild
                    size="lg"
                    className="rounded-full bg-accent hover:bg-accent/90 text-white px-6 sm:px-8 h-11 sm:h-12 lg:h-14 text-sm sm:text-base font-semibold shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <Link to="/get-started?service=video-production">
                      Start Your Project
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
                animation: 'smoothMarquee 40s linear infinite',
                willChange: 'transform',
              }}
            >
              {/* Render 4 sets of cards for ultra-smooth seamless loop */}
              {[...Array(4)].map((_, setIndex) => (
                videoServices.map((service) => (
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

      {/* Video Production That Works For You Section */}
      <section className="overflow-hidden bg-background py-12 sm:py-16 md:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 items-center">
            {/* Text Content */}
            <div className="order-2 lg:order-1">
              <div className="max-w-xl lg:max-w-lg">
                {/* Accent bar */}
                <div className="w-12 h-1 bg-accent rounded-full mb-4"></div>
                <h2 className="text-xs sm:text-sm font-semibold text-accent uppercase tracking-widest">Video Production That Works For You</h2>
                <p className="mt-4 sm:mt-5 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground leading-[1.2]">
                  High-quality video, fast turnaround, and results you can measure
                </p>
                <p className="mt-4 sm:mt-5 lg:mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
                  Your brand needs video content that performs, from social media reels to music videos to corporate documentaries. 9Yards Content House brings professional equipment, experienced crews, and efficient workflows that deliver exceptional results without the traditional agency timeline.
                </p>
                <p className="mt-3 sm:mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
                  Unlike slow agencies or unreliable freelancers, our video production services adapt to your workflow and scale with your business. Professional cinema cameras, experienced editors, and proven processes mean you get speed without sacrificing storytelling or quality.
                </p>
                <div className="mt-6 sm:mt-8 lg:mt-10">
                  <Button variant="accent" size="lg" className="w-full sm:w-auto" asChild>
                    <Link to="/get-started?service=video-production">
                      Start Your Project
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
                  src="/images/team/9yards-team-onset.png" 
                  alt="9Yards Content House video production team on set with professional cinema camera" 
                  className="relative w-full h-auto rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl ring-1 ring-foreground/10 object-cover aspect-[4/3] sm:aspect-[5/4] lg:aspect-[4/5]" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flexible Production Options - Bento Grid Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-4xl mx-auto mb-10 sm:mb-12 lg:mb-16 text-center lg:text-left">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-accent mb-3 sm:mb-4">Full-Service Video Production</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.1] mb-4 sm:mb-6">
              Flexible production options for<br className="hidden sm:block" />
              every kind of video need
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              From social reels to broadcast commercials, we have got your team's back and your brand's story.
            </p>
          </div>

          {/* Bento Grid - Responsive layout matching Superside */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 sm:gap-4 lg:gap-5">
            
            {/* Row 1 */}
            {/* Card 1: Social-first video - Large card (5 cols) */}
            <div className="sm:col-span-2 lg:col-span-5 group relative rounded-xl sm:rounded-2xl overflow-hidden h-[300px] sm:h-[340px] lg:h-[400px]">
              <img 
                src="/images/bento-grid/video production/social-first-video.jpg" 
                alt="Social-first video content"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Soft localized gradient behind text */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/85 via-black/55 to-transparent" />
              {/* Content */}
              <div className="absolute inset-0 p-5 sm:p-6 lg:p-8 flex flex-col justify-between">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white drop-shadow-lg">Social-first video</h3>
                <p className="text-sm sm:text-base text-white/90 max-w-md leading-relaxed drop-shadow-md">
                  Platform-optimized content that is fast, fun, and built for scroll-stopping impact. Reels, TikToks, and shorts that drive engagement.
                </p>
              </div>
            </div>

            {/* Card 2: Full-production music videos - Medium card (4 cols) */}
            <div className="lg:col-span-4 group relative rounded-xl sm:rounded-2xl overflow-hidden h-[300px] sm:h-[340px] lg:h-[400px]">
              <img 
                src="/images/bento-grid/video production/full-production-music-videos.jpg" 
                alt="Full-production music videos"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Soft localized gradient behind text */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-transparent" />
              {/* Content */}
              <div className="absolute inset-0 p-5 sm:p-6 lg:p-8 flex flex-col">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3 drop-shadow-lg">Full-production music videos</h3>
                <p className="text-sm sm:text-base text-white/90 max-w-xs leading-relaxed drop-shadow-md">
                  Cinematic storytelling for artists who demand excellence. From concept to color grade, your vision, our professional execution.
                </p>
              </div>
            </div>

            {/* Card 3: Corporate & commercial video - Small card (3 cols) */}
            <div className="lg:col-span-3 group relative rounded-xl sm:rounded-2xl overflow-hidden h-[300px] sm:h-[340px] lg:h-[400px]">
              <img 
                src="/images/bento-grid/video production/corprate-&-commercial-video.jpg" 
                alt="Corporate and commercial video"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Soft localized gradient behind text */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/45 to-transparent" />
              {/* Content */}
              <div className="absolute inset-0 p-5 sm:p-6 lg:p-8 flex flex-col">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3 drop-shadow-lg">Corporate & commercial video</h3>
                <p className="text-sm text-white/90 leading-relaxed drop-shadow-md">
                  Elevate your brand with TV commercials, product demos, and company stories. Broadcast-quality production that drives results.
                </p>
              </div>
            </div>

            {/* Row 2 */}
            {/* Card 4: Post-production specialists - Small card (3 cols) */}
            <div className="lg:col-span-3 group relative rounded-xl sm:rounded-2xl overflow-hidden h-[300px] sm:h-[340px] lg:h-[400px]">
              <img 
                src="/images/bento-grid/video production/Post-production-specialists.jpg" 
                alt="Post-production specialists"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Soft localized gradient behind text */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/45 to-transparent" />
              {/* Content */}
              <div className="absolute inset-0 p-5 sm:p-6 lg:p-8 flex flex-col">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3 drop-shadow-lg">Post-production specialists</h3>
                <p className="text-sm text-white/90 leading-relaxed drop-shadow-md">
                  Already shot your footage? We handle editing, color correction, sound design, and motion graphics.
                </p>
              </div>
            </div>

            {/* Card 5: Documentary & brand stories - Small card (3 cols) */}
            <div className="lg:col-span-3 group relative rounded-xl sm:rounded-2xl overflow-hidden h-[300px] sm:h-[340px] lg:h-[400px]">
              <img 
                src="/images/bento-grid/video production/documentaries-and-brand-stories.jpg" 
                alt="Documentary and brand stories"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Soft localized gradient behind text */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/45 to-transparent" />
              {/* Content */}
              <div className="absolute inset-0 p-5 sm:p-6 lg:p-8 flex flex-col">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3 drop-shadow-lg">Documentary & brand stories</h3>
                <p className="text-sm text-white/90 leading-relaxed drop-shadow-md">
                  Compelling narratives that connect with audiences. Brand documentaries and stories that leave an impact.
                </p>
              </div>
            </div>

            {/* Card 6: Event & live production - Large card (6 cols) */}
            <div className="sm:col-span-2 lg:col-span-6 group relative rounded-xl sm:rounded-2xl overflow-hidden h-[300px] sm:h-[340px] lg:h-[400px]">
              <img 
                src="/images/bento-grid/video production/event-and-live-production.jpg" 
                alt="Event and live production"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Soft localized gradient behind text */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-transparent" />
              {/* Content */}
              <div className="absolute inset-0 p-5 sm:p-6 lg:p-8 flex flex-col">
                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3 drop-shadow-lg">Event & live production</h3>
                  <p className="text-sm sm:text-base text-white/90 max-w-lg leading-relaxed drop-shadow-md">
                    Multi-camera coverage for conferences, launches, and live events. Capture every moment with professional crews and fast turnaround.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Platform Expertise Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-accent mb-3 sm:mb-4">Platform Expertise</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15]">
              Video expertise for every<br className="hidden sm:block" />
              <span className="italic font-serif font-normal">platform and purpose</span>
            </h2>
          </div>

          {/* Channel Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {/* Social Media Platforms Card */}
            <div className="group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-6 group-hover:bg-accent/20 group-hover:border-accent/40 transition-all duration-300">
                <Play className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                Instagram, TikTok, YouTube, Facebook
              </h3>
              <p className="text-base text-white/60 leading-relaxed">
                Platform-optimized content designed to stop the scroll. Vertical video, square formats, and aspect ratios that perform from day one.
              </p>
            </div>

            {/* Broadcast & Streaming Card */}
            <div className="group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-6 group-hover:bg-accent/20 group-hover:border-accent/40 transition-all duration-300">
                <Tv className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                TV and broadcast quality
              </h3>
              <p className="text-base text-white/60 leading-relaxed">
                Broadcast-ready productions with cinematic quality. Built for television, streaming platforms, and high-impact digital campaigns.
              </p>
            </div>

            {/* Corporate & Marketing Card */}
            <div className="group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-6 group-hover:bg-accent/20 group-hover:border-accent/40 transition-all duration-300">
                <MessageSquare className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                Corporate and marketing videos
              </h3>
              <p className="text-base text-white/60 leading-relaxed">
                Professional videos that drive business results. Product demos, explainer videos, and brand content that converts viewers into customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Efficient Workflows Section */}
      <section className="relative overflow-hidden bg-primary py-4 sm:py-6 lg:py-8">
        {/* Full-width container with rounded corners */}
        <div className="mx-4 sm:mx-6 lg:mx-8 rounded-2xl sm:rounded-3xl overflow-hidden relative min-h-[650px] sm:min-h-[700px] lg:min-h-[750px]">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src="/images/team/9yards-team-onset.png" 
              alt="9Yards team on set"
              className="w-full h-full object-cover object-[70%_center] sm:object-center"
            />
            {/* Gradient overlay - stronger on left for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30 lg:from-black/85 lg:via-black/40 lg:to-transparent" />
          </div>

          {/* Content */}
          <div className="relative z-10 px-6 sm:px-10 lg:px-16 xl:px-20 py-16 sm:py-20 lg:py-24">
            <div className="max-w-xl lg:max-w-lg">
              {/* Eyebrow */}
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-white/60 mb-4">
                How 9Yards Delivers Faster
              </p>
              
              {/* Headline */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-white leading-[1.15] mb-4">
                Efficient workflows guided by <span className="italic font-serif font-normal">creative excellence</span>
              </h2>
              
              {/* Description */}
              <p className="text-base sm:text-lg text-white/70 leading-relaxed mb-8 sm:mb-10">
                Our video specialists combine professional cinema equipment with proven workflows to deliver faster without sacrificing quality. From concept to final edit, we have refined every step.
              </p>

              {/* Process Cards */}
              <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
                {/* Pre-Production */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-white/10">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                      <ClipboardList className="w-5 h-5 sm:w-6 sm:h-6 text-white/80" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-white/50 mb-1">Pre-Production</p>
                      <p className="text-sm sm:text-base text-white font-medium leading-relaxed">
                        Clear planning and creative direction earlier with detailed briefs and collaborative concept development
                      </p>
                    </div>
                  </div>
                </div>

                {/* Production */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-white/10">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-white/80" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-white/50 mb-1">Production</p>
                      <p className="text-sm sm:text-base text-white font-medium leading-relaxed">
                        Professional cinema cameras, lighting, and audio equipment ensure broadcast-quality footage from every shoot
                      </p>
                    </div>
                  </div>
                </div>

                {/* Post-Production */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-white/10">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                      <Wand2 className="w-5 h-5 sm:w-6 sm:h-6 text-white/80" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-white/50 mb-1">Post-Production</p>
                      <p className="text-sm sm:text-base text-white font-medium leading-relaxed">
                        Expert editing, color grading, and sound design deliver polished videos that meet your deadline and exceed expectations
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <Button 
                asChild
                size="lg"
                className="rounded-full bg-accent hover:bg-accent/90 text-white px-6 sm:px-8"
              >
                <Link to="/get-started?service=video-production">
                  Get started
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section with Timeline */}
      <section className="bg-primary overflow-hidden py-16 sm:py-20 md:py-24 lg:py-32" ref={timelineSectionRef}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24">
            
            {/* Left Side - Sticky Content (vertically centered) */}
            <div className="lg:sticky lg:top-1/2 lg:-translate-y-1/2 lg:self-start lg:h-fit">
              {/* Headline */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-white leading-[1.1] mb-6">
                Our process makes it<br className="hidden sm:block" />
                easier to <span className="italic font-serif font-normal">press play</span>
              </h2>
              
              {/* Description */}
              <p className="text-base sm:text-lg text-white/60 leading-relaxed mb-10 sm:mb-12 lg:mb-16 max-w-md">
                Our video team is built for speed, quality, and seamless collaboration, from concept to final cut.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:gap-10 pb-8 border-b border-white/10">
                {/* Stat 1 */}
                <div>
                  <p className="text-4xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight font-serif italic mb-2">
                    50+
                  </p>
                  <p className="text-sm text-white/50 leading-relaxed mb-2">
                    projects delivered monthly across all formats
                  </p>
                  <Link to="/portfolio" className="text-sm text-accent hover:text-accent/80 inline-flex items-center gap-1 transition-colors">
                    View our work <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>

                {/* Stat 2 */}
                <div>
                  <p className="text-4xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight font-serif italic mb-2">
                    48-72h
                  </p>
                  <p className="text-sm text-white/50 leading-relaxed mb-2">
                    average turnaround for social video content
                  </p>
                  <Link to="/get-started" className="text-sm text-accent hover:text-accent/80 inline-flex items-center gap-1 transition-colors">
                    Get started <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Side - Timeline with scroll animation */}
            <div className="relative" ref={timelineContainerRef}>
              {/* Background Vertical Line (gray/muted) */}
              <div className="absolute left-5 sm:left-6 top-0 bottom-0 w-px bg-white/20" />
              
              {/* Progress Vertical Line (orange/accent) - animated */}
              <div 
                className="absolute left-5 sm:left-6 top-0 w-px bg-accent origin-top transition-transform duration-100 ease-out"
                style={{ 
                  height: '100%',
                  transform: `scaleY(${lineProgress})`,
                }}
              />
              
              {/* Timeline Items */}
              <div className="space-y-16 sm:space-y-20 lg:space-y-24">
                {processSteps.map((step, index) => (
                  <div 
                    key={step.number}
                    ref={(el) => { stepRefs.current[index] = el; }}
                    className="relative pl-14 sm:pl-16"
                  >
                    {/* Circle with number - animated color */}
                    <div 
                      className={`absolute left-0 top-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 flex items-center justify-center transition-all duration-500 ease-out ${
                        activeStep >= step.number 
                          ? 'bg-accent border-accent' 
                          : 'bg-transparent border-white/30'
                      }`}
                    >
                      <span 
                        className={`text-sm sm:text-base font-semibold transition-colors duration-500 ${
                          activeStep >= step.number 
                            ? 'text-primary' 
                            : 'text-white/50'
                        }`}
                      >
                        {step.number}
                      </span>
                    </div>
                    
                    {/* Content */}
                    <div className={`transition-opacity duration-500 ${activeStep >= step.number ? 'opacity-100' : 'opacity-60'}`}>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                        {step.title}
                      </h3>
                      <p className="text-base text-white/60 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
