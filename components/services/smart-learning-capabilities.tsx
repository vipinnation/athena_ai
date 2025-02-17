import React from "react";

type GradientType = "lightBlue" | "orange" | "green" | "darkBlue";

interface SmartLearningCapabilitiesProps {
  title?: string;
  capabilities: string[];
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

const SmartLearningCapabilities: React.FC<SmartLearningCapabilitiesProps> = ({
  title = "Capabilities",
  capabilities,
  borderGradient = "lightBlue",
}) => {
  const gradientClass = gradientStyles[borderGradient];

  return (
    <div className="bg-[rgba(246,250,251,1)] dark:bg-gray-900 flex w-full flex-col items-center text-black uppercase justify-center mx-auto p-6 max-md:max-w-full max-md:mt-10 max-md:px-5">
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
                className={`bg-white flex items-center dark:bg-black dark:text-white max-w-full overflow-hidden flex-1 p-[21px] border-[0.883px] border-solid max-md:px-5 border-image`}
                style={{
                  borderImage: `${gradientClass} 1`,
                }}
              >
                {capability}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SmartLearningCapabilities;
