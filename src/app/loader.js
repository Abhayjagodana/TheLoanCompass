// "use client";

// import { useState, useEffect } from "react";
// import { usePathname } from "next/navigation";
// import Image from "next/image";

// function Loader() {
//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
//       <Image
//         src="/logo-1.png"
//         alt="Logo"
//         width={100}
//         height={100}
//         className="animate-spin-slow"
//       />
//     </div>
//   );
// }

// export default function RouteLoader({ children }) {
//   const [loading, setLoading] = useState(false);
//   const pathname = usePathname();

//   useEffect(() => {
//     // When route changes, show loader
//     setLoading(true);
//     const timer = setTimeout(() => setLoading(false), 1000); // Adjust duration
//     return () => clearTimeout(timer);
//   }, [pathname]);

//   return (
//     <>
//       {loading && <Loader />}
//       <div className={`${loading ? "opacity-0" : "opacity-100"} transition-opacity duration-300`}>
//         {children}
//       </div>
//     </>
//   );
// }
"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

function Loader() {
  return (
   <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      {/* Spinning Border with Static Logo */}
      <div className="relative w-32 h-32 flex items-center justify-center">
        {/* Spinning border */}
        <div className="absolute inset-0 rounded-full border-4 border-blue-500 border-t-transparent animate-spin-slow"></div>

        {/* Static logo in center */}
        <Image
          src="/23.jpg"
          alt="The Loan Compass"
          width={80}
          height={80}
          className="object-contain"
        />
      </div>

      {/* Static Text */}
      <p className="mt-6 text-xl font-bold text-blue-700">
        The Loan Compass
      </p>
    </div>
  );
}

export default function RouteLoader({ children }) {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1000); // Adjust delay
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      {loading && <Loader />}
      <div
        className={`${
          loading ? "opacity-0" : "opacity-100"
        } transition-opacity duration-300`}
      >
        {children}
      </div>
    </>
  );
}
