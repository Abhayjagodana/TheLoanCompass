// "use client"
// import PropertyDetail from "../componet/PropertyDetail";

// function SinglePropertyPage() {


//     const property = {
//         id: 1,
//         type: "Residential",
//         title: "Luxury 3BHK Apartment in Prime Location",
//         price: "₹1.5 Crore",
//         size: "1,500 sq. ft.",
//         location:
//             "Mithila Heights, Abrama Rd, opp. Gokuldham Road, Mota Varachha, Surat, Gujarat 394105",
//         shortDescription: "A touch screen terminal with latest technology.",
//         description:
//             "This luxury 3BHK apartment offers a perfect blend of comfort and modern living...",
//         media: [
//             { type: "video", src: "image.webp" },
//             { type: "image", src: "https://secureedgesolution.com/public/images/1739875617_64985b48d5c49cb783ec44c66b080aa7.webp" },
//             { type: "image", src: "https://secureedgesolution.com/public/images/image2.webp" },
//             { type: "image", src: "https://secureedgesolution.com/public/images/image3.webp" },
//         ],
//     };

//     return (
//         <div>
//             <section className="relative w-full bg-gradient-to-r from-blue-800 to-blue-700 min-h-[25vh] flex items-center my-28 animate-slide-right delay-300">
//                 {/* Overlay optional for text shadow */}
//                 <div className="absolute inset-0 bg-black opacity-10"></div>

//                 <div className="container mx-auto px-4 relative z-10 text-center">
//                     <h1 className="text-2xl md:text-4xl font-extrabold text-white drop-shadow-lg">
//                         Properties Details
//                     </h1>
//                 </div>

//                 {/* Optional bottom gradient for smooth transition */}
//                 <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-blue-800 to-transparent"></div>
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
//             <PropertyDetail property={property} />;

//         </div>
//     )
// }
// export default SinglePropertyPage

"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Mail, Phone, ArrowRight, MapPin, X } from "lucide-react"; // Correct icon names

