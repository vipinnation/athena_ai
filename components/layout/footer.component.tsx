import Link from "next/link";
import {
  Facebook,
  Twitter,
  LinkedinIcon as LinkedIn,
  Instagram,
} from "lucide-react";
import CONSTANTS from "@/constants/constants";
import Image from "next/image";
import Logo from "@/assets/images/icon.png";

export default function Footer() {
  return (
    <footer className="bg-gray-100  dark:bg-black pt-12 pb-4 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <div className="flex flex-col space-y-2">
          <div className="flex items-center space-x-2">
            <svg
              className="h-10 w-10 text-sky-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              NEXO
            </span>
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            Empowering Businesses with AI-Driven Solutions
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
            Support
          </h3>
          <ul className="space-y-2 text-gray-600 dark:text-gray-400">
            <li>Contact Us</li>
            <li>FAQs</li>
            <li>Live Chat</li>
            <li>Terms of Service</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
            Company
          </h3>
          <ul className="space-y-2 text-gray-600 dark:text-gray-400">
            <li>About Us</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>

      <div className="flex items-center justify-around mt-8">
        <p>
          &copy; 2025 <span className="font-bold">NEXO</span>. All rights
          reserved.
        </p>
        <div className="flex space-x-4 text-lg">
          <span className="cursor-pointer">
            {" "}
            <Facebook />
          </span>
          <span className="cursor-pointer">
            {" "}
            <Instagram />
          </span>
        </div>
        <div className="w-[400px]">
          <span></span>
        </div>
      </div>
    </footer>
  );
}
