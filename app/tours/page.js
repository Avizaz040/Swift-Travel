"use client";
import React, { useState, useEffect } from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TourCard from "@/components/TourCard";
import { ToursPackage } from "@/data/database";

export default function ToursPage() {
  const categories = [
    "All Categories",
    "Domestic",
    "International",
    "Adventure",
  ];
  const price = [
    "Any Price",
    "Under ₹500",
    "₹500 - ₹1000",
    "₹1000 - ₹2000",
    "Over ₹2000",
  ];
  const duration = [
    "Any Duration",
    "1-3 Days",
    "4-7 Days",
    "8-14 Days",
    "15+ Days",
  ];

  const [tourSearch, setTourSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedPrice, setSelectedPrice] = useState("Any Price");
  const [selectedDuration, setSelectedDuration] = useState("Any Duration");

  const filteredTours = ToursPackage.filter((tour) => {
    const matchesSearch = tour.title
      .toLowerCase()
      .includes(tourSearch.toLowerCase());

    const matchesCategory =
      selectedCategory === "All Categories" ||
      tour.category.toLowerCase() === selectedCategory.toLowerCase();

    const priceValue = tour.price;
    const matchesPrice =
      selectedPrice === "Any Price" ||
      (selectedPrice === "Under ₹500" && priceValue < 500) ||
      (selectedPrice === "₹500 - ₹1000" &&
        priceValue >= 500 &&
        priceValue <= 1000) ||
      (selectedPrice === "₹1000 - ₹2000" &&
        priceValue > 1000 &&
        priceValue <= 2000) ||
      (selectedPrice === "Over ₹2000" && priceValue > 2000);

    const durationDays = parseInt(tour.duration); // e.g., "4 days" → 4
    const matchesDuration =
      selectedDuration === "Any Duration" ||
      (selectedDuration === "1-3 Days" &&
        durationDays >= 1 &&
        durationDays <= 3) ||
      (selectedDuration === "4-7 Days" &&
        durationDays >= 4 &&
        durationDays <= 7) ||
      (selectedDuration === "8-14 Days" &&
        durationDays >= 8 &&
        durationDays <= 14) ||
      (selectedDuration === "15+ Days" && durationDays >= 15);

    return matchesSearch && matchesCategory && matchesPrice && matchesDuration;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Page Hero */}
      <section
        className="relative text-white py-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-2.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Tour Packages</h1>
          <p className="text-xl">
            Discover our carefully curated selection of travel experiences
          </p>
        </div>
      </section>

      {/* Tours Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-12 bg-white p-6 rounded-lg shadow-md">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search tours..."
                value={tourSearch}
                onChange={(e) => setTourSearch(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => {
                setSelectedCategory(e.target.value);
              }}
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>

            <select
              value={selectedPrice}
              onChange={(e) => {
                setSelectedPrice(e.target.value);
              }}
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {price.map((amt) => (
                <option key={amt} value={amt}>
                  {amt}
                </option>
              ))}
            </select>
            <select
              value={selectedDuration}
              onChange={(e) => {
                setSelectedDuration(e.target.value);
              }}
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {duration.map((days) => (
                <option key={days} value={days}>
                  {days}
                </option>
              ))}
            </select>
          </div>

          {/* Tours Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTours.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12 gap-2">
            <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50">
              Previous
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
              1
            </button>
            <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50">
              2
            </button>
            <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50">
              3
            </button>
            <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50">
              Next
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Can&apos;t Find What You&apos;re Looking For?
          </h2>
          <p className="text-xl mb-8">
            Contact our travel experts to create a custom itinerary just for
            you.
          </p>
          <a
            href="/contact"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition inline-block"
          >
            Contact Us
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
