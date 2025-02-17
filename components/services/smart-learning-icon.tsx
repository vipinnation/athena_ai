import LightningIcon from "@/assets/images/Lightning.png";
import Image from "next/image";

interface SmartLearningIconProps {
  className?: string;
  gradientType: "blue" | "orange" | "green" | "darkBlue"; // Add gradientType prop
}

const gradientStyles: Record<string, string> = {
  orange:
    "bg-[linear-gradient(211deg,#FE8A17_25.29%,#FFCE72_47.01%,#D48910_81.35%)] w-full",
  blue: "bg-[linear-gradient(214deg,#2A51B2_16.91%,#6684CC_39.28%,#061A4D_66.02%)]  w-full",
  green:
    "bg-[linear-gradient(220deg,#22C345_4.96%,#36E75C_47.7%,#0DAF30_81.68%)]  w-full",
  lightBlue:
    "bg-[linear-gradient(211deg,#17C4FE_25.29%,#0FD2E4_47.01%,#1048D4_81.35%)]  w-full",
};

const SmartLearningIcon = ({
  className = "",
  gradientType,
}: SmartLearningIconProps) => {
  const gradientClass = gradientStyles[gradientType]; // Get the gradient class based on the prop

  return (
    <div
      className={`border border-[color:var(--Primary-100,#E7E6FF)] self-stretch flex flex-col overflow-hidden items-center justify-center w-12 h-12 my-auto px-1 rounded-[11px] border-solid ${className}`}
    >
      <div
        className={`border border-[color:var(--Primary-300,#A19AFF)] flex flex-col items-center justify-center w-10 h-10 px-1 rounded-[9px] border-solid  `}
      >
        <div
          className={`border flex w-8 shrink-0 h-8 rounded-[7px] border-solid ${gradientClass}`}
        >
          <Image
            src={LightningIcon.src}
            alt="Lightning"
            width={100}
            height={100}
          />
        </div>
      </div>
    </div>
  );
};

export default SmartLearningIcon;
