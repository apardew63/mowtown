"use client";

import { FaQuoteLeft, FaStar } from "react-icons/fa";

export default function TestimonialsSlider() {
  const testimonials = [
    {
      text: "Even though I am sure mine was a relatively small job for APPGENIE, I felt they took their job just as seriously. Personalized attention and reliability are attributes I appreciate and APPGENIE did not disappoint!",
      name: "Dr. Farrin Manian",
      position: "Pearl 4 Peers",
      image: "/images/user.png",
    },
    {
      text: "I had asked APPGENIE to create a mobile game application for iOS and Android platforms. Their team was professional throughout the entire mobile application development process.",
      name: "Casey Stewart",
      position: "Switch Poker",
      image: "/images/user.png",
    },
    {
      text: "There was one person who was the contact the whole project that made communication easy. APPGENIE designed and developed an application that helps organize pick-up hockey games.",
      name: "Dr. Thomas Miskavige",
      position: "Client",
      image: "/images/user.png",
    },
    {
      text: "Professional, creative, and detail-oriented. APPGENIE made our app launch seamless and successful.",
      name: "Sophie Turner",
      position: "CEO, Bloomify",
      image: "/images/user.png",
    },
  ];

  return (
    <section className="bg-[#26402B]">
      <div className="max-w-6xl mx-auto px-6 h-[700px] overflow-hidden relative flex flex-row justify-between gap-6">
        {/* Left Column */}
        <div className="flex flex-col animate-scroll space-y-6">
          {[...testimonials, ...testimonials].map((t, i) => (
            <div
              key={`left-${i}`}
              className="bg-white rounded-xl shadow-md p-8 flex flex-col justify-between h-[300px] transition-all duration-300 hover:shadow-xl"
            >
              <div>
                <FaQuoteLeft className="text-[#7CCB2B] text-3xl mb-4" />
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  {t.text}
                </p>
              </div>
              <div className="flex justify-between items-center mt-4">
                <div className="flex items-center gap-3">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <p className="font-semibold text-gray-900">{t.name}</p>
                    <p className="text-sm text-gray-500">{t.position}</p>
                  </div>
                </div>
                <div className="flex text-[#FFD700]">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column (Delayed Start for Offset) */}
        <div className="flex flex-col animate-scroll-delayed space-y-6">
          {[...testimonials, ...testimonials].map((t, i) => (
            <div
              key={`right-${i}`}
              className="bg-white rounded-xl shadow-md p-8 flex flex-col justify-between h-[300px] transition-all duration-300 hover:shadow-xl"
            >
              <div>
                <FaQuoteLeft className="text-[#7CCB2B] text-3xl mb-4" />
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  {t.text}
                </p>
              </div>
              <div className="flex justify-between items-center mt-4">
                <div className="flex items-center gap-3">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <p className="font-semibold text-gray-900">{t.name}</p>
                    <p className="text-sm text-gray-500">{t.position}</p>
                  </div>
                </div>
                <div className="flex text-[#FFD700]">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animation Keyframes */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 25s linear infinite;
        }
        .animate-scroll-delayed {
          animation: scroll 25s linear infinite;
          animation-delay: 12.5s; /* half cycle delay for offset */
        }
        /* Optional pause on hover */
        .animate-scroll:hover,
        .animate-scroll-delayed:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
