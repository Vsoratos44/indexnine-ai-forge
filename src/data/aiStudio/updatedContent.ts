// data/aiStudio/updatedContent.ts

// Hero Section - Updated Secondary CTA
export const heroContent = {
  badge: "AI & ML Engineering Studio",
  headline: "AI-Powered Business Transformation.",
  subheadline:
    "We architect and build intelligent systems that drive measurable growth, competitive advantages, and transformative customer experiences through strategic AI consulting and cutting-edge machine learning solutions.",
  primaryCTA: {
    text: "Book Your AI Strategy Call",
    action: "calendly",
  },
  secondaryCTA: {
    text: "Explore the AI Growth Engine",
    action: "scroll",
    target: "growth-engine",
  },
};

// New Growth Engine Section
export const growthEngineIntro = {
  badge: "The Solution",
  headline: "Our Solution: The Indexnine AI Growth Engine",
  subheadline:
    "A dedicated partnership model to Launch, Validate, and Scale your AI initiatives with confidence.",
  body: "At Indexnine, we've moved beyond the traditional project model. We've built an AI Growth Engine—a comprehensive framework that combines elite engineering pods, a pragmatic 'eval-first' methodology, and strategic guidance to ensure your AI initiatives deliver measurable outcomes. Whether you're a startup launching a disruptive AI platform or an enterprise looking to scale your capabilities, our engine is designed to be your AI-first, AI-driven partner at every stage of your journey.",
};

// Updated Assessment Section
export const assessmentSection = {
  headline: 'Your On-Ramp: The "Clarity Before Code" Assessment',
  body: "Every successful AI journey begins with a strategic, data-backed plan. Our foundational philosophy of 'Clarity Before Code' is embodied in our Assessment & Roadmap offerings. This is the essential first step that de-risks your investment and provides the blueprint for your journey with the AI Growth Engine.",
  philosophyHeadline: "Our Guiding Principles",
};

// Updated Philosophy Principles
export const updatedPhilosophyPrinciples = [
  {
    icon: "Lightbulb",
    title: "Strategy First",
    description:
      "We immerse ourselves in your business context to ensure every technical decision serves your strategic objectives.",
  },
  {
    icon: "ShieldAlert",
    title: "De-Risk Through Strategic AI Assessment",
    description:
      "We validate assumptions, identify constraints, and build consensus before a single line of code is written.",
  },
  {
    icon: "Handshake",
    title: "Measurable Impact",
    description:
      "Our success is measured by your business outcomes. We establish clear KPIs to drive an ROI-focused approach to build, launch, and scale your business.",
  },
];

// Updated Audit Offerings
export const updatedAuditOfferings = [
  {
    tier: "Standard",
    title: "AI Assessment",
    price: "$28,000+",
    duration: "4 weeks",
    description:
      "Validation-focused strategic entry point for companies exploring AI opportunities.",
    deliverables: [
      "Business context analysis and stakeholder interviews",
      "Data inventory and readiness assessment",
      "Prioritized AI roadmap with ROI projections",
      "Executive summary with strategic recommendations",
    ],
    variant: "light" as const,
    ctaText: "Start Your AI Assessment",
  },
  {
    tier: "Pro",
    title: "AI Assessment + PoC",
    price: "$52,000+",
    duration: "8 weeks",
    description:
      "Transformation-ready package with working proof-of-concept and technical architecture.",
    deliverables: [
      "Everything in Standard AI Assessment",
      "Working Proof-of-Concept (PoC) for priority use case",
      "Detailed technical architecture and implementation plan",
      "Data governance framework and compliance strategy",
      "Team training and knowledge transfer sessions",
    ],
    variant: "dark" as const,
    ctaText: "Launch Your PoC",
    featured: true,
  },
];

// P2R Framework Content
export const p2rFrameworkContent = {
  headline: "How We Measure Your AI Opportunity",
  body: "Our proprietary Potential-to-Reality (P2R)™ framework evaluates your organization across three critical dimensions to produce your P2R Score—a clear, actionable benchmark that defines your optimal path to AI-driven transformation.",
};

