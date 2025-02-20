import { AiNavigationItem } from "@/components/services/ai-navigations";
import Image from "next/image";
import TwoIcon from "@/assets/images/two.png";
import { GradientText } from "@/components/services/gradient-text";
import FeatureSection from "@/components/services/feature-sections";
import { SmartLearningGradientLine } from "@/components/services/smart-line-gradient";
import SmartLearningSolutions from "@/components/services/smart-learning-solutions";
import Link from "next/link";
import CTA from "@/components/home/cta";
import HomeVideo from "@/components/ui/home-video";
import NLPIcon from "@/assets/images/nlp_service.png";
import ZoomInComponent from "@/components/animation/zoom-in";

export default function NLPPage() {
  return (
    <div className="min-h-screen">
      <HomeVideo
        title={
          <ZoomInComponent>
            <GradientText
              text="Language Understanding Magic"
              className="font-bold tracking-[0.5rem] z-50"
              gradientType="orange"
            />
          </ZoomInComponent>
        }
      />
      <div className=" bg-white dark:bg-black  px-3 sm:px-24">
        <div className="py-12">
          <FeatureSection
            key="nlp_featuers"
            title="Transforming Words into Intelligent Actions"
            description="Our Language Understanding Magic (LUM) uses advanced AI and NLP (Natural Language Processing) to analyze, understand, and generate human-like responses. From customer service to automated document processing, LUM enables businesses to interact with data like never before."
            capabilities={[
              {
                title: "Understands Context, Not Just Words",
                description:
                  "Recognizes the meaning behind the words, ensuring deeper comprehension.",
              },
              {
                title: "Learns and Adapts Over Time",
                description:
                  "Continuously improves by learning from interactions and feedback.",
              },
              {
                title: "Integrates Seamlessly with Your Business",
                description:
                  "Fits effortlessly into your existing workflow and tools.",
              },
            ]}
            borderGradient="orange"
          />
        </div>
        <SmartLearningGradientLine gradientType="orange" />
        <div className="py-12">
          <SmartLearningSolutions
            gradientType="orange"
            title="AI Solutions "
            subTitle="Powered by Language Understanding Magic (LUM)"
            imageSrc={NLPIcon.src}
            solutions={[
              {
                title: "Smart AI Chatbots & Virtual Assistants",
                description:
                  "Instant, natural conversations for support and sales",
              },
              {
                title: "Voice & Speech Recognition",
                description: "Convert speech into actionable insights",
              },
              {
                title: "Automated Content Moderation",
                description: "Detects sentiment and inappropriate language",
              },
              {
                title: "AI-Powered Document Processing",
                description: "Extracts key data from contracts and emails",
              },
              {
                title: "Real-Time Language Translation",
                description: "Breaks barriers for global communication",
              },
            ]}
          />
        </div>
        <div className="my-4">
          <SmartLearningGradientLine gradientType="orange" />
        </div>

        <CTA />
      </div>
    </div>
  );
}
