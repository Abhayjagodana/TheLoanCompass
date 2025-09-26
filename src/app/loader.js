"use client";

import Image from "next/image";
import logo from "/finallogo.png"; // place finallogo.png inside /public folder

export default function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      {/* Rotating Logo */}
      <div className="animate-spin-slow">
        <Image
          src={logo}
          alt="Loading..."
          width={120}
          height={120}
          priority
        />
      </div>
    </div>
  );
}
