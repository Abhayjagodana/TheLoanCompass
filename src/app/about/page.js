"use client";
import Image from "next/image"; // ✅ Correct import


export default function AboutBanner() {
    return (
        <div>


            <section className="relative w-full bg-gradient-to-r from-green-900 to-green-900 min-h-[25vh] flex items-center my-28 animate-slide-right delay-300">
                {/* Overlay optional for text shadow */}
                <div className="absolute inset-0 bg-black opacity-10"></div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-2xl md:text-4xl font-extrabold text-white drop-shadow-lg">
                        ABOUT US
                    </h1>
                </div>

                {/* Optional bottom gradient for smooth transition */}
                <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-green-900 to-transparent"></div>
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

            {/* Add About containe */}
            <section className="bg-white pt-12 pb-10 animate-slide-right delay-300">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row lg:items-start">
                        {/* Left Column */}
                        <div className="lg:w-1/3 flex justify-start mb-4 lg:mb-0 ">
                            <div className="bg-green-800 p-4 text-white rounded-lg text-right h-48 w-80 lg:w-84 flex items-center justify-end">
                                <h2 className="text-xl lg:text-2xl font-semibold leading-snug whitespace-pre-line">
                                    {`A journey that
started with a
belief to Be
Different`}
                                </h2>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="lg:w-2/3 lg:pl-6">
                            <div className="text-gray-700">
                                <p className="mt-0 mb-2 leading-relaxed">
                                    Welcome to theloancompass Pvt. Ltd., a pioneering venture co-founded by the highly experienced finance professional, Hiren Sejpal, boasting an impressive track record of over 25 years in the retail loan industry. Joining forces with the equally accomplished Mrs. Mona Hiren Sejpal, this dynamic duo envisioned a company dedicated to alleviating the challenges faced by individuals seeking loans, yet encountering difficulties in securing timely disbursements for their various financial needs, be it housing, personal, or business loans.
                                </p>
                                <p className="mb-2 leading-relaxed">
                                    At theloancompass, we understand the financial aspirations and challenges of our clients, and our mission is clear—to simplify the loan acquisition process and make it accessible to all. With our commitment to client convenience, we offer a unique door-step service that not only minimizes the hassle for our customers but also ensures a seamless experience from application to disbursal.
                                </p>
                                <p className="mb-2 leading-relaxed">
                                    Our comprehensive end-to-end service guarantees that clients receive unparalleled support throughout the entire loan journey. What sets TheLoanCompass apart is our unwavering dedication to providing this exceptional service without any additional charges, affirming our commitment to transparency and client satisfaction.
                                </p>
                                <p className="mb-0 leading-relaxed">
                                    Choose Secure TheLoanCompass Pvt. Ltd. for a reliable, efficient, and client-centric approach to securing your financial future. Experience the difference as we work tirelessly to ensure your loan requirements are not just met but exceeded, paving the way for your financial success.
                                </p>
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

            {/* box for counter */}
            <section className="bg-gray-100 pt-24 pb-24  animate-slide-right delay-300">
                <div className="container mx-auto px-4">
                    {/* First Row */}
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-0">
                        {/* Left Side */}
                        <div className="lg:w-7/12 flex flex-col lg:flex-row items-center lg:items-start gap-4">
                            <div className="lg:w-2/8 bg-green-900 p-6 rounded-lg text-white flex flex-col items-center justify-center h-48 text-center">
                                <h1 className="text-4xl lg:text-5xl font-bold">5000</h1>
                                <p className="mt-2">Trusted partner for 5000+ Channel Partners</p>
                            </div>
                            <div className="lg:w-5/12">
                                <Image
                                    src="https://media.istockphoto.com/id/1332358775/photo/young-couple-shaking-hands-deal-contract-real-estate-investment-business-agreement-agent.webp?a=1&b=1&s=612x612&w=0&k=20&c=gFtxy5dE4doeHAs_crzmgl-efeRUBLgJhRaO1J4-yxQ="
                                    alt="Statistics"
                                    width={612}   // specify width
                                    height={300}  // specify height
                                    className="object-contain w-full h-48"
                                />
                            </div>
                        </div>

                        {/* Right Side */}
                        <div className="lg:w-4/12 mt-6 lg:mt-0">
                            <div className="lg:w-2/8 bg-green-900 p-6 rounded-lg text-white flex flex-col items-center justify-center h-48 text-center">
                                <h1 className="text-4xl lg:text-5xl font-bold">125</h1>
                                <p className="mt-2">Our colleagues come from across cities of India</p>
                            </div>
                        </div>
                    </div>

                    {/* Second Row */}
                    <div className="flex flex-wrap mt-8 lg:mt-12 gap-4 lg:gap-6">
                        <div className="w-84">
                            <div className="lg:w-2/8 bg-green-900 p-6 rounded-lg text-white flex flex-col h-48 items-center justify-center text-center">
                                <h1 className="text-4xl lg:text-5xl font-bold">5000</h1>
                                <p className="mt-2">Trusted partner for 5000+ Channel Partners</p>
                            </div>
                        </div>
                        <div className="w-[300px]">
                            <div className="bg-green-900 p-6 rounded-lg text-white flex flex-col items-center justify-center h-48 text-center">
                                <h1 className="text-4xl font-bold">15</h1>
                                <p className="mt-2">15 Partner Branches</p>
                            </div>
                        </div>
                        <div className="w-[450px]">
                            <div className="bg-green-900 p-6 rounded-lg text-white flex flex-col items-center justify-center h-48 text-center">
                                <h1 className="text-4xl font-bold">100</h1>
                                <p className="mt-2">We are present in 100+ markets</p>
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

            {/* leadership tems */}
            <section className="leadership-area pt-12 pb-12 bg-gray-50 animate-slide-right delay-300">
                <div className="container mx-auto px-4">
                    {/* Section Title */}
                    <div className="flex flex-col md:flex-row items-start md:items-end mb-16">
                        <div className="md:w-2/3">
                            <span className="text-green-900 font-semibold uppercase text-sm">Leadership</span>
                            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-green-900">Meet our leadership team</h2>
                        </div>
                    </div>

                    {/* Leadership Profiles */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Hiren Sejpal */}
                        <div className="p-6 bg-white shadow-lg rounded-2xl flex flex-col md:flex-row gap-4">
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
                                    <h5 className="text-xl font-semibold">Hiren Sejpal</h5>
                                    <a
                                        href="https://in.linkedin.com/in/hiren-sejpal"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-700 hover:text-blue-900 text-lg"
                                    >
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                </div>
                                <p className="font-semibold mt-2 mb-2">Founder & CEO</p>
                                <p className="text-gray-600 text-sm">
                                    Hiren Sejpal is a visionary entrepreneur and CEO with expertise in startups, lending, loans, and financial services. As a founder and leader, he is dedicated to driving innovation and growth in the finance sector.
                                </p>
                            </div>
                        </div>

                        {/* Mona Sejpal */}
                        <div className="p-6 bg-white shadow-lg rounded-2xl flex flex-col md:flex-row gap-4">
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
                                    <h5 className="text-xl font-semibold">Mona Sejpal</h5>
                                    <a
                                        href="https://in.linkedin.com/in/mona-sejpal-9861952b5"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-700 hover:text-blue-900 text-lg"
                                    >
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                </div>
                                <p className="font-semibold mt-2 mb-2">Co-Founder & CFO</p>
                                <p className="text-gray-600 text-sm">
                                    Mona Sejpal is a visionary entrepreneur and CFO with expertise in startups, lending, loans, and financial services. As a Co-founder and leader, she is dedicated to driving innovation and growth in the finance sector.
                                </p>
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
