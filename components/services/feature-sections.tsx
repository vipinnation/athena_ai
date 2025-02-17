import React from "react";
import SmartLearningCapabilities from "./smart-learning-capabilities";

type FeatureSectionProps = {
  title: string;
  description: string;
  capabilities: string[];
  borderGradient?: string;
};

const FeatureSection: React.FC<FeatureSectionProps> = ({
  title,
  description,
  capabilities,
  borderGradient,
}) => {
  return (
    <div className="self-stretch w-full py-[5px] max-md:max-w-full max-md:mt-10">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch items-center">
        <div className="w-[56%] max-md:w-full max-md:ml-0">
          <div className="self-stretch text-black font-normal my-auto max-md:max-w-full max-md:mt-10">
            <div className="flex w-full flex-col items-stretch text-[40px] tracking-[-0.5px] leading-[60px] justify-center max-md:max-w-full">
              <div className="dark:text-white">{title}</div>
              <div className="bg-[rgba(170,170,170,1)] flex min-h-[3px] w-[79px] mt-6 rounded-[10px]" />
            </div>
            <div className="text-base leading-9 mt-12 max-md:max-w-full max-md:mt-10 dark:text-white">
              {description}
            </div>
          </div>
        </div>
        <div className="w-[44%] ml-5 max-md:w-full max-md:ml-0">
          <SmartLearningCapabilities
            capabilities={capabilities}
            borderGradient={borderGradient as any}
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
