import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import HomeIcon from "@/assets/images/home.png";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const TestPage = () => {
  return (
    <div>
      <div className="grid grid-cols-2 mx-auto items-center max-w-6xl mt-8 mb-20">
        <div className=" mb-8 md:mb-0 mt-12">
          <h1 className="text-3xl md:text-6xl font-normal mb-4">
            Powering Your Tomorrow with AI
          </h1>
          <p className="text-md mb-8">
            Unlock the potential of your data with our cutting-edge AI services.
          </p>
          <div className="space-x-4">
            <Button asChild>
              <Link href="/services">Our Services</Link>
            </Button>
            <Button variant="outline">
              <Link href="/contact" className="text-black">
                Get a Quote
              </Link>
            </Button>
          </div>
        </div>
        <Image src={HomeIcon.src} width={600} height={600} alt="" />
      </div>

      {/* Services */}

      <div className="max-w-6xl mx-auto">
        <div className="flex">
          <h2 className="text-2xl font-semibold mb-4 bg-green-400 rounded-md py-2 px-4">Services</h2>
          <p className="w-1/2 mx-4">
            At our software company, we provide a variety of services designed
            to help businesses thrive and achieve success online. These services
            include:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            "Machine Learning",
            "Natural Language Processing",
            "Predictive Analytics",
            "Computer Vision",
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-4">{service}</h3>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Link
                href={`/services#${service.toLowerCase().replace(" ", "-")}`}
                className="text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center"
              >
                Learn More <ArrowRight className="ml-2" size={16} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestPage;
