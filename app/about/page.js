"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function AboutPage() {
  const values = [
    {
      icon: "/icons/authenticity.png",
      title: "Authenticity",
      desc: "We design experiences that let you connect deeply with each destination, avoiding tourist traps and showcasing the real culture.",
    },
    {
      icon: "/icons/sustainability.png",
      title: "Sustainability",
      desc: "We're committed to responsible travel that benefits local communities and preserves destinations for future generations.",
    },
    {
      icon: "/icons/excellence.png",
      title: "Excellence",
      desc: "From our accommodations to our guides, we maintain the highest standards to ensure your complete satisfaction.",
    },
    {
      icon: "/icons/personalization.png",
      title: "Personalization",
      desc: "We listen to your needs and preferences to craft trips that are uniquely suited to you.",
    },
  ];

  const team = [
    {
      img: "/images/Sarah_Johnson.png",
      name: "Sarah Johnson",
      role: "Founder & CEO",
      desc: "With over 20 years in the travel industry, Sarah's expertise in crafting unique itineraries is unmatched.",
    },
    {
      img: "/images/Michael_Chen.png",
      name: "Michael Chen",
      role: "Operations Director",
      desc: "Michael ensures every detail of your trip is perfect. He's fluent in four languages.",
    },
    {
      img: "/images/Emma_Rodriguez.png",
      name: "Emma Rodriguez",
      role: "Customer Experience",
      desc: "Emma's warm personality and attention to detail make her the perfect person to handle all your travel needs.",
    },
    {
      img: "/images/David_Wilson.png",
      name: "David Wilson",
      role: "Adventure Specialist",
      desc: "Our resident adrenaline junkie, David designs all our adventure tours and has climbed some of the world's highest peaks.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero */}
      <section className="relative py-20">
        {/* optimized hero image using next/image */}
        <Image
          src="/images/hero-2.webp"
          alt="Travel hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="text-center w-full">
            <motion.h1
              className="text-white text-4xl md:text-5xl font-bold mb-4"
              initial="hidden"
              animate="show"
              variants={fadeUp}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              About Swift Travels
            </motion.h1>
            <motion.p
              className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto"
              initial="hidden"
              animate="show"
              variants={fadeUp}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              Discover our story, mission, and the team behind your
              unforgettable journeys
            </motion.p>
          </div>
        </div>
      </section>

      {/* About / Story */}
      <main className="flex-grow">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
              <motion.article
                className="lg:col-span-2"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                variants={fadeUp}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Founded in 2010, Swift Travels began as a small team of
                  passionate travelers with a simple mission: to create
                  extraordinary travel experiences that go beyond the ordinary.
                  What started as a boutique agency specializing in adventure
                  tours has grown into a full-service travel company offering
                  curated experiences across six continents.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Over the years, we&apos;ve helped thousands of travelers
                  discover the world, building lasting relationships with local
                  partners and communities along the way. Our commitment to
                  sustainable and responsible tourism has remained at the core
                  of everything we do.
                </p>

                <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  At Swift Travels, we believe travel has the power to transform
                  lives and broaden perspectives. Our mission is to:
                </p>

                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3">✓</span>
                    <span>Create authentic, immersive travel experiences</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3">✓</span>
                    <span>
                      Support local communities and sustainable tourism
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3">✓</span>
                    <span>
                      Provide exceptional service and personalized attention
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3">✓</span>
                    <span>
                      Make travel accessible without compromising quality
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3">✓</span>
                    <span>Inspire a lifelong love of exploration</span>
                  </li>
                </ul>
              </motion.article>

              {/* Team image (lazy loaded + animated) */}
              <motion.div
                className="lg:col-span-1"
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="rounded-lg overflow-hidden shadow-md">
                  <Image
                    src="/images/about_team.png"
                    alt="Swift Travels team"
                    width={720}
                    height={540}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="text-center mb-8"
            >
              <h2 className="text-3xl font-bold">Our Values</h2>
              <p className="text-gray-600 max-w-2xl mx-auto mt-3">
                The principles that guide everything we do
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  className="bg-white p-6 rounded-lg shadow-sm text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Image
                      src={v.icon}
                      alt={v.title}
                      width={32}
                      height={32}
                      loading="lazy"
                    />
                  </div>
                  <h3 className="font-bold text-xl mb-2">{v.title}</h3>
                  <p className="text-gray-600 text-sm">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="text-center mb-10"
            >
              <h2 className="text-3xl font-bold">Meet Our Team</h2>
              <p className="text-gray-600 max-w-2xl mx-auto mt-3">
                The passionate travel experts behind your journeys
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((m, i) => (
                <motion.div
                  key={m.name}
                  className="text-center"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                >
                  <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                    <Image
                      src={m.img}
                      alt={m.name}
                      width={256}
                      height={256}
                      className="object-cover"
                      loading="lazy"
                      sizes="(max-width: 768px) 50vw, 12vw"
                    />
                  </div>
                  <h3 className="font-bold text-xl mb-1">{m.name}</h3>
                  <p className="text-blue-600 mb-2">{m.role}</p>
                  <p className="text-gray-600 text-sm">{m.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">12+</div>
                <div className="text-xl">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">5,000+</div>
                <div className="text-xl">Happy Travelers</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">60+</div>
                <div className="text-xl">Destinations</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">98%</div>
                <div className="text-xl">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl mb-8">
              Contact our travel experts to plan your perfect trip
            </p>
            <a
              href="/contact"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition inline-block"
            >
              Get in Touch
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
