export default function DifferenceSection() {
  const cards = [
    { title: "Large Scale Maintenance", img: "/images/diff1.jpg" },
    { title: "Landscape Construction", img: "/images/diff2.jpg" },
    { title: "Commercial Maintenance", img: "/images/diff3.jpg" },
  ];

  return (
    <section id="difference" className="py-20 bg-green-50 text-center">
      <h2 className="text-3xl font-bold mb-12">Discover the Mowtown Outdoors Difference</h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
        {cards.map((c, i) => (
          <div key={i} className="rounded-lg overflow-hidden shadow-lg bg-white">
            <img src={c.img} alt={c.title} className="h-56 w-full object-cover" />
            <div className="p-5">
              <h3 className="text-xl font-semibold">{c.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
