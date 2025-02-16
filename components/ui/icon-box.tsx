interface IconBoxProps {
  className?: string;
}

export const IconBox = ({ className }: IconBoxProps) => {
  return (
    <div
      className={`border border-[color:var(--Primary-100,#E7E6FF)] self-stretch flex flex-col overflow-hidden items-center justify-center w-12 h-12 my-auto px-1 rounded-[11px] border-solid ${className}`}
    >
      <div className="border border-[color:var(--Primary-300,#A19AFF)] flex flex-col items-center justify-center w-10 h-10 px-1 rounded-[9px] border-solid">
        <div className="border border-[color:var(--G4,#22C345)] bg-[linear-gradient(220deg,#22C345_4.96%,#36E75C_47.7%,#0DAF30_81.68%)] flex w-8 shrink-0 h-8 rounded-[7px] border-solid" />
      </div>
    </div>
  );
};
