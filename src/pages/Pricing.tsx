import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, ArrowRight, Star, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const subscriptionPlans = [
  {
    name: "Essentials",
    price: "500,000",
    description: "Perfect for startups and small businesses getting started.",
    features: [
      "10 graphic designs/month",
      "2 rounds of revisions",
      "48-hour turnaround",
      "Basic brand guidelines",
      "Email support",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "1,200,000",
    description: "Ideal for growing brands with ongoing creative needs.",
    features: [
      "20 graphic designs/month",
      "4 short-form videos",
      "3 rounds of revisions",
      "24-hour turnaround",
      "Social media calendar",
      "Monthly strategy call",
      "Priority support",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "3,000,000",
    description: "Full-service creative for established brands.",
    features: [
      "Unlimited graphic design (sequential)",
      "8 short-form + 2 long-form videos/month",
      "Unlimited revisions",
      "Dedicated account manager",
      "Weekly strategy sessions",
      "12-hour priority turnaround",
      "Custom brand assets",
      "24/7 support",
    ],
    popular: false,
  },
];

const addOns = [
  { name: "Social Media Management", price: "+800,000 UGX/month" },
  { name: "Email Marketing", price: "+600,000 UGX/month" },
  { name: "Website Maintenance", price: "+300,000 UGX/month" },
  { name: "Studio Access Pass", price: "+400,000 UGX/month" },
];

const projectPricing = {
  branding: [
    { service: "Logo Design", price: "800K - 2M UGX" },
    { service: "Complete Brand Identity", price: "3M - 8M UGX" },
    { service: "Brand Refresh", price: "2M - 5M UGX" },
    { service: "Brand Manual", price: "1.5M UGX" },
  ],
  video: [
    { service: "Music Video", price: "5M - 15M UGX" },
    { service: "Corporate Video", price: "3M - 8M UGX" },
    { service: "Documentary", price: "8M - 20M UGX" },
    { service: "Explainer Video (90s)", price: "2M UGX" },
  ],
  web: [
    { service: "Landing Page", price: "1.5M UGX" },
    { service: "Business Website (5-10 pages)", price: "3M - 5M UGX" },
    { service: "E-commerce", price: "5M - 12M UGX" },
    { service: "Custom Web App", price: "8M+ UGX" },
  ],
  specialized: [
    { service: "Motion Graphics (30s)", price: "1.2M UGX" },
    { service: "3D Animation (30s)", price: "2M UGX" },
    { service: "Print Design Package", price: "800K - 2M UGX" },
    { service: "Ad Creative Campaign", price: "1.5M UGX" },
  ],
};

const faqs = [
  {
    question: "Can I switch between plans?",
    answer:
      "Yes! You can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept mobile money (MTN, Airtel), bank transfers, and international cards (Visa, Mastercard).",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "We offer a satisfaction guarantee. If you're not happy with our work, we'll make it right or provide a refund for the unused portion of your subscription.",
  },
  {
    question: "Can I pause my subscription?",
    answer:
      "Yes, you can pause your subscription for up to 2 months per year. Just let us know at least 7 days before your next billing date.",
  },
  {
    question: "What if I exceed my monthly limits?",
    answer:
      "Additional requests are billed at discounted per-item rates. We'll always notify you before any extra charges are applied.",
  },
];

export default function Pricing() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-primary">
        <div className="container-custom text-center">
          <h1 className="text-display-2 md:text-display-1 text-primary-foreground mb-6">
            Transparent <span className="text-accent">Pricing</span>
          </h1>
          <p className="text-body-lg text-primary-foreground/90 max-w-2xl mx-auto">
            No hidden fees. Cancel anytime. Choose the plan that fits your needs
            and budget.
          </p>
        </div>
      </section>

      {/* Subscription Plans */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeading
            title="Subscription Plans"
            subtitle="Predictable pricing for ongoing creative needs."
          />
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {subscriptionPlans.map((plan) => (
              <div
                key={plan.name}
                className={cn(
                  "rounded-2xl border p-8 relative",
                  plan.popular
                    ? "border-accent bg-accent/5 shadow-lg scale-105"
                    : "border-border bg-card card-hover"
                )}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    Most Popular
                  </div>
                )}
                <h3 className="text-heading-1 mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-display-3 font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">UGX/mo</span>
                </div>
                <p className="text-muted-foreground text-sm mb-6">
                  {plan.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant={plan.popular ? "accent" : "outline"}
                  className="w-full"
                  asChild
                >
                  <Link to="/contact">Get Started</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-Ons */}
      <section className="py-16 bg-muted">
        <div className="container-custom">
          <h3 className="text-heading-1 text-center mb-8">Add-On Services</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {addOns.map((addon) => (
              <div
                key={addon.name}
                className="bg-card rounded-lg border border-border p-4 text-center"
              >
                <div className="font-semibold mb-1">{addon.name}</div>
                <div className="text-accent font-bold">{addon.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project-Based Pricing */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeading
            title="Project-Based Pricing"
            subtitle="One-time projects with clear deliverables and pricing."
          />
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Branding */}
            <div className="bg-card rounded-xl border border-border p-6">
              <h4 className="text-heading-2 mb-4 text-primary">
                Branding & Identity
              </h4>
              <ul className="space-y-3">
                {projectPricing.branding.map((item) => (
                  <li
                    key={item.service}
                    className="flex justify-between items-center py-2 border-b border-border last:border-0"
                  >
                    <span>{item.service}</span>
                    <span className="font-semibold text-accent">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Video */}
            <div className="bg-card rounded-xl border border-border p-6">
              <h4 className="text-heading-2 mb-4 text-primary">
                Video Production
              </h4>
              <ul className="space-y-3">
                {projectPricing.video.map((item) => (
                  <li
                    key={item.service}
                    className="flex justify-between items-center py-2 border-b border-border last:border-0"
                  >
                    <span>{item.service}</span>
                    <span className="font-semibold text-accent">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Web */}
            <div className="bg-card rounded-xl border border-border p-6">
              <h4 className="text-heading-2 mb-4 text-primary">
                Web Development
              </h4>
              <ul className="space-y-3">
                {projectPricing.web.map((item) => (
                  <li
                    key={item.service}
                    className="flex justify-between items-center py-2 border-b border-border last:border-0"
                  >
                    <span>{item.service}</span>
                    <span className="font-semibold text-accent">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Specialized */}
            <div className="bg-card rounded-xl border border-border p-6">
              <h4 className="text-heading-2 mb-4 text-primary">
                Specialized Services
              </h4>
              <ul className="space-y-3">
                {projectPricing.specialized.map((item) => (
                  <li
                    key={item.service}
                    className="flex justify-between items-center py-2 border-b border-border last:border-0"
                  >
                    <span>{item.service}</span>
                    <span className="font-semibold text-accent">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Got questions? We've got answers."
          />
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    <span className="flex items-center gap-2">
                      <HelpCircle className="w-5 h-5 text-accent" />
                      {faq.question}
                    </span>
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
      <section className="py-24 bg-primary">
        <div className="container-custom text-center">
          <h2 className="text-display-3 text-primary-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-primary-foreground/80 text-body-lg mb-8 max-w-2xl mx-auto">
            Schedule a free consultation to discuss your needs and find the
            perfect plan.
          </p>
          <Button variant="cta" size="xl" asChild>
            <Link to="/contact">
              Schedule Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
