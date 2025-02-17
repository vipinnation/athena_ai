interface SmartLearningIconProps {
  className?: string;
}

const SmartLearningIcon = ({ className = "" }: SmartLearningIconProps) => {
  return (
    <div
      className={`border border-[color:var(--Primary-100,#E7E6FF)] self-stretch flex flex-col overflow-hidden items-center justify-center w-12 h-12 my-auto px-1 rounded-[11px] border-solid ${className}`}
    >
      <div className="border border-[color:var(--Primary-300,#A19AFF)] flex flex-col items-center justify-center w-10 h-10 px-1 rounded-[9px] border-solid">
        <div className="border border-[color:var(--G1,#17C4FE)] bg-[linear-gradient(211deg,#17C4FE_25.29%,#0FD2E4_47.01%,#1048D4_81.35%)] flex w-8 shrink-0 h-8 rounded-[7px] border-solid" />
      </div>
    </div>
  );
};

export default SmartLearningIcon;
