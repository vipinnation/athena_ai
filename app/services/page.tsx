import OneIcon from "@/assets/images/one.png";
import Image from "next/image";
import CTA from "@/components/home/cta";
import SmartLearningSolutions from "@/components/services/smart-learning-solutions";
import Link from "next/link";
import FeatureSection from "@/components/services/feature-sections";
import MlServiceIcon from "@/assets/images/ml_service.png";
import { SmartLearningGradientLine } from "@/components/services/smart-line-gradient";
import { GradientText } from "@/components/services/gradient-text";
import HomeVideo from "@/components/ui/home-video";

function ServicesPage() {
  return (
    <div className="min-h-screen">
      <HomeVideo title="Services" />

      <div className="flex flex-col ">
        <div className="flex w-full flex-col overflow-hidden text-base font-normal uppercase tracking-[5.44px] leading-[41px] px-[70px] max-md:max-w-full max-md:pl-5">
          <div className="flex min-h-[70px] items-center gap-[40px_200px] max-md:max-w-full relative left-[35%]">
            <div className="justify-center items-center border border-[color:var(--G1,#17C4FE)] self-stretch flex min-w-60 gap-2.5 my-auto px-[30px] py-[5px] border-solid max-md:px-5">
              <Link
                href="/services"
                className="bg-clip-text bg-[linear-gradient(211deg,#17C4FE_25.29%,#0FD2E4_47.01%,#1048D4_81.35%)] self-stretch my-auto"
              >
                Smart Learning Machines
              </Link>
            </div>
            <Link
              href="/services/natural-language-processing"
              className="self-stretch dark:text-white  text-black text-center my-auto"
            >
              Language Understanding Magic
            </Link>
          </div>
        </div>

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
            <h1 className="flex max-w-4xl flex-col text-6xl font-black text-right leading-[84px] w-1/2">
              <GradientText
                text="Smart Learning Machines"
                className="-mt-3 max-md:max-w-full "
                gradientType="blue"
              />
            </h1>
          </div>
          <SmartLearningGradientLine gradientType="lightBlue" />

          <div className="py-12">
            <FeatureSection
              key="machine_learing_featuers"
              title="Unleashing Intelligence Beyond Automation"
              description="At Nexo Future, our Smart Learning Machines bring the power
                    of AI, machine learning, and deep analytics to transform raw
                    data into actionable insights. Unlike traditional
                    automation, our solutions learn, adapt, and evolve,
                    continuously improving performance over time to meet the
                    unique demands of modern businesses."
              capabilities={[
                "Predict Trends & Risks",
                "Automate with Intelligence",
                "See and Understand",
                "Optimize Operations",
              ]}
              borderGradient="lightBlue"
            />
          </div>

          <SmartLearningGradientLine gradientType="lightBlue" />
          <div className="py-12">
            <SmartLearningSolutions
              gradientType="lightBlue"
              title="AI Solutions"
              subTitle=" Powered by Smart Learning Machines"
              imageSrc={MlServiceIcon.src}
              solutions={[
                "AI Chatbots & Virtual Assistants",
                "Predictive Analytics & Risk Management",
                "Fraud Detection & Cybersecurity",
                "Computer Vision & Image Recognition",
                "Voice & Language Processing AI",
              ]}
            />
          </div>
          <SmartLearningGradientLine gradientType="lightBlue" />
        </div>
      </div>
      <CTA />
    </div>
  );
}
export default ServicesPage;
