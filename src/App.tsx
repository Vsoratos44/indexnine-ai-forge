import React, { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { AuthProvider } from "./hooks/useAuth";
import Index from "./pages/Index"; // Keep homepage immediate
import NotFound from "./pages/NotFound"; // Keep 404 immediate

console.log('App.tsx loading...');

// Lazy load all other pages to reduce initial bundle size
const CMSAuth = lazy(() => import("./pages/cms/Auth"));
const CMSDashboard = lazy(() => import("./pages/cms/Dashboard"));
const ContentEditor = lazy(() => import("./pages/cms/ContentEditor"));
const CMSArticles = lazy(() => import("./pages/cms/Articles"));
const CMSUsers = lazy(() => import("./pages/cms/Users"));
const MediaLibrary = lazy(() => import("./pages/cms/MediaLibrary"));
const Categories = lazy(() => import("./pages/cms/Categories"));
// Fix EventManagement import - it's a named export
const EventManagement = lazy(() => import("./pages/cms/EventManagement").then(m => ({ default: m.EventManagement })));

// Service Pages - Lazy loaded
const CustomSoftware = lazy(() => import("./pages/services/CustomSoftware"));
const AiMl = lazy(() => import("./pages/services/AiMl"));
const DataEngineering = lazy(() => import("./pages/services/DataEngineering"));
const QaEngineering = lazy(() => import("./pages/services/QaEngineering"));
const ConsultingStrategy = lazy(() => import("./pages/services/ConsultingStrategy"));

// Studio Pages - Lazy loaded
const AiStudio = lazy(() => import("./pages/studios/AiStudio"));
const DataEngineeringStudio = lazy(() => import("./pages/studios/DataEngineering"));
const QualityEngineeringStudio = lazy(() => import("./pages/studios/QualityEngineering"));

// Engagement Pages - Lazy loaded
const Enterprise = lazy(() => import("./pages/engagement/Enterprise"));
const InnovationLab = lazy(() => import("./pages/engagement/InnovationLab"));
const DedicatedTeams = lazy(() => import("./pages/engagement/DedicatedTeams"));
const OutcomeBased = lazy(() => import("./pages/engagement/OutcomeBased"));
const ProjectBased = lazy(() => import("./pages/engagement/ProjectBased"));
const EventsMobileApp = lazy(() => import("./pages/events/EventsMobileApp"));

// Insights Pages - Lazy loaded
const Blogs = lazy(() => import("./pages/insights/Blogs"));
const Ebooks = lazy(() => import("./pages/insights/Ebooks"));
const RobotFrameworkVsPlaywright = lazy(() => import("./pages/insights/blog/RobotFrameworkVsPlaywright"));
const AiChangeManagementPlaybook = lazy(() => import("./pages/insights/blog/AiChangeManagementPlaybook"));
const AgenticAiEnterpriseFuture = lazy(() => import("./pages/insights/blog/AgenticAiEnterpriseFuture"));
const BlogPost = lazy(() => import("./pages/insights/blog/BlogPost"));

// Case Study Pages - Lazy loaded
const GenesysModernization = lazy(() => import("./pages/insights/case-study/GenesysModernization"));
const LaunchCaseStudy = lazy(() => import("./pages/insights/case-studies/Launch"));
const PivotCaseStudy = lazy(() => import("./pages/insights/case-studies/Pivot"));
const GrowCaseStudy = lazy(() => import("./pages/insights/case-studies/Grow"));
const MatureCaseStudy = lazy(() => import("./pages/insights/case-studies/Mature"));
const CygeniqCaseStudy = lazy(() => import("./pages/insights/case-studies/Cygeniq"));
const TripjackCaseStudy = lazy(() => import("./pages/insights/case-studies/Tripjack"));

// About Pages - Lazy loaded
const About = lazy(() => import("./pages/About"));
const WhoWeAre = lazy(() => import("./pages/about/WhoWeAre"));
const Careers = lazy(() => import("./pages/about/Careers"));

// Events Platform Pages - Lazy loaded
const Events = lazy(() => import("./pages/events/Events"));
const OnSiteExperience = lazy(() => import("./pages/events/features/OnSiteExperience"));

// Test Pages - Lazy loaded
const HomepageTest = lazy(() => import("./pages/test/HomepageTest"));
const DesignStudio = lazy(() => import("./pages/test/DesignStudio"));

// Optimized loading component
const PageLoader = () => (
  <div className="min-h-screen bg-gradient-hero flex items-center justify-center">
    <div className="text-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-primary mx-auto mb-4"></div>
      <p className="text-foreground-white/60">Loading...</p>
    </div>
  </div>
);

// Optimized QueryClient configuration
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes (renamed from cacheTime)
      retry: 1, // Reduce retries for faster failure
      refetchOnWindowFocus: false, // Disable auto-refetch
    },
  },
});

