import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import {
  Palette,
  Video,
  Smartphone,
  Globe,
  Mic,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Clock,
  Building2,
  User,
} from "lucide-react";

// Service options for Step 1
const serviceOptions = [
  {
    id: "creative",
    icon: Palette,
    title: "Creative Design",
    description: "Branding, Graphics, Ad Creative",
  },
  {
    id: "video",
    icon: Video,
    title: "Video Production",
    description: "Music Videos, Commercials, Content",
  },
  {
    id: "social",
    icon: Smartphone,
    title: "Social Media",
    description: "Management, Content Creation",
  },
  {
    id: "website",
    icon: Globe,
    title: "Website Development",
    description: "Design, E-commerce, Maintenance",
  },
  {
    id: "podcast",
    icon: Mic,
    title: "Podcast Studio",
    description: "Recording, Editing, Voice-over",
  },
  {
    id: "multiple",
    icon: Sparkles,
    title: "Not Sure / Multiple",
    description: "Let's discuss your needs",
  },
];

// Timeline options
const timelineOptions = [
  { id: "urgent", label: "Urgent", description: "Within 1 week" },
  { id: "soon", label: "Soon", description: "Within 1 month" },
  { id: "flexible", label: "Flexible", description: "3+ months" },
];

// Budget options
const budgetOptions = [
  { id: "300k-1m", label: "UGX 300K - 1M" },
  { id: "1m-3m", label: "UGX 1M - 3M" },
  { id: "3m-5m", label: "UGX 3M - 5M" },
  { id: "5m+", label: "UGX 5M+" },
  { id: "not-sure", label: "Not sure yet" },
];

// Video project types
const videoTypes = [
  "Music Video",
  "Commercial",
  "Explainer Video",
  "Documentary",
  "Corporate Video",
  "Social Media Content",
  "Other",
];

// Website types
const websiteTypes = [
  "Landing Page",
  "Business Website",
  "E-commerce Store",
  "Portfolio Site",
  "Blog/Content Site",
  "Web Application",
  "Other",
];

// Social media platforms
const socialPlatforms = [
  "Instagram",
  "Facebook",
  "Twitter/X",
  "LinkedIn",
  "TikTok",
  "YouTube",
];

