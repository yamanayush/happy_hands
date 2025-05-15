import React from 'react';

interface PlanProps {
  title: string;
  price: number;
  frequency: string;
  features: string[];
  isPopular?: boolean;
}

const Plan: React.FC<PlanProps> = ({ title, price, frequency, features, isPopular }) => (
  <div className={`rounded-lg p-6 ${isPopular ? 'bg-blue-50 border-2 border-blue-500' : 'bg-white border border-gray-200'}`}>
    {isPopular && (
      <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
        Most Popular
      </span>
    )}
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <div className="mb-4">
      <span className="text-3xl font-bold">${price}</span>
      <span className="text-gray-600">/{frequency}</span>
    </div>
    <ul className="space-y-3">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center">
          <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          {feature}
        </li>
      ))}
    </ul>
    <button className={`w-full mt-6 py-2 px-4 rounded-lg font-semibold ${
      isPopular
        ? 'bg-blue-500 text-white hover:bg-blue-600'
        : 'bg-gray-800 text-white hover:bg-gray-900'
    }`}>
      Choose Plan
    </button>
  </div>
);

const ServicePlans: React.FC = () => {
  const plans = [
    {
      title: "Daily Clean",
      price: 120,
      frequency: "visit",
      features: [
        "One-time cleaning service",
        "Flexible scheduling",
        "Basic cleaning included",
        "2-3 hours service",
        "Satisfaction guaranteed"
      ]
    },
    {
      title: "Weekly Plan",
      price: 95,
      frequency: "visit",
      isPopular: true,
      features: [
        "Regular weekly visits",
        "15% savings per visit",
        "Deep cleaning included",
        "Fixed schedule options",
        "Same team guarantee"
      ]
    },
    {
      title: "Monthly Plan",
      price: 85,
      frequency: "visit",
      features: [
        "Best value package",
        "25% savings per visit",
        "Premium services included",
        "Priority scheduling",
        "Dedicated cleaning team"
      ]
    }
  ];

  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Choose Your Cleaning Plan</h2>
          <p className="text-gray-600">Select the perfect cleaning plan for your needs</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Plan key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicePlans; 