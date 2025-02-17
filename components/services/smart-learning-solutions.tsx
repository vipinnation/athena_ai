import React from "react";
import SmartLearningIcon from "./smart-learning-icon";
import GradientBox from "./gradient-box";

type SmartLearningSolutionsProps = {
  title: string;
  imageSrc: string;
  gradientType: string;
  subTitle?: string;
  solutions: string[];
};

const SmartLearningSolutions: React.FC<SmartLearningSolutionsProps> = ({
  title,
  imageSrc,
  solutions,
  gradientType,
  subTitle = "",
}) => {
  return (
    <>
      <div className="text-black text-base font-normal leading-[41px] tracking-[5.44px] text-center uppercase  max-md:max-w-full max-md:mt-10">
        <span className="font-bold">{title}</span>
        <span className="mx-2">{subTitle}</span>
      </div>
      <div className="self-stretch flex min-h-[664px] w-full gap-[40px_86px] justify-between flex-wrap mt-12 max-md:max-w-full max-md:mt-10">
        <GradientBox
          imageSrc={imageSrc}
          gradientType={gradientType as any}
          altText={title}
        />
        <div className="min-w-60 w-[698px] max-md:max-w-full">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="border flex w-full dark:border-white items-center gap-8 overflow-hidden flex-wrap mt-6 first:mt-0 px-8 py-3 border-[rgba(0,0,0,0.2)] border-solid max-md:max-w-full max-md:px-5"
            >
              <SmartLearningIcon gradientType={gradientType as any} />
              <div className="self-stretch min-w-60 text-md font-semibold text-black font-normal leading-[42px] flex-1 shrink my-auto max-md:max-w-full dark:text-white">
                {solution}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SmartLearningSolutions;
