"use client";

import Image from "next/image";

export default function LogoSlider() {
  const logos = [
    "/images/logo1.png",
    "/images/logo2.png",
    "/images/logo3.png",
    "/images/logo4.png",
    "/images/logo5.png",
    "/images/logo6.png",
    "/images/logo7.png",
  ];

  return (
    <div className="bg-white py-10 overflow-hidden h-[270px] justify-center items-center flex flex-col">
      <div className="text-center mb-10">
        <span className="text-[18px] text-[#26402B] font-medium leading-[28px]">
          1000+ companies manage their contracts with <span className="font-semibold">Tomorro</span>
        </span>
      </div>

      {/* Slider container */}
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-scroll" style={{ width: '200%' }}>
          {/* Repeat logos twice for infinite effect */}
          {[...logos, ...logos].map((logo, index) => (
            <div key={index} className="flex-shrink-0 mx-6">
              <Image
                src={logo}
                alt={`logo-${index}`}
                width={120}
                height={60}
                className="object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
