import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-foreground px-2 gap-4 sm:gap-0 md:px-20 justify-between py-2 font-semibold text-2xl">
          STUDY HALL
        </nav>
        <div className="px-2 md:px-20 py-2 font-medium text-2xl">
          {children}
        </div>
      </body>
    </html>
  );
}
