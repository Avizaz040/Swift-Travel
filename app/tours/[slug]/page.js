"use client";
import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useParams } from "next/navigation";
import Link from "next/link";
import { TourDetails } from "@/data/database";

export default function TourDetailPage() {
  const params = useParams();
  const slug = params?.slug;
  // const tour = TourDetails.find((t) => t.id === id);
  const [tour, setTour] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      setLoading(true);
      // Simulate fetch delay for effect
      setTimeout(() => {
        const matchedTour = TourDetails.find((t) => t.slug === slug);
        setTour(matchedTour || null);
        setLoading(false);
      }, 1000);
    }
  }, [slug]);

  // Skeleton Loader Component
  const Skeleton = () => (
    <div className="animate-pulse container mx-auto px-4 py-12">
      <div className="h-6 bg-gray-200 rounded w-1/3 mb-4"></div>
      <div className="h-4 bg-gray-200 rounded w-1/4 mb-8"></div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="h-48 bg-gray-200 rounded"></div>
        ))}
      </div>
      <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-2/3 mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {loading ? (
        <Skeleton />
      ) : tour ? (
        <>
          {/* Breadcrumb */}
          <div className="bg-gray-100 py-4">
            <div className="container mx-auto px-4">
              <div className="text-sm text-gray-600">
                <Link href="/" className="hover:text-blue-600">
                  Home
                </Link>{" "}
                <span>&gt;</span>
                <Link href="/tours" className="hover:text-blue-600">
                  {" "}
                  Tours
                </Link>{" "}
                <span>&gt;</span>
                <span className="text-gray-800"> {tour.title}</span>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <main className="flex-grow py-12 fade-in">
            <div className="container mx-auto px-4">
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Left Column */}
                <div className="lg:w-2/3">
                  <h1 className="text-3xl font-bold mb-4">{tour.title}</h1>

                  {/* Rating and Location */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center">
                      <span className="text-yellow-400 text-xl">★★★★★</span>
                      <span className="ml-2 text-gray-600">
                        ({tour.reviewsCount} reviews)
                      </span>
                    </div>
                    <div className="flex items-center">
                      <img
                        src="/icons/map-pin.svg"
                        alt="Location"
                        className="w-5 h-5 mr-2"
                      />
                      <span>{tour.location}</span>
                    </div>
                  </div>

                  {/* Image Gallery */}
                  <div className="mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {tour.images.map((image, index) => (
                        <div key={index} className="rounded-lg overflow-hidden">
                          <img
                            src={image}
                            onError={(e) => {
                              e.target.src = "/images/fallback.jpg";
                            }}
                            alt={`${tour.title} ${index + 1}`}
                            className="w-full h-48 object-cover hover:scale-105 transition duration-300"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">Tour Highlights</h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {tour.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Description */}
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">Description</h2>
                    <p className="text-gray-700 leading-relaxed">
                      {tour.description}
                    </p>
                  </div>

                  {/* Itinerary */}
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">Itinerary</h2>
                    <div className="space-y-4">
                      {tour.itinerary.map((day) => (
                        <div
                          key={day.day}
                          className="border border-gray-200 rounded-lg p-4"
                        >
                          <h3 className="font-bold text-lg">
                            Day {day.day}: {day.title}
                          </h3>
                          <p className="text-gray-700 mt-2">
                            {day.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Inclusions */}
                  <div>
                    <h2 className="text-2xl font-bold mb-4">
                      What&apos;s Included
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="font-bold text-lg mb-2">Included</h3>
                        <ul className="space-y-2">
                          {tour.included.map((item, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-green-500 mr-2">✓</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">Not Included</h3>
                        <ul className="space-y-2">
                          {tour.excluded.map((item, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-red-500 mr-2">✗</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Booking Sidebar */}
                <div className="lg:w-1/3">
                  <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
                    <div className="flex justify-between items-center mb-6">
                      <div>
                        <span className="text-3xl font-bold text-blue-600">
                          ₹{tour.discountPrice}
                        </span>
                        {tour.discountPrice < TourDetails.price && (
                          <span className="ml-2 text-gray-500 line-through">
                            ₹{tour.price}
                          </span>
                        )}
                      </div>
                      <span className="text-gray-600">per person</span>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div className="flex items-center">
                        <img
                          src="/icons/calendar.svg"
                          alt="Duration"
                          className="w-5 h-5 mr-2"
                        />
                        <span>{tour.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <img
                          src="/icons/people_group.svg"
                          alt="Group Size"
                          className="w-5 h-5 mr-2"
                        />
                        <span>{tour.groupSize}</span>
                      </div>
                      <div className="flex items-center">
                        <img
                          src="/icons/globe.svg"
                          alt="Tour Type"
                          className="w-5 h-5 mr-2"
                        />
                        <span className="capitalize">{tour.category}</span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h3 className="font-bold mb-2">Why Book With Us?</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2">✓</span>
                          <span>Best price guarantee</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2">✓</span>
                          <span>No booking fees</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2">✓</span>
                          <span>24/7 customer support</span>
                        </li>
                      </ul>
                    </div>

                    <form className="space-y-4">
                      <div>
                        <label className="block mb-1 font-medium">
                          Full Name
                        </label>
                        <input
                          type="text"
                          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>
                      <div>
                        <label className="block mb-1 font-medium">Email</label>
                        <input
                          type="email"
                          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>
                      <div>
                        <label className="block mb-1 font-medium">Phone</label>
                        <input
                          type="tel"
                          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>
                      <div>
                        <label className="block mb-1 font-medium">
                          Travel Date
                        </label>
                        <input
                          type="date"
                          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>
                      <div>
                        <label className="block mb-1 font-medium">
                          Number of Persons
                        </label>
                        <input
                          type="number"
                          min="1"
                          defaultValue="1"
                          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>
                      <div>
                        <label className="block mb-1 font-medium">
                          Special Requests
                        </label>
                        <textarea
                          rows="3"
                          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
                      >
                        Book Now
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </>
      ) : (
        <div className="text-center text-3xl text-gray-300 py-12">
          Tour not found.
        </div>
      )}
      {/* Related Tours */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">You May Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* In a real app, these would be actual related tours */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="/images/goa.jpg"
                alt="Goa Beach Holiday"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Goa Beach Holiday</h3>
                <p className="text-gray-600 mb-4">
                  Sun, sand and sea in beautiful Goa
                </p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-blue-600">₹500</span>
                  <Link
                    href="/tours/goa-beach-holiday"
                    className="text-blue-600 hover:underline"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="/images/paris.jpg"
                alt="Paris Getaway"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Paris Getaway</h3>
                <p className="text-gray-600 mb-4">
                  Experience the romance of Paris
                </p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-blue-600">₹1500</span>
                  <Link
                    href="/tours/paris-getaway"
                    className="text-blue-600 hover:underline"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
