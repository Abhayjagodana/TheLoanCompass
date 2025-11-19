// // // EMI Calculator React component for Next.js + Tailwind CSS
// // // Place this file in `app/emicalculator/page.jsx` (for App Router) or `pages/emicalculator.jsx` (for Pages Router).
// // // Requires Tailwind CSS already configured in your Next.js project.

// // "use client"
// // import React, { useEffect, useState } from "react";

// // export default function EMICalculatorPage() {
// //     // Defaults taken from the HTML you provided
// //     const [loanProduct, setLoanProduct] = useState("home-loan");
// //     const [loanAmount, setLoanAmount] = useState(2500000); // ₹ 25,00,000
// //     const [interestRate, setInterestRate] = useState(10.5); // % annual
// //     const [termValue, setTermValue] = useState(20); // years by default
// //     const [termUnit, setTermUnit] = useState("years"); // "years" or "months"
// //     const [emiScheme, setEmiScheme] = useState("arrears"); // "advance" or "arrears"

// //     // Derived
// //     const months = termUnit === "years" ? Math.round(termValue * 12) : Math.round(termValue);

// //     const [emi, setEmi] = useState(0);
// //     const [totalInterest, setTotalInterest] = useState(0);
// //     const [totalPayment, setTotalPayment] = useState(0);

// //     // Helpers
// //     const formatCurrency = (value) => {
// //         try {
// //             return value.toLocaleString("en-IN", { maximumFractionDigits: 0 });
// //         } catch (e) {
// //             return value;
// //         }
// //     };

// //     const formatCurrencyWithSymbol = (value) => `₹${formatCurrency(value)}`;

// //     useEffect(() => {
// //         // EMI calculation
// //         // monthly rate
// //         const r = interestRate / 100 / 12;
// //         const n = Math.max(1, months);
// //         const P = Math.max(0, loanAmount);

// //         let monthlyEmi = 0;
// //         if (r === 0) monthlyEmi = P / n;
// //         else {
// //             const pow = Math.pow(1 + r, n);
// //             monthlyEmi = (P * r * pow) / (pow - 1);
// //         }

// //         // If EMI in advance, first payment effectively reduces interest slightly.
// //         if (emiScheme === "advance") {
// //             // For a simple approximation, shift one payment: effective monthlyEmi stays identical but total interest reduces by one EMI period's interest portion.
// //             // We'll subtract (monthlyEmi * r) as a light approximation so numbers stay intuitive.
// //             // NOTE: precise actuarial handling for advance EMIs is more involved; this approximation keeps UI responsive and close to expectations.
// //             const approxReduction = monthlyEmi * r;
// //             monthlyEmi = Math.max(0, monthlyEmi - approxReduction);
// //         }

// //         const total = monthlyEmi * n;
// //         const interest = Math.max(0, total - P);

// //         setEmi(Math.round(monthlyEmi));
// //         setTotalInterest(Math.round(interest));
// //         setTotalPayment(Math.round(total));
// //     }, [loanAmount, interestRate, months, emiScheme]);

// //     // Slider bounds (chosen to match the original HTML ticks roughly)
// //     const loanMin = 0;
// //     const loanMax = 20000000; // ₹2,00,00,000 (200L)
// //     const interestMin = 5;
// //     const interestMax = 20;
// //     const termMinYears = 0;
// //     const termMaxYears = 30;
// //     const termMaxMonths = 360;

// //     // Pie chart calculations: principal vs interest
// //     const principalPart = Math.max(0, loanAmount);
// //     const interestPart = Math.max(0, totalInterest);
// //     const totalParts = principalPart + interestPart || 1;
// //     const principalPct = Math.round((principalPart / totalParts) * 1000) / 10; // 1 decimal
// //     const interestPct = Math.round((interestPart / totalParts) * 1000) / 10;

// //     // Simple donut chart stroke-dasharray
// //     const donutCircumference = 2 * Math.PI * 50; // r = 50
// //     const interestDash = (interestPart / totalParts) * donutCircumference;
// //     const principalDash = donutCircumference - interestDash;

// //     return (
// //         <div className="max-w-5xl mx-auto p-6">
// //             <h2 className="text-2xl font-semibold mb-4">EMI Calculator</h2>

// //             <div className="bg-white shadow rounded-lg p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
// //                 {/* Left: controls */}
// //                 <div className="lg:col-span-2 space-y-4">
// //                     <div className="flex gap-3">
// //                         <button
// //                             onClick={() => setLoanProduct("home-loan")}
// //                             className={`px-3 py-1 rounded ${loanProduct === "home-loan" ? "bg-indigo-600 text-white" : "bg-gray-100"}`}>
// //                             Home Loan
// //                         </button>
// //                         <button
// //                             onClick={() => setLoanProduct("personal-loan")}
// //                             className={`px-3 py-1 rounded ${loanProduct === "personal-loan" ? "bg-indigo-600 text-white" : "bg-gray-100"}`}>
// //                             Personal Loan
// //                         </button>
// //                         <button
// //                             onClick={() => setLoanProduct("car-loan")}
// //                             className={`px-3 py-1 rounded ${loanProduct === "car-loan" ? "bg-indigo-600 text-white" : "bg-gray-100"}`}>
// //                             Car Loan
// //                         </button>
// //                     </div>

// //                     {/* Loan Amount */}
// //                     <div className="space-y-2">
// //                         <label className="font-medium">Home Loan Amount</label>
// //                         <div className="flex items-center gap-3">
// //                             <div className="flex-1">
// //                                 <input
// //                   type="text"
// //                   value={formatCurrency(loanAmount)}
// //                   onChange={(e) => {
// //                     // remove non-digits
// //                     const digits = e.target.value.replace(/[^0-9]/g, "");
// //                     const val = Number(digits || 0);
// //                     const rounded = Math.round(val / 10000) * 10000;

// //                     setLoanAmount(Math.min(Math.max(rounded, loanMin), loanMax));
// //                   }}
// //                   className="w-full border rounded px-3 py-2"
// //                 />
// //                                 {/* <input
// //                                     type="text"
// //                                     value={formatCurrency(loanAmount)}
// //                                     onChange={(e) => {
// //                                         const digits = e.target.value.replace(/[^0-9]/g, "");
// //                                         const val = Number(digits || 0);

// //                                         // Round loan amount to nearest 10,000
// //                                         const rounded = Math.round(val / 10000) * 10000;

