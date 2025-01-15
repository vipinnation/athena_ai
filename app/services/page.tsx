import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Brain, MessageSquare, TrendingUp, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Machine Learning",
    description:
      "Leverage advanced algorithms to automate decision-making processes and uncover hidden patterns in your data.",
    icon: Brain,
    link: "/services/machine-learning",
  },
  {
    title: "Natural Language Processing",
    description:
      "Understand and interact with human language to improve customer service, analyze sentiment, and extract valuable insights.",
    icon: MessageSquare,
    link: "/services/natural-language-processing",
  },
  {
    title: "Predictive Analytics",
    description:
      "Forecast future trends and behaviors to make data-driven decisions and stay ahead of the competition.",
    icon: TrendingUp,
    link: "/services/predictive-analytics",
  },
  {
    title: "Computer Vision",
    description:
      "Analyze and interpret visual information from the world to automate tasks and enhance user experiences.",
    icon: Eye,
    link: "/services/computer-vision",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <service.icon size={32} className="text-blue-600" />
                  <CardTitle>{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  {service.description}
                </CardDescription>
                <Button asChild>
                  <Link href={service.link}>Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
