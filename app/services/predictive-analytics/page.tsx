import Link from "next/link";
import { AiNavigationItem } from "@/components/services/ai-navigations";
import FeatureSection from "@/components/services/feature-sections";
import { GradientText } from "@/components/services/gradient-text";
import SmartLearningSolutions from "@/components/services/smart-learning-solutions";
import { SmartLearningGradientLine } from "@/components/services/smart-line-gradient";
import Image from "next/image";
import FourIcon from "@/assets/images/four.png";
import Banner from "@/assets/images/home.svg";
import MlServiceIcon from "@/assets/images/ml_service.png";
import HomeVideo from "@/components/ui/home-video";
import CTA from "@/components/home/cta";

export default function PredictiveAnalyticsPage() {
  return (
    <div className="min-h-screen">
      <HomeVideo title="Services" />

      <nav
        className="overflow-hidden text-base font-normal uppercase tracking-[5.44px] leading-[41px] my-4"
        role="navigation"
        aria-label="AI capabilities navigation"
      >
        <div className="flex  items-center  max-md:max-w-full ">
          <Link href="/services/computer-vision" className="w-full">
            <AiNavigationItem text="Computer Vision" className="text-left" />
          </Link>
          <AiNavigationItem
            text="Predective Analysis"
            highlighted
            gradientType="green"
            className="text-center"
          />
          <AiNavigationItem text="" className="text-right" />
        </div>
      </nav>

      <div className="bg-white dark:bg-black flex w-full  flex-col overflow-hidden items-center px-[70px]  max-md:max-w-full max-md:px-5">
        <div className="flex w-full items-center font-black justify-between flex-wrap max-md:max-w-full">
          <div className="z-10 self-stretch text-[215px] whitespace-nowrap  text-center leading-loose w-[118px] my-auto px-3.5 max-md:text-[40px] py-24">
            <Image
              src={FourIcon.src}
              alt="Illustration"
              width={100}
              height={60}
              className=""
            />
          </div>
          <h1 className="flex max-w-4xl flex-col text-6xl font-black text-right leading-[84px]">
            <GradientText
              text="Predictive Analytics"
              className="-mt-3 max-md:max-w-full "
              gradientType="green"
            />
          </h1>
        </div>

        <SmartLearningGradientLine gradientType="green" />

        <div className="py-12">
          <FeatureSection
            key="predective_analyisis_features"
            title="Make Smarter Decisions Before They Happen"
            description="Our Predictive Analytics AI transforms historical data into accurate forecasts, helping businesses stay ahead of market shifts, customer behaviors, and operational risks."
            capabilities={[
              "Turn Data into Profits",
              "Reduce Uncertainty, Increase Efficiency",
              "AI-Driven Insights for Real-Time Decision Making",
            ]}
            borderGradient="green"
          />
        </div>
        <SmartLearningGradientLine gradientType="green" />
        <div className="pt-12">
          <SmartLearningSolutions
            gradientType="green"
            title="AI Solutions"
            subTitle="Powered by Predictive Analytics"
            imageSrc={MlServiceIcon.src}
            solutions={[
              "Sales and Demand Forecasting",
              "Fraud Detection and Risk Prevention",
              "Dynamic Pricing Optimization",
              "Customer Churn Prediction",
              "Operational Efficiency",
            ]}
          />
        </div>
        <SmartLearningGradientLine gradientType="green" />

        <CTA />
      </div>
    </div>
  );
}