// //                                         setLoanAmount(Math.min(Math.max(rounded, loanMin), loanMax));
// //                                     }}
// //                                     className="w-full border rounded px-3 py-2"
// //                                 /> */}
// //                             </div>
// //                             <div className="w-32 text-sm text-right">{formatCurrencyWithSymbol(loanAmount)}</div>
// //                         </div>

// //                         <input
// //                             type="range"
// //                             min={loanMin}
// //                             max={loanMax}
// //                             step={10000}
// //                             value={loanAmount}
// //                             onChange={(e) => setLoanAmount(Number(e.target.value))}
// //                             className="w-full"
// //                         />

// //                         <div className="flex justify-between text-xs text-gray-500">
// //                             <span>0</span>
// //                             <span>25L</span>
// //                             <span>50L</span>
// //                             <span>75L</span>
// //                             <span>100L</span>
// //                             <span>150L</span>
// //                             <span>200L</span>
// //                         </div>
// //                     </div>

// //                     {/* Interest Rate */}
// //                     <div className="space-y-2">
// //                         <label className="font-medium">Interest Rate (Annual %)</label>
// //                         <div className="flex items-center gap-3">
// //                             <input
// //                                 type="number"
// //                                 value={interestRate}
// //                                 step="0.1"
// //                                 onChange={(e) => setInterestRate(Number(e.target.value))}
// //                                 className="w-32 border rounded px-3 py-2"
// //                             />
// //                             <div className="flex-1">
// //                                 <input
// //                                     type="range"
// //                                     min={interestMin}
// //                                     max={interestMax}
// //                                     step={0.1}
// //                                     value={interestRate}
// //                                     onChange={(e) => setInterestRate(Number(e.target.value))}
// //                                     className="w-full"
// //                                 />
// //                             </div>
// //                             <div className="w-20 text-right text-sm">{interestRate}%</div>
// //                         </div>
// //                     </div>

// //                     {/* Term */}
// //                     <div className="space-y-2">
// //                         <label className="font-medium">Loan Tenure</label>
// //                         <div className="flex items-center gap-3">
// //                             <input
// //                                 type="number"
// //                                 value={termValue}
// //                                 min={termUnit === "years" ? termMinYears : 1}
// //                                 max={termUnit === "years" ? termMaxYears : termMaxMonths}
// //                                 onChange={(e) => setTermValue(Number(e.target.value))}
// //                                 className="w-24 border rounded px-3 py-2"
// //                             />

// //                             <div className="inline-flex border rounded overflow-hidden">
// //                                 <button
// //                                     onClick={() => {
// //                                         // when switching from months to years convert approx
// //                                         if (termUnit === "months") {
// //                                             setTermValue(Math.round(termValue / 12));
// //                                         }
// //                                         setTermUnit("years");
// //                                     }}
// //                                     className={`px-3 py-1 ${termUnit === "years" ? "bg-indigo-600 text-white" : "bg-white"}`}>
// //                                     Yr
// //                                 </button>
// //                                 <button
// //                                     onClick={() => {
// //                                         if (termUnit === "years") {
// //                                             setTermValue(Math.round(termValue * 12));
// //                                         }
// //                                         setTermUnit("months");
// //                                     }}
// //                                     className={`px-3 py-1 ${termUnit === "months" ? "bg-indigo-600 text-white" : "bg-white"}`}>
// //                                     Mo
// //                                 </button>
// //                             </div>

// //                             <div className="flex-1">
// //                                 <input
// //                                     type="range"
// //                                     min={termUnit === "years" ? termMinYears : 1}
// //                                     max={termUnit === "years" ? termMaxYears : termMaxMonths}
// //                                     step={termUnit === "years" ? 1 : 1}
// //                                     value={termValue}
// //                                     onChange={(e) => setTermValue(Number(e.target.value))}
// //                                     className="w-full"
// //                                 />
// //                             </div>

// //                             <div className="w-24 text-right text-sm">{termUnit === "years" ? `${termValue} yr` : `${termValue} mo`}</div>
// //                         </div>
// //                     </div>

// //                     {/* EMI Scheme */}
// //                     <div className="space-y-2">
// //                         <label className="font-medium">EMI Scheme</label>
// //                         <div className="flex gap-2">
// //                             <button
// //                                 onClick={() => setEmiScheme("advance")}
// //                                 className={`px-3 py-1 rounded ${emiScheme === "advance" ? "bg-indigo-600 text-white" : "bg-gray-100"}`}>
// //                                 EMI in Advance
// //                             </button>
// //                             <button
// //                                 onClick={() => setEmiScheme("arrears")}
// //                                 className={`px-3 py-1 rounded ${emiScheme === "arrears" ? "bg-indigo-600 text-white" : "bg-gray-100"}`}>
// //                                 EMI in Arrears
// //                             </button>
// //                         </div>
// //                     </div>
// //                 </div>

// //                 {/* Right: Summary & Chart */}
// //                 <div className="bg-gray-50 p-4 rounded-lg flex flex-col items-center gap-4">
// //                     <div className="text-center">
// //                         <h4 className="text-sm text-gray-500">Loan EMI</h4>
// //                         <p className="text-2xl font-bold">₹<span>{formatCurrency(emi)}</span></p>
// //                     </div>

// //                     <div className="w-full grid grid-cols-2 gap-3 text-sm">
// //                         <div className="bg-white p-3 rounded shadow-sm">
// //                             <div className="text-xs text-gray-500">Total Interest Payable</div>
// //                             <div className="font-semibold">{formatCurrencyWithSymbol(totalInterest)}</div>
// //                         </div>
// //                         <div className="bg-white p-3 rounded shadow-sm">
// //                             <div className="text-xs text-gray-500">Total Payment (P + I)</div>
// //                             <div className="font-semibold">{formatCurrencyWithSymbol(totalPayment)}</div>
// //                         </div>
// //                     </div>

// //                     {/* Donut chart */}
// //                     <div className="flex items-center gap-4 mt-3">
// //                         <svg width="120" height="120" viewBox="0 0 120 120">
// //                             <g transform="translate(60,60)">
// //                                 <circle r="50" cx="0" cy="0" fill="transparent" strokeWidth="20" stroke="#E6E6E6" />
// //                                 <circle
// //                                     r="50"
// //                                     cx="0"
// //                                     cy="0"
// //                                     fill="transparent"
// //                                     stroke="#ED8C2B"
// //                                     strokeWidth="20"
// //                                     strokeDasharray={`${interestDash} ${principalDash}`}
// //                                     transform="rotate(-90)"
// //                                 />
// //                                 {/* center text */}
// //                                 <text x="0" y="4" textAnchor="middle" fontSize="12" fontWeight="700">{interestPct}%</text>
// //                                 <text x="0" y="20" textAnchor="middle" fontSize="10" fill="#666">Interest</text>
// //                             </g>
// //                         </svg>

