import { Layout } from "@/components/layout/Layout";
import { SEO, schemas } from "@/components/shared/SEO";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import {
  Mic,
  Headphones,
  Video,
  Users,
  Wifi,
  Coffee,
  Check,
  ArrowRight,
  Calendar,
  Camera,
  Lightbulb,
  MapPin,
  Podcast,
  Image,
  Play,
} from "lucide-react";

// Studio use cases
const studioUseCases = [
  {
    icon: Podcast,
    title: "Podcast Recording",
    description: "Professional audio recording with broadcast-quality microphones and soundproofing",
    image: "/images/miscellany/podcast hero.jpg",
  },
  {
    icon: Video,
    title: "Video Podcasts & YouTube",
    description: "Multi-camera setup, professional lighting, and backdrops for video content",
    image: "/images/miscellany/podcast-production.jpg",
  },
  {
    icon: Camera,
    title: "Product & Portrait Photography",
    description: "Controlled lighting environment perfect for product shots and headshots",
    image: "/images/miscellany/product photography.jpg",
  },
  {
    icon: Play,
    title: "Content Creator Sessions",
    description: "Book studio time for TikToks, Reels, YouTube shorts, and social content",
    image: "/images/miscellany/socialmedia.jpg",
  },
];

const features = [
  {
    icon: Mic,
    title: "Professional Audio",
    description: "Broadcast-quality microphones, interfaces, and monitoring equipment",
  },
  {
    icon: Video,
    title: "Video Ready",
    description: "Multi-camera setup with professional lighting for video podcasts",
  },
  {
    icon: Lightbulb,
    title: "Studio Lighting",
    description: "Professional lighting rigs for photography and video content",
  },
  {
    icon: Image,
    title: "Multiple Backdrops",
    description: "Various backdrop options including white, black, and green screen",
  },
  {
    icon: Users,
    title: "Multi-Guest Setup",
    description: "Comfortable seating and equipment for up to 4+ guests",
  },
  {
    icon: Headphones,
    title: "Expert Engineers",
    description: "Audio and video engineers available to ensure quality output",
  },
  {
    icon: Wifi,
    title: "High-Speed Internet",
    description: "Reliable connectivity for live streaming and uploads",
  },
  {
    icon: Coffee,
    title: "Refreshments",
    description: "Complimentary beverages and comfortable waiting area",
  },
];

const whatsIncluded = [
  "Professional audio equipment (Shure SM7B, Rode NT1)",
  "Video cameras and multi-camera setup",
  "Professional lighting rigs",
  "Multiple backdrop options",
  "Audio engineer (Half Day+)",
  "Basic editing and mixing",
  "High-speed WiFi",
  "Complimentary refreshments",
  "File transfer and backup",
  "Comfortable lounge area",
];

const studioFaqs = [
  {
    question: "What can I record at your studio?",
    answer:
      "Our studio is fully equipped for podcasts, video podcasts, YouTube content, product photography, portrait sessions, voice-overs, and social media content creation. Whether you need audio-only recording or full video production, we have the equipment and space.",
  },
  {
    question: "What equipment do you provide?",
    answer:
      "Audio: Shure SM7B and Rode NT1 microphones, Focusrite interface, Yamaha mixing console, professional monitors. Video: Professional cameras, multiple lighting setups, teleprompter, various backdrops including green screen. Photography: Studio strobes, continuous lighting, product tables, and backdrop stands.",
  },
  {
    question: "Do I need to bring anything?",
    answer:
      "Just bring yourself and any specific materials for your content (scripts, products to photograph, props, etc.). We provide all technical equipment. Our team handles setup and operation.",
  },
  {
    question: "Can I book for video content, not just audio?",
    answer:
      "Absolutely! Our studio is set up for both audio and video. Video podcasts, YouTube content, social media videos, product photography, and headshots are all popular uses. The same rates apply.",
  },
  {
    question: "Do you offer editing services?",
    answer:
      "Yes! Basic editing is included with Half Day and Full Day packages. For more extensive editing, color grading, or post-production, we can add that to your package. Ask about our full production bundles.",
  },
  {
    question: "Can I book recurring sessions?",
    answer:
      "Yes! We offer discounted rates for recurring bookings. If you're producing a podcast series or need regular content, contact us to discuss a custom package.",
  },
  {
    question: "What's your cancellation policy?",
    answer:
      "We require 48 hours notice for cancellations or rescheduling. Cancellations within 48 hours may be subject to a 50% fee. No-shows will be charged the full amount.",
  },
  {
    question: "Where is the studio located?",
    answer:
      "Our studio is located at Canoga Heights, Lower Kkonge, Off Lukuli Road in Kampala. Easy parking available. We'll send you detailed directions upon booking confirmation.",
  },
];

