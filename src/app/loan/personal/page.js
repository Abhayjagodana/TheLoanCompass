"use client";

import Image from "next/image"; // ✅ Correct import
  
export default function PersonalLoanSection() {
  return (

    <div>
      <section className="relative w-full bg-gradient-to-r from-blue-800 to-blue-700 min-h-[25vh] flex items-center justify-center my-24 animate-slide-right delay-300">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
            Personal Loan
          </h1>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-blue-800 to-transparent"></div>
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
      </section>
      <section className="py-[135px] my-[-100] animate-slide-right delay-300">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center lg:items-start gap-8">
          {/* Left Image */}
          <div className="lg:w-1/3 w-full">
            <div className="services-img">
              <Image
                src="https://media.istockphoto.com/id/2170497017/photo/finance-and-investment-businessman-approved-personal-loan-loan-approval-from-a-bank-or.webp?a=1&b=1&s=612x612&w=0&k=20&c=FZzvwe0jewgZHwhmVGse2Rh3_cyuOz2yRK16mCunkFQ="
                alt="Service Image"
                width={500}
                height={500}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:w-2/3 w-full flex flex-col gap-4">
            <button className=" text-black text-start font-bold px-4 py-1  mb-2">
              Personal Loan
            </button>

            <h3 className="text-2xl md:text-3xl font-bold">
              💰 Get an Instant Personal Loan – Fast  &amp; <br /> Hassle-Free! 🚀
            </h3>

            <div className="text-gray-500 space-y-3">
              <p>
                Need quick funds for your <strong>personal expenses</strong>? Whether it’s for a{" "}
                <strong>medical emergency</strong>, <strong>travel<br /></strong>,{" "}
                <strong>wedding</strong>, or <strong>home renovation</strong>, our{" "}
                <strong>personal loan</strong> offers <strong>instant approval</strong>,{" "}
                <strong>low-interest rates</strong>, and<br />{" "}
                <strong>flexible repayment options</strong> to meet your financial needs.
              </p>

              <p>🙌 <strong>Why Choose Our Personal Loans?</strong></p>

              <ul className="list-disc list-inside space-y-1">
                <li>💵 <strong>Instant Loan Disbursal</strong> – Get funds in your account quickly</li>
                <li>📉 <strong>Low Interest Rates</strong> – Affordable EMIs to suit your budget</li>
                <li>📅 <strong>Flexible Repayment Options</strong> – Choose a tenure that works for you</li>
                <li>📝 <strong>Minimal Documentation</strong> – Quick and easy application process</li>
                <li>🔄 <strong>No Collateral Required</strong> – 100% unsecured loan for your convenience</li>
              </ul>

              <p>
                Whether it’s a <strong>dream vacation</strong>, a <strong>big celebration</strong>, or
                an <strong>unexpected expense</strong>, we’ve got you covered.
              </p>

              <p>
                ✨ <strong>Your financial freedom is just one step away!</strong> Apply now and get the
                funds you need instantly! 🚀
              </p>
            </div>

            <a
              href="/apply"
              className="inline-block bg-blue-800 text-white rounded-full w-32 text-center px-6 py-2 mt-4 hover:bg-blue-900 transition"
            >
              Apply
            </a>
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
      </section>
    </div>
  );
}
