"use client";
import React, { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
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
  // Constants
  const categories = useMemo(() => [
    "All Categories",
    "Domestic",
    "International",
    "Adventure",
  ], []);

  const price = useMemo(() => [
    "Any Price",
    "Under ₹500",
    "₹500 - ₹1000",
    "₹1000 - ₹2000",
    "Over ₹2000",
  ], []);

  const duration = useMemo(() => [
    "Any Duration",
    "1-3 Days",
    "4-7 Days",
    "8-14 Days",
    "15+ Days",
  ], []);

  // State
  const [tourSearch, setTourSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedPrice, setSelectedPrice] = useState("Any Price");
  const [selectedDuration, setSelectedDuration] = useState("Any Duration");
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Constants
  const itemsPerPage = 6;

  // Reset all filters
  const clearFilters = useCallback(() => {
    setTourSearch("");
    setSelectedCategory("All Categories");
    setSelectedPrice("Any Price");
    setSelectedDuration("Any Duration");
    setCurrentPage(1);
  }, []);

  // Filtering Logic
  const filteredTours = useMemo(() => {
    setIsLoading(true);
    const result = ToursPackage.filter((tour) => {
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
    
    setIsLoading(false);
    return result;
  }, [tourSearch, selectedCategory, selectedPrice, selectedDuration]);

  // Pagination
  const totalPages = Math.ceil(filteredTours.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentTours = useMemo(
    () => filteredTours.slice(indexOfFirstItem, indexOfLastItem),
    [filteredTours, indexOfFirstItem, indexOfLastItem]
  );

  const handlePageChange = useCallback((pageNumber) => {
    setCurrentPage(pageNumber);
    if (typeof window !== 'undefined' && window.innerWidth <= 768) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  // Active filters count
  const activeFiltersCount = useMemo(
    () =>
      (selectedCategory !== "All Categories" ? 1 : 0) +
      (selectedPrice !== "Any Price" ? 1 : 0) +
      (selectedDuration !== "Any Duration" ? 1 : 0) +
      (tourSearch.trim() !== "" ? 1 : 0),
    [selectedCategory, selectedPrice, selectedDuration, tourSearch]
  );

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="animate-pulse text-xl">Loading tours...</div>
        </div>
        <Footer />
      </div>
    );
  }

  // Empty state
  if (filteredTours.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <section className="relative h-64 md:h-96">
          <Image
            src="/images/hero-2.webp"
            alt="Travel hero"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </section>
        <div className="container mx-auto px-4 py-16 text-center flex-1">
          <h2 className="text-2xl font-semibold mb-4">
            {tourSearch.trim() || activeFiltersCount > 0
              ? "No tours found matching your criteria"
              : "No tours available at the moment"}
          </h2>
          {(tourSearch.trim() || activeFiltersCount > 0) && (
            <button
              onClick={clearFilters}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Clear All Filters
            </button>
          )}
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero */}
      <section className="relative py-20">
        <Image
          src="/images/hero-2.webp"
          alt="Travel hero"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center z-10">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            Our Tour Packages
          </motion.h1>
          <motion.p
            className="text-lg text-gray-200 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
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
            aria-label="Toggle filters"
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
              onChange={(e) => {
                setTourSearch(e.target.value);
                setCurrentPage(1);
              }}
              className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Search tours"
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
                aria-label={
                  i === 0 ? "Select category" : 
                  i === 1 ? "Select price range" : "Select duration"
                }
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
              aria-label="Clear all filters"
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
                onChange={(e) => {
                  setTourSearch(e.target.value);
                  setCurrentPage(1);
                }}
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Search tours"
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
                  aria-label={
                    i === 0 ? "Select category" : 
                    i === 1 ? "Select price range" : "Select duration"
                  }
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
                aria-label="Clear all filters"
              >
                <XCircle size={18} /> Clear Filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Tours List */}
      <section className="py-16 bg-gray-50 flex-1">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {currentTours.map((tour) => (
                <motion.div
                  key={tour.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <TourCard tour={tour} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <motion.div
              className="flex justify-center mt-12 gap-2 flex-wrap"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <button
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
                className="p-2 rounded-full border border-blue-600 text-blue-600 disabled:opacity-50 hover:bg-blue-50 transition"
                aria-label="Previous page"
              >
                <CircleChevronLeft />
              </button>

              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  onClick={() => handlePageChange(index + 1)}
                  className={`px-4 py-2 rounded-full border transition ${
                    currentPage === index + 1
                      ? "bg-blue-600 text-white border-blue-600"
                      : "border-blue-600 text-blue-600 hover:bg-blue-50"
                  }`}
                  aria-label={`Go to page ${index + 1}`}
                >
                  {index + 1}
                </button>
              ))}

              <button
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
                className="p-2 rounded-full border border-blue-600 text-blue-600 disabled:opacity-50 hover:bg-blue-50 transition"
                aria-label="Next page"
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