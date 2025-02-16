import Image from "next/image";
import React from "react";
import Banner from "@/assets/images/home.svg";
import { StatsSection } from "@/components/about/stats-section";
import CTA from "@/components/home/cta";
import { WhyUsSection } from "@/components/about/why-us";
import { AboutSection } from "@/components/about/about-us";

const AboutPage = () => {
  return (
    <div>
      <div className="relative flex flex-col items-center justify-center min-h-[350px] px-4 sm:px-6 lg:px-8">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        >
          <source
            src="https://res.cloudinary.com/divcixw4e/video/upload/v1738674764/bg_video_x3qayd.mov"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover -z-10 dark:hidden"
        >
          <source
            src="https://res.cloudinary.com/divcixw4e/video/upload/v1738769674/Comp_1_svd0ll.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        <Image
          src={Banner}
          width={200}
          height={200}
          alt=""
          className="absolute text-black"
        />
        <h1 className=" text-2xl md:text-6xl font-light text-center max-w-5xl leading-tight dark:text-white uppercase tracking-[0.25em]">
          About Us
        </h1>
      </div>

      <AboutSection />
      <WhyUsSection />
      <StatsSection />
      <CTA />
    </div>
  );
};

export default AboutPage;
