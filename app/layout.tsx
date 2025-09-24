import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rippon Labs - Build what customers feel. Measure what leaders trust.",
  description: "Web, AI, and product systems — shipped with startup speed. We turn ambiguity into shipped outcomes: prototypes, rollouts, and revenue.",
  keywords: ["web development", "AI consulting", "product development", "startup", "consulting"],
  authors: [{ name: "Rippon Labs LLC" }],
  creator: "Rippon Labs LLC",
  publisher: "Rippon Labs LLC",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://ripponlabs.com"),
  openGraph: {
    title: "Rippon Labs - Build what customers feel. Measure what leaders trust.",
    description: "Web, AI, and product systems — shipped with startup speed. We turn ambiguity into shipped outcomes: prototypes, rollouts, and revenue.",
    url: "https://ripponlabs.com",
    siteName: "Rippon Labs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rippon Labs - Build what customers feel. Measure what leaders trust.",
    description: "Web, AI, and product systems — shipped with startup speed. We turn ambiguity into shipped outcomes: prototypes, rollouts, and revenue.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
