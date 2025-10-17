// "use client";

// import Link from "next/link";

// export default function PrivacyPolicy() {
//     return (
//         <div>
//             <section className="relative w-full bg-gradient-to-r from-green-900 to-green-800 min-h-[28vh] flex items-center justify-center my-24 animate-slide-right delay-300">
//                 <div className="absolute inset-0 bg-black/10"></div>
//                 <div className="relative z-10 text-center px-4">
//                     <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
//                         Privacy Policy


//                     </h1>
//                 </div>
//                 <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-green-900 to-transparent"></div>
//                 <style jsx>{`
//     @keyframes slideRight {
//       0% {
//         transform: translateX(-50px);
//         opacity: 0;
//       }
//       100% {
//         transform: translateX(0);
//         opacity: 1;
//       }
//     }
//     .animate-slide-right {
//       animation: slideRight 1s ease-out forwards;
//     }
//     .delay-300 {
//       animation-delay: 0.3s;
//     }
//     .delay-700 {
//       animation-delay: 0.7s;
//     }
//   `}</style>
//             </section>
//             <section className="bg-white pt-4 pb-32">
//                 <div className="container mx-auto px-4">
//                     <div className="description-widget">
//                         <div className="flex flex-col">
//                             <div className="desc-text lg:pl-10 text-gray-700 leading-relaxed">
//                                 <p className="mb-6">
//                                     <strong className="text-green-900 text-lg">1. Introduction</strong>
//                                     <br />
//                                     The Loan Compass ("Company," "we," "our," or "us") values your
//                                     privacy and is committed to protecting your personal information.
//                                     This Privacy Policy outlines how we collect, use, and safeguard
//                                     the information you provide when applying for a bank loan through
//                                     our platform.
//                                 </p>

//                                 <p className="mb-6">
//                                     <strong className="text-green-900 text-lg">2. Information We Collect</strong>
//                                     <br />
//                                     When you apply for a bank loan through The Loan Compass, we may
//                                     collect the following types of information:
//                                 </p>

//                                 <ul className="list-disc list-inside space-y-2 mb-6">
//                                     <li>
//                                         <strong>Personal Information:</strong> Name, address, date of birth,
//                                         phone number, email address, government-issued identification
//                                         details.
//                                     </li>
//                                     <li>
//                                         <strong>Financial Information:</strong> Income details, credit
//                                         score, bank account details, employment status, loan history.
//                                     </li>
//                                     <li>
//                                         <strong>Other Information:</strong> IP address, browsing behavior,
//                                         and other relevant data for security and analytics.
//                                     </li>
//                                 </ul>

//                                 <p className="mb-6">
//                                     <strong className="text-green-900 text-lg">3. How We Use Your Information</strong>
//                                     <br />
//                                     We use the collected information for the following purposes:
//                                 </p>

//                                 <ul className="list-disc list-inside space-y-2 mb-6">
//                                     <li>To process and evaluate your loan application.</li>
//                                     <li>To verify your identity and financial standing.</li>
//                                     <li>To communicate loan-related updates and customer support.</li>
//                                     <li>To comply with legal and regulatory requirements.</li>
//                                     <li>To improve our services and user experience.</li>
//                                 </ul>

//                                 <p className="mb-6">
//                                     <strong className="text-green-900 text-lg">4. Information Sharing and Disclosure</strong>
//                                     <br />
//                                     We do not sell or rent your personal information. However, we may
//                                     share your data with:
//                                 </p>

//                                 <ul className="list-disc list-inside space-y-2 mb-6">
//                                     <li>
//                                         <strong>Financial Institutions & Lenders:</strong> To facilitate
//                                         loan approval and processing.
//                                     </li>
//                                     <li>
//                                         <strong>Regulatory Authorities:</strong> If required by law or
//                                         legal processes.
//                                     </li>
//                                     <li>
//                                         <strong>Third-Party Service Providers:</strong> For fraud
//                                         prevention, credit analysis, or customer support.
//                                     </li>
//                                 </ul>

//                                 <p className="mb-6">
//                                     <strong className="text-green-900 text-lg">5. Data Security</strong>
//                                     <br />
//                                     We implement industry-standard security measures to protect your
//                                     personal and financial data from unauthorized access, disclosure,
//                                     or loss. However, no method of transmission over the internet is
//                                     entirely secure.
//                                 </p>

//                                 <p className="mb-6">
//                                     <strong className="text-green-900 text-lg">6. Your Rights & Choices</strong>
//                                     <br />
//                                     You have the right to:
//                                 </p>

//                                 <ul className="list-disc list-inside space-y-2 mb-6">
//                                     <li>Access, update, or correct your personal data.</li>
//                                     <li>
//                                         Withdraw consent for data processing (this may affect loan
//                                         processing).
//                                     </li>
//                                     <li>
//                                         Request deletion of your personal data, subject to legal
//                                         obligations.
//                                     </li>
//                                 </ul>

//                                 <p className="mb-6">
//                                     <strong className="text-green-900 text-lg">7. Cookies & Tracking Technologies</strong>
//                                     <br />
//                                     We use cookies and similar technologies to improve our website
//                                     functionality and enhance user experience. You can manage cookie
//                                     preferences through your browser settings.
//                                 </p>

//                                 <p className="mb-6">
//                                     <strong className="text-green-900 text-lg">8. Changes to This Privacy Policy</strong>
//                                     <br />
//                                     We may update this Privacy Policy from time to time. Any changes
//                                     will be posted on this page with an updated effective date.
//                                 </p>

