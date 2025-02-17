import OneIcon from "@/assets/images/one.png";
import AndroidIcon from "@/assets/images/android.png";
import Image from "next/image";
import SmartLearningCapabilities from "@/components/services/smart-learning-capabilities";
import SmartLearningSolutions from "@/components/services/smart-learning-solutions";
import SmartLearningGradientLine from "@/components/services/smart-line-gradient";
export default function MachineLearning() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16 min-h-screen">
      <div className="bg-white self-center flex w-full max-w-[1441px] flex-col overflow-hidden items-center px-[70px] py-[100px] max-md:max-w-full max-md:px-5">
          <div className="self-stretch flex w-full items-center font-black justify-between flex-wrap max-md:max-w-full">
            <div className="z-10 self-stretch text-[215px] whitespace-nowrap text-white text-center leading-loose w-[118px] pt-[-90px] my-auto px-3.5 max-md:text-[40px]">
              1
            </div>
            <div
              className={`text-right text-[65px] leading-[84px] bg-clip-text bg-[linear-gradient(211deg,#17C4FE_25.29%,#0FD2E4_47.01%,#1048D4_81.35%)] self-stretch w-[850px] my-auto max-md:max-w-full max-md:text-[40px] max-md:leading-[57px]`}
              style={{
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Smart Learning Machines
            </div>
          </div>
          <SmartLearningGradientLine />
          <div className="self-stretch w-full mt-[75px] py-[5px] max-md:max-w-full max-md:mt-10">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
              <div className="w-[56%] max-md:w-full max-md:ml-0">
                <div className="self-stretch text-black font-normal my-auto max-md:max-w-full max-md:mt-10">
                  <div className="flex w-full flex-col items-stretch text-[40px] tracking-[-0.5px] leading-[60px] justify-center max-md:max-w-full">
                    <div>Unleashing Intelligence Beyond Automation</div>
                    <div className="bg-[rgba(170,170,170,1)] flex min-h-[3px] w-[79px] mt-6 rounded-[10px]" />
                  </div>
                  <div className="text-base leading-9 mt-12 max-md:max-w-full max-md:mt-10">
                    At Nexo Future, our Smart Learning Machines bring the power
                    of AI, machine learning, and deep analytics to transform raw
                    data into actionable insights. Unlike traditional
                    automation, our solutions learn, adapt, and evolve,
                    continuously improving performance over time to meet the
                    unique demands of modern businesses.
                  </div>
                </div>
              </div>
              <div className="w-[44%] ml-5 max-md:w-full max-md:ml-0">
                <SmartLearningCapabilities />
              </div>
            </div>
          </div>
          <SmartLearningGradientLine />
          <SmartLearningSolutions />
          <SmartLearningGradientLine />
        </div>
    </div>
  );
}