const App = () => {
  console.log('App component rendering...');
  return (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Suspense fallback={<PageLoader />}>
            <Routes>
              {/* Homepage - Load immediately */}
              <Route path="/" element={<Index />} />
              
              {/* Service Routes - Lazy loaded */}
              <Route path="/services/custom-software" element={<CustomSoftware />} />
              <Route path="/services/ai-ml" element={<AiMl />} />
              <Route path="/services/data-engineering" element={<DataEngineering />} />
              <Route path="/services/qa-engineering" element={<QaEngineering />} />
              <Route path="/services/consulting" element={<ConsultingStrategy />} />
              
              {/* Studio Routes - Lazy loaded */}
              <Route path="/studios/ai" element={<AiStudio />} />
              <Route path="/studios/data-engineering" element={<DataEngineeringStudio />} />
              <Route path="/studios/quality-engineering" element={<QualityEngineeringStudio />} />
              
              {/* Engagement Model Routes - Lazy loaded */}
              <Route path="/engagement/enterprise" element={<Enterprise />} />
              <Route path="/engagement/innovation-lab" element={<InnovationLab />} />
              <Route path="/engagement/dedicated-teams" element={<DedicatedTeams />} />
              <Route path="/engagement/outcome-based" element={<OutcomeBased />} />
              <Route path="/engagement/project-based" element={<ProjectBased />} />
              
              {/* Insights Routes - Lazy loaded */}
              <Route path="/insights" element={<Blogs />} />
              <Route path="/insights/blogs" element={<Blogs />} />
              <Route path="/resources/ebooks" element={<Ebooks />} />
              
              {/* Individual Blog Post Routes - Lazy loaded */}
              <Route path="/insights/blogs/robot-framework-vs-playwright-automation" element={<RobotFrameworkVsPlaywright />} />
              <Route path="/insights/blogs/ai-change-management-playbook" element={<AiChangeManagementPlaybook />} />
              <Route path="/insights/blogs/agentic-ai-enterprise-future" element={<AgenticAiEnterpriseFuture />} />
              <Route path="/insights/blogs/ai-assisted-software-engineering-cursor" element={<BlogPost />} />
              <Route path="/insights/blog/microservices-vs-monolith-decision-guide" element={<BlogPost />} />
              <Route path="/insights/blog/modern-data-platforms-enterprise-guide" element={<BlogPost />} />
              <Route path="/insights/blog/security-first-development-practices" element={<BlogPost />} />
              <Route path="/insights/blogs/:slug" element={<BlogPost />} />
              
              {/* Individual Case Study Routes - Lazy loaded */}
               <Route path="/insights/case-studies/launch" element={<LaunchCaseStudy />} />
               <Route path="/insights/case-studies/pivot" element={<PivotCaseStudy />} />
               <Route path="/insights/case-studies/grow" element={<GrowCaseStudy />} />
               <Route path="/insights/case-studies/mature" element={<MatureCaseStudy />} />
                <Route path="/insights/case-studies/cygeniq" element={<CygeniqCaseStudy />} />
                <Route path="/insights/case-studies/tripjack" element={<TripjackCaseStudy />} />
               <Route path="/insights/case-study/genesys-modernization" element={<GenesysModernization />} />
              
              {/* Legacy case study redirects */}
              <Route path="/case-studies/launch" element={<LaunchCaseStudy />} />
              <Route path="/case-studies/pivot" element={<PivotCaseStudy />} />
              <Route path="/case-studies/grow" element={<GrowCaseStudy />} />
              <Route path="/case-studies/mature" element={<MatureCaseStudy />} />
              
              {/* About Routes - Lazy loaded */}
              <Route path="/about" element={<About />} />
              <Route path="/about/who-we-are" element={<WhoWeAre />} />
              <Route path="/about/careers" element={<Careers />} />
              
              {/* Events Platform Routes - Lazy loaded */}
              <Route path="/events" element={<Events />} />
              <Route path="/events/mobile-app" element={<EventsMobileApp />} />
              <Route path="/events/features/on-site-experience" element={<OnSiteExperience />} />
              
              {/* CMS Routes - Lazy loaded */}
              <Route path="/cms/auth" element={<CMSAuth />} />
              <Route path="/cms/dashboard" element={<CMSDashboard />} />
              <Route path="/cms/articles" element={<CMSArticles />} />
              <Route path="/cms/users" element={<CMSUsers />} />
              <Route path="/cms/media" element={<MediaLibrary />} />
              <Route path="/cms/categories" element={<Categories />} />
              <Route path="/cms/events/:eventId" element={<EventManagement />} />
              <Route path="/cms/content/new" element={<ContentEditor />} />
              <Route path="/cms/content/edit/:id" element={<ContentEditor />} />
              
              {/* Test Routes - Lazy loaded */}
              <Route path="/test/homepage" element={<HomepageTest />} />
              <Route path="/test/studios/design" element={<DesignStudio />} />
              
              {/* 404 - Load immediately */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
  );
};

export default App;
