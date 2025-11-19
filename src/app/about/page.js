// "use client";
// import Image from "next/image"; // ✅ Correct import


// export default function AboutBanner() {
//   return (
//     <div>


//       <section className="relative w-full bg-gradient-to-r from-green-900 to-green-900 min-h-[25vh] flex items-center justify-center mb-0 my-24  animate-slide-right delay-300">
//         <div className="absolute inset-0 bg-black opacity-10"></div>
//         <div className="container mx-auto px-4 relative z-10 text-center">
//           <h1 className="text-2xl md:text-4xl font-extrabold text-white drop-shadow-lg">
//             ABOUT US
//           </h1>
//         </div>
//         <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-green-900 to-transparent"></div>
//       </section>

//       {/* ✅ About Content */}
//       <section className="bg-white py-10 animate-slide-right delay-300">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex flex-col lg:flex-row lg:items-start gap-6">
//             {/* Left Box */}
//             <div className="lg:w-1/3 w-full flex justify-center lg:justify-end">
//               <div className="bg-green-800 p-5 sm:p-6 text-white rounded-lg text-right w-full sm:w-72 lg:w-80 flex items-center justify-end">
//                 <h2 className="text-base sm:text-xl lg:text-2xl font-semibold leading-snug whitespace-pre-line text-right">
//                   {`A journey that
// started with a
// belief to Be
// Different`}
//                 </h2>
//               </div>
//             </div>

//             {/* Right Text */}
//             <div className="lg:w-2/3 text-gray-700 font-sans font-normal leading-relaxed space-y-4">
//               <p>
//                 Welcome to theloancompass Pvt. Ltd., a pioneering venture co-founded by the highly experienced finance professional, Hiren Sejpal, boasting an impressive track record of over 25 years in the retail loan industry. Joining forces with the equally accomplished Mrs. Mona Hiren Sejpal, this dynamic duo envisioned a company dedicated to alleviating the challenges faced by individuals seeking loans, yet encountering difficulties in securing timely disbursements for their various financial needs, be it housing, personal, or business loans.
//               </p>
//               <p>
//                 At theloancompass, we understand the financial aspirations and challenges of our clients, and our mission is clear—to simplify the loan acquisition process and make it accessible to all. With our commitment to client convenience, we offer a unique door-step service that not only minimizes the hassle for our customers but also ensures a seamless experience from application to disbursal.
//               </p>
//               <p>
//                 Our comprehensive end-to-end service guarantees that clients receive unparalleled support throughout the entire loan journey. What sets TheLoanCompass apart is our unwavering dedication to providing this exceptional service without any additional charges, affirming our commitment to transparency and client satisfaction.
//               </p>
//               <p>
//                 Choose Secure TheLoanCompass Pvt. Ltd. for a reliable, efficient, and client-centric approach to securing your financial future. Experience the difference as we work tirelessly to ensure your loan requirements are not just met but exceeded, paving the way for your financial success.
//               </p>
//             </div>
//           </div>
//         </div>

//         <style jsx>{`
//           @keyframes slideRight {
//             0% {
//               transform: translateX(-50px);
//               opacity: 0;
//             }
//             100% {
//               transform: translateX(0);
//               opacity: 1;
//             }
//           }
//           .animate-slide-right {
//             animation: slideRight 1s ease-out forwards;
//           }
//           .delay-300 {
//             animation-delay: 0.3s;
//           }
//         `}</style>
//       </section>
//       {/* box for counter */}
//       <section className="bg-gray-100 py-24 animate-slide-right delay-300">
//         <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col items-center justify-center">
//           {/* First Row */}
//           <div className="flex flex-col lg:flex-row items-center justify-center gap-10 w-full">
//             {/* Left Side */}
//             <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
//               {/* 5000 Box */}
//               <div className="w-72 sm:w-80 h-48 bg-green-900 p-6 rounded-lg text-white flex flex-col items-center justify-center text-center shadow-md">
//                 <h1 className="text-4xl lg:text-5xl font-bold">5000</h1>
//                 <p className="mt-2 text-sm sm:text-base">
//                   Trusted partner for 5000+ Channel Partners
//                 </p>
//               </div>

//               {/* Image */}
//               <div className="flex justify-center">
//                 <Image
//                   src="https://media.istockphoto.com/id/1332358775/photo/young-couple-shaking-hands-deal-contract-real-estate-investment-business-agreement-agent.webp?a=1&b=1&s=612x612&w=0&k=20&c=gFtxy5dE4doeHAs_crzmgl-efeRUBLgJhRaO1J4-yxQ="
//                   alt="Statistics"
//                   width={612}
//                   height={300}
//                   className="object-cover rounded-lg h-48 w-72 sm:w-80 shadow-md"
//                 />
//               </div>
//             </div>

