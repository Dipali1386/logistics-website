'use client'

import Header from './components/Header'
import Footer from './components/Footer'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-800 dark:text-gray-100 transition-all">
      <Header />

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center px-6 py-24 md:py-32 text-center overflow-hidden">
        {/* Optional background blob */}
        <div className="absolute inset-0 z-0 opacity-10 dark:opacity-20">
          <svg viewBox="0 0 200 200" className="w-[500px] h-[500px] mx-auto rotate-45 text-blue-200 dark:text-blue-900">
            <path
              fill="currentColor"
              d="M41.6,-67.4C53.5,-61.5,63.6,-53.4,69.6,-42.3C75.6,-31.2,77.5,-17.1,74.3,-4C71.1,9.1,62.8,18.1,56.2,28.1C49.6,38,44.6,48.9,35.9,56.5C27.2,64.2,13.6,68.7,-0.5,69.4C-14.6,70.1,-29.2,66.9,-38.9,58.1C-48.6,49.3,-53.4,35,-59.3,21.6C-65.2,8.1,-72.1,-4.5,-71.8,-17.6C-71.5,-30.7,-64.1,-44.3,-52.9,-51.8C-41.7,-59.4,-26.7,-60.9,-13.3,-65.9C0.2,-71,13.3,-79.3,26.6,-78.7C39.9,-78.1,53.4,-68.5,41.6,-67.4Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 dark:text-white mb-6">
            Delivering Logistics <span className="text-gray-900 dark:text-blue-400">with Speed & Trust</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
            We move goods across cities, borders, and expectations — backed by real-time tracking, expert teams, and
            technology that drives results.
          </p>

          
        </motion.div>
      </section>

      
    </main>
  )
}
