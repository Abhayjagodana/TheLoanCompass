// "use client";

// import Link from "next/link";

// export default function PrivacyPolicy() {
//     return (
//         <div>
//             <section className="relative w-full bg-gradient-to-r from-green-900 to-green-900 min-h-[28vh] flex items-center justify-center my-24 animate-slide-right delay-300">
//                 <div className="absolute inset-0 bg-black/10"></div>
//                 <div className="relative z-10 text-center px-4">
//                     <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
//                         Terms & Conditions
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
//              <section className="bg-white pt-24 pb-36 my-[-120]">
//         <div className="container mx-auto px-4">
//           <div className="description-widget">
//             <div className="desc-text lg:pl-10 space-y-6 text-gray-800">

//               <div>
//                 <p>
//                   <strong>1. Acceptance of Terms</strong>
//                   <br />
//                   By accessing or using the services provided by Loan Compass ("Company," "we," "our," or "us"), you agree to comply with and be bound by these Terms & Conditions. If you do not agree with these terms, you must not use our services.
//                 </p>
//               </div>

//               <div>
//                 <p>
//                   <strong>2. Services Overview</strong>
//                   <br />
//                   Loan Compass provides a platform to apply for various financial products, including loans, credit services, and related support. We strive to provide accurate information but do not guarantee approval or specific outcomes.
//                 </p>
//               </div>

//               <div>
//                 <p>
//                   <strong>3. User Responsibilities</strong>
//                 </p>
//                 <ul className="list-disc list-inside space-y-2">
//                   <li>You must provide accurate and truthful information when applying for loans.</li>
//                   <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
//                   <li>You must comply with all applicable laws and regulations while using our services.</li>
//                   <li>Any fraudulent or illegal use of our platform may result in suspension or termination of access.</li>
//                 </ul>
//               </div>

//               <div>
//                 <p>
//                   <strong>4. Loan Applications</strong>
//                 </p>
//                 <ul className="list-disc list-inside space-y-2">
//                   <li>Submitting an application does not guarantee loan approval.</li>
//                   <li>Loan approval is subject to the policies of the respective financial institutions.</li>
//                   <li>We are not responsible for any decisions made by lenders.</li>
//                   <li>Applicants must ensure that all documentation is complete and accurate.</li>
//                 </ul>
//               </div>

//               <div>
//                 <p>
//                   <strong>5. Intellectual Property</strong>
//                   <br />
//                   All content, graphics, logos, and information provided on our platform are the property of Loan Compass or its partners and are protected by intellectual property laws. Users may not reproduce or distribute any content without prior written consent.
//                 </p>
//               </div>

//               <div>
//                 <p>
//                   <strong>6. Limitation of Liability</strong>
//                   <br />
//                   Loan Compass shall not be held liable for any direct, indirect, incidental, or consequential damages arising from the use or inability to use our services. We do not assume responsibility for errors, omissions, or third-party actions.
//                 </p>
//               </div>

//               <div>
//                 <p>
//                   <strong>7. Privacy and Data Use</strong>
//                   <br />
//                   Your use of our services is also governed by our Privacy Policy, which explains how we collect, store, and use your personal information. Please review our Privacy Policy for full details.
//                 </p>
//               </div>

//               <div>
//                 <p>
//                   <strong>8. Changes to Terms</strong>
//                   <br />
//                   We may update these Terms & Conditions from time to time. Any changes will be posted on this page with the effective date. Continued use of our services constitutes acceptance of updated terms.
//                 </p>
//               </div>

//               <div>
//                 <p>
//                   <strong>9. Governing Law</strong>
//                   <br />
//                   These Terms & Conditions are governed by and construed in accordance with the laws of India. Any disputes arising shall be subject to the exclusive jurisdiction of the courts in India.
//                 </p>
//               </div>

//               <div>
//                 <p>
//                   <strong>10. Contact Us</strong>
//                   <br />
//                   If you have questions regarding these Terms & Conditions, please contact us at:
//                 </p>
//                 <p>
//                   <strong>Loan Compass</strong>
//                   <br />
//                   Website:{" "}
//                   <Link
//                     href="https://the-loan-compass.vercel.app/"
//                     className="text-green-900 underline"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     the-loan-compass.vercel.app
//                   </Link>
//                 </p>
//               </div>

