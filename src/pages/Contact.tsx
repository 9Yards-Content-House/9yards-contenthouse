import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { SEO, schemas } from "@/components/shared/SEO";
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
import { Phone, Mail, MapPin, Send, ChevronDown } from "lucide-react";

const services = [
  "Video Production",
  "Graphic Design",
  "Social Media Marketing",
  "Website Development",
  "Branding",
  "Podcast Production",
  "Multiple Services",
  "Not Sure Yet",
];

const budgetRanges = [
  "Under 1M UGX",
  "1M - 3M UGX",
  "3M - 5M UGX",
  "5M - 10M UGX",
  "10M+ UGX",
  "Let's Discuss",
];

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  // Form validation
  const validateField = (name: string, value: string): string => {
    switch (name) {
      case "fullName":
        return value.trim().length < 2 ? "Please enter your full name" : "";
      case "email":
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? "Please enter a valid email address" : "";
      case "service":
        return !value ? "Please select a service" : "";
      case "message":
        return value.trim().length < 10 ? "Please describe your project (at least 10 characters)" : "";
      default:
        return "";
    }
  };

  const handleBlur = (name: string) => {
    setTouched(prev => ({ ...prev, [name]: true }));
    const error = validateField(name, formData[name as keyof typeof formData]);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all required fields
    const newErrors: Record<string, string> = {};
    ["fullName", "email", "service", "message"].forEach(field => {
      const error = validateField(field, formData[field as keyof typeof formData]);
      if (error) newErrors[field] = error;
    });
    
    setErrors(newErrors);
    setTouched({ fullName: true, email: true, service: true, message: true });
    
    // If there are errors, don't submit
    if (Object.keys(newErrors).some(key => newErrors[key])) {
      // Focus first error field
      const firstErrorField = document.querySelector('[aria-invalid="true"]') as HTMLElement;
      firstErrorField?.focus();
      return;
    }
    
    setIsSubmitting(true);

    try {
      // Submit form data to Netlify Forms (or your backend)
      const formElement = e.target as HTMLFormElement;
      const formDataObj = new FormData(formElement);
      
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formDataObj as unknown as Record<string, string>).toString(),
      });

      // Redirect on success
      window.location.href = "/thank-you/contact";
    } catch {
      // If form submission fails, still redirect (fallback behavior)
      window.location.href = "/thank-you/contact";
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToForm = () => {
    document.getElementById("contact-form")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <Layout hideFooterCta>
      <SEO 
        title="Contact Us | 9Yards Content House Kampala"
        description="Get in touch with Kampala's premier creative agency. Let's discuss your video production, design, or marketing project. Call +256-700-488-870."
        url="/contact"
        schema={schemas.localBusiness}
      />
      {/* Hero Section */}
      <section 
        className="relative min-h-[55vh] sm:min-h-[60vh] lg:min-h-[65vh] flex items-center overflow-hidden"
        aria-labelledby="contact-hero-heading"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <img
            src="/images/team/team.jpg"
            alt=""
            className="w-full h-full object-cover"
            loading="eager"
            decoding="sync"
            fetchPriority="high"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1c1e70]/95 via-[#1c1e70]/85 to-[#1c1e70]/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1c1e70] via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 pt-28 pb-20 sm:pt-32 sm:pb-24 lg:pt-36 lg:pb-28">
            <div className="max-w-2xl">
              {/* Eyebrow */}
              <p 
                className="text-accent font-semibold text-xs sm:text-sm uppercase tracking-widest mb-3 sm:mb-4 opacity-0 animate-fade-in-up [animation-delay:100ms] [animation-fill-mode:forwards] motion-reduce:animate-none motion-reduce:opacity-100"
                aria-hidden="true"
              >
                Get In Touch
              </p>

              {/* Headline */}
              <h1 
                id="contact-hero-heading"
                className="text-[1.75rem] sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.15] sm:leading-[1.1] mb-4 sm:mb-5 tracking-tight opacity-0 animate-fade-in-up [animation-delay:200ms] [animation-fill-mode:forwards] motion-reduce:animate-none motion-reduce:opacity-100"
              >
                Let's create something
                <br className="hidden xs:block" />
                <span className="text-accent"> amazing together</span>
              </h1>

              {/* Subtitle */}
              <p className="text-sm sm:text-base lg:text-lg text-white/80 mb-6 sm:mb-8 max-w-md lg:max-w-lg leading-relaxed opacity-0 animate-fade-in-up [animation-delay:400ms] [animation-fill-mode:forwards] motion-reduce:animate-none motion-reduce:opacity-100">
                Ready to bring your vision to life? Drop us a message and we'll get back to you within a few hours.
              </p>

              {/* CTA Button */}
              <div className="opacity-0 animate-fade-in-up [animation-delay:600ms] [animation-fill-mode:forwards] motion-reduce:animate-none motion-reduce:opacity-100">
                <Button
                  variant="accent"
                  size="lg"
                  onClick={scrollToForm}
                  className="px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base touch-manipulation"
                  aria-label="Scroll down to contact form"
                >
                  Start a Conversation
                  <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 ml-2" aria-hidden="true" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Options */}
      <section 
        className="relative z-20 -mt-12 sm:-mt-16 lg:-mt-20"
        aria-label="Quick contact options"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
            {/* Phone */}
            <a
              href="tel:+256700488870"
              className="group bg-background rounded-xl sm:rounded-2xl border border-border p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-xl hover:border-accent/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 transition-all duration-300 touch-manipulation flex md:flex-col items-center md:items-start gap-4 md:gap-0"
              aria-label="Call us at +256 700 488 870"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-accent/10 flex items-center justify-center md:mb-4 group-hover:bg-accent/20 group-focus-visible:bg-accent/20 transition-colors flex-shrink-0">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-accent" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-sm sm:text-base mb-0.5 sm:mb-1">Call Us</h3>
                <p className="text-muted-foreground text-xs sm:text-sm">+256 700 488 870</p>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:contenthouse@9yards.co.ug"
              className="group bg-background rounded-xl sm:rounded-2xl border border-border p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-xl hover:border-accent/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 transition-all duration-300 touch-manipulation flex md:flex-col items-center md:items-start gap-4 md:gap-0"
              aria-label="Email us at contenthouse@9yards.co.ug"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-accent/10 flex items-center justify-center md:mb-4 group-hover:bg-accent/20 group-focus-visible:bg-accent/20 transition-colors flex-shrink-0">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-accent" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-sm sm:text-base mb-0.5 sm:mb-1">Email Us</h3>
                <p className="text-muted-foreground text-xs sm:text-sm break-all md:break-normal">contenthouse@9yards.co.ug</p>
              </div>
            </a>

            {/* Location */}
            <div 
              className="bg-background rounded-xl sm:rounded-2xl border border-border p-4 sm:p-6 lg:p-8 shadow-lg flex md:flex-col items-center md:items-start gap-4 md:gap-0"
              role="group"
              aria-label="Our location"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-accent/10 flex items-center justify-center md:mb-4 flex-shrink-0">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-accent" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-sm sm:text-base mb-0.5 sm:mb-1">Visit Us</h3>
                <p className="text-muted-foreground text-xs sm:text-sm">Canoga Heights, Lower Kkonge</p>
                <p className="text-muted-foreground text-xs sm:text-sm">Off Lukuli Road</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section 
        className="py-16 sm:py-20 lg:py-28 bg-background scroll-mt-20" 
        id="contact-form"
        aria-labelledby="form-section-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header - Mobile First, Centered */}
          <div className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0 mb-10 sm:mb-12 lg:hidden">
            <p className="text-accent font-semibold text-xs sm:text-sm uppercase tracking-widest mb-2 sm:mb-3">
              Contact Form
            </p>
            <h2 
              id="form-section-heading-mobile"
              className="text-2xl sm:text-3xl font-bold text-foreground leading-tight mb-3 sm:mb-4"
            >
              Tell us about your project
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Fill out the form and we'll get back to you within 24 hours.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 xl:gap-16">
            {/* Left: Info - Desktop Only */}
            <div className="hidden lg:block lg:col-span-2">
              <div className="lg:sticky lg:top-32">
                {/* Section Header */}
                <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
                  Contact Form
                </p>
                <h2 
                  id="form-section-heading"
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-5"
                >
                  Tell us about your project
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Fill out the form and our team will get back to you within 24 hours. 
                  We're excited to learn about your vision and how we can help bring it to life.
                </p>

                {/* Trust Indicators */}
                <div className="space-y-4 pt-6 border-t border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-500" aria-hidden="true" />
                    <span className="text-sm text-muted-foreground">Usually respond within 2-4 hours</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-500" aria-hidden="true" />
                    <span className="text-sm text-muted-foreground">No spam, we promise</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-500" aria-hidden="true" />
                    <span className="text-sm text-muted-foreground">Free consultation included</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-3">
              <form
                onSubmit={handleSubmit}
                name="contact"
                method="POST"
                data-netlify="true"
                className="bg-muted/30 sm:bg-muted/50 rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 xl:p-10 border border-border"
                aria-label="Contact form"
                noValidate
              >
                <input type="hidden" name="form-name" value="contact" />
                <input type="text" name="bot-field" style={{ display: "none" }} tabIndex={-1} aria-hidden="true" />

                <div className="space-y-4 sm:space-y-5 lg:space-y-6">
                  {/* Name & Email Row */}
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                    <div className="space-y-1.5 sm:space-y-2">
                      <Label htmlFor="fullName" className="text-xs sm:text-sm font-medium">
                        Full Name <span className="text-accent" aria-label="required">*</span>
                      </Label>
                      <Input
                        id="fullName"
                        name="fullName"
                        required
                        autoComplete="name"
                        placeholder="John Doe"
                        value={formData.fullName}
                        onChange={(e) => handleChange("fullName", e.target.value)}
                        onBlur={() => handleBlur("fullName")}
                        className="h-11 sm:h-12 text-base bg-background border-border focus:border-accent focus-visible:ring-accent/30"
                        aria-required="true"
                        aria-invalid={errors.fullName ? "true" : undefined}
                        aria-describedby={errors.fullName ? "fullName-error" : undefined}
                      />
                      {errors.fullName && touched.fullName && (
                        <p id="fullName-error" role="alert" className="text-xs text-red-500 mt-1">
                          {errors.fullName}
                        </p>
                      )}
                    </div>
                    <div className="space-y-1.5 sm:space-y-2">
                      <Label htmlFor="email" className="text-xs sm:text-sm font-medium">
                        Email Address <span className="text-accent" aria-label="required">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        onBlur={() => handleBlur("email")}
                        className="h-11 sm:h-12 text-base bg-background border-border focus:border-accent focus-visible:ring-accent/30"
                        aria-required="true"
                        aria-invalid={errors.email ? "true" : undefined}
                        aria-describedby={errors.email ? "email-error" : undefined}
                      />
                      {errors.email && touched.email && (
                        <p id="email-error" role="alert" className="text-xs text-red-500 mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Phone & Company Row */}
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                    <div className="space-y-1.5 sm:space-y-2">
                      <Label htmlFor="phone" className="text-xs sm:text-sm font-medium">
                        Phone Number <span className="text-muted-foreground text-xs">(optional)</span>
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        placeholder="+256 700 000 000"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        className="h-11 sm:h-12 text-base bg-background border-border focus:border-accent focus-visible:ring-accent/30"
                      />
                    </div>
                    <div className="space-y-1.5 sm:space-y-2">
                      <Label htmlFor="company" className="text-xs sm:text-sm font-medium">
                        Company Name <span className="text-muted-foreground text-xs">(optional)</span>
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        autoComplete="organization"
                        placeholder="Your Company"
                        value={formData.company}
                        onChange={(e) => handleChange("company", e.target.value)}
                        className="h-11 sm:h-12 text-base bg-background border-border focus:border-accent focus-visible:ring-accent/30"
                      />
                    </div>
                  </div>

                  {/* Service & Budget Row */}
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                    <div className="space-y-1.5 sm:space-y-2">
                      <Label htmlFor="service" className="text-xs sm:text-sm font-medium">
                        Service Interested In <span className="text-accent" aria-label="required">*</span>
                      </Label>
                      <Select
                        name="service"
                        required
                        onValueChange={(value) => {
                          handleChange("service", value);
                          handleBlur("service");
                        }}
                      >
                        <SelectTrigger 
                          className="h-11 sm:h-12 text-base bg-background border-border focus:ring-accent/30"
                          aria-required="true"
                          aria-invalid={errors.service ? "true" : undefined}
                          aria-describedby={errors.service ? "service-error" : undefined}
                        >
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service} value={service} className="text-base py-2.5">
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.service && touched.service && (
                        <p id="service-error" role="alert" className="text-xs text-red-500 mt-1">
                          {errors.service}
                        </p>
                      )}
                    </div>
                    <div className="space-y-1.5 sm:space-y-2">
                      <Label htmlFor="budget" className="text-xs sm:text-sm font-medium">
                        Budget Range <span className="text-muted-foreground text-xs">(optional)</span>
                      </Label>
                      <Select
                        name="budget"
                        onValueChange={(value) => handleChange("budget", value)}
                      >
                        <SelectTrigger className="h-11 sm:h-12 text-base bg-background border-border focus:ring-accent/30">
                          <SelectValue placeholder="Select budget" />
                        </SelectTrigger>
                        <SelectContent>
                          {budgetRanges.map((range) => (
                            <SelectItem key={range} value={range} className="text-base py-2.5">
                              {range}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5 sm:space-y-2">
                    <Label htmlFor="message" className="text-xs sm:text-sm font-medium">
                      Your Message <span className="text-accent" aria-label="required">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      placeholder="Tell us about your project, goals, and any specific requirements..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      onBlur={() => handleBlur("message")}
                      className="text-base bg-background border-border focus:border-accent focus-visible:ring-accent/30 resize-none min-h-[120px] sm:min-h-[140px]"
                      aria-required="true"
                      aria-invalid={errors.message ? "true" : undefined}
                      aria-describedby={errors.message ? "message-error" : undefined}
                    />
                    {errors.message && touched.message && (
                      <p id="message-error" role="alert" className="text-xs text-red-500 mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="accent"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full h-12 sm:h-14 text-sm sm:text-base font-semibold touch-manipulation"
                      aria-busy={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <span 
                            className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" 
                            aria-hidden="true" 
                          />
                          <span>Sending...</span>
                        </span>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-4 h-4 sm:w-5 sm:h-5 ml-2" aria-hidden="true" />
                        </>
                      )}
                    </Button>
                  </div>

                  {/* Privacy Note */}
                  <p className="text-[11px] sm:text-xs text-muted-foreground text-center leading-relaxed">
                    Your information is secure. We never share your data with third parties.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
