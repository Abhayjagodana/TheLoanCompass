"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [loanOpen, setLoanOpen] = useState(false);

    return (
        <header className="bg-white shadow-md sticky top-0 z-50 font-sans">
            <div className="container mx-auto flex items-center justify-between px-4 py-3">
                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <Image
                        src="/Logo.webp"
                        alt="Secure Edge"
                        width={180}
                        height={50}
                        className="object-contain"
                    />
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-8 items-center font-medium text-blue-900 uppercase text-lg font-sans">
                    <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
                    <li><Link href="/about" className="hover:text-blue-600">About Us</Link></li>
                    <li><Link href="/properties" className="hover:text-blue-600">Properties</Link></li>

                    {/* Apply Loan Dropdown */}
                    <li className="relative group">
                        <button className="flex items-center hover:text-blue-600">
                            Apply Loan <span className="ml-1">▾</span>
                        </button>
                        <ul className="absolute left-0 mt-2 w-56 bg-white border rounded-lg shadow-lg opacity-0 visible group-hover:opacity-100 group-hover:visible transition-opacity text-sm font-sans">
                            <li><Link href="/loan/home-loan" className="block px-4 py-2 hover:bg-gray-100">Home Loan</Link></li>
                            <li><Link href="/loan/mortgage-loan" className="block px-4 py-2 hover:bg-gray-100">Mortgage Loan</Link></li>
                            <li><Link href="/loan/personal-loan" className="block px-4 py-2 hover:bg-gray-100">Personal Loan</Link></li>
                            <li><Link href="/loan/unsecured-business-loan" className="block px-4 py-2 hover:bg-gray-100">Unsecured Business Loan</Link></li>
                            <li><Link href="/loan/working-capital" className="block px-4 py-2 hover:bg-gray-100">Working Capital</Link></li>
                            <li><Link href="/loan/balance-transfer" className="block px-4 py-2 hover:bg-gray-100">Balance Transfer</Link></li>
                            <li><Link href="/loan/car-loans" className="block px-4 py-2 hover:bg-gray-100">Car Loans</Link></li>
                        </ul>
                    </li>

                    <li><Link href="/career" className="hover:text-blue-600">Careers</Link></li>

                    {/* Apply Button */}
                    <li>
                        <Link
                            href="/contact"
                            className="bg-blue-700 text-white px-6 py-2 rounded-full hover:bg-blue-800 transition text-sm"
                        >
                            Apply
                        </Link>
                    </li>
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden flex items-center"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <svg
                        className="w-7 h-7 text-blue-700"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        {menuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-white border-t shadow-lg font-bold text-blue uppercase text-lg font-sans">
                    <Link href="/" className="block px-4 py-2 hover:bg-gray-100 font-bold ">Home</Link>
                    <Link href="/about" className="block px-4 py-2 hover:bg-gray-100">About Us</Link>
                    <Link href="/properties" className="block px-4 py-2 hover:bg-gray-100">Properties</Link>

                    {/* Apply Loan Collapsible */}
                    <div className="px-4 py-2">
                        <button
                            onClick={() => setLoanOpen(!loanOpen)}
                            className="w-full flex justify-between items-center hover:text-blue-800 text-sm font-sans"
                        >
                            Apply Loan
                            <span>{loanOpen ? "▴" : "▾"}</span>
                        </button>
                        {loanOpen && (
                            <ul className="mt-2 pl-4 space-y-2">
                                <li><Link href="/loan/home-loan" className="block hover:text-blue-800">Home Loan</Link></li>
                                <li><Link href="/loan/mortgage-loan" className="block hover:text-blue-800">Mortgage Loan</Link></li>
                                <li><Link href="/loan/personal-loan" className="block hover:text-blue-800">Personal Loan</Link></li>
                                <li><Link href="/loan/unsecured-business-loan" className="block hover:text-blue-800">Unsecured Business Loan</Link></li>
                                <li><Link href="/loan/working-capital" className="block hover:text-blue-800">Working Capital</Link></li>
                                <li><Link href="/loan/balance-transfer" className="block hover:text-blue-800">Balance Transfer</Link></li>
                                <li><Link href="/loan/car-loans" className="block hover:text-blue-800">Car Loans</Link></li>
                            </ul>
                        )}
                    </div>

                    <Link href="/career" className="block px-4 py-2 hover:bg-gray-100">Careers</Link>
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
