import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Page Hero */}
      <section className="relative text-white py-20 bg-cover bg-center" style={{backgroundImage: "url('/images/hero-2.jpg')"}}>
      <div className='absolute inset-0 bg-black/40'></div>
        <div className="relative container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl font-bold mb-4">About Swift Travels</h1>
          <p className="text-xl">Discover our story, mission, and the team behind your unforgettable journeys</p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Founded in 2010, Swift Travels began as a small team of passionate travelers with a simple mission: to create extraordinary travel experiences that go beyond the ordinary. What started as a boutique agency specializing in adventure tours has grown into a full-service travel company offering curated experiences across six continents.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Over the years, we&apos;ve helped thousands of travelers discover the world, building lasting relationships with local partners and communities along the way. Our commitment to sustainable and responsible tourism has remained at the core of everything we do.
              </p>

              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                At Swift Travels, we believe travel has the power to transform lives and broaden perspectives. Our mission is to:
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>Create authentic, immersive travel experiences</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>Support local communities and sustainable tourism</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>Provide exceptional service and personalized attention</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>Make travel accessible without compromising quality</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>Inspire a lifelong love of exploration</span>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/3">
              <img 
                src="/images/about_team.png" 
                alt="Swift Travels team on a trip" 
                className="w-full rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Our Values</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">The principles that guide everything we do</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <img src="/icons/authenticity.png" alt="Authenticity" className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-xl mb-2">Authenticity</h3>
              <p className="text-gray-600">We design experiences that let you connect deeply with each destination, avoiding tourist traps and showcasing the real culture.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <img src="/icons/sustainability.png" alt="Sustainability" className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-xl mb-2">Sustainability</h3>
              <p className="text-gray-600">We&apos;re committed to responsible travel that benefits local communities and preserves destinations for future generations.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <img src="/icons/excellence.png" alt="Excellence" className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-xl mb-2">Excellence</h3>
              <p className="text-gray-600">From our accommodations to our guides, we maintain the highest standards to ensure your complete satisfaction.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <img src="/icons/personalization.png" alt="Personalization" className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-xl mb-2">Personalization</h3>
              <p className="text-gray-600">We listen to your needs and preferences to craft trips that are uniquely suited to you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Meet Our Team</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">The passionate travel experts behind your journeys</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                <img src="/images/profile_default.jpg" alt="Sarah Johnson" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-bold text-xl mb-1">Sarah Johnson</h3>
              <p className="text-blue-600 mb-2">Founder & CEO</p>
              <p className="text-gray-600">With over 20 years in the travel industry, Sarah&apos;s expertise in crafting unique itineraries is unmatched.</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                <img src="/images/profile_default.jpg" alt="Michael Chen" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-bold text-xl mb-1">Michael Chen</h3>
              <p className="text-blue-600 mb-2">Operations Director</p>
              <p className="text-gray-600">Michael ensures every detail of your trip is perfect. He&apos;s fluent in four languages.</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                <img src="/images/profile_default.jpg" alt="Emma Rodriguez" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-bold text-xl mb-1">Emma Rodriguez</h3>
              <p className="text-blue-600 mb-2">Customer Experience</p>
              <p className="text-gray-600">Emma&apos;s warm personality and attention to detail make her the perfect person to handle all your travel needs.</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                <img src="/images/profile_default.jpg" alt="David Wilson" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-bold text-xl mb-1">David Wilson</h3>
              <p className="text-blue-600 mb-2">Adventure Specialist</p>
              <p className="text-gray-600">Our resident adrenaline junkie, David designs all our adventure tours and has climbed some of the world&apos;s highest peaks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
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

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8">Contact our travel experts to plan your perfect trip</p>
          <a href="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition inline-block">
            Get in Touch
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}