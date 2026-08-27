import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://krishaiworks.com"),

  title: {
    default: "KrishAIWorks | AI Tools, Automation & Digital Solutions",
    template: "%s | KrishAIWorks",
  },

  description:
    "KrishAIWorks provides AI-powered tools, productivity utilities, AI automation, chatbots, websites and custom digital solutions.",

  keywords: [
    "KrishAIWorks",
    "AI tools",
    "AI automation",
    "AI chatbot",
    "AI tools online",
    "productivity tools",
    "website development",
    "lead generation",
    "AI solutions",
    "custom AI tools",
  ],

  authors: [
    {
      name: "KrishAIWorks",
      url: "https://krishaiworks.com",
    },
  ],

  creator: "KrishAIWorks",
  publisher: "KrishAIWorks",

  applicationName: "KrishAIWorks",

  category: "technology",

  alternates: {
    canonical: "https://krishaiworks.com",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://krishaiworks.com",
    siteName: "KrishAIWorks",
    title: "KrishAIWorks | AI Tools, Automation & Digital Solutions",
    description:
      "Explore AI-powered tools, productivity utilities and custom digital solutions by KrishAIWorks.",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "KrishAIWorks",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "KrishAIWorks | AI Tools & Digital Solutions",
    description:
      "AI tools, automation, chatbots, websites and custom digital solutions.",
    images: ["/logo.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}