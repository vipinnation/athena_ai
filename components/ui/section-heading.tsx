import React from "react";
interface SectionHeadingProps {
  subtitle: string;
  title: string;
}
export const SectionHeading: React.FC<SectionHeadingProps> = ({
  subtitle,
  title,
}) => {
  return (
    <div className="w-full max-md:max-w-full">
      <div className="text-[13px] leading-none tracking-[1.8px] uppercase max-md:max-w-full dark:text-white">
        {subtitle}
      </div>
      <div className="text-[40px] leading-[60px] tracking-[-0.5px] mt-3 max-md:max-w-full dark:text-white">
        {title}
      </div>
    </div>
  );
};
