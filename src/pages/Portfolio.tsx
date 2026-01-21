import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/shared/SEO";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { ArrowRight, Play, Camera, Film, Package, Mic, X, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

// Portfolio projects data
const featuredProject = {
  title: "Nzigulawo",
  artist: "Spice Diana",
  type: "Music Video",
  year: "2024",
  youtubeId: "SDN3X_r11d0",
  videoSrc: "/images/Portfolio/Music Video/Spice Diana - Nzigulawo.mp4",
};

const projectCategories = [
  {
    id: "video-production",
    title: "Video Production",
    subtitle: "Music Videos & Commercials",
    icon: Film,
    images: [
      "/images/Portfolio/Other music video behind the scene pictures/9yards-team-onset.png",
      "/images/Portfolio/Other music video behind the scene pictures/team.jpg",
    ],
    description: "From concept to final cut, we produce music videos, commercials, and branded content that captivates audiences.",
  },
  {
    id: "product-branding",
    title: "Product & Branding",
    subtitle: "9Yards Juice Packaging",
    icon: Package,
    images: [
      "/images/Portfolio/Branding and Packaging/9Yards-Food-Mango-Juice.jpg",
      "/images/Portfolio/Branding and Packaging/9Yards-Food-Passion-Juice.jpg",
      "/images/Portfolio/Branding and Packaging/9Yards-Food-Pineapple-Juice.jpg",
      "/images/Portfolio/Branding and Packaging/9Yards-Food-Watermelon-Juice.jpg",
      "/images/Portfolio/Branding and Packaging/9Yards-Food-Beetroot-Juice.jpg",
      "/images/Portfolio/Branding and Packaging/9Yards-Food-cocktail-Juice.jpg",
    ],
    description: "Strategic brand identity and packaging design that stands out on shelves and connects with consumers.",
  },
  {
    id: "food-photography",
    title: "Food Photography",
    subtitle: "9Yards Food",
    icon: Camera,
    images: [
      "/images/Portfolio/Food Photography/9Yards-Food-Beef-Stew.jpg",
      "/images/Portfolio/Food Photography/9Yards-Food-chicken-Stew.jpg",
      "/images/Portfolio/Food Photography/9Yards-Food-fish-Stew.jpg",
      "/images/Portfolio/Food Photography/9Yards-Food-Lusaniya-03.jpg",
      "/images/Portfolio/Food Photography/9Yards-Food-Lusaniya-04.jpg",
      "/images/Portfolio/Food Photography/9Yards-Food-Lusaniya-05.jpg",
    ],
    description: "Mouth-watering food photography that makes every dish look irresistible and drives customer appetite.",
  },
  {
    id: "podcast-production",
    title: "Podcast Production",
    subtitle: "Sitwakalaba",
    icon: Mic,
    images: [
      "/images/Portfolio/our podcast called sitwakalaba/behind the scene of the sitwakalaba podcast.jpg",
    ],
    description: "Full podcast production from recording to distribution. Hosted by Tickie Tah and Vampino.",
  },
];

// Preload images for smoother gallery transitions
const preloadImages = (images: string[]) => {
  images.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
};

