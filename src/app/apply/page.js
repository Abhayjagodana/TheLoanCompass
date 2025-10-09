// "use client";

// import { Clock, Mail, MapPin, Phone } from "lucide-react";
// import { useState } from "react";
// import toast, { Toaster } from "react-hot-toast";

// export default function ContactPage() {
//     const [formData, setFormData] = useState({
//         name: "",
//         number: "",
//         loan_type: "",
//         subject: "",
//         message: "",
//     });
//     const [loading, setLoading] = useState(false);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         // --- Validation ---
//         if (!/^[A-Za-z\s]+$/.test(formData.name)) {
//             toast.error("Full Name should contain only letters and spaces.");
//             return;
//         }
//         if (!/^\d{10}$/.test(formData.number)) {
//             toast.error("Number must be exactly 10 digits.");
//             return;
//         }
//         if (!formData.loan_type) {
//             toast.error("Please select a loan type.");
//             return;
//         }
//         if (formData.message.length < 5) {
//             toast.error("Message must be at least 5 characters long.");
//             return;
//         }

//         setLoading(true);
//         try {
//             const res = await fetch("/api/contact-submit", {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify(formData),
//             });

//             if (res.ok) {
//                 toast.success("Form submitted successfully!");
//                 setFormData({ name: "", number: "", loan_type: "", subject: "", message: "" });
//             } else {
//                 toast.error("Failed to submit form.");
//             }
//         } catch (err) {
//             console.error(err);
//             toast.error("An error occurred.");
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div>
//             <section className="relative w-full bg-gradient-to-r from-green-900 to-green-900 min-h-[25vh] flex items-center justify-center my-24 animate-slide-right delay-300">
//                 <div className="absolute inset-0 bg-black/10"></div>
//                 <div className="relative z-10 text-center px-4">
//                     <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
//                         Contact
//                     </h1>
//                 </div>
//                 <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-green-900 to-transparent"></div>
//                 <style jsx>{`
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
//             </section>

//             <div className="bg-gray-50 min-h-screen py-16 my-20">
//                 <Toaster position="top-right" />
//                 <div className="container mx-auto px-4 lg:flex lg:gap-16">
//                     {/* Contact Info */}
//                     <div className="lg:w-5/12 mb-12 lg:mb-0">
//                         <h2 className="text-3xl font-bold mb-8 text-green-900">Get in touch with us.</h2>
//                         <div className="text-gray-600 mb-8">
//                             <div className="space-y-2">
//                                 <p>Want to get in touch? We&#39;d love to hear from you.</p>
//                                 <p>Here&#39;s how you can reach us...</p>
//                             </div>
//                         </div>
//                         <div className="grid grid-cols-2 gap-4">
//                             <div className="w-full sm:col-span-1">
//                                 <div className="flex items-start sm:items-center gap-3 p-4 rounded shadow-sm bg-white h-full">
//                                     <Phone className="w-6 h-6 text-blue-600 flex-shrink-0" />
//                                     <div className="flex flex-col">
//                                         <p className="text-green-900 font-bold text-sm sm:text-base">
//                                             Call the helpline:
//                                         </p>
//                                         <span className="font-medium text-gray-800 text-sm sm:text-base break-all">
//                                             +91-9624459515
//                                         </span>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className="w-full sm:col-span-1">
//                                 <div className="flex items-start sm:items-center gap-3 p-4 rounded shadow-sm bg-white h-full">
//                                     <Mail className="w-6 h-6 text-blue-600 flex-shrink-0" />
//                                     <div className="flex flex-col">
//                                         <p className="text-green-900 font-bold text-sm sm:text-base">Email us:</p>
//                                         <span className="font-medium text-gray-800 text-sm sm:text-base break-all">
//                                             bj@theloancompass.in
//                                         </span>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className="w-full mt-6">
//                                 <div className="flex items-start sm:items-center gap-3 p-4 rounded shadow-sm bg-white h-full">
//                                     <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0" />
//                                     <div className="flex flex-col">
//                                         <p className="text-green-900 font-bold text-sm sm:text-base">Location</p>
//                                         <span className="font-medium text-gray-800 text-sm sm:text-base break-words">
//                                             201, Balaji Enclave, Nr Nanpura old, Police Chowki, Nanpura, Surat, Gujarat - 395009
//                                         </span>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className="w-full mt-6">
//                                 <div className="flex items-start sm:items-center gap-3 p-4 rounded shadow-sm bg-white h-full">
//                                     <Clock className="w-6 h-6 text-blue-600 flex-shrink-0" />
//                                     <div className="flex flex-col">
//                                         <p className="text-green-900 font-bold text-sm sm:text-base">Work Hours</p>
//                                         <span className="font-medium text-gray-800 text-sm sm:text-base break-words">
//                                             Monday - Saturday: 9am - 7pm | Sunday: 12pm - 6pm
//                                         </span>
//                                     </div>
//                                 </div>
//                             </div>

