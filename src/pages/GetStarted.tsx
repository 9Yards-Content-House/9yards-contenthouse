import { useState, useEffect, useCallback, useRef } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/shared/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import {
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
  Palette,
  Check,
  Calendar,
  Target,
  TrendingUp,
  Users,
  Briefcase,
  Mail,
  Phone,
  MapPin,
  FileText,
  Layers,
  RefreshCw,
  PlayCircle,
  Camera,
} from "lucide-react";

// Service options with images for Step 1
const serviceOptions = [
  {
    id: "branding",
    icon: Palette,
    title: "Branding & Design",
    description: "Logo design, brand identity, graphics & print",
    image: "/images/miscellany/branding.jpg",
    responseTime: "24-48 hours",
    priceRange: "UGX 500K - 8M",
    popular: true,
  },
  {
    id: "video",
    icon: Video,
    title: "Video Production",
    description: "Music videos, commercials, documentaries & reels",
    image: "/images/bento-grid/video production/full-production-music-videos.jpg",
    responseTime: "24-48 hours",
    priceRange: "UGX 2M - 20M+",
    popular: true,
  },
  {
    id: "social",
    icon: Smartphone,
    title: "Social Media Management",
    description: "Content creation, scheduling & community growth",
    image: "/images/miscellany/socialmedia.jpg",
    responseTime: "12-24 hours",
    priceRange: "UGX 1M - 3M/month",
    popular: false,
  },
  {
    id: "website",
    icon: Globe,
    title: "Website Development",
    description: "Landing pages, business sites & e-commerce",
    image: "/images/miscellany/website.webp",
    responseTime: "24-48 hours",
    priceRange: "UGX 1.5M - 12M",
    popular: false,
  },
  {
    id: "podcast",
    icon: Mic,
    title: "Podcast & Voice-Over",
    description: "Studio recording, editing & distribution",
    image: "/images/miscellany/podcast hero.jpg",
    responseTime: "Same day booking",
    priceRange: "UGX 150K - 500K/session",
    popular: false,
  },
  {
    id: "subscription",
    icon: RefreshCw,
    title: "Monthly Subscription",
    description: "Ongoing creative support with priority access",
    image: "/images/team/9Yards-Content-House-Team-01.jpg",
    responseTime: "Priority queue",
    priceRange: "UGX 500K - 3M/month",
    popular: false,
  },
];

// Map URL params to service IDs
const serviceParamMap: Record<string, string> = {
  "video-production": "video",
  "video": "video",
  "creative": "branding",
  "creative-design": "branding",
  "branding": "branding",
  "graphic-design": "branding",
  "social": "social",
  "social-media": "social",
  "website": "website",
  "web-development": "website",
  "podcast": "podcast",
  "podcast-studio": "podcast",
  "voice-over": "podcast",
  "subscription": "subscription",
};

// Timeline options - no emojis
const timelineOptions = [
  { id: "asap", label: "ASAP", description: "Within 1-2 weeks", urgency: "high" },
  { id: "month", label: "This Month", description: "Within 30 days", urgency: "medium" },
  { id: "planning", label: "Planning Ahead", description: "2-3 months out", urgency: "low" },
  { id: "exploring", label: "Just Exploring", description: "No specific deadline", urgency: "none" },
];

// Budget options with better ranges based on actual pricing
const budgetOptions = [
  { id: "starter", label: "Under 1M UGX", description: "Small projects & quick tasks" },
  { id: "growth", label: "1M - 3M UGX", description: "Standard projects" },
  { id: "professional", label: "3M - 8M UGX", description: "Comprehensive solutions" },
  { id: "enterprise", label: "8M+ UGX", description: "Large-scale campaigns" },
  { id: "monthly", label: "Monthly Retainer", description: "Ongoing partnership" },
  { id: "discuss", label: "Let's Discuss", description: "Need guidance on budget" },
];

// Branding/Design project types
const brandingTypes = [
  { id: "logo", label: "Logo Design", description: "New logo or refresh" },
  { id: "full-identity", label: "Full Brand Identity", description: "Logo, colors, typography & guidelines" },
  { id: "brand-refresh", label: "Brand Refresh", description: "Update existing brand" },
  { id: "graphics", label: "Graphic Design", description: "Social graphics, posters, flyers" },
  { id: "ad-creative", label: "Ad Creative", description: "Ads for social & digital campaigns" },
  { id: "print", label: "Print Materials", description: "Brochures, business cards, packaging" },
];

// Video project types with more detail
const videoTypes = [
  { id: "music-video", label: "Music Video", description: "Artist performance & narrative" },
  { id: "commercial", label: "TV Commercial", description: "Broadcast-ready ads" },
  { id: "corporate", label: "Corporate Video", description: "Company profiles & internal comms" },
  { id: "documentary", label: "Documentary", description: "In-depth storytelling" },
  { id: "explainer", label: "Explainer Video", description: "Product or service explanations" },
  { id: "social-content", label: "Social Media Content", description: "Reels, TikToks & YouTube Shorts" },
  { id: "event", label: "Event Coverage", description: "Conferences, launches & ceremonies" },
  { id: "product", label: "Product Demo", description: "Showcase products in action" },
];

// Website types with descriptions
const websiteTypes = [
  { id: "landing", label: "Landing Page", description: "Single-page conversion focused" },
  { id: "business", label: "Business Website", description: "5-10 pages for your company" },
  { id: "ecommerce", label: "E-commerce Store", description: "Sell products online" },
  { id: "portfolio", label: "Portfolio Site", description: "Showcase your work" },
  { id: "webapp", label: "Web Application", description: "Custom functionality" },
  { id: "redesign", label: "Website Redesign", description: "Refresh existing site" },
];

// Social media management options
const socialServices = [
  { id: "full-management", label: "Full Management", description: "We handle everything" },
  { id: "content-creation", label: "Content Creation Only", description: "We create, you post" },
  { id: "strategy", label: "Strategy & Planning", description: "Monthly content calendars" },
  { id: "paid-ads", label: "Paid Advertising", description: "Facebook, Instagram & Google ads" },
  { id: "influencer", label: "Influencer Marketing", description: "Connect with creators" },
];

