// AITransformationRoadmap.tsx
import React from "react";
import {
  Play,
  Award,
  Sprout,
  HeartHandshake,
  Wind,
  Gauge,
  LucideIcon,
} from "lucide-react";
import styles from "@/assets/css/stylesheet.module.css";

// Type definitions
interface RoadmapStep {
  step: string;
  title: string;
  description: string;
}

interface FrameworkCard {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface OutcomeCard {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface AITransformationRoadmapProps {
  className?: string;
}

// Reusable sub-components
const StepCard: React.FC<RoadmapStep> = ({ step, title, description }) => {
  return (
    <div className="text-center">
      <div className="w-16 h-16 bg-gradient-to-b from-brand-purple to-[#505CFD] rounded-xl flex items-center justify-center mx-auto mb-[-2rem] relative z-[10]">
        <div className="relative w-16 h-16 rounded-sm flex items-center justify-center mt-[-0.5rem] mr-[-0.5rem] bg-gradient-to-r from-[#727AF2] to-[#535DE1] border border-white/25">
          <span className="text-white text-2xl font-light">{step}</span>
        </div>
      </div>
      <div className="bg-gradient-to-tr from-[#ffffff01] via-[#ffffff10] to-[#ffffff05] border border-[#ffffff19] bg-clip-padding backdrop-filter backdrop-blur-lg h-full rounded-2xl">
        <div className="px-4 pt-10 pb-6 bg-transparent">
          <h3 className="text-lg font-medium mb-3 text-foreground-white">
            {title}
          </h3>
          <p className="text-sm text-foreground-white/80">{description}</p>
        </div>
      </div>
    </div>
  );
};

const IconCard: React.FC<{
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}> = ({ icon: Icon, title, description, className = "" }) => {
  return (
    <div className={` flex ${className}`}>
      <div className="relative rounded-full bg-[#ffffff010] w-12 h-12 flex items-center justify-center mr-4 border border-white/30 group-hover:shadow-glow transition-all duration-300 group-hover:scale-110 flex-shrink-0">
        <Icon className="w-5 h-5 text-white" />
      </div>
      <div>
        <h4 className="font-semibold text-lg text-foreground-white mb-1">
          {title}
        </h4>
        <p
          className="text-sm text-foreground-white/90 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: description }}
        />{" "}
      </div>
    </div>
  );
};

// Main component
const AITransformationRoadmap: React.FC<AITransformationRoadmapProps> = ({
  className = "",
}) => {
  // Data arrays extracted as constants
  const roadmapSteps: RoadmapStep[] = [
    {
      step: "1",
      title: "Align Value & Goals",
      description:
        "Co-define the business outcomes to move—so every choice traces back to value.",
    },
    {
      step: "2",
      title: "Discover Opportunities & Readiness",
      description:
        "Identify AI opportunities and evaluate Potential/ Readiness/ Risk and define a focused candidate list.",
    },
    {
      step: "3",
      title: "Define Solutions & Choose Bets",
      description:
        "Shape solutions for the priority opportunities; classify Tactical vs Strategic bets.",
    },
    {
      step: "4",
      title: "Outcome Roadmap",
      description:
        "Create an outcome-oriented roadmap, with owners, dependencies, experiments to de-risk scale.",
    },
    {
      step: "5",
      title: "Enable Teams & Governance",
      description:
        "Recommend team shape, governance model, adoption practices, to execute roadmap with confidence.",
    },
  ];

  const frameworkCards: FrameworkCard[] = [
    {
      icon: Play,
      title: 'Where to Play (The "WHAT" part of transformation)',
      description:
        "- Quick Wins <br /> - Strategic Bets <br /> - Early Experiments",
    },
    {
      icon: Award,
      title: 'How to Win (The "HOW" part of transformation)',
      description: "- Outcome-oriented Roadmap <br> - Operating-Model",
    },
  ];

  const outcomeCards: OutcomeCard[] = [
    {
      icon: Sprout,
      title: "Outcomes",
      description: "What you get",
    },
    {
      icon: HeartHandshake,
      title: "Clarity",
      description: "First bets & what to ship first",
    },
    {
      icon: Wind,
      title: "Confidence",
      description: "Quick, low-risk proofs & feasibility signals",
    },
    {
      icon: Gauge,
      title: "Momentum",
      description: "Sequenced plan, owners & decisions",
    },
  ];

  return (
    <div className={`${styles.pageDarkBg} ${className}`}>
      <section
        id="transformation-roadmap"
        className="py-24 lg:py-32 relative overflow-hidden bg-transparent"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-8xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-foreground-white">
                <span className="leading-[1.4]">AI Transformation Roadmap</span>
              </h2>
              <p className="text-lg text-foreground-white/80 max-w-3xl mx-auto">
                We help clients figure out their transformation journey using
                our Outcome-First Consulting approach:
              </p>
            </div>

            {/* 5-Step Process */}
            <div className="grid md:grid-cols-5 gap-6 mb-20">
              {roadmapSteps.map((step) => (
                <StepCard key={step.step} {...step} />
              ))}
            </div>
            <div className="sm:grid sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Two-Section Framework */}
              <div className=" p-6 h-full flex flex-col gap-6 ">
                {frameworkCards.map((card, index) => (
                  <IconCard key={index} {...card} />
                ))}
              </div>

              {/* Four Outcomes Grid */}
              <div
                className={`flex gap-6 flex-col bg-gradient-to-b from-transparent to-[#505CFD20] rounded-b-2xl  relative px-8 pb-8 ${styles.cardBord1}`}
              >
                {outcomeCards.map((card, index) => (
                  <IconCard key={index} {...card} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AITransformationRoadmap;
