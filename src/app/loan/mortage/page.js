// "use client";

// import Image from "next/image"; // ✅ Correct import
// import { Percent, Calendar, Zap, FileText, Building2 } from "lucide-react";

// export default function MortgageLoanSection() {
//   return (
//     <div>
//       <section className="relative w-full bg-gradient-to-r from-green-900 to-green-900 min-h-[25vh] flex items-center justify-center my-24 animate-slide-right delay-300">
//         <div className="absolute inset-0 bg-black/10"></div>
//         <div className="relative z-10 text-center px-4">
//           <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
//             Mortgage Loan

//           </h1>
//         </div>
//         <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-green-900 to-transparent"></div>
//         <style jsx>{`
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
//       </section>
//       <section className="py-[-80] my-[50] animate-slide-right delay-300">
//   <div className="container mx-auto px-4 sm:px-6 lg:px-8 mx-4 sm:mx-6 lg:mx-8 flex flex-col lg:flex-row items-center lg:items-start gap-8">
//     {/* Left Image */}
//     <div className="lg:w-1/3 w-full">
//       <div className="services-img">
//         <Image
//           src="https://media.istockphoto.com/id/1409298953/photo/real-estate-agents-shake-hands-after-the-signing-of-the-contract-agreement-is-complete.webp?a=1&b=1&s=612x612&w=0&k=20&c=IlUK1X_LKI-HU8APW7XbKHiFx0B122NKETS9prbQYGE="
//           alt="Service Image"
//           width={500}
//           height={700}
//           className="w-full h-auto"
//         />
//       </div>
//     </div>

//     {/* Right Content */}
//     <div className="lg:w-2/3 w-full flex flex-col gap-4">
//       <button className="text-green-900 text-start font-bold px-4 py-1 mb-2">
//         Mortgage Loan
//       </button>

//       <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
//         🏢 Get the Best Property Loan with Easy Approvals! 📜
//       </h3>

//       <div className="text-gray-500 space-y-3">
//         <p>
//           Looking for a <strong>property loan</strong> to <strong>buy, expand, or invest in real estate</strong>? We offer <strong>customized loan <br /> solutions</strong> with <strong>low interest rates</strong>, <strong>flexible repayment options</strong>, and <strong>quick approvals</strong> to help you <br />achieve your property goals without financial stress.
//         </p>

//         <p className="text-green-900">
//           🏠 <strong>Why Choose Our Property Loans?</strong>
//         </p>

//         <ul className="list-none space-y-3">
//           <li className="flex items-start gap-2">
//             <Percent className="w-5 h-5 text-green-700 mt-1" />
//             <span>
//               <strong>Low Interest Rates</strong> – Affordable EMIs to fit your budget
//             </span>
//           </li>

//           <li className="flex items-start gap-2">
//             <Calendar className="w-5 h-5 text-green-700 mt-1" />
//             <span>
//               <strong>Flexible Tenure Options</strong> – Choose repayment terms as per your convenience
//             </span>
//           </li>

//           <li className="flex items-start gap-2">
//             <Zap className="w-5 h-5 text-green-700 mt-1" />
//             <span>
//               <strong>Quick Approvals</strong> – Fast processing for hassle-free disbursal
//             </span>
//           </li>

//           <li className="flex items-start gap-2">
//             <FileText className="w-5 h-5 text-green-700 mt-1" />
//             <span>
//               <strong>Minimal Documentation</strong> – Simple and easy paperwork to save time
//             </span>
//           </li>

//           <li className="flex items-start gap-2">
//             <Building2 className="w-5 h-5 text-green-700 mt-1" />
//             <span>
//               <strong>Loans for All Needs</strong> – Buy a property, construct, renovate, or expand
//             </span>
//           </li>
//         </ul>

//         <p>
//           Whether you’re a <strong>business owner</strong>, an <strong>investor</strong>, or looking for a <strong>loan against property</strong>, we provide expert assistance to help you get the best deal.
//         </p>

//         <p>
//           🏡 <strong>Turn your property dreams into reality!</strong> Apply now and take the first step towards financial growth! 🔑
//         </p>
//       </div>

