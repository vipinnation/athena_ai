import React from "react";

interface GradientImageProps {
  variant?: "primary" | "secondary";
}

export const GradientImage: React.FC<GradientImageProps> = ({
  variant = "primary",
}) => {
  const gradientClasses = {
    primary:
      "bg-[linear-gradient(211deg,#17C4FE_25.29%,#0FD2E4_47.01%,#1048D4_81.35%)]",
    secondary:
      "bg-[linear-gradient(214deg,#2A51B2_16.91%,#6684CC_39.28%,#061A4D_66.02%)]",
  };

  return (
    <div
      className={`${gradientClasses[variant]} flex shrink-0 h-[900px] rounded-[250px_0px] max-md:max-w-full`}
    />
  );
};
