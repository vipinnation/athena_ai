import SparkleIcon from "@/assets/images/sparkle.png";
import Link from "next/link";

type GradientType = "lightBlue" | "orange" | "green" | "darkBlue";

const gradientStyles: Record<GradientType, string> = {
  lightBlue: "bg-gradient-to-r from-[#17C4FE] via-[#0FD2E4] to-[#1048D4]",
  orange: "bg-gradient-to-r from-[#FE8A17] via-[#FFCE72] to-[#D48910]",
  green: "bg-gradient-to-r from-[#22C345] via-[#36E75C] to-[#0DAF30]",
  darkBlue: "bg-gradient-to-r from-[#2A51B2] via-[#6684CC] to-[#061A4D]",
};

interface ServiceCardProps {
  title: string;
  description: string;
  className?: string;
  isAIPowered?: boolean;
  gradientType?: GradientType;
  url: string;
}

export function ServiceCard({
  title,
  description,
  className,
  isAIPowered = false,
  gradientType = "lightBlue",
  url,
}: ServiceCardProps) {
  return (
    <div className={`p-6 rounded-sm border hover:border-none ${className}`}>
      <div className="flex items-center">
        <div className="relative w-14 h-14 flex items-center justify-center">
          {/* Dynamic Gradient Border */}
          <div
            className={`absolute inset-0 rounded-full p-[3px] ${gradientStyles[gradientType]}`}
          >
            <div className="w-full h-full bg-white dark:bg-black rounded-full"></div>
          </div>

          {/* Image */}
          <img
            loading="lazy"
            src={SparkleIcon.src}
            className="relative w-10 h-10 rounded-full object-cover p-1"
          />
        </div>
      </div>

      {isAIPowered ? (
        <p className="text-blue-500 mb-2 text-sm leading-none mt-2">
          AI-Powered
        </p>
      ) : (
        <p className="text-blue-500 mb-2 leading-none">&nbsp;</p>
      )}
      <h3 className="text-xl font-medium mb-2 leading-none">{title}</h3>
      <p className="text-gray-600 mb-6 text-sm">{description}</p>
      <Link
        href={url}
        className="text-gray-500 hover:text-gray-700 inline-flex items-center text-sm"
      >
        View more {">"}
      </Link>
    </div>
  );
}