//                         </div>
//                     </div>

//                     {/* Contact Form */}
//                     <div className="lg:w-7/12">
//                         <div className="p-8 rounded-xl">
//                             <h3 className="text-2xl font-bold mb-6 text-center text-green-900">Send a Message</h3>
//                             <form onSubmit={handleSubmit} className="space-y-4">

//                                 {/* Full Name */}
//                                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                                     {/* Full Name */}
//                                     <div>
//                                         <label
//                                             htmlFor="name"
//                                             className="text-blue-900 font-bold block mb-1 font-sans"
//                                         >
//                                             Full Name
//                                         </label>
//                                         <input
//                                             id="name"
//                                             type="text"
//                                             name="name"
//                                             placeholder="Your Name"
//                                             value={formData.name}
//                                             onChange={handleChange}
//                                             required
//                                             className="w-full border border-gray-300 rounded px-4 py-3 focus:ring-2 focus:ring-blue-500"
//                                         />
//                                     </div>

//                                     {/* Number */}
//                                     <div>
//                                         <label
//                                             htmlFor="number"
//                                             className="text-blue-900 font-bold block mb-1 font-sans"
//                                         >
//                                             Number
//                                         </label>
//                                         <input
//                                             id="number"
//                                             type="tel"
//                                             name="number"
//                                             placeholder="91xxxxxxxxxx"
//                                             value={formData.number}
//                                             onChange={handleChange}
//                                             required
//                                             className="w-full border border-gray-300 rounded px-4 py-3 focus:ring-2 focus:ring-blue-500"
//                                         />
//                                     </div>
//                                 </div>

//                                 {/* Loan Type */}
//                                 <div>
//                                     <label
//                                         htmlFor="loan_type"
//                                         className="text-blue-900 font-bold block mb-1"
//                                     >
//                                         Select Loan Type
//                                     </label>
//                                     <select
//                                         id="loan_type"
//                                         name="loan_type"
//                                         value={formData.loan_type}
//                                         onChange={handleChange}
//                                         required
//                                         className="w-full border border-gray-300 rounded px-4 py-2 
//                focus:ring-2 focus:ring-blue-500 bg-white text-gray-800"
//                                     >
//                                         <option value="" className="bg-white text-gray-400">
//                                             Select Loan Type
//                                         </option>
//                                         <option value="home" className="bg-white text-gray-400">
//                                             Home Loan
//                                         </option>
//                                         <option value="property" className="bg-white text-gray-400">
//                                             Property Loan
//                                         </option>
//                                         <option value="personal" className="bg-white text-gray-400">
//                                             Personal Loan
//                                         </option>
//                                         <option value="business" className="bg-white text-gray-400">
//                                             Unsecured Business Loan
//                                         </option>
//                                         <option value="capital" className="bg-white text-gray-400">
//                                             Working Capital
//                                         </option>
//                                         <option value="cgtmse" className="bg-white text-gray-400">
//                                             CGTMSE
//                                         </option>
//                                         <option value="lrd" className="bg-white text-gray-400">
//                                             LRD
//                                         </option>
//                                         <option value="transfer" className="bg-white text-gray-400">
//                                             Balance Transfer
//                                         </option>
//                                         <option value="car" className="bg-white text-gray-400">
//                                             Car Loans
//                                         </option>
//                                     </select>
//                                 </div>


//                                 {/* Subject */}
//                                 <div>
//                                     <label htmlFor="subject" className="text-blue-900 font-bold block mb-1">
//                                         Subject
//                                     </label>
//                                     <input
//                                         id="subject"
//                                         type="text"
//                                         name="subject"
//                                         placeholder="Subject"
//                                         value={formData.subject}
//                                         onChange={handleChange}
//                                         required
//                                         className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-blue-500"
//                                     />
//                                 </div>

//                                 {/* Message */}
//                                 <div>
//                                     <label htmlFor="message" className="text-blue-900 font-bold block mb-1">
//                                         Message
//                                     </label>
//                                     <textarea
//                                         id="message"
//                                         name="message"
//                                         placeholder="Your message..."
//                                         rows="5"
//                                         value={formData.message}
//                                         onChange={handleChange}
//                                         required
//                                         className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-blue-500"
//                                     />
//                                 </div>

