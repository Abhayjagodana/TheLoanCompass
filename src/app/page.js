// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import Header from "./Header/page";


// import { Swiper, SwiperSlide } from "swiper/react"; // ✅ Keep this
// import { Navigation, Pagination, Autoplay } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { Landmark } from 'lucide-react';

// export default function Banner() {

//   const features = [
//   {
//     title: "Car Loans",
//     description:
//       "Ready to own your dream car but need financial support? Our car loan offers easy...",
//     icon:Landmark,
//   },
//   {
//     title: "Home Loan",
//     description:
//       "Looking for a hassle-free home loan to buy your dream house? We offer flexible home...",
//     icon: "/feature/icon-10.svg",
//   },
//   {
//     title: "Mortgage Loan",
//     description:
//       "Looking for a property loan to buy, expand, or invest in real estate? We offer...",
//     icon: "/feature/icon-10.svg",
//   },
//   {
//     title: "Personal Loan",
//     description:
//       "Need quick funds for your personal expenses? Whether it’s for a medical emergency, travel, wedding...",
//     icon: "/feature/icon-10.svg",
//   },
//   {
//     title: "Unsecured Business Loan",
//     description:
//       "Looking for quick funds to take your business to the next level? Our unsecured business...",
//     icon: "/feature/icon-10.svg",
//   },
//   {
//     title: "Working Capital",
//     description:
//       "Running a business requires smooth cash flow, and sometimes, you need extra funds to keep...",
//     icon: "/feature/icon-10.svg",
//   },
// ];
//   return (
//     <div>
//       <Header/>
//     <section
//       id="banner_animation2"
//       className="relative pt-[90px] overflow-hidden"
//     >
//       {/* Background slides */}
//       <div className="absolute inset-0 z-0 pointer-events-none">
//         <div className="relative w-full h-full">
//           <div className="absolute top-0 left-0" style={{ transform: "translate3d(0.03px,0,0)" }}>
//             <Image
//               src="/silde.webp"
//               alt="Slide Shape 1"
//               width={400}
//               height={400}
//               className="animate-slide-in-right"
//             />
//           </div>
//           <div className="absolute top-0 left-0" style={{ transform: "translate3d(0.03px,0,0)" }}>
//             <Image
//               src="/slider-1.webp"
//               alt="Slide Shape 2"
//               width={400}
//               height={400}
//               className="animate-slide-in-right delay-200"
//             />
//           </div>
//           <div className="absolute top-0 left-0" style={{ transform: "translate3d(0.03px,0,0)" }}>
//             <Image
//               src="/slider-2.webp"
//               alt="Slide Shape 3"
//               width={400}
//               height={400}
//               className="animate-slide-in-right delay-400"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Content */}
//       <div className="relative z-10 container mx-auto">
//         <div className="flex flex-col lg:flex-row items-end">
//           <div className="lg:w-1/2 pt-[100px] lg:pt-[200px] pb-[100px] lg:pb-[200px]">
//             <div className="banner-content">
//               <h1 className="text-4xl lg:text-5xl font-bold mb-8 leading-snug">
//                 Compare loans from several banks and find the best offer!
//               </h1>
//               <Link
//                 href="/contact"
//                 className="inline-block mt-12 px-8 py-4 rounded-full bg-blue-700 text-white hover:bg-blue-800 transition-colors text-lg"
//               >
//                 Apply Now
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Optional overlay for parallax effect */}
//       <div className="absolute inset-0 z-0 bg-transparent"></div>
//     </section>

//   {/* -------------------Silder for loan type */}

