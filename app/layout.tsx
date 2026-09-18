import type { Metadata } from "next";
import { Bricolage_Grotesque, Outfit } from "next/font/google";
import { Providers } from "@/components/Providers";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display-family",
  display: "swap",
});

const sans = Outfit({
  subsets: ["latin"],
  variable: "--font-sans-family",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Brasa — Good Food. Delivered Fresh.",
  description:
    "Brasa is a Lagos kitchen delivering wood-fired favorites and weeknight comfort while they’re still steaming.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-canvas font-sans text-ink">
        <a
          href="#home"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2"
        >
          Skip to content
        </a>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
