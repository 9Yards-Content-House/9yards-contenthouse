import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SEO, schemas } from "@/components/shared/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
  Radio,
  Users,
  Clock,
  Wifi,
  Coffee,
  Check,
  ArrowRight,
  Calendar,
  Star,
} from "lucide-react";
import studioImg from "@/assets/studio.jpg";

const features = [
  {
    icon: Mic,
    title: "Professional Equipment",
    description: "Industry-standard microphones, interfaces, and monitoring",
  },
  {
    icon: Headphones,
    title: "Audio Engineer",
    description: "Expert engineer included to ensure pristine sound quality",
  },
  {
    icon: Radio,
    title: "Soundproof Room",
    description: "Acoustically treated space for crystal-clear recordings",
  },
  {
    icon: Users,
    title: "Multi-Guest Setup",
    description: "Comfortable seating and equipment for up to 4 guests",
  },
  {
    icon: Wifi,
    title: "High-Speed Internet",
    description: "Reliable connectivity for live streaming and uploads",
  },
  {
    icon: Coffee,
    title: "Refreshments",
    description: "Complimentary beverages for all recording sessions",
  },
];

const packages = [
  {
    name: "Hourly",
    price: "150,000",
    unit: "UGX/hour",
    note: "Minimum 2 hours",
    popular: false,
  },
  {
    name: "Half Day",
    duration: "4 hours",
    price: "500,000",
    unit: "UGX",
    note: "Save 100K UGX",
    popular: false,
  },
  {
    name: "Full Day",
    duration: "8 hours",
    price: "900,000",
    unit: "UGX",
    note: "Best Value",
    popular: true,
  },
  {
    name: "Weekly Pass",
    duration: "5 days",
    price: "2,500,000",
    unit: "UGX",
    note: "For series production",
    popular: false,
  },
];

const whatsIncluded = [
  "Studio access with all equipment",
  "Professional audio engineer",
  "Basic audio editing and mixing",
  "Complimentary refreshments",
  "High-speed WiFi",
  "Comfortable lounge area",
  "Recording in multiple formats",
  "File transfer and backup",
];

const studioFaqs = [
  {
    question: "What equipment do you provide?",
    answer:
      "Our studio is equipped with professional-grade Shure SM7B and Rode NT1 microphones, Focusrite audio interface, Yamaha mixing console, Audio-Technica headphones, and professional studio monitors. All equipment is included in your booking.",
  },
  {
    question: "Do I need to bring anything?",
    answer:
      "Just bring yourself and any specific materials you need for your recording (scripts, notes, etc.). We provide all technical equipment, and our engineer handles the setup and operation.",
  },
  {
    question: "Can I book for recurring sessions?",
    answer:
      "Yes! We offer discounted rates for recurring bookings. Contact us to discuss a custom package for your ongoing podcast or recording needs.",
  },
  {
    question: "What's your cancellation policy?",
    answer:
      "We require 48 hours notice for cancellations or rescheduling. Cancellations within 48 hours may be subject to a 50% fee. No-shows will be charged the full amount.",
  },
  {
    question: "Can I do video recording in the studio?",
    answer:
      "Yes! Our studio is set up for video podcasts as well. We have professional lighting and camera equipment available. Additional fees may apply for video services.",
  },
];

const bookingProcess = [
  {
    step: "1",
    title: "Submit Request",
    description: "Fill out the booking form with your preferred date and time",
  },
  {
    step: "2",
    title: "Confirmation",
    description: "We'll confirm availability within 4 hours",
  },
  {
    step: "3",
    title: "Payment",
    description: "Secure your booking with 50% deposit",
  },
  {
    step: "4",
    title: "Preparation",
    description: "We'll send you a pre-session checklist",
  },
  {
    step: "5",
    title: "Record",
    description: "Arrive, relax, and create amazing content",
  },
];