// //                         <div className="text-sm">
// //                             <div className="flex items-center gap-2">
// //                                 <span className="w-3 h-3 bg-[#88A825] rounded-full inline-block" />
// //                                 <span>Principal</span>
// //                                 <strong className="ml-2">{formatCurrencyWithSymbol(principalPart)}</strong>
// //                             </div>
// //                             <div className="flex items-center gap-2 mt-2">
// //                                 <span className="w-3 h-3 bg-[#ED8C2B] rounded-full inline-block" />
// //                                 <span>Interest</span>
// //                                 <strong className="ml-2">{formatCurrencyWithSymbol(interestPart)}</strong>
// //                             </div>
// //                         </div>
// //                     </div>

// //                     <div className="text-xs text-gray-500 mt-2">Break-up of total payment</div>
// //                 </div>
// //             </div>

// //             <div className="mt-6 text-sm text-gray-600">
// //                 <strong>Notes:</strong>
// //                 <ul className="list-disc list-inside">
// //                     <li>The EMI calculation uses the standard monthly amortization formula.</li>
// //                     <li>
// //                         EMI in Advance is approximated for UI responsiveness — if you need exact actuarial schedules (e.g., for bank statements), I can add an exact amortization table showing per-month principal &
// //                         interest breakdown.
// //                     </li>
// //                     <li>To use this component, ensure Tailwind CSS is installed and working in your Next.js app.</li>
// //                 </ul>
// //             </div>
// //         </div>
// //     );
// // }
// "use client"
// import React, { useEffect, useState } from "react";

//  function EMICalculatorPage() {
//   const [loanProduct, setLoanProduct] = useState("home-loan");
//   const [loanAmount, setLoanAmount] = useState(2500000);
//   const [interestRate, setInterestRate] = useState(10.5);
//   const [termValue, setTermValue] = useState(20);
//   const [termUnit, setTermUnit] = useState("years");
//   const [emiScheme, setEmiScheme] = useState("arrears");

//   const months = termUnit === "years" ? Math.round(termValue * 12) : Math.round(termValue);

//   const [emi, setEmi] = useState(0);
//   const [totalInterest, setTotalInterest] = useState(0);
//   const [totalPayment, setTotalPayment] = useState(0);

//   const formatCurrency = (value) => {
//     try {
//       return value.toLocaleString("en-IN", { maximumFractionDigits: 0 });
//     } catch (e) {
//       return value;
//     }
//   };
//   const formatCurrencyWithSymbol = (value) => `₹${formatCurrency(value)}`;

//   useEffect(() => {
//     const r = interestRate / 100 / 12;
//     const n = Math.max(1, months);
//     const P = Math.max(0, loanAmount);

//     let monthlyEmi = 0;
//     if (r === 0) monthlyEmi = P / n;
//     else {
//       const pow = Math.pow(1 + r, n);
//       monthlyEmi = (P * r * pow) / (pow - 1);
//     }

//     if (emiScheme === "advance") {
//       const approxReduction = monthlyEmi * r;
//       monthlyEmi = Math.max(0, monthlyEmi - approxReduction);
//     }

//     const total = monthlyEmi * n;
//     const interest = Math.max(0, total - P);

//     setEmi(Math.round(monthlyEmi));
//     setTotalInterest(Math.round(interest));
//     setTotalPayment(Math.round(total));
//   }, [loanAmount, interestRate, months, emiScheme]);

//   const loanMin = 0;
//   const loanMax = 20000000;
//   const interestMin = 5;
//   const interestMax = 20;
//   const termMinYears = 0;
//   const termMaxYears = 30;
//   const termMaxMonths = 360;

//   const principalPart = Math.max(0, loanAmount);
//   const interestPart = Math.max(0, totalInterest);
//   const totalParts = principalPart + interestPart || 1;
//   const principalPct = Math.round((principalPart / totalParts) * 1000) / 10;
//   const interestPct = Math.round((interestPart / totalParts) * 1000) / 10;

//   const donutCircumference = 2 * Math.PI * 50;
//   const interestDash = (interestPart / totalParts) * donutCircumference;
//   const principalDash = donutCircumference - interestDash;

//   return (
//     <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
//       <h2 className="text-2xl font-semibold mb-6 text-center lg:text-left">
//         EMI Calculator
//       </h2>

//       <div className="bg-white shadow rounded-lg p-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
//         {/* Left Controls */}
//         <div className="lg:col-span-2 space-y-6">
//           {/* Loan Type */}
//           <div className="flex flex-wrap gap-3">
//             {["home-loan", "personal-loan", "car-loan"].map((type) => (
//               <button
//                 key={type}
//                 onClick={() => setLoanProduct(type)}
//                 className={`px-4 py-2 rounded-md text-sm font-medium transition ${
//                   loanProduct === type
//                     ? "bg-indigo-600 text-white"
//                     : "bg-gray-100 hover:bg-gray-200"
//                 }`}
//               >
//                 {type.replace("-", " ").replace(/\b\w/g, (c) => c.toUpperCase())}
//               </button>
//             ))}
//           </div>

//           {/* Loan Amount */}
//           <div className="space-y-2">
//             <label className="font-medium">Loan Amount</label>
//             <div className="flex flex-col sm:flex-row items-center gap-3">
//               <input
//                 type="text"
//                 value={formatCurrency(loanAmount)}
//                 onChange={(e) => {
//                   const digits = e.target.value.replace(/[^0-9]/g, "");
//                   const val = Number(digits || 0);
//                   const rounded = Math.round(val / 10000) * 10000;
//                   setLoanAmount(Math.min(Math.max(rounded, loanMin), loanMax));
//                 }}
//                 className="w-full sm:flex-1 border rounded px-3 py-2"
//               />
//               <div className="sm:w-40 text-sm text-right font-semibold">
//                 {formatCurrencyWithSymbol(loanAmount)}
//               </div>
//             </div>

//             <input
//               type="range"
//               min={loanMin}
//               max={loanMax}
//               step={10000}
//               value={loanAmount}
//               onChange={(e) => setLoanAmount(Number(e.target.value))}
//               className="w-full"
//             />
//           </div>

