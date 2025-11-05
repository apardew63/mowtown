"use client";

export default function DifferenceSection({
  cards = [
    { title: "Large Scale Maintenance", img: "/images/card1.png" },
    { title: "Landscape Construction", img: "/images/card2.png" },
    { title: "Commercial Maintenance", img: "/images/card3.png" },
  ],
  title = "Discover the Mowtown Outdoors Difference",
  subtitle = "At Mowtown Outdoors, we understand that lawn care and landscape maintenance requires time and effort in order to maintain a healthy and aesthetically pleasing outdoor space. We strive to make sure that our customers are always satisfied with the results of our work",
  className = "",
}) {
  return (
    <section
      id="difference"
      className={`py-12 sm:py-16 lg:py-20 bg-green-50 text-center px-4 ${className}`}
    >
      {/* Section Title */}
      <div className="flex flex-col justify-center text-center items-center mb-8 sm:mb-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[55px] font-inter text-[#26402B] font-bold leading-tight">
          {title}
        </h2>
        <p className="text-[#26402B] text-base sm:text-lg font-medium max-w-4xl mt-4">
          {subtitle}
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-6">
        {cards.map((c, i) => (
          <div
            key={i}
            className="relative overflow-hidden rounded-lg shadow-lg group transition-all duration-700 ease-in-out"
            style={{
              backgroundImage: `url(${c.img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "400px",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/70 transition-all duration-700"></div>

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white px-6 py-8 sm:py-10 transition-all duration-700 ease-in-out group-hover:h-[90%] h-[40%] flex flex-col justify-start">
              {/* Title (always visible, moves up slightly on hover) */}
              <h3 className="text-2xl text-left sm:text-3xl font-bold font-aeonik mb-2 transform transition-all duration-700 group-hover:-translate-y-3">
                {c.title}
              </h3>

              {/* Paragraph slides in from left */}
              <p className="opacity-0 text-left -translate-x-6 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-700 delay-150 text-sm sm:text-base leading-relaxed mb-4">
                Maintenance requires time and effort in order to maintain a
                healthy and aesthetically pleasing outdoor space. We strive to
                make sure that our customers are always satisfied with the
                results of our work.
              </p>

              {/* Button fades in from bottom */}
              {/* Button fades in from bottom */}
             <button className="relative overflow-hidden group/button inline-flex items-center justify-between border-2 border-white text-white px-4 py-2 rounded-lg transition-all duration-700 delay-300 opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 w-[160px] whitespace-nowrap">
  <span className="relative z-10 flex items-center justify-between w-full transition-all duration-300 group-hover/button:text-[#26402B] gap-2">
    Learn More
    <span className="py-5 px-5 bg-[#4A9F44] rounded-md transition-transform duration-500">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 text-white transition-transform duration-500 rotate-45 group-hover/button:rotate-90"
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

  {/* Background animation */}
  <span className="absolute left-0 top-0 bottom-0 bg-white w-0 group-hover/button:w-full transition-all duration-500 ease-out origin-left rounded-lg"></span>
</button>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
