import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Brain } from "lucide-react";

export default function MachineLearningPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex items-center justify-center mb-8">
        <Brain size={48} className="text-blue-600 mr-4" />
        <h1 className="text-4xl font-bold">Machine Learning Services</h1>
      </div>
      <p className="text-xl mb-8 text-center">
        Leverage advanced algorithms to automate decision-making processes and
        uncover hidden patterns in your data.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Custom model development</li>
            <li>Automated machine learning (AutoML)</li>
            <li>Deep learning and neural networks</li>
            <li>Reinforcement learning</li>
            <li>Transfer learning</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Applications</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Predictive maintenance</li>
            <li>Fraud detection</li>
            <li>Customer segmentation</li>
            <li>Recommendation systems</li>
            <li>Anomaly detection</li>
          </ul>
        </div>
      </div>
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Ready to harness the power of Machine Learning?
        </h2>
        <Button asChild size="lg">
          <Link href="/contact">Get Started</Link>
        </Button>
      </div>
    </div>
  );
}
