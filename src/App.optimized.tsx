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

// Lazy load all other pages to reduce initial bundle size
// CMS pages temporarily disabled - to be implemented
// const CMSLogin = lazy(() => import("./pages/cms/Login"));
// const CMSDashboard = lazy(() => import("./pages/cms/Dashboard"));
// const ContentEditor = lazy(() => import("./pages/cms/ContentEditor"));
// const EventManagement = lazy(() => import("./pages/cms/EventManagement"));

// Service Pages - Lazy loaded
const CustomSoftware = lazy(() => import("./pages/services/CustomSoftware"));
const AiMl = lazy(() => import("./pages/services/AiMl"));
const DataEngineering = lazy(() => import("./pages/services/DataEngineering"));
const QaEngineering = lazy(() => import("./pages/services/QaEngineering"));
const ConsultingStrategy = lazy(
  () => import("./pages/services/ConsultingStrategy")
);

// Studio Pages - Lazy loaded
// const AiStudio = lazy(() => import("./pages/studios/AiStudio"));
// const DataEngineeringStudio = lazy(
//   () => import("./pages/studios/DataEngineering")
// );
// const QualityEngineeringStudio = lazy(
//   () => import("./pages/studios/QualityEngineering")
// );

// Engagement Pages - Lazy loaded
const Enterprise = lazy(() => import("./pages/engagement/Enterprise"));
const InnovationLab = lazy(() => import("./pages/engagement/InnovationLab"));
const DedicatedTeams = lazy(() => import("./pages/engagement/DedicatedTeams"));
const OutcomeBased = lazy(() => import("./pages/engagement/OutcomeBased"));
const ProjectBased = lazy(() => import("./pages/engagement/ProjectBased"));
const EventsMobileApp = lazy(() => import("./pages/events/EventsMobileApp"));

// Insights Pages - Lazy loaded
const CaseStudies = lazy(() => import("./pages/insights/CaseStudies"));
const Blogs = lazy(() => import("./pages/insights/Blogs"));
const Ebooks = lazy(() => import("./pages/insights/Ebooks"));
const RobotFrameworkVsPlaywright = lazy(
  () => import("./pages/insights/blog/RobotFrameworkVsPlaywright")
);

// Case Study Pages - Lazy loaded
const LaunchCaseStudy = lazy(
  () => import("./pages/insights/case-studies/Annotate")
);
const PivotCaseStudy = lazy(
  () => import("./pages/insights/case-studies/Zilla")
);
const GrowCaseStudy = lazy(() => import("./pages/insights/case-studies/Si"));
const MatureCaseStudy = lazy(
  () => import("./pages/insights/case-studies/Ginesys")
);
const CygeniqCaseStudy = lazy(
  () => import("./pages/insights/case-studies/Cygeniq")
);

// About Pages - Lazy loaded
const About = lazy(() => import("./pages/company/About"));
const WhoWeAre = lazy(() => import("./pages/company/WhoWeAre"));
const Careers = lazy(() => import("./pages/company/Careers"));

// Events Platform Pages - Lazy loaded
const Events = lazy(() => import("./pages/events/Events"));
const OnSiteExperience = lazy(
  () => import("./pages/events/features/OnSiteExperience")
);

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

const App = () => (
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
              <Route
                path="/services/custom-software"
                element={<CustomSoftware />}
              />
              <Route path="/services/ai" element={<AiMl />} />
              <Route
                path="/services/data-engineering"
                element={<DataEngineering />}
              />
              <Route
                path="/services/quality-engineering"
                element={<QaEngineering />}
              />
              <Route
                path="/services/consulting"
                element={<ConsultingStrategy />}
              />

              {/* Studio Routes - Lazy loaded */}
              {/* <Route path="/studios/ai" element={<AiStudio />} />
              <Route path="/studios/data-engineering" element={<DataEngineeringStudio />} />
              <Route path="/studios/quality-engineering" element={<QualityEngineeringStudio />} /> */}

              {/* Engagement Model Routes - Lazy loaded */}
              <Route path="/engagement/enterprise" element={<Enterprise />} />
              <Route
                path="/engagement/innovation-lab"
                element={<InnovationLab />}
              />
              <Route
                path="/engagement/dedicated-teams"
                element={<DedicatedTeams />}
              />
              <Route
                path="/engagement/outcome-based"
                element={<OutcomeBased />}
              />
              <Route
                path="/engagement/project-based"
                element={<ProjectBased />}
              />

              {/* Insights Routes - Lazy loaded */}
              <Route path="/insights/case-studies" element={<CaseStudies />} />
              <Route path="/insights" element={<Blogs />} />
              <Route path="/insights/ebooks" element={<Ebooks />} />

              {/* Individual Blog Post Routes - Lazy loaded */}
              <Route
                path="/insights/blog/robot-framework-vs-playwright"
                element={<RobotFrameworkVsPlaywright />}
              />

              {/* Individual Case Study Routes - Lazy loaded */}
              <Route
                path="/insights/case-studies/annotate"
                element={<LaunchCaseStudy />}
              />
              <Route
                path="/insights/case-studies/zilla"
                element={<PivotCaseStudy />}
              />
              <Route
                path="/insights/case-studies/si"
                element={<GrowCaseStudy />}
              />
              <Route
                path="/insights/case-studies/ginesys"
                element={<MatureCaseStudy />}
              />
              <Route
                path="/insights/case-studies/cygeniq"
                element={<CygeniqCaseStudy />}
              />

              {/* Legacy case study redirects */}
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route
                path="/case-studies/annotate"
                element={<LaunchCaseStudy />}
              />
              <Route path="/case-studies/zilla" element={<PivotCaseStudy />} />
              <Route path="/case-studies/si" element={<GrowCaseStudy />} />
              <Route
                path="/case-studies/ginesys"
                element={<MatureCaseStudy />}
              />

              {/* About Routes - Lazy loaded */}
              <Route path="/about" element={<About />} />
              <Route path="/about/who-we-are" element={<WhoWeAre />} />
              <Route path="/about/careers" element={<Careers />} />

              {/* Events Platform Routes - Lazy loaded */}
              <Route path="/events" element={<Events />} />
              <Route path="/events/mobile-app" element={<EventsMobileApp />} />
              <Route
                path="/events/features/on-site-experience"
                element={<OnSiteExperience />}
              />

              {/* CMS Routes - Temporarily disabled */}
              {/* <Route path="/cms/login" element={<CMSDashboard />} />
              <Route path="/cms/dashboard" element={<CMSDashboard />} />
              <Route path="/cms/events/:eventId" element={<EventManagement />} />
              <Route path="/cms/content/new" element={<ContentEditor />} />
              <Route path="/cms/content/edit/:id" element={<ContentEditor />} /> */}

              {/* 404 - Load immediately */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
