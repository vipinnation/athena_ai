import { Button } from "@/components/ui/button";
import Link from "next/link";
import { TrendingUp } from "lucide-react";

export default function PredictiveAnalyticsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex items-center justify-center mb-8">
        <TrendingUp size={48} className="text-blue-600 mr-4" />
        <h1 className="text-4xl font-bold">Predictive Analytics Services</h1>
      </div>
      <p className="text-xl mb-8 text-center">
        Forecast future trends and behaviors to make data-driven decisions and
        stay ahead of the competition.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Time series forecasting</li>
            <li>Regression analysis</li>
            <li>Classification models</li>
            <li>Ensemble methods</li>
            <li>Bayesian inference</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Applications</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Demand forecasting</li>
            <li>Risk assessment</li>
            <li>Customer churn prediction</li>
            <li>Price optimization</li>
            <li>Supply chain optimization</li>
          </ul>
        </div>
      </div>
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Ready to predict the future with data?
        </h2>
        <Button asChild size="lg">
          <Link href="/contact">Get Started</Link>
        </Button>
      </div>
    </div>
  );
}
