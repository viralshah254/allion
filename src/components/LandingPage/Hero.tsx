import React, { useState, useEffect } from 'react';
import fetchJsonp from 'fetch-jsonp';
import { Link } from 'react-router-dom';

const KENYAN_MAKES = [
  'Toyota', 'Nissan', 'Mitsubishi', 'Isuzu', 'Ford',
  'Honda', 'Mazda', 'Mercedes-Benz', 'BMW', 'Volkswagen',
  'Subaru', 'Chevrolet', 'Kia', 'Hyundai', 'Suzuki',
  'Land Rover', 'GMC', 'Volvo', 'Daihatsu', 'Jeep'
];

const Hero: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [phone, setPhone] = useState('');
  const [insuranceType, setInsuranceType] = useState<'Motor' | 'Health' | ''>('');
  const [vehicleMake, setVehicleMake] = useState('');
  const [vehicleModel, setVehicleModel] = useState('');
  const [vehicleYear, setVehicleYear] = useState('');
  const [estimatedValue, setEstimatedValue] = useState('');

  const [makes, setMakes] = useState<{make_id: string; make_display: string;}[]>([]);
  const [models, setModels] = useState<{model_name: string;}[]>([]);
  const [years, setYears] = useState<string[]>([]);

  useEffect(() => {
    if (showModal && insuranceType === 'Motor') {
      fetchJsonp('https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getMakes')
        .then(res => res.json())
        .then((data: any) => {
          const allMakes = data.Makes || [];
          const filtered = allMakes.filter((m: any) => KENYAN_MAKES.includes(m.make_display));
          setMakes(filtered);
        })
        .catch(console.error);
    }
  }, [showModal, insuranceType]);

  useEffect(() => {
    if (vehicleMake) {
      fetchJsonp(`https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getModels&make=${vehicleMake}`)
        .then(res => res.json())
        .then((data: any) => setModels(data.Models || []))
        .catch(console.error);
    }
  }, [vehicleMake]);

  useEffect(() => {
    if (vehicleMake && vehicleModel) {
      fetchJsonp(`https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getTrims&make=${vehicleMake}&model=${vehicleModel}`)
        .then(res => res.json())
        .then((data: any) => {
          const yrs: string[] = Array.from(
            new Set(
              data.Trims.map((t: any) => String(t.model_year))
            )
          );
          setYears(yrs);
        })
        .catch(console.error);
    }
  }, [vehicleMake, vehicleModel]);

  return (
    <div className="bg-seasalt">
      <div className="container mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center">
          {/* Text content */}
          <div className="md:w-1/2 text-oda-blue mb-12 md:mb-0 md:pr-12">
            <h1 className="font-helvetica font-bold text-4xl md:text-5xl mb-6">
              Allion Insurance Brokers Ltd — Excellence in Every Policy
            </h1>
            <p className="font-helvetica font-normal text-xl mb-8 text-gray-700">
              With over 20 years of trusted service, we deliver bespoke insurance solutions backed by integrity, personalized attention, and industry-leading expertise. Safeguarding Kenyan businesses and families with confidence.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                type="button"
                onClick={() => setShowModal(true)}
                className="font-helvetica font-bold bg-auburn hover:bg-opacity-90 hover:animate-pulse text-white px-8 py-3 rounded-lg text-center transition-colors"
              >
                Request a Quote
              </button>
              <Link 
                to="/insurance-plans" 
                className="font-helvetica font-bold border-2 border-oda-blue text-oda-blue hover:bg-oda-blue hover:text-white hover:animate-pulse px-8 py-3 rounded-lg text-center transition-colors"
              >
                Explore Our Covers
              </Link>
            </div>
          </div>
          
          {/* Card grid */}
          <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-lg p-6 shadow-lg transform transition-transform hover:scale-105 border-t-4 border-airforce-blue">
              <div className="h-12 w-12 bg-airforce-blue rounded-full flex items-center justify-center mb-4 animate-bounce">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-helvetica font-bold text-oda-blue text-xl mb-2">Trusted by Thousands</h3>
              <p className="font-helvetica text-gray-700">Over 20 years safeguarding Kenyan businesses and families with tailored policies, prompt claims support, and unwavering integrity.</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="font-helvetica font-bold text-3xl text-oda-indigo">KES 77K</span>
                <button className="bg-oda-indigo text-white p-2 rounded-full hover:bg-airforce-blue transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Card 2 */}
            <div className="bg-white rounded-lg p-6 shadow-lg transform transition-transform hover:scale-105 border-t-4 border-auburn">
              <div className="h-12 w-12 bg-auburn rounded-full flex items-center justify-center mb-4 animate-bounce">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-helvetica font-bold text-oda-blue text-xl mb-2">Personalized Service</h3>
              <p className="font-helvetica text-gray-700">One-on-one consultations and custom risk assessments ‘because every client is unique.‘</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="font-helvetica font-bold text-3xl text-oda-indigo">100%</span>
                <button className="bg-oda-indigo text-white p-2 rounded-full hover:bg-airforce-blue transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Partners section with more subtle styling */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <p className="font-helvetica font-light text-center text-gray-600 text-sm mb-6">Trusted by leading companies</p>
          <div className="flex flex-wrap justify-center gap-8 text-gray-500">
            <div className="font-helvetica font-bold">Sigma Feeds</div>
            <div className="font-helvetica font-bold">Irvines</div>
            <div className="font-helvetica font-bold">Hass</div>
            <div className="font-helvetica font-bold">Van</div>
            <div className="font-helvetica font-bold">San</div>
          </div>
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-11/12 max-w-md p-6 relative">
            <button
              type="button"
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={() => setShowModal(false)}
            >
              &times;
            </button>
            <h2 className="text-2xl font-helvetica font-bold mb-4 text-oda-blue">Request a Quote</h2>
            <form className="space-y-4">
              <div>
                <label className="block font-helvetica mb-1">First Name</label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg p-2 font-helvetica"
                />
              </div>
              <div>
                <label className="block font-helvetica mb-1">Phone No</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg p-2 font-helvetica"
                />
              </div>
              <div>
                <label className="block font-helvetica mb-1">Type of Insurance</label>
                <div className="flex gap-4">
                  <button
                    type="button"
                    className={`px-4 py-2 rounded-lg font-helvetica border ${
                      insuranceType === 'Motor'
                        ? 'bg-oda-blue text-white border-oda-blue'
                        : 'bg-white text-gray-700 border-gray-300'
                    }`}
                    onClick={() => setInsuranceType('Motor')}
                  >
                    Motor
                  </button>
                  <button
                    type="button"
                    className={`px-4 py-2 rounded-lg font-helvetica border ${
                      insuranceType === 'Health'
                        ? 'bg-oda-blue text-white border-oda-blue'
                        : 'bg-white text-gray-700 border-gray-300'
                    }`}
                    onClick={() => setInsuranceType('Health')}
                  >
                    Health
                  </button>
                </div>
              </div>
              {insuranceType === 'Motor' && (
                <div className="space-y-4">
                  <div>
                    <label className="block font-helvetica mb-1">Vehicle Make</label>
                    <select
                      value={vehicleMake}
                      onChange={e => { setVehicleMake(e.target.value); setVehicleModel(''); setYears([]); }}
                      className="w-full border border-gray-300 rounded-lg p-2 font-helvetica"
                    >
                      <option value="">Select Make</option>
                      {makes.map(m => (
                        <option key={m.make_id} value={m.make_id}>{m.make_display}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block font-helvetica mb-1">Vehicle Model</label>
                    <select
                      value={vehicleModel}
                      onChange={e => setVehicleModel(e.target.value)}
                      className="w-full border border-gray-300 rounded-lg p-2 font-helvetica"
                      disabled={!models.length}
                    >
                      <option value="">Select Model</option>
                      {models.map(m => (
                        <option key={m.model_name} value={m.model_name}>{m.model_name}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block font-helvetica mb-1">Year</label>
                    <select
                      value={vehicleYear}
                      onChange={e => setVehicleYear(e.target.value)}
                      className="w-full border border-gray-300 rounded-lg p-2 font-helvetica"
                      disabled={!years.length}
                    >
                      <option value="">Select Year</option>
                      {years.map(y => (
                        <option key={y} value={y}>{y}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block font-helvetica mb-1">Estimated Value (KES)</label>
                    <input
                      type="number"
                      value={estimatedValue}
                      onChange={(e) => setEstimatedValue(e.target.value)}
                      placeholder="e.g. 1000000"
                      className="w-full border border-gray-300 rounded-lg p-2 font-helvetica"
                    />
                  </div>
                </div>
              )}
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => {
                    // TODO: handle submission
                    setShowModal(false);
                  }}
                  disabled={!(firstName && phone && insuranceType)}
                  className="px-4 py-2 bg-oda-blue text-white rounded-lg font-helvetica hover:bg-opacity-90 disabled:opacity-50"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;