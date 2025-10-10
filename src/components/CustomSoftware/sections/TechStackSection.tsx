import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Database, Cloud, Settings } from "lucide-react";
import styles from "../../../assets/css/stylesheet.module.css";

export const TechStackSection: React.FC = () => {
  const techCategories = [
    {
      title: "Frontend & Client",
      icon: Code,
      technologies: ["React", "Next.js", "Electron", "TypeScript", "Vue.JS"],
    },
    {
      title: "Backend & Database",
      icon: Database,
      technologies: [
        "Python/FastAPI",
        "Node.js",
        "Java",
        "PHP",
        "PostgreSQL",
        "Redis",
        "MongoDB",
      ],
    },
    {
      title: "Cloud Platforms",
      icon: Cloud,
      technologies: [
        "AWS",
        "Azure",
        "GCP",
        "EKS",
        "GKE",
        "Docker",
        "CI/CD",
        "Terraform",
      ],
    },
    {
      title: "AI & DevOps",
      icon: Settings,
      technologies: [
        "Multi-LLM (Gemini, GPT-4o)",
        "Google ADK",
        "Custom SLMs",
        "Snowflake",
        "Neo4j",
        "Weaviate",
      ],
    },
  ];

  return (
    <section className="pt-24 lg:pt-32 bg-transparent bg-gradient-to-b from-blue-500/10 via-blue-500/5 to-blue-500/0">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground-dark mb-4 sm:mb-6 font-montserrat">
              Our Modern Technology Stack
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-foreground-dark/70 max-w-4xl mx-auto font-montserrat px-4 sm:px-0">
              We leverage cutting-edge technologies and proven frameworks to
              build robust, scalable, and maintainable applications that stand
              the test of time.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 px-4 sm:px-0">
            {techCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card
                  key={index}
                  className="relative overflow-hidden bg-gradient-card-light border border-[#ffffff] bg-[#ffffff79] rounded-xl p-5 hover:shadow-glass-sm transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group text-left"
                >
                  <CardContent className="p-0 flex flex-col">
                    <div
                      className={`relative w-16 h-16 flex mb-2 items-center justify-center transition-all ${styles.icnBg}`}
                    >
                      <IconComponent className="w-6 h-6  text-blue-500" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground-dark mb-2 font-montserrat">
                      {category.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {category.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-blue-500/10 text-foreground-dark/70 rounded-full text-xs font-medium hover:bg-foreground-dark/10 transition-colors duration-200"
                        >
                          {tech}
                        </span>
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
