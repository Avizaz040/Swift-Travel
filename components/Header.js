"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, Menu } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion"; // ✅ use "framer-motion"

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href) => {
    return pathname === href
      ? "text-blue-600 border-b-2 border-blue-600 pb-1"
      : "text-gray-700 hover:text-blue-600";
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="relative container mx-auto px-4 py-2 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <img
            src="/images/logo.png"
            alt="Swift Travels Logo"
            className="h-10 mr-2 hidden md:block"
          />
          <img
            src="/images/logoText.png"
            alt="Swift Travels"
            className="h-8 hidden md:block"
          />
          <img
            src="/images/logo_m.png"
            alt="Swift Travels"
            className="h-12 md:hidden"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <Link
                href="/"
                className={`font-medium transition ${isActive("/")}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/tours"
                className={`font-medium transition ${isActive("/tours")}`}
              >
                Tours
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`font-medium transition ${isActive("/about")}`}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`font-medium transition ${isActive("/contact")}`}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/bookings"
                className={`font-medium transition ${isActive("/bookings")}`}
              >
                My Bookings
              </Link>
            </li>
          </ul>
        </nav>

        {/* Hamburger Icon */}
        <button
          className="md:hidden flex flex-col space-y-1.5"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {!menuOpen ? <Menu /> : <X />}
        </button>

        {/* Mobile Nav with Animation */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              key="mobile-nav"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute top-14 left-0 z-50 md:hidden w-full bg-white text-center px-4 py-6 shadow-md"
            >
              <nav>
                <ul className="flex flex-col gap-4">
                  <li>
                    <Link href="/" className={isActive("/")}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/tours" className={isActive("/tours")}>
                      Tours
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className={isActive("/about")}>
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className={isActive("/contact")}>
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link href="/bookings" className={isActive("/bookings")}>
                      My Bookings
                    </Link>
                  </li>
                </ul>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
