import React from "react";
import { GradientImage } from "../ui/gradient-image";
import { SectionHeading } from "../ui/section-heading";

export const AboutSection: React.FC = () => {
  return (
    <section className="flex  items-center max-w-7xl mx-auto overflow-hidden justify-between flex-wrap py-12">
      <div className="hidden lg:block self-stretch min-w-60 w-[500px] my-auto rounded-[0px_0px_0px_0px] max-md:max-w-full">
        <GradientImage variant="primary" />
      </div>
      <div className="self-stretch min-w-60 text-black font-normal w-[700px] my-auto max-md:max-w-full text-center px-4">
        <SectionHeading
          subtitle="About Us"
          title="Your Trusted Advisors in Business Success."
        />
        <div className="w-full text-base leading-9 mt-10 max-md:max-w-full">
          <div className="max-md:max-w-full dark:text-white">
            We understand the challenges and complexities that businesses face
            in today&apos;s dynamic marketplace. That&apos;s why we offer a comprehensive
            suite of consulting services.
          </div>
          <div className="mt-3 max-md:max-w-full dark:text-white">
            Founded on the principles of innovation, integrity, and excellence,
            we are a team of seasoned professionals.
          </div>
        </div>
      </div>
    </section>
  );
};
