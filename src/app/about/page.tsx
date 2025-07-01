'use client'

import Header from '../components/Header'
import Footer from '../components/Footer'

export default function About() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-800 dark:text-gray-100">
      <Header />

      <section className="px-6 py-16 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-700 dark:text-white mb-10">
          Driven by Precision. Powered by Trust.
        </h2>

        <div className="space-y-6 text-lg leading-relaxed">
          <p>
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              Logistics & Transport
            </span>{' '}
            isn't just a name — it's a commitment. From local deliveries to global supply chain solutions,
            we specialize in moving goods quickly, safely, and efficiently.
          </p>

          <p>
            With years of industry experience, a reliable fleet, and cutting-edge logistics technology,
            we help businesses deliver beyond expectations. We handle everything —
            from warehousing and packaging to real-time tracking and last-mile fulfillment.
          </p>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold mb-4 text-center">Our Mission 🚀</h3>
            <p>
              To provide intelligent, transparent, and customer-first logistics solutions that keep your business moving.
              We don’t just move packages — we move your promise.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold mb-4 text-center">Why Choose Us? ✅</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>🚛 Nationwide & international freight expertise</li>
              <li>📦 Scalable warehousing & distribution</li>
              <li>📍 Real-time GPS tracking & delivery insights</li>
              <li>💡 AI-based route planning for efficiency</li>
              <li>📞 Dedicated 24/7 customer support</li>
              <li>🌱 Eco-conscious & sustainable logistics practices</li>
            </ul>
          </div>

          <p className="text-center mt-10 text-blue-600 dark:text-blue-400 font-medium">
            Let us be your trusted logistics partner. Experience reliability, redefined.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
