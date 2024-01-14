import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "@/app/_utils/providers";
import Nav from "@/app/_components/nav";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  return {
    alternates: {
      canonical: "https://my-theme.vercel.com/",
    },
    appleWebApp: {
      capable: true,
      statusBarStyle: "black",
      title: "my-theme",
    },
    applicationName: "my-theme",
    description:
      "Empower your small business with a sleek online presence at a fraction of the cost. Budget-friendly, professional websites tailored for small businesses. Elevate your brand effortlessly in the digital world.",
    icons: [
      {
        rel: "icon",
        sizes: "32x32",
        type: "image/png",
        url: "/favicon-32x32.png",
      },
      {
        rel: "icon",
        sizes: "16x16",
        type: "image/png",
        url: "/favicon-16x16.png",
      },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        type: "image/png",
        url: "/apple-touch-icon.png",
      },
    ],
    keywords: "keyword 1, keyword 2, keyword 3",
    openGraph: {
      // TODO: Add image to URL
      // images: [{ type: "image/svg", url: ... }],
      locale: "sr_RS",
      siteName: "MY-THEME",
      url: "https://www.my-theme.vercel.com",
    },
    other: {
      locale: "sr_RS",
      "msapplication-TileColor": "#000",
      "msapplication-navbutton-color": "#000",
      "msapplication-starturl": "https://www.my-theme.vercel.com",
      "theme-color": "#000",
    },
    robots: {
      follow: false,
      index: false,
    },
    themeColor: "#000",
    title: "my-theme | spin up your website in a matter of minutes!",
    twitter: {
      card: "summary",
      creator: "@twiTteRNalog",
      site: "https://www.my-theme.vercel.com",
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Nav />
          {children}
        </Providers>
      </body>
    </html>
  );
}
