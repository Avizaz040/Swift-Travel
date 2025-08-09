"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TourCard from "@/components/TourCard";
import TestimonialCard from "@/components/TestimonialCard";
import Link from "next/link";
import { featuredTours, testimonials } from "@/data/database";

export default function Home() {
  const category = ["All Tours", "Domestic", "International", "Adventure"];
  const [filter, setFilter] = useState("All Tours");

  const tourFilter =
    filter === "All Tours"
      ? featuredTours
      : featuredTours.filter(
          (tour) =>
            tour.category.charAt(0).toUpperCase() + tour.category.slice(1) ===
            filter
        );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center text-white bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
        <motion.div
          className="relative z-10 container mx-auto px-4 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Discover Your Perfect Getaway
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10">
            Explore breathtaking destinations with our expertly crafted tour
            packages
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Link
              href="/tours"
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl hover:bg-blue-50 transition"
            >
              View Packages
            </Link>
            <Link
              href="#featured"
              className="bg-transparent border-2 border-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition"
            >
              Learn More
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Featured Tours */}
      <section id="featured" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-center mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Featured Tour Packages
          </motion.h2>
          <motion.p
            className="text-gray-600 text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Explore our most popular destinations
          </motion.p>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {category.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full font-medium transition shadow-sm ${
                  filter === cat
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-white text-blue-600 border border-blue-600 hover:bg-blue-50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tourFilter.map((tour, i) => (
              <motion.div
                key={tour.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                viewport={{ once: true }}
              >
                <TourCard tour={tour} />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link
              href="/tours"
              className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition shadow-lg hover:shadow-xl"
            >
              View All Tours
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">About Swift Travels</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Founded in 2010, Swift Travels has been helping travelers explore
              the world with unforgettable experiences. Our team of travel
              experts carefully curates each tour package to ensure you get the
              most out of your journey.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We believe travel should be accessible, enjoyable, and memorable.
              That&apos;s why we offer a range of packages to suit every budget
              and travel style.
            </p>
            <Link
              href="/about"
              className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition shadow-lg"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-center mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            What Our Customers Say
          </motion.h2>
          <p className="text-gray-600 text-center mb-12">
            Hear from travelers who&apos;ve explored with us
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                viewport={{ once: true }}
              >
                <TestimonialCard testimonial={testimonial} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready for Your Next Adventure?
          </h2>
          <p className="text-lg mb-8">
            Sign up for our newsletter to receive exclusive deals and travel
            inspiration.
          </p>
          <form className="max-w-md mx-auto flex flex-col md:flex-row shadow-lg rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-3 focus:outline-none text-gray-800 bg-white"
              required
            />
            <button
              type="submit"
              className="bg-blue-800 px-6 py-3 font-medium hover:bg-blue-900 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