//                                 {/* Submit Button */}
//                                 <button
//                                     type="submit"
//                                     disabled={loading}
//                                     className={`w-full bg-green-900 text-white font-semibold py-3 rounded hover:bg-green-700 transition ${loading ? "opacity-70 cursor-not-allowed" : ""
//                                         }`}
//                                 >
//                                     {loading ? "Submitting..." : "Submit Now"}
//                                 </button>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         </div>
//     );
// }
"use client";

import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

 function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    loan_type: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!/^[A-Za-z\s]+$/.test(formData.name)) {
      toast.error("Full Name should contain only letters.");
      return;
    }
    if (!/^\d{10}$/.test(formData.number)) {
      toast.error("Enter a valid 10-digit mobile number.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/contact-submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        toast.success("Form submitted successfully!");
        setFormData({
          name: "",
          number: "",
          loan_type: "",
          subject: "",
          message: "",
        });
      } else {
        toast.error(data.message || "Submission failed.");
      }
    } catch (err) {
      console.error("Error:", err);
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <section className="relative w-full bg-gradient-to-r from-green-900 to-green-900 min-h-[25vh] flex items-center justify-center my-24">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            Contact
          </h1>
        </div>
      </section>

      <div className="bg-gray-50 min-h-screen py-16">
        <Toaster position="top-right" />
        <div className="container mx-auto px-4 lg:flex lg:gap-16">
          {/* Contact Info */}
          <div className="lg:w-5/12 mb-12 lg:mb-0">
            <h2 className="text-3xl font-bold mb-8 text-green-900">
              Get in touch with us.
            </h2>
            <p className="text-gray-600 mb-8">
              We’d love to hear from you. Here’s how you can reach us.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <InfoBox icon={<Phone />} title="Call the helpline:" value="+91-9624459515" />
              <InfoBox icon={<Mail />} title="Email us:" value="bj@theloancompass.in" />
              <InfoBox
                icon={<MapPin />}
                title="Location"
                value="201, Balaji Enclave, Nr Nanpura old Police Chowki, Nanpura, Surat, Gujarat - 395009"
              />
              <InfoBox
                icon={<Clock />}
                title="Work Hours"
                value="Mon - Sat: 9am - 7pm | Sun: 12pm - 6pm"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-7/12">
            <div className="p-8 rounded-xl bg-white shadow">
              <h3 className="text-2xl font-bold mb-6 text-center text-green-900">
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <InputField
                    label="Full Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                  />
                  <InputField
                    label="Number"
                    name="number"
                    value={formData.number}
                    onChange={handleChange}
                    placeholder="91xxxxxxxxxx"
                  />
                </div>

                <div>
                  <label className="font-bold text-blue-900 block mb-1">
                    Select Loan Type
                  </label>
                  <select
                    name="loan_type"
                    value={formData.loan_type}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-4 py-3 focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select Loan Type</option>
                    <option value="home">Home Loan</option>
                    <option value="property">Property Loan</option>
                    <option value="personal">Personal Loan</option>
                    <option value="business">Unsecured Business Loan</option>
                    <option value="capital">Working Capital</option>
                    <option value="transfer">Balance Transfer</option>
                    <option value="car">Car Loan</option>
                  </select>
                </div>

                <InputField
                  label="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                />
                <InputField
                  label="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  isTextarea
                />

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full bg-green-900 text-white font-semibold py-3 rounded hover:bg-green-700 transition ${loading ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                >
                  {loading ? "Submitting..." : "Submit Now"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoBox({ icon, title, value }) {
  return (
    <div className="flex items-start gap-3 p-4 rounded shadow-sm bg-white h-full">
      <div className="text-blue-600 w-6 h-6">{icon}</div>
      <div>
        <p className="text-green-900 font-bold">{title}</p>
        <span className="font-medium text-gray-800 text-sm break-words">{value}</span>
      </div>
    </div>
  );
}

function InputField({ label, name, value, onChange, placeholder, isTextarea }) {
  return (
    <div>
      <label className="font-bold text-blue-900 block mb-1">{label}</label>
      {isTextarea ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          rows="5"
          placeholder={placeholder}
          required
          className="w-full border border-gray-300 rounded px-4 py-3 focus:ring-2 focus:ring-blue-500"
        />
      ) : (
        <input
          type="text"
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required
          className="w-full border border-gray-300 rounded px-4 py-3 focus:ring-2 focus:ring-blue-500"
        />
      )}
    </div>
  );
}

export default ContactPage
