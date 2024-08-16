import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Made You Look Clothing",
  description: "Project made by Rupen Maharjan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={"bg-[#f9e6e0]"}>{children}</body>
    </html>
  );
}
