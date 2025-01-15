import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Empowering Businesses with AI-Driven Solutions
              </h1>
              <p className="text-xl mb-8">
                Unlock the potential of your data with our cutting-edge AI
                services.
              </p>
              <div className="space-x-4">
                <Button asChild>
                  <Link href="/services">Our Services</Link>
                </Button>
                <Button variant="outline">
                  <Link href="/contact" className="text-black">Get a Quote</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              {/* Add a dynamic AI-themed animation here */}
              <div className="w-full h-64 bg-white bg-opacity-20 rounded-lg animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Key Services
          </h2>
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
      </section>

      {/* Client Logos Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Trusted by Industry Leaders
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {[1, 2, 3, 4, 5, 6].map((logo) => (
              <div
                key={logo}
                className="w-32 h-16 bg-gray-300 rounded-lg"
              ></div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl mb-8">
            Let&apos;s discuss how our AI solutions can drive your success.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Get Started Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

// import { Search, LineChart, Lightbulb } from "lucide-react";
// import React from "react";

// const page = () => {
//   const values = [
//     {
//       title: "Acuity",
//       description:
//         "We are committed to delivering the highest-quality AI-powered analytics to help you unlock new opportunities, optimize performance, and drive growth.",
//       icon: Search,
//     },
//     {
//       title: "Agility",
//       description:
//         "We believe in the power of rapid iteration and continuous improvement to help you stay ahead of the competition and adapt to changing market conditions.",
//       icon: LineChart,
//     },
//     {
//       title: "Ethics",
//       description:
//         "We are dedicated to ensuring that our AI solutions are developed and deployed in a responsible and ethical manner, with a focus on fairness, transparency, and accountability.",
//       icon: Lightbulb,
//     },
//   ];
//   return (
//     <div>
//       <div className="bg-gray-950 text-white py-16 px-4">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-4xl font-bold mb-12">Our values</h2>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {values.map((value, index) => (
//               <div
//                 key={index}
//                 className="p-6 rounded-lg bg-gray-900/50 border border-gray-800 backdrop-blur-sm"
//               >
//                 <value.icon className="w-6 h-6 mb-4 text-gray-400" />
//                 <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
//                 <p className="text-gray-400 leading-relaxed">
//                   {value.description}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default page;