//       <a
//         href="/apply"
//         className="inline-block bg-green-900 text-white w-32 text-center rounded-full px-6 py-2 mt-4 hover:bg-green-700 transition"
//       >
//         Apply
//       </a>
//     </div>
//   </div>

//   <style jsx>{`
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
// </section>

//     </div>
//   );
// }
"use client";

import Image from "next/image";
import { Percent, Calendar, Zap, FileText, Building2 } from "lucide-react";
import { motion } from "framer-motion";

export default function MortgageLoanSection() {
  // Animation for the entire section
  const slideRight = {
    hidden: { x: -100, opacity: 0 },
    show: { x: 0, opacity: 1, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <motion.div
      className="my-24"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={slideRight}
    >
      {/* Header */}
      <section className="relative w-full bg-gradient-to-r from-green-900 to-green-900 min-h-[25vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
            Mortgage Loan
          </h1>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-green-900 to-transparent"></div>
      </section>

      {/* Content */}
      <section className="py-10 my-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center lg:items-start gap-8">
          {/* Left Image */}
          <div className="lg:w-1/3 w-full">
            <Image
              src="https://media.istockphoto.com/id/1409298953/photo/real-estate-agents-shake-hands-after-the-signing-of-the-contract-agreement-is-complete.webp?a=1&b=1&s=612x612&w=0&k=20&c=IlUK1X_LKI-HU8APW7XbKHiFx0B122NKETS9prbQYGE="
              alt="Service Image"
              width={500}
              height={700}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Right Content */}
          <div className="lg:w-2/3 w-full flex flex-col gap-4">
            <button className="text-green-900 text-start font-bold px-4 py-1 mb-2">
              Mortgage Loan
            </button>

            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              🏢 Get the Best Property Loan with Easy Approvals! 📜
            </h3>

            <div className="text-gray-500 dark:text-gray-400 space-y-3">
              <p>
                Looking for a <strong>property loan</strong> to buy, expand, or invest in real estate? We offer <strong>customized loan solutions</strong> with <strong>low interest rates</strong>, <strong>flexible repayment options</strong>, and <strong>quick approvals</strong> to help you achieve your property goals without financial stress.
              </p>

              <p className="text-green-900">
                🏠 <strong>Why Choose Our Property Loans?</strong>
              </p>

              <ul className="list-none space-y-3">
                <li className="flex items-start gap-2">
                  <Percent className="w-5 h-5 text-green-700 mt-1" />
                  <span><strong>Low Interest Rates</strong> – Affordable EMIs to fit your budget</span>
                </li>

                <li className="flex items-start gap-2">
                  <Calendar className="w-5 h-5 text-green-700 mt-1" />
                  <span><strong>Flexible Tenure Options</strong> – Choose repayment terms as per your convenience</span>
                </li>

                <li className="flex items-start gap-2">
                  <Zap className="w-5 h-5 text-green-700 mt-1" />
                  <span><strong>Quick Approvals</strong> – Fast processing for hassle-free disbursal</span>
                </li>

                <li className="flex items-start gap-2">
                  <FileText className="w-5 h-5 text-green-700 mt-1" />
                  <span><strong>Minimal Documentation</strong> – Simple and easy paperwork to save time</span>
                </li>

                <li className="flex items-start gap-2">
                  <Building2 className="w-5 h-5 text-green-700 mt-1" />
                  <span><strong>Loans for All Needs</strong> – Buy a property, construct, renovate, or expand</span>
                </li>
              </ul>

              <p>
                Whether you’re a <strong>business owner</strong>, an <strong>investor</strong>, or looking for a <strong>loan against property</strong>, we provide expert assistance to help you get the best deal.
              </p>

              <p>
                🏡 <strong>Turn your property dreams into reality!</strong> Apply now and take the first step towards financial growth! 🔑
              </p>
            </div>

            <a
              href="/apply"
              className="inline-block bg-green-900 text-white w-32 text-center rounded-full px-6 py-2 mt-4 hover:bg-green-700 transition"
            >
              Apply
            </a>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
