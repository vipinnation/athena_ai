"use client";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

type GradientType = "lightBlue" | "orange" | "green" | "darkBlue";

export interface ICapability {
  title: string;
  description: string;
}

interface SmartLearningCapabilitiesProps {
  title?: string;
  capabilities: ICapability[];
  borderGradient?: GradientType;
}

const gradientStyles: Record<GradientType, string> = {
  lightBlue:
    "linear-gradient(211deg, #17C4FE 25.29%, #0FD2E4 47.01%, #1048D4 81.35%)",
  orange:
    "linear-gradient(211deg, #FE8A17 25.29%, #FFCE72 47.01%, #D48910 81.35%)",
  green:
    "linear-gradient(220deg, #22C345 4.96%, #36E75C 47.7%, #0DAF30 81.68%)",
  darkBlue:
    "linear-gradient(214deg, #2A51B2 16.91%, #6684CC 39.28%, #061A4D 66.02%)",
};

// Lighter gradient versions for description backgrounds
const backgroundGradientStyles: Record<GradientType, string> = {
  lightBlue:
    "linear-gradient(211deg, rgba(23, 196, 254, 0.15) 25.29%, rgba(15, 210, 228, 0.15) 47.01%, rgba(16, 72, 212, 0.15) 81.35%)",
  orange:
    "linear-gradient(211deg, rgba(254, 138, 23, 0.15) 25.29%, rgba(255, 206, 114, 0.15) 47.01%, rgba(212, 137, 16, 0.15) 81.35%)",
  green:
    "linear-gradient(220deg, rgba(34, 195, 69, 0.15) 4.96%, rgba(54, 231, 92, 0.15) 47.7%, rgba(13, 175, 48, 0.15) 81.68%)",
  darkBlue:
    "linear-gradient(214deg, rgba(42, 81, 178, 0.15) 16.91%, rgba(102, 132, 204, 0.15) 39.28%, rgba(6, 26, 77, 0.15) 66.02%)",
};

const SmartLearningCapabilities: React.FC<SmartLearningCapabilitiesProps> = ({
  title = "Capabilities",
  capabilities,
  borderGradient = "lightBlue",
}) => {
  const gradientClass = gradientStyles[borderGradient];
  const backgroundGradient = backgroundGradientStyles[borderGradient];
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  console.log("backgroundGradient", backgroundGradient);

  return (
    <div className="cursor-pointer bg-[rgba(246,250,251,1)] dark:bg-gray-900 flex w-full flex-col items-center text-black uppercase justify-center mx-auto p-6 max-md:max-w-full max-md:mt-10 max-md:px-5">
      <div className="text-base font-normal leading-[3] tracking-[5.44px] dark:text-white">
        {title}
      </div>
      <div className="flex max-w-full dark:bg-black w-[449px] items-center overflow-hidden text-lg font-bold tracking-[0.88px] leading-[23px] justify-center flex-wrap mt-6">
        {capabilities.map((capability, index) => {
          // Check if the current index is the last one and if the length is odd
          const isLastItem = index === capabilities.length - 1;
          const isOddLength = capabilities.length % 2 !== 0;
          const fullWidthClass =
            isLastItem && isOddLength ? "w-full" : "w-[179px]"; // Apply full-width to the last item if odd

          return (
            <div
              key={index}
              className={`self-stretch flex min-h-[190px] flex-col items-stretch justify-center grow shrink my-auto dark:bg-black ${fullWidthClass}`}
            >
              <div
                className={`bg-white dark:bg-black dark:text-white max-w-full overflow-hidden flex-1 p-[21px] border-[0.883px] border-solid max-md:px-5 relative perspective`}
                style={{
                  borderImage: `${gradientClass} 1`,
                  perspective: "1000px",
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Card front (title) */}
                <div
                  className="flex items-center justify-center w-full h-full absolute top-0 left-0 transition-all duration-500 backface-visibility-hidden transform"
                  style={{
                    backfaceVisibility: "hidden",
                    transform:
                      hoveredIndex === index
                        ? "rotateY(180deg)"
                        : "rotateY(0deg)",
                  }}
                >
                  <h3 className="text-center px-4">{capability.title}</h3>
                </div>

                <div
                  className={`flex items-center justify-center w-full h-full absolute top-0 left-0 p-4 transition-all duration-500 backface-visibility-hidden transform  ${backgroundGradient}`}
                  style={{
                    backfaceVisibility: "hidden",
                    transform:
                      hoveredIndex === index
                        ? "rotateY(0deg)"
                        : "rotateY(-180deg)",
                    backgroundSize: "cover",
                  }}
                >
                  <p className="text-gray-800 text-sm dark:text-gray-200 text-center font-medium  ">
                    {capability.description} 
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SmartLearningCapabilities;
