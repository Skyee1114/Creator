import type { Metadata } from "next";

const siteName = "Creator Platform";
const description =
  "Introducing various basic patterns using Next.js' app router with simplified code.";

export const metadata: Metadata = {
  title: siteName,
  description,
  metadataBase: process.env.NEXT_PUBLIC_SITE_URL ? new URL(process.env.NEXT_PUBLIC_SITE_URL) : undefined,
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>        
        {children}
    </>
  );
}
