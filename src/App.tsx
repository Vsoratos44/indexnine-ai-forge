import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Service Pages
import CustomSoftware from "./pages/services/CustomSoftware";
import AiMl from "./pages/services/AiMl";
import DataEngineering from "./pages/services/DataEngineering";
import QaEngineering from "./pages/services/QaEngineering";

// Engagement Pages
import Enterprise from "./pages/engagement/Enterprise";
import InnovationLab from "./pages/engagement/InnovationLab";
import DedicatedTeams from "./pages/engagement/DedicatedTeams";
import OutcomeBased from "./pages/engagement/OutcomeBased";

// Insights Pages
import CaseStudies from "./pages/insights/CaseStudies";
import Blogs from "./pages/insights/Blogs";
import Ebooks from "./pages/insights/Ebooks";

// About Pages
import WhoWeAre from "./pages/about/WhoWeAre";
import Careers from "./pages/about/Careers";

// Events Platform Pages - Only user-facing features
import EventsPlatform from "./pages/events/EventsPlatform";
import RegistrationAndTicketing from "./pages/events/features/RegistrationAndTicketing";
import OnSiteExperience from "./pages/events/features/OnSiteExperience";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Service Routes */}
          <Route path="/services/custom-software" element={<CustomSoftware />} />
          <Route path="/services/ai-ml" element={<AiMl />} />
          <Route path="/services/data-engineering" element={<DataEngineering />} />
          <Route path="/services/qa-engineering" element={<QaEngineering />} />
          
          {/* Engagement Model Routes */}
          <Route path="/engagement/enterprise" element={<Enterprise />} />
          <Route path="/engagement/innovation-lab" element={<InnovationLab />} />
          <Route path="/engagement/dedicated-teams" element={<DedicatedTeams />} />
          <Route path="/engagement/outcome-based" element={<OutcomeBased />} />
          
          {/* Insights Routes */}
          <Route path="/insights/case-studies" element={<CaseStudies />} />
          <Route path="/insights/blogs" element={<Blogs />} />
          <Route path="/insights/ebooks" element={<Ebooks />} />
          
          {/* About Routes */}
          <Route path="/about/who-we-are" element={<WhoWeAre />} />
          <Route path="/about/careers" element={<Careers />} />
          
          {/* Events Platform Routes - User-facing only */}
          <Route path="/events" element={<EventsPlatform />} />
          <Route path="/events/features/registration-and-ticketing" element={<RegistrationAndTicketing />} />
          <Route path="/events/features/on-site-experience" element={<OnSiteExperience />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
