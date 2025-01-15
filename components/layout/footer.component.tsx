import Link from "next/link";
import {
  Facebook,
  Twitter,
  LinkedinIcon as LinkedIn,
  Instagram,
} from "lucide-react";
import CONSTANTS from "@/constants/constants";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              {CONSTANTS.APP_DETAILS.shortName}
            </h3>
            <p className="text-gray-400">
              Empowering Businesses with AI-Driven Solutions
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="hover:text-blue-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-blue-400 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-blue-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-blue-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services#machine-learning"
                  className="hover:text-blue-400 transition-colors"
                >
                  Machine Learning
                </Link>
              </li>
              <li>
                <Link
                  href="/services#nlp"
                  className="hover:text-blue-400 transition-colors"
                >
                  Natural Language Processing
                </Link>
              </li>
              <li>
                <Link
                  href="/services#predictive-analytics"
                  className="hover:text-blue-400 transition-colors"
                >
                  Predictive Analytics
                </Link>
              </li>
              <li>
                <Link
                  href="/services#computer-vision"
                  className="hover:text-blue-400 transition-colors"
                >
                  Computer Vision
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <LinkedIn size={24} />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2023 AI Innovate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
