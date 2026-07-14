import StyledComponentsRegistry, {
  GlobalStyle,
} from "../lib/registry";

export const metadata = {
  metadataBase: new URL("https://rajcode.vercel.app"),
  title: "RajCode | Freelance Web Developer",
  description:
    "RajCode - Freelance web developer specializing in React, modern web apps, and creative designs. Let's build something great together.",
  openGraph: {
    title: "RajCode | Freelance Web Developer",
    description:
      "Freelance web developer specializing in React, modern web apps, and creative designs. Let's build something great together.",
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
      "Freelance web developer specializing in React, modern web apps, and creative designs. Let's build something great together.",
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <StyledComponentsRegistry>
          <GlobalStyle />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
