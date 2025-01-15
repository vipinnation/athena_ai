import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MessageSquare } from "lucide-react";

export default function NLPPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex items-center justify-center mb-8">
        <MessageSquare size={48} className="text-blue-600 mr-4" />
        <h1 className="text-4xl font-bold">
          Natural Language Processing Services
        </h1>
      </div>
      <p className="text-xl mb-8 text-center">
        Understand and interact with human language to improve customer service,
        analyze sentiment, and extract valuable insights.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Text classification</li>
            <li>Named entity recognition</li>
            <li>Sentiment analysis</li>
            <li>Language translation</li>
            <li>Text summarization</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Applications</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Chatbots and virtual assistants</li>
            <li>Social media monitoring</li>
            <li>Content categorization</li>
            <li>Voice recognition systems</li>
            <li>Automated content generation</li>
          </ul>
        </div>
      </div>
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Ready to unlock the potential of Natural Language Processing?
        </h2>
        <Button asChild size="lg">
          <Link href="/contact">Get Started</Link>
        </Button>
      </div>
    </div>
  );
}
