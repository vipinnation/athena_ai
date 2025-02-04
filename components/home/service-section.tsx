import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
  IconArrowWaveRightUp,
  IconBoxAlignTopLeft,
  IconBoxAlignRightFilled,
} from "@tabler/icons-react";
import { Skeleton } from "../ui/skeleton";
import { ServiceCard } from "./service-card";

const ServiceSection = () => {
  return (
    <div>
      <div className="min-h-screen bg-white dark:bg-black dark:text-white py-12">
        <div className="text-center max-w-4xl mx-auto px-4">
          <p className="text-sm uppercase tracking-wider leading-none mb-6">
            Services
          </p>
          <h1 className="text-4xl  font-medium leading-none">
            Transform your business with AI
          </h1>

          <p className="text-4xl py-3 font-medium leading-none  bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
            Opportunities and Innovations
          </p>
          <h2 className="text-4xl leading-none font-medium">
            that will change the game
          </h2>
        </div>
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex gap-4 mb-4">
            <ServiceCard
              title="Machine Learning"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              isAIPowered={true}
              className="w-4/5"
            />
            <ServiceCard
              title="Natural Language Processing"
              className="w-full"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
          </div>
          <div className="flex gap-4">
            <ServiceCard
              title="Predictive Analytics"
              className="w-full"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            <ServiceCard
              title="Computer Vision"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              className="w-4/5"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
