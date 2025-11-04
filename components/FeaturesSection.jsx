"use client";

import Button from "./Button";

export default function FeatureSection({
  title = "Schools, Municipalities & General Contractors",
  subtitle = "Experience the Difference with Mowtown Outdoors",
  description = "At Mowtown Outdoors, we understand that Landscaping Construction and Commercial Maintenance require time and effort to maintain a healthy and aesthetically pleasing outdoor space. That's why we provide services for Schools, Municipalities, and Sub-Contractors tailored to your needs. Our family-owned business in Tulsa, Oklahoma has been serving satisfied clients since 1999, with over 24 years of dedication and excellence.",
  image = "/images/HeroFeature.png",
  buttonText = "Learn More",
  onButtonClick = () => {},
  backgroundImage = "/images/Features.png",
  className = ""
}) {
  return (
    <section
      className={`bg-[#26402B] text-white py-12 sm:py-16 px-4 sm:px-6 font-aeonik ${className}`}
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10">
        {/* Left Content */}
        <div className="flex-1 space-y-4 sm:space-y-6 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-[#26402B]">
            {title.split('&').map((part, index) => (
              <span key={index}>
                {part.trim()}
                {index < title.split('&').length - 1 && <br />}
              </span>
            ))}
          </h1>
          <p className="text-[#26402B] text-base sm:text-lg font-normal">
            {subtitle}
          </p>

          <p className="leading-relaxed text-[#26402B] text-base sm:text-lg font-normal">
            {description.split('1999').map((part, index) => (
              <span key={index}>
                {part}
                {index < description.split('1999').length - 1 && (
                  <span className="font-semibold text-white">1999</span>
                )}
              </span>
            ))}
          </p>
          {/* CTA Button */}
          <Button
            variant="primary"
            size="medium"
            onClick={onButtonClick}
            className="mx-auto lg:mx-0"
          >
            {buttonText}
          </Button>
        </div>

        {/* Right Image */}
        <div className="flex-1 mt-8 lg:mt-0">
          <img
            src={image}
            alt="Mowtown Feature"
            className="w-full h-auto rounded-xl shadow-lg object-cover"
          />
        </div>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10 px-4 sm:px-6 py-12 sm:py-16">
        {/* Left Content */}
        <div className="flex-1 space-y-4 sm:space-y-6 text-center lg:text-left">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-[#26402B]">
            Municipalities
          </h1>

          <p className="leading-relaxed text-[#26402B] text-sm sm:text-base font-normal">
            Transforming your municipality's outdoor spaces into vibrant,
            inviting havens has never been easier with Mowtown Outdoors at your
            service. We understand the demanding responsibilities that
            municipality officials shoulder daily, so we're here to alleviate
            the burden of lawn and landscaping maintenance. Our expert team
            at Mowtown Outdoors specialize in cultivating lush, manicured lawns
            and stunning landscapes that exude civic pride
          </p>

          {/* CTA Button */}
          <button className="relative overflow-hidden group flex items-center gap-2 border-2 border-[#26402B] text-[#26402B] px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-all duration-500 mt-4 mx-auto lg:mx-0">
            <span className="relative z-10 flex items-center gap-2 transition-all duration-300 group-hover:text-white">
              Learn More
              <span className="p-2 sm:p-3 bg-[#4A9F44] rounded-md transition-transform duration-500 group-hover:rotate-90">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 sm:h-5 sm:w-5 text-white transition-transform duration-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 10l7-7 7 7M12 3v18"
                  />
                </svg>
              </span>
            </span>
            <span className="absolute inset-0 bg-[#4A9F44] w-0 group-hover:w-full transition-all duration-500 ease-out origin-right"></span>
          </button>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center mt-8 lg:mt-0">
          <img
            src="/images/Service1.png"
            alt="Mowtown Feature"
            className="w-full max-w-sm sm:max-w-md lg:max-w-lg h-auto rounded-xl shadow-lg object-cover"
          />
        </div>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10 px-4 sm:px-6 py-12 sm:py-16">
        {/* Left Content */}
        <div className="flex-1 space-y-4 sm:space-y-6 text-center lg:text-left">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-[#26402B]">
            General Contractors
          </h1>

          <p className="leading-relaxed text-[#26402B] text-sm sm:text-base font-normal">
            Mowtown Outdoors is the perfect choice for general contractors
            looking for sub-contracting services. Mowtown Outdoor brings a
            wealth of experience, cutting-edge techniques, and a passionate team
            dedicated to transforming outdoor spaces. Our seasoned
            professionals possess an intricate understanding of landscape
            dynamics, environmental considerations, and design
            intricacies, ensuring each project is meticulously crafted to
            perfection.
          </p>

          {/* CTA Button */}
          <button className="relative overflow-hidden group flex items-center gap-2 border-2 border-[#26402B] text-[#26402B] px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-all duration-500 mt-4 mx-auto lg:mx-0">
            <span className="relative z-10 flex items-center gap-2 transition-all duration-300 group-hover:text-white">
              Learn More
              <span className="p-2 sm:p-3 bg-[#4A9F44] rounded-md transition-transform duration-500 group-hover:rotate-90">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 sm:h-5 sm:w-5 text-white transition-transform duration-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 10l7-7 7 7M12 3v18"
                  />
                </svg>
              </span>
            </span>
            <span className="absolute inset-0 bg-[#4A9F44] w-0 group-hover:w-full transition-all duration-500 ease-out origin-right"></span>
          </button>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center mt-8 lg:mt-0">
          <img
            src="/images/Service2.png"
            alt="Mowtown Feature"
            className="w-full max-w-sm sm:max-w-md lg:max-w-lg h-auto rounded-xl shadow-lg object-cover"
          />
        </div>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10 px-4 sm:px-6 py-12 sm:py-16">
        {/* Left Content */}
        <div className="flex-1 space-y-4 sm:space-y-6 text-center lg:text-left">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-[#26402B]">
            Schools
          </h1>

          <p className="leading-relaxed text-[#26402B] text-sm sm:text-base font-normal">
            The premier solution for all your school's lawn care and landscaping
            needs. As dedicated educators and administrators, you have countless
            responsibilities to ensure a nurturing environment for your
            students. With Mowtown Outdoors, we take the burden of lawn
            maintenance off your shoulders, allowing you to focus on what truly
            matters—educating and shaping young minds. Our team of skilled
            professionals specializes in creating pristine and inviting outdoor
            spaces that reflect the excellence of your institution
          </p>

          {/* CTA Button */}
          <button className="relative overflow-hidden group flex items-center gap-2 border-2 border-[#26402B] text-[#26402B] px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-all duration-500 mt-4 mx-auto lg:mx-0">
            <span className="relative z-10 flex items-center gap-2 transition-all duration-300 group-hover:text-white">
              Learn More
              <span className="p-2 sm:p-3 bg-[#4A9F44] rounded-md transition-transform duration-500 group-hover:rotate-90">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 sm:h-5 sm:w-5 text-white transition-transform duration-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 10l7-7 7 7M12 3v18"
                  />
                </svg>
              </span>
            </span>
            <span className="absolute inset-0 bg-[#4A9F44] w-0 group-hover:w-full transition-all duration-500 ease-out origin-right"></span>
          </button>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center mt-8 lg:mt-0">
          <img
            src="/images/Service3.png"
            alt="Mowtown Feature"
            className="w-full max-w-sm sm:max-w-md lg:max-w-lg h-auto rounded-xl shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}
