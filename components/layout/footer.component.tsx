import {
  Facebook,
  Twitter,
  LinkedinIcon as LinkedIn,
  Instagram,
} from "lucide-react";
import LogoIcon from "@/assets/images/logo.svg";
import Image from "next/image";
import CONSTANTS from "@/constants/constants";
import FooterSVG from "@/assets/images/footer.svg";

export default function Footer() {
  return (
    <div className="flex bg-gray-100 dark:bg-black justify-center">
      <footer className=" pt-12 pb-4 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="flex flex-col space-y-2">
            <div className="flex items-center space-x-2">
              <Image src={LogoIcon} width={100} height={100} alt="" />
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

        <div className="flex items-center justify-around mt-8 text-sm">
          <p>
            &copy; 2025{" "}
            <span className="font-semibold">
              {CONSTANTS.APP_DETAILS.shortName}
            </span>
            . All rights reserved.
          </p>
          <div className="flex space-x-4 text-sm">
            <span className="cursor-pointer">
              {" "}
              <Facebook className="w-5 h-5" />
            </span>
            <span className="cursor-pointer">
              {" "}
              <Instagram className="w-5 h-5" />
            </span>
          </div>
          <div className="w-[400px]">
            <span></span>
          </div>
        </div>
      </footer>
      <Image src={FooterSVG} alt="" width={300} height={300} />
    </div>
  );
}
