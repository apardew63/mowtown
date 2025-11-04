"use client";

export default function DifferenceSection({
  cards = [
    { title: "Large Scale Maintenance", img: "/images/card1.png" },
    { title: "Landscape Construction", img: "/images/card2.png" },
    { title: "Commercial Maintenance", img: "/images/card3.png" },
  ],
  title = "Discover the Mowtown Outdoors Difference",
  subtitle = "At Mowtown Outdoors, we understand that lawn care and landscape maintenance requires time and effort in order to maintain a healthy and aesthetically pleasing outdoor space. We strive to make sure that our customers are always satisfied with the results of our work",
  className = ""
}) {

  return (
    <section id="difference" className={`py-12 sm:py-16 lg:py-20 bg-green-50 text-center px-4 ${className}`}>
      <div className="flex flex-col justify-center text-center items-center mb-8 sm:mb-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[55px] font-inter text-[#26402B] font-bold leading-tight">
          {title}
        </h2>
        <p className="text-[#26402B] text-base sm:text-lg font-medium max-w-4xl mt-4">
          {subtitle}
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-6">
        {cards.map((c, i) => (
          <div
            key={i}
            className="relative overflow-hidden shadow-lg group"
            style={{
              backgroundImage: `url(${c.img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "300px",
              minHeight: "300px",
            }}
          >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/70 transition-all duration-500"></div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end items-start p-4 sm:p-6 text-white transition-all duration-500">
              {/* Heading - starts bottom, moves up on hover */}
              <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-[36px] text-left font-aeonik font-bold mb-2 sm:mb-4 z-10 transform group-hover:-translate-y-4 transition-transform duration-700 leading-tight">
                {c.title}
              </h3>

              {/* Paragraph - hidden initially, slides in from left */}
              <p className="max-w-md opacity-0 -translate-x-10 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-700 delay-150 z-10 text-left text-sm sm:text-base leading-relaxed">
                Maintenance requires time and effort in order to maintain a
                healthy and aesthetically pleasing outdoor space. We strive to
                make sure that our customers are always satisfied with the
                results of our work.
              </p>

              {/* Button - hidden initially, slides up from bottom */}
              <button className="relative overflow-hidden group/button flex items-center gap-2 border-2 border-white text-white px-3 sm:px-5 py-2 rounded-lg transition-all duration-500 mt-4 sm:mt-6 opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 delay-300 z-10 text-sm sm:text-base">
                <span className="relative z-10 flex items-center gap-2 transition-all duration-300 group-hover/button:text-[#26402B]">
                  Learn More
                  <span className="p-2 sm:p-3 bg-[#4A9F44] rounded-md transition-transform duration-500 group-hover/button:rotate-90">
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
                <span className="absolute inset-0 bg-white w-0 group-hover/button:w-full transition-all duration-500 ease-out origin-left"></span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
