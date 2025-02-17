import OneIcon from "@/assets/images/one.png";
import Image from "next/image";
import CTA from "@/components/home/cta";
import Banner from "@/assets/images/home.svg";
import SmartLearningHeader from "@/components/services/smart-learning-header";
import SmartLearningGradientLine from "@/components/services/smart-line-gradient";
import SmartLearningCapabilities from "@/components/services/smart-learning-capabilities";
import SmartLearningSolutions from "@/components/services/smart-learning-solutions";

function ServicesPage() {
  return (
    <div className="min-h-screen">
      <div className="relative flex flex-col items-center justify-center min-h-[350px] px-4 sm:px-6 lg:px-8">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        >
          <source
            src="https://res.cloudinary.com/divcixw4e/video/upload/v1738674764/bg_video_x3qayd.mov"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover -z-10 dark:hidden"
        >
          <source
            src="https://res.cloudinary.com/divcixw4e/video/upload/v1738769674/Comp_1_svd0ll.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        <Image
          src={Banner}
          width={200}
          height={200}
          alt=""
          className="absolute text-black"
        />
        <h1 className=" text-2xl md:text-6xl font-light text-center max-w-5xl leading-tight dark:text-white uppercase tracking-[0.25em]">
          Services
        </h1>
      </div>

      <div className="flex flex-col ">
        <SmartLearningHeader />

        <div className="bg-white dark:bg-black flex w-full  flex-col overflow-hidden items-center px-[70px]  max-md:max-w-full max-md:px-5">
          <div className="flex w-full items-center font-black justify-between flex-wrap max-md:max-w-full">
            <div className="z-10 self-stretch text-[215px] whitespace-nowrap  text-center leading-loose w-[118px] my-auto px-3.5 max-md:text-[40px] py-24">
              <Image
                src={OneIcon.src}
                alt="Illustration"
                width={100}
                height={60}
                className=""
              />
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
                    <div className="dark:text-white">Unleashing Intelligence Beyond Automation</div>
                    <div className="bg-[rgba(170,170,170,1)] flex min-h-[3px] w-[79px] mt-6 rounded-[10px]" />
                  </div>
                  <div className="text-base leading-9 mt-12 max-md:max-w-full max-md:mt-10 dark:text-white">
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
      <CTA />
    </div>
  );
}
export default ServicesPage;
