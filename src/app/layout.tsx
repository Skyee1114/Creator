import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThirdwebCustomeProvider } from "@/components/thirdweb/ThirdwebProvider";
import { ThemeProvider } from "@/components/themes/theme-provider"
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { GoogleTagManager } from '@next/third-parties/google'
import { Toaster } from "@/components/ui/sonner"
import HotjarSnippet from './_components/hotjarsnippet ';

const inter = Inter({ subsets: ['latin'] })
// const activeChain = "ethereum";

export const metadata: Metadata = {
    title: "Creat'or | SaaS",
    description: "Creat'or SaaS App",
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <HotjarSnippet>
        <ThirdwebCustomeProvider>
          <link rel="icon" href="/favicon.ico" sizes="any"/>
          <body className={`${inter.className} min-h-screen antialiased dark text-white bg-black`}>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
                {children}
                <SpeedInsights />
                <Analytics/>
            </ThemeProvider>
            <Toaster position="bottom-right" />     
          </body>
        </ThirdwebCustomeProvider>
      </HotjarSnippet>
      <GoogleTagManager gtmId="GTM-KNB59CJS" />      
    </html>
  )
}