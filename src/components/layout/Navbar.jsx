// components/PromoHeader.jsx
import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // optional: if you want to use lucide icons

export default function PromoHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full">
      {/* Promotional Banner */}
<div className="text-center font-medium py-2 bg-gradient-to-r from-[#1a1a1a] to-[#ff6600] text-white text-sm">
   <p>
          Exclusive Price Drop! Hurry,{' '}
          <span className="underline underline-offset-2">Offer Ends Soon!</span>
        </p>
      </div>

      {/* Navbar */}
      <nav className="relative h-22.5 flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 bg-white text-gray-900 shadow transition-all">
        {/* Logo */}
        <a href="#" className="shrink-0">
          <img
            src="/images/logo.png"
            alt="Company Logo"
            className="h-18 w-auto"
          />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8 md:pl-28">
          <li><a href="#" className="hover:text-violet-700 transition">Home</a></li>
          <li><a href="#" className="hover:text-violet-700 transition">Services</a></li>
          <li><a href="#" className="hover:text-violet-700 transition">Portfolio</a></li>
          <li><a href="#" className="hover:text-violet-700 transition">Pricing</a></li>
        </ul>

        {/* Desktop CTA Button */}
        <button className="hidden md:inline bg-white hover:bg-gray-50 border border-gray-300 ml-20 px-9 py-2 rounded-full active:scale-95 transition-all duration-150">
          Get started
        </button>

        {/* Mobile Menu Button */}
        <button
          aria-label="Toggle mobile menu"
          className="md:hidden active:scale-90 transition"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X size={30} />
          ) : (
            <Menu size={30} />
          )}
        </button>

        {/* Mobile Menu Dropdown */}
        <div
          className={`absolute top-17.5 left-0 w-full bg-white shadow-sm p-6 md:hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'block' : 'hidden'
          }`}
        >
          <ul className="flex flex-col space-y-5 text-lg">
            <li><a href="#" className="text-sm hover:text-violet-700">Home</a></li>
            <li><a href="#" className="text-sm hover:text-violet-700">Services</a></li>
            <li><a href="#" className="text-sm hover:text-violet-700">Portfolio</a></li>
            <li><a href="#" className="text-sm hover:text-violet-700">Pricing</a></li>
          </ul>

          <button className="mt-6 w-40 h-11 bg-white text-gray-600 border border-gray-300 hover:bg-gray-50 active:scale-95 transition-all rounded-full text-sm">
            Get started
          </button>
        </div>
      </nav>
    </div>
  );
}
