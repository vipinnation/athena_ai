import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <Input id="name" placeholder="Your Name" />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <Input id="email" type="email" placeholder="your@email.com" />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Phone
                </label>
                <Input id="phone" type="tel" placeholder="Your Phone Number" />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <Textarea id="message" placeholder="How can we help you?" />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <MapPin className="text-blue-600 mr-4" size={24} />
                <p>123 AI Street, Tech City, TC 12345</p>
              </div>
              <div className="flex items-center">
                <Phone className="text-blue-600 mr-4" size={24} />
                <p>+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center">
                <Mail className="text-blue-600 mr-4" size={24} />
                <p>info@athenaai.com</p>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Office Hours</h3>
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 10:00 AM - 2:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Location</h3>
              <div className="w-full h-64 bg-gray-300 rounded-lg">
                {/* Add a map component or embed here */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