//           {/* Interest Rate */}
//           <div className="space-y-2">
//             <label className="font-medium">Interest Rate (Annual %)</label>
//             <div className="flex flex-col sm:flex-row items-center gap-3">
//               <input
//                 type="number"
//                 value={interestRate}
//                 step="0.1"
//                 onChange={(e) => setInterestRate(Number(e.target.value))}
//                 className="w-full sm:w-28 border rounded px-3 py-2"
//               />
//               <input
//                 type="range"
//                 min={interestMin}
//                 max={interestMax}
//                 step={0.1}
//                 value={interestRate}
//                 onChange={(e) => setInterestRate(Number(e.target.value))}
//                 className="flex-1"
//               />
//               <span className="text-sm sm:w-16 text-right">
//                 {interestRate}%
//               </span>
//             </div>
//           </div>

//           {/* Tenure */}
//           <div className="space-y-2">
//             <label className="font-medium">Loan Tenure</label>
//             <div className="flex flex-col sm:flex-row items-center gap-3">
//               <input
//                 type="number"
//                 value={termValue}
//                 min={termUnit === "years" ? termMinYears : 1}
//                 max={termUnit === "years" ? termMaxYears : termMaxMonths}
//                 onChange={(e) => setTermValue(Number(e.target.value))}
//                 className="w-full sm:w-24 border rounded px-3 py-2"
//               />

//               {/* Unit Toggle */}
//               <div className="inline-flex border rounded overflow-hidden">
//                 <button
//                   onClick={() => {
//                     if (termUnit === "months") {
//                       setTermValue(Math.round(termValue / 12));
//                     }
//                     setTermUnit("years");
//                   }}
//                   className={`px-3 py-1 ${
//                     termUnit === "years"
//                       ? "bg-indigo-600 text-white"
//                       : "bg-white"
//                   }`}
//                 >
//                   Yr
//                 </button>
//                 <button
//                   onClick={() => {
//                     if (termUnit === "years") {
//                       setTermValue(Math.round(termValue * 12));
//                     }
//                     setTermUnit("months");
//                   }}
//                   className={`px-3 py-1 ${
//                     termUnit === "months"
//                       ? "bg-indigo-600 text-white"
//                       : "bg-white"
//                   }`}
//                 >
//                   Mo
//                 </button>
//               </div>

//               <input
//                 type="range"
//                 min={termUnit === "years" ? termMinYears : 1}
//                 max={termUnit === "years" ? termMaxYears : termMaxMonths}
//                 step={1}
//                 value={termValue}
//                 onChange={(e) => setTermValue(Number(e.target.value))}
//                 className="flex-1"
//               />

//               <div className="text-sm sm:w-24 text-right">
//                 {termUnit === "years"
//                   ? `${termValue} yr`
//                   : `${termValue} mo`}
//               </div>
//             </div>
//           </div>

//           {/* EMI Scheme */}
//           <div className="space-y-2">
//             <label className="font-medium">EMI Scheme</label>
//             <div className="flex flex-wrap gap-2">
//               {["advance", "arrears"].map((scheme) => (
//                 <button
//                   key={scheme}
//                   onClick={() => setEmiScheme(scheme)}
//                   className={`px-3 py-1 rounded-md text-sm font-medium transition ${
//                     emiScheme === scheme
//                       ? "bg-indigo-600 text-white"
//                       : "bg-gray-100 hover:bg-gray-200"
//                   }`}
//                 >
//                   {scheme === "advance" ? "EMI in Advance" : "EMI in Arrears"}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Right Summary */}
//         <div className="bg-gray-50 p-6 rounded-lg flex flex-col items-center gap-6">
//           <div className="text-center">
//             <h4 className="text-sm text-gray-500">Loan EMI</h4>
//             <p className="text-2xl font-bold">
//               ₹{formatCurrency(emi)}
//             </p>
//           </div>

//           <div className="w-full grid grid-cols-2 gap-4 text-sm">
//             <div className="bg-white p-3 rounded shadow-sm">
//               <div className="text-xs text-gray-500">Total Interest Payable</div>
//               <div className="font-semibold">{formatCurrencyWithSymbol(totalInterest)}</div>
//             </div>
//             <div className="bg-white p-3 rounded shadow-sm">
//               <div className="text-xs text-gray-500">Total Payment (P + I)</div>
//               <div className="font-semibold">{formatCurrencyWithSymbol(totalPayment)}</div>
//             </div>
//           </div>

//           {/* Donut Chart */}
//           <div className="flex flex-col sm:flex-row items-center gap-6">
//             <svg width="120" height="120" viewBox="0 0 120 120">
//               <g transform="translate(60,60)">
//                 <circle r="50" cx="0" cy="0" fill="transparent" strokeWidth="20" stroke="#E6E6E6" />
//                 <circle
//                   r="50"
//                   cx="0"
//                   cy="0"
//                   fill="transparent"
//                   stroke="#ED8C2B"
//                   strokeWidth="20"
//                   strokeDasharray={`${interestDash} ${principalDash}`}
//                   transform="rotate(-90)" />
//                 <text x="0" y="4" textAnchor="middle" fontSize="12" fontWeight="700">
//                   {interestPct}%
//                 </text>
//                 <text x="0" y="20" textAnchor="middle" fontSize="10" fill="#666">
//                   Interest
//                 </text>
//               </g>
//             </svg>

//             <div className="text-sm space-y-2">
//               <div className="flex items-center gap-2">
//                 <span className="w-3 h-3 bg-[#88A825] rounded-full inline-block" />
//                 <span>Principal:</span>
//                 <strong>{formatCurrencyWithSymbol(principalPart)}</strong>
//               </div>
//               <div className="flex items-center gap-2">
//                 <span className="w-3 h-3 bg-[#ED8C2B] rounded-full inline-block" />
//                 <span>Interest:</span>
//                 <strong>{formatCurrencyWithSymbol(interestPart)}</strong>
//               </div>
//             </div>
//           </div>

//           <div className="text-xs text-gray-500">
//             Break-up of total payment
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default EMICalculatorPage;


// "use client";
// import React, { useEffect, useState } from "react";

// function EMICalculatorPage() {
//   // Loan Type Configs
//   const loanConfigs = {
//     "home-loan": { amount: 3000000, rate: 8, tenure: 20 },
//     "personal-loan": { amount: 500000, rate: 12, tenure: 5 },
//     "car-loan": { amount: 1000000, rate: 9, tenure: 7 },
//     "mortgage-loan": { amount: 5000000, rate: 7.5, tenure: 25 },
//     "unsecured-business-loan": { amount: 2000000, rate: 14, tenure: 10 },
//   };

