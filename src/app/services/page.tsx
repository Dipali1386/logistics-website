'use client'

import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Services() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-800 dark:text-gray-100 transition-all">
      <Header />

      <section className="px-6 py-16 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-700 dark:text-white mb-10">
          Our Core Services
        </h2>

        <p className="text-center text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
          Whether you're shipping across cities or continents, we provide tailor-made logistics solutions that ensure speed,
          safety, and success. Explore our range of expertly managed services below.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {/* Service Card 1 */}
          <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-xl shadow-lg p-6 hover:shadow-xl transition">
            <div className="text-4xl mb-4">🚛</div>
            <h3 className="text-2xl font-semibold mb-2">Freight Transportation</h3>
            <p>
              From local routes to international cargo — we move goods swiftly and securely via road, air, rail, and sea.
              Trusted by industries across India and beyond.
            </p>
          </div>

          {/* Service Card 2 */}
          <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-xl shadow-lg p-6 hover:shadow-xl transition">
            <div className="text-4xl mb-4">🏢</div>
            <h3 className="text-2xl font-semibold mb-2">Warehousing & Inventory</h3>
            <p>
              Modern, secure, and scalable storage spaces equipped with inventory management systems. Ideal for eCommerce,
              FMCG, and manufacturing supply chains.
            </p>
          </div>

          {/* Service Card 3 */}
          <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-xl shadow-lg p-6 hover:shadow-xl transition">
            <div className="text-4xl mb-4">📦</div>
            <h3 className="text-2xl font-semibold mb-2">Last-Mile Delivery</h3>
            <p>
              We ensure on-time doorstep deliveries with real-time tracking. From warehouses to homes, we handle every
              last-mile with precision and professionalism.
            </p>
          </div>

          {/* Service Card 4 */}
          <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-xl shadow-lg p-6 hover:shadow-xl transition">
            <div className="text-4xl mb-4">🧠</div>
            <h3 className="text-2xl font-semibold mb-2">Logistics Consulting</h3>
            <p>
              Need help optimizing your supply chain? Our experts craft data-driven strategies to cut costs, speed up
              deliveries, and scale smarter.
            </p>
          </div>

          {/* Service Card 5 */}
          <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-xl shadow-lg p-6 hover:shadow-xl transition">
            <div className="text-4xl mb-4">📍</div>
            <h3 className="text-2xl font-semibold mb-2">GPS Tracking & Tech</h3>
            <p>
              Stay in control with our tech-enabled platform — track vehicles, monitor delays, and get real-time updates.
              Transparency that builds trust.
            </p>
          </div>

          {/* Service Card 6 */}
          <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-xl shadow-lg p-6 hover:shadow-xl transition">
            <div className="text-4xl mb-4">🌐</div>
            <h3 className="text-2xl font-semibold mb-2">Global Freight Forwarding</h3>
            <p>
              We simplify cross-border logistics. Partnered with global carriers, we handle customs, documentation, and
              end-to-end delivery across continents.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