//             {/* Right Side */}
//             <div className="flex justify-center">
//               <div className="w-72 sm:w-80 h-48 bg-green-900 p-6 rounded-lg text-white flex flex-col items-center justify-center text-center shadow-md">
//                 <h1 className="text-4xl lg:text-5xl font-bold">125</h1>
//                 <p className="mt-2 text-sm sm:text-base">
//                   Our colleagues come from across cities of India
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Second Row */}
//           <div className="flex flex-wrap justify-center gap-8 mt-14 w-full">
//             {/* Box 1 */}
//             <div className="w-72 sm:w-80 h-48 bg-green-900 p-6 rounded-lg text-white flex flex-col items-center justify-center text-center shadow-md">
//               <h1 className="text-4xl lg:text-5xl font-bold">5000</h1>
//               <p className="mt-2 text-sm sm:text-base">
//                 Trusted partner for 5000+ Channel Partners
//               </p>
//             </div>

//             {/* Box 2 */}
//             <div className="w-72 sm:w-80 h-48 bg-green-900 p-6 rounded-lg text-white flex flex-col items-center justify-center text-center shadow-md">
//               <h1 className="text-4xl font-bold">15</h1>
//               <p className="mt-2 text-sm sm:text-base">15 Partner Branches</p>
//             </div>

//             {/* Box 3 */}
//             <div className="w-72 sm:w-80 h-48 bg-green-900 p-6 rounded-lg text-white flex flex-col items-center justify-center text-center shadow-md">
//               <h1 className="text-4xl font-bold">100</h1>
//               <p className="mt-2 text-sm sm:text-base">
//                 We are present in 100+ markets
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Animation Styles */}
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


//       {/* leadership tems */}
//       <section className="leadership-area pt-12 pb-12 bg-gray-50 animate-slide-right delay-300">
//         <div className="container mx-auto px-4">
//           {/* Section Title */}
//           <div className="flex flex-col md:flex-row items-start md:items-end mb-16 px-4 sm:px-6 lg:px-8">
//             <div className="md:w-2/3">
//               <span className="text-green-900 font-semibold uppercase text-sm">Leadership</span>
//               <h2 className="text-3xl md:text-4xl font-bold mt-2 text-green-900">
//                 Meet our leadership team
//               </h2>
//             </div>
//           </div>


//           {/* Leadership Profiles */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {/* Hiren Sejpal */}
//             <div className="p-6 bg-white shadow-lg rounded-2xl flex flex-col md:flex-row gap-4 mx-auto md:mx-0 max-w-3xl">
//               <div className="md:w-1/3">
//                 <div className="overflow-hidden rounded-lg shadow-lg">
//                   <Image
//                     src="https://media.istockphoto.com/id/1489671297/photo/portrait-satisfied-businessman-showing-to-camera-thumbs-up.webp?a=1&b=1&s=612x612&w=0&k=20&c=KaBPwuabdbqPaz7yDt7FalfbilBykUiXb_ZPHpuW1Lo="
//                     alt="Hiren Sejpal"
//                     width={200}
//                     height={200}
//                     className="w-full h-auto object-cover"
//                   />
//                 </div>
//               </div>
//               <div className="md:w-2/3 flex flex-col justify-center">
//                 <div className="flex items-center justify-between">
//                   <h5 className="text-xl font-semibold">Hiren Sejpal</h5>
//                   <a
//                     href="https://in.linkedin.com/in/hiren-sejpal"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-blue-700 hover:text-blue-900 text-lg"
//                   >
//                     <i className="fab fa-linkedin-in"></i>
//                   </a>
//                 </div>
//                 <p className="font-semibold mt-2 mb-2">Founder & CEO</p>
//                 <p className="text-gray-600 text-sm">
//                   Hiren Sejpal is a visionary entrepreneur and CEO with expertise in startups, lending, loans, and financial services. As a founder and leader, he is dedicated to driving innovation and growth in the finance sector.
//                 </p>
//               </div>
//             </div>

//             {/* Mona Sejpal */}
//             <div className="p-6 bg-white shadow-lg rounded-2xl flex flex-col md:flex-row gap-4 mx-auto md:mx-0 max-w-3xl">
//               <div className="md:w-1/3">
//                 <div className="overflow-hidden rounded-lg shadow-lg">
//                   <Image
//                     src="https://media.istockphoto.com/id/1489671297/photo/portrait-satisfied-businessman-showing-to-camera-thumbs-up.webp?a=1&b=1&s=612x612&w=0&k=20&c=KaBPwuabdbqPaz7yDt7FalfbilBykUiXb_ZPHpuW1Lo="
//                     alt="Mona Sejpal"
//                     width={200}
//                     height={200}
//                     className="w-full h-auto object-cover"
//                   />
//                 </div>
//               </div>
//               <div className="md:w-2/3 flex flex-col justify-center">
//                 <div className="flex items-center justify-between">
//                   <h5 className="text-xl font-semibold">Mona Sejpal</h5>
//                   <a
//                     href="https://in.linkedin.com/in/mona-sejpal-9861952b5"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-blue-700 hover:text-blue-900 text-lg"
//                   >
//                     <i className="fab fa-linkedin-in"></i>
//                   </a>
//                 </div>
//                 <p className="font-semibold mt-2 mb-2">Co-Founder & CFO</p>
//                 <p className="text-gray-600 text-sm">
//                   Mona Sejpal is a visionary entrepreneur and CFO with expertise in startups, lending, loans, and financial services. As a Co-founder and leader, she is dedicated to driving innovation and growth in the finance sector.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

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


