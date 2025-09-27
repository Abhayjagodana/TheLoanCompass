"use client";

import { Clock, Mail  , MapPin, Phone } from "lucide-react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        number: "",
        loan_type: "",
        subject: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await fetch("/api/contact-submit", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                toast.success("Form submitted successfully!");
                setFormData({ name: "", number: "", loan_type: "", subject: "", message: "" });
            } else {
                toast.error("Failed to submit form.");
            }
        } catch (err) {
            console.error(err);
            toast.error("An error occurred.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
             <section className="relative w-full bg-gradient-to-r from-blue-800 to-blue-700 min-h-[25vh] flex items-center justify-center my-24 animate-slide-right delay-300">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative z-10 text-center px-4">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
                        Contact
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
            <div className="bg-gray-50 min-h-screen py-16 my-20">
                <Toaster position="top-right" />
                <div className="container mx-auto px-4 lg:flex lg:gap-16">
                    {/* Contact Info */}
                    <div className="lg:w-5/12 mb-12 lg:mb-0">
                        <h2 className="text-3xl font-bold mb-8 text-blue-900">Get in touch with us.</h2>
                        <p className="text-gray-600 mb-8">
                            Want to get in touch? We'd love to hear from you. Here's how you can reach us...
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="col-sm-6">
                                <div className="flex items-center gap-3 p-4 rounded shadow-sm bg-white">
                                    <Phone className="w-6 h-6 text-blue-600" />
                                    <div>
                                        <p className="text-blue-900 font-bold">Call the helpline:</p>
                                        <span className="font-medium">+91-9624459515</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="flex items-center gap-3 p-4 rounded shadow-sm bg-white">
                                    <Mail className="w-6 h-6 text-blue-600" />
                                    <div>
                                        <p className="text-blue-900 font-bold">Email us:</p>
                                        <span className="font-medium">bj@theloancompass.in</span>
                                    </div>
                                </div>
                            </div>
                            <div className="get-touch-box mt-6">
                                <div className="flex items-center gap-3 p-4 rounded shadow-sm bg-white">
                                    <MapPin size={32} className="w-20 h-20 text-blue-600" />
                                    <div>
                                        <p className="text-blue-900 font-bold">Location</p>
                                        <span className="font-medium text-sm">
                                            201, Balaji Enclave, Nr Nanpura old , Police Chowki , Nanpura ,Surat, Gujarat - 395009
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="get-touch-box mt-6">
                                <div className="flex items-center gap-3 p-4 rounded shadow-sm bg-white">
                                    <Clock className="w-8 h-8 text-blue-600" />
                                    <div>
                                        <p className="text-blue-900 font-bold">Work Hours</p>
                                        <span className="font-medium text-sm">
                                            Monday - Saturday: 9am - 7pm | Sunday: 12pm - 6pm
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:w-7/12">
                        <div className="p-8 rounded-xl">
                            <h3 className="text-2xl font-bold mb-6 text-center">Send a Message</h3>
                            <form onSubmit={handleSubmit} className="space-y-4">

                                {/* Full Name */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Full Name */}
                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="text-blue-900 font-bold block mb-1 font-sans"
                                        >
                                            Full Name
                                        </label>
                                        <input
                                            id="name"
                                            type="text"
                                            name="name"
                                            placeholder="Your Name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full border border-gray-300 rounded px-4 py-3 focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>

                                    {/* Number */}
                                    <div>
                                        <label
                                            htmlFor="number"
                                            className="text-blue-900 font-bold block mb-1 font-sans"
                                        >
                                            Number
                                        </label>
                                        <input
                                            id="number"
                                            type="tel"
                                            name="number"
                                            placeholder="91xxxxxxxxxx"
                                            value={formData.number}
                                            onChange={handleChange}
                                            required
                                            className="w-full border border-gray-300 rounded px-4 py-3 focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>
                                </div>

                                {/* Loan Type */}
                                <div>
                                    <label
                                        htmlFor="loan_type"
                                        className="text-blue-900 font-bold block mb-1"
                                    >
                                        Select Loan Type
                                    </label>
                                    <select
                                        id="loan_type"
                                        name="loan_type"
                                        value={formData.loan_type}
                                        onChange={handleChange}
                                        required
                                        className="w-full border border-gray-300 rounded px-4 py-2 
               focus:ring-2 focus:ring-blue-500 bg-white text-gray-800"
                                    >
                                        <option value="" className="bg-white text-gray-400">
                                            Select Loan Type
                                        </option>
                                        <option value="home" className="bg-white text-gray-400">
                                            Home Loan
                                        </option>
                                        <option value="property" className="bg-white text-gray-400">
                                            Property Loan
                                        </option>
                                        <option value="personal" className="bg-white text-gray-400">
                                            Personal Loan
                                        </option>
                                        <option value="business" className="bg-white text-gray-400">
                                            Unsecured Business Loan
                                        </option>
                                        <option value="capital" className="bg-white text-gray-400">
                                            Working Capital
                                        </option>
                                        <option value="cgtmse" className="bg-white text-gray-400">
                                            CGTMSE
                                        </option>
                                        <option value="lrd" className="bg-white text-gray-400">
                                            LRD
                                        </option>
                                        <option value="transfer" className="bg-white text-gray-400">
                                            Balance Transfer
                                        </option>
                                        <option value="car" className="bg-white text-gray-400">
                                            Car Loans
                                        </option>
                                    </select>
                                </div>


                                {/* Subject */}
                                <div>
                                    <label htmlFor="subject" className="text-blue-900 font-bold block mb-1">
                                        Subject
                                    </label>
                                    <input
                                        id="subject"
                                        type="text"
                                        name="subject"
                                        placeholder="Subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                {/* Message */}
                                <div>
                                    <label htmlFor="message" className="text-blue-900 font-bold block mb-1">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        placeholder="Your message..."
                                        rows="5"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className={`w-full bg-blue-600 text-white font-semibold py-3 rounded hover:bg-blue-700 transition ${loading ? "opacity-70 cursor-not-allowed" : ""
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
