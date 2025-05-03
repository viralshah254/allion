import React from 'react'
import { TruckIcon, FireIcon, CubeIcon, HomeIcon } from '@heroicons/react/24/outline'

const plans = [
  {
    title: 'Motor Insurance',
    Icon: TruckIcon,
    description:
      'Comprehensive cover for third‑party liability, collision damage and theft. Keep you driving with peace of mind—and get back on the road faster.',
    bg: 'bg-airforce-blue',
  },
  {
    title: 'Fire Insurance',
    Icon: FireIcon,
    description:
      'Safeguard your commercial or residential property against fire, smoke, lightning and explosion. We’ll handle fast claims and expert loss adjustment.',
    bg: 'bg-auburn',
  },
  {
    title: 'Marine Insurance',
    Icon: CubeIcon,
    description:
      'Cargo, hull and liability cover for goods in transit—whether by sea, air or inland waterways. Protect your supply chain across borders.',
    bg: 'bg-oda-blue',
  },
  {
    title: 'Domestic Insurance',
    Icon: HomeIcon,
    description:
      'Protect your home and belongings from theft, accidental damage, flooding and more. Customized excess levels to fit your budget.',
    bg: 'bg-airforce-blue',
  },
]

const InsurancePlans: React.FC = () => (
  <section className="py-16 bg-seasalt">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-helvetica font-bold text-oda-indigo text-center mb-8">
        Our Non‑Life Insurance Covers
      </h2>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {plans.map(({ title, Icon, description, bg }) => (
          <div
            key={title}
            className="relative bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform ease-in-out duration-300"
          >
            <div className={`${bg} p-6 text-white`}>
              <Icon className="h-10 w-10 mb-4" />
              <h3 className="text-xl font-bold font-helvetica">{title}</h3>
            </div>
            <p className="p-6 pt-4 text-gray-700 font-helvetica leading-relaxed">
              {description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default InsurancePlans