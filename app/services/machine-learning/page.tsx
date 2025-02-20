import FeatureSection from "@/components/services/feature-sections";
import SmartLearningSolutions from "@/components/services/smart-learning-solutions";
import { SmartLearningGradientLine } from "@/components/services/smart-line-gradient";
import MlServiceIcon from "@/assets/images/ml_service.png";
import HomeVideo from "@/components/ui/home-video";
import CTA from "@/components/home/cta";
import TextStorke from "@/components/text/text-stroke";
import { GradientText } from "@/components/services/gradient-text";
import ZoomInComponent from "@/components/animation/zoom-in";

export default function MachineLearningPage() {
  return (
    <div className="min-h-screen">
      <HomeVideo
        title={
          <ZoomInComponent>
            <GradientText
              text="Smart Learning Machines"
              className="font-bold tracking-[0.5rem] z-50"
            />
          </ZoomInComponent>
        }
      />

      <div className=" bg-white dark:bg-black pt-8 px-3 sm:px-24">
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
            {
              title: "Predict Trends & Risks",
              description:
                "Analyze data to anticipate customer needs and market shifts",
            },
            {
              title: "Automate with Intelligence",
              description: "Enable real-time, Al-driven decision-making",
            },
            {
              title: "See and Understand",
              description:
                "Process images, videos, and language using computer vision and NLP",
            },
            {
              title: "Optimize Operations",
              description:
                "Reduce costs, minimize risks. and enhance efficiency.",
            },
          ]}
          borderGradient="lightBlue"
        />
        <div className="my-3">
          <SmartLearningGradientLine gradientType="lightBlue" />
        </div>

        <div className="py-12">
          <SmartLearningSolutions
            gradientType="lightBlue"
            title="AI Solutions"
            subTitle=" Powered by Smart Learning Machines"
            imageSrc={MlServiceIcon.src}
            solutions={[
              {
                title: "AI Chatbots & Virtual Assistants",
                description:
                  "Deliver human-like conversations for seamless interactions.",
              },
              {
                title: "Predictive Analytics & Risk Management",
                description: "Make proactive, data-driven decisions.",
              },
              {
                title: "Fraud Detection & Cybersecurity",
                description: "Identify threats and anomalies instantly.",
              },
              {
                title: "Computer Vision & Image Recognition",
                description:
                  "Automate quality control, surveillance, and authentication.",
              },
              {
                title: "Voice & Language Processing AI",
                description:
                  "Power virtual assistants, speech-to-text, and real-time translation.",
              },
            ]}
          />
        </div>
        <div className="my-3">
          <SmartLearningGradientLine gradientType="lightBlue" />
        </div>
        <CTA />
      </div>
    </div>
  );
}
