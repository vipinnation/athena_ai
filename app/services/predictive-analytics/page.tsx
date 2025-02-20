import FeatureSection from "@/components/services/feature-sections";
import SmartLearningSolutions from "@/components/services/smart-learning-solutions";
import { SmartLearningGradientLine } from "@/components/services/smart-line-gradient";
import MlServiceIcon from "@/assets/images/ml_service.png";
import HomeVideo from "@/components/ui/home-video";
import CTA from "@/components/home/cta";

export default function PredictiveAnalyticsPage() {
  return (
    <div className="min-h-screen ">
      <HomeVideo title="Services" />

      <div className=" bg-white dark:bg-black  px-3 sm:px-24">
        <div className="py-12">
          <FeatureSection
            key="predective_analyisis_features"
            title="Make Smarter Decisions Before They Happen"
            description="Our Predictive Analytics AI transforms historical data into accurate forecasts, helping businesses stay ahead of market shifts, customer behaviors, and operational risks."
            capabilities={[
              {
                title: "Turn Data into Profits",
                description: "Leverage data to boost revenue",
              },
              {
                title: "Reduce Uncertainty, Increase Efficiency",
                description: "Optimize operations with AI precision",
              },
              {
                title: "AI-Driven Insights for Real-Time Decision Making",
                description: "Make informed choices instantly",
              },
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
              {
                title: "Sales and Demand Forecasting",
                description: "Predict trends to boost sales",
              },
              {
                title: "Fraud Detection and Risk Prevention",
                description: "Identify risks and prevent fraud",
              },
              {
                title: "Dynamic Pricing Optimization",
                description: "Adjust prices for maximum profit",
              },
              {
                title: "Customer Churn Prediction",
                description: "Retain customers with AI insights",
              },
              {
                title: "Operational Efficiency",
                description: "Streamline processes for growth",
              },
            ]}
          />
        </div>

        <div className="my-4">
          <SmartLearningGradientLine gradientType="green" />
        </div>

        <CTA />
      </div>
    </div>
  );
}
