import { DefaultProvider } from "@repo/ui/providers";
import "./globals.css";
import "@repo/ui/styles.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pharazon Clinic",
  description: "Pharazon Clinic",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DefaultProvider>
        {children}
        </DefaultProvider>
        </body>
    </html>
  );
}
