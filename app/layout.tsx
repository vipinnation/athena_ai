import { Montserrat } from "next/font/google";
import "./globals.css";
import CONSTANTS from "@/constants/constants";
import Footer from "@/components/layout/footer.component";
import Header from "@/components/layout/header.component";
import type React from "react";
import { ThemeProvider } from "@/components/layout/providers";
import { Toaster } from "sonner";
const inter = Montserrat({ subsets: ["vietnamese"] });

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
      <body className={`antialiased min-h-screen ${inter.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main>{children}</main>
          <Footer />

          <Toaster
            position="top-right"
            richColors
            closeButton
            toastOptions={{
              unstyled: true,
              classNames: {
                error:
                  "bg-red-400 flex items-center rounded-md px-4 py-3 text-sm w-full mx-2",
                success:
                  "text-green-400 flex items-center rounded-md px-4 py-3 text-sm w-full mx-2",
                warning:
                  "text-yellow-400 flex items-center rounded-md px-4 py-3 text-sm w-full mx-2",
                info: "bg-blue-400 flex items-center rounded-md px-4 py-3 text-sm w-full mx-2",
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
