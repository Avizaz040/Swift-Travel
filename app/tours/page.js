"use client";
import React, { useState } from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TourCard from "@/components/TourCard";
import { ToursPackage } from "@/data/database";
import { CircleChevronLeft, CircleChevronRight } from "lucide-react";

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

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Filtering Logic
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

    const durationDays = parseInt(tour.duration);
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

  // Pagination Calculations
  const totalPages = Math.ceil(filteredTours.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentTours = filteredTours.slice(indexOfFirstItem, indexOfLastItem);

  // Handle Page Change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll up on page change
  };

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
                setCurrentPage(1);
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
                setCurrentPage(1);
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
                setCurrentPage(1);
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
            {currentTours.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-12 gap-2">
              <button
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
                className=" text-blue-600 rounded-lg disabled:opacity-50 hover:bg-blue-50"
              >
                <CircleChevronLeft/>
              </button>

              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => handlePageChange(index + 1)}
                  className={`px-4 py-2 border rounded-lg ${
                    currentPage === index + 1
                      ? "bg-blue-600 text-white"
                      : "border-blue-600 text-blue-600 hover:bg-blue-50"
                  }`}
                >
                  {index + 1}
                </button>
              ))}

              <button
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
                className=" text-blue-600 rounded-lg disabled:opacity-50 hover:bg-blue-50"
              >
                <CircleChevronRight/>
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
