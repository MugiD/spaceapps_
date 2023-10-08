import "./globals.css";
import { Montserrat } from "next/font/google";
import { Metadata } from "next";
import Header from "@/components/header";
import { NextAuthProvider } from "./providers";

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Phalanx of Fate",
  description: "Spaceapps challenge",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning className={montserrat.className}>
        <head />
        <body>
          <NextAuthProvider>
            <Header />
            <div>{children}</div>
          </NextAuthProvider>
        </body>
      </html>
    </>
  );
}
