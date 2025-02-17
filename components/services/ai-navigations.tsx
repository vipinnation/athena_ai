import { cn } from "@/lib/utils";

interface AiNavigationItemProps {
  text: string;
  className?: string;
  highlighted?: boolean;
  gradientType?: "blue" | "orange" | "green" | "darkBlue"; // New prop for gradient selection
}

const gradientStyles: Record<string, string> = {
  blue: "bg-[linear-gradient(211deg,#17C4FE_25.29%,#0FD2E4_47.01%,#1048D4_81.35%)]",
  orange:
    "bg-[linear-gradient(211deg,#FE8A17_25.29%,#FFCE72_47.01%,#D48910_81.35%)]",
  green:
    "bg-[linear-gradient(220deg,#22C345_4.96%,#36E75C_47.7%,#0DAF30_81.68%)]",
  darkBlue:
    "bg-[linear-gradient(214deg,#2A51B2_16.91%,#6684CC_39.28%,#061A4D_66.02%)]",
};

const borderStyles: Record<string, string> = {
  blue: "border-[linear-gradient(211deg,#17C4FE_25.29%,#0FD2E4_47.01%,#1048D4_81.35%)]",
  orange:
    "border-[linear-gradient(211deg,#FE8A17_25.29%,#FFCE72_47.01%,#D48910_81.35%)]",
  green:
    "border-[linear-gradient(220deg,#22C345_4.96%,#36E75C_47.7%,#0DAF30_81.68%)]",
  darkBlue:
    "border-[linear-gradient(214deg,#2A51B2_16.91%,#6684CC_39.28%,#061A4D_66.02%)]",
};

// bg-[linear-gradient(211deg,#FE8A17_25.29%,#FFCE72_47.01%,#D48910_81.35%)]
export const AiNavigationItem = ({
  text,
  className,
  highlighted,
  gradientType = "blue", // Default gradient type is 'blue'
}: AiNavigationItemProps) => {
  const gradientText = gradientStyles[gradientType] || gradientStyles["blue"];
  const gradientBorder = borderStyles[gradientType] || borderStyles["blue"];

  if (highlighted) {
    return (
      <div
        className={cn(
          `w-full justify-center items-center border-solid self-stretch flex min-w-60 gap-2.5 text-center my-auto px-[30px] py-[5px] max-md:max-w-full max-md:px-5 ${gradientBorder}`,
          className
        )}
      >
        <div
          className={`bg-clip-text self-stretch my-auto [color:transparent] ${gradientText} ${gradientBorder}  `}
        >
          {text}
        </div>
      </div>
    );
  }

  return (
    <div className={cn("w-full text-black my-auto", className)}>{text}</div>
  );
};
