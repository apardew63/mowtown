export default function Footer() {
  return (
    <footer className="bg-green-900 text-gray-100 py-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
        <div>
          <h3 className="text-2xl font-bold mb-3">Mowtown Outdoors</h3>
          <p>Reliable landscape construction and maintenance for commercial properties.</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Services</a></li>
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-3">Contact Us</h4>
          <p>Email: info@mowtown.com</p>
          <p>Phone: +1 (555) 123-4567</p>
        </div>
      </div>
      <p className="text-center text-sm mt-10">© 2025 Mowtown Outdoors. All rights reserved.</p>
    </footer>
  )
}
