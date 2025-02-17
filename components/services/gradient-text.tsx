import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

type GradientType = "blue" | "orange" | "green" | "darkBlue";

interface GradientTextProps extends HTMLAttributes<HTMLDivElement> {
  text: string;
  className?: string;
  gradientType?: GradientType;
}

const gradientStyles: Record<GradientType, string> = {
  blue: "bg-[linear-gradient(211deg,#17C4FE_25.29%,#0FD2E4_47.01%,#1048D4_81.35%)]",
  orange:
    "bg-[linear-gradient(211deg,#FE8A17_25.29%,#FFCE72_47.01%,#D48910_81.35%)]",
  green:
    "bg-[linear-gradient(220deg,#22C345_4.96%,#36E75C_47.7%,#0DAF30_81.68%)]",
  darkBlue:
    "bg-[linear-gradient(214deg,#2A51B2_16.91%,#6684CC_39.28%,#061A4D_66.02%)]",
};

export const GradientText = ({
  text,
  className,
  gradientType = "blue",
  ...props
}: GradientTextProps) => {
  const gradientClass = gradientStyles[gradientType];

  return (
    <div
      className={cn("bg-clip-text text-transparent", gradientClass, className)}
      {...props}
    >
      {text}
    </div>
  );
};
