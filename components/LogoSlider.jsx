"use client";

import Image from "next/image";

export default function LogoSlider({
  logos = [
    "/images/logo1.png",
    "/images/logo2.png",
    "/images/logo3.png",
    "/images/logo4.png",
    "/images/logo5.png",
    "/images/logo6.png",
    "/images/logo7.png",
  ],
  text = "1000+ companies manage their contracts with",
  highlightedText = "Tomorro",
  className = ""
}) {
  return (
    <div className={`bg-white py-8 sm:py-10 overflow-hidden h-auto sm:h-[270px] justify-center items-center flex flex-col px-4 ${className}`}>
      <div className="text-center mb-6 sm:mb-10">
        <span className="text-base sm:text-lg text-[#26402B] font-medium leading-relaxed">
          {text} <span className="font-semibold">{highlightedText}</span>
        </span>
      </div>

      {/* Slider container */}
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-scroll" style={{ width: '200%' }}>
          {/* Repeat logos twice for infinite effect */}
          {[...logos, ...logos].map((logo, index) => (
            <div key={index} className="flex-shrink-0 mx-3 sm:mx-6">
              <Image
                src={logo}
                alt={`logo-${index}`}
                width={80}
                height={40}
                className="object-contain opacity-80 hover:opacity-100 transition-opacity duration-300 w-16 h-8 sm:w-20 sm:h-10 lg:w-24 lg:h-12"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
