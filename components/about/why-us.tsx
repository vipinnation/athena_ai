import React from "react";
import { SectionHeading } from "../ui/section-heading";
import { CheckListItem } from "../ui/checklist-item";
import { GradientImage } from "../ui/gradient-image";
export const WhyUsSection: React.FC = () => {
  const leftFeatures = [
    "Strategic Approach",
    "Client-Centric Focus",
    "Collaborative Partnership",
  ];
  const rightFeatures = [
    "Industry Expertise",
    "Collaborative Partnership",
    "Results-Driven Approach",
  ];
  return (
    <section className="flex  items-center max-w-7xl mx-auto overflow-hidden justify-between flex-wrap">
      <div className="self-stretch flex min-w-60 flex-col items-stretch w-[700px] my-auto max-md:max-w-full">
        <SectionHeading
          subtitle="Why Choose Us"
          title="We Can Help You To Grow Your Business."
        />
        <div className="text-black dark:text-white text-base font-normal leading-9 mt-10 max-md:max-w-full">
          When you choose Zenith, you're not just hiring a consulting firm –
          you're partnering with a team of dedicated professionals who are
          invested in your success.
        </div>
        <div className="flex gap-[40px_75px] flex-wrap mt-10 max-md:max-w-full">
          <div className="flex min-w-60 flex-col space-y-[25px]">
            {leftFeatures.map((feature, index) => (
              <CheckListItem key={index} text={feature} />
            ))}
          </div>
          <div className="flex min-w-60 flex-col items-stretch w-[283px] space-y-[25px]">
            {rightFeatures.map((feature, index) => (
              <CheckListItem key={index} text={feature} />
            ))}
          </div>
        </div>
      </div>
      <div className="self-stretch min-w-60 w-[500px] my-auto rounded-[0px_0px_0px_0px] max-md:max-w-full">
        <GradientImage variant="secondary" />
      </div>
    </section>
  );
};
