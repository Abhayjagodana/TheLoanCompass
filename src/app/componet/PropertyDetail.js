"use client";
import Image from "next/image"; // ✅ Correct import

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function PropertyDetail({ property }) {
    // Slider settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        adaptiveHeight: true,
    };

    return (
        <section className="py-12 bg-gray-50 my-24">
            <div className="container mx-auto px-4">
                <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
                    <div className="grid lg:grid-cols-2 gap-8 p-6 lg:p-12">

                        {/* Left Column */}
                        <div className="space-y-4">
                            <span className="inline-block bg-blue-100 text-blue-700 font-semibold px-3 py-1 rounded-full text-sm">
                                {property.type}
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                                {property.title}
                            </h2>

                            <ul className="list-none space-y-2 text-gray-700">
                                <li className="text-lg font-semibold">{property.price}</li>
                                <li className="flex items-center gap-2">
                                    <i className="fa fa-arrow-right text-blue-600"></i>
                                    {property.size}
                                </li>
                                <li className="flex items-center gap-2">
                                    <i className="fa fa-map-marker text-red-500"></i>
                                    {property.location}
                                </li>
                            </ul>

                            <hr className="my-4 border-gray-200" />
                            <p className="text-gray-700">{property.shortDescription}</p>
                            <p className="text-gray-700">{property.description}</p>
                        </div>

                        {/* Right Column */}
                        <div className="space-y-4">
                            {/* Image/Video Slider */}
                            <Slider {...settings} className="rounded-xl overflow-hidden shadow-lg">
                                {property.media.map((item, index) => (
                                    <div key={index} className="relative">
                                        {item.type === "image" ? (
                                            <Image
                                                src={item.src}
                                                alt={`Property ${index + 1}`}
                                                className="w-full h-96 md:h-[28rem] object-cover rounded-xl"
                                            />
                                        ) : (
                                            <video
                                                src={item.src}
                                                className="w-full h-96 md:h-[28rem] object-cover rounded-xl"
                                                controls
                                                autoPlay
                                                muted
                                            />
                                        )}
                                    </div>
                                ))}
                            </Slider>

                            {/* Action Buttons */}
                            <div className="grid grid-cols-2 gap-4">
                                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg flex items-center justify-center transition-all duration-300">
                                    <i className="fa fa-envelope mr-2"></i> Inquiry
                                </button>
                                <a
                                    href={`https://wa.me/8320539885?text=Hello, I want more details about ${property.title}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg flex items-center justify-center transition-all duration-300"
                                >
                                    <i className="fab fa-whatsapp mr-2"></i> WhatsApp
                                </a>
                            </div>

                            {/* Social Share */}
                            <div className="mt-4">
                                <div className="a2a_kit a2a_kit_size_32 a2a_default_style">
                                    <a
                                        className="a2a_dd text-gray-700 font-semibold hover:text-blue-600"
                                        href={`https://www.addtoany.com/share#url=https://example.com/properties/${property.id}&title=${property.title}`}
                                    >
                                        Share
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
