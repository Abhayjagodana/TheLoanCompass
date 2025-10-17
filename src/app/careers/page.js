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

        // Validation
        const nameRegex = /^[A-Za-z\s]+$/;
        const numberRegex = /^[0-9]{10}$/;

        if (!formData.name || !nameRegex.test(formData.name)) {
            return toast.error("Full Name must contain letters only.");
        }
        if (!formData.number || !numberRegex.test(formData.number)) {
            return toast.error("Number must be exactly 10 digits.");
        }
        if (!formData.email) {
            return toast.error("Email is required.");
        }
        if (!formData.job_type.length) {
            return toast.error("Please select at least one Job Type.");
        }
        if (!formData.message || formData.message.length < 5) {
            return toast.error("Message must be at least 5 characters.");
        }
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
            <Toaster position="top-right" reverseOrder={false} />

            {/* Header Section */}
            <section className="relative w-full bg-gradient-to-r from-green-900 to-green-900 min-h-[25vh] flex items-center justify-center mb-0 my-24  animate-slide-right delay-300">
                <div className="absolute inset-0 bg-black opacity-10"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-3xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-5xl font-extrabold text-white drop-shadow-lg">
                        Careers
                    </h1>

                </div>
                <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-green-900 to-transparent"></div>
            </section>

            {/* Form Section */}
            <section className="py-10 sm:py-14">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto bg-white p-8 sm:p-10 md:p-12 rounded-xl shadow-xl">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-green-900">
                            Apply for a Job
                        </h2>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Name */}
                            <div>
                                <label className="block mb-2 font-semibold text-gray-700">
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-700 transition"
                                />
                            </div>

                            {/* Number */}
                            <div>
                                <label className="block mb-2 font-semibold text-gray-700">
                                    Number *
                                </label>
                                <input
                                    type="tel"
                                    name="number"
                                    value={formData.number}
                                    onChange={handleChange}
                                    required
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-700 transition"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block mb-2 font-semibold text-gray-700">
                                    Email *
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-700 transition"
                                />
                            </div>

                            {/* Job Type */}
                            <div>
                                <label className="block mb-2 font-semibold text-gray-700">
                                    Job Type
                                </label>
                                <div className="flex flex-wrap gap-3">
                                    {["Job channel", "Partnership", "Salesman"].map((job) => (
                                        <label
                                            key={job}
                                            className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg cursor-pointer hover:bg-green-50 transition"
                                        >
                                            <input
                                                type="checkbox"
                                                name="job_type"
                                                value={job}
                                                checked={formData.job_type.includes(job)}
                                                onChange={handleChange}
                                                className="form-checkbox h-5 w-5 text-green-700"
                                            />
                                            <span className="text-gray-700 font-medium">{job}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Message */}
                            <div>
                                <label className="block mb-2 font-semibold text-gray-700">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-700 transition"
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={loading}
                                className={`w-full bg-green-900 text-white font-semibold py-3 rounded-lg hover:bg-green-700 transition flex justify-center items-center gap-2 ${loading ? "opacity-70 cursor-not-allowed" : ""
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
