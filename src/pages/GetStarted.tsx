import { useState, useEffect, useCallback } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
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
  AlertCircle,
  X,
  Upload,
  MessageCircle,
  Shield,
  Zap,
} from "lucide-react";

// Service options for Step 1
const serviceOptions = [
  {
    id: "creative",
    icon: Palette,
    title: "Creative Design",
    description: "Branding, Graphics, Ad Creative",
    responseTime: "24-48 hours",
    priceRange: "UGX 500K - 3M",
  },
  {
    id: "video",
    icon: Video,
    title: "Video Production",
    description: "Music Videos, Commercials, Content",
    responseTime: "24-48 hours",
    priceRange: "UGX 1M - 10M+",
  },
  {
    id: "social",
    icon: Smartphone,
    title: "Social Media",
    description: "Management, Content Creation",
    responseTime: "12-24 hours",
    priceRange: "UGX 800K - 3M/month",
  },
  {
    id: "website",
    icon: Globe,
    title: "Website Development",
    description: "Design, E-commerce, Maintenance",
    responseTime: "24-48 hours",
    priceRange: "UGX 1.5M - 8M",
  },
  {
    id: "podcast",
    icon: Mic,
    title: "Podcast Studio",
    description: "Recording, Editing, Voice-over",
    responseTime: "Same day",
    priceRange: "UGX 150K - 500K/session",
  },
  {
    id: "multiple",
    icon: Sparkles,
    title: "Not Sure / Multiple",
    description: "Let's discuss your needs",
    responseTime: "24 hours",
    priceRange: "Custom quote",
  },
];

// Map URL params to service IDs
const serviceParamMap: Record<string, string> = {
  "video-production": "video",
  "video": "video",
  "creative": "creative",
  "creative-design": "creative",
  "social": "social",
  "social-media": "social",
  "website": "website",
  "web-development": "website",
  "podcast": "podcast",
  "podcast-studio": "podcast",
};

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

// Form validation helpers
const validateEmail = (email: string) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

const validatePhone = (phone: string) => {
  const re = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
  return phone.length >= 10 && re.test(phone.replace(/\s/g, ''));
};

// Local storage key
const STORAGE_KEY = "9yards_get_started_form";

