import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { 
  ArrowRight, 
  Mic,
  Volume2,
  Headphones,
  Languages,
  Sparkles,
  Clock,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// Voice-over service categories for the horizontal scroll
const voiceOverServices = [
  { name: "Commercial VO" },
  { name: "Documentary Narration" },
  { name: "E-Learning" },
  { name: "IVR & Phone Systems" },
  { name: "Animation & Gaming" },
  { name: "Audiobook Recording" },
  { name: "Corporate Training" },
  { name: "Radio Ads" },
  { name: "Explainer Videos" },
];

// Why choose us points
const whyChooseUs = [
  {
    icon: Mic,
    title: "Diverse Voice Talent",
    description: "Access to professional voice artists across multiple languages, accents, and styles."
  },
  {
    icon: Headphones,
    title: "Studio-Quality Sound",
    description: "Acoustically treated recording booths and broadcast-grade equipment for pristine audio."
  },
  {
    icon: Languages,
    title: "Multi-Language Support",
    description: "Native speakers for English, Luganda, Swahili, and other East African languages."
  },
  {
    icon: Clock,
    title: "Fast Delivery",
    description: "Same-day turnaround available for urgent projects. Standard delivery in 24-48 hours."
  },
];

// Process steps
const processSteps = [
  { step: "01", title: "Brief", description: "Share your script and project requirements with us." },
  { step: "02", title: "Voice Matching", description: "We recommend the perfect voice talent for your project." },
  { step: "03", title: "Recording", description: "Professional recording in our studio or remote session." },
  { step: "04", title: "Editing", description: "Clean up, sync, and polish the audio to perfection." },
  { step: "05", title: "Delivery", description: "Final files in your preferred format, ready to use." },
];

export default function VoiceOver() {
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
            alt="Voice-over recording studio"
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
                  Voice-Over Recording Services
                </span>

                {/* Headline */}
                <h1 className="text-[1.75rem] sm:text-3xl md:text-4xl lg:text-[2.5rem] xl:text-[2.6rem] font-bold text-white leading-[1.2] mb-4 sm:mb-5 tracking-tight drop-shadow-sm">
                  The right voice makes all the difference. <span className="text-accent">Professional voice-overs</span> that connect.
                </h1>

                {/* Description */}
                <p className="text-sm sm:text-base lg:text-lg text-white/80 leading-relaxed mb-6 sm:mb-8 max-w-xl">
                  From commercials to e-learning, get crystal-clear voice recordings from professional talent. Multiple languages, fast turnaround, and studio-quality audio guaranteed.
                </p>

                {/* CTA Button */}
                <div className="flex">
                  <Button 
                    asChild
                    size="lg"
                    className="rounded-full bg-accent hover:bg-accent/90 text-white px-6 sm:px-8 h-11 sm:h-12 lg:h-14 text-sm sm:text-base font-semibold shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <Link to="/get-started?service=podcast">
                      Get a Quote
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
                voiceOverServices.map((service) => (
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
              Voice-Over Recording, Simplified
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional voice recordings without the hassle. Fast, affordable, and always on-brand.
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
              From Script to Audio
            </h2>
            <p className="text-base sm:text-lg text-white/60 max-w-2xl mx-auto">
              A simple process that delivers professional voice recordings fast.
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
            Ready to Record?
          </h2>
          <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-8">
            Send us your script and get a professional voice-over delivered in as little as 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg"
              className="rounded-full bg-accent hover:bg-accent/90 text-white px-10 h-14 text-base font-semibold"
            >
              <Link to="/get-started?service=podcast">
                Get a Quote
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
