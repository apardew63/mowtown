export default function TestimonialsSection({
  testimonials = [
    {
      name: "John Smith",
      text: "Outstanding service and quality work. Highly recommend!",
    },
    {
      name: "Emily Davis",
      text: "Their team is professional and reliable. My property looks amazing!",
    },
  ],
  className = ""
}) {

  return (
    <section id="reviews" className={`py-12 sm:py-16 lg:py-20 bg-white text-white text-center space-y-4 sm:space-y-5 px-4 ${className}`}>
      {/* Row 1 */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-4 sm:gap-6">
        <div className="bg-[#E7F9DD] rounded-full flex items-center gap-2 sm:gap-4 px-4 sm:px-6 py-2 w-fit shadow-md hover:scale-105 transition-all duration-300">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#26422B] font-inter capitalize">
            Our Customers
          </h2>
          <img
            src="/images/user.png"
            alt="Customer"
            className="w-12 h-12 sm:w-16 sm:h-16 lg:w-18 lg:h-18 rounded-full object-cover border-2 border-white shadow-sm"
          />
        </div>
        <img src="/images/msg.png" alt="Message" className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 xl:w-26 xl:h-26" />
      </div>

      {/* Row 2 */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-4 sm:gap-6">
        <div className="bg-[#26402B] rounded-full flex items-center gap-2 sm:gap-4 px-4 sm:px-6 py-2 w-fit shadow-md hover:scale-105 transition-all duration-300">
          <img
            src="/images/toggle.png"
            alt="Toggle"
            className="w-16 h-12 sm:w-20 sm:h-16 lg:w-24 lg:h-18 xl:w-32 xl:h-18 object-contain"
          />
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#E7F9DD] font-inter capitalize">
            Talk About It
          </h2>
        </div>
      </div>

      {/* Row 3 */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-4 sm:gap-6">
        <div className="bg-[#E7F9DD] rounded-full flex items-center gap-2 sm:gap-4 px-4 sm:px-6 py-2 w-fit shadow-md hover:scale-105 transition-all duration-300">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#26422B] font-inter capitalize">
            Their Experience
          </h2>
        </div>
        <img src="/images/arrow.png" alt="Arrow" className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 xl:w-26 xl:h-26" />
      </div>

      {/* Testimonials Grid */}
      {/* <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 px-6">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-gray-800 p-8 rounded-2xl shadow-lg hover:bg-gray-700 transition-all duration-300"
          >
            <p className="italic mb-4 text-lg leading-relaxed">"{t.text}"</p>
            <h4 className="font-semibold text-[#68EF3F] text-xl">{t.name}</h4>
          </div>
        ))}
      </div>
      <div></div> */}
    </section>
  );
}
