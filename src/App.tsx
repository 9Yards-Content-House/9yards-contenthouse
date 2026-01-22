import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import { PageLoader } from "@/components/ui/PageLoader";
import { ErrorBoundary } from "@/components/ErrorBoundary";

// Lazy load all pages for code splitting - reduces initial bundle by ~60-70%
const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const VideoProduction = lazy(() => import("./pages/services/VideoProduction"));
const Photography = lazy(() => import("./pages/services/Photography"));
const GraphicDesign = lazy(() => import("./pages/services/GraphicDesign"));
const PrintDesign = lazy(() => import("./pages/services/PrintDesign"));
const Branding = lazy(() => import("./pages/services/Branding"));
const SocialMediaCreative = lazy(() => import("./pages/services/SocialMediaCreative"));
const ConceptCreation = lazy(() => import("./pages/services/ConceptCreation"));
const MotionDesign = lazy(() => import("./pages/services/MotionDesign"));
const PodcastProduction = lazy(() => import("./pages/services/PodcastProduction"));
const TVRadioProduction = lazy(() => import("./pages/services/TVRadioProduction"));
const VoiceOver = lazy(() => import("./pages/services/VoiceOver"));
const AICreative = lazy(() => import("./pages/services/AICreative"));
const AIConsulting = lazy(() => import("./pages/services/AIConsulting"));
const SocialMediaMarketing = lazy(() => import("./pages/services/SocialMediaMarketing"));
const WebsiteDevelopment = lazy(() => import("./pages/services/WebsiteDevelopment"));
const InfluencerMarketing = lazy(() => import("./pages/services/InfluencerMarketing"));
const EmailMarketing = lazy(() => import("./pages/services/EmailMarketing"));
const Copywriting = lazy(() => import("./pages/services/Copywriting"));
const DigitalStrategy = lazy(() => import("./pages/services/DigitalStrategy"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Studio = lazy(() => import("./pages/Studio"));
const Contact = lazy(() => import("./pages/Contact"));
const GetStarted = lazy(() => import("./pages/GetStarted"));
const HowWeWork = lazy(() => import("./pages/HowWeWork"));
const Careers = lazy(() => import("./pages/Careers"));
const ThankYouContact = lazy(() => import("./pages/ThankYouContact"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider delayDuration={300}>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <ErrorBoundary>
          <Suspense fallback={<PageLoader />}>
            <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/video-production" element={<VideoProduction />} />
            <Route path="/services/photography" element={<Photography />} />
            <Route path="/services/graphic-design" element={<GraphicDesign />} />
            <Route path="/services/print-design" element={<PrintDesign />} />
            <Route path="/services/branding" element={<Branding />} />
            <Route path="/services/social-media-creative" element={<SocialMediaCreative />} />
            <Route path="/services/concept-creation" element={<ConceptCreation />} />
            <Route path="/services/motion-design" element={<MotionDesign />} />
            <Route path="/services/podcast-production" element={<PodcastProduction />} />
            <Route path="/services/tv-radio-production" element={<TVRadioProduction />} />
            <Route path="/services/voice-over" element={<VoiceOver />} />
            <Route path="/services/ai-creative" element={<AICreative />} />
            <Route path="/services/ai-consulting" element={<AIConsulting />} />
            <Route path="/services/social-media-marketing" element={<SocialMediaMarketing />} />
            <Route path="/services/website-development" element={<WebsiteDevelopment />} />
            <Route path="/services/influencer-marketing" element={<InfluencerMarketing />} />
            <Route path="/services/email-marketing" element={<EmailMarketing />} />
            <Route path="/services/copywriting" element={<Copywriting />} />
            <Route path="/services/digital-strategy" element={<DigitalStrategy />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/studio" element={<Studio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/get-started" element={<GetStarted />} />
            <Route path="/how-we-work" element={<HowWeWork />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/thank-you/contact" element={<ThankYouContact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        </ErrorBoundary>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
