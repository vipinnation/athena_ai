"use client";
import React, { useState } from "react";
import SmartLearningIcon from "./smart-learning-icon";
import GradientBox from "./gradient-box";

type ISolution = {
  title: string;
  description: string;
};

type SmartLearningSolutionsProps = {
  title: string;
  imageSrc: string;
  gradientType: string;
  subTitle?: string;
  solutions: ISolution[];
};

const SmartLearningSolutions: React.FC<SmartLearningSolutionsProps> = ({
  title,
  imageSrc,
  solutions,
  gradientType,
  subTitle = "",
}) => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  return (
    <>
      <div className="text-black text-base font-normal leading-[41px] tracking-[5.44px] text-center uppercase  max-md:max-w-full max-md:mt-10">
        <span className="font-bold">{title}</span>
        <span className="mx-2">{subTitle}</span>
      </div>
      <div className="self-stretch flex   w-full gap-[40px_86px] justify-between flex-wrap mt-12 max-md:max-w-full max-md:mt-10">
        <div className="hidden md:block">
          <GradientBox
            imageSrc={imageSrc}
            gradientType={gradientType as any}
            altText={title}
          />
        </div>
        <div className="min-w-60 w-[698px] max-md:max-w-full">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="border flex w-full dark:border-white items-center gap-8 overflow-hidden flex-wrap mt-6 first:mt-0 px-8 py-3 border-[rgba(0,0,0,0.2)] border-solid max-md:max-w-full max-md:px-5 relative transition-all duration-300"
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              <SmartLearningIcon gradientType={gradientType as any} />

              <div className="self-stretch min-w-60 cursor-pointer">
                <h4 className=" text-md font-semibold text-black font-normal leading-[42px] flex-1 shrink my-auto max-md:max-w-full dark:text-white">
                  {solution.title}
                </h4>
                {hoverIndex == index ? (
                  <p
                    className={`transition-all duration-300 ease-in-out transform ${
                      hoverIndex === index
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-2"
                    } text-gray-600 text-sm dark:text-gray-400`}
                  >
                    {solution.description}
                  </p>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SmartLearningSolutions;
