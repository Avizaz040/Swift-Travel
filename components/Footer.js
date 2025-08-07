import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className='flex flex-col items-center md:items-start'>
            <h3 className="text-xl font-bold mb-4">Swift Travels</h3>
            <p className="text-gray-400 mb-6">
              Making travel dreams come true since 2010. We specialize in creating unforgettable experiences around the globe.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <img src="/icons/facebook.svg" alt="Facebook" className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <img src="/icons/instagram.svg" alt="Instagram" className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <img src="/icons/twitter.svg" alt="Twitter" className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div className='flex flex-col items-center md:items-start text-center md:text-left'>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition">Home</Link>
              </li>
              <li>
                <Link href="/tours" className="text-gray-400 hover:text-white transition">Tours</Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition">About Us</Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition">Contact</Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white transition">Terms & Conditions</Link>
              </li>
            </ul>
          </div>
          
          <div className='flex flex-col items-center md:items-start text-center'>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <img src="/icons/map-pin2.svg" alt="Address" className="w-5 h-5 mr-3 mt-0.5" />
                <span className="text-gray-400">123 Travel St, Adventure City</span>
              </li>
              <li className="flex items-start">
                <img src="/icons/phone.svg" alt="Phone" className="w-5 h-5 mr-3 mt-0.5" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <img src="/icons/mail.svg" alt="Email" className="w-5 h-5 mr-3 mt-0.5" />
                <span className="text-gray-400">info@swifttravels.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>&copy; 2025 Swift Travels. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}