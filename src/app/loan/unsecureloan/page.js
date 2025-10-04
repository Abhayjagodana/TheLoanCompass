"use client";

import Image from "next/image";

export default function UnsecuredBusinessLoanSection() {
    return (

        <div>

            <section className="relative w-full bg-gradient-to-r from-green-900 to-green-900 min-h-[25vh] flex items-center justify-center my-24 animate-slide-right delay-300">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative z-10 text-center px-4">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
                        Unsecured Business Loan

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
                <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center lg:items-start gap-8">
                    {/* Left Image */}
                    <div className="lg:w-1/3 w-full">
                        <div className="services-img">
                            <Image
                                src="https://media.istockphoto.com/id/827709914/photo/page-of-paper-with-words-unsecured-loans-and-glasses.webp?a=1&b=1&s=612x612&w=0&k=20&c=tc6RnFeVj6WHazyfJTvPHh5kfKw9yyzp7XyHc6z6Ko0="
                                alt="Service Image"
                                width={500}
                                height={500}
                                className="w-full h-auto"
                            />
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="lg:w-2/3 w-full flex flex-col gap-4">
                        <button className=" text-green-900 text-start font-bold px-4 py-1 rounded-md mb-2">
                            Unsecured Business Loan
                        </button>

                        <h3 className="text-2xl md:text-3xl font-bold">
                            Grow Your Business with an Unsecured <br />Business Loan! 💼
                        </h3>

                        <div className="text-gray-500 space-y-3">
                            <p>
                                Looking for <strong>quick funds</strong> to take your business to the next
                                level? Our <strong>unsecured business loan</strong> provides{" "}
                                <strong>fast approvals</strong>, <strong>no collateral required</strong>, and{" "}
                                <strong>flexible repayment options</strong> to help you achieve your goals.
                                Whether you need funds for <strong>expansion</strong>,{" "}
                                <strong>working capital</strong>, <strong>equipment purchase</strong>, or{" "}
                                <strong>cash flow gaps</strong>, we have the right solution for you.
                            </p>

                            <p className="text-green-900">💼 <strong>Why Choose Our Unsecured Business Loans?</strong></p>

                            <ul className="list-disc list-inside space-y-1">
                                <li>💸 <strong>Quick and Easy Approvals</strong> – Get funds in no time</li>
                                <li>🔒 <strong>No Collateral Required</strong> – Keep assets safe, no risk</li>
                                <li>
                                    📅 <strong>Flexible Repayment Plans</strong> – Customize terms to fit cash
                                    flow
                                </li>
                                <li>
                                    📄 <strong>Minimal Documentation</strong> – Simple paperwork, easy process
                                </li>
                                <li>
                                    ⚡ <strong>High Loan Amounts</strong> – Access higher loan amounts for growth
                                </li>
                                <li>
                                    🛠️ <strong>Multiple Business Uses</strong> – Invest in tech, inventory,
                                    staffing, or marketing
                                </li>
                            </ul>

                            <p>
                                We understand running a business comes with challenges. Whether you’re a{" "}
                                <strong>start-up</strong> seeking initial funding or an{" "}
                                <strong>established business</strong> aiming to expand, our unsecured loan can
                                be your stepping stone.
                            </p>

                            <p>
                                🌱 <strong>Expand, innovate, and thrive</strong> – Apply today and unlock new
                                opportunities for your business! 🚀
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
