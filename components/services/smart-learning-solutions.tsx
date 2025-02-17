import Image from "next/image";
import SmartLearningIcon from "./smart-learning-icon";
import MlServiceIcon from "@/assets/images/ml_service.png";
const SmartLearningSolutions = () => {
  const solutions = [
    "AI Chatbots & Virtual Assistants",
    "Predictive Analytics & Risk Management",
    "Fraud Detection & Cybersecurity",
    "Computer Vision & Image Recognition",
    "Voice & Language Processing AI",
  ];

  return (
    <>
      <div className="text-black text-base font-normal leading-[41px] tracking-[5.44px] text-center uppercase mt-[75px] max-md:max-w-full max-md:mt-10">
        <span className="font-bold">AI Solutions</span> Powered by Smart
        Learning Machines
      </div>
      <div className="self-stretch flex min-h-[664px] w-full gap-[40px_86px] justify-between flex-wrap mt-[75px] max-md:max-w-full max-md:mt-10">
        <div className="bg-[linear-gradient(211deg,#17C4FE_25.29%,#0FD2E4_47.01%,#1048D4_81.35%)] flex min-w-60 w-[515px] shrink-0 h-[576px] rounded-[250px_0px] text-center flex items-center justify-center">
          <Image
            src={MlServiceIcon.src}
            alt={"MlServiceIcon"}
            width={600}
            height={600}
            className="object-cover text-center"
          />
        </div>
        <div className="min-w-60 w-[698px] max-md:max-w-full">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="border flex w-full dark:border-white items-center gap-8 overflow-hidden flex-wrap mt-6 first:mt-0 px-8 py-6 border-[rgba(0,0,0,0.2)] border-solid max-md:max-w-full max-md:px-5"
            >
              <SmartLearningIcon />
              <div className="self-stretch min-w-60 text-2xl text-black font-normal leading-[42px] flex-1 shrink my-auto max-md:max-w-full dark:text-white">
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
