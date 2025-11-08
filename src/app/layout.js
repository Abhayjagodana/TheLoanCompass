import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./Header/page";
import Footer from "./footer/page";
import RouteLoader from "./loader";
import { title } from "process";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "The Loan Compass",
    template: "%s | The Loan Compass",
  },
  description:
    "The Loan Compass helps you find, compare, and apply for personal, home, and business loans quickly and securely.",
  keywords:
    "loan, theloancompass, apply loan, home loan, mortgage loan, personal loan, unsecured business, working capital, balance transfer, car loan",
  icons: {
    icon: "/23.jpg",

  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <RouteLoader>
          <Header />
          {children}
          <Footer />
        </RouteLoader>
      </body>
    </html>
  );
}
