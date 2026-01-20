import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/shared/SectionHeading";
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
import { Checkbox } from "@/components/ui/checkbox";
import {
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  Mic,
  Send,
  Clock,
} from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const contactOptions = [
  {
    icon: MessageSquare,
    title: "Get a Quote",
    description: "Fill out the form below",
    action: "scroll",
  },
  {
    icon: Mic,
    title: "Book Studio",
    description: "Reserve recording time",
    href: "/studio",
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "0700 488 870",
    href: "tel:0700488870",
  },
  {
    icon: Mail,
    title: "Email Us",
    description: "info@9yards.co.ug",
    href: "mailto:info@9yards.co.ug",
  },
];

const services = [
  "Graphic Design",
  "Video Production",
  "Social Media Management",
  "Website Development",
  "Branding Services",
  "Ad Creative",
  "Motion Design",
  "Email Marketing",
  "Influencer Marketing",
  "AI-Powered Creative",
  "Digital Strategy",
  "Podcast Studio",
  "Multiple Services",
  "Not Sure Yet",
];

const budgetRanges = [
  "Under 1M UGX",
  "1M - 3M UGX",
  "3M - 5M UGX",
  "5M - 10M UGX",
  "10M+ UGX",
  "Not Sure Yet",
];

const timelines = [
  "Urgent (Within 1 week)",
  "Soon (2-4 weeks)",
  "Planned (1-3 months)",
  "Flexible",
];

const hearAboutOptions = [
  "Google Search",
  "Social Media",
  "Referral",
  "Previous Client",
  "Event/Conference",
  "Other",
];

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    projectType: "",
    budget: "",
    timeline: "",
    details: "",
    hearAbout: "",
    newsletter: true,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // In production, this would submit to Netlify Forms
    console.log("Form submitted:", formData);

    // Redirect to thank you page
    window.location.href = "/thank-you/contact";
  };

  const scrollToForm = () => {
    document.getElementById("contact-form")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-primary">
        <div className="container-custom text-center">
          <h1 className="text-display-2 md:text-display-1 text-primary-foreground mb-6">
            Get In <span className="text-accent">Touch</span>
          </h1>
          <p className="text-body-lg text-primary-foreground/90 max-w-2xl mx-auto flex items-center justify-center gap-2">
            <Clock className="w-5 h-5" />
            We respond within 2 hours during business hours
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-12 bg-background -mt-8 relative z-10">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactOptions.map((option) => (
              <div key={option.title}>
                {option.action === "scroll" ? (
                  <button
                    onClick={scrollToForm}
                    className="w-full p-6 rounded-xl bg-card border border-border card-hover text-left"
                  >
                    <option.icon className="w-8 h-8 text-accent mb-3" />
                    <h3 className="font-bold mb-1">{option.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {option.description}
                    </p>
                  </button>
                ) : option.href?.startsWith("/") ? (
                  <Link
                    to={option.href}
                    className="block p-6 rounded-xl bg-card border border-border card-hover"
                  >
                    <option.icon className="w-8 h-8 text-accent mb-3" />
                    <h3 className="font-bold mb-1">{option.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {option.description}
                    </p>
                  </Link>
                ) : (
                  <a
                    href={option.href}
                    className="block p-6 rounded-xl bg-card border border-border card-hover"
                  >
                    <option.icon className="w-8 h-8 text-accent mb-3" />
                    <h3 className="font-bold mb-1">{option.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {option.description}
                    </p>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding bg-muted" id="contact-form">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <SectionHeading
                title="Tell Us About Your Project"
                subtitle="Fill out the form below and we'll get back to you within 2 hours."
                align="left"
              />

              <form
                onSubmit={handleSubmit}
                name="contact"
                method="POST"
                data-netlify="true"
                className="space-y-6"
              >
                <input type="hidden" name="form-name" value="contact" />
                <input
                  type="text"
                  name="bot-field"
                  style={{ display: "none" }}
                />

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">
                      Full Name <span className="text-accent">*</span>
                    </Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      required
                      placeholder="John Doe"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">
                      Email Address <span className="text-accent">*</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">
                      Phone Number <span className="text-accent">*</span>
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="0700 000 000"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name</Label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="Your Company"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="service">
                      Service Interested In <span className="text-accent">*</span>
                    </Label>
                    <Select
                      name="service"
                      required
                      onValueChange={(value) =>
                        setFormData({ ...formData, service: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>
                      Project Type <span className="text-accent">*</span>
                    </Label>
                    <div className="flex gap-4 pt-2">
                      {["One-time", "Monthly", "Not Sure"].map((type) => (
                        <label
                          key={type}
                          className="flex items-center gap-2 cursor-pointer"
                        >
                          <input
                            type="radio"
                            name="projectType"
                            value={type}
                            checked={formData.projectType === type}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                projectType: e.target.value,
                              })
                            }
                            className="w-4 h-4 accent-accent"
                            required
                          />
                          <span className="text-sm">{type}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="budget">Budget Range</Label>
                    <Select
                      name="budget"
                      onValueChange={(value) =>
                        setFormData({ ...formData, budget: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        {budgetRanges.map((range) => (
                          <SelectItem key={range} value={range}>
                            {range}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="timeline">
                      Timeline <span className="text-accent">*</span>
                    </Label>
                    <Select
                      name="timeline"
                      required
                      onValueChange={(value) =>
                        setFormData({ ...formData, timeline: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select timeline" />
                      </SelectTrigger>
                      <SelectContent>
                        {timelines.map((timeline) => (
                          <SelectItem key={timeline} value={timeline}>
                            {timeline}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="details">
                    Project Details <span className="text-accent">*</span>
                  </Label>
                  <Textarea
                    id="details"
                    name="details"
                    required
                    placeholder="Tell us about your project, goals, and any specific requirements..."
                    rows={5}
                    value={formData.details}
                    onChange={(e) =>
                      setFormData({ ...formData, details: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="hearAbout">How did you hear about us?</Label>
                  <Select
                    name="hearAbout"
                    onValueChange={(value) =>
                      setFormData({ ...formData, hearAbout: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      {hearAboutOptions.map((option) => (
                        <SelectItem key={option} value={option}>
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center gap-2">
                  <Checkbox
                    id="newsletter"
                    name="newsletter"
                    checked={formData.newsletter}
                    onCheckedChange={(checked) =>
                      setFormData({ ...formData, newsletter: checked === true })
                    }
                  />
                  <Label htmlFor="newsletter" className="text-sm cursor-pointer">
                    Subscribe to our newsletter for creative tips and updates
                  </Label>
                </div>

                <Button
                  type="submit"
                  variant="accent"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="bg-card rounded-xl border border-border p-6">
                <h3 className="font-bold text-lg mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <a
                    href="tel:0700488870"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Phone className="w-5 h-5 text-accent" />
                    0700 488 870
                  </a>
                  <a
                    href="mailto:info@9yards.co.ug"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Mail className="w-5 h-5 text-accent" />
                    info@9yards.co.ug
                  </a>
                  <div className="flex items-start gap-3 text-muted-foreground">
                    <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
                    <span>Kampala, Uganda</span>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-xl border border-border p-6">
                <h3 className="font-bold text-lg mb-4">Business Hours</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span className="font-medium">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday</span>
                    <span className="font-medium">9:00 AM - 3:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-card rounded-xl border border-border overflow-hidden">
                <div className="h-48 bg-muted flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <MapPin className="w-8 h-8 mx-auto mb-2" />
                    <p className="text-sm">Google Maps</p>
                    <p className="text-xs">Kampala, Uganda</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
