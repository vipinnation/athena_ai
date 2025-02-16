import { cn } from "@/lib/utils";

interface GradientDividerProps {
  className?: string;
}

export const GradientDivider = ({ className }: GradientDividerProps) => {
  return (
    <div
      className={cn(
        "bg-[linear-gradient(220deg,#22C345_4.96%,#36E75C_47.7%,#0DAF30_81.68%)] flex min-h-[3px] w-full rounded-[10px]",
        className
      )}
      role="separator"
    />
  );
};
