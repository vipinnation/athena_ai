import Link from "next/link";
import { AiNavigationItem } from "@/components/services/ai-navigations";
import FeatureSection from "@/components/services/feature-sections";
import { GradientText } from "@/components/services/gradient-text";
import SmartLearningSolutions from "@/components/services/smart-learning-solutions";
import { SmartLearningGradientLine } from "@/components/services/smart-line-gradient";
import MlServiceIcon from "@/assets/images/ml_service.png";
import Image from "next/image";
import ThreeIcon from "@/assets/images/three.png";
import HomeVideo from "@/components/ui/home-video";
import CTA from "@/components/home/cta";

export default function ComputerVisionPage() {
  return (
    <div className="min-h-screen">
      <HomeVideo title="Services" />
      <nav
        className="overflow-hidden text-base font-normal uppercase tracking-[5.44px] leading-[41px] my-4"
        role="navigation"
        aria-label="AI capabilities navigation"
      >
        <div className="flex  items-center  max-md:max-w-full ">
          <Link href="/services" className="w-full">
            <AiNavigationItem
              text="Language Understanding Magic"
              className="text-left"
            />
          </Link>
          <AiNavigationItem
            text="Computer Vision"
            highlighted
            className="text-center"
          />
          <Link href="/services/predictive-analytics" className="w-full">
            <AiNavigationItem
              text="Predictive Analysis"
              className="text-center "
            />
          </Link>
        </div>
      </nav>
      <div className="bg-white dark:bg-black flex w-full  flex-col overflow-hidden items-center px-[70px]  max-md:max-w-full max-md:px-5">
        <div className="flex w-full items-center font-black justify-between flex-wrap max-md:max-w-full">
          <div className="z-10 self-stretch text-[215px] whitespace-nowrap  text-center leading-loose w-[118px] my-auto px-3.5 max-md:text-[40px] py-24">
            <Image
              src={ThreeIcon.src}
              alt="Illustration"
              width={100}
              height={60}
              className=""
            />
          </div>
          <h1 className="flex max-w-4xl flex-col text-6xl font-black text-right leading-[84px]">
            <GradientText
              text="Computer Vision"
              className="-mt-3 max-md:max-w-full "
              gradientType="darkBlue"
            />
          </h1>
        </div>

        <SmartLearningGradientLine gradientType="blue" />

        <div className="py-12">
          <FeatureSection
            key="computer_vision_features"
            title="Empowering Machines to See, Recognize and Act"
            description="Our Computer Vision AI extracts insights from images, videos, and real-world environments, automating complex visual tasks with precision."
            capabilities={[
              "Seamless Integration with Any Industry",
              "Real-Time Analysis & Instant Decision Making",
              "Faster, Smarter, and More Accurate Visual Data Processing",
            ]}
            borderGradient="darkBlue"
          />
        </div>
        <SmartLearningGradientLine gradientType="blue" />
        <div className="pt-12">
          <SmartLearningSolutions
            gradientType="blue"
            title="AI Solutions Powered by Language Understanding Magic (LUM)"
            imageSrc={MlServiceIcon.src}
            solutions={[
              "Facial Recognition and Security",
              "Automated Quality Inspection",
              "AI-Powered Surveillance",
              "Retail Smart Checkout",
              "Healthcare Image Analysis",
            ]}
          />
        </div>
        <SmartLearningGradientLine gradientType="blue" />
        <CTA />
      </div>
    </div>
  );
}
