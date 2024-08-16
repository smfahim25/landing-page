import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import Header from "@/components/layout/Header";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Spectrum",
  description: "Your Social Aggregator",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <Header />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
