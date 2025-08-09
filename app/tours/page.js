"use client";
import React, { useState } from "react";
import { motion, AnimatePresence, delay } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TourCard from "@/components/TourCard";
import { ToursPackage } from "@/data/database";
import {
  CircleChevronLeft,
  CircleChevronRight,
  SlidersHorizontal,
  XCircle,
} from "lucide-react";

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

  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);

  const itemsPerPage = 6;

  // Reset all filters
  const clearFilters = () => {
    setTourSearch("");
    setSelectedCategory("All Categories");
    setSelectedPrice("Any Price");
    setSelectedDuration("Any Duration");
    setCurrentPage(1);
  };

  // Filtering Logic
  const filteredTours = ToursPackage.filter((tour) => {
    const matchesSearch = tour.title
      .toLowerCase()
      .includes(tourSearch.toLowerCase());
    const matchesCategory =
      selectedCategory === "All Categories" ||
      tour.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesPrice =
      selectedPrice === "Any Price" ||
      (selectedPrice === "Under ₹500" && tour.price < 500) ||
      (selectedPrice === "₹500 - ₹1000" &&
        tour.price >= 500 &&
        tour.price <= 1000) ||
      (selectedPrice === "₹1000 - ₹2000" &&
        tour.price > 1000 &&
        tour.price <= 2000) ||
      (selectedPrice === "Over ₹2000" && tour.price > 2000);

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

  const totalPages = Math.ceil(filteredTours.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentTours = filteredTours.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Only scroll to top if device width <= 768px (mobile/tablet)
    if (window.innerWidth <= 768) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Inside ToursPage component
  const activeFiltersCount =
    (selectedCategory !== "All Categories" ? 1 : 0) +
    (selectedPrice !== "Any Price" ? 1 : 0) +
    (selectedDuration !== "Any Duration" ? 1 : 0) +
    (tourSearch.trim() !== "" ? 1 : 0);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero */}
      <section
        className="relative text-white py-24 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-2.webp')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative container mx-auto px-4 z-10 text-center">
          <motion.h1
            className="text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{duration: 0.7, ease: "easeOut"}}
          >
            Our Tour Packages
          </motion.h1>
          <motion.p
            className="text-lg text-gray-200 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration:0.7, delay: 0.3, ease: "easeOut" }}
          >
            Discover our carefully curated selection of travel experiences
          </motion.p>
        </div>
      </section>

      {/* Filter Bar */}
      <div className="sticky top-0 z-20 bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between md:justify-center items-center">
          {/* Mobile Toggle Button */}
          <button
            onClick={() => setShowFilters((prev) => !prev)}
            className="relative md:hidden flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100"
          >
            <SlidersHorizontal size={18} />
            Filters
            {activeFiltersCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {activeFiltersCount}
              </span>
            )}
          </button>

          {/* Desktop Filters */}
          <div className="hidden md:flex gap-4 w-full">
            <input
              type="text"
              placeholder="Search tours..."
              value={tourSearch}
              onChange={(e) => setTourSearch(e.target.value)}
              className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {[categories, price, duration].map((list, i) => (
              <select
                key={i}
                value={
                  i === 0
                    ? selectedCategory
                    : i === 1
                    ? selectedPrice
                    : selectedDuration
                }
                onChange={(e) => {
                  if (i === 0) setSelectedCategory(e.target.value);
                  else if (i === 1) setSelectedPrice(e.target.value);
                  else setSelectedDuration(e.target.value);
                  setCurrentPage(1);
                }}
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {list.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            ))}
            <button
              onClick={clearFilters}
              className="flex items-center gap-2 px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200"
            >
              <XCircle size={18} /> Clear Filters
            </button>
          </div>
        </div>

        {/* Mobile Filters - Collapsible */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              className="md:hidden px-4 pb-4 flex flex-col gap-4 bg-white border-t border-gray-200"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <input
                type="text"
                placeholder="Search tours..."
                value={tourSearch}
                onChange={(e) => setTourSearch(e.target.value)}
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {[categories, price, duration].map((list, i) => (
                <select
                  key={i}
                  value={
                    i === 0
                      ? selectedCategory
                      : i === 1
                      ? selectedPrice
                      : selectedDuration
                  }
                  onChange={(e) => {
                    if (i === 0) setSelectedCategory(e.target.value);
                    else if (i === 1) setSelectedPrice(e.target.value);
                    else setSelectedDuration(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {list.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              ))}
              <button
                onClick={() => {
                  clearFilters();
                  setShowFilters(false);
                }}
                className="flex items-center gap-2 px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200"
              >
                <XCircle size={18} /> Clear Filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Tours List */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentTours.map((tour, i) => (
              <motion.div
                key={tour.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.09 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <TourCard tour={tour} />
              </motion.div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <motion.div
              className="flex justify-center mt-12 gap-2 flex-wrap"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              <button
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
                className="p-2 rounded-full border border-blue-600 text-blue-600 disabled:opacity-50 hover:bg-blue-50"
              >
                <CircleChevronLeft />
              </button>

              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => handlePageChange(index + 1)}
                  className={`px-4 py-2 rounded-full border transition ${
                    currentPage === index + 1
                      ? "bg-blue-600 text-white border-blue-600"
                      : "border-blue-600 text-blue-600 hover:bg-blue-50"
                  }`}
                >
                  {index + 1}
                </button>
              ))}

              <button
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
                className="p-2 rounded-full border border-blue-600 text-blue-600 disabled:opacity-50 hover:bg-blue-50"
              >
                <CircleChevronRight />
              </button>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
