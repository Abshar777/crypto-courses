import type { Metadata } from "next";
import "./globals.css";
import ReactQueryProvider from "@/components/providers/react-query";

export const metadata: Metadata = {
  title: "Web3 DeCoded ",
  description:
    "Web3 DeCode d is a platform for learning about blockchain and cryptocurrency.",
  generator: "Web3 DeCoded",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
