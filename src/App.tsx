import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { AuthProvider } from "./hooks/useAuth";
import ProtectedRoute from "./components/cms/ProtectedRoute";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// CMS Pages
import CMSLogin from "./pages/cms/Login";
import CMSDashboard from "./pages/cms/Dashboard";
import ContentEditor from "./pages/cms/ContentEditor";
import { EventManagement } from "./pages/cms/EventManagement";

// Service Pages
import CustomSoftware from "./pages/services/CustomSoftware";
import AiMl from "./pages/services/AiMl";
import DataEngineering from "./pages/services/DataEngineering";
import QaEngineering from "./pages/services/QaEngineering";
import ConsultingStrategy from "./pages/services/ConsultingStrategy";

// Studio Pages
import AiStudio from "./pages/studios/AiStudio";
import DataEngineeringStudio from "./pages/studios/DataEngineering";
import QualityEngineeringStudio from "./pages/studios/QualityEngineering";

// Engagement Pages
import Enterprise from "./pages/engagement/Enterprise";
import InnovationLab from "./pages/engagement/InnovationLab";
import DedicatedTeams from "./pages/engagement/DedicatedTeams";
import OutcomeBased from "./pages/engagement/OutcomeBased";
import ProjectBased from "./pages/engagement/ProjectBased";
import EventsMobileApp from "./pages/events/EventsMobileApp";

// Insights Pages
import CaseStudies from "./pages/insights/CaseStudies";
import Blogs from "./pages/insights/Blogs";
import Ebooks from "./pages/insights/Ebooks";

// Individual Blog Posts
import RobotFrameworkVsPlaywright from "./pages/insights/blog/RobotFrameworkVsPlaywright";

// Individual Case Studies
import GenesysModernization from "./pages/insights/case-study/GenesysModernization";
import LaunchCaseStudy from "./pages/case-studies/Launch";
import PivotCaseStudy from "./pages/case-studies/Pivot";
import GrowCaseStudy from "./pages/case-studies/Grow";
import MatureCaseStudy from "./pages/case-studies/Mature";

// About Pages
import About from "./pages/About";
import WhoWeAre from "./pages/about/WhoWeAre";
import Careers from "./pages/about/Careers";

// Events Platform Pages - Only user-facing features
import Events from "./pages/events/Events";
import OnSiteExperience from "./pages/events/features/OnSiteExperience";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Service Routes */}
          <Route path="/services/custom-software" element={<CustomSoftware />} />
          <Route path="/services/ai-ml" element={<AiMl />} />
          <Route path="/services/data-engineering" element={<DataEngineering />} />
          <Route path="/services/qa-engineering" element={<QaEngineering />} />
          <Route path="/services/consulting" element={<ConsultingStrategy />} />
          
          {/* Studio Routes */}
          <Route path="/studios/ai" element={<AiStudio />} />
          <Route path="/studios/data-engineering" element={<DataEngineeringStudio />} />
          <Route path="/studios/quality-engineering" element={<QualityEngineeringStudio />} />
          
          {/* Engagement Model Routes */}
          <Route path="/engagement/enterprise" element={<Enterprise />} />
          <Route path="/engagement/innovation-lab" element={<InnovationLab />} />
          <Route path="/engagement/dedicated-teams" element={<DedicatedTeams />} />
          <Route path="/engagement/outcome-based" element={<OutcomeBased />} />
          <Route path="/engagement/project-based" element={<ProjectBased />} />
          
          {/* Insights Routes */}
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/insights" element={<Blogs />} />
          <Route path="/resources/ebooks" element={<Ebooks />} />
          
          {/* Individual Blog Post Routes */}
          <Route path="/insights/blog/robot-framework-vs-playwright" element={<RobotFrameworkVsPlaywright />} />
          
          {/* Individual Case Study Routes */}
          <Route path="/case-studies/launch" element={<LaunchCaseStudy />} />
          <Route path="/case-studies/pivot" element={<PivotCaseStudy />} />
          <Route path="/case-studies/grow" element={<GrowCaseStudy />} />
          <Route path="/case-studies/mature" element={<MatureCaseStudy />} />
          <Route path="/insights/case-study/genesys-modernization" element={<GenesysModernization />} />
          
          {/* About Routes */}
          <Route path="/about" element={<About />} />
          <Route path="/about/who-we-are" element={<WhoWeAre />} />
          <Route path="/about/careers" element={<Careers />} />
          
          {/* Events Platform Routes - User-facing only */}
          <Route path="/events" element={<Events />} />
          <Route path="/events/mobile-app" element={<EventsMobileApp />} />
          <Route path="/events/features/on-site-experience" element={<OnSiteExperience />} />
          
          {/* CMS Routes */}
          <Route path="/cms/login" element={<CMSDashboard />} />
          <Route path="/cms/dashboard" element={<CMSDashboard />} />
          <Route path="/cms/events/:eventId" element={<EventManagement />} />
          <Route path="/cms/content/new" element={<ContentEditor />} />
          <Route path="/cms/content/edit/:id" element={<ContentEditor />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
