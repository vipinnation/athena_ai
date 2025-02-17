const SmartLearningCapabilities = () => {
  const capabilities = [
    "Predict Trends & Risks",
    "Automate with Intelligence",
    "See and Understand",
    "Optimize Operations",
  ];

  return (
    <div className="bg-[rgba(246,250,251,1)] dark:bg-gray-900 flex w-full flex-col items-center text-black uppercase justify-center mx-auto p-6 max-md:max-w-full max-md:mt-10 max-md:px-5">
      <div className="text-base font-normal leading-[3] tracking-[5.44px] dark:text-white">
        Capabilities
      </div>
      <div className="flex max-w-full dark:bg-black w-[449px] items-center overflow-hidden text-lg font-bold tracking-[0.88px] leading-[23px] justify-center flex-wrap mt-6">
        {capabilities.map((capability, index) => (
          <div
            key={index}
            className="self-stretch flex min-h-[190px] flex-col items-stretch justify-center grow shrink w-[179px] my-auto  dark:bg-black"
          >
            <div className="border-[color:var(--G1,#17C4FE)] bg-white  dark:bg-black dark:text-white max-w-full w-56 overflow-hidden flex-1 p-[21px] border-[0.883px] border-solid max-md:px-5">
              {capability}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SmartLearningCapabilities;
