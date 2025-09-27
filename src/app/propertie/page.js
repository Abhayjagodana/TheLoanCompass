"use client"

import Link from "next/link";
import Image from "next/image";

function Properties() {

  const properties = [
    {
      id: 7,
      img: "https://secureedgesolution.com/public/images/1739875617_64985b48d5c49cb783ec44c66b080aa7.webp",
      title: "Luxury 3BHK Apartment in Prime Location",
      price: "₹ 1.5 Crore",
      size: "1,500 sq. ft.",
      location: "Mithila Heights, Abrama Rd, opp....",
      type: "Residential",
      link: "/",
    },
    {
      id: 8,
      img: "https://secureedgesolution.com/public/images/1740218596_home1.webp",
      title: "Luxury 3BHK Apartment in Prime Location",
      price: "₹ 1.5 Crore",
      size: "1,500 sq. ft.",
      location: "Mithila Heights, Abrama Rd, opp....",
      type: "Residential",
      link: "https://secureedgesolution.com/single-properties/8",
    },
  ];
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

      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {properties.map((property) => (
              <div
                key={property.id}
                className="bg-white shadow-sm rounded-lg overflow-hidden"
              >
                {/* Image */}
                <Link href={`/singlepropertie`}>
                  <div className="relative h-56 w-full">
                    <Image
                      src={property.img}
                      alt={property.title}
                      fill   // ✅ correct usage
                      className="object-cover"
                    />
                  </div>
                </Link>

                {/* Content */}
                <div className="p-4 relative">
                  {/* Category Badge */}
                  <span className="absolute -top-4 left-4 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                    {property.type}
                  </span>

                  <h4 className="text-lg font-semibold mt-4 leading-snug">
                    <Link href={property.link}>{property.title}</Link>
                  </h4>

                  <Link href={property.link}>
                    <h6 className="text-blue-700 font-bold text-md mt-2">
                      {property.price}
                    </h6>
                  </Link>

                  <p className="text-sm text-gray-600 mt-2">
                    <i className="fa fa-arrow-right mr-2"></i>
                    <Link href={property.link}>{property.size}</Link>
                  </p>

                  <p className="text-sm text-gray-600">
                    <i className="fa fa-map-marker mr-2"></i>
                    <Link href={property.link}>{property.location}</Link>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
export default Properties;




