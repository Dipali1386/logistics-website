"use client";
import React from "react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Top Border Gradient Line */}
      <div className="h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500" />

      {/* Main Container */}
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-16">
        {/* About Header */}
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-extrabold text-blue-700">About Our Logistics Company</h1>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed text-gray-700">
            We are a trusted logistics and transport solutions provider committed to delivering your goods on time and safely. With years of industry experience, we specialize in freight forwarding, warehousing, and supply chain management services tailored to meet the diverse needs of our clients.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-gray-100 rounded-xl p-8 shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-purple-600">Our Mission</h2>
          <p className="leading-relaxed text-gray-700">
            To provide fast, reliable, and cost-effective transportation and logistics services while maintaining the highest standards of customer satisfaction and operational excellence.
          </p>
        </div>

        {/* Why Choose Us */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-purple-600 text-center">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "24/7 Support",
                desc: "We’re here anytime you need us.",
              },
              {
                title: "Live Tracking",
                desc: "Real-time tracking and delivery updates.",
              },
              {
                title: "Expert Team",
                desc: "Experienced and dedicated logistics professionals.",
              },
              {
                title: "Global Reach",
                desc: "Nationwide and international delivery network.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white border rounded-lg p-6 shadow hover:shadow-lg transition duration-300"
              >
                <h3 className="text-xl font-bold text-blue-600 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