// Validate Phase
export const validatePhase = {
  badge: "Phase 2: VALIDATE",
  headline: 'Engineering Trust with an "Eval-First" Approach',
  body: "In the world of AI, trust is paramount. An AI product that produces unreliable or inaccurate results is worse than no product at all. Our 'Eval-First' engineering principle is our commitment to building AI you and your customers can depend on.",
  feature: {
    icon: "ShieldCheck",
    headline: "A Rigorous Framework for AI Quality",
    description:
      "Our process is built on a rigorous evaluation framework for all AI and agentic features. Before any launch, we use curated prompt suites, automated test harnesses, and critical human-in-the-loop validation to ensure target accuracy, safety, and performance levels are met. This disciplined approach is how we move from a promising prototype to a production-ready, enterprise-grade application.",
  },
  cta: {
    headline: "Need to ensure your AI is reliable?",
    buttonText: "Request a QA & Evaluation Plan",
  },
};

// Launch Phase
export const launchPhase = {
  badge: "Phase 1: LAUNCH",
  headline: "From Ambitious Vision to Production-Ready Reality",
  body: "Launching a successful AI platform requires more than just an algorithm; it demands robust, full-stack engineering. We accelerate your time-to-market by deploying our specialized teams and proprietary architectural patterns.",
  features: [
    {
      icon: "Users",
      headline: "Deploy Your Elite AI Pod",
      description:
        "We deploy dedicated pods combining AI architects, agentic engineers, and full-stack developers who operate as a seamless extension of your team. Our pods are built with a strong Product Mindset, ensuring every technical decision is aligned with your business goals.",
      ctaText: "Assemble Your AI Pod",
      ctaLink: "calendly",
    },
    {
      icon: "GitMerge",
      headline: "Engineer Sophisticated Agentic Workflows",
      description:
        "We build sophisticated agentic workflows (planner → tools → solver) from scratch using frameworks like LangGraph. We favor deterministic tool-use over free-form generation to build reliable, predictable, and trustworthy AI systems that solve real-world problems.",
      ctaText: "Ready to build your AI vision?",
      ctaLink: "form",
    },
  ],
  mainCTA: {
    headline: "Ready to build your AI vision?",
    buttonText: "Assemble Your AI Pod",
  },
};

// Scale Phase
export const scalePhase = {
  badge: "Phase 3: SCALE",
  headline: "Building Your Internal AI Center of Excellence",
  body: "True transformation happens when AI capabilities are embedded into the DNA of your organization. We partner with you to scale your success by building a self-sustaining AI Center of Excellence (CoE), turning your initial investment into a long-term competitive advantage.",
  features: [
    {
      icon: "TrendingUp",
      headline: "Evolve and Optimize Post-Launch",
      description:
        "Post-launch, we provide active technical stewardship, leveraging observability data to fine-tune models, optimize performance, and manage costs. We specialize in enhancing existing platforms, integrating with enterprise systems like Microsoft Entra/AD, and modernizing legacy data models for AI readiness.",
    },
    {
      icon: "Star",
      headline: "Build Your CoE with Our PRIME Framework",
      description:
        "Our enterprise-proven PRIME framework provides a high-velocity path to building an internal CoE that fosters innovation and drives high adoption across your organization.",
    },
  ],
  primeSteps: [
    {
      letter: "P",
      title: "Plan",
      description: "Define AI vision aligned with business OKRs.",
    },
    {
      letter: "R",
      title: "Recruit",
      description: "Establish the CoE, identify champions, and build governance.",
    },
    {
      letter: "I",
      title: "Inspire",
      description:
        "Deploy role-specific training, create sandboxes, and launch hackathons.",
    },
    {
      letter: "M",
      title: "Motivate",
      description: "Implement recognition systems and reward contributions.",
    },
    {
      letter: "E",
      title: "Evolve",
      description: "Track productivity gains and scale successful initiatives.",
    },
  ],
  cta: {
    headline: "Ready to scale your AI capabilities?",
    buttonText: "Build Your AI Center of Excellence",
  },
};

