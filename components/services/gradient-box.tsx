import React from "react";
import Image from "next/image";

type GradientType = "orange" | "blue" | "green" | "lightBlue";

const gradientStyles: Record<GradientType, string> = {
  orange:
    "bg-[linear-gradient(211deg,#FE8A17_25.29%,#FFCE72_47.01%,#D48910_81.35%)] ",
  blue: "bg-[linear-gradient(214deg,#2A51B2_16.91%,#6684CC_39.28%,#061A4D_66.02%)]  ",
  green:
    "bg-[linear-gradient(220deg,#22C345_4.96%,#36E75C_47.7%,#0DAF30_81.68%)]  ",
  lightBlue:
    "bg-[linear-gradient(211deg,#17C4FE_25.29%,#0FD2E4_47.01%,#1048D4_81.35%)]  ",
};

type GradientBoxProps = {
  gradientType: GradientType;
  imageSrc: string;
  altText?: string;
};

const GradientBox: React.FC<GradientBoxProps> = ({
  gradientType,
  imageSrc,
  altText = "Image",
}) => {
  return (
    <div
      className={`${gradientStyles[gradientType]} flex min-w-60 w-[515px] shrink-0 h-[576px] rounded-[250px_0px] text-center flex items-center justify-center`}
    >
      <Image
        src={imageSrc}
        alt={altText}
        width={600}
        height={600}
        className="object-cover text-center"
      />
    </div>
  );
};

export default GradientBox;
