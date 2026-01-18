import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import VideoProduction from "./pages/services/VideoProduction";
import Photography from "./pages/services/Photography";
import GraphicDesign from "./pages/services/GraphicDesign";
import PrintDesign from "./pages/services/PrintDesign";
import Branding from "./pages/services/Branding";
import SocialMediaCreative from "./pages/services/SocialMediaCreative";
import ConceptCreation from "./pages/services/ConceptCreation";
import MotionDesign from "./pages/services/MotionDesign";
import PodcastProduction from "./pages/services/PodcastProduction";
import TVRadioProduction from "./pages/services/TVRadioProduction";
import VoiceOver from "./pages/services/VoiceOver";
import AICreative from "./pages/services/AICreative";
import AIConsulting from "./pages/services/AIConsulting";
import SocialMediaMarketing from "./pages/services/SocialMediaMarketing";
import WebsiteDevelopment from "./pages/services/WebsiteDevelopment";
import InfluencerMarketing from "./pages/services/InfluencerMarketing";
import EmailMarketing from "./pages/services/EmailMarketing";
import Pricing from "./pages/Pricing";
import Portfolio from "./pages/Portfolio";
import Studio from "./pages/Studio";
import Contact from "./pages/Contact";
import GetStarted from "./pages/GetStarted";
import ThankYouContact from "./pages/ThankYouContact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
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
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/studio" element={<Studio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/thank-you/contact" element={<ThankYouContact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
