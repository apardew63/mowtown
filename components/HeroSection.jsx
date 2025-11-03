export default function HeroSection() {
  return (
    <section
      className="h-[90vh] bg-cover bg-center flex items-center justify-start text-left text-white font-inter"
      style={{ backgroundImage: "url('/images/hero.png')" }}
    >
      <div className="max-w-[1280px] mx-auto px-6 flex flex-col justify-start">
        <div className="justify-start text-left md:max-w-7xl">
          <h1 className="text-[42px] md:text-[54px] font-bold mb-6 leading-[72px] uppercase">
            Large Scale Commercial
            <br /> Maintenance and Landscape Construction.
          </h1>
          <p className="text-[18px] text-white max-w-4xl mb-8">
            Mowtown Outdoors is the go-to choice for commercial landscaping
            services in Tulsa, Oklahoma. We have been providing reliable and
            professional service since 1999, and have become a trusted name in
            the industry. Our services include large-scale landscape
            maintenance, commercial landscape construction, and commercial
            maintenance. We aim to provide quality and dependable service to all
            of our clients, and ensure that your commercial property looks its
            best all year round.
          </p>

          <button className="relative overflow-hidden group flex items-center gap-2 border-2 border-white text-white px-2 py-1 rounded-lg transition-all duration-500">
            <span className="relative z-10 flex items-center gap-2 transition-all duration-300 group-hover:text-[#fff]">
              Learn More
              <span className="p-3 bg-[#4A9F44] rounded-md ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-[#fff] rotate-45 group-hover:rotate-90 transition-transform duration-500"
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
            <span className="absolute inset-0 bg-[#4A9F44] w-0 group-hover:w-full transition-all duration-500 ease-out origin-left"></span>
          </button>
        </div>
      </div>
    </section>
  );
}
