import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import styles from "../../../assets/css/stylesheet.module.css";

export const TechStackSection: React.FC = () => {
  const techCategories = [
    {
      title: "Frontend",
      technologies: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "Backend",
      technologies: ["Node.js", "Python", "Java 21", "Go", "FastAPI"],
    },
    {
      title: "Cloud & DevOps",
      technologies: ["AWS", "Google Cloud", "Azure", "Kubernetes", "Docker"],
    },
    {
      title: "AI & Data",
      technologies: ["LangChain", "LangGraph", "OpenAI", "TensorFlow", "Snowflake"],
    },
  ];

  return (
    <section className="py-16 lg:py-20 bg-[#fff]">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold text-foreground-dark mb-4">
              Modern Technology Stack
            </h2>
            <p className="text-foreground-dark/70 max-w-2xl mx-auto">
              We leverage cutting-edge technologies to build scalable,
              performant, and future-proof solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techCategories.map((category, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-[#F1F2FF] to-white border border-[#00000019] rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-0">
                  <h3 className="text-lg font-semibold text-foreground-dark mb-4">
                    {category.title}
                  </h3>
                  <ul className="space-y-2">
                    {category.technologies.map((tech, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-foreground-dark/70 flex items-center gap-2"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                        {tech}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
