// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";

// export default function Header() {
//     const [menuOpen, setMenuOpen] = useState(false);
//     const [loanOpen, setLoanOpen] = useState(false);

//     return (
//         <header className="absolute top-0 left-0 w-full font-sans z-10 bg-white">
//             <div className="container mx-auto flex items-center justify-between px-4 py-3">
//                 {/* Logo */}
//                 <Link href="/" className="flex items-center">
//                     <Image
//                         src="/logo-1.png"
//                         alt="Secure Edge"
//                         width={80}
//                         height={50}
//                         className="object-contain"
//                     />
//                 </Link>

//                 {/* Desktop Menu */}
//                 <ul className="hidden md:flex space-x-8 items-center font-medium text-blue-500 uppercase text-lg">
//                     <li><Link href="/" className="hover:text-blue-300">Home</Link></li>
//                     <li><Link href="/about" className="hover:text-blue-300">About Us</Link></li>
//                     <li><Link href="/properties" className="hover:text-blue-300">Properties</Link></li>

//                     {/* Apply Loan Dropdown */}
//                     <li className="relative group">
//                         <button className="flex items-center hover:text-blue-300 cursor-pointer">
//                             Apply Loan <span className="ml-1">▾</span>
//                         </button>

//                         <ul className="absolute left-0 mt-2 w-56 bg-white text-black border rounded-lg shadow-lg hidden group-hover:block z-50" >
//                             <li>
//                                 <Link href="/loan/home-loan" className="block px-4 py-2 hover:bg-gray-100">
//                                     Home Loan
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link href="/loan/mortgage-loan" className="block px-4 py-2 hover:bg-gray-100">
//                                     Mortgage Loan
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link href="/loan/personal-loan" className="block px-4 py-2 hover:bg-gray-100">
//                                     Personal Loan
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link href="/loan/unsecured-business-loan" className="block px-4 py-2 hover:bg-gray-100">
//                                     Unsecured Business Loan
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link href="/loan/working-capital" className="block px-4 py-2 hover:bg-gray-100">
//                                     Working Capital
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link href="/loan/balance-transfer" className="block px-4 py-2 hover:bg-gray-100">
//                                     Balance Transfer
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link href="/loan/car-loans" className="block px-4 py-2 hover:bg-gray-100">
//                                     Car Loans
//                                 </Link>
//                             </li>
//                         </ul>
//                     </li>



//                     <li><Link href="/career" className="hover:text-gray-300">Careers</Link></li>

//                     <li>
//                         <Link
//                             href="/contact"
//                             className="bg-blue-700 text-white px-6 py-2 rounded-full hover:bg-blue-800 transition text-sm"
//                         >
//                             Apply
//                         </Link>
//                     </li>
//                 </ul>

//                 {/* Mobile Menu Button */}
//                 <button
//                     className="md:hidden flex items-center text-white"
//                     onClick={() => setMenuOpen(!menuOpen)}
//                 >
//                     <svg
//                         className="w-7 h-7"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                     >
//                         {menuOpen ? (
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//                         ) : (
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//                         )}
//                     </svg>
//                 </button>
//             </div>

//             {/* Mobile Menu */}
//             {menuOpen && (
//                 <div className="md:hidden bg-white border-t shadow-lg text-black font-bold text-lg">
//                     <Link href="/" className="block px-4 py-2 hover:bg-gray-100">Home</Link>
//                     <Link href="/about" className="block px-4 py-2 hover:bg-gray-100">About Us</Link>
//                     <Link href="/properties" className="block px-4 py-2 hover:bg-gray-100">Properties</Link>

//                     <div className="px-4 py-2">
//                         <button
//                             onClick={() => setLoanOpen(!loanOpen)}
//                             className="w-full flex justify-between items-center hover:text-blue-800 text-sm"
//                         >
//                             Apply Loan
//                             <span>{loanOpen ? "▴" : "▾"}</span>
//                         </button>
//                         {loanOpen && (
//                             <ul className="mt-2 pl-4 space-y-2">
//                                 <li><Link href="/loan/home-loan" className="block hover:text-blue-800">Home Loan</Link></li>
//                                 <li><Link href="/loan/mortgage-loan" className="block hover:text-blue-800">Mortgage Loan</Link></li>
//                                 <li><Link href="/loan/personal-loan" className="block hover:text-blue-800">Personal Loan</Link></li>
//                                 <li><Link href="/loan/unsecured-business-loan" className="block hover:text-blue-800">Unsecured Business Loan</Link></li>
//                                 <li><Link href="/loan/working-capital" className="block hover:text-blue-800">Working Capital</Link></li>
//                                 <li><Link href="/loan/balance-transfer" className="block hover:text-blue-800">Balance Transfer</Link></li>
//                                 <li><Link href="/loan/car-loans" className="block hover:text-blue-800">Car Loans</Link></li>
//                             </ul>
//                         )}
//                     </div>

