import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import RouteLoader from "./loader";
import { title } from "process";
import Header from "./Header/page";
import Footer from "./footer/page";

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
    <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <RouteLoader>
        <div className="container mx-auto px-4 max-w-7xl pt-12 flex flex-col ">
          <Header />
          {children}
          <Footer />
        </div>
      </RouteLoader>
    </body>
  </html>
);


}
