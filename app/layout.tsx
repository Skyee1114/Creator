import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { TopNavbar } from "./_components/topnavbar";
import { StickyNavbar } from "./_components/stickynavbar";
import { Footer } from "./_components/footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const siteName = "Creator Platform";
const description = "Introducing various basic patterns using Next.js' app router with simplified code.";

export const metadata: Metadata = {
  title: siteName,
  description,
  metadataBase: process.env.NEXT_PUBLIC_SITE_URL ? new URL(process.env.NEXT_PUBLIC_SITE_URL) : undefined,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopNavbar />
        <StickyNavbar />
        <div>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
