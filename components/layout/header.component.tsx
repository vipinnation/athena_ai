"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import Logo from "@/assets/images/logo.svg";
import DarkLogo from "@/assets/images/logo_dark.svg";
import Image from "next/image";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-white/30 dark:bg-black/30 shadow-lg dark:border-white/10"
          : "bg-transparent shadow-none"
      }`}
    >
      <Link href="/" className="flex items-center space-x-2">
        <Image
          src={theme == "light" ? DarkLogo.src : Logo.src}
          alt="Nexo"
          width={100}
          height={50}
        />
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8">
        {["HOME", "SERVICES", "ABOUT", "CONTACT"].map((item) => (
          <Link
            key={item}
            href={`/${item !== "HOME" ? item.toLowerCase() : ""}`}
            className="text-xs text-gray-800 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            {item}
          </Link>
        ))}
      </div>

      <div className="flex items-center space-x-4">
        <Button
          variant="outline"
          className="hidden text-xs md:block border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:bg-white dark:hover:bg-gray-800 transition-all bg-transparent"
        >
          ENQUIRE NOW
        </Button>
        {mounted && (
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-800 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        )}
        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-black shadow-lg transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setMobileMenuOpen(false)}>
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="flex flex-col items-center space-y-4 py-4">
          {["HOME", "SERVICES", "ABOUT", "CONTACT"].map((item) => (
            <Link
              key={item}
              href={`/${item !== "HOME" ? item.toLowerCase() : ""}`}
              className="text-lg text-gray-800 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
          <Button
            variant="outline"
            className="border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:bg-white dark:hover:bg-gray-800 transition-all bg-transparent"
          >
            ENQUIRE NOW
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
