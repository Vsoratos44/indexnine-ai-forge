import React from "react";
import { useParams, Link } from "react-router-dom";
import { openPositions } from "./Jobs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const JobDetails = () => {
  const { jobId } = useParams();
  const job = openPositions[jobId];

  if (!job) {
    return <div>Job not found.</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-screen-xl relative z-10 pt-32 pb-12">
        <Link
          to="/company/careers#openPos"
          className="inline-flex items-center text-foreground-muted hover:text-brand-primary-dark transition-colors mb-6 mr-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Jobs
        </Link>

        <h2 className="font-semibold text-3xl mb-8">{job.title}</h2>
        <div className="mb-8">{job.fullJd}</div>
        <p>Location: {job.location}</p>
        <p>Type: {job.type}</p>
        <p className="mb-8">Department: {job.department}</p>
        <Link to={`mailto:careers@indexnine.com`}>
          <Button variant="btnPrimary" size="lg">
            Apply Now
          </Button>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default JobDetails;