//                                 <p className="mb-6">
//                                     <strong className="text-green-900 text-lg">9. Contact Us</strong>
//                                     <br />
//                                     If you have any questions regarding this Privacy Policy or your
//                                     personal data, please contact us at:
//                                 </p>

//                                 <p>
//                                     <strong>The Loan Compass</strong>
//                                     <br />
//                                     Website:{" "}
//                                     <a
//                                         href="https://the-loan-compass.vercel.app/"
//                                         className="text-green-900 underline hover:text-green-700"
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                     >
//                                         the-loan-compass.vercel.app
//                                     </a>
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// }
"use client";

import Link from "next/link";
import Head from "next/head";
import { motion } from "framer-motion";

function PrivacyPolicy() {
  const slideInLeft = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <>
      {/* ✅ Metadata for SEO */}
      <Head>
        <title>Privacy Policy | The Loan Compass</title>
        <meta
          name="description"
          content="Learn how The Loan Compass collects, uses, and protects your personal and financial information when applying for bank loans. Your privacy matters to us."
        />
      </Head>

      <div>
        {/* Banner Section */}
        <section className="relative w-full bg-gradient-to-r from-green-900 to-green-800 min-h-[28vh] flex items-center justify-center my-24">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10 text-center px-4">
            <motion.h1
              variants={slideInLeft}
              initial="hidden"
              animate="visible"
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg"
            >
              Privacy Policy
            </motion.h1>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-green-900 to-transparent"></div>
        </section>

        {/* Content Section */}
        <section className="bg-white pt-4 pb-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 mx-4 sm:mx-6 lg:mx-8 my-[-32]">
            <div className="description-widget">
              <div className="flex flex-col">
                <motion.div
                  variants={slideInLeft}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  className="desc-text lg:pl-10 text-gray-700 leading-relaxed space-y-6"
                >
                  <p>
                    <strong className="text-green-900 text-lg">1. Introduction</strong>
                    <br />
                    The Loan Compass (&quot;Company,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) values your privacy and is committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard the information you provide when applying for a bank loan through our platform.
                  </p>

                  <p>
                    <strong className="text-green-900 text-lg">2. Information We Collect</strong>
                    <br />
                    When you apply for a bank loan through The Loan Compass, we may collect the following types of information:
                  </p>

                  <ul className="list-disc list-inside space-y-2">
                    <li><strong>Personal Information:</strong> Name, address, date of birth, phone number, email address, and government-issued identification details.</li>
                    <li><strong>Financial Information:</strong> Income details, credit score, bank account details, employment status, and loan history.</li>
                    <li><strong>Other Information:</strong> IP address, browsing behavior, and other relevant data for security and analytics.</li>
                  </ul>

                  <p>
                    <strong className="text-green-900 text-lg">3. How We Use Your Information</strong>
                    <br />
                    We use the collected information for the following purposes:
                  </p>

                  <ul className="list-disc list-inside space-y-2">
                    <li>To process and evaluate your loan application.</li>
                    <li>To verify your identity and financial standing.</li>
                    <li>To communicate loan-related updates and support.</li>
                    <li>To comply with legal and regulatory requirements.</li>
                    <li>To improve our services and user experience.</li>
                  </ul>

                  <p>
                    <strong className="text-green-900 text-lg">4. Information Sharing and Disclosure</strong>
                    <br />
                    We do not sell or rent your personal information. However, we may share your data with:
                  </p>

                  <ul className="list-disc list-inside space-y-2">
                    <li><strong>Financial Institutions &amp; Lenders:</strong> To facilitate loan approval and processing.</li>
                    <li><strong>Regulatory Authorities:</strong> If required by law or legal processes.</li>
                    <li><strong>Third-Party Service Providers:</strong> For fraud prevention, credit analysis, or customer support.</li>
                  </ul>

                  <p>
                    <strong className="text-green-900 text-lg">5. Data Security</strong>
                    <br />
                    We implement industry-standard security measures to protect your personal and financial data from unauthorized access, disclosure, or loss. However, no method of transmission over the internet is entirely secure.
                  </p>

                  <p>
                    <strong className="text-green-900 text-lg">6. Your Rights &amp; Choices</strong>
                    <br />
                    You have the right to:
                  </p>

                  <ul className="list-disc list-inside space-y-2">
                    <li>Access, update, or correct your personal data.</li>
                    <li>Withdraw consent for data processing (this may affect loan processing).</li>
                    <li>Request deletion of your personal data, subject to legal obligations.</li>
                  </ul>

                  <p>
                    <strong className="text-green-900 text-lg">7. Cookies &amp; Tracking Technologies</strong>
                    <br />
                    We use cookies and similar technologies to improve our website functionality and enhance user experience. You can manage cookie preferences through your browser settings.
                  </p>

                  <p>
                    <strong className="text-green-900 text-lg">8. Changes to This Privacy Policy</strong>
                    <br />
                    We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.
                  </p>

                  <p>
                    <strong className="text-green-900 text-lg">9. Contact Us</strong>
                    <br />
                    If you have any questions regarding this Privacy Policy or your personal data, please contact us at:
                  </p>

                  <p>
                    <strong className="text-green-900">The Loan Compass</strong>
                    <br />
                    Website:{" "}
                    <a
                      href="https://the-loan-compass.vercel.app/"
                      className="text-green-900 underline hover:text-green-700"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      the-loan-compass.vercel.app
                    </a>
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default PrivacyPolicy;
