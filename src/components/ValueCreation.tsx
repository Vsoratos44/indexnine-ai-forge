import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ValueCreation = () => {
  const projects = [
    {
      title: "AI Research Agent",
      description: "Disrupting high-cost philanthropic consulting with AI",
      image: "/lovable-uploads/7f07299e-0d50-4a70-ac3b-4d27f0a98a19.png",
      link: "/insights/case-studies/launch",
      category: "Launch"
    },
    {
      title: "Security Platform Pivot",
      description: "From auditing tool to full provisioning product",
      image: "/lovable-uploads/3952bffe-50fc-4c11-a811-0bf718975cbf.png",
      link: "/insights/case-studies/pivot",
      category: "Pivot"
    },
    {
      title: "Cricket LLM",
      description: "AI agent creating scalable revenue streams",
      image: "/lovable-uploads/49fd4939-c61d-43cb-9754-ebf56d833667.png",
      link: "/insights/case-studies/grow",
      category: "Grow"
    },
    {
      title: "Legacy System Modernization",
      description: "16-year-old system serving 178+ platforms",
      image: "/lovable-uploads/7f07299e-0d50-4a70-ac3b-4d27f0a98a19.png",
      link: "/insights/case-studies/mature",
      category: "Mature"
    }
  ];

  return (
    <section
      data-section="value-creation"
      className="py-24 lg:py-32 bg-gray-900 text-white relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-80 h-80 bg-brand-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-brand-purple/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 font-montserrat">
            Our Success is Measured by the{" "}
            <span className="text-brand-primary">Value We Create</span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
            Real projects. Real outcomes. Real impact for businesses at every stage.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Link
              key={index}
              to={project.link}
              className="group block"
            >
              <div className="bg-gray-800 border border-gray-700 rounded-2xl overflow-hidden hover:border-brand-primary/50 transition-all duration-300 hover:transform hover:scale-105">
                {/* Project Image */}
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 bg-brand-primary/20 text-brand-primary text-sm font-medium rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 font-montserrat">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <Link to="/insights/case-studies">
            <Button
              variant="outline"
              size="lg"
              className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white rounded-full px-8"
            >
              View All Case Studies
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ValueCreation;