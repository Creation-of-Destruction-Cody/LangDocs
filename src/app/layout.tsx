import type { Metadata } from "next";
import "@/styles/globals.css"
import Navbar from "@/components/navbar/Navbar";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
    title: {
      default: siteConfig.name,
      template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    creator: siteConfig.creator,
    keywords: siteConfig.keywords,
    authors: siteConfig.authors,
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`bg-zinc-200 h-screen text-[#121212] dark:bg-[#121212] dark:text-zinc-100 min-h-svh !font-custom antialiased text-pretty leading-relaxed text-base`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
