import Link from "next/link";
import { Button } from "../ui/button";
import CONSTANTS from "@/constants/constants";

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          {CONSTANTS.APP_DETAILS.shortName}
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className="hover:text-blue-600 transition-colors"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:text-blue-600 transition-colors"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="hover:text-blue-600 transition-colors"
            >
              Contact
            </Link>
          </li>
        </ul>
        <Button variant="outline">Get a Quote</Button>
      </nav>
    </header>
  );
}
