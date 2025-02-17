import Banner from "@/assets/images/home.svg";
import { AiNavigationItem } from "@/components/services/ai-navigations";
import Image from "next/image";
import TwoIcon from "@/assets/images/two.png";
import { GradientText } from "@/components/services/gradient-text";
import FeatureSection from "@/components/services/feature-sections";
import { SmartLearningGradientLine } from "@/components/services/smart-line-gradient";
import SmartLearningSolutions from "@/components/services/smart-learning-solutions";
import MlServiceIcon from "@/assets/images/ml_service.png";
import Link from "next/link";
import CTA from "@/components/home/cta";
import HomeVideo from "@/components/ui/home-video";

export default function NLPPage() {
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
              text="Smart Learning Machines"
              className="text-left"
            />
          </Link>
          <AiNavigationItem
            text="Language Understanding Magic"
            highlighted
            className="text-center"
            gradientType="orange"
          />
          <Link href="/services/computer-vision" className="w-full">
            <AiNavigationItem text="Computer Vision" className="text-center " />
          </Link>
        </div>
      </nav>
      <div className="bg-white dark:bg-black flex w-full  flex-col overflow-hidden items-center px-[70px]  max-md:max-w-full max-md:px-5">
        <div className="flex w-full items-center font-black justify-between flex-wrap max-md:max-w-full">
          <div className="z-10 self-stretch text-[215px] whitespace-nowrap  text-center leading-loose w-[118px] my-auto px-3.5 max-md:text-[40px] py-24">
            <Image
              src={TwoIcon.src}
              alt="Illustration"
              width={100}
              height={60}
              className=""
            />
          </div>
          <h1 className="flex max-w-4xl flex-col text-6xl font-black text-right leading-[84px]">
            <GradientText
              text="Language Understanding Magic (LUM)"
              className="-mt-3 max-md:max-w-full "
              gradientType="orange"
            />
          </h1>
        </div>

        <SmartLearningGradientLine gradientType="orange" />

        <div className="py-12">
          <FeatureSection
            key="nlp_featuers"
            title="Transforming Words into Intelligent Actions"
            description="Our Language Understanding Magic (LUM) uses advanced AI and NLP (Natural Language Processing) to analyze, understand, and generate human-like responses. From customer service to automated document processing, LUM enables businesses to interact with data like never before."
            capabilities={[
              "Understands Context, Not Just Words",
              "Learns and Adapts Over Time",
              "Integrates Seamlessly with Your Business",
            ]}
            borderGradient="orange"
          />
        </div>
        <SmartLearningGradientLine gradientType="orange" />
        <div className="py-12">
          <SmartLearningSolutions
            gradientType="orange"
            title="AI Solutions Powered by Language Understanding Magic (LUM)"
            imageSrc={MlServiceIcon.src}
            solutions={[
              "Smart AI Chatbots & Virtual Assistants ",
              "Voice & Speech Recognition",
              "Automated Content Moderation",
              "AI-Powered Document Processing",
              "Real-Time Language Translation",
            ]}
          />
        </div>
        <SmartLearningGradientLine gradientType="orange" />

        <CTA />
      </div>
    </div>
  );
}