//             </div>
//           </div>
//         </div>
//       </section>
//         </div>
//     );
// }

"use client";

import Link from "next/link";
import { motion } from "framer-motion";

function TermsAndConditions() {
  // Animation variants
  const slideIn = {
    hidden: { x: -50, opacity: 0 },
    show: { x: 0, opacity: 1, transition: { duration: 1, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: { 
      opacity: 1, 
      transition: { staggerChildren: 0.2, ease: "easeOut" } 
    },
  };

  return (
    <div>
      {/* Banner Section */}
      <motion.section
        className="relative w-full bg-gradient-to-r from-green-900 to-green-900 min-h-[28vh] flex items-center justify-center my-24"
        initial="hidden"
        animate="show"
        variants={slideIn}
      >
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
            Terms &amp; Conditions
          </h1>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-green-900 to-transparent"></div>
      </motion.section>

      {/* Terms Content */}
      <motion.section
        className="bg-white pt-24 pb-36 my-[-120px]"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mx-4 sm:mx-6 lg:mx-8">
          <div className="description-widget">
            <motion.div className="desc-text lg:pl-10 space-y-6 text-gray-800">
              
              {[
                {
                  title: "1. Acceptance of Terms",
                  content: "By accessing or using the services provided by Loan Compass (\"Company,\" \"we,\" \"our,\" or \"us\"), you agree to comply with and be bound by these Terms & Conditions. If you do not agree with these terms, you must not use our services."
                },
                {
                  title: "2. Services Overview",
                  content: "Loan Compass provides a platform to apply for various financial products, including loans, credit services, and related support. We strive to provide accurate information but do not guarantee approval or specific outcomes."
                },
                {
                  title: "3. User Responsibilities",
                  list: [
                    "You must provide accurate and truthful information when applying for loans.",
                    "You are responsible for maintaining the confidentiality of your account credentials.",
                    "You must comply with all applicable laws and regulations while using our services.",
                    "Any fraudulent or illegal use of our platform may result in suspension or termination of access."
                  ]
                },
                {
                  title: "4. Loan Applications",
                  list: [
                    "Submitting an application does not guarantee loan approval.",
                    "Loan approval is subject to the policies of the respective financial institutions.",
                    "We are not responsible for any decisions made by lenders.",
                    "Applicants must ensure that all documentation is complete and accurate."
                  ]
                },
                {
                  title: "5. Intellectual Property",
                  content: "All content, graphics, logos, and information provided on our platform are the property of Loan Compass or its partners and are protected by intellectual property laws. Users may not reproduce or distribute any content without prior written consent."
                },
                {
                  title: "6. Limitation of Liability",
                  content: "Loan Compass shall not be held liable for any direct, indirect, incidental, or consequential damages arising from the use or inability to use our services. We do not assume responsibility for errors, omissions, or third-party actions."
                },
                {
                  title: "7. Privacy and Data Use",
                  content: "Your use of our services is also governed by our Privacy Policy, which explains how we collect, store, and use your personal information. Please review our Privacy Policy for full details."
                },
                {
                  title: "8. Changes to Terms",
                  content: "We may update these Terms & Conditions from time to time. Any changes will be posted on this page with the effective date. Continued use of our services constitutes acceptance of updated terms."
                },
                {
                  title: "9. Governing Law",
                  content: "These Terms & Conditions are governed by and construed in accordance with the laws of India. Any disputes arising shall be subject to the exclusive jurisdiction of the courts in India."
                },
                {
                  title: "10. Contact Us",
                  content: (
                    <>
                      If you have questions regarding these Terms & Conditions, please contact us at:
                      <br />
                      <strong className="text-green-900">Loan Compass</strong>
                      <br />
                      Website:{" "}
                      <Link
                        href="https://the-loan-compass.vercel.app/"
                        className="text-green-900 underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        the-loan-compass.vercel.app
                      </Link>
                    </>
                  )
                }
              ].map((section, idx) => (
                <motion.div
                  key={idx}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: idx * 0.2 }}
                >
                  <p>
                    <strong className="text-green-900">{section.title}</strong>
                  </p>
                  {section.content && <p>{section.content}</p>}
                  {section.list && (
                    <ul className="list-disc list-inside space-y-2">
                      {section.list.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              ))}
              
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

export default TermsAndConditions;