export default function Studio() {
  return (
    <Layout>
      <SEO 
        title="Podcast & Recording Studio | 9Yards Kampala"
        description="Professional podcast and recording studio in Kampala. Expert audio engineering, soundproof rooms, multi-guest setup. Book by hour or day."
        url="/studio"
        schema={schemas.localBusiness}
      />
      {/* Hero */}
      <section 
        className="relative pt-32 pb-20 overflow-hidden"
        aria-labelledby="studio-hero-heading"
      >
        <div className="absolute inset-0" aria-hidden="true">
          <img
            src={studioImg}
            alt=""
            className="w-full h-full object-cover"
            loading="eager"
            decoding="sync"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/70" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 
              id="studio-hero-heading"
              className="text-display-2 md:text-display-1 text-primary-foreground mb-6"
            >
              Kampala's Premier{" "}
              <span className="text-accent">Podcast & Recording Studio</span>
            </h1>
            <p className="text-body-lg text-primary-foreground/90 mb-8">
              Professional recording facilities with expert audio engineering.
              Perfect for podcasts, voiceovers, music, and more.
            </p>
            <Button variant="cta" size="xl" asChild>
              <a href="#booking-form">
                Book Studio Time
                <Calendar className="w-5 h-5" aria-hidden="true" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeading
            title="Studio Features"
            subtitle="Everything you need for professional-quality recordings."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="p-6 rounded-xl bg-card border border-border card-hover"
              >
                <feature.icon className="w-10 h-10 text-accent mb-4" />
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-muted">
        <div className="container-custom">
          <h3 className="text-heading-1 text-center mb-8">Studio Gallery</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className="aspect-square rounded-lg bg-card border border-border overflow-hidden"
              >
                <img
                  src={studioImg}
                  alt={`Studio view ${i}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                title="What's Included"
                subtitle="Everything you need for a successful recording session."
                align="left"
              />
              <div className="grid sm:grid-cols-2 gap-3">
                {whatsIncluded.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-accent flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src={studioImg}
                alt="Studio equipment"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <SectionHeading
            title="Studio Pricing"
            subtitle="Flexible packages to fit your recording needs."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-xl border p-6 text-center relative ${
                  pkg.popular
                    ? "border-accent bg-accent/5 shadow-lg"
                    : "border-border bg-card"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    Best Value
                  </div>
                )}
                <h3 className="font-bold text-lg mb-1">{pkg.name}</h3>
                {pkg.duration && (
                  <p className="text-sm text-muted-foreground mb-2">
                    {pkg.duration}
                  </p>
                )}
                <div className="text-3xl font-bold text-primary mb-1">
                  {pkg.price}
                </div>
                <div className="text-sm text-muted-foreground mb-4">
                  {pkg.unit}
                </div>
                <p className="text-xs text-accent font-medium">{pkg.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Process */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeading
            title="Booking Process"
            subtitle="Simple steps to secure your studio time."
          />
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {bookingProcess.map((step, index) => (
              <div
                key={step.step}
                className="flex items-center gap-4 bg-card rounded-xl border border-border p-4 min-w-[200px]"
              >
                <div className="w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">
                  {step.step}
                </div>
                <div>
                  <h4 className="font-semibold">{step.title}</h4>
                  <p className="text-xs text-muted-foreground">
                    {step.description}
                  </p>
                </div>
                {index < bookingProcess.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-muted-foreground hidden lg:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="section-padding bg-primary" id="booking-form">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-display-3 text-primary-foreground text-center mb-8">
              Book Your Session
            </h2>
            <form
              name="studio-booking"
              method="POST"
              data-netlify="true"
              className="bg-card rounded-2xl p-8 space-y-6"
            >
              <input
                type="hidden"
                name="form-name"
                value="studio-booking"
              />
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">
                    Full Name <span className="text-accent">*</span>
                  </Label>
                  <Input id="name" name="name" required placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">
                    Email <span className="text-accent">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">
                    Phone <span className="text-accent">*</span>
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="0700 000 000"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="date">
                    Preferred Date <span className="text-accent">*</span>
                  </Label>
                  <Input id="date" name="date" type="date" required />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="time">Preferred Time</Label>
                  <Input id="time" name="time" type="time" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="duration">
                    Duration <span className="text-accent">*</span>
                  </Label>
                  <Select name="duration" required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2-hours">2 Hours</SelectItem>
                      <SelectItem value="4-hours">Half Day (4 Hours)</SelectItem>
                      <SelectItem value="8-hours">Full Day (8 Hours)</SelectItem>
                      <SelectItem value="weekly">Weekly Pass</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="recording-type">Recording Type</Label>
                <Select name="recording-type">
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="podcast">Podcast</SelectItem>
                    <SelectItem value="voiceover">Voiceover</SelectItem>
                    <SelectItem value="music">Music Recording</SelectItem>
                    <SelectItem value="interview">Interview</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="guests">Number of People</Label>
                <Select name="guests">
                  <SelectTrigger>
                    <SelectValue placeholder="Select number" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 Person</SelectItem>
                    <SelectItem value="2">2 People</SelectItem>
                    <SelectItem value="3">3 People</SelectItem>
                    <SelectItem value="4">4 People</SelectItem>
                    <SelectItem value="5+">5+ People</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="requirements">Additional Requirements</Label>
                <Textarea
                  id="requirements"
                  name="requirements"
                  placeholder="Any special requirements or questions..."
                  rows={4}
                />
              </div>
              <Button type="submit" variant="accent" size="lg" className="w-full">
                Request Booking
                <ArrowRight className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeading
            title="Studio FAQ"
            subtitle="Common questions about our recording studio."
          />
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {studioFaqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-muted">
        <div className="container-custom text-center">
          <h2 className="text-heading-1 mb-4">Have Questions?</h2>
          <p className="text-muted-foreground mb-6">
            Contact us for more information about our studio services.
          </p>
          <Button variant="default" size="lg" asChild>
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
