"use client";
import {
  Facebook,
  Twitter,
  LinkedinIcon as LinkedIn,
  Instagram,
} from "lucide-react";
import Image from "next/image";
import CONSTANTS from "@/constants/constants";
import FooterSVG from "@/assets/images/footer.svg";
import Logo from "@/assets/images/nexo.svg";
import ShortLogo from "@/assets/images/icon.svg";
import DarkLogo from "@/assets/images/dark_icon.png";
import { useTheme } from "next-themes";
import Link from "next/link";

export default function Footer() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="flex bg-gray-100 dark:bg-black flex flex-col md:flex-row justify-center">
      <footer className="w-full pt-12 pb-4 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-start">
          <div className="flex space-y-2 mt-2 flex-col lg:flex-row items-center">
            <div className="flex items-center space-x-2">
              <Image src={Logo} width={75} height={75} alt="" />
            </div>
            <div className="text-gray-600 dark:text-gray-400 px-3">
              <Image
                src={theme == "dark" ? ShortLogo : DarkLogo}
                alt=""
                width={75}
                height={75}
                className="text-center mx-auto md:mx-0"
              />
              <p className="text-sm py-2">
                Empowering Businesses with AI-Driven Solutions
              </p>
            </div>
          </div>

          <div className="px-6 text-center sm:text-left">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
              Support
            </h3>
            <ul className="space-y-2 text-gray-600 text-sm dark:text-gray-400 flex flex-col">
              <Link href={"/contact"}>Contact Us</Link>
              <Link href={"/contact"}>FAQs</Link>
            </ul>
          </div>

          <div className="px-6 text-center sm:text-left">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
              Company
            </h3>
            <ul className="space-y-2 text-gray-600 text-sm dark:text-gray-400">
              <Link href={"/about"}>About Us</Link>
              <li>Careers</li>
              <li>Blog</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between mt-8 text-sm text-center md:text-left">
          <p>
            &copy; 2025{" "}
            <span className="font-semibold">
              {CONSTANTS.APP_DETAILS.shortName}
            </span>
            . All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <span className="cursor-pointer">
              <Facebook className="w-5 h-5" />
            </span>
            <span className="cursor-pointer">
              <Instagram className="w-5 h-5" />
            </span>
          </div>
        </div>
      </footer>
      <Image
        src={FooterSVG}
        alt=""
        width={300}
        height={300}
        className="mx-auto"
      />
    </div>
  );
}
