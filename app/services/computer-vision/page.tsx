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
import ZoomInComponent from "@/components/animation/zoom-in";

export default function ComputerVisionPage() {
  return (
    <div className="min-h-screen">
      <HomeVideo
        title={
          <ZoomInComponent>
            <GradientText
              text="Computer Vision"
              className="font-extrabold tracking-[0.5rem] z-50"
              gradientType="darkBlue"
            />
          </ZoomInComponent>
        }
      />

      <div className=" bg-white dark:bg-black  px-3 sm:px-24">
        <div className="py-12">
          <FeatureSection
            key="computer_vision_features"
            title="Empowering Machines to See, Recognize and Act"
            description="Our Computer Vision AI extracts insights from images, videos, and real-world environments, automating complex visual tasks with precision."
            capabilities={[
              {
                title: "Seamless Integration with Any Industry",
                description: "Customizable solutions for all sectors",
              },
              {
                title: "Real-Time Analysis & Instant Decision Making",
                description: "Immediate insights for rapid actions",
              },
              {
                title:
                  "Faster, Smarter, and More Accurate Visual Data Processing",
                description: "High-speed, precise image analysis",
              },
            ]}
            borderGradient="darkBlue"
          />
        </div>
        <SmartLearningGradientLine gradientType="blue" />
        <div className="pt-12">
          <SmartLearningSolutions
            gradientType="blue"
            title="AI Solutions"
            subTitle=" Powered by Language Understanding Magic (LUM)"
            imageSrc={MlServiceIcon.src}
            solutions={[
              {
                title: "Facial Recognition and Security",
                description: "AI-powered user authentication",
              },
              {
                title: "Automated Quality Inspection",
                description: "Detect defects with zero error",
              },
              {
                title: "AI-Powered Surveillance",
                description: "Real-time security monitoring",
              },
              {
                title: "Retail Smart Checkout",
                description: "Cashier-less stores with AI",
              },
              {
                title: "Healthcare Image Analysis",
                description: "Detect diseases from X-rays & MRIs",
              },
              {
                title: "Faster Visual Data Processing",
                description: "Quick and accurate image analysis",
              },
            ]}
          />
        </div>

        <div className="my-4">
          <SmartLearningGradientLine gradientType="blue" />
        </div>
        <CTA />
      </div>
    </div>
  );
}