export default function GetStarted() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    companyType: "" as "company" | "individual" | "",
    companyName: "",
    timeline: "",
    budget: "",
    description: "",
    // Service-specific fields
    videoType: "",
    websiteType: "",
    websitePages: "",
    socialPlatforms: [] as string[],
    postingFrequency: "",
    studioDate: "",
    studioDuration: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleServiceSelect = (serviceId: string) => {
    setSelectedService(serviceId);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePlatformToggle = (platform: string) => {
    setFormData((prev) => ({
      ...prev,
      socialPlatforms: prev.socialPlatforms.includes(platform)
        ? prev.socialPlatforms.filter((p) => p !== platform)
        : [...prev.socialPlatforms, platform],
    }));
  };

  const handleNext = () => {
    if (currentStep === 1 && selectedService) {
      setCurrentStep(2);
    } else if (currentStep === 2) {
      handleSubmit();
    }
  };

  const handleBack = () => {
    if (currentStep === 2) {
      setCurrentStep(1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setCurrentStep(3);
  };

  const canProceedStep1 = selectedService !== null;
  const canProceedStep2 =
    formData.name &&
    formData.email &&
    formData.phone &&
    formData.companyType &&
    formData.timeline &&
    formData.budget;

  return (
    <Layout>
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container-custom">
          {/* Progress Indicator */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="flex items-center justify-between relative">
              {/* Progress Line */}
              <div className="absolute top-5 left-0 right-0 h-0.5 bg-border" />
              <div
                className="absolute top-5 left-0 h-0.5 bg-primary transition-all duration-500"
                style={{ width: `${((currentStep - 1) / 2) * 100}%` }}
              />

              {/* Steps */}
              {[1, 2, 3].map((step) => (
                <div key={step} className="relative z-10 flex flex-col items-center">
                  <div
                    className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300",
                      currentStep > step
                        ? "bg-primary text-white"
                        : currentStep === step
                        ? "bg-primary text-white ring-4 ring-primary/20"
                        : "bg-background border-2 border-border text-muted-foreground"
                    )}
                  >
                    {currentStep > step ? (
                      <CheckCircle2 className="w-5 h-5" />
                    ) : (
                      step
                    )}
                  </div>
                  <span
                    className={cn(
                      "mt-2 text-xs font-medium",
                      currentStep >= step ? "text-primary" : "text-muted-foreground"
                    )}
                  >
                    {step === 1 && "Select Service"}
                    {step === 2 && "Project Details"}
                    {step === 3 && "Confirmation"}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Step 1: Service Selection */}
          {currentStep === 1 && (
            <div className="max-w-4xl mx-auto animate-fade-in">
              <div className="text-center mb-10">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                  What can we help you with?
                </h1>
                <p className="text-lg text-muted-foreground">
                  Select the service that best matches your needs
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {serviceOptions.map((service) => {
                  const Icon = service.icon;
                  const isSelected = selectedService === service.id;

                  return (
                    <button
                      key={service.id}
                      onClick={() => handleServiceSelect(service.id)}
                      className={cn(
                        "p-6 rounded-xl border-2 text-left transition-all duration-300 group",
                        isSelected
                          ? "border-primary bg-primary/5 shadow-lg"
                          : "border-border bg-background hover:border-primary/50 hover:shadow-md"
                      )}
                    >
                      <div
                        className={cn(
                          "w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors",
                          isSelected
                            ? "bg-primary text-white"
                            : "bg-primary/10 text-primary group-hover:bg-primary/20"
                        )}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="font-semibold text-lg mb-1">{service.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {service.description}
                      </p>
                    </button>
                  );
                })}
              </div>

              <div className="mt-10 flex justify-center">
                <Button
                  variant="accent"
                  size="lg"
                  onClick={handleNext}
                  disabled={!canProceedStep1}
                  className="px-8"
                >
                  Continue
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          )}

          {/* Step 2: Project Details */}
          {currentStep === 2 && (
            <div className="max-w-2xl mx-auto animate-fade-in">
              <div className="text-center mb-10">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                  Tell us about your project
                </h1>
                <p className="text-lg text-muted-foreground">
                  Help us understand your needs better
                </p>
              </div>

              <div className="bg-background rounded-2xl border border-border p-6 md:p-8 shadow-lg">
                <form className="space-y-6">
                  {/* Contact Information */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg border-b border-border pb-2">
                      Contact Information
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="John Doe"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="john@example.com"
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+256 700 000 000"
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label>Are you a company or individual? *</Label>
                      <div className="flex gap-4 mt-2">
                        <button
                          type="button"
                          onClick={() =>
                            setFormData((prev) => ({ ...prev, companyType: "company" }))
                          }
                          className={cn(
                            "flex-1 flex items-center justify-center gap-2 p-4 rounded-lg border-2 transition-all",
                            formData.companyType === "company"
                              ? "border-primary bg-primary/5"
                              : "border-border hover:border-primary/50"
                          )}
                        >
                          <Building2 className="w-5 h-5" />
                          Company
                        </button>
                        <button
                          type="button"
                          onClick={() =>
                            setFormData((prev) => ({ ...prev, companyType: "individual" }))
                          }
                          className={cn(
                            "flex-1 flex items-center justify-center gap-2 p-4 rounded-lg border-2 transition-all",
                            formData.companyType === "individual"
                              ? "border-primary bg-primary/5"
                              : "border-border hover:border-primary/50"
                          )}
                        >
                          <User className="w-5 h-5" />
                          Individual
                        </button>
                      </div>
                    </div>

                    {formData.companyType === "company" && (
                      <div className="animate-fade-in">
                        <Label htmlFor="companyName">Company Name</Label>
                        <Input
                          id="companyName"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleInputChange}
                          placeholder="Your Company Ltd"
                          className="mt-1"
                        />
                      </div>
                    )}
                  </div>

                  {/* Project Timeline & Budget */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg border-b border-border pb-2">
                      Timeline & Budget
                    </h3>

                    <div>
                      <Label>When do you need this? *</Label>
                      <div className="grid grid-cols-3 gap-3 mt-2">
                        {timelineOptions.map((option) => (
                          <button
                            key={option.id}
                            type="button"
                            onClick={() =>
                              setFormData((prev) => ({ ...prev, timeline: option.id }))
                            }
                            className={cn(
                              "p-3 rounded-lg border-2 text-center transition-all",
                              formData.timeline === option.id
                                ? "border-primary bg-primary/5"
                                : "border-border hover:border-primary/50"
                            )}
                          >
                            <Clock className="w-4 h-4 mx-auto mb-1" />
                            <div className="font-medium text-sm">{option.label}</div>
                            <div className="text-xs text-muted-foreground">
                              {option.description}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <Label>Budget Range *</Label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-2">
                        {budgetOptions.map((option) => (
                          <button
                            key={option.id}
                            type="button"
                            onClick={() =>
                              setFormData((prev) => ({ ...prev, budget: option.id }))
                            }
                            className={cn(
                              "p-3 rounded-lg border-2 text-center text-sm font-medium transition-all",
                              formData.budget === option.id
                                ? "border-primary bg-primary/5"
                                : "border-border hover:border-primary/50"
                            )}
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Service-Specific Fields */}
                  {selectedService === "video" && (
                    <div className="space-y-4 animate-fade-in">
                      <h3 className="font-semibold text-lg border-b border-border pb-2">
                        Video Details
                      </h3>
                      <div>
                        <Label htmlFor="videoType">Type of Video Project</Label>
                        <select
                          id="videoType"
                          name="videoType"
                          value={formData.videoType}
                          onChange={handleInputChange}
                          className="mt-1 w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
                        >
                          <option value="">Select video type...</option>
                          {videoTypes.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  )}

                  {selectedService === "website" && (
                    <div className="space-y-4 animate-fade-in">
                      <h3 className="font-semibold text-lg border-b border-border pb-2">
                        Website Details
                      </h3>
                      <div>
                        <Label htmlFor="websiteType">Type of Website</Label>
                        <select
                          id="websiteType"
                          name="websiteType"
                          value={formData.websiteType}
                          onChange={handleInputChange}
                          className="mt-1 w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
                        >
                          <option value="">Select website type...</option>
                          {websiteTypes.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="websitePages">Estimated Number of Pages</Label>
                        <Input
                          id="websitePages"
                          name="websitePages"
                          value={formData.websitePages}
                          onChange={handleInputChange}
                          placeholder="e.g., 5-10 pages"
                          className="mt-1"
                        />
                      </div>
                    </div>
                  )}

                  {selectedService === "social" && (
                    <div className="space-y-4 animate-fade-in">
                      <h3 className="font-semibold text-lg border-b border-border pb-2">
                        Social Media Details
                      </h3>
                      <div>
                        <Label>Platforms You're Active On</Label>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {socialPlatforms.map((platform) => (
                            <button
                              key={platform}
                              type="button"
                              onClick={() => handlePlatformToggle(platform)}
                              className={cn(
                                "px-4 py-2 rounded-full text-sm font-medium transition-all",
                                formData.socialPlatforms.includes(platform)
                                  ? "bg-primary text-white"
                                  : "bg-muted text-muted-foreground hover:bg-primary/10"
                              )}
                            >
                              {platform}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="postingFrequency">Desired Posting Frequency</Label>
                        <Input
                          id="postingFrequency"
                          name="postingFrequency"
                          value={formData.postingFrequency}
                          onChange={handleInputChange}
                          placeholder="e.g., 3 posts per week"
                          className="mt-1"
                        />
                      </div>
                    </div>
                  )}

                  {selectedService === "podcast" && (
                    <div className="space-y-4 animate-fade-in">
                      <h3 className="font-semibold text-lg border-b border-border pb-2">
                        Studio Booking Details
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="studioDate">Preferred Date</Label>
                          <Input
                            id="studioDate"
                            name="studioDate"
                            type="date"
                            value={formData.studioDate}
                            onChange={handleInputChange}
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="studioDuration">Session Duration</Label>
                          <select
                            id="studioDuration"
                            name="studioDuration"
                            value={formData.studioDuration}
                            onChange={handleInputChange}
                            className="mt-1 w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
                          >
                            <option value="">Select duration...</option>
                            <option value="1hr">1 Hour</option>
                            <option value="2hr">2 Hours</option>
                            <option value="half-day">Half Day (4 hours)</option>
                            <option value="full-day">Full Day (8 hours)</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Project Description */}
                  <div>
                    <Label htmlFor="description">Brief Project Description</Label>
                    <Textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      placeholder="Tell us more about your project, goals, and any specific requirements..."
                      rows={4}
                      className="mt-1"
                    />
                  </div>
                </form>

                {/* Navigation Buttons */}
                <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
                  <Button variant="ghost" onClick={handleBack}>
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back
                  </Button>
                  <Button
                    variant="accent"
                    onClick={handleNext}
                    disabled={!canProceedStep2 || isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Request
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Confirmation */}
          {currentStep === 3 && isSubmitted && (
            <div className="max-w-2xl mx-auto text-center animate-fade-in">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-green-600" />
              </div>

              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Thank you, {formData.name.split(" ")[0]}!
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Your request has been submitted successfully. We're excited to work with you!
              </p>

              <div className="bg-background rounded-2xl border border-border p-6 md:p-8 text-left mb-8">
                <h3 className="font-semibold text-lg mb-4">What happens next?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                      1
                    </div>
                    <div>
                      <p className="font-medium">Review Your Request</p>
                      <p className="text-sm text-muted-foreground">
                        Our team will review your project details within the next few hours
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                      2
                    </div>
                    <div>
                      <p className="font-medium">Personalized Response</p>
                      <p className="text-sm text-muted-foreground">
                        We'll reach out via email or phone within 24 hours with next steps
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                      3
                    </div>
                    <div>
                      <p className="font-medium">Discovery Call</p>
                      <p className="text-sm text-muted-foreground">
                        We'll schedule a brief call to understand your vision in detail
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-primary/5 rounded-xl p-6 mb-8">
                <p className="text-sm text-muted-foreground mb-2">
                  Join 50+ businesses who trust 9Yards
                </p>
                <p className="font-semibold text-primary">
                  Average response time: Under 24 hours
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="accent" size="lg" asChild>
                  <Link to="/">Back to Home</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/portfolio">View Our Work</Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
