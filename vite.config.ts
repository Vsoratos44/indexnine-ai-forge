import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "path";
import { componentTagger } from "lovable-tagger";
import prerender from 'vite-plugin-prerender';

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
    mode === 'production' && prerender({
      routes: [
        // Homepage
        '/',
        
        // Service Routes
        '/services/custom-software',
        '/services/ai',
        '/services/data-engineering', 
        '/services/quality-engineering',
        '/services/consulting',
        
        // Company Routes
        '/company/about',
        '/company/who-we-are',
        '/company/careers',
        '/company/contact',
        
        // Engagement Model Routes
        '/engagement/enterprise',
        '/engagement/innovation-lab',
        '/engagement/dedicated-teams',
        '/engagement/outcome-based',
        '/engagement/project-based',
        
        // Insights Routes
        '/insights',
        '/insights/blogs',
        '/insights/case-studies',
        '/insights/ebooks',
        
        // Individual Blog Post Routes
        '/insights/blogs/robot-framework-vs-playwright',
        '/insights/blogs/robot-framework-vs-playwright-automation',
        '/insights/blogs/ai-change-management-playbook',
        '/insights/blogs/agentic-ai-enterprise-future',
        '/insights/blogs/modern-analytics-platform',
        '/insights/blogs/modern-analytics-platform-data-strategy-blueprint',
        '/insights/blogs/ai-assisted-software-engineering',
        '/insights/blogs/ai-assisted-software-engineering-cursor',
        '/insights/blogs/microservices-vs-monolith',
        '/insights/blogs/cloud-infrastructure-automation-terraform',
        '/insights/blogs/snap-mvp-cloud-infrastructure-accelerator',
        
        // Individual Case Study Routes
        '/insights/case-studies/annotate',
        '/insights/case-studies/zilla',
        '/insights/case-studies/si',
        '/insights/case-studies/genesys',
        '/insights/case-studies/cygeniq',
        '/insights/case-studies/tripjack',
        
        // Legacy Case Study Redirects
        '/case-studies',
        '/case-studies/annotate',
        '/case-studies/zilla', 
        '/case-studies/si',
        '/case-studies/genesys',
        
        // Events Platform Routes
        '/events',
        '/events/mobile-app',
        '/events/features/on-site-experience',
      ],
      staticDir: path.join(__dirname, 'dist'),
      outputDir: path.join(__dirname, 'dist'),
      postProcess(renderedRoute: any) {
        // Enhanced meta tag injection based on route
        const routeMetaData = getRouteMetaData(renderedRoute.originalRoute);
        
        // Replace title
        if (routeMetaData.title) {
          renderedRoute.html = renderedRoute.html.replace(
            /<title>.*?<\/title>/i,
            `<title>${routeMetaData.title}</title>`
          );
        }
        
        // Inject additional meta tags
        const metaTags = [
          `<meta name="description" content="${routeMetaData.description || 'IndexNine - Product Engineering and AI Consulting Services'}">`,
          `<meta property="og:title" content="${routeMetaData.title || 'IndexNine'}">`,
          `<meta property="og:description" content="${routeMetaData.description || 'IndexNine delivers product innovation and software engineering excellence'}">`,
          `<meta property="og:url" content="https://www.indexnine.com${renderedRoute.originalRoute}">`,
          `<meta name="twitter:title" content="${routeMetaData.title || 'IndexNine'}">`,
          `<meta name="twitter:description" content="${routeMetaData.description || 'IndexNine delivers product innovation and software engineering excellence'}">`,
          `<link rel="canonical" href="https://www.indexnine.com${renderedRoute.originalRoute}">`
        ].join('\n    ');
        
        // Inject meta tags before closing head tag
        renderedRoute.html = renderedRoute.html.replace(
          '</head>',
          `    ${metaTags}\n  </head>`
        );
        
        // Add structured data for key pages
        if (routeMetaData.structuredData) {
          const structuredDataScript = `
    <script type="application/ld+json">
      ${JSON.stringify(routeMetaData.structuredData, null, 2)}
    </script>`;
          
          renderedRoute.html = renderedRoute.html.replace(
            '</head>',
            `${structuredDataScript}\n  </head>`
          );
        }
        
        return renderedRoute;
      }
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  define: {
    global: 'globalThis', // Fixes Supabase compatibility
    'process.env': {}       // Fixes process undefined errors
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          supabase: ['@supabase/supabase-js']
        }
      }
    }
  },
  // Performance optimizations
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      '@radix-ui/react-tabs',
      '@radix-ui/react-dialog',
      '@supabase/supabase-js'
    ],
    exclude: ['three'] // Large library, load on demand
  },
}));

