import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { openPositions } from "./Jobs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import styles from "../../assets/css/stylesheet.module.css";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import CareersForm from "@/components/CareersForm";

const JobDetails = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const { jobId } = useParams();
  const job = openPositions[jobId];

  if (!job) {
    return <div>Job not found.</div>;
  }

  return (
    <div className={`min-h-screen ${styles.sectionBgData} bg-white`}>
      <Header />
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-screen-xl relative z-10 pt-32 pb-12 text-foreground-dark">
        <Link
          to="/company/careers#openPos"
          className="inline-flex items-center text-foreground-dark-muted hover:text-brand-primary-dark transition-colors mb-6 mr-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Jobs
        </Link>

        <h2 className="font-semibold text-3xl mb-8">{job.title}</h2>
        <div className="mb-8">{job.fullJd}</div>
        <p>Location: {job.location}</p>
        <p>Type: {job.type}</p>
        <p className="mb-8">Department: {job.department}</p>

        <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
          <DialogTrigger asChild>
            <Button variant="btnPrimary" size="lg">
              Apply Now
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl min-h-[400px] h-[80vh] overflow-y-auto">
            <CareersForm
              className="mt-4"
              formUrl="https://webforms.pipedrive.com/f/6GYcaOrG7FWBY6qO8j3aJ2oVVqPKzMUnOZkxfQWaEV8hSenWhty6Hpj9iLmdp7x57B"
            />
          </DialogContent>
        </Dialog>
      </div>

      <Footer />
    </div>
  );
};

export default JobDetails;