// AI Engineering Platforms
export const engineeringPlatforms = {
  headline: "Powered by Our AI Engineering & Accelerator Platforms",
  body: "Our AI Growth Engine is powered by a set of proprietary accelerators, advanced architectural patterns, and a deep commitment to enterprise-grade quality and governance.",
  columns: [
    {
      icon: "Tool",
      title: "Expert-Led Tech Assets",
      capabilities: [
        {
          name: "Product Accelerators",
          description:
            "Verified agentic design patterns (RAG) and architectural blueprints.",
        },
        {
          name: "Process Knowledge Bank",
          description:
            "Reusable LLM prompt libraries, fine-tuning recipes, and AI-assisted coding templates.",
        },
        {
          name: "Enterprise Integration",
          description:
            "Pre-built connectors (Bedrock, Azure OpenAI) and deployment templates for multi-cloud setups.",
        },
      ],
    },
    {
      icon: "BrainCircuit",
      title: "Advanced AI Architecture",
      capabilities: [
        {
          name: "Context Lake Architecture",
          description:
            "Beyond basic RAG, we combine Vector DBs and Knowledge Graphs to enable complex reasoning and reduce hallucinations.",
        },
        {
          name: "Multi-LLM Routing",
          description:
            "Support for GPT-4o, Gemini 2.5, etc., with dynamic routing for cost/performance optimization.",
        },
        {
          name: "Secure Desktop-Proxy",
          description:
            "An innovative pattern using an on-device Electron app to keep sensitive credentials at the edge.",
        },
      ],
    },
    {
      icon: "ShieldCheck",
      title: "Quality & Governance",
      capabilities: [
        {
          name: "Comprehensive AI Evaluation",
          description:
            "Our 'eval-first' framework measures accuracy, completeness, and safety against curated prompt suites.",
        },
        {
          name: "End-to-End Observability",
          description:
            "Deep instrumentation with tools like Langfuse for per-agent tracing of latency, token usage, and costs.",
        },
        {
          name: "Model Spec Framework",
          description:
            "A governance-aligned process to ensure AI outputs are trustworthy and aligned with business objectives.",
        },
      ],
    },
  ],
};

// Case Studies Section
export const caseStudiesPreview = {
  headline: "See Our Engine in Action",
  studies: [
    {
      title: "Sportz Interactive - AI Transformation",
      outcome:
        "Progressing towards a 65% gross margin through AI-driven operational efficiency.",
      link: "/insights/case-studies/sportz-interactive",
    },
    {
      title: "Surge Ventures - AI-Driven Compliance Automation",
      outcome:
        "Saved 50 hours in audit prep time and achieved 35% faster regulatory reviews.",
      link: "/insights/case-studies/surge-ventures",
    },
  ],
  blogs: [
    {
      title: "The Future is Agentic. Is Your Enterprise Ready?",
      excerpt:
        "The enterprise technology landscape is buzzing with AI agents... Learn strategic adoption with extreme caution.",
      link: "/insights/blogs/agentic-enterprise",
    },
  ],
};

// Updated FAQ
export const updatedFAQData = [
  {
    question: "What if our data isn't clean or ready for AI?",
    answer:
      "This is one of the most common challenges we help solve. Our AI Audit includes a comprehensive data readiness assessment. We'll identify gaps, recommend modernization strategies, and—if needed—can help you build the data infrastructure required for AI success. Many of our most successful engagements started with messy data.",
  },
  {
    question: "How do you ensure ROI on AI investments?",
    answer:
      "Our approach is fundamentally outcome-driven. We start every engagement by defining clear, measurable success metrics tied to your business goals. Our 'eval-first' engineering methodology ensures we validate accuracy and impact before launch. Post-deployment, we provide ongoing monitoring and optimization to maximize your return.",
  },
  {
    question:
      "Do you work with specific AI technologies or are you platform-agnostic?",
    answer:
      "We're platform-agnostic and framework-agnostic. We work with leading LLM providers (OpenAI, Anthropic, Google, AWS Bedrock), orchestration frameworks (LangGraph, LangChain), and cloud platforms (AWS, GCP, Azure). Our focus is on choosing the right technology for your specific needs, not pushing a particular vendor.",
  },
  {
    question: "How long does it take to see results from an AI project?",
    answer:
      "Timeline depends on scope. Our AI Audits deliver strategic clarity in 4-8 weeks. For implementation, our dedicated engineering pods can deliver a production-ready MVP in 8-12 weeks. We prioritize rapid validation and iterative delivery—you'll see tangible progress within the first month of any engagement.",
  },
  {
    question: "What does an 'AI Growth Engine' engagement look like long-term?",
    answer:
      "It evolves with you. It might start with a 4-8 week AI Audit to build a roadmap. This could lead to a 3-6 month LAUNCH phase to build your MVP. Post-launch, we often transition to a retainer-based SCALE phase, where we help you optimize the platform and build out your internal Center of Excellence over 12+ months.",
  },
  {
    question:
      "Can you help us if we've already started an AI project that's struggling?",
    answer:
      "Absolutely. We specialize in 'AI rescue' engagements. Our AI Audit can quickly diagnose what's not working—whether it's technical architecture, unclear success criteria, or organizational alignment issues. We then provide a clear path forward, often salvaging existing work while course-correcting for success.",
  },
];