export default function GetStarted() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
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
    referenceLink: "",
    // Service-specific fields
    videoType: "",
    websiteType: "",
    websitePages: "",
    socialPlatforms: [] as string[],
    postingFrequency: "",
    studioDate: "",
    studioDuration: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showLeaveWarning, setShowLeaveWarning] = useState(false);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

  // Load saved form data from localStorage
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed.formData) setFormData(parsed.formData);
        if (parsed.selectedService) setSelectedService(parsed.selectedService);
        if (parsed.currentStep) setCurrentStep(parsed.currentStep);
      } catch (e) {
        console.error("Failed to parse saved form data");
      }
    }
  }, []);

  // Handle pre-selection from URL parameter (e.g., ?service=video-production)
  useEffect(() => {
    const serviceParam = searchParams.get("service");
    if (serviceParam) {
      const mappedService = serviceParamMap[serviceParam.toLowerCase()];
      if (mappedService) {
        setSelectedService(mappedService);
      }
    }
  }, [searchParams]);

  // Save form data to localStorage whenever it changes
  useEffect(() => {
    if (hasUnsavedChanges && !isSubmitted) {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ formData, selectedService, currentStep })
      );
    }
  }, [formData, selectedService, currentStep, hasUnsavedChanges, isSubmitted]);

  // Clear localStorage after successful submission
  useEffect(() => {
    if (isSubmitted) {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, [isSubmitted]);

  // Warn before leaving with unsaved changes
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (hasUnsavedChanges && !isSubmitted) {
        e.preventDefault();
        e.returnValue = "";
      }
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [hasUnsavedChanges, isSubmitted]);

  // Scroll to top when step changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentStep]);

  // Validate form fields
  const validateField = useCallback((name: string, value: string) => {
    switch (name) {
      case "name":
        return value.trim().length < 2 ? "Please enter your full name" : "";
      case "email":
        return !validateEmail(value) ? "Please enter a valid email address" : "";
      case "phone":
        return !validatePhone(value) ? "Please enter a valid phone number" : "";
      default:
        return "";
    }
  }, []);

  // Handle field blur for validation
  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleServiceSelect = (serviceId: string) => {
    setSelectedService(serviceId);
    setHasUnsavedChanges(true);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setHasUnsavedChanges(true);
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handlePlatformToggle = (platform: string) => {
    setFormData((prev) => ({
      ...prev,
      socialPlatforms: prev.socialPlatforms.includes(platform)
        ? prev.socialPlatforms.filter((p) => p !== platform)
        : [...prev.socialPlatforms, platform],
    }));
    setHasUnsavedChanges(true);
  };

  const handleNext = () => {
    if (currentStep === 1 && selectedService) {
      setCurrentStep(2);
    } else if (currentStep === 2) {
      // Validate all required fields before submission
      const newErrors: Record<string, string> = {};
      if (!formData.name.trim()) newErrors.name = "Please enter your full name";
      else if (formData.name.trim().length < 2) newErrors.name = "Name is too short";
      
      if (!formData.email.trim()) newErrors.email = "Please enter your email";
      else if (!validateEmail(formData.email)) newErrors.email = "Please enter a valid email";
      
      if (!formData.phone.trim()) newErrors.phone = "Please enter your phone number";
      else if (!validatePhone(formData.phone)) newErrors.phone = "Please enter a valid phone number";

      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        setTouched({ name: true, email: true, phone: true });
        return;
      }
      
      handleSubmit();
    }
  };

  const handleBack = () => {
    if (currentStep === 2) {
      setCurrentStep(1);
    }
  };

  // Handle Enter key to proceed
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (currentStep === 1 && canProceedStep1) {
        handleNext();
      } else if (currentStep === 2 && canProceedStep2) {
        handleNext();
      }
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setHasUnsavedChanges(false);
    setCurrentStep(3);
  };

  // Get selected service details
  const getSelectedServiceDetails = () => {
    return serviceOptions.find((s) => s.id === selectedService);
  };

  const canProceedStep1 = selectedService !== null;
  const canProceedStep2 =
    formData.name &&
    formData.email &&
    formData.phone &&
    formData.companyType &&
    formData.timeline &&
    formData.budget &&
    !errors.name &&
    !errors.email &&
    !errors.phone;

  return (
    <Layout>
      <section className="pt-32 pb-32 md:pb-20 bg-gradient-to-b from-primary/5 to-background min-h-screen">
        <div className="container-custom" onKeyDown={handleKeyDown}>
          {/* Progress Indicator - Compact on mobile */}
          <div className="max-w-2xl mx-auto mb-8 md:mb-12">
            <div className="flex items-center justify-between relative">
              {/* Progress Line */}
              <div className="absolute top-4 md:top-5 left-0 right-0 h-0.5 bg-border" />
              <div
                className="absolute top-4 md:top-5 left-0 h-0.5 bg-primary transition-all duration-500"
                style={{ width: `${((currentStep - 1) / 2) * 100}%` }}
              />

              {/* Steps */}
              {[1, 2, 3].map((step) => (
                <div key={step} className="relative z-10 flex flex-col items-center">
                  <div
                    className={cn(
                      "w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-xs md:text-sm font-semibold transition-all duration-300",
                      currentStep > step
                        ? "bg-primary text-white"
                        : currentStep === step
                        ? "bg-primary text-white ring-4 ring-primary/20"
                        : "bg-background border-2 border-border text-muted-foreground"
                    )}
                  >
                    {currentStep > step ? (
                      <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5" />
                    ) : (
                      step
                    )}
                  </div>
                  <span
                    className={cn(
                      "mt-2 text-[10px] md:text-xs font-medium hidden sm:block",
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
              <div className="text-center mb-8 md:mb-10">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">
                  What can we help you with?
                </h1>
                <p className="text-base md:text-lg text-muted-foreground">
                  Select the service that best matches your needs
                </p>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                {serviceOptions.map((service) => {
                  const Icon = service.icon;
                  const isSelected = selectedService === service.id;

                  return (
                    <button
                      key={service.id}
                      onClick={() => handleServiceSelect(service.id)}
                      className={cn(
                        "p-4 md:p-6 rounded-xl border-2 text-left transition-all duration-300 group",
                        isSelected
                          ? "border-primary bg-primary/5 shadow-lg"
                          : "border-border bg-background hover:border-primary/50 hover:shadow-md"
                      )}
                    >
                      <div
                        className={cn(
                          "w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center mb-3 md:mb-4 transition-colors",
                          isSelected
                            ? "bg-primary text-white"
                            : "bg-primary/10 text-primary group-hover:bg-primary/20"
                        )}
                      >
                        <Icon className="w-5 h-5 md:w-6 md:h-6" />
                      </div>
                      <h3 className="font-semibold text-sm md:text-lg mb-0.5 md:mb-1">{service.title}</h3>
                      <p className="text-xs md:text-sm text-muted-foreground line-clamp-2">
                        {service.description}
                      </p>
                    </button>
                  );
                })}
              </div>

              {/* Desktop Continue Button */}
              <div className="mt-8 md:mt-10 hidden md:flex flex-col items-center gap-3">
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
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  <Shield className="w-3 h-3" />
                  Free consultation • No obligation
                </p>
              </div>

              {/* Mobile Sticky Continue Button */}
              <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur-md border-t border-border md:hidden z-40">
                <Button
                  variant="accent"
                  size="lg"
                  onClick={handleNext}
                  disabled={!canProceedStep1}
                  className="w-full"
                >
                  Continue
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <p className="text-[10px] text-muted-foreground text-center mt-2 flex items-center justify-center gap-1">
                  <Shield className="w-3 h-3" />
                  Free consultation • No obligation
                </p>
              </div>
            </div>
          )}

          {/* Step 2: Project Details */}
          {currentStep === 2 && (
            <div className="max-w-2xl mx-auto animate-fade-in pb-24 md:pb-0">
              <div className="text-center mb-8 md:mb-10">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">
                  Tell us about your project
                </h1>
                <p className="text-base md:text-lg text-muted-foreground">
                  Help us understand your needs better
                </p>
              </div>

              {/* Selected Service Badge */}
              {selectedService && (
                <div className="mb-6 flex items-center justify-center">
                  <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                    {(() => {
                      const service = getSelectedServiceDetails();
                      const Icon = service?.icon || Sparkles;
                      return (
                        <>
                          <Icon className="w-4 h-4" />
                          {service?.title}
                          <button
                            onClick={handleBack}
                            className="ml-1 hover:bg-primary/20 rounded-full p-0.5 transition-colors"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </>
                      );
                    })()}
                  </div>
                </div>
              )}

              {/* Price Estimate Preview */}
              {selectedService && formData.budget && (
                <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4 flex items-start gap-3 animate-fade-in">
                  <Zap className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-green-800">Estimated Range</p>
                    <p className="text-xs text-green-700">
                      Based on your selections, {getSelectedServiceDetails()?.title.toLowerCase()} projects typically range from{" "}
                      <strong>{getSelectedServiceDetails()?.priceRange}</strong>
                    </p>
                  </div>
                </div>
              )}

              <div className="bg-background rounded-2xl border border-border p-5 md:p-8 shadow-lg">
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
                          onBlur={handleBlur}
                          placeholder="John Doe"
                          className={cn("mt-1", errors.name && touched.name && "border-red-500")}
                          autoComplete="name"
                        />
                        {errors.name && touched.name && (
                          <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            {errors.name}
                          </p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          inputMode="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          onBlur={handleBlur}
                          placeholder="john@example.com"
                          className={cn("mt-1", errors.email && touched.email && "border-red-500")}
                          autoComplete="email"
                        />
                        {errors.email && touched.email && (
                          <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        inputMode="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        placeholder="+256 700 000 000"
                        className={cn("mt-1", errors.phone && touched.phone && "border-red-500")}
                        autoComplete="tel"
                      />
                      {errors.phone && touched.phone && (
                        <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label>Are you a company or individual? *</Label>
                      <div className="flex gap-3 md:gap-4 mt-2">
                        <button
                          type="button"
                          onClick={() => {
                            setFormData((prev) => ({ ...prev, companyType: "company" }));
                            setHasUnsavedChanges(true);
                          }}
                          className={cn(
                            "flex-1 flex items-center justify-center gap-2 p-3 md:p-4 rounded-lg border-2 transition-all text-sm md:text-base",
                            formData.companyType === "company"
                              ? "border-primary bg-primary/5"
                              : "border-border hover:border-primary/50"
                          )}
                        >
                          <Building2 className="w-4 h-4 md:w-5 md:h-5" />
                          Company
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setFormData((prev) => ({ ...prev, companyType: "individual" }));
                            setHasUnsavedChanges(true);
                          }}
                          className={cn(
                            "flex-1 flex items-center justify-center gap-2 p-3 md:p-4 rounded-lg border-2 transition-all text-sm md:text-base",
                            formData.companyType === "individual"
                              ? "border-primary bg-primary/5"
                              : "border-border hover:border-primary/50"
                          )}
                        >
                          <User className="w-4 h-4 md:w-5 md:h-5" />
                          Individual
                        </button>
                      </div>
                    </div>

                    {formData.companyType === "company" && (
                      <div className="animate-fade-in">
                        <Label htmlFor="companyName">Company Name <span className="text-muted-foreground">(Optional)</span></Label>
                        <Input
                          id="companyName"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleInputChange}
                          placeholder="Your Company Ltd"
                          className="mt-1"
                          autoComplete="organization"
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
                      <div className="grid grid-cols-3 gap-2 md:gap-3 mt-2">
                        {timelineOptions.map((option) => (
                          <button
                            key={option.id}
                            type="button"
                            onClick={() => {
                              setFormData((prev) => ({ ...prev, timeline: option.id }));
                              setHasUnsavedChanges(true);
                            }}
                            className={cn(
                              "p-2 md:p-3 rounded-lg border-2 text-center transition-all",
                              formData.timeline === option.id
                                ? "border-primary bg-primary/5"
                                : "border-border hover:border-primary/50"
                            )}
                          >
                            <Clock className="w-3 h-3 md:w-4 md:h-4 mx-auto mb-1" />
                            <div className="font-medium text-xs md:text-sm">{option.label}</div>
                            <div className="text-[10px] md:text-xs text-muted-foreground">
                              {option.description}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <Label>Budget Range *</Label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 md:gap-3 mt-2">
                        {budgetOptions.map((option) => (
                          <button
                            key={option.id}
                            type="button"
                            onClick={() => {
                              setFormData((prev) => ({ ...prev, budget: option.id }));
                              setHasUnsavedChanges(true);
                            }}
                            className={cn(
                              "p-2 md:p-3 rounded-lg border-2 text-center text-xs md:text-sm font-medium transition-all",
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
                        Video Details <span className="text-sm font-normal text-muted-foreground">(Optional)</span>
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
                        Website Details <span className="text-sm font-normal text-muted-foreground">(Optional)</span>
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
                        Social Media Details <span className="text-sm font-normal text-muted-foreground">(Optional)</span>
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
                                "px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all",
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
                        Studio Booking Details <span className="text-sm font-normal text-muted-foreground">(Optional)</span>
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

                  {/* Reference/Inspiration Link */}
                  {(selectedService === "creative" || selectedService === "video" || selectedService === "website") && (
                    <div className="space-y-4 animate-fade-in">
                      <div>
                        <Label htmlFor="referenceLink" className="flex items-center gap-2">
                          <Upload className="w-4 h-4" />
                          Reference / Inspiration Link <span className="text-muted-foreground">(Optional)</span>
                        </Label>
                        <Input
                          id="referenceLink"
                          name="referenceLink"
                          value={formData.referenceLink}
                          onChange={handleInputChange}
                          placeholder="Paste a link to an example you like (Pinterest, Behance, etc.)"
                          className="mt-1"
                        />
                        <p className="text-xs text-muted-foreground mt-1">
                          Have inspiration? Share a link to help us understand your vision
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Project Description */}
                  <div>
                    <Label htmlFor="description">Brief Project Description <span className="text-muted-foreground">(Optional)</span></Label>
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

                {/* Desktop Navigation Buttons */}
                <div className="hidden md:flex items-center justify-between mt-8 pt-6 border-t border-border">
                  <Button variant="ghost" onClick={handleBack}>
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back
                  </Button>
                  <div className="flex flex-col items-end gap-2">
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
                    <p className="text-xs text-muted-foreground flex items-center gap-1">
                      <Shield className="w-3 h-3" />
                      Your information is secure
                    </p>
                  </div>
                </div>
              </div>

              {/* Mobile Sticky Bottom Buttons */}
              <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur-md border-t border-border md:hidden z-40">
                <div className="flex gap-3">
                  <Button variant="ghost" onClick={handleBack} className="flex-shrink-0">
                    <ArrowLeft className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="accent"
                    onClick={handleNext}
                    disabled={!canProceedStep2 || isSubmitting}
                    className="flex-1"
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
              <div className="w-16 h-16 md:w-20 md:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                <CheckCircle2 className="w-8 h-8 md:w-10 md:h-10 text-green-600" />
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">
                Thank you, {formData.name.split(" ")[0]}!
              </h1>
              <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8">
                Your request has been submitted successfully. We're excited to work with you!
              </p>

              {/* Response Time Badge */}
              {selectedService && (
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Zap className="w-4 h-4" />
                  Expected response: {getSelectedServiceDetails()?.responseTime}
                </div>
              )}

              <div className="bg-background rounded-2xl border border-border p-5 md:p-8 text-left mb-6 md:mb-8">
                <h3 className="font-semibold text-lg mb-4">What happens next?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5 text-sm">
                      1
                    </div>
                    <div>
                      <p className="font-medium text-sm md:text-base">Review Your Request</p>
                      <p className="text-xs md:text-sm text-muted-foreground">
                        Our team will review your project details within the next few hours
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5 text-sm">
                      2
                    </div>
                    <div>
                      <p className="font-medium text-sm md:text-base">Personalized Response</p>
                      <p className="text-xs md:text-sm text-muted-foreground">
                        We'll reach out via email or phone within 24 hours with next steps
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5 text-sm">
                      3
                    </div>
                    <div>
                      <p className="font-medium text-sm md:text-base">Discovery Call</p>
                      <p className="text-xs md:text-sm text-muted-foreground">
                        We'll schedule a brief call to understand your vision in detail
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* WhatsApp Option */}
              <div className="bg-green-50 border border-green-200 rounded-xl p-4 md:p-5 mb-6 md:mb-8">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <MessageCircle className="w-5 h-5 text-green-600" />
                  <p className="font-medium text-green-800">Prefer WhatsApp?</p>
                </div>
                <p className="text-sm text-green-700 mb-3">
                  Message us directly for faster response
                </p>
                <a
                  href="https://wa.me/256700000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-green-700 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat on WhatsApp
                </a>
              </div>

              <div className="bg-primary/5 rounded-xl p-4 md:p-6 mb-6 md:mb-8">
                <p className="text-xs md:text-sm text-muted-foreground mb-2">
                  Join 50+ businesses who trust 9Yards
                </p>
                <p className="font-semibold text-primary text-sm md:text-base">
                  Average response time: Under 24 hours
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
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
