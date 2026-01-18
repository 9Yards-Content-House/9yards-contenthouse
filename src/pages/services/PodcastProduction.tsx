import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { 
  ArrowRight, 
  Mic,
  Headphones,
  Radio,
  Settings,
  Sparkles,
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// Podcast service categories for the horizontal scroll
const podcastServices = [
  { name: "Podcast Recording" },
  { name: "Audio Editing" },
  { name: "Show Production" },
  { name: "Interview Podcasts" },
  { name: "Audio Branding" },
  { name: "Distribution Setup" },
  { name: "Live Recording" },
  { name: "Guest Coordination" },
  { name: "Sound Design" },
];

// Why choose us points
const whyChooseUs = [
  {
    icon: Mic,
    title: "Professional Studio",
    description: "Acoustically treated recording space with broadcast-quality microphones and equipment."
  },
  {
    icon: Headphones,
    title: "Expert Audio Engineering",
    description: "Crystal-clear sound with professional mixing, mastering, and noise reduction."
  },
  {
    icon: Users,
    title: "Full Production Support",
    description: "From guest coordination to show notes, we handle every detail of your podcast."
  },
  {
    icon: Sparkles,
    title: "Quick Turnaround",
    description: "Episodes edited and delivered within 48-72 hours of recording."
  },
];

// Process steps
const processSteps = [
  { step: "01", title: "Planning", description: "We discuss your podcast concept, format, and goals." },
  { step: "02", title: "Studio Booking", description: "Schedule your recording session at our professional studio." },
  { step: "03", title: "Recording", description: "Capture high-quality audio with our expert team." },
  { step: "04", title: "Post-Production", description: "Editing, mixing, sound design, and music integration." },
  { step: "05", title: "Delivery", description: "Final files ready for distribution on all platforms." },
];

export default function PodcastProduction() {
  const featuresRef = useScrollAnimation<HTMLDivElement>();
  const processRef = useScrollAnimation<HTMLDivElement>();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[100svh] flex flex-col overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-grid/podcast-production.jpg"
            alt="Podcast production studio"
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
                  Podcast Production Services
                </span>

                {/* Headline */}
                <h1 className="text-[1.75rem] sm:text-3xl md:text-4xl lg:text-[2.5rem] xl:text-[2.6rem] font-bold text-white leading-[1.2] mb-4 sm:mb-5 tracking-tight drop-shadow-sm">
                  Your voice deserves to be heard. <span className="text-accent">Crystal-clear audio</span> that builds your audience.
                </h1>

                {/* Description */}
                <p className="text-sm sm:text-base lg:text-lg text-white/80 leading-relaxed mb-6 sm:mb-8 max-w-xl">
                  Professional podcast production from recording to distribution. Our studio, equipment, and expertise ensure your podcast sounds polished and professional from episode one.
                </p>

                {/* CTA Button */}
                <div className="flex">
                  <Button 
                    asChild
                    size="lg"
                    className="rounded-full bg-accent hover:bg-accent/90 text-white px-6 sm:px-8 h-11 sm:h-12 lg:h-14 text-sm sm:text-base font-semibold shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <Link to="/get-started?service=podcast">
                      Book Your Session
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
                podcastServices.map((service) => (
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

      {/* Why Choose Us Section */}
      <section className="py-16 sm:py-20 lg:py-28 bg-background">
        <div className="container-custom">
          <div 
            ref={featuresRef.ref}
            className={cn(
              "text-center mb-12 sm:mb-16 transition-all duration-700",
              featuresRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <span className="inline-block text-xs sm:text-sm font-semibold tracking-widest uppercase text-accent mb-4">
              Why Work With Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4">
              Podcast Production, Simplified
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether you're launching your first podcast or scaling an established show, we provide everything you need.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {whyChooseUs.map((item, index) => (
              <div 
                key={item.title}
                className={cn(
                  "bg-muted/50 rounded-2xl p-6 sm:p-8 transition-all duration-700 hover:bg-muted",
                  featuresRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 sm:py-20 lg:py-28 bg-[#181818]">
        <div className="container-custom">
          <div 
            ref={processRef.ref}
            className={cn(
              "text-center mb-12 sm:mb-16 transition-all duration-700",
              processRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <span className="inline-block text-xs sm:text-sm font-semibold tracking-widest uppercase text-accent mb-4">
              Our Process
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
              From Concept to Launch
            </h2>
            <p className="text-base sm:text-lg text-white/60 max-w-2xl mx-auto">
              A streamlined workflow that gets your podcast live and sounding amazing.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <div 
                key={step.step}
                className={cn(
                  "relative bg-white/5 rounded-2xl p-6 border border-white/10 transition-all duration-700 hover:bg-white/10 hover:border-accent/30",
                  processRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                <span className="text-4xl font-bold text-accent/30 mb-4 block">{step.step}</span>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-28 bg-primary">
        <div className="container-custom text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            Ready to Launch Your Podcast?
          </h2>
          <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-8">
            Book a studio session and let's bring your podcast to life with professional sound.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg"
              className="rounded-full bg-accent hover:bg-accent/90 text-white px-10 h-14 text-base font-semibold"
            >
              <Link to="/get-started?service=podcast">
                Book Your Session
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button 
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-white/30 text-white hover:bg-white/10 px-10 h-14 text-base font-semibold"
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