//     </div>
//   );
// }
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutBanner() {
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.2 } },
  };

  const fadeUp = {
    hidden: { y: 50, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div>
      {/* ===================== BANNER ===================== */}
      <motion.section
        className="relative w-full bg-green-900 min-h-[25vh] flex items-center justify-center mb-0 my-24"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <h1 className="relative z-10 text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg">
          ABOUT US
        </h1>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-green-900 to-transparent"></div>
      </motion.section>

      {/* ===================== MAIN CONTENT ===================== */}
      <motion.section
        className="bg-white dark:bg-black py-16"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={container}
      >
        <div className="container mx-auto px-6 lg:px-10">
          <motion.div variants={fadeUp} className="space-y-6 text-gray-700 dark:text-gray-300">
            <p>
              The Loan Compass was founded with a simple mission – to make borrowing easy,
              transparent, and accessible for everyone. Many customers struggle to find
              the right loan, compare interest rates, deal with multiple banks, and handle
              paperwork. To solve this, we built a one-stop platform for all loan and
              financial needs.
            </p>

            <p>
              We help individuals, business owners, traders, manufacturers, and service
              providers secure the right loan at the right time — with complete clarity
              and expert guidance.
            </p>

            {/* What We Do */}
            <h3 className="text-2xl font-semibold text-green-700 dark:text-green-400">
              What We Do
            </h3>

            <ul className="list-disc pl-6 space-y-1 text-gray-700 dark:text-gray-300">
              <li>Unsecured Business Loans</li>
              <li>Salaried Personal Loans</li>
              <li>Home Loans</li>
              <li>Mortgage Loans</li>
              <li>Overdraft Facilities (Secured / Unsecured)</li>
            </ul>

            <p>
              We compare loan offerings from multiple banks and NBFCs to help you select
              the most suitable option with the best interest rates and flexible repayment
              terms.
            </p>

            {/* How We Help */}
            <h3 className="text-2xl font-semibold text-green-700 dark:text-green-400">
              How We Help
            </h3>

            <ul className="list-disc pl-6 space-y-1 text-gray-700 dark:text-gray-300">
              <li>Compare loan products across banks & NBFCs</li>
              <li>Suggest the best loan match based on your profile</li>
              <li>Assist with documentation and approval</li>
              <li>Offer end-to-end support until loan disbursement</li>
            </ul>

            <p className="font-semibold text-lg text-green-700 dark:text-green-400">
              No confusion. No running around. Just clarity and convenience.
            </p>

            {/* Vision */}
            <h3 className="text-2xl font-semibold text-green-700 dark:text-green-400">
              Our Vision
            </h3>

            <p>
              To become the most trusted and customer-centric financial guidance platform
              by providing simple, smart, and transparent loan solutions to individuals
              and businesses.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* ===================== FOUNDER SECTION ===================== */}
      <motion.section
        className="bg-gray-100 dark:bg-black py-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6 lg:px-10">
          <h2 className="text-3xl md:text-4xl font-bold text-green-700 dark:text-green-400 mb-10 text-center">
            Founder
          </h2>

          <div className="max-w-3xl mx-auto bg-white shadow-xl hover:shadow-2xl hover:shadow-green-200/50 dark:hover:shadow-green-900/30 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8 dark:bg-gray-900 transition-all duration-300 hover:-translate-y-2">
            {/* Image */}
            <div className="w-full md:w-1/3">
              <Image
                src="https://media.istockphoto.com/id/1489671297/photo/portrait-satisfied-businessman-showing-to-camera-thumbs-up.webp?a=1&b=1&s=612x612&w=0&k=20&c=KaBPwuabdbqPaz7yDt7FalfbilBykUiXb_ZPHpuW1Lo="
                alt="Bhavesh Jagodana"
                width={300}
                height={300}
                className="rounded-xl object-cover shadow-lg w-full h-auto"
              />
            </div>

            {/* Text */}
            <div className="w-full md:w-2/3">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Bhavesh Jagodana
              </h3>
              <p className="text-green-700 dark:text-green-400 font-semibold mt-2">
                Founder – The Loan Compass
              </p>
              <p className="text-gray-600 dark:text-gray-300 mt-3 text-lg hover:text-green-600 dark:hover:text-green-400 transition-colors duration-300">
                📞 +91 96244 59515
              </p>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
