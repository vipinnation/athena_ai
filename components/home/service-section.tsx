import React from "react";
import { ServiceCard } from "./service-card";

const ServiceSection = () => {
  return (
    <div>
      <div className="min-h-screen bg-white dark:bg-black dark:text-white py-12">
        <div className="text-center max-w-4xl mx-auto px-4">
          <p className="text-sm uppercase tracking-wider leading-none mb-6">
            Services
          </p>
          <h1 className="text-xl sm:text-3xl  font-medium leading-none">
            Transform your business with AI
          </h1>

          <p className="text-xl sm:text-3xl py-1.5 font-medium leading-none  bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text  text-gradient">
            Opportunities and Innovations
          </p>
          <h2 className="text-xl sm:text-3xl leading-none font-medium">
            that will change the game
          </h2>
        </div>
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex gap-4 mb-4 flex-col md:flex-row">
            <ServiceCard
              title="Machine Learning"
              description="Unlock insights and automate decision-making with advanced predictive models."
              isAIPowered={true}
              className="w-full md:w-4/5"
            />
            <ServiceCard
              title="Natural Language Processing"
              className="w-full"
              description="Enhance customer interactions through intelligent chatbots, sentiment analysis, and language translation."
            />
          </div>
          <div className="flex gap-4 flex-col md:flex-row">
            <ServiceCard
              title="Predictive Analytics"
              className="w-full"
              description="Leverage data-driven insights to forecast trends, optimize operations, and make informed decisions."
            />
            <ServiceCard
              title="Computer Vision"
              description="Enable real-time image and video analysis for applications like facial recognition, object detection, and quality control."
               className="w-full md:w-4/5"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
