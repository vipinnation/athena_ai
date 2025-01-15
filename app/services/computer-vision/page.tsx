import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Eye } from "lucide-react";

export default function ComputerVisionPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex items-center justify-center mb-8">
        <Eye size={48} className="text-blue-600 mr-4" />
        <h1 className="text-4xl font-bold">Computer Vision Services</h1>
      </div>
      <p className="text-xl mb-8 text-center">
        Analyze and interpret visual information from the world to automate
        tasks and enhance user experiences.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Image classification</li>
            <li>Object detection and tracking</li>
            <li>Facial recognition</li>
            <li>Image segmentation</li>
            <li>Optical character recognition (OCR)</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Applications</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Autonomous vehicles</li>
            <li>Quality control in manufacturing</li>
            <li>Medical image analysis</li>
            <li>Surveillance and security</li>
            <li>Augmented reality experiences</li>
          </ul>
        </div>
      </div>
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Ready to see the world through AI?
        </h2>
        <Button asChild size="lg">
          <Link href="/contact">Get Started</Link>
        </Button>
      </div>
    </div>
  );
}