//   const [loanProduct, setLoanProduct] = useState("home-loan");
//   const [loanAmount, setLoanAmount] = useState(loanConfigs["home-loan"].amount);
//   const [interestRate, setInterestRate] = useState(loanConfigs["home-loan"].rate);
//   const [termValue, setTermValue] = useState(loanConfigs["home-loan"].tenure);
//   const [termUnit, setTermUnit] = useState("years");
//   const [emiScheme, setEmiScheme] = useState("arrears");

//   // Convert tenure to months
//   const months = termUnit === "years" ? Math.round(termValue * 12) : Math.round(termValue);

//   const [emi, setEmi] = useState(0);
//   const [totalInterest, setTotalInterest] = useState(0);
//   const [totalPayment, setTotalPayment] = useState(0);

//   // Format functions
//   const formatCurrency = (value) => {
//     try {
//       return value.toLocaleString("en-IN", { maximumFractionDigits: 0 });
//     } catch (e) {
//       return value;
//     }
//   };
//   const formatCurrencyWithSymbol = (value) => `₹${formatCurrency(value)}`;

//   // Recalculate EMI
//   useEffect(() => {
//     const r = interestRate / 100 / 12;
//     const n = Math.max(1, months);
//     const P = Math.max(0, loanAmount);

//     let monthlyEmi = 0;
//     if (r === 0) monthlyEmi = P / n;
//     else {
//       const pow = Math.pow(1 + r, n);
//       monthlyEmi = (P * r * pow) / (pow - 1);
//     }

//     if (emiScheme === "advance") {
//       const approxReduction = monthlyEmi * r;
//       monthlyEmi = Math.max(0, monthlyEmi - approxReduction);
//     }

//     const total = monthlyEmi * n;
//     const interest = Math.max(0, total - P);

//     setEmi(Math.round(monthlyEmi));
//     setTotalInterest(Math.round(interest));
//     setTotalPayment(Math.round(total));
//   }, [loanAmount, interestRate, months, emiScheme]);

//   // Input limits
//   const loanMin = 0;
//   const loanMax = 20000000;
//   const interestMin = 5;
//   const interestMax = 20;
//   const termMinYears = 0;
//   const termMaxYears = 30;
//   const termMaxMonths = 360;

//   // Donut chart values
//   const principalPart = Math.max(0, loanAmount);
//   const interestPart = Math.max(0, totalInterest);
//   const totalParts = principalPart + interestPart || 1;
//   const principalPct = Math.round((principalPart / totalParts) * 1000) / 10;
//   const interestPct = Math.round((interestPart / totalParts) * 1000) / 10;

//   const donutCircumference = 2 * Math.PI * 50;
//   const interestDash = (interestPart / totalParts) * donutCircumference;
//   const principalDash = donutCircumference - interestDash;

//   return (
//     <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
//       <h2 className="text-2xl font-semibold mb-6 text-center lg:text-center">
//         EMI Calculator
//       </h2>

//       <div className="bg-white shadow rounded-lg p-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
//         {/* Left Controls */}
//         <div className="lg:col-span-2 space-y-6">

//           {/* Loan Type Dropdown */}
//           <div className="space-y-2">
//             <label className="font-medium">Loan Type</label>
//             <select
//               value={loanProduct}
//               onChange={(e) => {
//                 const type = e.target.value;
//                 setLoanProduct(type);
//                 setLoanAmount(loanConfigs[type].amount);
//                 setInterestRate(loanConfigs[type].rate);
//                 setTermValue(loanConfigs[type].tenure);
//                 setTermUnit("years");

//                 // Navigate to different pages
//                 switch (type) {
//                   case "home-loan":
//                     // window.location.href = "/home-loan";
//                     break;
//                   case "personal-loan":
//                     // window.location.href = "/personal-loan";
//                     break;
//                   case "car-loan":
//                     // window.location.href = "/car-loan";
//                     break;
//                   case "mortgage-loan":
//                     // window.location.href = "/mortgage-loan";
//                     break;
//                   case "unsecured-business-loan":
//                     // window.location.href = "/unsecured-business-loan";
//                     break;
//                   default:
//                     break;
//                 }
//               }}
//               className="w-full border rounded px-3 py-2"
//             >
//               <option value="home-loan">Home Loan</option>
//               <option value="personal-loan">Personal Loan</option>
//               <option value="car-loan">Car Loan</option>
//               <option value="mortgage-loan">Mortgage Loan</option>
//               <option value="unsecured-business-loan">Unsecured Business Loan</option>
//             </select>
//           </div>

//           {/* Loan Amount */}
//           <div className="space-y-2">
//             <label className="font-medium">Loan Amount</label>
//             <div className="flex flex-col sm:flex-row items-center gap-3">
//               <input
//                 type="text"
//                 value={formatCurrency(loanAmount)}
//                 onChange={(e) => {
//                   const digits = e.target.value.replace(/[^0-9]/g, "");
//                   const val = Number(digits || 0);
//                   const rounded = Math.round(val / 10000) * 10000;
//                   setLoanAmount(Math.min(Math.max(rounded, loanMin), loanMax));
//                 }}
//                 className="w-full sm:flex-1 border rounded px-3 py-2"
//               />
//               <div className="sm:w-40 text-sm text-right font-semibold">
//                 {formatCurrencyWithSymbol(loanAmount)}
//               </div>
//             </div>
//             <input
//               type="range"
//               min={loanMin}
//               max={loanMax}
//               step={10000}
//               value={loanAmount}
//               onChange={(e) => setLoanAmount(Number(e.target.value))}
//               className="w-full"
//             />
//           </div>

