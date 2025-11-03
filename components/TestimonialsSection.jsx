export default function TestimonialsSection() {
  const testimonials = [
    { name: "John Smith", text: "Outstanding service and quality work. Highly recommend!" },
    { name: "Emily Davis", text: "Their team is professional and reliable. My property looks amazing!" },
  ];

  return (
    <section id="reviews" className="py-16 bg-gray-900 text-white text-center">
      <h2 className="text-3xl font-bold mb-8">What Our Customers Say</h2>
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 px-6">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-gray-800 p-6 rounded-xl shadow-lg">
            <p className="italic mb-4">"{t.text}"</p>
            <h4 className="font-semibold">{t.name}</h4>
          </div>
        ))}
      </div>
    </section>
  )
}
