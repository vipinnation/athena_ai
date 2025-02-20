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
import ServiceSection from "@/components/home/service-section";

function ServicesPage() {
  return (
    <div className="min-h-screen">
      <HomeVideo title="Services" />
      <ServiceSection isHeaderRequired={false} />
      <CTA />
    </div>
  );
}
export default ServicesPage;
