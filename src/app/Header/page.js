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

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loanOpen, setLoanOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo-1.png"
            alt="Secure Edge"
            width={80}
            height={50}
            className="object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 items-center font-medium text-blue-600 uppercase text-lg font-sans	">
          <li>
            <Link href="/" className="hover:text-blue-400">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-blue-400">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/propertie" className="hover:text-blue-400">
              Properties
            </Link>
          </li>

          {/* Apply Loan Dropdown */}
          <li className="relative group">
            <button className="flex items-center hover:text-blue-400 cursor-pointer">
              Apply Loan <span className="ml-1">▾</span>
            </button>
            <ul className="absolute left-0 mt-2 w-56 bg-white border rounded-lg shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50">
              <li>
                <Link
                  href="/loan/Homeloan"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Home Loan
                </Link>
              </li>
              <li>
                <Link
                  href="/loan/mortage"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Mortgage Loan
                </Link>
              </li>
              <li>
                <Link
                  href="/loan/personal"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Personal Loan
                </Link>
              </li>
              <li>
                <Link
                  href="/loan/unsecureloan"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Unsecured Business Loan
                </Link>
              </li>
              <li>
                <Link
                  href="/loan/workingcapital"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Working Capital
                </Link>
              </li>
              <li>
                <Link
                  href="/loan/balancetransfer"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Balance Transfer
                </Link>
              </li>
              <li>
                <Link
                  href="/loan/carloan"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Car Loans
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link href="/careers" className="hover:text-blue-400">
              Careers
            </Link>
          </li>

          <li>
            <Link
              href="/apply"
              className="bg-blue-700 text-white px-6 py-2 rounded-full hover:bg-blue-800 transition text-sm"
            >
              Apply
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center text-blue-700"
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

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <Link
            href="/"
            className="block px-4 py-3 hover:bg-gray-100 text-blue-700 font-medium"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block px-4 py-3 hover:bg-gray-100 text-blue-700 font-medium"
          >
            About Us
          </Link>
          <Link
            href="/propertie"
            className="block px-4 py-3 hover:bg-gray-100 text-blue-700 font-medium"
          >
            Properties
          </Link>

          {/* Mobile Apply Loan Collapsible */}
          <div className="px-4 py-2">
            <button
              onClick={() => setLoanOpen(!loanOpen)}
              className="w-full flex justify-between items-center hover:text-blue-700 text-sm font-medium"
            >
              Apply Loan <span>{loanOpen ? "▴" : "▾"}</span>
            </button>
            {loanOpen && (
              <ul className="mt-2 pl-4 space-y-2">
                <li>
                  <Link
                    href="/loan/Homeloan"
                    className="block hover:text-blue-700"
                  >
                    Home Loan
                  </Link>
                </li>
                <li>
                  <Link
                    href="/loan/mortage"
                    className="block hover:text-blue-700"
                  >
                    Mortgage Loan
                  </Link>
                </li>
                <li>
                  <Link
                    href="/loan/personal"
                    className="block hover:text-blue-700"
                  >
                    Personal Loan
                  </Link>
                </li>
                <li>
                  <Link
                    href="/loan/unsecureloan"
                    className="block hover:text-blue-700"
                  >
                    Unsecured Business Loan
                  </Link>
                </li>
                <li>
                  <Link
                    href="/loan/workingcapital"
                    className="block hover:text-blue-700"
                  >
                    Working Capital
                  </Link>
                </li>
                <li>
                  <Link
                    href="/loan/balancetransfer"
                    className="block hover:text-blue-700"
                  >
                    Balance Transfer
                  </Link>
                </li>
                <li>
                  <Link
                    href="/loan/carloan"
                    className="block hover:text-blue-700"
                  >
                    Car Loans
                  </Link>
                </li>
              </ul>
            )}
          </div>

          <Link
            href="/career"
            className="block px-4 py-3 hover:bg-gray-100 text-blue-700 font-medium"
          >
            Careers
          </Link>
          <Link
            href="/contact"
            className="block bg-blue-700 text-white m-4 px-4 py-2 rounded-full text-center hover:bg-blue-800 transition text-sm"
          >
            Apply
          </Link>
        </div>
      )}
    </header>
  );
}
