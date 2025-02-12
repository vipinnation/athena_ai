import OneIcon from "@/assets/images/one.png";
import TwoIcon from "@/assets/images/two.png";
import ThreeIcon from "@/assets/images/three.png";
import FourIcon from "@/assets/images/four.png";
import AndroidIcon from "@/assets/images/android.png";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Brain, MessageSquare, TrendingUp, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import CTA from "@/components/home/cta";

const services = [
  {
    title: "Machine Learning",
    heading: "Smart Learning Machines",
    numberImage: OneIcon.src,
    options: {
      heading: "We teach computers to be really helpful",
      list: [
        "Like having a super-smart friend who learns exactly how to help with your specific problems",
        "Creating friendly computer assistants that can make simple decisions for you",
        "Finding interesting patterns in information, like spotting when something unusual happens",
        "Making everything work faster and better, like tuning up a bicycle",
      ],
    },
    funExamples: [
      {
        text: "Like having a friendly helper who can answer questions about your favorite store 24 hours a day.",
        showFullWidthLine: true,
      },
      {
        text: "Similar to how you can tell if your friend is happy or sad by their message, our computers can understand customer reviews.",
      },
      {
        text: "Just as you might sort your toys into different boxes, our computers can sort emails into different folders.",
      },
      {
        text: "Like having a super-fast reader who can read 1000 books in one minute and tell you what they're about.",
      },
    ],
  },
  {
    title: "Natural Language Processing",
    heading: "Language Understanding Magic",
    numberImage: TwoIcon.src,
    options: {
      heading: "We help computers understand and work with words",
      list: [
        "Creating friendly chat helpers that can answer questions all day long",
        "Teaching computers to understand if people are happy or sad when they write something",
        "Helping computers read and understand lots of papers and documents really quickly",
        "Making computers that can talk to people in different languages, like having a helpful translator",
      ],
    },
    funExamples: [
      {
        text: "Just like how you learn to recognize your friend's voice, we teach computers to recognize different customers' shopping habits.",
        showFullWidthLine: true,
      },
      {
        text: "Like how you know to bring an umbrella when you see dark clouds, we teach computers to order more supplies when inventory gets low.",
      },
      {
        text: "Similar to how you notice when your toy is making a funny noise, our computers can notice when factory machines aren't working right.",
      },
    ],
  },
  {
    title: "Predictive Analytics",
    heading: "Computer Eyes",
    numberImage: ThreeIcon.src,
    options: {
      heading: "We give computers the ability to see and understand pictures",
      list: [
        "Like having a super-careful helper that checks if things are made perfectly",
        "Teaching computers to spot and name things in pictures, like finding all the dogs in a photo",
        "Creating smart security cameras that can keep watch over important places",
        "Helping computers read words in pictures and turn them into typed text",
      ],
    },
    funExamples: [
      {
        text: "Like having a helper who can count all the red cars in a parking lot in just one second.",
        showFullWidthLine: true,
      },
      {
        text: "Similar to how you can spot a broken crayon, our computers can spot defective products on assembly lines.",
      },
      {
        text: "Just as you can recognize your friends in photos, our computers can recognize faces in security videos.",
      },
      {
        text: "Like having someone who can read all the street signs really quickly while you're driving.",
      },
    ],
  },
  {
    title: "Computer Vision",
    heading: "Future-Telling Tools",
    numberImage: FourIcon.src,
    options: {
      heading: "We give computers the ability to see and understand pictures",
      list: [
        "Like having a weather forecast, but for your business's sales",
        "Spotting possible problems before they happen",
        "Finding the best way to use things so nothing goes to waste",
        "Knowing when machines need a check-up before they break",
      ],
    },
    funExamples: [
      {
        text: "Just like how you know to make more lemonade when it's hot outside, we help stores know what to stock up on.",
        showFullWidthLine: true,
      },
      {
        text: "Similar to how you can tell when your pet needs food before the bowl is empty, we help businesses predict when they need to order supplies.",
      },
      {
        text: "Like knowing which games will be popular during recess, we help stores know which toys to order for Christmas.",
      },
      {
        text: "Just as you can tell when your bike chain needs oil by the squeaky sound, we help factories know when machines need maintenance.",
      },
    ],
  },
];

function ServicesPage() {
  return (
    <div className="min-h-screen pt-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto px-4 tracking-[0.35rem]">
          <p className="text-sm uppercase tracking-wider leading-none mb-6">
            Services
          </p>
          <h1 className="text-2xl sm:text-2xl  font-medium leading-none">
            Transform your business with AI
          </h1>

          <p className="text-2xl sm:text-2xl leading-none py-0.75 font-medium leading-none  bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text  text-gradient">
            Opportunities and Innovations
          </p>
          <h2 className="text-2xl sm:text-2xl  leading-none font-medium">
            that will change the game
          </h2>
        </div>

        {services.map((service, index) => (
          <div key={index}>
            <div className="container mx-auto px-4">
              <div
                className={`mt-8 w-full max-w-7xl  flex flex-col   items-center gap-12 w-full max-w-6xl mx-auto py-12 px-6 ${index%2 ==0 ? "lg:flex-row":"lg:flex-row-reverse"}`}
              >
                <div className="flex-1">
                  <div className="flex">
                    <Image
                      src={service.numberImage}
                      alt="Illustration"
                      width={100}
                      height={60}
                      className=""
                    />
                    <div>
                      <div className="relative">
                        <div className="relative inline-block px-4 py-1 text-sm font-semibold text-white gradient-bg rounded-sm shadow-md">
                          {service.title}
                        </div>
                      </div>

                      <h2 className="text-3xl font-semibold text-gray-900 mt-4 dark:text-white">
                      {service.heading}
                      </h2>

                      <div className="w-16 h-[2px] bg-gray-400 mt-2"></div>
                    </div>
                  </div>

                  <div className="px-4">
                    <p className="text-gray-700 mt-4 font-normal  leading-none dark:text-white">
                      {service.options.heading}:
                    </p>
                    <ul className="mt-4 text-gray-700 space-y-2 font-normal text-sm list-disc px-6 dark:text-white">
                      {service.options.list.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
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
              </div>
            </div>
            <div className="w-full max-w-7xl mx-auto p-4">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-lg font-semibold text-gradient">
                  FUN EXAMPLES
                </h2>
                <Button variant="outline" className="text-sm">
                  View More
                  <svg
                    className="ml-2 h-4 w-4"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                {service.funExamples.map((card, index) => (
                  <GradientCard key={index} text={card.text} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <CTA />
    </div>
  );
}
interface GradientCardProps {
  text: string;
}

const GradientCard: React.FC<GradientCardProps> = ({ text }) => {
  return (
    <Card className="py-4 px-2 rounded-none relative">
      <CardHeader className="w-full py-0 my-0">
        <div className="w-full h-[4px] bg-gradient-to-r from-[#0f46d4] via-[#62b9d0] to-[#0f65c8]" />
      </CardHeader>

      <CardContent>
        <p className="mt-4 text-sm text-gray-600 leading-relaxed dark:text-white">
          {text}
        </p>
      </CardContent>
    </Card>
  );
};

export default ServicesPage;
