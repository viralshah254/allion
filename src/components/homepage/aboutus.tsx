

import React from 'react'
import { motion } from 'framer-motion'

const AboutUs: React.FC = () => (
  <section className="py-16 bg-seasalt">
    <motion.div
      className="container mx-auto px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-helvetica font-bold text-oda-indigo text-center mb-6">
        About Allion Insurance Brokers Ltd
      </h2>
      <p className="text-gray-700 font-helvetica text-lg text-center mb-12 leading-relaxed">
        At Allion Insurance Brokers, we are dedicated to providing world-class brokerage services that empower our clients to navigate the complexities of insurance with confidence. With over two decades of experience, we partner with Kenya’s leading insurers to deliver tailored, cost-effective solutions for businesses and individuals alike.
      </p>

      <div className="grid gap-12 md:grid-cols-2 mb-16">
        <div>
          <h3 className="text-2xl font-helvetica font-semibold text-oda-indigo mb-4">
            Our Vision
          </h3>
          <p className="text-gray-700 font-helvetica leading-relaxed">
            To be the most trusted insurance brokerage in Kenya—setting the standard for integrity, innovation, and client-centric service in the non-life insurance sector.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-helvetica font-semibold text-oda-indigo mb-4">
            Our Mission
          </h3>
          <p className="text-gray-700 font-helvetica leading-relaxed">
            To deliver personalized brokerage services by leveraging our deep industry expertise and strong insurer relationships—ensuring every client secures the best possible coverage at the most competitive premiums.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-lg p-8">
        <img
          src="/assets/images/mr-khan.jpg"
          alt="Mr. Khan, Founder of Allion Insurance Brokers"
          className="w-32 h-32 rounded-full object-cover mb-6 md:mb-0 md:mr-8"
        />
        <div>
          <h3 className="text-2xl font-helvetica font-semibold text-oda-indigo mb-2">
            Our Founder: Mr. Khan
          </h3>
          <p className="text-gray-700 font-helvetica leading-relaxed">
            A seasoned insurance veteran, Mr. Khan founded Allion Insurance Brokers with a bold vision: to bridge the gap between clients and insurers through unwavering integrity and expertise. His leadership and passion for excellence continue to inspire our team to raise the bar in brokerage services every day.
          </p>
        </div>
      </div>
    </motion.div>
  </section>
)

export default AboutUs