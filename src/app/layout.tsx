import type { Metadata } from "next";
import { montserrat300 } from "./fonts/montserrat";
import "./globals.css";


export const metadata: Metadata = {
  title: "Swift - Seidi",
  description: "A realtime chatting application.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat300.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
