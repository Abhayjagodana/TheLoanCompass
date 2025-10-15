"use client";

import Image from "next/image";

export default function WorkingCapitalLoanSection() {
    return (
        <div>
             <section className="relative w-full bg-gradient-to-r from-green-900 to-green-900 min-h-[25vh] flex items-center justify-center my-24 animate-slide-right delay-300">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative z-10 text-center px-4">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
                        Working Capital

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
          src="https://media.istockphoto.com/id/1137023551/photo/working-capital-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=l8ALM9f-BnprNlajztjyWMnvHBKE7PrRFJeahwN2hhE="
          alt="Service Image"
          width={500}
          height={500}
          className="w-full h-auto"
        />
      </div>
    </div>

    {/* Right Content */}
    <div className="lg:w-2/3 w-full flex flex-col gap-4">
      <button className="text-green-900 text-start font-bold px-4 py-1 rounded-md mb-2">
        Working Capital
      </button>

      <h3 className="text-2xl md:text-3xl font-bold">
        Boost Your Business with Working Capital <br /> Loans! 📈
      </h3>

      <div className="text-gray-500 space-y-3">
        <p>
          Running a business requires smooth <strong>cash flow</strong>, and sometimes,
          you need extra funds to keep things running seamlessly. Our{" "}
          <strong>working capital loan</strong> helps you manage day-to-day operations,
          cover <strong>inventory costs</strong>, <strong>pay suppliers</strong>, or meet{" "}
          <strong>urgent expenses</strong> without stress. With{" "}
          <strong>quick disbursal</strong>, <strong>no collateral required</strong>, and{" "}
          <strong>flexible terms</strong>, you can focus on what matters most – growing
          your business.
        </p>

        <p className="text-green-900">📊 <strong>Why Choose Our Working Capital Loans?</strong></p>

        <ul className="list-disc list-inside space-y-1">
          <li>
            💸 <strong>Quick Approval and Disbursal</strong> – Get funds within days, not weeks
          </li>
          <li>🔒 <strong>No Collateral Needed</strong> – Keep your assets safe</li>
          <li>
            📅 <strong>Flexible Repayment Plans</strong> – Tailor repayment to your cash flow
          </li>
          <li>📄 <strong>Minimal Documentation</strong> – Fast and simple process</li>
          <li>⚡ <strong>Short-Term Loan</strong> – Perfect for immediate expenses</li>
          <li>🔑 <strong>Boost Your Cash Flow</strong> – Keep operations running smoothly</li>
        </ul>

        <p>
          Whether you’re a <strong>small business</strong> or an{" "}
          <strong>established company</strong>, our working capital loan provides
          financial support for <strong>inventory management</strong>,{" "}
          <strong>employee wages</strong>, <strong>marketing expenses</strong>, or{" "}
          <strong>seasonal fluctuations</strong>.
        </p>

        <p>
          💼 <strong>Fuel your growth today!</strong> Apply now and keep your business
          running at full speed! 📈
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