export default function Portfolio() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [activeImages, setActiveImages] = useState<{ [key: string]: number }>({
    "video-production": 0,
    "product-branding": 0,
    "food-photography": 0,
    "podcast-production": 0,
  });
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Preload all gallery images on mount
  useEffect(() => {
    projectCategories.forEach((project) => {
      preloadImages(project.images);
    });
  }, []);

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

  const handleThumbnailClick = (projectId: string, imageIndex: number) => {
    setActiveImages((prev) => ({
      ...prev,
      [projectId]: imageIndex,
    }));
  };

  const scrollToWorks = () => {
    const worksSection = document.getElementById("selected-works");
    if (worksSection) {
      worksSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Layout hideFooterCta={true}>
      <SEO 
        title="Portfolio | 9Yards Content House Work Examples"
        description="Explore our portfolio of music videos, brand identities, product photography, and podcast productions. See why Uganda's top brands trust 9Yards."
        url="/portfolio"
      />
      {/* YouTube Video Modal */}
      <Dialog open={isVideoModalOpen} onOpenChange={setIsVideoModalOpen}>
        <DialogContent className="max-w-5xl w-[95vw] p-0 bg-black border-none overflow-hidden rounded-xl sm:rounded-2xl">
          <VisuallyHidden>
            <DialogTitle>{featuredProject.artist} - {featuredProject.title}</DialogTitle>
          </VisuallyHidden>
          {/* Close button */}
          <button
            onClick={() => setIsVideoModalOpen(false)}
            aria-label="Close video"
            className="absolute -top-12 right-0 sm:top-4 sm:right-4 z-50 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-black transition-all"
          >
            <X className="w-5 h-5" />
          </button>
          {/* Video embed */}
          <div className="relative w-full aspect-video bg-black">
            {isVideoModalOpen && (
              <iframe
                src={`https://www.youtube.com/embed/${featuredProject.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                title={`${featuredProject.artist} - ${featuredProject.title}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* Hero Section */}
      <section className="relative min-h-[100svh] flex flex-col overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/images/Portfolio/Other music video behind the scene pictures/9yards-team-onset.png"
            className="w-full h-full object-cover"
            aria-label="Featured portfolio project video showcase"
          >
            <source src={featuredProject.videoSrc} type="video/mp4" />
          </video>
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/40" />
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex-1 flex items-center justify-center">
          <div className="container-custom py-24 sm:py-28 lg:py-32">
            <div className="max-w-4xl mx-auto text-center">
              {/* Eyebrow with animation */}
              <span className="inline-block text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-5 sm:mb-6 animate-fade-in opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards]">
                Our Work
              </span>

              {/* Headline with staggered animation */}
              <h1 className="text-[2rem] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6 sm:mb-8 tracking-tight animate-fade-in opacity-0 [animation-delay:400ms] [animation-fill-mode:forwards]">
                Creative work that
                <br className="hidden sm:block" />
                <span className="text-accent"> speaks for itself</span>
              </h1>

              {/* Featured Badge */}
              <div className="inline-flex items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-md rounded-full px-4 sm:px-6 py-2.5 sm:py-3 border border-white/20 mb-8 sm:mb-10 animate-fade-in opacity-0 [animation-delay:600ms] [animation-fill-mode:forwards]">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-white/70 text-xs sm:text-sm">Now Playing:</span>
                <span className="text-white font-semibold text-sm sm:text-base">{featuredProject.artist} — {featuredProject.title}</span>
              </div>

              {/* CTA Button */}
              <div className="flex justify-center animate-fade-in opacity-0 [animation-delay:800ms] [animation-fill-mode:forwards]">
                <Button
                  size="lg"
                  onClick={() => setIsVideoModalOpen(true)}
                  aria-label={`Watch ${featuredProject.title} by ${featuredProject.artist}`}
                  className="group rounded-full bg-accent hover:bg-[#C93917] active:bg-[#AB3013] text-white px-8 sm:px-10 h-13 sm:h-14 text-sm sm:text-base font-semibold shadow-xl hover:shadow-2xl hover:shadow-accent/25 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-black"
                >
                  <span className="relative flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 mr-2 sm:mr-3 rounded-full bg-white/20 group-hover:bg-white/30 transition-colors">
                    <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-current ml-0.5" />
                  </span>
                  Watch Full Video
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToWorks}
          aria-label="Scroll to selected works"
          className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors focus:outline-none focus:text-accent animate-fade-in opacity-0 [animation-delay:1200ms] [animation-fill-mode:forwards]"
        >
          <span className="text-[10px] sm:text-xs tracking-widest uppercase hidden sm:block">View Projects</span>
          <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 animate-bounce" />
        </button>
      </section>

      {/* Selected Works Section */}
      <section id="selected-works" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div
            ref={(el) => (sectionRefs.current["header"] = el)}
            className={`max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20 text-center transition-all duration-700 ${
              isVisible["header"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-accent mb-3 sm:mb-4">Selected Works</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.1] mb-4 sm:mb-6">
              What we do best
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
              A curated collection of our creative work across video, branding, photography, and audio.
            </p>
          </div>

          {/* Bento Grid with Interactive Galleries */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-5 lg:gap-6">
            
            {/* Video Production - Large Card */}
            <div
              ref={(el) => (sectionRefs.current["video"] = el)}
              className={`md:col-span-2 lg:col-span-7 group relative rounded-2xl sm:rounded-3xl overflow-hidden h-[420px] sm:h-[480px] lg:h-[540px] shadow-lg hover:shadow-xl transition-all duration-500 ${
                isVisible["video"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "100ms" }}
            >
              {/* Main Image with crossfade */}
              {projectCategories[0].images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={i === activeImages["video-production"] ? `${projectCategories[0].title} - Image ${i + 1}` : ""}
                  loading={i === 0 ? "eager" : "lazy"}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                    activeImages["video-production"] === i ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
              {/* Content */}
              <div className="absolute inset-0 p-5 sm:p-7 lg:p-9 flex flex-col justify-end">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-xl bg-accent flex items-center justify-center shadow-lg" aria-hidden="true">
                    <Film className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-white/60">{projectCategories[0].subtitle}</p>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">{projectCategories[0].title}</h3>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-white/80 max-w-lg leading-relaxed mb-5">
                  {projectCategories[0].description}
                </p>
                {/* Interactive Thumbnails */}
                {projectCategories[0].images.length > 1 && (
                  <div className="flex items-center gap-3" role="group" aria-label="Gallery navigation">
                    <div className="flex gap-2">
                      {projectCategories[0].images.map((img, i) => (
                        <button
                          key={i}
                          onClick={() => handleThumbnailClick("video-production", i)}
                          aria-label={`View image ${i + 1} of ${projectCategories[0].images.length}`}
                          aria-pressed={activeImages["video-production"] === i}
                          className={`w-14 h-14 sm:w-16 sm:h-16 rounded-lg overflow-hidden transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-black ${
                            activeImages["video-production"] === i
                              ? "ring-2 ring-accent scale-105 shadow-lg"
                              : "ring-2 ring-white/30 opacity-60 hover:opacity-100 hover:ring-white/50"
                          }`}
                        >
                          <img src={img} alt="" className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
                    {/* Dot indicators */}
                    <div className="flex gap-1.5 ml-2">
                      {projectCategories[0].images.map((_, i) => (
                        <span
                          key={i}
                          className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                            activeImages["video-production"] === i ? "bg-accent w-4" : "bg-white/40"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Product & Branding - Medium Card */}
            <div
              ref={(el) => (sectionRefs.current["branding"] = el)}
              className={`lg:col-span-5 group relative rounded-2xl sm:rounded-3xl overflow-hidden h-[380px] sm:h-[440px] lg:h-[540px] shadow-lg hover:shadow-xl transition-all duration-500 ${
                isVisible["branding"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              {/* Main Image with crossfade */}
              {projectCategories[1].images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={i === activeImages["product-branding"] ? `${projectCategories[1].title} - Image ${i + 1}` : ""}
                  loading="lazy"
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                    activeImages["product-branding"] === i ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent" />
              {/* Content */}
              <div className="absolute inset-0 p-5 sm:p-7 flex flex-col justify-end">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-xl bg-accent flex items-center justify-center shadow-lg" aria-hidden="true">
                    <Package className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-white/60">{projectCategories[1].subtitle}</p>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">{projectCategories[1].title}</h3>
                  </div>
                </div>
                <p className="text-sm text-white/80 leading-relaxed mb-5">
                  {projectCategories[1].description}
                </p>
                {/* Interactive Thumbnails */}
                <div className="flex items-center gap-3" role="group" aria-label="Gallery navigation">
                  <div className="flex gap-1.5 sm:gap-2 flex-wrap">
                    {projectCategories[1].images.map((img, i) => (
                      <button
                        key={i}
                        onClick={() => handleThumbnailClick("product-branding", i)}
                        aria-label={`View image ${i + 1} of ${projectCategories[1].images.length}`}
                        aria-pressed={activeImages["product-branding"] === i}
                        className={`w-10 h-10 sm:w-11 sm:h-11 rounded-lg overflow-hidden transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-1 focus:ring-offset-black ${
                          activeImages["product-branding"] === i
                            ? "ring-2 ring-accent scale-110 shadow-lg z-10"
                            : "ring-2 ring-white/30 opacity-60 hover:opacity-100 hover:ring-white/50"
                        }`}
                      >
                        <img src={img} alt="" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Food Photography - Medium Card */}
            <div
              ref={(el) => (sectionRefs.current["food"] = el)}
              className={`lg:col-span-6 group relative rounded-2xl sm:rounded-3xl overflow-hidden h-[380px] sm:h-[420px] shadow-lg hover:shadow-xl transition-all duration-500 ${
                isVisible["food"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              {/* Main Image with crossfade */}
              {projectCategories[2].images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={i === activeImages["food-photography"] ? `${projectCategories[2].title} - Image ${i + 1}` : ""}
                  loading="lazy"
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                    activeImages["food-photography"] === i ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent" />
              {/* Content */}
              <div className="absolute inset-0 p-5 sm:p-7 flex flex-col justify-end">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-xl bg-accent flex items-center justify-center shadow-lg" aria-hidden="true">
                    <Camera className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-white/60">{projectCategories[2].subtitle}</p>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">{projectCategories[2].title}</h3>
                  </div>
                </div>
                <p className="text-sm text-white/80 leading-relaxed mb-5">
                  {projectCategories[2].description}
                </p>
                {/* Interactive Thumbnails */}
                <div className="flex items-center gap-3" role="group" aria-label="Gallery navigation">
                  <div className="flex gap-1.5 sm:gap-2 flex-wrap">
                    {projectCategories[2].images.map((img, i) => (
                      <button
                        key={i}
                        onClick={() => handleThumbnailClick("food-photography", i)}
                        aria-label={`View image ${i + 1} of ${projectCategories[2].images.length}`}
                        aria-pressed={activeImages["food-photography"] === i}
                        className={`w-10 h-10 sm:w-11 sm:h-11 rounded-lg overflow-hidden transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-1 focus:ring-offset-black ${
                          activeImages["food-photography"] === i
                            ? "ring-2 ring-accent scale-110 shadow-lg z-10"
                            : "ring-2 ring-white/30 opacity-60 hover:opacity-100 hover:ring-white/50"
                        }`}
                      >
                        <img src={img} alt="" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Podcast Production - Small Card */}
            <div
              ref={(el) => (sectionRefs.current["podcast"] = el)}
              className={`lg:col-span-6 group relative rounded-2xl sm:rounded-3xl overflow-hidden h-[380px] sm:h-[420px] shadow-lg hover:shadow-xl transition-all duration-500 ${
                isVisible["podcast"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              <img
                src={projectCategories[3].images[0]}
                alt={projectCategories[3].title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent" />
              {/* Content */}
              <div className="absolute inset-0 p-5 sm:p-7 flex flex-col justify-end">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-xl bg-accent flex items-center justify-center shadow-lg" aria-hidden="true">
                    <Mic className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-white/60">{projectCategories[3].subtitle}</p>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">{projectCategories[3].title}</h3>
                  </div>
                </div>
                <p className="text-sm text-white/80 leading-relaxed">
                  {projectCategories[3].description}
                </p>
              </div>
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
            className={`relative rounded-2xl sm:rounded-3xl overflow-hidden min-h-[440px] sm:min-h-[500px] md:min-h-[540px] shadow-2xl transition-all duration-700 ${
              isVisible["cta"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src="/images/team/9Yards-Content-House-Team-01.jpg"
                alt=""
                loading="lazy"
                className="w-full h-full object-cover object-center"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/50 sm:from-black/90 sm:via-black/70 sm:to-black/30" />
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex items-center px-6 sm:px-10 md:px-14 lg:px-20 py-14 sm:py-18 md:py-22">
              <div className="max-w-xl">
                {/* Eyebrow */}
                <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-accent mb-4 sm:mb-5">
                  Let's Collaborate
                </p>
                
                {/* Headline */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.1] mb-5 sm:mb-6">
                  Ready to create something{" "}
                  <span className="text-accent">amazing?</span>
                </h2>

                {/* Description */}
                <p className="text-sm sm:text-base md:text-lg text-white/80 leading-relaxed mb-8 sm:mb-10">
                  Whether it's a music video, brand identity, or full creative campaign, our team is ready to bring your vision to life.
                </p>

                {/* CTA Button */}
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-accent hover:bg-[#C93917] active:bg-[#AB3013] text-white px-8 sm:px-10 h-13 sm:h-14 text-sm sm:text-base md:text-lg font-semibold shadow-xl hover:shadow-2xl hover:shadow-accent/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-black"
                >
                  <Link to="/get-started">
                    Start Your Project
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
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
