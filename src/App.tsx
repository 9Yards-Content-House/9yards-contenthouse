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
import PodcastProduction from "./pages/services/PodcastProduction";
import TVRadioProduction from "./pages/services/TVRadioProduction";
import VoiceOver from "./pages/services/VoiceOver";
import AICreative from "./pages/services/AICreative";
import AIConsulting from "./pages/services/AIConsulting";
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
          <Route path="/services/podcast-production" element={<PodcastProduction />} />
          <Route path="/services/tv-radio-production" element={<TVRadioProduction />} />
          <Route path="/services/voice-over" element={<VoiceOver />} />
          <Route path="/services/ai-creative" element={<AICreative />} />
          <Route path="/services/ai-consulting" element={<AIConsulting />} />
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
