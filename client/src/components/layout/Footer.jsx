// components/Footer.jsx
import React from 'react';
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Copyright,
} from 'lucide-react'; // npm install lucide-react

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12">
          {/* Column 1: Logo & About */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                NP
              </div>
              <h3 className="text-2xl font-bold text-white">Namma Pondy Properties</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Your trusted partner for verified plots, hassle-free buying, and direct connections in Puducherry's prime growth zones.
            </p>
            <div className="flex items-center gap-3 text-sm">
              <MapPin className="w-5 h-5 text-orange-500" />
              <span>Puducherry, India</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="/plots" className="hover:text-orange-500 transition">Verified Plots</a>
              </li>
              <li>
                <a href="/agents" className="hover:text-orange-500 transition">Become an Agent</a>
              </li>
              <li>
                <a href="/builders" className="hover:text-orange-500 transition">Builder Partnership</a>
              </li>
              <li>
                <a href="/owners" className="hover:text-orange-500 transition">List Property Free</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-orange-500 transition">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Get in Touch</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-orange-500" />
                <a href="tel:+919876543210" className="hover:text-orange-500 transition">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-orange-500" />
                <a
                  href="https://wa.me/919876543210?text=Hi%20Namma%20Pondy%20Properties%2C%20I%20want%20to%20know%20about%20plots%20in%20ECR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-500 transition"
                >
                  WhatsApp Us
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-orange-500" />
                <a href="mailto:info@nammapondyproperties.com" className="hover:text-orange-500 transition">
                  info@nammapondyproperties.com
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal & Social */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Legal & Follow Us</h4>
            <ul className="space-y-3 text-sm mb-6">
              <li>
                <a href="/privacy-policy" className="hover:text-orange-500 transition">Privacy Policy</a>
              </li>
              <li>
                <a href="/terms-conditions" className="hover:text-orange-500 transition">Terms & Conditions</a>
              </li>
              <li>
                <a href="/disclaimer" className="hover:text-orange-500 transition">Disclaimer</a>
              </li>
            </ul>

            <div className="flex gap-4">
              <a href="#" className="hover:text-orange-500 transition">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-orange-500 transition">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-orange-500 transition">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">
            <p className="flex items-center gap-2">
              <Copyright className="w-4 h-4" />
              {new Date().getFullYear()} <a href="https://bmtechx.in/">BM TECHx</a>. All rights reserved.
            </p>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