//                     <Link href="/career" className="block px-4 py-2 hover:bg-gray-100">Careers</Link>
//                     <Link
//                         href="/contact"
//                         className="block bg-blue-700 text-white m-4 px-4 py-2 rounded-full text-center hover:bg-blue-800 transition text-sm"
//                     >
//                         Apply
//                     </Link>
//                 </div>
//             )}
//         </header>
//     );
// }
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { RainbowButton } from "../../../components/ui/rainbow-button";
import { SparklesText } from "@/components/ui/sparkles-text";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loanOpen, setLoanOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 h-20 flex justify-center">
      <div className="container mx-auto px-4 max-w-7xl flex justify-between items-center py-3 bg-white shadow-md rounded-xl">

        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/23.jpg"
            alt="Secure Edge"
            width={80}
            height={60}
            className="object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 items-center font-bold text-green-900 text-lg">
          <li>
            <Link href="/" className="hover:text-green-700 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-green-700 transition-colors">
              About Us
            </Link>
          </li>

          {/* Apply Loan Dropdown */}
          <li className="relative group">
            <button className="flex items-center hover:text-green-700 cursor-pointer transition-colors">
             <SparklesText> Apply Loan </SparklesText><span className="ml-1">▾</span>
            </button>
            <ul className="absolute left-0 mt-2 w-56 bg-white border rounded-lg shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50">
              <li>
                <Link
                  href="/loan/Homeloan"
                  className="block px-4 py-2 hover:bg-green-100 text-base"
                >
                  Home Loan
                </Link>
              </li>
              <li>
                <Link
                  href="/loan/mortage"
                  className="block px-4 py-2 hover:bg-green-100 text-base"
                >
                  Mortgage Loan
                </Link>
              </li>
              <li>
                <Link
                  href="/loan/personal"
                  className="block px-4 py-2 hover:bg-green-100 text-base"
                >
                  Personal Loan
                </Link>
              </li>
              <li>
                <Link
                  href="/loan/unsecureloan"
                  className="block px-4 py-2 hover:bg-green-100 text-base"
                >
                  Unsecured Business Loan
                </Link>
              </li>
              <li>
                <Link
                  href="/loan/workingcapital"
                  className="block px-4 py-2 hover:bg-green-100 text-base"
                >
                  Working Capital
                </Link>
              </li>
              <li>
                <Link
                  href="/loan/balancetransfer"
                  className="block px-4 py-2 hover:bg-green-100 text-base"
                >
                  Balance Transfer
                </Link>
              </li>
              <li>
                <Link
                  href="/loan/carloan"
                  className="block px-4 py-2 hover:bg-green-100 text-base"
                >
                  Car Loans
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link href="/careers" className="hover:text-green-700 transition-colors">
              Careers
            </Link>
          </li>

          <li>
            <Link
              href="/apply"
              className="bg-green-800 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors text-base"
            >
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center text-green-900"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <>
          {/* Backdrop Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={() => setMenuOpen(false)}
          ></div>

          {/* Sidebar Menu */}
          <div
            className={`fixed top-0 left-0 h-full w-[85%] max-w-sm bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${menuOpen ? "translate-x-0" : "-translate-x-full"
              }`}
          >
            {/* Sidebar Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <Link href="/" className="flex items-center space-x-2" onClick={() => setMenuOpen(false)}>
                <Image
                  src="/23.jpg"
                  alt="Secure Edge"
                  width={60}
                  height={45}
                  className="object-contain"
                />
              </Link>
              <button
                onClick={() => setMenuOpen(false)}
                className="text-green-900 hover:text-green-700 p-2"
                aria-label="Close menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Sidebar Content */}
            <div className="overflow-y-auto h-[calc(100vh-80px)]">
              {/* Main Navigation Links */}
              <div className="py-4">
                <Link
                  href="/"
                  onClick={() => setMenuOpen(false)}
                  className="block px-6 py-3 text-green-900 font-bold text-lg hover:bg-green-50 hover:text-green-700 transition-colors border-b border-gray-100"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  onClick={() => setMenuOpen(false)}
                  className="block px-6 py-3 text-green-900 font-bold text-lg hover:bg-green-50 hover:text-green-700 transition-colors border-b border-gray-100"
                >
                  About Us
                </Link>

                {/* Apply Loan Dropdown */}
                <div
                  className="border-b border-gray-100 relative"
                  onMouseLeave={() => setLoanOpen(false)}
                >
                  <button
                    type="button"
                    onClick={() => setLoanOpen(!loanOpen)}
                    onMouseEnter={() => setLoanOpen(true)}
                    className="w-full flex justify-between items-center px-6 py-3 text-green-900 font-bold text-lg hover:bg-green-50 hover:text-green-700 transition-colors focus:outline-none"
                  >
                    <SparklesText>Apply Loan</SparklesText>
                    <span className="text-green-700">{loanOpen ? "▴" : "▾"}</span>
                  </button>

                  {/* FIXED DROPDOWN — NO GAP WHEN CLOSED */}
                  <div
                    className={`bg-green-50 transition-all duration-300 overflow-hidden ${loanOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                      }`}
                  >
                    {[
                      ["Home Loan", "/loan/Homeloan"],
                      ["Mortgage Loan", "/loan/mortage"],
                      ["Personal Loan", "/loan/personal"],
                      ["Unsecured Business Loan", "/loan/unsecureloan"],
                      ["Working Capital", "/loan/workingcapital"],
                      ["Balance Transfer", "/loan/balancetransfer"],
                      ["Car Loans", "/loan/carloan"],
                    ].map(([label, href]) => (
                      <Link
                        key={href}
                        href={href}
                        onClick={() => {
                          setLoanOpen(false);
                          setMenuOpen(false);
                        }}
                        className="block px-10 py-2.5 text-green-900 text-base hover:bg-green-100 hover:text-green-700 transition-colors"
                      >
                        {label}
                      </Link>
                    ))}
                  </div>
                </div>

                <Link
                  href="/careers"
                  onClick={() => setMenuOpen(false)}
                  className="block px-6 py-3 text-green-900 font-bold text-lg hover:bg-green-50 hover:text-green-700 transition-colors border-b border-gray-100"
                >
                  Careers
                </Link>
              </div>

              {/* Contact Us Button */}
              <div className="px-6 py-4 border-t border-gray-200">
                <Link
                  href="/apply"
                  onClick={() => setMenuOpen(false)}
                  className="block w-full bg-green-800 text-white px-6 py-3 rounded-full text-center hover:bg-green-700 transition-colors font-bold text-lg"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
