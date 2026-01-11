import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ServiceCard } from "@/components/shared/ServiceCard";
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
} from "lucide-react";

const allServices = [
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
      "Cinematic storytelling from concept to final delivery, capturing your brand's essence.",
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
    title: "Branding Services",
    description:
      "Complete brand identities that stand out and resonate with your target audience.",
    href: "/services/branding",
  },
  {
    icon: Image,
    title: "Ad Creative",
    description:
      "Scroll-stopping ad creatives that drive clicks, conversions, and sales.",
    href: "/services/ad-creative",
  },
  {
    icon: Video,
    title: "Motion Design",
    description:
      "Dynamic motion graphics and animations that bring your ideas to life.",
    href: "/services/motion-design",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description:
      "Engaging email campaigns that nurture leads and drive customer loyalty.",
    href: "/services/email-marketing",
  },
  {
    icon: Users,
    title: "Influencer Marketing",
    description:
      "Strategic partnerships with influencers to amplify your brand's reach.",
    href: "/services/influencer-marketing",
  },
  {
    icon: PenTool,
    title: "Copywriting",
    description:
      "Compelling copy that persuades, engages, and converts your audience.",
    href: "/services/copywriting",
  },
  {
    icon: Cpu,
    title: "AI-Powered Creative",
    description:
      "Cutting-edge AI tools to accelerate creative production and innovation.",
    href: "/services/ai-creative",
  },
  {
    icon: LineChart,
    title: "Digital Strategy",
    description:
      "Data-driven strategies to maximize your digital presence and ROI.",
    href: "/services/digital-strategy",
  },
  {
    icon: Mic,
    title: "Podcast Studio",
    description:
      "Professional recording studio with top-tier equipment and audio engineering.",
    href: "/studio",
  },
];

const subscriptionBenefits = [
  "Predictable monthly costs",
  "No hidden fees",
  "Pause or cancel anytime",
  "Dedicated account manager",
  "Priority turnaround times",
  "Quarterly strategy sessions",
];

const projectBenefits = [
  "Pay only for what you need",
  "Flexible scope and timeline",
  "One-time deliverables",
  "Ideal for specific campaigns",
  "Clear milestones and pricing",
  "Full ownership of assets",
];

export default function Services() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-primary">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-display-2 md:text-display-1 text-primary-foreground mb-6">
              Our <span className="text-accent">Services</span>
            </h1>
            <p className="text-body-lg text-primary-foreground/90">
              Full-spectrum creative solutions to elevate your brand. From
              design to video, web to social—we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* All Services Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeading
            title="What We Offer"
            subtitle="Comprehensive creative services tailored to your needs."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allServices.map((service) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                href={service.href}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <SectionHeading
            title="Choose Your Model"
            subtitle="Flexible engagement options to match your business needs."
          />
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Subscription */}
            <div className="bg-card rounded-2xl border border-border p-8 card-hover">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                <Sparkles className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-display-3 mb-2">Subscription</h3>
              <p className="text-accent font-bold text-lg mb-4">
                From 500K UGX/month
              </p>
              <p className="text-muted-foreground mb-6">
                Perfect for ongoing creative needs. Get unlimited requests with
                predictable monthly costs.
              </p>
              <ul className="space-y-3 mb-8">
                {subscriptionBenefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-accent" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <Button variant="accent" className="w-full" asChild>
                <Link to="/pricing">View Plans</Link>
              </Button>
            </div>

            {/* Project-Based */}
            <div className="bg-card rounded-2xl border border-border p-8 card-hover">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Palette className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-display-3 mb-2">Project-Based</h3>
              <p className="text-primary font-bold text-lg mb-4">
                Custom quotes
              </p>
              <p className="text-muted-foreground mb-6">
                Ideal for one-time projects or specific campaigns with defined
                scope and timeline.
              </p>
              <ul className="space-y-3 mb-8">
                {projectBenefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-primary" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <Button variant="default" className="w-full" asChild>
                <Link to="/contact">Get a Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary">
        <div className="container-custom text-center">
          <h2 className="text-display-3 text-primary-foreground mb-6">
            Not Sure What You Need?
          </h2>
          <p className="text-primary-foreground/80 text-body-lg mb-8 max-w-2xl mx-auto">
            Schedule a free consultation and let's discuss how we can help your
            brand grow.
          </p>
          <Button variant="cta" size="xl" asChild>
            <Link to="/contact">
              Schedule Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
