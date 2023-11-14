"use client";
import React from "react";

import Image from "next/image";
// import logo
import NemoLogo from "../f2.png";

export default function Logo() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 flex items-center justify-between">
      <div className="flex-shrink-0">
        <Image
          id="LogoNav"
          src={NemoLogo}
          alt="Your Company"
          width={100} // Adjust the width as needed
          height={100} // Adjust the height as needed
        />
      </div>
    </div>
  );
}