export default function PropertyBox() {
    const slides = [
        {
            type: "image",
            src: "https://secureedgesolution.com/public/images/1739875617_64985b48d5c49cb783ec44c66b080aa7.webp",
            alt: "Property Image 1",
        },
        {
            type: "image",
            src: "https://secureedgesolution.com/public/images/1739875617_webpc-passthru (2).webp",
            alt: "Property Image 2",
        },
        {
            type: "image",
            src: "https://secureedgesolution.com/public/images/1739875617_webpc-passthru (1).webp",
            alt: "Property Image 3",
        },
        {
            type: "image",
            src: "https://secureedgesolution.com/public/images/1739875617_webpc-passthru.webp",
            alt: "Property Image 4",
        },
        {
            type: "video",
            src: "https://secureedgesolution.com/public/video/1739875617_FDownloader.Net_AQMC1EJRs-yBAqeL28wFX6orS1SN52js16ImTUTSSUWbTD4cbh_mQP7bwgK2PwOOSW-T8fe3RPgxo5W_KclxTHTg_720p_(HD).mp4",
        },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);
    const [showInquiry, setShowInquiry] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Validation
        const nameRegex = /^[A-Za-z\s]+$/;
        const phoneRegex = /^[0-9]{10}$/;

        if (!nameRegex.test(formData.name)) {
            setSuccess("Full name should contain only letters.");
            return;
        }

        if (!formData.email) {
            setSuccess("Email is required.");
            return;
        }

        if (!phoneRegex.test(formData.phone)) {
            setSuccess("Phone number should be exactly 10 digits.");
            return;
        }

        if (formData.message.length < 5) {
            setSuccess("Message should be at least 5 characters.");
            return;
        }
        setLoading(true);
        try {
            const res = await fetch("/api/inquiry", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setSuccess("Inquiry submitted successfully!");
                setFormData({ name: "", email: "", phone: "", message: "" });
            } else {
                setSuccess("Failed to submit. Please try again.");
            }
        } catch (error) {
            console.error(error);
            setSuccess("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 3000); // Change slide every 3 seconds
        return () => clearInterval(interval);
    }, [slides.length]);

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

    return (
        <div>
            <section className="relative w-full bg-gradient-to-r from-blue-800 to-blue-700 min-h-[25vh] flex items-center my-28 animate-slide-right delay-300">
                {/* Overlay optional for text shadow */}
                <div className="absolute inset-0 bg-black opacity-10"></div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-2xl md:text-4xl font-extrabold text-white drop-shadow-lg">
                        Properties

                    </h1>
                </div>

                {/* Optional bottom gradient for smooth transition */}
                <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-blue-800 to-transparent"></div>
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
            <section className="py-10 bg-gray-50 my-20 animate-slide-right delay-300">
                <div className="container mx-auto px-4">
                    <div className="bg-white shadow-lg p-6 rounded-lg">
                        <div className="flex flex-col lg:flex-row gap-8">
                            {/* Left Column */}
                            <div className="lg:w-1/2">
                                <h6 className="text-blue-700 font-semibold">Residential</h6>
                                <h2 className="text-3xl font-bold my-4">
                                    Luxury 3BHK Apartment in Prime Location
                                </h2>
                                <ul className="list-none space-y-3 mb-4">
                                    <li>₹ 1.5 Crore</li>
                                    <li className="flex items-center gap-1">
                                        <ArrowRight size={16} /> 1,500 sq. ft.
                                    </li>
                                    <li className="flex items-center gap-1">
                                        <MapPin size={16} />
                                        Mithila Heights, Abrama Rd, opp. Gokuldham Road, Mota Varachha, Surat, Gujarat 394105
                                    </li>
                                </ul>
                                <hr className="my-4 border-black" />
                                <p className="mb-2">
                                    A touch screen terminal with the latest payment technology and minimalistic design.
                                </p>
                                <p>
                                    This luxury 3BHK apartment offers a perfect blend of comfort and modern living.
                                    Situated in a prime location, it provides easy access to schools, hospitals, shopping
                                    centers, and more. The spacious living area with large windows brings in ample natural
                                    light, giving the home an airy and welcoming vibe. Each of the 3 bedrooms comes with
                                    built-in wardrobes, and the modular kitchen is equipped with the latest appliances.
                                    The apartment also features high-end flooring, stylish bathrooms, and balconies with
                                    scenic views.
                                    <br />
                                    <br />
                                    This residential property is ideal for families looking for a luxurious lifestyle in a
                                    peaceful neighborhood. With top-notch amenities like 24/7 security, power backup,
                                    swimming pool, and gym, this property ensures that you live a comfortable and
                                    convenient life.
                                </p>
                            </div>

                            {/* Right Column */}
                            <div className="lg:w-1/2 flex flex-col">
                                <div className="relative rounded-lg overflow-hidden shadow-md mb-4">
                                    {slides[currentSlide].type === "image" ? (
                                        <Image
                                            src={slides[currentSlide].src}
                                            alt={slides[currentSlide].alt}
                                            width={500}
                                            height={300}
                                            className="w-full h-auto object-cover rounded-lg"
                                        />
                                    ) : (
                                        <video
                                            src={slides[currentSlide].src}
                                            controls
                                            autoPlay
                                            muted
                                            className="w-full h-auto rounded-lg"
                                        />
                                    )}

                                    {/* Slider Arrows */}
                                    <button
                                        onClick={prevSlide}
                                        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-200"
                                    >
                                        &#10094;
                                    </button>
                                    <button
                                        onClick={nextSlide}
                                        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-200"
                                    >
                                        &#10095;
                                    </button>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex gap-4 mt-4">
                                    <button
                                        onClick={() => setShowInquiry(true)}
                                        className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-purple-500 text-white py-2 rounded-full font-semibold hover:bg-blue-700 transition"
                                    >
                                        <Mail size={20} /> Inquiry
                                    </button>

                                    {/* Modal */}
                                    {showInquiry && (
                                        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
                                            <div className="bg-white rounded-lg p-6 w-full max-w-md relative">
                                                <button
                                                    onClick={() => setShowInquiry(false)}
                                                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                                                >
                                                    <X size={24} />
                                                </button>
                                                <h2 className="text-2xl font-bold mb-4 text-blue-700">Send Inquiry</h2>
                                                {success && <p className="text-green-600 mb-2">{success}</p>}
                                                <form onSubmit={handleSubmit} className="space-y-4">
                                                    <div>
                                                        <label className="block font-bold text-blue-900 mb-1">Full Name</label>
                                                        <input
                                                            type="text"
                                                            name="name"
                                                            value={formData.name}
                                                            onChange={handleChange}
                                                            required
                                                            className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-500"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block font-bold text-blue-900 mb-1">Email</label>
                                                        <input
                                                            type="email"
                                                            name="email"
                                                            value={formData.email}
                                                            onChange={handleChange}
                                                            required
                                                            className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-500"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block font-bold text-blue-900 mb-1">Phone Number</label>
                                                        <input
                                                            type="tel"
                                                            name="phone"
                                                            value={formData.phone}
                                                            onChange={handleChange}
                                                            required
                                                            className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-500"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block font-bold text-blue-900 mb-1">Message</label>
                                                        <textarea
                                                            name="message"
                                                            value={formData.message}
                                                            onChange={handleChange}
                                                            required
                                                            rows={4}
                                                            className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-500"
                                                        ></textarea>
                                                    </div>
                                                    <button
                                                        type="submit"
                                                        disabled={loading}
                                                        className={`w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 ${loading ? "opacity-70 cursor-not-allowed" : ""
                                                            }`}
                                                    >
                                                        {loading ? "Submitting..." : "Submit"}
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                    )}
                                    <a
                                        href="https://wa.me/8320539885?text=hello i want to more this properties details."
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1  flex items-center w-48 justify-center gap-2 bg-green-600 text-white py-2 rounded-full font-semibold hover:bg-green-700"
                                    >
                                        <Phone size={20} /> WhatsApp
                                    </a>
                                </div>

                                {/* Share Buttons */}
                                <div className="mt-6 space-x-2 flex flex-wrap">
                                    {/* Example for one button, replicate for others
                <a
                  href="https://www.addtoany.com/share#url=https%3A%2F%2Fsecureedgesolution.com%2Fsingle-properties%2F7&amp;title=Secure%20Edge"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 bg-blue-600 text-white rounded-lg flex items-center gap-1"
                >
                  Share
                </a> */}
                                </div>
                            </div>

                        </div>
                        <hr className="my-4 border-black " />

                        <div className="flex flex-wrap gap-3 mt-4">
                            {/* Share */}
                            {/* <a
        href="https://www.addtoany.com/share#url=https%3A%2F%2Fsecureedgesolution.com%2Fsingle-properties%2F7&title=Secure%20Edge"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-3 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width="20"
          height="20"
          fill="white"
        >
          <g fill="white">
            <path d="M14 7h4v18h-4z"></path>
            <path d="M7 14h18v4H7z"></path>
          </g>
        </svg>
        Share
      </a> */}

                            {/* Facebook */}
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-3 py-2 rounded bg-blue-700 text-white hover:bg-blue-800 transition"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 32 32"
                                    width="20"
                                    height="20"
                                    fill="white"
                                >
                                    <path d="M28 16c0-6.627-5.373-12-12-12S4 9.373 4 16c0 5.628 3.875 10.35 9.101 11.647v-7.98h-2.474V16H13.1v-1.58c0-4.085 1.849-5.978 5.859-5.978.76 0 2.072.15 2.608.298v3.325c-.283-.03-.775-.045-1.386-.045-1.967 0-2.728.745-2.728 2.683V16h3.92l-.673 3.667h-3.247v8.245C23.395 27.195 28 22.135 28 16"></path>
                                </svg>
                                Facebook
                            </a>

                            {/* Email */}
                            <a
                                href="mailto:someone@example.com"
                                className="flex items-center gap-2 px-3 py-2 rounded bg-gray-500 text-white hover:bg-gray-600 transition"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 32 32"
                                    width="20"
                                    height="20"
                                    fill="white"
                                >
                                    <path d="M27 21.775v-9.9s-10.01 6.985-10.982 7.348C15.058 18.878 5 11.875 5 11.875v9.9c0 1.375.293 1.65 1.65 1.65h18.7c1.393 0 1.65-.242 1.65-1.65m-.017-11.841c0-1.002-.291-1.359-1.633-1.359H6.65c-1.38 0-1.65.429-1.65 1.43l.016.154s9.939 6.842 11 7.216C17.14 16.941 27 10.005 27 10.005z"></path>
                                </svg>
                                Email
                            </a>

                            {/* WhatsApp */}
                            <a
                                href="https://wa.me/8320539885?text=hello%20i%20want%20to%20more%20this%20properties%20details"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-3 py-2 rounded bg-green-500 text-white hover:bg-green-600 transition"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 32 32"
                                    width="20"
                                    height="20"
                                    fill="white"
                                >
                                    <path d="M16.21 4.41C9.973 4.41 4.917 9.465 4.917 15.7c0 2.134.592 4.13 1.62 5.832L4.5 27.59l6.25-2.002a11.24 11.24 0 0 0 5.46 1.404c6.234 0 11.29-5.055 11.29-11.29 0-6.237-5.056-11.292-11.29-11.292m0 20.69c-1.91 0-3.69-.57-5.173-1.553l-3.61 1.156 1.173-3.49a9.35 9.35 0 0 1-1.79-5.512c0-5.18 4.217-9.4 9.4-9.4s9.397 4.22 9.397 9.4c0 5.188-4.214 9.4-9.398 9.4zm5.293-6.832c-.284-.155-1.673-.906-1.934-1.012-.265-.106-.455-.16-.658.12s-.78.91-.954 1.096c-.176.186-.345.203-.628.048-.282-.154-1.2-.494-2.264-1.517-.83-.795-1.373-1.76-1.53-2.055s0-.445.15-.584c.134-.124.3-.326.45-.488.15-.163.203-.28.306-.47.104-.19.06-.36-.005-.506-.066-.147-.59-1.587-.81-2.173-.218-.586-.46-.498-.63-.505-.168-.007-.358-.038-.55-.045-.19-.007-.51.054-.78.332-.277.274-1.05.943-1.1 2.362-.055 1.418.926 2.826 1.064 3.023.137.2 1.874 3.272 4.76 4.537 2.888 1.264 2.9.878 3.43.85.53-.027 1.734-.633 2-1.297s.287-1.24.22-1.363c-.07-.123-.26-.203-.54-.357z"></path>
                                </svg>
                                WhatsApp
                            </a>

                            {/* Telegram */}
                            <a
                                href="https://t.me/yourchannel"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-3 py-2 rounded bg-sky-500 text-white hover:bg-sky-600 transition"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 32 32"
                                    width="20"
                                    height="20"
                                    fill="white"
                                >
                                    <path d="M25.515 6.896 6.027 14.41c-1.33.534-1.322 1.276-.243 1.606l5 1.56 1.72 5.66c.226.625.115.873.77.873.506 0 .73-.235 1.012-.51l2.43-2.363 5.056 3.734c.93.514 1.602.25 1.834-.863l3.32-15.638c.338-1.363-.52-1.98-1.41-1.577z"></path>
                                </svg>
                                Telegram
                            </a>

                            {/* LinkedIn */}
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-3 py-2 rounded bg-blue-800 text-white hover:bg-blue-900 transition"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 32 32"
                                    width="20"
                                    height="20"
                                    fill="white"
                                >
                                    <path d="M6.227 12.61h4.19v13.48h-4.19zm2.095-6.7a2.43 2.43 0 0 1 0 4.86c-1.344 0-2.428-1.09-2.428-2.43s1.084-2.43 2.428-2.43m4.72 6.7h4.02v1.84h.058c.56-1.058 1.927-2.176 3.965-2.176 4.238 0 5.02 2.792 5.02 6.42v7.395h-4.183v-6.56c0-1.564-.03-3.574-2.178-3.574-2.18 0-2.514 1.7-2.514 3.46v6.668h-4.187z"></path>
                                </svg>
                                LinkedIn
                            </a>
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
