import * as React from "react";
import { cn } from "@/lib/utils";

export interface GradientLineProps
  extends React.HTMLAttributes<HTMLDivElement> {
  gradientType?: "orange" | "blue" | "green" | "lightBlue";
  height?: string;
  className?: string;
}

const gradientStyles = {
  orange:
    "bg-[linear-gradient(211deg,#FE8A17_25.29%,#FFCE72_47.01%,#D48910_81.35%)] w-full",
  blue: "bg-[linear-gradient(214deg,#2A51B2_16.91%,#6684CC_39.28%,#061A4D_66.02%)]  w-full",
  green:
    "bg-[linear-gradient(220deg,#22C345_4.96%,#36E75C_47.7%,#0DAF30_81.68%)]  w-full",
  lightBlue:
    "bg-[linear-gradient(211deg,#17C4FE_25.29%,#0FD2E4_47.01%,#1048D4_81.35%)]  w-full",
};

const SmartLearningGradientLine = React.forwardRef<
  HTMLDivElement,
  GradientLineProps
>(({ gradientType = "orange", height = "3px", className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        gradientStyles[gradientType],
        "flex rounded-[10px]",
        className
      )}
      style={{ minHeight: height }}
      role="presentation"
      {...props}
    />
  );
});

SmartLearningGradientLine.displayName = "GradientLine";

export { SmartLearningGradientLine };