// Social media platforms
const socialPlatforms = [
  { id: "instagram", label: "Instagram", popular: true },
  { id: "facebook", label: "Facebook", popular: true },
  { id: "tiktok", label: "TikTok", popular: true },
  { id: "twitter", label: "Twitter/X", popular: false },
  { id: "linkedin", label: "LinkedIn", popular: false },
  { id: "youtube", label: "YouTube", popular: true },
];

// Podcast/Voice-over options
const podcastServices = [
  { id: "studio-rental", label: "Studio Rental", description: "Book our professional studio" },
  { id: "full-production", label: "Full Production", description: "Recording + editing + mixing" },
  { id: "editing-only", label: "Editing Only", description: "We polish your recordings" },
  { id: "voice-over", label: "Voice-Over Services", description: "Professional voice talent" },
  { id: "distribution", label: "Distribution Setup", description: "Get on Spotify, Apple & more" },
];

// Subscription tier preferences
const subscriptionTiers = [
  { id: "essentials", label: "Essentials", description: "10 designs/month, 48hr turnaround", price: "500K/month" },
  { id: "professional", label: "Professional", description: "20 designs + 4 videos/month", price: "1.2M/month" },
  { id: "enterprise", label: "Enterprise", description: "Unlimited designs + dedicated manager", price: "3M/month" },
  { id: "custom", label: "Custom Package", description: "Let's build something tailored", price: "Custom" },
];

// How did you hear about us options
const referralSources = [
  { id: "google", label: "Google Search" },
  { id: "social", label: "Social Media" },
  { id: "referral", label: "Friend/Colleague Referral" },
  { id: "portfolio", label: "Saw Our Work" },
  { id: "event", label: "Event/Conference" },
  { id: "other", label: "Other" },
];

