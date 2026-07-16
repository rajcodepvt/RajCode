import StyledComponentsRegistry, {
  GlobalStyle,
} from "../lib/registry";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  metadataBase: new URL("https://rajcode.vercel.app"),
  title: "RajCode | Freelance Web Developer",
  description:
    "Freelance web developer building fast, modern websites that actually convert. React, clean code, no shortcuts.",
  openGraph: {
    title: "RajCode | Freelance Web Developer",
    description:
      "Freelance web developer building fast, modern websites that actually convert. React, clean code, no shortcuts.",
    url: "https://rajcode.vercel.app/",
    siteName: "RajCode",
    type: "website",
    images: [
      {
        url: "/logo512.png",
        width: 512,
        height: 512,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RajCode | Freelance Web Developer",
    description:
      "Freelance web developer building fast, modern websites that actually convert. React, clean code, no shortcuts.",
    images: ["/logo512.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/logo192.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/fonts/poppins-500-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/poppins-600-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/poppins-700-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <StyledComponentsRegistry>
          <GlobalStyle />
          {children}
          <Analytics />
          <SpeedInsights />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
