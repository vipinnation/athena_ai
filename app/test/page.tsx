import OneIcon from "@/assets/images/one.png";
import AndroidIcon from "@/assets/images/android.png";
import Image from "next/image";
export default function MachineLearning() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16 min-h-screen">
      <section className="flex flex-col lg:flex-row items-center gap-12 w-full max-w-6xl mx-auto py-12 px-6">
        <div className="flex-1">
          <div className="flex">
            <Image
              src={OneIcon.src}
              alt="Illustration"
              width={100}
              height={60}
              className=""
            />
            <div>
              <div className="relative">
                <div className="relative inline-block px-4 py-1 text-sm font-semibold text-white gradient-bg rounded-sm shadow-md">
                  MACHINE LEARNING
                </div>
              </div>

              <h2 className="text-3xl font-semibold text-gray-900 mt-4 dark:text-white">
                Smart Learning Machines
              </h2>

              <div className="w-16 h-[2px] bg-gray-400 mt-2"></div>
            </div>
          </div>

          <div className="px-4">
            <p className="text-gray-700 mt-4 font-thin leading-none dark:text-white">
              We teach computers to be really helpful:
            </p>
            <ul className="mt-4 text-gray-700 space-y-2 font-thin text-sm list-disc px-6 dark:text-white">
              <li>
                Like having a super-smart friend who learns exactly how to help
                with your specific problems
              </li>
              <li>
                Creating friendly computer assistants that can make simple
                decisions for you
              </li>
              <li>
                Finding interesting patterns in information, like spotting when
                something unusual happens
              </li>
              <li>
                Making everything work faster and better, like tuning up a
                bicycle
              </li>
            </ul>
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <img
            src={AndroidIcon.src}
            alt="Illustration"
            width={500}
            height={500}
            className="w-full max-w-md"
          />
        </div>
      </section>
    </div>
  );
}
