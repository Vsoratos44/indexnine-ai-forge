import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import PipedriveForm from "./PipedriveForm";
import styles from "../assets/css/stylesheet.module.css";

const CTABanner = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <Section variant="alternate" containerSize="6xl">
      <div
        className={`bg-gradient-subtle p-[5px]  text-center  ${styles["bord-lt-rb"]} rounded-[1.125rem]`}
      >
        <div className="bg-[#fff] rounded-[1rem] p-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground-dark mb-4 font-semibold">
            Ready to Transform Your{" "}
            <span className="text-brand-primary">Business</span>?
          </h2>
          <p className="text-lg text-foreground-dark-muted mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you build innovative products and
            scale your engineering capabilities.
          </p>

          <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
            <DialogTrigger asChild>
              <Button variant="btnPrimary" size="lg">
                Start Your Project Today
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl min-h-[400px] h-[80vh] overflow-y-auto">
              {/* <DialogHeader>
                <DialogTitle>Start Your Project</DialogTitle>
              </DialogHeader> */}
              <PipedriveForm className="mt-4" />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </Section>
  );
};

export default CTABanner;
