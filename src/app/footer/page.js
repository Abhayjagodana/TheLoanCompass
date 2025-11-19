// "use client";

// import Link from "next/link";
// import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

// export default function Footer() {
//   return (
//     <footer className="bg-black text-white py-16 ">
//       <div className="container mx-auto px-4">
//         {/* Top Section */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//           {/* Column 1 */}
//           <div>
//             <h4 className="text-xl font-semibold mb-4">We're on a mission.</h4>
//             <p className="mb-6 text-gray-300">
//               Your go-to source for retail and business loans, empowering
//               financial growth with trust, simplicity, and excellence.
//             </p>
//             <div className="flex space-x-4">
//               <Link href="https://www.facebook.com/secureedgesolution/">
//                 <FaFacebookF className="text-white hover:text-blue-500 text-lg" />
//               </Link>
//               <Link href="https://www.instagram.com/secureedgesolution.pvt.ltd/">
//                 <FaInstagram className="text-white hover:text-pink-500 text-lg" />
//               </Link>
//               <Link href="https://www.linkedin.com/company/secure-edge-solution-pvt-ltd/?originalSubdomain=in">
//                 <FaLinkedinIn className="text-white hover:text-blue-400 text-lg" />
//               </Link>
//             </div>
//           </div>

//           {/* Column 2 */}
//           <div>
//             <h5 className="text-lg font-semibold mb-4">Loan</h5>
//             <ul className="grid grid-cols-2 gap-3 text-gray-300">
//               <li>
//                 <Link href="/loan/home-loan" className="hover:text-white">
//                   Home Loan
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/loan/mortgage-loan" className="hover:text-white">
//                   Mortgage Loan
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/loan/personal-loan" className="hover:text-white">
//                   Personal Loan
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/loan/unsecured-business-loan"
//                   className="hover:text-white"
//                 >
//                   Unsecured Business Loan
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/loan/working-capital" className="hover:text-white">
//                   Working Capital
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/loan/balance-transfer"
//                   className="hover:text-white"
//                 >
//                   Balance Transfer
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/loan/car-loans" className="hover:text-white">
//                   Car Loans
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Column 3 */}
//           <div>
//             <h5 className="text-lg font-semibold mb-4">Company</h5>
//             <ul className="space-y-2 text-gray-300">
//               <li>
//                 <Link href="/about" className="hover:text-white">
//                   About Us
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/properties" className="hover:text-white">
//                   Properties
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/career" className="hover:text-white">
//                   Careers
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/privacy-policy" className="hover:text-white">
//                   Privacy Policy
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/terms/conditions" className="hover:text-white">
//                   Terms &amp; Conditions
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Bottom Section */}
//         <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
//           <p>
//             Copyright © Secure TheLoan Compass Pvt Ltd. 2025.
//             <br className="md:hidden" /> Designed by{" "}
//             <Link
//               href="https://shopnoecommerce.com/"
//               className="text-blue-400 hover:underline"
//             >
//               Abhay jagodana.
//             </Link>
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }
"use client";

import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 py-16 border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Animated content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Top Section - 4 Equal Columns with Consistent Gaps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8">
            {/* Column 1 - About */}
            <motion.div 
              className="flex flex-col"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <h4 className="text-2xl font-bold mb-4 text-green-900 bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
                Empowering Growth
              </h4>
              <p className="text-gray-600 leading-relaxed mb-4">
                Your go-to source for retail and business loans, simplifying finance and fostering growth.
              </p>
            </motion.div>

            {/* Column 2 - Loans */}
            <motion.div 
              className="flex flex-col"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <h5 className="text-lg font-semibold mb-4 text-green-900 border-b border-green-500 pb-2 inline-block">
                Loans
              </h5>
              <ul className="grid grid-cols-1 gap-2.5 text-gray-600">
                <li>
                  <Link 
                    href="/loan/Homeloan" 
                    className="hover:text-blue-600 transition-all duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-blue-600 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    Home Loan
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/loan/mortage" 
                    className="hover:text-blue-600 transition-all duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-blue-600 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    Mortgage Loan
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/loan/personal" 
                    className="hover:text-blue-600 transition-all duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-blue-600 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    Personal Loan
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/loan/unsecureloan" 
                    className="hover:text-blue-600 transition-all duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-blue-600 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    Unsecured Business Loan
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/loan/workingcapital" 
                    className="hover:text-blue-600 transition-all duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-blue-600 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    Working Capital
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/loan/balancetransfer" 
                    className="hover:text-blue-600 transition-all duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-blue-600 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    Balance Transfer
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/loan/carloan" 
                    className="hover:text-blue-600 transition-all duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-blue-600 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    Car Loans
                  </Link>
                </li>
              </ul>
            </motion.div>

            {/* Column 3 - Company */}
            <motion.div 
              className="flex flex-col"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <h5 className="text-lg font-semibold mb-4 text-gray-900 border-b border-green-500 pb-2 inline-block">
                Company
              </h5>
              <ul className="space-y-2.5 text-gray-600">
                <li>
                  <Link 
                    href="/about" 
                    className="hover:text-blue-600 transition-all duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-blue-600 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/careers" 
                    className="hover:text-blue-600 transition-all duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-blue-600 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    Careers
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/privacy-police" 
                    className="hover:text-blue-600 transition-all duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-blue-600 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/Tems&condistion" 
                    className="hover:text-blue-600 transition-all duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-blue-600 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </motion.div>

            {/* Column 4 - Social */}
            <motion.div 
              className="flex flex-col"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <h5 className="text-lg font-semibold mb-4 text-gray-900 border-b border-green-500 pb-2 inline-block">
                Follow Us
              </h5>
              <div className="flex items-center gap-4 flex-wrap">
                <motion.div whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }}>
                  <Link
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 transition-all duration-300 my-32"
                    aria-label="Facebook"
                  >
                    <FaFacebookF className="text-2xl" />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.2, rotate: -5 }} whileTap={{ scale: 0.9 }}>
                  <Link
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-pink-600 transition-all duration-300"
                    aria-label="Instagram"
                  >
                    <FaInstagram className="text-2xl" />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }}>
                  <Link
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 transition-all duration-300"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedinIn className="text-2xl" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="text-center text-gray-500 text-sm">
              <p>
                © <span className="font-semibold text-green-900">The Loan Compass Pvt Ltd.</span> 2025.
                <br className="sm:hidden" />
                <span className="hidden sm:inline"> </span>
                Develop by{' '}
                <Link
                  href="#"
                  className="text-blue-600 hover:text-blue-700 hover:underline transition-all duration-300 font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Abhay Jagodana
                </Link>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

