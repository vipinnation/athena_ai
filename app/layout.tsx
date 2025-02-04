import { Inter } from "next/font/google";
import "./globals.css";
import CONSTANTS from "@/constants/constants";
import Footer from "@/components/layout/footer.component";
import Header from "@/components/layout/header.component";
import type React from "react";
import { ThemeProvider } from "@/components/layout/providers";
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
      <body className={`antialiased min-h-screen`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
