import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const teamMembers = [
  { name: "John Doe", role: "CEO & Founder", image: "/placeholder.svg" },
  { name: "Jane Smith", role: "CTO", image: "/placeholder.svg" },
  {
    name: "Mike Johnson",
    role: "Lead Data Scientist",
    image: "/placeholder.svg",
  },
  {
    name: "Sarah Brown",
    role: "Head of AI Research",
    image: "/placeholder.svg",
  },
];

const milestones = [
  { year: 2018, event: "Company founded" },
  { year: 2019, event: "Launched first AI product" },
  { year: 2020, event: "Expanded to international markets" },
  { year: 2021, event: "Reached 100 enterprise clients" },
  { year: 2022, event: "Opened AI research lab" },
  { year: 2023, event: "Recognized as industry leader in AI solutions" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">
          About AI Innovate
        </h1>

        {/* Mission and Vision */}
        <section className="mb-20">
          <div className="bg-blue-600 text-white rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg">
              To empower businesses with cutting-edge AI solutions that drive
              innovation, efficiency, and growth.
            </p>
          </div>
          <div className="bg-purple-600 text-white rounded-lg p-8 mt-8">
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-lg">
              To be the global leader in AI-driven business transformation,
              shaping the future of industries worldwide.
            </p>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index}>
                <CardContent className="p-4 text-center">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Timeline Section */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-8">Our Journey</h2>
          <div className="relative">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`flex items-center mb-8 ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                <div
                  className={`w-1/2 ${
                    index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"
                  }`}
                >
                  <h3 className="text-xl font-semibold">{milestone.year}</h3>
                  <p>{milestone.event}</p>
                </div>
                <div className="absolute left-1/2 w-4 h-4 bg-blue-600 rounded-full transform -translate-x-1/2"></div>
              </div>
            ))}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-600 transform -translate-x-1/2"></div>
          </div>
        </section>
      </div>
    </div>
  );
}
