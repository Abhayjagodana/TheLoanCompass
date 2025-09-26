"use client";

import Header from "../Header/page";

export default function AboutBanner() {
    return (
        <div>
            <section className="relative w-full bg-gradient-to-r from-blue-800 to-blue-700 min-h-[25vh] flex items-center my-28">
                {/* Overlay optional for text shadow */}
                <div className="absolute inset-0 bg-black opacity-10"></div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-2xl md:text-4xl font-extrabold text-white drop-shadow-lg">
                        ABOUT US
                    </h1>
                </div>

                {/* Optional bottom gradient for smooth transition */}
                <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-blue-800 to-transparent"></div>
            </section>

            {/* Add About containe */}
            <section className="bg-white pt-12 pb-10">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row lg:items-start">
                        {/* Left Column */}
                        <div className="lg:w-1/3 flex justify-start mb-4 lg:mb-0">
                            <div className="bg-blue-700 p-4 text-white rounded-lg text-right h-48 w-80 lg:w-64 flex items-center justify-end">
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
                                    Welcome to Secure Edge Solution Pvt. Ltd., a pioneering venture co-founded by the highly experienced finance professional, Hiren Sejpal, boasting an impressive track record of over 25 years in the retail loan industry. Joining forces with the equally accomplished Mrs. Mona Hiren Sejpal, this dynamic duo envisioned a company dedicated to alleviating the challenges faced by individuals seeking loans, yet encountering difficulties in securing timely disbursements for their various financial needs, be it housing, personal, or business loans.
                                </p>
                                <p className="mb-2 leading-relaxed">
                                    At Secure Edge, we understand the financial aspirations and challenges of our clients, and our mission is clear—to simplify the loan acquisition process and make it accessible to all. With our commitment to client convenience, we offer a unique door-step service that not only minimizes the hassle for our customers but also ensures a seamless experience from application to disbursal.
                                </p>
                                <p className="mb-2 leading-relaxed">
                                    Our comprehensive end-to-end service guarantees that clients receive unparalleled support throughout the entire loan journey. What sets Secure Edge apart is our unwavering dedication to providing this exceptional service without any additional charges, affirming our commitment to transparency and client satisfaction.
                                </p>
                                <p className="mb-0 leading-relaxed">
                                    Choose Secure Edge Solution Pvt. Ltd. for a reliable, efficient, and client-centric approach to securing your financial future. Experience the difference as we work tirelessly to ensure your loan requirements are not just met but exceeded, paving the way for your financial success.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* box for counter */}
            <section className="bg-gray-100 pt-24 pb-24">
                <div className="container mx-auto px-4">
                    {/* First Row */}
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-0">
                        {/* Left Side */}
                        <div className="lg:w-7/12 flex flex-col lg:flex-row items-center lg:items-start gap-4">
                            <div className="lg:w-2/8 bg-blue-900 p-6 rounded-lg text-white flex flex-col items-center justify-center h-48 text-center">
                                <h1 className="text-4xl lg:text-5xl font-bold">5000</h1>
                                <p className="mt-2">Trusted partner for 5000+ Channel Partners</p>
                            </div>
                            <div className="lg:w-5/12">
                                <img
                                    src="https://media.istockphoto.com/id/1332358775/photo/young-couple-shaking-hands-deal-contract-real-estate-investment-business-agreement-agent.webp?a=1&b=1&s=612x612&w=0&k=20&c=gFtxy5dE4doeHAs_crzmgl-efeRUBLgJhRaO1J4-yxQ="
                                    alt="Statistics"
                                    className="w-full h-48 object-contain"
                                />
                            </div>
                        </div>

                        {/* Right Side */}
                        <div className="lg:w-4/12 mt-6 lg:mt-0">
                            <div className="lg:w-2/8 bg-blue-700 p-6 rounded-lg text-white flex flex-col items-center justify-center h-48 text-center">
                                <h1 className="text-4xl lg:text-5xl font-bold">125</h1>
                                <p className="mt-2">Our colleagues come from across cities of India</p>
                            </div>
                        </div>
                    </div>

                    {/* Second Row */}
                    <div className="flex flex-wrap mt-8 lg:mt-12 gap-4 lg:gap-6">
                        <div className="w-84">
                            <div className="lg:w-2/8 bg-blue-900 p-6 rounded-lg text-white flex flex-col h-48 items-center justify-center text-center">
                                <h1 className="text-4xl lg:text-5xl font-bold">5000</h1>
                                <p className="mt-2">Trusted partner for 5000+ Channel Partners</p>
                            </div>
                        </div>
                        <div className="w-[300px]">
                            <div className="bg-gray-200 p-6 rounded-lg text-blue-700 flex flex-col items-center justify-center h-48 text-center">
                                <h1 className="text-4xl font-bold">15</h1>
                                <p className="mt-2">15 Partner Branches</p>
                            </div>
                        </div>
                        <div className="w-[450px]">
                            <div className="bg-blue-700 p-6 rounded-lg text-white flex flex-col items-center justify-center h-48 text-center">
                                <h1 className="text-4xl font-bold">100</h1>
                                <p className="mt-2">We are present in 100+ markets</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
