// "use client";

// import React from "react";
// import Image from "next/image"; // ✅ Correct import

// export default function CarLoan() {
//   return (
//     <div>
//       <section className="relative w-full bg-gradient-to-r from-green-900 to-green-900 min-h-[25vh] flex items-center justify-center my-24 animate-slide-right delay-300">
//         <div className="absolute inset-0 bg-black/10"></div>
//         <div className="relative z-10 text-center px-4">
//           <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
//             Car Loans

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
//       <section className="services-wrapp-area py-20 bg-white animate-slide-right delay-300">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">

//             {/* Left Image */}
//             <div className="md:col-span-4">
//               <div className="md:col-span-4 relative w-full h-80 md:h-96">
//                 <Image
//                   src="https://media.istockphoto.com/id/2187018053/photo/vehicle-purchase-and-sale-contract-sales-representative-in-car-showroom-vehicle-loan-business.webp?a=1&b=1&s=612x612&w=0&k=20&c=xyXpP8S4AEogoQYA0PquN_AtYkNdr65-kQai17SEOjU="
//                   alt="Car Loan"
//                   fill
//                   className="object-cover rounded-lg shadow-lg"
//                 />
//               </div>
//             </div>

//             {/* Right Content */}
//             <div className="md:col-span-8  my-[-30]">
//               <div className="services-content">
//                 {/* Category Button */}
//                 <button className=" text-green-900 text-sm font-bold px-4 py-1 rounded-full mb-4 my-32">
//                   Car Loans
//                 </button>

//                 {/* Title */}
//                 <h3 className="text-2xl md:text-3xl font-bold mb-6 leading-snug">
//                   🚗 Drive Your Dream Car with Easy Car <br />Loans!
//                 </h3>

//                 {/* Description */}
//                 <p className="text-gray-500 mb-4">
//                   Ready to own your dream car but need financial support? Our &apos;
//                   <strong>car loan</strong> offers <strong>easy approval</strong>,{" "}
//                   <strong>low-interest rates</strong>, and{" "}
//                   <strong>flexible repayment options</strong> to help you drive
//                   home your desired car.
//                 </p>

//                 {/* Features */}
//                 <h4 className="font-semibold text-lg mb-2 text-green-900">
//                   🚗 Why Choose Our Car Loans?
//                 </h4>
//                 <ul className="list-disc list-inside text-gray-500 space-y-2 mb-4">
//                   <li>
//                     💸 <strong>Low Interest Rates</strong> – Affordable EMIs that
//                     suit your budget
//                   </li>
//                   <li>
//                     📅 <strong>Flexible Loan Terms</strong> – Customize your
//                     repayment tenure
//                   </li>
//                   <li>
//                     ⚡ <strong>Quick Approval &amp; Disbursal</strong> – Get funds
//                     fast and drive home your car sooner
//                   </li>
//                   <li>
//                     📝 <strong>Minimal Documentation</strong> – Quick and easy
//                     paperwork process
//                   </li>
//                   <li>
//                     🔒 <strong>No Collateral Needed</strong> – Loan based on your
//                     eligibility, not assets
//                   </li>
//                 </ul>

//                 {/* Extra Info */}
//                 <p className="text-gray-700 mb-4">
//                   We understand the joy of owning a <strong>new car</strong> or
//                   upgrading your current one. Our car loan options are designed to
//                   make it easy for you to finance your purchase with no hidden
//                   costs or surprises.
//                 </p>

//                 <p className="text-lg font-semibold mb-6">
//                   🚙 Start your journey today! Apply now and get on the road to
//                   your dream car! 🏁
//                 </p>

//                 {/* Apply Button */}
//                 <a
//                   href="/apply"
//                   className="inline-block bg-green-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition"
//                 >
//                   Apply
//                 </a>
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

export default function CarLoanSection() {
  return (
    <div>
      {/* ✅ Hero Section */}
      <section className="relative w-full bg-gradient-to-r from-green-900 to-green-900 min-h-[25vh] flex items-center justify-center my-24 animate-slide-right delay-300">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
            Car Loans
          </h1>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-green-900 to-transparent"></div>

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
        `}</style>
      </section>

      {/* ✅ Content Section */}
      <section className="py-[135px] my-[-100px] animate-slide-right delay-300">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center lg:items-start gap-8">
          {/* Left Image */}
          <div className="lg:w-1/3 w-full">
            <div className="services-img">
              <Image
                src="https://media.istockphoto.com/id/2187018053/photo/vehicle-purchase-and-sale-contract-sales-representative-in-car-showroom-vehicle-loan-business.webp?a=1&b=1&s=612x612&w=0&k=20&c=xyXpP8S4AEogoQYA0PquN_AtYkNdr65-kQai17SEOjU="
                alt="Car Loan Service"
                width={500}
                height={500}
                className="w-full h-auto rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:w-2/3 w-full flex flex-col gap-4">
            <button className="text-green-900 text-start font-bold px-4 py-1 rounded-md mb-2">
              Car Loans
            </button>

            <h3 className="text-2xl md:text-3xl font-bold">
              🚗 Drive Your Dream Car with Easy Car <br />Loans!
            </h3>

            <div className="text-gray-500 space-y-3">
              <p>
                Ready to own your dream car but need financial support? Our &apos;
                <strong>car loan</strong> offers <strong>easy approval</strong>,{" "}
                <strong>low-interest rates</strong>, and{" "}
                <strong>flexible repayment options</strong> to help you drive
                home your desired car.
              </p>

              <p className="text-green-900">
                <strong> 🚗 Why Choose Our Car Loans?</strong>
              </p>

              <ul className="list-disc list-inside space-y-1">
                <li>
                  💸 <strong>Low Interest Rates</strong> – Affordable EMIs that
                  suit your budget
                </li>
                <li>
                  📅 <strong>Flexible Loan Terms</strong> – Customize your repayment tenure
                </li>
                <li>
                  ⚡ <strong>Quick Approval &amp; Disbursal</strong> – Get funds
                  fast and drive home your car sooner
                </li>
                <li>
                  📝 <strong>Minimal Documentation</strong> – Quick and easy
                  paperwork process
                </li>
                <li>
                  🔒 <strong>No Collateral Needed</strong> – Loan based on your
                  eligibility, not assets
                </li>
              </ul>

              <p>
                We understand the joy of owning a <strong>new car</strong> or
                upgrading your current one. Our car loan options are designed to
                make it easy for you to finance your purchase with no hidden
                costs or surprises.
              </p>

              <p>
                🚙 Start your journey today! Apply now and get on the road to
                your dream car! 🏁
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

        {/* Animation styles */}
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
        `}</style>
      </section>
    </div>
  );
}
