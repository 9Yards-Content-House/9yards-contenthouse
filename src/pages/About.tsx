import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Target,
  Heart,
  Lightbulb,
  Users,
  Zap,
  Globe,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const values = [
  {
    icon: Target,
    title: "Excellence",
    description:
      "We pursue the highest standards in everything we create, never settling for mediocre.",
  },
  {
    icon: Heart,
    title: "Passion",
    description:
      "Creative work fueled by genuine love for design, storytelling, and innovation.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Embracing new technologies and approaches to stay ahead of the creative curve.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Working as true partners with our clients to achieve their vision and goals.",
  },
  {
    icon: Zap,
    title: "Speed",
    description:
      "Quick turnarounds without compromising quality. We respect your timelines.",
  },
  {
    icon: Globe,
    title: "African Pride",
    description:
      "Proudly Ugandan, globally competitive. Showcasing African creativity to the world.",
  },
];

const process = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We dive deep into your brand, goals, and target audience to understand your unique needs.",
  },
  {
    step: "02",
    title: "Strategy",
    description:
      "Our team crafts a comprehensive creative strategy tailored to your objectives.",
  },
  {
    step: "03",
    title: "Creation",
    description:
      "Our experts bring ideas to life with cutting-edge tools and boundless creativity.",
  },
  {
    step: "04",
    title: "Refinement",
    description:
      "We collaborate closely with you to refine every detail until it's perfect.",
  },
  {
    step: "05",
    title: "Delivery",
    description:
      "Final assets delivered on time, ready to make an impact in your market.",
  },
];

const differentiators = [
  "AI-powered workflows for faster delivery",
  "Subscription plans starting at 500K UGX",
  "Full-spectrum creative services under one roof",
  "Local expertise with international quality standards",
  "Dedicated account management for every client",
  "Flexible engagement models to suit your needs",
];

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={heroBg} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-display-2 md:text-display-1 text-primary-foreground mb-6">
              About 9Yards <span className="text-accent">Content House</span>
            </h1>
            <p className="text-body-lg text-primary-foreground/90">
              Kampala's premier creative agency, delivering world-class design,
              video, and digital marketing to brands across East Africa and
              beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                title="Our Story"
                subtitle="From a small studio in Kampala to East Africa's leading creative powerhouse."
                align="left"
              />
              <div className="space-y-4 text-muted-foreground">
                <p>
                  9Yards Content House was born from a simple belief: that
                  African creativity deserves a global stage. Founded in
                  Kampala, Uganda, we set out to prove that world-class creative
                  work doesn't need to come from London or New York—it can come
                  from the heart of Africa.
                </p>
                <p>
                  What started as a small team of passionate designers and
                  filmmakers has grown into a full-service creative agency
                  serving clients across Uganda, East Africa, and
                  internationally. We've helped hundreds of brands tell their
                  stories, build their identities, and connect with their
                  audiences.
                </p>
                <p>
                  Today, we combine the best of human creativity with AI-powered
                  tools to deliver exceptional results at accessible prices. Our
                  subscription model means that even startups and small
                  businesses can access the same quality creative services as
                  major corporations.
                </p>
                <p>
                  We're not just building brands—we're building a legacy of
                  African creative excellence that the world will remember.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src={heroBg}
                alt="9Yards Team"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-6 rounded-xl">
                <div className="text-4xl font-bold">5+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <SectionHeading
            title="What Makes Us Different"
            subtitle="We've reimagined how creative services work for modern businesses."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {differentiators.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border"
              >
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeading
            title="Our Values"
            subtitle="The principles that guide everything we do at 9Yards."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="p-6 rounded-xl bg-card border border-border card-hover text-center"
              >
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-heading-3 mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <SectionHeading
            title="Our Process"
            subtitle="A proven methodology that delivers results, every time."
          />
          <div className="max-w-4xl mx-auto">
            {process.map((step, index) => (
              <div key={step.step} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                    {step.step}
                  </div>
                  {index < process.length - 1 && (
                    <div className="w-0.5 h-12 bg-border mx-auto mt-2" />
                  )}
                </div>
                <div className="pt-3">
                  <h3 className="text-heading-2 mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeading
            title="Our Team"
            subtitle="A diverse team of creative professionals united by passion."
          />
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-muted-foreground mb-8">
              Our team combines decades of experience across design, video
              production, marketing, and technology. From seasoned art directors
              to emerging talents, we bring diverse perspectives and skills to
              every project.
            </p>
            <div className="bg-muted rounded-xl p-8 border border-border">
              <p className="text-lg font-semibold mb-2">
                Team photos coming soon
              </p>
              <p className="text-muted-foreground text-sm">
                We're currently working on professional team photography. Check
                back soon!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary">
        <div className="container-custom text-center">
          <h2 className="text-display-3 text-primary-foreground mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-primary-foreground/80 text-body-lg mb-8 max-w-2xl mx-auto">
            Let's create something amazing. Start a conversation with our team
            today.
          </p>
          <Button variant="cta" size="xl" asChild>
            <Link to="/contact">
              Get In Touch
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
