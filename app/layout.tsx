import { Inter } from "next/font/google";
import "./globals.css"; 
import CONSTANTS from "@/constants/constants";
import Footer from "@/components/layout/footer.component";
import Header from "@/components/layout/header.component";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: CONSTANTS.APP_DETAILS.name,
  description: CONSTANTS.APP_DETAILS.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-gray-900`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
