import React from "react";
interface StatItemProps {
  number: string;
  label: string;
}
const StatItem: React.FC<StatItemProps> = ({ number, label }) => (
  <>
    <div className="flex flex-col items-center justify-center dark:hidden">
      <div className="text-[49px] font-bold leading-[1.2] bg-clip-text bg-[linear-gradient(214deg,#2A51B2_16.91%,#6684CC_39.28%,#061A4D_66.02%)] max-md:text-[40px] [color:transparent]">
        {number}
      </div>
      <div className="text-lg font-normal bg-clip-text bg-[linear-gradient(214deg,#2A51B2_16.91%,#6684CC_39.28%,#061A4D_66.02%)] [color:transparent]">
        {label}
      </div>
    </div>

    <article className="hidden dark:flex flex-col items-center justify-center ">
      <h3 className="text-[49px] font-bold leading-[1.2] text-transparent bg-clip-text bg-[linear-gradient(211deg,#17C4FE_25.29%,#0FD2E4_47.01%,#1048D4_81.35%)] max-md:text-[40px]">
        {number}
      </h3>
      <p className="text-lg font-normal text-transparent bg-clip-text bg-[linear-gradient(211deg,#17C4FE_25.29%,#0FD2E4_47.01%,#1048D4_81.35%)]">
        {label}
      </p>
    </article>
  </>
);
export const StatsSection: React.FC = () => {
  const stats = [
    { number: "500+", label: "Statisfied Customers" },
    { number: "10+", label: "Years Experience" },
    { number: "20+", label: "Branch Office" },
    { number: "40+", label: "Projects Completed" },
  ];
  return (
    <section className="flex  text-center justify-between flex-wrap max-w-7xl py-12 mx-auto flex-col md:flex-row gap-y-4">
      {stats.map((stat, index) => (
        <StatItem key={index} {...stat} />
      ))}
    </section>
  );
};
