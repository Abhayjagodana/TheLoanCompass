"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="pt-[110px] lg:pt-[130px] pb-[100px] lg:pb-[125px] bg-cover bg-center"
      style={{ backgroundImage: "url('/front/img/footer/footer-bg-2.png')" }}
    >
      {/* Top Section */}
      <div className="footer-top">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4">

            {/* Mission */}
            <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8 sm:mb-0 text-center sm:text-left">
              <div className="mb-6">
                <h4 className="mb-5 text-lg font-semibold">We're on a mission.</h4>
                <p className="text-gray-200">
                  Your go-to source for retail and business loans, empowering financial growth with trust, simplicity, and excellence.
                </p>
              </div>
              <div className="flex justify-center sm:justify-start space-x-3 mt-4">
                <a href="https://www.facebook.com/secureedgesolution/" className="text-white hover:text-blue-500"><i className="fab fa-facebook-f"></i></a>
                <a href="https://www.instagram.com/secureedgesolution.pvt.ltd/" className="text-white hover:text-pink-500"><i className="fab fa-instagram"></i></a>
                <a href="https://www.linkedin.com/company/secure-edge-solution-pvt-ltd/?originalSubdomain=in" className="text-white hover:text-blue-700"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>

            {/* Loan Links */}
            <div className="w-full sm:w-1/2 lg:w-1/2 lg:ml-4 px-4 mb-8 sm:mb-0 text-center sm:text-left">
              <div>
                <h5 className="text-lg font-semibold mb-4">Loan</h5>
                <ul className="grid grid-cols-2 gap-2 text-gray-200">
                  <li><Link href="https://secureedgesolution.com/loan/home-loan" className="hover:text-white">Home Loan</Link></li>
                  <li><Link href="https://secureedgesolution.com/loan/mortgage-loan" className="hover:text-white">Mortgage Loan</Link></li>
                  <li><Link href="https://secureedgesolution.com/loan/personal-loan" className="hover:text-white">Personal Loan</Link></li>
                  <li><Link href="https://secureedgesolution.com/loan/unsecured-business-loan" className="hover:text-white">Unsecured Business Loan</Link></li>
                  <li><Link href="https://secureedgesolution.com/loan/working-capital" className="hover:text-white">Working Capital</Link></li>
                  <li><Link href="https://secureedgesolution.com/loan/balance-transfer" className="hover:text-white">Balance Transfer</Link></li>
                  <li><Link href="https://secureedgesolution.com/loan/car-loans" className="hover:text-white">Car Loans</Link></li>
                </ul>
              </div>
            </div>

            {/* Company Links */}
            <div className="w-full sm:w-1/2 lg:w-1/4 px-4 text-center sm:text-left">
              <div>
                <h5 className="text-lg font-semibold mb-4">Company</h5>
                <ul className="space-y-2 text-gray-200">
                  <li><Link href="https://secureedgesolution.com/about" className="hover:text-white">About Us</Link></li>
                  <li><Link href="https://secureedgesolution.com/properties" className="hover:text-white">Properties</Link></li>
                  <li><Link href="https://secureedgesolution.com/career" className="hover:text-white">Careers</Link></li>
                  <li><Link href="https://secureedgesolution.com/privacy-policy" className="hover:text-white">Privacy policy</Link></li>
                  <li><Link href="https://secureedgesolution.com/terms/conditions" className="hover:text-white">Terms & Conditions</Link></li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="pt-12">
        <div className="container mx-auto text-center text-gray-400 text-sm">
          <p>
            Copyright© Secure Edge Pvt Ltd. 2025. <br className="sm:hidden" />
            Designed by <a href="https://shopnoecommerce.com/" className="text-white hover:underline">Shopno Ecommerce Pvt Ltd.</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
