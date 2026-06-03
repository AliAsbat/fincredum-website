import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FinCredum | Your Finance Function. Led by Experts.",
  description: "Finance operations, financial intelligence, CFO support, and finance transformation for businesses across the US, UK, and Australia.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
