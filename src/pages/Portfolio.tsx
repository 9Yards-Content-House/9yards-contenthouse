import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { ArrowRight, Play, Camera, Film, Package, Mic, X } from "lucide-react";
import { useState } from "react";
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

export default function Portfolio() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [activeImages, setActiveImages] = useState<{ [key: string]: number }>({
    "video-production": 0,
    "product-branding": 0,
    "food-photography": 0,
    "podcast-production": 0,
  });

  const handleThumbnailClick = (projectId: string, imageIndex: number) => {
    setActiveImages(prev => ({
      ...prev,
      [projectId]: imageIndex,
    }));
  };

  return (
    <Layout hideFooterCta={true}>
      {/* YouTube Video Modal */}
      <Dialog open={isVideoModalOpen} onOpenChange={setIsVideoModalOpen}>
        <DialogContent className="max-w-5xl w-[95vw] p-0 bg-black border-none overflow-hidden">
          <VisuallyHidden>
            <DialogTitle>{featuredProject.artist} - {featuredProject.title}</DialogTitle>
          </VisuallyHidden>
          {/* Close button */}
          <button
            onClick={() => setIsVideoModalOpen(false)}
            className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          {/* Video embed */}
          <div className="relative w-full aspect-video">
            {isVideoModalOpen && (
              <iframe
                src={`https://www.youtube.com/embed/${featuredProject.youtubeId}?autoplay=1&rel=0`}
                title={`${featuredProject.artist} - ${featuredProject.title}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* Hero Section - Clean & Focused */}
      <section className="relative min-h-[85svh] sm:min-h-[90svh] flex flex-col overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/images/Portfolio/Other music video behind the scene pictures/9yards-team-onset.png"
            className="w-full h-full object-cover"
          >
            <source src={featuredProject.videoSrc} type="video/mp4" />
          </video>
          {/* Gradient overlay - cleaner, centered focus */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/60" />
        </div>

        {/* Main Content - Centered & Minimal */}
        <div className="relative z-10 flex-1 flex items-center justify-center">
          <div className="container-custom py-20 sm:py-24 lg:py-28">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              {/* Eyebrow */}
              <span className="inline-block text-xs sm:text-sm font-semibold tracking-widest uppercase text-accent mb-4 sm:mb-5">
                Our Work
              </span>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.15] mb-5 sm:mb-6 tracking-tight">
                Creative work that{" "}
                <span className="text-accent">speaks for itself</span>
              </h1>

              {/* Featured Badge */}
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2.5 border border-white/15 mb-6 sm:mb-8">
                <span className="text-white/60 text-sm">Now Playing:</span>
                <span className="text-white font-semibold">{featuredProject.artist} — {featuredProject.title}</span>
              </div>

              {/* CTA Button */}
              <div className="flex justify-center">
                <Button
                  size="lg"
                  onClick={() => setIsVideoModalOpen(true)}
                  className="rounded-full bg-accent hover:bg-[#C93917] active:bg-[#AB3013] text-white px-8 sm:px-10 h-12 sm:h-14 text-sm sm:text-base font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2 fill-current" />
                  Watch Full Video
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Works - Interactive Gallery Grid */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20 text-center">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-accent mb-3 sm:mb-4">Selected Works</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.15] mb-4 sm:mb-6">
              What we do best
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto">
              A curated collection of our creative work across video, branding, photography, and audio.
            </p>
          </div>

          {/* Bento Grid with Interactive Galleries */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-5 lg:gap-6">
            
            {/* Video Production - Large Card */}
            <div className="md:col-span-2 lg:col-span-7 group relative rounded-2xl sm:rounded-3xl overflow-hidden h-[400px] sm:h-[450px] lg:h-[500px]">
              <img
                src={projectCategories[0].images[activeImages["video-production"]]}
                alt={projectCategories[0].title}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-500"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />
              {/* Content */}
              <div className="absolute inset-0 p-6 sm:p-8 lg:p-10 flex flex-col justify-end">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-accent/90 backdrop-blur-sm flex items-center justify-center">
                    <Film className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-white/60">{projectCategories[0].subtitle}</p>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">{projectCategories[0].title}</h3>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-white/80 max-w-lg leading-relaxed mb-4">
                  {projectCategories[0].description}
                </p>
                {/* Interactive Thumbnails */}
                {projectCategories[0].images.length > 1 && (
                  <div className="flex gap-2">
                    {projectCategories[0].images.map((img, i) => (
                      <button
                        key={i}
                        onClick={() => handleThumbnailClick("video-production", i)}
                        className={`w-14 h-14 sm:w-16 sm:h-16 rounded-lg overflow-hidden transition-all duration-300 ${
                          activeImages["video-production"] === i
                            ? "ring-2 ring-accent scale-105"
                            : "ring-2 ring-white/20 opacity-70 hover:opacity-100 hover:ring-white/40"
                        }`}
                      >
                        <img src={img} alt="" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Product & Branding - Medium Card */}
            <div className="lg:col-span-5 group relative rounded-2xl sm:rounded-3xl overflow-hidden h-[350px] sm:h-[400px] lg:h-[500px]">
              <img
                src={projectCategories[1].images[activeImages["product-branding"]]}
                alt={projectCategories[1].title}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-500"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10" />
              {/* Content */}
              <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-accent/90 backdrop-blur-sm flex items-center justify-center">
                    <Package className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-white/60">{projectCategories[1].subtitle}</p>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">{projectCategories[1].title}</h3>
                  </div>
                </div>
                <p className="text-sm text-white/80 leading-relaxed mb-4">
                  {projectCategories[1].description}
                </p>
                {/* Interactive Thumbnails */}
                <div className="flex gap-2 flex-wrap">
                  {projectCategories[1].images.slice(0, 5).map((img, i) => (
                    <button
                      key={i}
                      onClick={() => handleThumbnailClick("product-branding", i)}
                      className={`w-11 h-11 sm:w-12 sm:h-12 rounded-lg overflow-hidden transition-all duration-300 ${
                        activeImages["product-branding"] === i
                          ? "ring-2 ring-accent scale-105"
                          : "ring-2 ring-white/20 opacity-70 hover:opacity-100 hover:ring-white/40"
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                  {projectCategories[1].images.length > 5 && (
                    <button
                      onClick={() => handleThumbnailClick("product-branding", 5)}
                      className={`w-11 h-11 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center transition-all duration-300 ${
                        activeImages["product-branding"] >= 5
                          ? "bg-accent ring-2 ring-accent"
                          : "bg-white/20 backdrop-blur-sm ring-2 ring-white/20 hover:bg-white/30"
                      }`}
                    >
                      <span className="text-white text-xs font-semibold">+{projectCategories[1].images.length - 5}</span>
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Food Photography - Medium Card */}
            <div className="lg:col-span-6 group relative rounded-2xl sm:rounded-3xl overflow-hidden h-[350px] sm:h-[400px]">
              <img
                src={projectCategories[2].images[activeImages["food-photography"]]}
                alt={projectCategories[2].title}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-500"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10" />
              {/* Content */}
              <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-accent/90 backdrop-blur-sm flex items-center justify-center">
                    <Camera className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-white/60">{projectCategories[2].subtitle}</p>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">{projectCategories[2].title}</h3>
                  </div>
                </div>
                <p className="text-sm text-white/80 leading-relaxed mb-4">
                  {projectCategories[2].description}
                </p>
                {/* Interactive Thumbnails */}
                <div className="flex gap-2 flex-wrap">
                  {projectCategories[2].images.slice(0, 5).map((img, i) => (
                    <button
                      key={i}
                      onClick={() => handleThumbnailClick("food-photography", i)}
                      className={`w-11 h-11 sm:w-12 sm:h-12 rounded-lg overflow-hidden transition-all duration-300 ${
                        activeImages["food-photography"] === i
                          ? "ring-2 ring-accent scale-105"
                          : "ring-2 ring-white/20 opacity-70 hover:opacity-100 hover:ring-white/40"
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                  {projectCategories[2].images.length > 5 && (
                    <button
                      onClick={() => handleThumbnailClick("food-photography", 5)}
                      className={`w-11 h-11 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center transition-all duration-300 ${
                        activeImages["food-photography"] >= 5
                          ? "bg-accent ring-2 ring-accent"
                          : "bg-white/20 backdrop-blur-sm ring-2 ring-white/20 hover:bg-white/30"
                      }`}
                    >
                      <span className="text-white text-xs font-semibold">+{projectCategories[2].images.length - 5}</span>
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Podcast Production - Small Card */}
            <div className="lg:col-span-6 group relative rounded-2xl sm:rounded-3xl overflow-hidden h-[350px] sm:h-[400px]">
              <img
                src={projectCategories[3].images[activeImages["podcast-production"]]}
                alt={projectCategories[3].title}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-500"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10" />
              {/* Content */}
              <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-accent/90 backdrop-blur-sm flex items-center justify-center">
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
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#f8f8f5]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Card Container */}
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden min-h-[420px] sm:min-h-[480px] md:min-h-[520px]">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src="/images/team/9Yards-Content-House-Team-01.jpg"
                alt="9Yards Content House team"
                className="w-full h-full object-cover object-center"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex items-center px-8 sm:px-12 md:px-16 lg:px-20 py-14 sm:py-18 md:py-22">
              <div className="max-w-xl">
                {/* Eyebrow */}
                <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-accent mb-3 sm:mb-4">
                  Let's Collaborate
                </p>
                
                {/* Headline */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.15] mb-4 sm:mb-6">
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
                  className="rounded-full bg-accent hover:bg-[#C93917] active:bg-[#AB3013] text-white px-8 sm:px-10 h-12 sm:h-14 text-sm sm:text-base md:text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  <Link to="/get-started">
                    Start Your Project
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
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
