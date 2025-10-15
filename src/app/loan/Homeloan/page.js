"use client";

import Image from "next/image";

export default function HomeLoanSection() {
  return (
    <div>
      <section className="relative w-full bg-gradient-to-r from-green-900 to-green-900 min-h-[25vh] flex items-center justify-center my-24 animate-slide-right delay-300">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
            Home Loan
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
<section className="py-[135px] my-[-100] animate-slide-right delay-300">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 mx-4 sm:mx-6 lg:mx-8 flex flex-col lg:flex-row items-center lg:items-start gap-8">
    {/* Left Image */}
    <div className="lg:w-1/3 w-full">
      <div className="services-img">
        <Image
          src="https://media.istockphoto.com/id/1298816514/photo/sales-executive-stock-photo.webp?a=1&b=1&s=612x612&w=0&k=20&c=ahM79sCLCHez0TGAOnoNMfphU6NKWxTT9Wt-b5xVwDQ="
          alt="Service Image"
          width={500}
          height={500}
          className="w-full h-auto"
        />
      </div>
    </div>

    {/* Right Content */}
    <div className="lg:w-2/3 w-full flex flex-col gap-4">
      <button className="text-green-900 font-bold text-start px-4 py-1 mb-2">
        Home Loan
      </button>

      <h3 className="text-2xl md:text-3xl font-bold my-2">
        🌟 Get Your Dream Home with Easy Home Loans 🏡
      </h3>

      <div className="text-gray-500 space-y-3">
        <p className="my-4">
          Looking for a hassle-free <strong>home loan</strong> to buy your{" "}
          <strong>dream house</strong>? We offer <strong>flexible home loan <br />options</strong> with <strong>low interest rates</strong>, <strong>easy EMI plans</strong>, and <strong>quick approvals</strong>. Whether you’re a <strong>first-time <br /> homebuyer</strong> or looking to <strong>upgrade</strong>, our <strong>home loan solutions</strong> are designed to meet your financial <br />needs. Enjoy <strong>minimal documentation</strong>, <strong>fast processing</strong>, and <strong>expert guidance</strong> throughout the <br />process. Own your <strong>dream home</strong> without financial stress. <strong>Apply now</strong> and take the first step <br />towards a brighter future! ✨
        </p>
        <p>
          🏡 <strong className="text-green-900">Why Choose Our Home Loans?</strong>
        </p>
        <ul className="list-disc list-inside space-y-1 my-8">
          <li>✅ <strong>Low Interest Rates</strong> – Affordable EMIs that fit your budget</li>
          <li>✅ <strong>Flexible Tenure Options</strong> – Choose repayment terms that work for you</li>
          <li>✅ <strong>Quick Approvals</strong> – Fast processing to help you secure your home faster</li>
          <li>✅ <strong>Minimal Documentation</strong> – Simple and easy paperwork for a hassle-free process</li>
          <li>✅ <strong>Loans for All Needs</strong> – Buy a new home, renovate, or transfer an existing loan</li>
        </ul>
        <p>
          Whether you’re a <strong>first-time homebuyer</strong> or looking to <strong>upgrade</strong>, we are here to support you at every <br />step. Our dedicated team provides expert guidance to ensure you get the best home loan suited <br /> to your needs.
        </p>
        <p>
          💰 <strong>Own your dream home today!</strong> Apply now and take the first step toward a brighter future! ✨
        </p>
      </div>

      <a
        href="/apply"
        className="inline-block w-32 bg-green-900 text-white text-center rounded-full px-6 py-2 mt-4 hover:bg-green-700 transition"
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