export default function Studio() {
  return (
    <Layout hideFooterCta={true}>
      <SEO 
        title="Creator Studio | Podcast, Video & Photography Studio Kampala"
        description="Professional creator studio in Kampala. Record podcasts, shoot videos, create content. Multi-camera setup, professional lighting, soundproof rooms. Book by hour or day."
        url="/studio"
        schema={schemas.localBusiness}
      />
      {/* Hero Section */}
      <section className="relative min-h-[100svh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/team/9yards-office.jpg"
            alt="9Yards Creator Studio"
            className="w-full h-full object-cover"
            loading="eager"
            decoding="sync"
            fetchPriority="high"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full">
          <div className="container-custom py-24 sm:py-28 lg:py-32">
            <div className="max-w-2xl">
              {/* Eyebrow */}
              <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-4 sm:mb-5">
                <MapPin className="w-4 h-4" />
                Canoga Heights, Lower Kkonge
              </span>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-5 sm:mb-6 tracking-tight">
                9Yards{" "}
                <span className="text-accent">Creator Studio</span>
              </h1>

              {/* Subheadline */}
              <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed mb-6 sm:mb-8 max-w-xl">
                Record podcasts. Shoot videos. Create content. Professional equipment, expert engineers, and a space designed for creators. Book by the hour or day.
              </p>

              {/* Feature Pills */}
              <div className="flex flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-10">
                <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium">
                  <Mic className="w-4 h-4 text-accent" />
                  Podcast Recording
                </span>
                <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium">
                  <Video className="w-4 h-4 text-accent" />
                  Video Production
                </span>
                <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium">
                  <Camera className="w-4 h-4 text-accent" />
                  Photography
                </span>
              </div>

              {/* CTA Button */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button
                  size="lg"
                  className="rounded-full bg-accent hover:bg-[#C93917] active:bg-[#AB3013] text-white px-6 sm:px-8 h-12 sm:h-14 text-sm sm:text-base font-semibold shadow-xl hover:shadow-2xl hover:shadow-accent/25 transition-all duration-300"
                  asChild
                >
                  <Link to="/get-started">
                    Book Studio Time
                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Can Create Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-accent mb-3 sm:mb-4">What You Can Create</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.2] mb-4 sm:mb-6">
              One studio, endless possibilities
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether you're a podcaster, YouTuber, brand, or content creator, our space is equipped for your vision.
            </p>
          </div>

          {/* Use Case Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
            {studioUseCases.map((useCase) => (
              <div
                key={useCase.title}
                className="group relative rounded-2xl overflow-hidden h-[280px] sm:h-[320px]"
              >
                <img
                  src={useCase.image}
                  alt={useCase.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="absolute inset-0 p-5 sm:p-6 flex flex-col justify-end">
                  <div className="w-10 h-10 rounded-lg bg-accent/20 backdrop-blur-sm flex items-center justify-center mb-3">
                    <useCase.icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{useCase.title}</h3>
                  <p className="text-sm text-white/80">{useCase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-28 bg-[#f8f8f5]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-accent mb-3 sm:mb-4">Studio Features</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.2] mb-4 sm:mb-6">
              Everything you need to create
            </h2>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-xl sm:rounded-2xl border border-border p-5 sm:p-6 hover:shadow-lg hover:border-accent/20 transition-all duration-300"
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                </div>
                <h3 className="font-bold text-base sm:text-lg text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-28 bg-[#f8f8f5]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-accent mb-3 sm:mb-4">What's Included</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-[1.2] mb-4 sm:mb-6">
                Everything for a successful session
              </h2>
              <p className="text-muted-foreground mb-6 sm:mb-8">
                No hidden fees, no equipment rentals. Everything you need is included with your booking.
              </p>
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                {whatsIncluded.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-accent" />
                    </div>
                    <span className="text-sm sm:text-base text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/10 rounded-2xl -z-10 hidden sm:block"></div>
              <img
                src="/images/miscellany/spotlight.jpg"
                alt="Studio equipment and setup"
                className="rounded-2xl shadow-xl ring-1 ring-foreground/10"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-accent mb-3 sm:mb-4">FAQ</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              Common questions
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
              {studioFaqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white border border-border rounded-xl sm:rounded-2xl px-5 sm:px-6"
                >
                  <AccordionTrigger className="text-left font-semibold hover:no-underline py-4 sm:py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4 sm:pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-[#f8f8f5]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to create something amazing?
          </h2>
          <p className="text-muted-foreground mb-6 sm:mb-8 max-w-xl mx-auto">
            Book your studio session today or contact us to discuss a custom package for your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button variant="accent" size="lg" className="rounded-full px-8" asChild>
              <Link to="/get-started">
                Get Started
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="rounded-full px-8" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
