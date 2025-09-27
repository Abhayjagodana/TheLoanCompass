"use client";

import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

function Career() {
    const [formData, setFormData] = useState({
        name: "",
        number: "",
        email: "",
        job_type: [],
        message: "",
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === "checkbox") {
            let newJobType = [...formData.job_type];
            if (checked) newJobType.push(value);
            else newJobType = newJobType.filter((item) => item !== value);
            setFormData({ ...formData, job_type: newJobType });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await fetch("/api/career-submit", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                toast.success("Form submitted successfully!");
                setFormData({
                    name: "",
                    number: "",
                    email: "",
                    job_type: [],
                    message: "",
                });
            } else {
                toast.error("Failed to submit form.");
            }
        } catch (error) {
            console.error(error);
            toast.error("An error occurred.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Toast container */}
            <Toaster position="top-right" reverseOrder={false} />

            {/* Header Section */}
            <section className="relative w-full bg-gradient-to-r from-blue-800 to-blue-700 min-h-[25vh] flex items-center justify-center my-24 animate-slide-right delay-300">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative z-10 text-center px-4">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
                        Careers
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

            {/* Form Section */}
            <section className="py-12 sm:py-16 lg:py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto bg-white p-8 sm:p-10 md:p-12 rounded-xl shadow-xl">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-gray-800">
                            Apply for a Job
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Name */}
                            <div>
                                <label className="block mb-2 font-semibold text-gray-700">Full Name *</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                                />
                            </div>

                            {/* Number */}
                            <div>
                                <label className="block mb-2 font-semibold text-gray-700">Number *</label>
                                <input
                                    type="tel"
                                    name="number"
                                    value={formData.number}
                                    onChange={handleChange}
                                    required
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block mb-2 font-semibold text-gray-700">Email *</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                                />
                            </div>

                            {/* Job Type */}
                            <div>
                                <label className="block mb-2 font-semibold text-gray-700">Job Type</label>
                                <div className="flex flex-wrap gap-4">
                                    {["Job channel", "Partnership", "Salesman"].map((job) => (
                                        <label
                                            key={job}
                                            className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg cursor-pointer hover:bg-blue-50 transition"
                                        >
                                            <input
                                                type="checkbox"
                                                name="job_type"
                                                value={job}
                                                checked={formData.job_type.includes(job)}
                                                onChange={handleChange}
                                                className="form-checkbox h-5 w-5 text-blue-600"
                                            />
                                            <span className="text-gray-700 font-medium">{job}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Message */}
                            <div>
                                <label className="block mb-2 font-semibold text-gray-700">Message</label>
                                <textarea
                                    name="message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={loading}
                                className={`w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition flex justify-center items-center gap-2 ${loading ? "opacity-70 cursor-not-allowed" : ""
                                    }`}
                            >
                                {loading ? "Submitting..." : "Apply Now"}
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Career;
