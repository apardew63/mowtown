"use client";

import Button from "./Button";

export default function HeroSection({
  title = "Large Scale Commercial\nMaintenance and Landscape Construction.",
  subtitle = "Mowtown Outdoors is the go-to choice for commercial landscaping services in Tulsa, Oklahoma. We have been providing reliable and professional service since 1999, and have become a trusted name in the industry. Our services include large-scale landscape maintenance, commercial landscape construction, and commercial maintenance. We aim to provide quality and dependable service to all of our clients, and ensure that your commercial property looks its best all year round.",
  backgroundImage = "/images/hero.png",
  buttonText = "Learn More",
  onButtonClick = () => {},
  className = ""
}) {
  return (
    <section
      className={`min-h-[90vh] bg-cover bg-center flex items-center justify-start text-left text-white font-inter ${className}`}
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-start w-full">
        <div className="justify-start text-left max-w-7xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold mb-4 sm:mb-6 leading-tight md:leading-[72px] uppercase">
            {title.split('\n').map((line, index) => (
              <span key={index}>
                {line}
                {index < title.split('\n').length - 1 && <br />}
              </span>
            ))}
          </h1>
          <p className="text-base sm:text-lg text-white max-w-4xl mb-6 sm:mb-8">
            {subtitle}
          </p>

          <Button
            variant="secondary"
            size="medium"
            onClick={onButtonClick}
            className="mx-auto lg:mx-0"
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </section>
  );
}
