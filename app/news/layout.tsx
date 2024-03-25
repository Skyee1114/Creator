import type { Metadata } from "next";
import { IntroHeader } from "../_components/introheader";

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
        <IntroHeader title="News" content="Welcome to the News section of Creat'or, your premier destination for the latest and most impactful stories at the intersection of crowdfunding, business innovation, and the dynamic world of cryptocurrency. Here, we delve into the trends shaping the future of finance and entrepreneurship, providing you with insightful analysis and up-to-the-minute reports. Whether you're an aspiring entrepreneur, an investor looking to make informed decisions, or simply curious about the evolving landscape of digital finance, this space is designed to keep you informed and ahead of the curve. Dive into our curated selection of news articles and discover how these developments can impact your ventures and investment strategies. Stay informed, stay inspired, and let's navigate the exciting world of crowdfunding and cryptocurrency together."/>
        <div>
          {children}
        </div> 
    </>
  );
}
