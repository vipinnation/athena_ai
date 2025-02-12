import { Sparkles } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  className?: string;
  isAIPowered?: boolean;
}

export function ServiceCard({
  title,
  description,
  className,
  isAIPowered = false,
}: ServiceCardProps) {
  return (
    <div className={`p-6 rounded-sm border hover:border-none ${className}`}>
      <div className="h-12 w-12 bg-gray-100 rounded-full flex items-center justify-center mb-6">
        <Sparkles className="h-6 w-6 text-gray-600" />
      </div>
      {isAIPowered ? (
        <p className="text-blue-500 mb-2 text-sm leading-none">AI-Powered</p>
      ) : (
        <p className="text-blue-500 mb-2 leading-none">&nbsp;</p>
      )}
      <h3 className="text-xl font-medium mb-2 leading-none">{title}</h3>
      <p className="text-gray-600 mb-6 text-sm">{description}</p>
      <a
        href="#"
        className="text-gray-500 hover:text-gray-700 inline-flex items-center text-sm"
      >
        View more {">"}
      </a>
    </div>
  );
}
