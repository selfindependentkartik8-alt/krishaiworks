import type { Metadata } from "next";
import Script from "next/script";
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

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://krishaiworks.com/#organization",
      name: "KrishAIWorks",
      url: "https://krishaiworks.com",
      logo: {
        "@type": "ImageObject",
        url: "https://krishaiworks.com/logo.png",
        width: 512,
        height: 512,
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://krishaiworks.com/#website",
      url: "https://krishaiworks.com",
      name: "KrishAIWorks",
      description:
        "AI-powered tools, productivity utilities, automation, chatbots, websites and custom digital solutions.",
      publisher: {
        "@id": "https://krishaiworks.com/#organization",
      },
      inLanguage: "en",
    },
    {
      "@type": "WebPage",
      "@id": "https://krishaiworks.com/#webpage",
      url: "https://krishaiworks.com",
      name: "KrishAIWorks | AI Tools, Automation & Digital Solutions",
      description:
        "KrishAIWorks provides AI-powered tools, productivity utilities, AI automation, chatbots, websites and custom digital solutions.",
      isPartOf: {
        "@id": "https://krishaiworks.com/#website",
      },
      about: {
        "@id": "https://krishaiworks.com/#organization",
      },
      inLanguage: "en",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}

        {/* Structured Data / JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BS6TSMM1ZR"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-BS6TSMM1ZR');
          `}
        </Script>
      </body>
    </html>
  );
}