// Route metadata for prerendering
function getRouteMetaData(route: string) {
  const metaData: Record<string, any> = {
    '/': {
      title: 'B2B Product Engineering and AI Consulting Services | IndexNine',
      description: 'IndexNine offers best-in-class product engineering and custom software development for startups and enterprises. Find out what we can do for you today.',
      structuredData: {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "IndexNine Technologies",
        "description": "Leading product engineering and AI consulting services for enterprises.",
        "url": "https://www.indexnine.com"
      }
    },
    '/services/ai': {
      title: 'AI & Machine Learning Services | Custom AI Solutions | IndexNine',
      description: 'Transform your business with our AI and machine learning services. Custom AI solutions, ML model development, and AI strategy consulting for enterprises.',
    },
    '/services/data-engineering': {
      title: 'Data Engineering Services | Modern Data Architecture | IndexNine',
      description: 'Build scalable data infrastructure with our data engineering services. Modern data pipelines, cloud data platforms, and analytics solutions.',
    },
    '/services/quality-engineering': {
      title: 'Quality Engineering & Test Automation Services | IndexNine',
      description: 'Comprehensive quality engineering services including test automation, performance testing, and quality assurance for enterprise applications.',
    },
    '/services/custom-software': {
      title: 'Custom Software Development Services | Enterprise Solutions | IndexNine',
      description: 'Custom software development services for enterprises. Full-stack development, cloud-native applications, and digital transformation solutions.',
    },
    '/services/consulting': {
      title: 'Technology Consulting & Strategy Services | IndexNine',
      description: 'Strategic technology consulting services to accelerate digital transformation. Architecture consulting, technology strategy, and innovation guidance.',
    },
    '/insights/blogs': {
      title: 'Technology Insights & Engineering Blog | IndexNine',
      description: 'Expert insights on AI, data engineering, software development, and technology trends. Technical articles from our engineering team.',
    },
    '/insights/case-studies': {
      title: 'Client Success Stories & Case Studies | IndexNine',
      description: 'Explore our client success stories and detailed case studies showcasing our product engineering and technology consulting expertise.',
    },
    '/company/about': {
      title: 'About IndexNine | Product Engineering & AI Consulting Company',
      description: 'Learn about IndexNine Technologies - your strategic partner for product engineering, AI consulting, and digital transformation services.',
    },
    '/company/careers': {
      title: 'Careers at IndexNine | Join Our Engineering Team',
      description: 'Join our world-class engineering team at IndexNine. Explore career opportunities in AI, data engineering, and product development.',
    },
    '/engagement/enterprise': {
      title: 'Enterprise Engagement Model | Large-Scale Product Engineering | IndexNine',
      description: 'Enterprise-grade product engineering services with dedicated teams, scalable solutions, and strategic technology partnerships.',
    }
  };

  // Default fallback metadata
  const defaultMeta = {
    title: 'IndexNine | Product Innovation & Engineering Excellence',
    description: 'IndexNine delivers product innovation and software engineering excellence. Your strategic partner for AI-forward development and data engineering.',
  };

  return metaData[route] || defaultMeta;
}
