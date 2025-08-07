"use client";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TourCard from "@/components/TourCard";
import TestimonialCard from "@/components/TestimonialCard";
import Link from "next/link";
import { featuredTours, testimonials } from "@/data/database";

export default function Home() {
  const category = ["All Tours", "Domestic", "International", "Adventure"];
  const [ filter, setFilter ] = useState("All Tours");
  const tourFilter =
    filter === "All Tours"
      ? featuredTours
      : featuredTours.filter((tour) => tour.category.charAt(0).toUpperCase() + tour.category.slice(1) === filter);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section
        className="min-h-screen text-white py-20 bg-cover bg-center relative content-center"
        style={{ backgroundImage: "url('/images/hero.png')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50 z-5"></div>
        <div className="relative container mx-auto px-4 text-center z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Discover Your Perfect Getaway
          </h1>
          <p className="text-xl mb-8">
            Explore breathtaking destinations with our expertly crafted tour
            packages
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/tours"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition"
            >
              View Packages
            </Link>
            <Link
              href="#featured"
              className="bg-transparent border-2 border-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Tours */}
      <section id="featured" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            Featured Tour Packages
          </h2>
          <p className="text-gray-600 text-center mb-12">
            Explore our most popular destinations
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
            {category.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  filter === cat
                    ? "bg-blue-600 text-white"
                    : "bg-white text-blue-600 border border-blue-600 cursor-pointer"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tourFilter.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/tours"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition inline-block"
            >
              View All Tours
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">About Swift Travels</h2>
            <p className="text-gray-600 mb-6">
              Founded in 2010, Swift Travels has been helping travelers explore
              the world with unforgettable experiences. Our team of travel
              experts carefully curates each tour package to ensure you get the
              most out of your journey.
            </p>
            <p className="text-gray-600 mb-8">
              We believe travel should be accessible, enjoyable, and memorable.
              That&apos;s why we offer a range of packages to suit every budget
              and travel style.
            </p>
            <Link
              href="/about"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition inline-block"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 text-center mb-12">
            Hear from travelers who&apos;ve explored with us
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready for Your Next Adventure?
          </h2>
          <p className="text-xl mb-8">
            Sign up for our newsletter to receive exclusive deals and travel
            inspiration.
          </p>
          <form className="max-w-md mx-auto flex shadow-2xl">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-3 rounded-l-lg focus:outline-none text-gray-800 bg-white"
              required
            />
            <button
              type="submit"
              className="bg-blue-800 px-6 py-3 rounded-r-lg font-medium hover:bg-blue-900 transition"
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