//  <section className="py-16 bg-gray-50">
//       <div className="container mx-auto">
//         <Swiper
//           modules={[ Pagination, Autoplay]}
//           spaceBetween={30}
//           slidesPerView={3}
//           navigation
//           pagination={{ clickable: true }}
//           loop={true}
//           autoplay={{ delay: 3000 }}
//           breakpoints={{
//             640: { slidesPerView: 1 },
//             768: { slidesPerView: 2 },
//             1024: { slidesPerView: 3 },
//           }}
//         >
//           {features.map((feature, idx) => (
//             <SwiperSlide key={idx}>
//               <div className="bg-white rounded-xl shadow-lg p-6 relative overflow-hidden group hover:shadow-2xl transition">
//                 <div className="mb-4">
//                   <img src={feature.icon} alt={feature.title} className="w-12 h-12" />
//                 </div>
//                 <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
//                 <p className="text-gray-600 text-sm">{feature.description}</p>
//                 <a
//                   href="/contact"
//                   className="mt-4 inline-block bg-blue-700 text-white px-4 py-2 rounded-full hover:bg-blue-800 transition text-sm"
//                 >
//                   Apply Now
//                 </a>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>

//     </div>
//   );
// }
"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "./Header/page";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Landmark, MailMinus, Phone, phone, } from "lucide-react";
import { useEffect, useState } from "react";
import Footer from "./footer/page";
import EMICalculatorPage from "./calculater/page";