// Industry options for better understanding
const industryOptions = [
  { id: "music", label: "Music & Entertainment" },
  { id: "retail", label: "Retail & E-commerce" },
  { id: "tech", label: "Technology & Startups" },
  { id: "hospitality", label: "Hospitality & Tourism" },
  { id: "healthcare", label: "Healthcare & Wellness" },
  { id: "finance", label: "Finance & Banking" },
  { id: "education", label: "Education & Training" },
  { id: "ngo", label: "NGO & Non-Profit" },
  { id: "government", label: "Government & Public Sector" },
  { id: "real-estate", label: "Real Estate & Property" },
  { id: "agency", label: "Agency / Freelancer" },
  { id: "personal", label: "Personal / Individual" },
  { id: "other", label: "Other" },
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

// Step labels
const stepLabels = ["Select Service", "Project Details", "Contact Info"];

export default function GetStarted() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    // Contact info
    name: "",
    email: "",
    phone: "",
    companyType: "" as "company" | "individual" | "",
    companyName: "",
    industry: "",
    
    // Project basics
    timeline: "",
    budget: "",
    description: "",
    referenceLink: "",
    referralSource: "",
    
    // Branding-specific
    brandingType: "",
    hasExistingBrand: "" as "yes" | "no" | "",
    
    // Video-specific
    videoType: "",
    videoDuration: "",
    hasScript: "" as "yes" | "no" | "need-help" | "",
    
    // Website-specific
    websiteType: "",
    websitePages: "",
    hasContent: "" as "yes" | "no" | "partial" | "",
    currentWebsite: "",
    
    // Social media-specific
    socialService: "",
    socialPlatforms: [] as string[],
    postingFrequency: "",
    
    // Podcast-specific
    podcastService: "",
    studioDate: "",
    studioDuration: "",
    
    // Subscription-specific
    subscriptionTier: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

  // Trigger entrance animation
  useEffect(() => {
    setIsVisible(true);
  }, []);

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

  const handlePlatformToggle = (platformId: string) => {
    setFormData((prev) => ({
      ...prev,
      socialPlatforms: prev.socialPlatforms.includes(platformId)
        ? prev.socialPlatforms.filter((p) => p !== platformId)
        : [...prev.socialPlatforms, platformId],
    }));
    setHasUnsavedChanges(true);
  };

  const handleNext = () => {
    if (currentStep === 1 && selectedService) {
      setCurrentStep(2);
    } else if (currentStep === 2) {
      setCurrentStep(3);
    } else if (currentStep === 3) {
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
    } else if (currentStep === 3) {
      setCurrentStep(2);
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
      } else if (currentStep === 3 && canProceedStep3) {
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
    setCurrentStep(4);
  };

  // Get selected service details
  const getSelectedServiceDetails = () => {
    return serviceOptions.find((s) => s.id === selectedService);
  };

  const canProceedStep1 = selectedService !== null;
  
  // Step 2 validation - service-specific requirements
  const canProceedStep2 = (() => {
    if (!formData.timeline || !formData.budget) return false;
    
    switch (selectedService) {
      case "branding":
        return !!formData.brandingType;
      case "video":
        return !!formData.videoType;
      case "website":
        return !!formData.websiteType;
      case "social":
        return !!formData.socialService && formData.socialPlatforms.length > 0;
      case "podcast":
        return !!formData.podcastService;
      case "subscription":
        return !!formData.subscriptionTier;
      default:
        return true;
    }
  })();
  
  const canProceedStep3 =
    formData.name &&
    formData.email &&
    formData.phone &&
    formData.companyType &&
    !errors.name &&
    !errors.email &&
    !errors.phone;

  return (
    <Layout headerDarkMode={currentStep === 1}>
      <SEO 
        title="Get Started | Request a Quote from 9Yards"
        description="Start your creative project with 9Yards Content House. Quick quote for video production, branding, web development & marketing services."
        url="/get-started"
      />
      {/* Hero Header - Step 1 only */}
      {currentStep === 1 && (
        <section className="relative pt-28 sm:pt-32 pb-8 sm:pb-12 bg-gradient-to-b from-[#1a1a2e] to-[#16162a] overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
          </div>
          
          <div className="container-custom relative z-10">
            <div className={`max-w-3xl mx-auto text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {/* Eyebrow */}
              <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-4 sm:mb-5">
                Start Your Project
              </span>
              
              {/* Headline */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.15] mb-4 sm:mb-5 tracking-tight">
                Let's create something{" "}
                <span className="text-accent">extraordinary</span>
              </h1>
              
              {/* Subtext */}
              <p className="text-sm sm:text-base md:text-lg text-white/70 max-w-xl mx-auto leading-relaxed">
                Answer a few questions about your project and we'll put together a personalized plan within 24 hours.
              </p>
            </div>
          </div>
        </section>
      )}

      <section className={cn(
        "pb-32 md:pb-20 min-h-screen",
        currentStep === 1 ? "pt-8 sm:pt-12 bg-[#f8f8f5]" : "pt-28 sm:pt-32 bg-gradient-to-b from-primary/5 to-background"
      )}>
        <div className="container-custom" onKeyDown={handleKeyDown} ref={formRef}>
          {/* Progress Indicator - Updated for 4 steps */}
          {currentStep < 5 && (
            <div className={`max-w-2xl mx-auto mb-8 sm:mb-12 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '200ms' }}>
              <div className="flex items-center justify-between relative">
                {/* Progress Line Background */}
                <div className="absolute top-5 left-[12.5%] right-[12.5%] h-1 bg-border rounded-full" />
                {/* Progress Line Active */}
                <div
                  className="absolute top-5 left-[12.5%] h-1 bg-accent rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${((currentStep - 1) / 3) * 75}%` }}
                />

                {/* Steps */}
                {[1, 2, 3, 4].map((step) => (
                  <div key={step} className="relative z-10 flex flex-col items-center flex-1">
                    <div
                      className={cn(
                        "w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 shadow-sm",
                        currentStep > step
                          ? "bg-accent text-white shadow-accent/30"
                          : currentStep === step
                          ? "bg-accent text-white ring-4 ring-accent/20 shadow-lg shadow-accent/20"
                          : "bg-white border-2 border-border text-muted-foreground"
                      )}
                    >
                      {currentStep > step ? (
                        <Check className="w-5 h-5" strokeWidth={3} />
                      ) : (
                        step
                      )}
                    </div>
                    <span
                      className={cn(
                        "mt-2.5 text-[10px] sm:text-xs font-medium transition-colors text-center",
                        currentStep >= step ? "text-accent" : "text-muted-foreground"
                      )}
                    >
                      {step === 1 && "Service"}
                      {step === 2 && "Details"}
                      {step === 3 && "Contact"}
                      {step === 4 && "Done"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 1: Service Selection */}
          {currentStep === 1 && (
            <div className={`max-w-5xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '300ms' }}>
              {/* Section Header */}
              <div className="text-center mb-8 sm:mb-10">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 text-foreground">
                  What type of project do you have in mind?
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Select the service that best matches your needs
                </p>
              </div>

              {/* Service Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                {serviceOptions.map((service, index) => {
                  const Icon = service.icon;
                  const isSelected = selectedService === service.id;

                  return (
                    <button
                      key={service.id}
                      onClick={() => handleServiceSelect(service.id)}
                      aria-pressed={isSelected}
                      className={cn(
                        "group relative h-[200px] sm:h-[220px] rounded-2xl overflow-hidden text-left transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2",
                        isSelected
                          ? "ring-2 ring-accent shadow-xl shadow-accent/20 scale-[1.02]"
                          : "hover:shadow-xl hover:scale-[1.01]"
                      )}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {/* Background Image */}
                      <img
                        src={service.image}
                        alt=""
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      
                      {/* Gradient Overlay */}
                      <div className={cn(
                        "absolute inset-0 transition-all duration-300",
                        isSelected
                          ? "bg-gradient-to-t from-accent/95 via-accent/70 to-accent/30"
                          : "bg-gradient-to-t from-black/90 via-black/50 to-black/20 group-hover:from-black/95 group-hover:via-black/60"
                      )} />
                      
                      {/* Popular Badge */}
                      {service.popular && !isSelected && (
                        <div className="absolute top-3 left-3 px-2.5 py-1 bg-accent text-white text-[10px] font-bold uppercase tracking-wider rounded-full">
                          Popular
                        </div>
                      )}
                      
                      {/* Selection Indicator */}
                      {isSelected && (
                        <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white flex items-center justify-center shadow-lg animate-scale-in">
                          <Check className="w-4 h-4 text-accent" strokeWidth={3} />
                        </div>
                      )}
                      
                      {/* Content */}
                      <div className="absolute inset-0 p-5 sm:p-6 flex flex-col justify-end">
                        {/* Icon */}
                        <div className={cn(
                          "w-11 h-11 rounded-xl flex items-center justify-center mb-3 transition-all duration-300",
                          isSelected
                            ? "bg-white/20 backdrop-blur-sm"
                            : "bg-white/10 backdrop-blur-sm group-hover:bg-white/20"
                        )}>
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        
                        {/* Text */}
                        <h3 className="font-bold text-lg sm:text-xl text-white mb-1">{service.title}</h3>
                        <p className="text-sm text-white/80">{service.description}</p>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Trust Badges */}
              <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  <span>Free consultation included</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-accent" />
                  <span>Response within 24 hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-accent" />
                  <span>No commitment required</span>
                </div>
              </div>

              {/* Desktop Continue Button */}
              <div className="mt-8 sm:mt-10 hidden md:flex flex-col items-center gap-4">
                <Button
                  variant="accent"
                  size="lg"
                  onClick={handleNext}
                  disabled={!canProceedStep1}
                  className="px-10 h-14 text-base font-semibold rounded-full shadow-lg hover:shadow-xl transition-all"
                >
                  Continue to Project Details
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>

              {/* Mobile Sticky Continue Button */}
              <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/95 backdrop-blur-md border-t border-border md:hidden z-40 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
                <Button
                  variant="accent"
                  size="lg"
                  onClick={handleNext}
                  disabled={!canProceedStep1}
                  className="w-full h-12 text-base font-semibold rounded-full"
                >
                  Continue
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          )}

          {/* Step 2: Project Details - Service-Specific */}
          {currentStep === 2 && (
            <div className="max-w-2xl mx-auto animate-fade-in pb-24 md:pb-0">
              {/* Section Header */}
              <div className="text-center mb-8 sm:mb-10">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-foreground">
                  Tell us about your project
                </h1>
                <p className="text-sm sm:text-base text-muted-foreground">
                  These details help us prepare a more accurate proposal
                </p>
              </div>

              {/* Selected Service Badge */}
              {selectedService && (
                <div className="mb-6 flex items-center justify-center">
                  <div className="inline-flex items-center gap-3 bg-accent/10 border border-accent/20 text-accent px-4 py-2.5 rounded-full text-sm font-medium">
                    {(() => {
                      const service = getSelectedServiceDetails();
                      const Icon = service?.icon || Sparkles;
                      return (
                        <>
                          <Icon className="w-4 h-4" />
                          {service?.title}
                          <button
                            onClick={() => setCurrentStep(1)}
                            aria-label="Change service"
                            className="ml-1 hover:bg-accent/20 rounded-full p-1 transition-colors"
                          >
                            <X className="w-3.5 h-3.5" />
                          </button>
                        </>
                      );
                    })()}
                  </div>
                </div>
              )}

              {/* Form Card */}
              <div className="bg-white rounded-2xl sm:rounded-3xl border border-border p-5 sm:p-8 shadow-xl shadow-black/5">
                <form className="space-y-8">
                  
                  {/* BRANDING & DESIGN */}
                  {selectedService === "branding" && (
                    <div className="space-y-5 animate-fade-in">
                      <div className="flex items-center gap-3 pb-3 border-b border-border">
                        <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                          <Palette className="w-4 h-4 text-accent" />
                        </div>
                        <h3 className="font-semibold text-lg">What do you need designed?</h3>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-3">
                        {brandingTypes.map((type) => (
                          <button
                            key={type.id}
                            type="button"
                            onClick={() => {
                              setFormData((prev) => ({ ...prev, brandingType: type.id }));
                              setHasUnsavedChanges(true);
                            }}
                            className={cn(
                              "p-4 rounded-xl border-2 text-left transition-all",
                              formData.brandingType === type.id
                                ? "border-accent bg-accent/5"
                                : "border-border hover:border-accent/50"
                            )}
                          >
                            <div className="font-semibold text-sm mb-0.5">{type.label}</div>
                            <div className="text-xs text-muted-foreground">{type.description}</div>
                          </button>
                        ))}
                      </div>
                      
                      <div>
                        <Label className="text-sm font-medium">Do you have existing brand assets?</Label>
                        <div className="grid grid-cols-2 gap-3 mt-2">
                          <button
                            type="button"
                            onClick={() => {
                              setFormData((prev) => ({ ...prev, hasExistingBrand: "yes" }));
                              setHasUnsavedChanges(true);
                            }}
                            className={cn(
                              "p-3 rounded-xl border-2 text-center font-medium transition-all",
                              formData.hasExistingBrand === "yes"
                                ? "border-accent bg-accent/5 text-accent"
                                : "border-border hover:border-accent/50"
                            )}
                          >
                            Yes, I have existing assets
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              setFormData((prev) => ({ ...prev, hasExistingBrand: "no" }));
                              setHasUnsavedChanges(true);
                            }}
                            className={cn(
                              "p-3 rounded-xl border-2 text-center font-medium transition-all",
                              formData.hasExistingBrand === "no"
                                ? "border-accent bg-accent/5 text-accent"
                                : "border-border hover:border-accent/50"
                            )}
                          >
                            Starting from scratch
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* VIDEO PRODUCTION */}
                  {selectedService === "video" && (
                    <div className="space-y-5 animate-fade-in">
                      <div className="flex items-center gap-3 pb-3 border-b border-border">
                        <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                          <Video className="w-4 h-4 text-accent" />
                        </div>
                        <h3 className="font-semibold text-lg">What type of video do you need?</h3>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-3">
                        {videoTypes.map((type) => (
                          <button
                            key={type.id}
                            type="button"
                            onClick={() => {
                              setFormData((prev) => ({ ...prev, videoType: type.id }));
                              setHasUnsavedChanges(true);
                            }}
                            className={cn(
                              "p-4 rounded-xl border-2 text-left transition-all",
                              formData.videoType === type.id
                                ? "border-accent bg-accent/5"
                                : "border-border hover:border-accent/50"
                            )}
                          >
                            <div className="font-semibold text-sm mb-0.5">{type.label}</div>
                            <div className="text-xs text-muted-foreground">{type.description}</div>
                          </button>
                        ))}
                      </div>
                      
                      <div>
                        <Label className="text-sm font-medium">Do you have a script or concept?</Label>
                        <div className="grid grid-cols-3 gap-3 mt-2">
                          <button
                            type="button"
                            onClick={() => {
                              setFormData((prev) => ({ ...prev, hasScript: "yes" }));
                              setHasUnsavedChanges(true);
                            }}
                            className={cn(
                              "p-3 rounded-xl border-2 text-center text-sm font-medium transition-all",
                              formData.hasScript === "yes"
                                ? "border-accent bg-accent/5 text-accent"
                                : "border-border hover:border-accent/50"
                            )}
                          >
                            Yes, ready to go
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              setFormData((prev) => ({ ...prev, hasScript: "no" }));
                              setHasUnsavedChanges(true);
                            }}
                            className={cn(
                              "p-3 rounded-xl border-2 text-center text-sm font-medium transition-all",
                              formData.hasScript === "no"
                                ? "border-accent bg-accent/5 text-accent"
                                : "border-border hover:border-accent/50"
                            )}
                          >
                            Just an idea
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              setFormData((prev) => ({ ...prev, hasScript: "need-help" }));
                              setHasUnsavedChanges(true);
                            }}
                            className={cn(
                              "p-3 rounded-xl border-2 text-center text-sm font-medium transition-all",
                              formData.hasScript === "need-help"
                                ? "border-accent bg-accent/5 text-accent"
                                : "border-border hover:border-accent/50"
                            )}
                          >
                            Need help with this
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* WEBSITE DEVELOPMENT */}
                  {selectedService === "website" && (
                    <div className="space-y-5 animate-fade-in">
                      <div className="flex items-center gap-3 pb-3 border-b border-border">
                        <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                          <Globe className="w-4 h-4 text-accent" />
                        </div>
                        <h3 className="font-semibold text-lg">What type of website do you need?</h3>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-3">
                        {websiteTypes.map((type) => (
                          <button
                            key={type.id}
                            type="button"
                            onClick={() => {
                              setFormData((prev) => ({ ...prev, websiteType: type.id }));
                              setHasUnsavedChanges(true);
                            }}
                            className={cn(
                              "p-4 rounded-xl border-2 text-left transition-all",
                              formData.websiteType === type.id
                                ? "border-accent bg-accent/5"
                                : "border-border hover:border-accent/50"
                            )}
                          >
                            <div className="font-semibold text-sm mb-0.5">{type.label}</div>
                            <div className="text-xs text-muted-foreground">{type.description}</div>
                          </button>
                        ))}
                      </div>
                      
                      <div>
                        <Label className="text-sm font-medium">Do you have content ready?</Label>
                        <p className="text-xs text-muted-foreground mb-2">Images, text, product info, etc.</p>
                        <div className="grid grid-cols-3 gap-3">
                          <button
                            type="button"
                            onClick={() => {
                              setFormData((prev) => ({ ...prev, hasContent: "yes" }));
                              setHasUnsavedChanges(true);
                            }}
                            className={cn(
                              "p-3 rounded-xl border-2 text-center text-sm font-medium transition-all",
                              formData.hasContent === "yes"
                                ? "border-accent bg-accent/5 text-accent"
                                : "border-border hover:border-accent/50"
                            )}
                          >
                            Yes, all ready
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              setFormData((prev) => ({ ...prev, hasContent: "partial" }));
                              setHasUnsavedChanges(true);
                            }}
                            className={cn(
                              "p-3 rounded-xl border-2 text-center text-sm font-medium transition-all",
                              formData.hasContent === "partial"
                                ? "border-accent bg-accent/5 text-accent"
                                : "border-border hover:border-accent/50"
                            )}
                          >
                            Some of it
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              setFormData((prev) => ({ ...prev, hasContent: "no" }));
                              setHasUnsavedChanges(true);
                            }}
                            className={cn(
                              "p-3 rounded-xl border-2 text-center text-sm font-medium transition-all",
                              formData.hasContent === "no"
                                ? "border-accent bg-accent/5 text-accent"
                                : "border-border hover:border-accent/50"
                            )}
                          >
                            Need help with this
                          </button>
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="currentWebsite" className="text-sm font-medium">
                          Current website URL <span className="text-muted-foreground font-normal">(if any)</span>
                        </Label>
                        <Input
                          id="currentWebsite"
                          name="currentWebsite"
                          value={formData.currentWebsite}
                          onChange={handleInputChange}
                          placeholder="https://yoursite.com"
                          className="mt-1.5 h-11 rounded-lg border-border focus:border-accent focus:ring-accent"
                        />
                      </div>
                    </div>
                  )}

                  {/* SOCIAL MEDIA MANAGEMENT */}
                  {selectedService === "social" && (
                    <div className="space-y-5 animate-fade-in">
                      <div className="flex items-center gap-3 pb-3 border-b border-border">
                        <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                          <Smartphone className="w-4 h-4 text-accent" />
                        </div>
                        <h3 className="font-semibold text-lg">What social media help do you need?</h3>
                      </div>
                      
                      <div className="space-y-3">
                        {socialServices.map((service) => (
                          <button
                            key={service.id}
                            type="button"
                            onClick={() => {
                              setFormData((prev) => ({ ...prev, socialService: service.id }));
                              setHasUnsavedChanges(true);
                            }}
                            className={cn(
                              "w-full p-4 rounded-xl border-2 text-left transition-all",
                              formData.socialService === service.id
                                ? "border-accent bg-accent/5"
                                : "border-border hover:border-accent/50"
                            )}
                          >
                            <div className="font-semibold text-sm mb-0.5">{service.label}</div>
                            <div className="text-xs text-muted-foreground">{service.description}</div>
                          </button>
                        ))}
                      </div>
                      
                      <div>
                        <Label className="text-sm font-medium">Which platforms do you need help with?</Label>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {socialPlatforms.map((platform) => (
                            <button
                              key={platform.id}
                              type="button"
                              onClick={() => handlePlatformToggle(platform.id)}
                              className={cn(
                                "px-4 py-2 rounded-full text-sm font-medium transition-all",
                                formData.socialPlatforms.includes(platform.id)
                                  ? "bg-accent text-white shadow-md"
                                  : "bg-muted text-muted-foreground hover:bg-accent/10 hover:text-accent"
                              )}
                            >
                              {platform.label}
                              {platform.popular && !formData.socialPlatforms.includes(platform.id) && (
                                <span className="ml-1 text-[10px] opacity-60">★</span>
                              )}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* PODCAST & VOICE-OVER */}
                  {selectedService === "podcast" && (
                    <div className="space-y-5 animate-fade-in">
                      <div className="flex items-center gap-3 pb-3 border-b border-border">
                        <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                          <Mic className="w-4 h-4 text-accent" />
                        </div>
                        <h3 className="font-semibold text-lg">What podcast service do you need?</h3>
                      </div>
                      
                      <div className="space-y-3">
                        {podcastServices.map((service) => (
                          <button
                            key={service.id}
                            type="button"
                            onClick={() => {
                              setFormData((prev) => ({ ...prev, podcastService: service.id }));
                              setHasUnsavedChanges(true);
                            }}
                            className={cn(
                              "w-full p-4 rounded-xl border-2 text-left transition-all",
                              formData.podcastService === service.id
                                ? "border-accent bg-accent/5"
                                : "border-border hover:border-accent/50"
                            )}
                          >
                            <div className="font-semibold text-sm mb-0.5">{service.label}</div>
                            <div className="text-xs text-muted-foreground">{service.description}</div>
                          </button>
                        ))}
                      </div>
                      
                      {(formData.podcastService === "studio-rental" || formData.podcastService === "full-production") && (
                        <div className="grid grid-cols-2 gap-4 animate-fade-in">
                          <div>
                            <Label htmlFor="studioDate" className="text-sm font-medium">Preferred Date</Label>
                            <Input
                              id="studioDate"
                              name="studioDate"
                              type="date"
                              value={formData.studioDate}
                              onChange={handleInputChange}
                              className="mt-1.5 h-11 rounded-lg border-border focus:border-accent focus:ring-accent"
                            />
                          </div>
                          <div>
                            <Label htmlFor="studioDuration" className="text-sm font-medium">Session Length</Label>
                            <select
                              id="studioDuration"
                              name="studioDuration"
                              value={formData.studioDuration}
                              onChange={handleInputChange}
                              className="mt-1.5 w-full h-11 rounded-lg border border-input bg-background px-3 py-2 text-sm focus:border-accent focus:ring-1 focus:ring-accent"
                            >
                              <option value="">Select duration</option>
                              <option value="1hr">1 Hour - 150K UGX</option>
                              <option value="2hr">2 Hours - 280K UGX</option>
                              <option value="half-day">Half Day (4hr) - 500K UGX</option>
                              <option value="full-day">Full Day (8hr) - 900K UGX</option>
                            </select>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* SUBSCRIPTION */}
                  {selectedService === "subscription" && (
                    <div className="space-y-5 animate-fade-in">
                      <div className="flex items-center gap-3 pb-3 border-b border-border">
                        <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                          <RefreshCw className="w-4 h-4 text-accent" />
                        </div>
                        <h3 className="font-semibold text-lg">Which subscription tier interests you?</h3>
                      </div>
                      
                      <div className="space-y-3">
                        {subscriptionTiers.map((tier) => (
                          <button
                            key={tier.id}
                            type="button"
                            onClick={() => {
                              setFormData((prev) => ({ ...prev, subscriptionTier: tier.id }));
                              setHasUnsavedChanges(true);
                            }}
                            className={cn(
                              "w-full p-4 rounded-xl border-2 text-left transition-all flex items-center justify-between",
                              formData.subscriptionTier === tier.id
                                ? "border-accent bg-accent/5"
                                : "border-border hover:border-accent/50"
                            )}
                          >
                            <div>
                              <div className="font-semibold text-sm mb-0.5">{tier.label}</div>
                              <div className="text-xs text-muted-foreground">{tier.description}</div>
                            </div>
                            <div className="text-sm font-bold text-accent">{tier.price}</div>
                          </button>
                        ))}
                      </div>
                      
                      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                        <p className="text-sm text-blue-800">
                          <strong>Not sure which tier?</strong> We'll help you choose the right plan based on your needs during our consultation call.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* TIMELINE & BUDGET - For all services */}
                  <div className="space-y-5 pt-4 border-t border-border">
                    <div className="flex items-center gap-3 pb-3">
                      <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                        <Calendar className="w-4 h-4 text-accent" />
                      </div>
                      <h3 className="font-semibold text-lg">Timeline & Budget</h3>
                    </div>

                    <div>
                      <Label className="text-sm font-medium">When do you need this completed?</Label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-2">
                        {timelineOptions.map((option) => (
                          <button
                            key={option.id}
                            type="button"
                            onClick={() => {
                              setFormData((prev) => ({ ...prev, timeline: option.id }));
                              setHasUnsavedChanges(true);
                            }}
                            className={cn(
                              "p-3 rounded-xl border-2 text-center transition-all",
                              formData.timeline === option.id
                                ? "border-accent bg-accent/5"
                                : "border-border hover:border-accent/50",
                              option.urgency === "high" && formData.timeline !== option.id && "border-amber-200"
                            )}
                          >
                            <div className="font-semibold text-sm">{option.label}</div>
                            <div className="text-[11px] text-muted-foreground mt-0.5">
                              {option.description}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <Label className="text-sm font-medium">What's your budget range?</Label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mt-2">
                        {budgetOptions.map((option) => (
                          <button
                            key={option.id}
                            type="button"
                            onClick={() => {
                              setFormData((prev) => ({ ...prev, budget: option.id }));
                              setHasUnsavedChanges(true);
                            }}
                            className={cn(
                              "p-3 rounded-xl border-2 text-left transition-all",
                              formData.budget === option.id
                                ? "border-accent bg-accent/5"
                                : "border-border hover:border-accent/50"
                            )}
                          >
                            <div className="font-semibold text-sm">{option.label}</div>
                            <div className="text-[11px] text-muted-foreground">{option.description}</div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Project Description */}
                  <div>
                    <Label htmlFor="description" className="text-sm font-medium">
                      Tell us more about your project <span className="text-muted-foreground font-normal">(Optional)</span>
                    </Label>
                    <Textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      placeholder="Share any specific requirements, goals, or ideas you have in mind..."
                      rows={4}
                      className="mt-1.5 rounded-lg border-border focus:border-accent focus:ring-accent resize-none"
                    />
                  </div>

                  {/* Reference Link */}
                  {(selectedService === "branding" || selectedService === "video" || selectedService === "website") && (
                    <div className="animate-fade-in">
                      <Label htmlFor="referenceLink" className="text-sm font-medium flex items-center gap-2">
                        <Upload className="w-4 h-4" />
                        Reference or inspiration link <span className="text-muted-foreground font-normal">(Optional)</span>
                      </Label>
                      <Input
                        id="referenceLink"
                        name="referenceLink"
                        value={formData.referenceLink}
                        onChange={handleInputChange}
                        placeholder="Pinterest, Behance, YouTube, or any example you like"
                        className="mt-1.5 h-11 rounded-lg border-border focus:border-accent focus:ring-accent"
                      />
                    </div>
                  )}
                </form>

                {/* Desktop Navigation Buttons */}
                <div className="hidden md:flex items-center justify-between mt-8 pt-6 border-t border-border">
                  <Button variant="ghost" onClick={handleBack} className="text-muted-foreground hover:text-foreground">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back
                  </Button>
                  <Button
                    variant="accent"
                    onClick={handleNext}
                    disabled={!canProceedStep2}
                    className="px-8 h-12 text-base font-semibold rounded-full shadow-lg hover:shadow-xl transition-all"
                  >
                    Continue to Contact Info
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </div>

              {/* Mobile Sticky Bottom Buttons */}
              <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/95 backdrop-blur-md border-t border-border md:hidden z-40 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
                <div className="flex gap-3">
                  <Button variant="ghost" onClick={handleBack} className="flex-shrink-0 w-12 h-12 p-0">
                    <ArrowLeft className="w-5 h-5" />
                  </Button>
                  <Button
                    variant="accent"
                    onClick={handleNext}
                    disabled={!canProceedStep2}
                    className="flex-1 h-12 text-base font-semibold rounded-full"
                  >
                    Continue
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Contact Information */}
          {currentStep === 3 && (
            <div className="max-w-2xl mx-auto animate-fade-in pb-24 md:pb-0">
              {/* Section Header */}
              <div className="text-center mb-8 sm:mb-10">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-foreground">
                  Almost there! How can we reach you?
                </h1>
                <p className="text-sm sm:text-base text-muted-foreground">
                  We'll use this information to send you a personalized proposal
                </p>
              </div>

              {/* Form Card */}
              <div className="bg-white rounded-2xl sm:rounded-3xl border border-border p-5 sm:p-8 shadow-xl shadow-black/5">
                <form className="space-y-6">
                  {/* Contact Information */}
                  <div className="space-y-5">
                    <div className="flex items-center gap-3 pb-3 border-b border-border">
                      <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                        <User className="w-4 h-4 text-accent" />
                      </div>
                      <h3 className="font-semibold text-lg">Your Details</h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-sm font-medium">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          onBlur={handleBlur}
                          placeholder="John Doe"
                          className={cn(
                            "mt-1.5 h-11 rounded-lg border-border focus:border-accent focus:ring-accent",
                            errors.name && touched.name && "border-red-500 focus:border-red-500 focus:ring-red-500"
                          )}
                          autoComplete="name"
                        />
                        {errors.name && touched.name && (
                          <p className="text-xs text-red-500 mt-1.5 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            {errors.name}
                          </p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-sm font-medium">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          inputMode="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          onBlur={handleBlur}
                          placeholder="john@example.com"
                          className={cn(
                            "mt-1.5 h-11 rounded-lg border-border focus:border-accent focus:ring-accent",
                            errors.email && touched.email && "border-red-500 focus:border-red-500 focus:ring-red-500"
                          )}
                          autoComplete="email"
                        />
                        {errors.email && touched.email && (
                          <p className="text-xs text-red-500 mt-1.5 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="phone" className="text-sm font-medium">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        inputMode="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        placeholder="+256 700 000 000"
                        className={cn(
                          "mt-1.5 h-11 rounded-lg border-border focus:border-accent focus:ring-accent",
                          errors.phone && touched.phone && "border-red-500 focus:border-red-500 focus:ring-red-500"
                        )}
                        autoComplete="tel"
                      />
                      {errors.phone && touched.phone && (
                        <p className="text-xs text-red-500 mt-1.5 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label className="text-sm font-medium">Are you representing a company or yourself? *</Label>
                      <div className="flex gap-3 mt-2">
                        <button
                          type="button"
                          onClick={() => {
                            setFormData((prev) => ({ ...prev, companyType: "company" }));
                            setHasUnsavedChanges(true);
                          }}
                          className={cn(
                            "flex-1 flex items-center justify-center gap-2.5 p-4 rounded-xl border-2 transition-all font-medium",
                            formData.companyType === "company"
                              ? "border-accent bg-accent/5 text-accent"
                              : "border-border hover:border-accent/50 text-muted-foreground hover:text-foreground"
                          )}
                        >
                          <Building2 className="w-5 h-5" />
                          Company / Business
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setFormData((prev) => ({ ...prev, companyType: "individual" }));
                            setHasUnsavedChanges(true);
                          }}
                          className={cn(
                            "flex-1 flex items-center justify-center gap-2.5 p-4 rounded-xl border-2 transition-all font-medium",
                            formData.companyType === "individual"
                              ? "border-accent bg-accent/5 text-accent"
                              : "border-border hover:border-accent/50 text-muted-foreground hover:text-foreground"
                          )}
                        >
                          <User className="w-5 h-5" />
                          Individual
                        </button>
                      </div>
                    </div>

                    {formData.companyType === "company" && (
                      <div className="animate-fade-in space-y-4">
                        <div>
                          <Label htmlFor="companyName" className="text-sm font-medium">Company / Brand Name</Label>
                          <Input
                            id="companyName"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleInputChange}
                            placeholder="Your Company Ltd"
                            className="mt-1.5 h-11 rounded-lg border-border focus:border-accent focus:ring-accent"
                            autoComplete="organization"
                          />
                        </div>
                        
                        <div>
                          <Label className="text-sm font-medium">Industry</Label>
                          <select
                            name="industry"
                            value={formData.industry}
                            onChange={handleInputChange}
                            className="mt-1.5 w-full h-11 rounded-lg border border-input bg-background px-3 py-2 text-sm focus:border-accent focus:ring-1 focus:ring-accent"
                          >
                            <option value="">Select your industry</option>
                            {industryOptions.map((option) => (
                              <option key={option.id} value={option.id}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* How did you hear about us */}
                  <div className="space-y-4 pt-4 border-t border-border">
                    <div>
                      <Label className="text-sm font-medium">How did you hear about 9Yards?</Label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mt-2">
                        {referralSources.map((source) => (
                          <button
                            key={source.id}
                            type="button"
                            onClick={() => {
                              setFormData((prev) => ({ ...prev, referralSource: source.id }));
                              setHasUnsavedChanges(true);
                            }}
                            className={cn(
                              "p-3 rounded-xl border-2 text-center text-sm font-medium transition-all",
                              formData.referralSource === source.id
                                ? "border-accent bg-accent/5 text-accent"
                                : "border-border hover:border-accent/50 text-muted-foreground hover:text-foreground"
                            )}
                          >
                            {source.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </form>

                {/* Summary Preview */}
                <div className="mt-8 p-4 bg-muted/50 rounded-xl">
                  <h4 className="font-semibold text-sm mb-3 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-accent" />
                    Request Summary
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Service:</span>
                      <span className="font-medium">{getSelectedServiceDetails()?.title}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Timeline:</span>
                      <span className="font-medium">{timelineOptions.find(t => t.id === formData.timeline)?.label || "Not selected"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Budget:</span>
                      <span className="font-medium">{budgetOptions.find(b => b.id === formData.budget)?.label || "Not selected"}</span>
                    </div>
                  </div>
                </div>

                {/* Desktop Navigation Buttons */}
                <div className="hidden md:flex items-center justify-between mt-8 pt-6 border-t border-border">
                  <Button variant="ghost" onClick={handleBack} className="text-muted-foreground hover:text-foreground">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back
                  </Button>
                  <div className="flex flex-col items-end gap-3">
                    <Button
                      variant="accent"
                      onClick={handleNext}
                      disabled={!canProceedStep3 || isSubmitting}
                      className="px-8 h-12 text-base font-semibold rounded-full shadow-lg hover:shadow-xl transition-all"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          Submit Request
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </>
                      )}
                    </Button>
                    <p className="text-xs text-muted-foreground flex items-center gap-1.5">
                      <Shield className="w-3.5 h-3.5" />
                      Your information is secure and will not be shared
                    </p>
                  </div>
                </div>
              </div>

              {/* Mobile Sticky Bottom Buttons */}
              <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/95 backdrop-blur-md border-t border-border md:hidden z-40 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
                <div className="flex gap-3">
                  <Button variant="ghost" onClick={handleBack} className="flex-shrink-0 w-12 h-12 p-0">
                    <ArrowLeft className="w-5 h-5" />
                  </Button>
                  <Button
                    variant="accent"
                    onClick={handleNext}
                    disabled={!canProceedStep3 || isSubmitting}
                    className="flex-1 h-12 text-base font-semibold rounded-full"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Request
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Confirmation */}
          {currentStep === 4 && isSubmitted && (
            <div className="max-w-2xl mx-auto text-center animate-fade-in">
              {/* Success Animation */}
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-6">
                <div className="absolute inset-0 bg-green-100 rounded-full animate-ping opacity-30" />
                <div className="relative w-full h-full bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30">
                  <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                </div>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-foreground">
                Thank you, {formData.name.split(" ")[0]}!
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground mb-6">
                Your project request has been received. We're excited to bring your vision to life.
              </p>

              {/* Response Time Badge */}
              {selectedService && (
                <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-5 py-2.5 rounded-full text-sm font-semibold mb-8">
                  <Clock className="w-4 h-4" />
                  Expected response: {getSelectedServiceDetails()?.responseTime}
                </div>
              )}

              {/* Next Steps Card */}
              <div className="bg-white rounded-2xl sm:rounded-3xl border border-border p-6 sm:p-8 text-left mb-8 shadow-xl shadow-black/5">
                <h3 className="font-bold text-lg mb-5 text-center">What happens next?</h3>
                <ul className="space-y-5">
                  {[
                    { icon: FileText, title: "We Review Your Brief", desc: "Our team will carefully review your project requirements and goals" },
                    { icon: Phone, title: "Personalized Response", desc: "Expect a call or email within 24 hours with tailored recommendations" },
                    { icon: Target, title: "Strategy & Proposal", desc: "We'll prepare a detailed proposal with timeline and investment options" },
                  ].map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <li key={i} className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center flex-shrink-0 shadow-md">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">{item.title}</p>
                          <p className="text-sm text-muted-foreground mt-0.5">{item.desc}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* WhatsApp Option */}
              <div className="bg-gradient-to-br from-green-50 to-green-100/50 border border-green-200 rounded-2xl p-5 sm:p-6 mb-8">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <MessageCircle className="w-5 h-5 text-green-600" />
                  <p className="font-semibold text-green-800">Need to talk sooner?</p>
                </div>
                <p className="text-sm text-green-700 mb-4">
                  Message us directly on WhatsApp for immediate assistance
                </p>
                <a
                  href="https://wa.me/256700000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-green-700 transition-all shadow-md hover:shadow-lg"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat on WhatsApp
                </a>
              </div>

              {/* Trust Badge */}
              <div className="bg-accent/5 border border-accent/10 rounded-xl p-5 mb-8">
                <p className="text-sm text-muted-foreground mb-1">
                  Trusted by 50+ brands across East Africa
                </p>
                <p className="font-bold text-accent">
                  97% client satisfaction rate
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button variant="accent" size="lg" asChild className="rounded-full px-8 h-12 font-semibold">
                  <Link to="/">Back to Home</Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="rounded-full px-8 h-12 font-semibold">
                  <Link to="/portfolio">Explore Our Work</Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
