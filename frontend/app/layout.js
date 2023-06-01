import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="gap-4 justify-between px-2 py-2 text-2xl font-semibold bg-foreground sm:gap-0 md:px-20">
          <a href="/">STUDY HALL</a>
        </nav>
        <div className="px-2 py-2 text-2xl font-medium md:px-20">
          {children}
        </div>
      </body>
    </html>
  );
}