export default function Banner() {
  // slider loan type
  const features = [
    {
      title: "Car Loans",
      description:
        "Ready to own your dream car but need financial support? Our car loan offers easy options.",
      icon: Landmark,
    },
    {
      title: "Home Loan",
      description:
        "Looking for a hassle-free home loan to buy your dream house? We offer flexible options.",
      icon: Landmark,
    },
    {
      title: "Mortgage Loan",
      description:
        "Looking for a property loan to buy, expand, or invest in real estate? We offer competitive rates.",
      icon: Landmark,
    },
    {
      title: "Personal Loan",
      description:
        "Need quick funds for personal expenses? Whether it’s for medical, travel, or wedding needs.",
      icon: Landmark,
    },
    {
      title: "Unsecured Business Loan",
      description:
        "Looking for quick funds to take your business to the next level? We can help.",
      icon: Landmark,
    },
    {
      title: "Working Capital",
      description:
        "Running a business requires smooth cash flow, and sometimes you need extra funds.",
      icon: Landmark,
    },
  ];

  // calculator part
  const [loanAmount, setLoanAmount] = useState(68000000); // Example initial
  const [loanDuration, setLoanDuration] = useState(160); // months
  const [interestRate, setInterestRate] = useState(8.7);
  const [activeTab, setActiveTab] = useState("month");
  const [duration, setDuration] = useState("");

  // Calculate EMI
  const emi =
    (loanAmount * (interestRate / 100 / 12) *
      Math.pow(1 + interestRate / 100 / 12, loanDuration)) /
    (Math.pow(1 + interestRate / 100 / 12, loanDuration) - 1);

  const totalInterest = emi * loanDuration - loanAmount;

  const marks = [
    { value: 0, label: "₹0" },
    { value: 35000000, label: "₹4Cr" },
    { value: 70000000, label: "₹7Cr" },
    { value: 105000000, label: "₹11Cr" },
    { value: 140000000, label: "₹14Cr" },
    { value: 175000000, label: "₹18Cr" },
    { value: 250000000, label: "₹25Cr" },
  ];

  const maxValue = 250000000;

  const loan = [
    { value: 50, label: "50" },
    { value: 100, label: "100" },
    { value: 150, label: "150" },
    { value: 200, label: "200" },
    { value: 250, label: "250" },
    { value: 300, label: "300" },
    { value: 360, label: "360" },
  ];

  const maxloan = 360;


  useEffect(() => {
    if (loanAmount === 0 || duration === 0) {
      setInterestRate(16.0);
    } else {
      setInterestRate(8.0);
    }
  }, [loanAmount, duration]);

  //banking name image 
  const logos = [
    "/idfc.webp",
    "/yesbank.webp",
    "/rbl bank.webp",
    "/kotak.webp",
    "/hdfc.webp",
    "/icici.webp",
    "/axis.webp",
    "/pnb.webp",
    "/fedralbank.webp",
    "/bob.webp",
  ];

  const testimonials = [
    {
      name: "Devika Eaja",
      role: "The Loan Compass Customer",
      image: "https://secureedgesolution.com/public/front/img/testimonial/client-1.png",
      caption:
        "Best service and a smooth process. Keep going, The Loan Compass team. Thank you for your immediate response at each stage of the process. Kudos to the whole team.",
    },
    {
      name: "Purushottam Kalwani",
      role: "The Loan Compass Customer",
      image: "https://secureedgesolution.com/public/front/img/testimonial/client-2.png",
      caption: "Immediate response and good service. Thank you",
    },
    {
      name: "Kinjal Amani",
      role: "The Loan Compass Customer",
      image: "https://secureedgesolution.com/public/front/img/testimonial/client-3.png",
      caption:
        "I am very happy about how they treated the whole process and made me feel important. Very good teamwork, The Loan Compass.",
    },
    {
      name: "Pravin Rakholiya",
      role: "The Loan Compass Customer",
      image: "https://secureedgesolution.com/public/front/img/testimonial/client-4.png",
      caption:
        "I am very happy about how they described the process and made me feel important. Very good teamwork, The Loan Compass.",
    },
  ];

  //help you
  const faqs = [
    {
      question: "How much can I borrow?",
      answer:
        "The amount you can borrow depends on various factors, such as your creditworthiness, income, and the lender's policies. It varies from lender to lender.",
    },
    {
      question: "What are the requirements to get a loan from the bank?",
      answer: `- You should be of legal age, usually 18-21 years.
- Indian Citizenship: Typically, you must be an Indian citizen.
- You need a regular source of income to demonstrate repayment capacity.
- Creditworthiness: A good credit score enhances your eligibility.
- Required Documents: Lenders may ask for identity proof, address proof, income proof, and bank statements.`,
    },
    {
      question: "How can I borrow money ASAP?",
      answer:
        "Choose the Right Bank: Research banks and financial institutions that offer loans quickly. The Loan Compass is always there to guide you! Check Eligibility: Ensure you meet the bank's eligibility criteria, which include age, income, and credit score.",
    },
    {
      question: "What does it cost to use The Loan Compass?",
      answer: "Absolutely Free!",
    },
    {
      question: "When is the loan paid out?",
      answer:
        "The loan is typically paid out after the lender approves your application, completes any necessary documentation, and disburses the funds to your designated bank account. Timing varies depending on the lender and loan type.",
    },
    {
      question: "How long is the repayment period?",
      answer:
        "The specific repayment period will be outlined in your loan agreement with the lender. It's important to understand and adhere to the terms of the loan.",
    },
    {
      question: "Can I close the loan ahead of time?",
      answer:
        "Yes, you can usually repay the loan before the scheduled maturity date, but it's important to check your loan agreement for any prepayment penalties or terms.",
    },
    {
      question: "Can I change my application after submitting it?",
      answer:
        "Once you've submitted a loan application, it may not be easy to make significant changes. However, you can typically discuss modifications or corrections with the lender.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="bg-gray-100 dark:bg-black">
      {/* <Header /> */}

      {/* Banner Section */}
      {/* <section
      className="relative pt-[90px] overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/banner2.png')" }}
    > */}
      {/* Optional overlay */}
      {/* <div className="absolute inset-0 bg-black opacity-20"></div>

      <div className="container mx-auto flex flex-col lg:flex-row items-end pt-[100px] lg:pt-[200px] pb-[100px] lg:pb-[200px] relative z-10">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-bold mb-8 leading-snug text-white drop-shadow-lg">
            Compare loans from several banks and find the best offer!
          </h1>
          <Link
            href="/contact"
            className="inline-block mt-6 px-8 py-4 rounded-full bg-blue-700 text-white hover:bg-blue-800 transition-colors text-lg"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </section> */}

      <section className="relative w-full min-h-[850px] sm:min-h-[950px] lg:min-h-screen pt-[90px] lg:pt-[150px] pb-[100px] overflow-hidden my-24 bg-gradient-to-r from-green-900 to-green-900">
        {/* Background animated shapes */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-1/2 transform -translate-x-1/2 lg:translate-x-0 lg:left-[50%] hidden lg:block">
            {/* Show background image only on large screens */}
            <motion.div
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Image
                src="/zzzzz.png"
                width={570}
                height={150}
                alt="shape"
                className="rounded-lg w-[70%] sm:w-[70%] md:w-[60%] lg:w-[470px] h-auto mx-auto"
              // className="rounded-lg w-[80%] sm:w-[70%] md:w-[60%] lg:w-[570px] h-[550px] mx-auto object-cover"

              />
            </motion.div>
          </div>
        </div>

        {/* Banner Content */}
        <div className="container mx-auto relative z-10 px-4">
          <div className="flex flex-col lg:flex-row items-center lg:items-end text-center lg:text-left lg:mx-64">
            {/* Left Content */}
            <div className="lg:w-1/2 pt-8 lg:pt-12 pb-12 lg:pb-48 text-white">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-sans font-semibold leading-snug drop-shadow-lg text-left mx-4 sm:mx-6 md:mx-8 lg:mx-12">
                Compare loans <br />
                from several <br />
                banks and find <br />
                the best offer!
              </h1>


              {/* Button for Desktop */}
              <div className="hidden lg:block mt-6">
                <Link
                  href="/apply"
                  className="inline-block px-6 py-3 sm:px-8 sm:py-4 rounded-full bg-white text-green-700 font-semibold hover:bg-green-200 transition-colors text-lg mx-20"
                >
                  Apply Now
                </Link>
              </div>

              {/* Show image below text on mobile */}
              <div className="mt-8 block lg:hidden">
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <Image
                    src="/1.png"
                    width={600}
                    height={100}
                    alt="shape"
                    className="rounded-lg w-full max-w-[500px] h-auto mx-auto"
                  />
                </motion.div>
              </div>
            </div>

            {/* Right side image (only on desktop) */}
            <div className="lg:w-1/2 hidden lg:flex justify-end"></div>
          </div>

          {/* Button below image for Mobile/Tablet */}
          <div className="block lg:hidden text-center mt-6">
            <Link
              href="/apply"
              className="inline-block px-6 py-3 sm:px-8 sm:py-4 rounded-full bg-white text-green-900 font-semibold hover:bg-green-700 transition-colors text-lg"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </section>





      {/* Loan Slider Section */}
      <section className="py-16 bg-white  dark:bg-black animate-slide-right delay-300">
        <div className="container mx-auto">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 3 },
            }}
          >
            {features.map((feature, idx) => (
              <SwiperSlide key={idx}>
                <div className="bg-green-900 rounded-xl  shadow-lg p-6 relative overflow-hidden group hover:shadow-2xl transition-all h-full flex flex-col justify-between">
                  <div className="text-white mb-4">
                    <feature.icon className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-white text-sm mb-4">
                    {feature.description}
                  </p>
                  <Link
                    href="/apply"
                    className="mt-auto w-32 inline-block bg-white text-green-900 px-4 py-2 rounded-full hover:bg-green-700 hover:text-white transition text-sm text-center"
                  >
                    Apply Now
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
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

      {/* Calculator */}
      <div>
        <EMICalculatorPage />
      </div>

      <section className="py-20 overflow-hidden bg-white dark:bg-black">
        <div className="container mx-auto px-4">
          {/* Title */}
          <motion.div
            className="text-center mb-10"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-green-800">
              We have helped more than 5000 users!
            </h2>
          </motion.div>

          {/* Content */}
          <div className="flex flex-col lg:flex-row items-center gap-10">
            {/* Right Side Content */}
            <motion.div
              className="px-4 sm:px-6 md:px-8 lg:px-12 my-8 w-full"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex flex-col lg:flex-row w-full gap-10 mx-auto">
                {/* Offers List */}
                <motion.div
                  className="lg:w-3/12 w-full bg-gray-50 rounded-lg shadow-md p-6 relative mx-auto"
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <ul className="space-y-4 text-gray-700">
                    <li className="flex items-center">
                      <span className="text-blue-600 mr-3">✔</span>
                      Offers from several banks
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-600 mr-3">✔</span>
                      Free &amp; no obligation
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-600 mr-3">✔</span>
                      Compare safely and securely
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-600 mr-3">✔</span>
                      Offer within a few hours
                    </li>
                  </ul>
                  <Image
                    src="/shap.png"
                    alt="Shape"
                    width={150}
                    height={150}
                    className="absolute -bottom-6 -right-6 w-24 h-24 opacity-20"
                  />
                </motion.div>

                {/* Description */}
                <motion.div
                  className="lg:w-7/12 w-full text-gray-700 dark:text-white leading-relaxed"
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <p className="mb-4">
                    Compare multiple banks with just one non-binding application. We
                    save you the hassle of checking the cost of a loan at each bank.
                  </p>
                  <p className="mb-4">
                    It takes 2 minutes to fill out the application, you immediately
                    get quotes from banks and can choose the best quote!
                  </p>
                  <p>We save you not only time but also get you the best deal!</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* //banking name  */}
      <section className="bg-white dark:bg-black py-20">
        <div className="container mx-auto px-4">
          {/* Section Title */}
          <motion.div
            className="text-center mb-10 max-w-3xl mx-auto"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-green-800">
              The Loan Compass Partners With
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              <span className="font-semibold">100+ Banks & NBFCs</span> – The
              Loan Compass strategic partnership with banks enables financial accessibility
              <span className="font-semibold"> for customers</span>.
            </p>
          </motion.div>

          {/* Logos Grid */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center justify-items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1, // each logo animates with 0.1s delay
                },
              },
            }}
          >
            {logos.map((logo, index) => (
              <motion.a
                key={index}
                href="#"
                className="transition transform hover:scale-105 duration-300"
                variants={{
                  hidden: { x: -50, opacity: 0 },
                  visible: { x: 0, opacity: 1 },
                }}
                transition={{ duration: 0.6 }}
              >
                <Image
                  src={logo}
                  alt={`Partner Logo ${index + 1}`}
                  width={150}
                  height={80}
                  className="object-contain"
                />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* //Client review */}
      <section className="bg-gray-50 dark:bg-black py-16 px-4">
        <div className="container mx-auto">
          {/* Section Title */}
          <motion.div
            className="text-center mb-12"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-green-800">
              What Our Customers Are Saying
            </h2>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Left side - Testimonial Carousel */}
            <motion.div
              className="md:w-1/2 w-full mx-4 sm:mx-6 md:mx-8 lg:mx-12"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                loop={true}
                pagination={{ clickable: true }}
                autoplay={{ delay: 4000 }}
              >
                {testimonials.map((t, index) => (
                  <SwiperSlide key={index}>
                    <div className="bg-green-100 p-6 rounded-xl shadow-md flex flex-col items-center text-center">
                      <div className="w-24 h-24 relative mb-4">
                        <Image
                          src={t.image}
                          alt={t.name}
                          fill
                          className="rounded-full object-cover"
                        />
                      </div>
                      <p className="text-gray-600 mb-4">{t.caption}</p>
                      <h6 className="font-semibold text-lg text-black">{t.name}</h6>
                      <span className="text-black text-sm">{t.role}</span>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>

            {/* Right side - Highlighted text */}
            <motion.div
              className="md:w-1/2 flex flex-col justify-center"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="bg-blue-50 dark:bg-blue-50 p-6 rounded-xl shadow-md h-full flex flex-col justify-center">
                <p className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 dark:text-black">
                  Join over 5000 satisfied customers who have trusted The Loan Compass
                  for their financial needs.
                </p>
                <p className="text-gray-600 dark:text-black-300">
                  Quick responses, excellent service, and smooth processing make
                  us stand out. Get started today and see why our customers love
                  us.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
      {/* //Help you  */}
      <section className="py-16 px-4 sm:px-6 md:px-8 lg:px-12 bg-white dark:bg-black">
        <div className="container mx-auto flex flex-col lg:flex-row gap-12">

          {/* Left: Advisor Section */}
          <motion.div
            className="lg:w-1/2 flex flex-col gap-6"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-green-900 dark:text-green-900">
              Our advisors are ready to help you!
            </h2>

            <div className="relative">
              <Image
                src="/helpclient.jpg"
                alt="advisor"
                width={600}
                height={500}
                className="rounded-xl shadow-lg"
              />

              {/* Work time badge */}
              <div className="absolute top-4 left-4 bg-blue-50 px-4 py-2 rounded-full text-sm font-semibold dark:bg-blue-50 text-gray-900 shadow-md">
                All weekdays <span className="font-bold">10.00 - 18.30</span>
              </div>
            </div>

            {/* Contact buttons */}
            <div className="flex flex-col gap-3 w-full">
              <a
                href="tel:9619131314"
                className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 rounded-full bg-gradient-to-r from-green-800 to-green-800 hover:from-green-500 hover:to-green-800 text-white font-semibold transition"
              >
                <Phone className="w-5 h-5 flex-shrink-0" />
                +91-9624459515
              </a>
              <a
                href="mailto:bj@theloancompass.in"
                className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 rounded-full bg-gradient-to-r from-green-800 to-green-800 hover:from-green-500 hover:to-green-800 text-white font-semibold transition"
              >
                <MailMinus className="w-5 h-5 flex-shrink-0" />
                bj@theloancompass.in
              </a>
            </div>
          </motion.div>

          {/* Right: FAQ Section */}
          <motion.div
            className="lg:w-1/2 flex flex-col gap-4"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left px-6 py-4 flex justify-between items-center bg-gray-100 font-semibold text-gray-900 dark:text-black"
                >
                  {faq.question}
                  <span className="ml-2 text-xl text-gray-700 font-bold">
                    {openIndex === index ? "-" : "+"}
                  </span>
                </button>

                {openIndex === index && (
                  <div className="px-6 py-4 bg-white text-gray-700 whitespace-pre-line">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* //balance transfer */}


      <section

      >
        <section className="py-16 px-4 help-cta pt-20 mt-9 pb-24 bg-cover bg-center animate-slide-right-slow delay-300"
          style={{
            backgroundImage: `url('https://secureedgesolution.com/public/front/img/help-ad/bg-shape.png')`,
          }}>
          <div className="container mx-auto">
            <motion.div
              className="max-w-6xl mx-auto bg-white/90 backdrop-blur-md shadow-xl rounded-2xl p-10 text-center"
              initial={{ opacity: 0, x: -100 }}        // starts from left side
              whileInView={{ opacity: 1, x: 0 }}       // fades in + slides right
              transition={{ duration: 2, ease: "easeOut" }} // slow smooth animation
              viewport={{ once: true, amount: 0.3 }}   // triggers once when 30% visible
            >
              {/* Title */}
              <div className="section-title mb-6">
                <h2 className="text-3xl md:text-4xl font-bold text-green-900">
                  We help with both new loan and balance transfer
                </h2>
              </div>

              {/* Description */}
              <div className="max-w-xl mx-auto">
                <p className="text-gray-700 text-lg md:text-lg">
                  Whether you need to borrow for buying a home, car, holiday or want
                  to combine your loans into one single loan, we will help you.
                </p>

                {/* Buttons */}
                <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                  <a
                    href="/apply"
                    className="relative inline-block px-6 py-3 rounded-full font-semibold text-white bg-green-900 overflow-hidden group"
                  >
                    <span className="absolute inset-0 bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></span>
                    <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
                      New Loan
                    </span>
                  </a>

                  <a
                    href="/apply"
                    className="relative inline-block px-6 py-3 rounded-full font-semibold text-green-600 border border-green-600 overflow-hidden group"
                  >
                    <span className="absolute inset-0 bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></span>
                    <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
                      Balance Transfer
                    </span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        <style jsx>{`
    @keyframes slide-right-slow {
  0% {
    opacity: 0;
    transform: translateX(-80px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-slide-right-slow {
  animation: slide-right-slow 2s ease-out forwards;
}

  `}</style>
      </section>
      {/* <Footer /> */}
    </div>
  );
}
