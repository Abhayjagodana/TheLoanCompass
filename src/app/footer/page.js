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

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-16  animate-slide-right delay-300">
      
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center md:text-left">
          {/* Column 1 */}
          <div>
            <h4 className="text-xl font-semibold mb-4">We're on a mission.</h4>
            <p className="mb-6 text-gray-300 leading-relaxed">
              Your go-to source for retail and business loans, empowering
              financial growth with trust, simplicity, and excellence.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <Link
                href="https://www.facebook.com/secureedgesolution/"
                target="_blank"
              >
                <FaFacebookF className="text-white hover:text-blue-500 text-lg transition-colors duration-300" />
              </Link>
              <Link
                href="https://www.instagram.com/secureedgesolution.pvt.ltd/"
                target="_blank"
              >
                <FaInstagram className="text-white hover:text-pink-500 text-lg transition-colors duration-300" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/secure-edge-solution-pvt-ltd/?originalSubdomain=in"
                target="_blank"
              >
                <FaLinkedinIn className="text-white hover:text-blue-400 text-lg transition-colors duration-300" />
              </Link>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h5 className="text-lg font-semibold mb-4">Loan</h5>
            <ul className="grid grid-cols-2 gap-3 text-gray-300">
              <li>
                <Link href="/loan/home-loan" className="hover:text-white">
                  Home Loan
                </Link>
              </li>
              <li>
                <Link href="/loan/mortgage-loan" className="hover:text-white">
                  Mortgage Loan
                </Link>
              </li>
              <li>
                <Link href="/loan/personal-loan" className="hover:text-white">
                  Personal Loan
                </Link>
              </li>
              <li>
                <Link
                  href="/loan/unsecured-business-loan"
                  className="hover:text-white"
                >
                  Unsecured Business Loan
                </Link>
              </li>
              <li>
                <Link href="/loan/working-capital" className="hover:text-white">
                  Working Capital
                </Link>
              </li>
              <li>
                <Link
                  href="/loan/balance-transfer"
                  className="hover:text-white"
                >
                  Balance Transfer
                </Link>
              </li>
              <li>
                <Link href="/loan/car-loans" className="hover:text-white">
                  Car Loans
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h5 className="text-lg font-semibold mb-4">Company</h5>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/about" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/properties" className="hover:text-white">
                  Properties
                </Link>
              </li>
              <li>
                <Link href="/career" className="hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms/conditions" className="hover:text-white">
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
          <p>
            Copyright © Secure TheLoan Compass Pvt Ltd. 2025.
            <br className="sm:hidden" /> Designed by{" "}
            <Link
              href="https://shopnoecommerce.com/"
              className="text-blue-400 hover:underline"
            >
              Abhay Jagodana
            </Link>
          </p>
        </div>
      </div>
       <style jsx>{`
    @keyframes slideRight {
      0% {
        transform: translateX(-50px);
        opacity: 0;
      }
      100% {
        transform: translateX(0);
        opacity: 1;
      }
    }
    .animate-slide-right {
      animation: slideRight 1s ease-out forwards;
    }
    .delay-300 {
      animation-delay: 0.3s;
    }
    .delay-700 {
      animation-delay: 0.7s;
    }
  `}</style>
    </footer>
  );
}
