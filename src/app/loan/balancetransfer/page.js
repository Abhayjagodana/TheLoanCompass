"use client";

import React from "react";
import Image from "next/image"; // ✅ Correct import

export default function BalanceTransfer() {
  return (
    <div>
      <section className="relative w-full bg-gradient-to-r from-green-900 to-green-900 min-h-[25vh] flex items-center justify-center my-24 animate-slide-right delay-300">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
            Balance Transfer

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
    .delay-700 {
      animation-delay: 0.7s;
    }
  `}</style>
      </section>
      <section className="services-wrapp-area py-20 bg-white my-[-70] animate-slide-right delay-300">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">

            {/* Left Image */}
            <div className="md:col-span-4">
              <div className="md:col-span-4 relative w-full h-80 md:h-96">
                <Image
                  src="https://media.istockphoto.com/id/853923224/photo/businessman-using-a-tablet-computer-for-online-banking-at-an-outdoor-caf%C3%A9.webp?a=1&b=1&s=612x612&w=0&k=20&c=yriQWj_9Y5094SgNJxyoph8qNLznrCw5rd22Iq_sr44="
                  alt="Service Image"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
              ✅
            </div>

            {/* Right Content */}
            <div className="md:col-span-8">
              <div className="services-content">
                {/* Category Button */}
                <button className=" text-green-900 font-bold text-sm  px-4 py-1 rounded-full mb-4">
                  Balance Transfer
                </button>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-bold mb-6 leading-snug">
                  🔄 Transfer Your Balance with Ease – Low- <br />Interest Rates! 💳
                </h3>

                {/* Description */}
                <p className="text-gray-500 mb-4">
                  Tired of high-interest rates on your existing loans or credit
                  cards? With our <strong>balance transfer loan</strong><br />, you can
                  easily <strong>transfer your balance</strong> to a{" "}
                  <strong>new loan with lower interest rates</strong> and enjoy{" "}<br />
                  <strong>manageable EMIs</strong>. Whether you want to consolidate
                  debt or reduce the financial burden, our <br /> balance transfer option
                  offers <strong>quick approval</strong>,{" "}
                  <strong>flexible repayment plans</strong>, and{" "}
                  <strong>no collateral <br />required</strong>.
                </p>

                {/* Features */}
                <h4 className="font-semibold text-lg mb-2 text-green-900">
                  💳 Why Choose Our Balance Transfer Loans?
                </h4>
                <ul className="list-disc list-inside text-gray-500 space-y-2 mb-4">
                  <li>
                    💸 <strong>Lower Interest Rates</strong> – Save on interest and
                    reduce your monthly burden
                  </li>
                  <li>
                    🔄 <strong>Consolidate Debt</strong> – Combine multiple loans
                    or credit card balances into one easy payment
                  </li>
                  <li>
                    📅 <strong>Flexible Repayment Terms</strong> – Choose a loan
                    term that suits your financial situation
                  </li>
                  <li>
                    ⚡ <strong>Quick and Easy Process</strong> – Fast approval with
                    minimal paperwork
                  </li>
                  <li>
                    🔒 <strong>No Collateral Needed</strong> – Secure the loan
                    without putting assets at risk
                  </li>
                </ul>

                {/* Additional Info */}
                <p className="text-gray-500 mb-4">
                  With <strong>no hidden fees</strong> and{" "}
                  <strong>transparent terms</strong>, our balance transfer option
                  is designed to help you get back on track with your finances and
                  make your debt more manageable.
                </p>

                <p className="text-lg font-semibold mb-6">
                  💡 Take control of your financial future – Apply today and
                  experience peace of mind with lower rates and easier repayments!
                  🌟
                </p>

                {/* Apply Button */}
                <a
                  href="/apply"
                  className="inline-block bg-green-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition"
                >
                  Apply
                </a>
              </div>
            </div>
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