//           {/* Interest Rate */}
//           <div className="space-y-2">
//             <label className="font-medium">Interest Rate (Annual %)</label>
//             <div className="flex flex-col sm:flex-row items-center gap-3">
//               <input
//       type="number"
//       value={
//         loanProduct === "home-loan"
//           ? 7.5
//           : loanProduct === "mortgage-loan"
//           ? 15
//           : loanProduct === "unsecured-business-loan"
//           ? 8.5
//           :loanProduct === "personal-loan"
//           ? 12
//           :loanProduct === "car-loan"
//           ?12.5
//           : interestRate
//       }
//       step="0.1"
//       onChange={(e) => setInterestRate(Number(e.target.value))}
//       className="w-full sm:w-28 border rounded px-3 py-2"
//       disabled={
//         loanProduct === "home-loan" ||
//         loanProduct === "mortgage-loan" ||
//         loanProduct === "unsecured-business-loan"||
//         loanProduct === "personal-loan" || 
//         loanProduct === "car-loan"
//       }
//     />
//               {loanProduct !== "home-loan" &&
//     loanProduct !== "mortgage-loan" &&
//     loanProduct !== "unsecured-business-loan" &&
//     loanProduct !== "personal-loan" &&
//     loanProduct !== "car-loan"
//     ? (
//       <>
//         <input
//           type="range"
//           min={interestMin}
//           max={interestMax}
//           step={0.1}
//           value={interestRate}
//           onChange={(e) => setInterestRate(Number(e.target.value))}
//           className="flex-1"
//         />
//         <span className="text-sm sm:w-16 text-right">{interestRate}%</span>
//       </>
//     ) : (
//       <span className="text-sm sm:w-16 text-right">
//         {loanProduct === "home-loan"
//           ? "7.5%"
//           : loanProduct === "mortgage-loan"
//           ? "15%"
//           : "8.5%"

//           }
//       </span>
//     )}
//             </div>
//           </div>

//           {/* Tenure */}
//           <div className="space-y-2">
//             <label className="font-medium">Loan Tenure</label>
//             <div className="flex flex-col sm:flex-row items-center gap-3">
//               <input
//                 type="number"
//                 value={termValue}
//                 min={termUnit === "years" ? termMinYears : 1}
//                 max={termUnit === "years" ? termMaxYears : termMaxMonths}
//                 onChange={(e) => setTermValue(Number(e.target.value))}
//                 className="w-full sm:w-24 border rounded px-3 py-2"
//               />

//               {/* Unit Toggle */}
//               <div className="inline-flex border rounded overflow-hidden">
//                 <button
//                   onClick={() => {
//                     if (termUnit === "months") {
//                       setTermValue(Math.round(termValue / 12));
//                     }
//                     setTermUnit("years");
//                   }}
//                   className={`px-3 py-1 ${termUnit === "years" ? "bg-indigo-600 text-white" : "bg-white"
//                     }`}
//                 >
//                   Yr
//                 </button>
//                 <button
//                   onClick={() => {
//                     if (termUnit === "years") {
//                       setTermValue(Math.round(termValue * 12));
//                     }
//                     setTermUnit("months");
//                   }}
//                   className={`px-3 py-1 ${termUnit === "months" ? "bg-indigo-600 text-white" : "bg-white"
//                     }`}
//                 >
//                   Mo
//                 </button>
//               </div>

//               <input
//                 type="range"
//                 min={termUnit === "years" ? termMinYears : 1}
//                 max={termUnit === "years" ? termMaxYears : termMaxMonths}
//                 step={1}
//                 value={termValue}
//                 onChange={(e) => setTermValue(Number(e.target.value))}
//                 className="flex-1"
//               />

//               <div className="text-sm sm:w-24 text-right">
//                 {termUnit === "years" ? `${termValue} yr` : `${termValue} mo`}
//               </div>
//             </div>
//           </div>

//           {/* EMI Scheme */}
//           <div className="space-y-2">
//             <label className="font-medium">EMI Scheme</label>
//             <div className="flex flex-wrap gap-2">
//               {["advance", "arrears"].map((scheme) => (
//                 <button
//                   key={scheme}
//                   onClick={() => setEmiScheme(scheme)}
//                   className={`px-3 py-1 rounded-md text-sm font-medium transition ${emiScheme === scheme
//                     ? "bg-indigo-600 text-white"
//                     : "bg-gray-100 hover:bg-gray-200"
//                     }`}
//                 >
//                   {scheme === "advance" ? "EMI in Advance" : "EMI in Arrears"}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Right Summary */}
//         <div className="bg-gray-50 p-6 rounded-lg flex flex-col items-center gap-6">
//           <div className="text-center">
//             <h4 className="text-sm text-gray-500">Loan EMI</h4>
//             <p className="text-2xl font-bold">₹{formatCurrency(emi)}</p>
//           </div>

//           <div className="w-full grid grid-cols-2 gap-4 text-sm">
//             <div className="bg-white p-3 rounded shadow-sm">
//               <div className="text-xs text-gray-500">Total Interest Payable</div>
//               <div className="font-semibold">{formatCurrencyWithSymbol(totalInterest)}</div>
//             </div>
//             <div className="bg-white p-3 rounded shadow-sm">
//               <div className="text-xs text-gray-500">Total Payment (P + I)</div>
//               <div className="font-semibold">{formatCurrencyWithSymbol(totalPayment)}</div>
//             </div>
//           </div>

//           {/* Donut Chart */}
//           <div className="flex flex-col sm:flex-row items-center gap-6">
//             <svg width="120" height="120" viewBox="0 0 120 120">
//               <g transform="translate(60,60)">
//                 <circle r="50" cx="0" cy="0" fill="transparent" strokeWidth="20" stroke="#E6E6E6" />
//                 <circle
//                   r="50"
//                   cx="0"
//                   cy="0"
//                   fill="transparent"
//                   stroke="#ED8C2B"
//                   strokeWidth="20"
//                   strokeDasharray={`${interestDash} ${principalDash}`}
//                   transform="rotate(-90)"
//                 />
//                 <text x="0" y="4" textAnchor="middle" fontSize="12" fontWeight="700">{interestPct}%</text>
//                 <text x="0" y="20" textAnchor="middle" fontSize="10" fill="#666">Interest</text>
//               </g>
//             </svg>

//             <div className="text-sm space-y-2">
//               <div className="flex items-center gap-2">
//                 <span className="w-3 h-3 bg-[#88A825] rounded-full inline-block" />
//                 <span>Principal:</span>
//                 <strong>{formatCurrencyWithSymbol(principalPart)}</strong>
//               </div>
//               <div className="flex items-center gap-2">
//                 <span className="w-3 h-3 bg-[#ED8C2B] rounded-full inline-block" />
//                 <span>Interest:</span>
//                 <strong>{formatCurrencyWithSymbol(interestPart)}</strong>
//               </div>
//             </div>
//           </div>

//           <div className="text-xs text-gray-500">Break-up of total payment</div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default EMICalculatorPage;
"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TextAnimate } from "../../../components/ui/text-animate";
import { SparklesText } from "../../../components/ui/sparkles-text";

const slideInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 2, ease: "easeOut" },
    },
};

function EMICalculatorPage() {
    // Loan Type Configs
    const loanConfigs = {
        "home-loan": { amount: 3000000, rate: 7.5, tenure: 20 },
        "personal-loan": { amount: 500000, rate: 12, tenure: 5 },
        "car-loan": { amount: 1000000, rate: 8.5, tenure: 7 },
        "used-car-loan": { amount: 800000, rate: 12.5, tenure: 5 },
        "mortgage-loan": { amount: 5000000, rate: 8.5, tenure: 25 },
        "unsecured-business-loan": { amount: 2000000, rate: 15, tenure: 10 },
    };

    const [loanProduct, setLoanProduct] = useState("home-loan");
    const [loanAmount, setLoanAmount] = useState(loanConfigs["home-loan"].amount);
    const [interestRate, setInterestRate] = useState(loanConfigs["home-loan"].rate);
    const [termValue, setTermValue] = useState(loanConfigs["home-loan"].tenure);
    const [termUnit, setTermUnit] = useState("years");
    const [emiScheme, setEmiScheme] = useState("arrears");

    // Convert tenure to months
    const months = termUnit === "years" ? Math.round(termValue * 12) : Math.round(termValue);

    const [emi, setEmi] = useState(0);
    const [totalInterest, setTotalInterest] = useState(0);
    const [totalPayment, setTotalPayment] = useState(0);

    // Format functions
    const formatCurrency = (value) => {
        try {
            return value.toLocaleString("en-IN", { maximumFractionDigits: 0 });
        } catch (e) {
            return value;
        }
    };
    const formatCurrencyWithSymbol = (value) => `₹${formatCurrency(value)}`;

    // Recalculate EMI
    useEffect(() => {
        const r = interestRate / 100 / 12;
        const n = Math.max(1, months);
        const P = Math.max(0, loanAmount);

        let monthlyEmi = 0;
        if (r === 0) monthlyEmi = P / n;
        else {
            const pow = Math.pow(1 + r, n);
            monthlyEmi = (P * r * pow) / (pow - 1);
        }

        if (emiScheme === "advance") {
            const approxReduction = monthlyEmi * r;
            monthlyEmi = Math.max(0, monthlyEmi - approxReduction);
        }

        const total = monthlyEmi * n;
        const interest = Math.max(0, total - P);

        setEmi(Math.round(monthlyEmi));
        setTotalInterest(Math.round(interest));
        setTotalPayment(Math.round(total));
    }, [loanAmount, interestRate, months, emiScheme]);

    // Input limits
    const loanMin = 0;
    const loanMax = 20000000;
    const termMinYears = 0;
    const termMaxYears = 30;
    const termMaxMonths = 360;

    // Donut chart values
    const principalPart = Math.max(0, loanAmount);
    const interestPart = Math.max(0, totalInterest);
    const totalParts = principalPart + interestPart || 1;
    const principalPct = Math.round((principalPart / totalParts) * 1000) / 10;
    const interestPct = Math.round((interestPart / totalParts) * 1000) / 10;

    const donutCircumference = 2 * Math.PI * 50;
    const interestDash = (interestPart / totalParts) * donutCircumference;
    const principalDash = donutCircumference - interestDash;

    return (
        <section className="py-16 px-4 bg-white dark:bg-black transition-colors duration-500">
            <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
                <motion.div
                    variants={slideInLeft}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="bg-transparent"
                >
                    <h2 className="text-2xl font-semibold mb-6 text-center text-green-900 dark:text-white my-[-20]">

                        <div className="font-bold tracking-wide tetx-3xl sm:text-4xl md:text-5xl lg:text-6xl">

                            <SparklesText >EMI CALCULATOR</SparklesText>
                        </div>

                    </h2>

                    <div className="bg-white dark:bg-white shadow-lg rounded-lg p-6 grid grid-cols-1 lg:grid-cols-3 gap-8 transition-colors duration-500">
                        {/* Left Controls */}
                        <div className="lg:col-span-2 space-y-6">
                            {/* Loan Type Dropdown */}
                            <div className="space-y-2">
                                <label className="font-medium text-gray-800 dark:text-black">
                                    Loan Type
                                </label>
                                <select
                                    value={loanProduct}
                                    onChange={(e) => {
                                        const type = e.target.value;
                                        setLoanProduct(type);
                                        setLoanAmount(loanConfigs[type].amount);
                                        setInterestRate(loanConfigs[type].rate);
                                        setTermValue(loanConfigs[type].tenure);
                                        setTermUnit("years");
                                    }}
                                    className="w-full border dark:border-black rounded px-3 py-2 bg-white dark:bg-black text-gray-900 dark:text-gray-100"
                                >
                                    <option value="home-loan">Home Loan</option>
                                    <option value="personal-loan">Personal Loan</option>
                                    <option value="car-loan">New Car Loan</option>
                                    <option value="used-car-loan">Used Car Loan</option>
                                    <option value="mortgage-loan">Mortgage Loan</option>
                                    <option value="unsecured-business-loan">
                                        Unsecured Business Loan
                                    </option>
                                </select>
                            </div>

                            {/* Loan Amount */}
                            <div className="space-y-2">
                                <label className="font-medium text-gray-800 dark:text-black">
                                    Loan Amount
                                </label>
                                <div className="flex flex-col sm:flex-row items-center gap-3">
                                    <input
                                        type="number"
                                        min={loanMin}
                                        max={loanMax}
                                        step={10000}
                                        value={loanAmount}
                                        onChange={(e) => setLoanAmount(Number(e.target.value))}
                                        onBlur={(e) => {
                                            // Round to nearest 10,000 on blur
                                            let val = Number(e.target.value);
                                            if (isNaN(val)) val = loanMin;
                                            const rounded = Math.round(val / 10000) * 10000;
                                            setLoanAmount(Math.min(Math.max(rounded, loanMin), loanMax));
                                        }}
                                        className="w-full sm:flex-1 border dark:border-black rounded px-3 py-2 bg-white dark:bg-black text-gray-900 dark:text-gray-100"
                                    />
                                    <div className="sm:w-40 text-sm text-right font-semibold text-gray-800 dark:text-black">
                                        {formatCurrencyWithSymbol(loanAmount)}
                                    </div>
                                </div>
                                <input
                                    type="range"
                                    min={loanMin}
                                    max={loanMax}
                                    step={10000}
                                    value={loanAmount}
                                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                                    className="w-full accent-green-700 dark:accent-black"
                                />
                            </div>

                            {/* Interest Rate */}
                            <div className="space-y-2">
                                <label className="font-medium text-gray-800 dark:text-black">
                                    Interest Rate (Annual %)
                                </label>
                                <div className="text-sm sm:w-16 text-right font-semibold text-gray-800 dark:text-black">
                                    {interestRate}%
                                </div>
                            </div>

                            {/* Tenure */}
                            <div className="space-y-2">
                                <label className="font-medium text-gray-800 dark:text-black">
                                    Loan Tenure
                                </label>
                                <div className="flex flex-col sm:flex-row items-center gap-3">
                                    <input
                                        type="number"
                                        value={termValue}
                                        min={termUnit === "years" ? termMinYears : 1}
                                        max={termUnit === "years" ? termMaxYears : termMaxMonths}
                                        onChange={(e) => setTermValue(Number(e.target.value))}
                                        className="w-full sm:w-24 border dark:border-black rounded px-3 py-2 bg-white dark:bg-black text-gray-900 dark:text-gray-100"
                                    />

                                    {/* Unit Toggle */}
                                    <div className="inline-flex border dark:border-black rounded overflow-hidden">
                                        <button
                                            onClick={() => {
                                                if (termUnit === "months")
                                                    setTermValue(Math.round(termValue / 12));
                                                setTermUnit("years");
                                            }}
                                            className={`px-3 py-1 ${termUnit === "years"
                                                ? "bg-black text-white"
                                                : "bg-white dark:bg-gray-700 dark:text-gray-200"
                                                }`}
                                        >
                                            Yr
                                        </button>
                                        <button
                                            onClick={() => {
                                                if (termUnit === "years")
                                                    setTermValue(Math.round(termValue * 12));
                                                setTermUnit("months");
                                            }}
                                            className={`px-3 py-1 ${termUnit === "months"
                                                ? "bg-black text-white"
                                                : "bg-white dark:bg-gray-700 dark:text-gray-200"
                                                }`}
                                        >
                                            Mo
                                        </button>
                                    </div>

                                    <input
                                        type="range"
                                        min={termUnit === "years" ? termMinYears : 1}
                                        max={termUnit === "years" ? termMaxYears : termMaxMonths}
                                        step={1}
                                        value={termValue}
                                        onChange={(e) => setTermValue(Number(e.target.value))}
                                        className="flex-1 accent-green-700 dark:accent-black"
                                    />

                                    <div className="text-sm sm:w-24 text-right text-gray-800 dark:text-black">
                                        {termUnit === "years" ? `${termValue} yr` : `${termValue} mo`}
                                    </div>
                                </div>
                            </div>

                            {/* EMI Scheme */}
                            <div className="space-y-2">
                                <label className="font-medium text-gray-800 dark:text-black">
                                    EMI Scheme
                                </label>
                                <div className="flex flex-wrap gap-2">
                                    {["advance", "arrears"].map((scheme) => (
                                        <button
                                            key={scheme}
                                            onClick={() => setEmiScheme(scheme)}
                                            className={`px-3 py-1 rounded-md text-sm font-medium transition ${emiScheme === scheme
                                                ? "bg-black text-white"
                                                : "bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-200"
                                                }`}
                                        >
                                            {scheme === "advance"
                                                ? "EMI in Advance"
                                                : "EMI in Arrears"}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Summary */}
                        <div className="bg-gray-50 dark:bg-gray-100 p-6 rounded-lg flex flex-col items-center gap-6 transition-colors duration-500">
                            <div className="text-center">
                                <h4 className="text-sm text-green-900 dark:text-black">
                                    Loan EMI
                                </h4>
                                <p className="text-2xl font-bold text-green-900 dark:text-black">
                                    ₹{formatCurrency(emi)}
                                </p>
                            </div>

                            <div className="w-full grid grid-cols-2 gap-4 text-sm">
                                <div className="bg-white dark:bg-black p-3 rounded shadow-sm">
                                    <div className="text-xs text-gray-500 dark:text-white">
                                        Total Interest Payable
                                    </div>
                                    <div className="font-semibold text-green-900 dark:text-green-200">
                                        {formatCurrencyWithSymbol(totalInterest)}
                                    </div>
                                </div>
                                <div className="bg-white dark:bg-black p-3 rounded shadow-sm">
                                    <div className="text-xs text-gray-500 dark:text-white">
                                        Total Payment (P + I)
                                    </div>
                                    <div className="font-semibold text-green-900 dark:text-green-200">
                                        {formatCurrencyWithSymbol(totalPayment)}
                                    </div>
                                </div>
                            </div>

                            {/* Donut Chart */}
                            <div className="flex flex-col sm:flex-row items-center gap-6">
                                <svg width="120" height="120" viewBox="0 0 120 120">
                                    <g transform="translate(60,60)">
                                        <circle
                                            r="50"
                                            cx="0"
                                            cy="0"
                                            fill="transparent"
                                            strokeWidth="20"
                                            stroke="#E6E6E6"
                                        />
                                        <circle
                                            r="50"
                                            cx="0"
                                            cy="0"
                                            fill="transparent"
                                            stroke="#ED8C2B"
                                            strokeWidth="20"
                                            strokeDasharray={`${interestDash} ${principalDash}`}
                                            transform="rotate(-90)"
                                        />
                                        <text
                                            x="0"
                                            y="4"
                                            textAnchor="middle"
                                            fontSize="12"
                                            fontWeight="700"
                                            fill="#ED8C2B"
                                        >
                                            {interestPct}%
                                        </text>
                                        <text
                                            x="0"
                                            y="20"
                                            textAnchor="middle"
                                            fontSize="10"
                                            fill="#888"
                                        >
                                            Interest
                                        </text>
                                    </g>
                                </svg>

                                <div className="text-sm space-y-2 text-gray-800 dark:text-black">
                                    <div className="flex items-center gap-2">
                                        <span className="w-3 h-3 bg-[#88A825] rounded-full inline-block" />
                                        <span>Principal:</span>
                                        <strong>{formatCurrencyWithSymbol(principalPart)}</strong>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="w-3 h-3 bg-[#ED8C2B] rounded-full inline-block" />
                                        <span>Interest:</span>
                                        <strong>{formatCurrencyWithSymbol(interestPart)}</strong>
                                    </div>
                                </div>
                            </div>

                            <div className="text-xs text-green-900 dark:text-black">
                                Break-up of total payment
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default EMICalculatorPage;
