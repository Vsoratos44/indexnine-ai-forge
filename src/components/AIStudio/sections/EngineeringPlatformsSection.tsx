import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Wrench, Brain, ShieldCheck } from "lucide-react";
import styles from "../../../assets/css/stylesheet.module.css";

export const EngineeringPlatformsSection: React.FC = () => {
  const platforms = [
    {
      icon: Wrench,
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
      icon: Brain,
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
      icon: ShieldCheck,
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
  ];

  return (
    <section className={`pb-24 lg:pb-32 bg-transparent`}>
      <div className="container mx-auto px-6">
        <div className="max-w-8xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-foreground-dark">
              Powered by Our{" "}
              <span className="text-brand-primary">
                AI Engineering & Accelerator Platforms
              </span>
            </h2>
            <p className="text-lg text-foreground-dark/80 max-w-4xl mx-auto">
              Our AI Growth Engine is powered by a set of proprietary
              accelerators, advanced architectural patterns, and a deep
              commitment to enterprise-grade quality and governance.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {platforms.map((platform, index) => {
              const IconComponent = platform.icon;
              return (
                <Card
                  key={index}
                  className="relative overflow-hidden bg-white border border-[#00000019] rounded-2xl p-8 hover:shadow-lg transition-all duration-500"
                >
                  <CardContent className="p-0">
                    <div
                      className={`relative w-20 h-20 flex mb-6 items-center justify-center transition-all ${styles.icnBg}`}
                    >
                      <IconComponent className="w-8 h-8 text-brand-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-6 text-foreground-dark">
                      {platform.title}
                    </h3>
                    <div className="space-y-6">
                      {platform.capabilities.map((capability, idx) => (
                        <div key={idx}>
                          <h4 className="font-semibold text-foreground-dark mb-2">
                            {capability.name}
                          </h4>
                          <p className="text-foreground-dark/70 text-sm leading-relaxed">
                            {capability.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
