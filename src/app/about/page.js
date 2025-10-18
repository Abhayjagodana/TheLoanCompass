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
import Image from "next/image"; // ✅ Correct import
import { motion } from "framer-motion";

export default function AboutBanner() {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemLeft = {
    hidden: { x: -50, opacity: 0 },
    show: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const itemRight = {
    hidden: { x: 50, opacity: 0 },
    show: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };
  return (
    <div>
      {/* Hero Banner */}
      <motion.section
        className="relative w-full bg-gradient-to-r from-green-900 to-green-900 min-h-[25vh] flex items-center justify-center mb-0 my-24"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-2xl md:text-4xl font-extrabold text-white drop-shadow-lg">
            ABOUT US
          </h1>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-green-900 to-transparent"></div>
      </motion.section>

      {/* About Content */}
      <motion.section
        className="bg-white dark:bg-black py-10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={container}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-start gap-6">
            {/* Left Box */}
            <motion.div
              className="lg:w-1/3 w-full flex justify-center lg:justify-end"
              variants={itemLeft}
            >
              <div className="bg-green-800 p-5 sm:p-6 text-white rounded-lg text-right w-full sm:w-72 lg:w-80 flex items-center justify-end">
                <h2 className="text-base sm:text-xl lg:text-2xl font-semibold leading-snug whitespace-pre-line text-right">
                  {`A journey that
started with a
belief to Be
Different`}
                </h2>
              </div>
            </motion.div>

            {/* Right Text */}
            <motion.div
              className="lg:w-2/3 text-gray-700 dark:text-gray-400 font-sans font-normal leading-relaxed space-y-4"
              variants={itemRight}
            >
              <p>
                Welcome to theloancompass Pvt. Ltd., a pioneering venture co-founded by the highly experienced finance professional, Hiren Sejpal, boasting an impressive track record of over 25 years in the retail loan industry. Joining forces with the equally accomplished Mrs. Mona Hiren Sejpal, this dynamic duo envisioned a company dedicated to alleviating the challenges faced by individuals seeking loans, yet encountering difficulties in securing timely disbursements for their various financial needs, be it housing, personal, or business loans.
              </p>
              <p>
                At theloancompass, we understand the financial aspirations and challenges of our clients, and our mission is clear—to simplify the loan acquisition process and make it accessible to all. With our commitment to client convenience, we offer a unique door-step service that not only minimizes the hassle for our customers but also ensures a seamless experience from application to disbursal.
              </p>
              <p>
                Our comprehensive end-to-end service guarantees that clients receive unparalleled support throughout the entire loan journey. What sets TheLoanCompass apart is our unwavering dedication to providing this exceptional service without any additional charges, affirming our commitment to transparency and client satisfaction.
              </p>
              <p>
                Choose Secure TheLoanCompass Pvt. Ltd. for a reliable, efficient, and client-centric approach to securing your financial future. Experience the difference as we work tirelessly to ensure your loan requirements are not just met but exceeded, paving the way for your financial success.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Counter Section */}
      <motion.section
        className="bg-gray-100 dark:bg-black py-24"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col items-center justify-center">
          {/* First Row */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-10 w-full">
            {/* Left Side */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
              {/* 5000 Box */}
              <div className="w-72 sm:w-80 h-48 bg-green-900 p-6 rounded-lg text-white flex flex-col items-center justify-center text-center shadow-md">
                <h1 className="text-4xl lg:text-5xl font-bold">5000</h1>
                <p className="mt-2 text-sm sm:text-base">
                  Trusted partner for 5000+ Channel Partners
                </p>
              </div>

              {/* Image */}
              <div className="flex justify-center">
                <Image
                  src="https://media.istockphoto.com/id/1332358775/photo/young-couple-shaking-hands-deal-contract-real-estate-investment-business-agreement-agent.webp?a=1&b=1&s=612x612&w=0&k=20&c=gFtxy5dE4doeHAs_crzmgl-efeRUBLgJhRaO1J4-yxQ="
                  alt="Statistics"
                  width={612}
                  height={300}
                  className="object-cover rounded-lg h-48 w-72 sm:w-80 shadow-md"
                />
              </div>
            </div>

            {/* Right Side */}
            <div className="flex justify-center">
              <div className="w-72 sm:w-80 h-48 bg-green-900 p-6 rounded-lg text-white flex flex-col items-center justify-center text-center shadow-md">
                <h1 className="text-4xl lg:text-5xl font-bold">125</h1>
                <p className="mt-2 text-sm sm:text-base">
                  Our colleagues come from across cities of India
                </p>
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div className="flex flex-wrap justify-center gap-8 mt-14 w-full">
            {/* Box 1 */}
            <div className="w-72 sm:w-80 h-48 bg-green-900 p-6 rounded-lg text-white flex flex-col items-center justify-center text-center shadow-md">
              <h1 className="text-4xl lg:text-5xl font-bold">5000</h1>
              <p className="mt-2 text-sm sm:text-base">
                Trusted partner for 5000+ Channel Partners
              </p>
            </div>

            {/* Box 2 */}
            <div className="w-72 sm:w-80 h-48 bg-green-900 p-6 rounded-lg text-white flex flex-col items-center justify-center text-center shadow-md">
              <h1 className="text-4xl font-bold">15</h1>
              <p className="mt-2 text-sm sm:text-base">15 Partner Branches</p>
            </div>

            {/* Box 3 */}
            <div className="w-72 sm:w-80 h-48 bg-green-900 p-6 rounded-lg text-white flex flex-col items-center justify-center text-center shadow-md">
              <h1 className="text-4xl font-bold">100</h1>
              <p className="mt-2 text-sm sm:text-base">
                We are present in 100+ markets
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Leadership Team */}
      <motion.section
        className="leadership-area pt-12 pb-12 bg-gray-50 dark:bg-black"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          {/* Section Title */}
          <div className="flex flex-col md:flex-row items-start md:items-end mb-16 px-4 sm:px-6 lg:px-8">
            <div className="md:w-2/3">
              <span className="text-green-400 font-semibold uppercase text-sm">Leadership</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 text-green-600">
                Meet our leadership team
              </h2>
            </div>
          </div>

          {/* Leadership Profiles */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Hiren Sejpal */}
            <div className="p-6 bg-white shadow-lg rounded-2xl flex flex-col md:flex-row gap-4 mx-auto md:mx-0 max-w-3xl">
              <div className="md:w-1/3">
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src="https://media.istockphoto.com/id/1489671297/photo/portrait-satisfied-businessman-showing-to-camera-thumbs-up.webp?a=1&b=1&s=612x612&w=0&k=20&c=KaBPwuabdbqPaz7yDt7FalfbilBykUiXb_ZPHpuW1Lo="
                    alt="Hiren Sejpal"
                    width={200}
                    height={200}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              <div className="md:w-2/3 flex flex-col justify-center">
                <div className="flex items-center justify-between">
                  <h5 className="text-xl dark:text-black font-semibold">Hiren Sejpal</h5>
                  <a
                    href="https://in.linkedin.com/in/hiren-sejpal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:text-blue-900 text-lg"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
                <p className="font-semibold dark:text-black mt-2 mb-2">Founder & CEO</p>
                <p className="text-gray-600 text-sm">
                  Hiren Sejpal is a visionary entrepreneur and CEO with expertise in startups, lending, loans, and financial services. As a founder and leader, he is dedicated to driving innovation and growth in the finance sector.
                </p>
              </div>
            </div>

            {/* Mona Sejpal */}
            <div className="p-6 bg-white shadow-lg rounded-2xl flex flex-col md:flex-row gap-4 mx-auto md:mx-0 max-w-3xl">
              <div className="md:w-1/3">
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src="https://media.istockphoto.com/id/1489671297/photo/portrait-satisfied-businessman-showing-to-camera-thumbs-up.webp?a=1&b=1&s=612x612&w=0&k=20&c=KaBPwuabdbqPaz7yDt7FalfbilBykUiXb_ZPHpuW1Lo="
                    alt="Mona Sejpal"
                    width={200}
                    height={200}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              <div className="md:w-2/3 flex flex-col justify-center">
                <div className="flex items-center justify-between">
                  <h5 className="text-xl font-semibold dark:text-black">Mona Sejpal</h5>
                  <a
                    href="https://in.linkedin.com/in/mona-sejpal-9861952b5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:text-blue-900 text-lg"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
                <p className="font-semibold mt-2 mb-2 dark:text-black">Co-Founder & CFO</p>
                <p className="text-gray-600 text-sm">
                  Mona Sejpal is a visionary entrepreneur and CFO with expertise in startups, lending, loans, and financial services. As a Co-founder and leader, she is dedicated to driving innovation and growth in the finance sector.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
