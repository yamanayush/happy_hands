import Image from "next/image";
import ServicePlans from './components/ServicePlans';
import Navbar from './components/Navbar';
import Contact from './components/Contact';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="bg-white">
          <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Professional Cleaning</span>
                <span className="block text-blue-600">For Your Home</span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Experience the finest home cleaning service. Choose from our flexible plans 
                designed to meet your specific needs.
              </p>
              <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                <div className="rounded-md shadow">
                  <a href="#plans" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
                    View Plans
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Plans Section */}
        <div id="plans">
          <ServicePlans />
        </div>

        {/* Services Section */}
        <section id="services" className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
              <p className="mt-4 text-lg text-gray-500">Comprehensive cleaning solutions for your home</p>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: 'Regular Cleaning',
                  description: 'Regular maintenance cleaning for a consistently clean home.',
                  icon: '🧹'
                },
                {
                  title: 'Deep Cleaning',
                  description: 'Thorough deep cleaning for those special occasions.',
                  icon: '✨'
                },
                {
                  title: 'Move In/Out',
                  description: 'Detailed cleaning for moving transitions.',
                  icon: '🏠'
                },
                {
                  title: 'Window Cleaning',
                  description: 'Crystal clear windows inside and out.',
                  icon: '🪟'
                },
                {
                  title: 'Carpet Cleaning',
                  description: 'Deep carpet cleaning and stain removal.',
                  icon: '🧶'
                },
                {
                  title: 'Special Events',
                  description: 'Pre and post event cleaning services.',
                  icon: '🎉'
                }
              ].map((service) => (
                <div key={service.title} className="text-center p-6 bg-gray-50 rounded-lg">
                  <span className="text-4xl mb-4 block">{service.icon}</span>
                  <h3 className="text-xl font-medium text-gray-900">{service.title}</h3>
                  <p className="mt-2 text-base text-gray-500">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900">Why Choose Us?</h2>
              <p className="mt-4 text-lg text-gray-500">We provide professional and reliable cleaning services</p>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: 'Professional Staff',
                  description: 'Our cleaning professionals are trained, vetted, and insured.',
                },
                {
                  title: 'Flexible Scheduling',
                  description: 'Book your preferred time slot that works best for you.',
                },
                {
                  title: 'Satisfaction Guaranteed',
                  description: '100% satisfaction guarantee with our cleaning services.',
                },
              ].map((feature) => (
                <div key={feature.title} className="text-center">
                  <h3 className="mt-2 text-xl font-medium text-gray-900">{feature.title}</h3>
                  <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-white">
        <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-blue-600 font-bold text-lg">HappyHands</h3>
              <p className="mt-2 text-sm text-gray-500">Professional cleaning services for your home and office.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-500 hover:text-blue-600">Home</a></li>
                <li><a href="#plans" className="text-gray-500 hover:text-blue-600">Plans</a></li>
                <li><a href="#services" className="text-gray-500 hover:text-blue-600">Services</a></li>
                <li><a href="#contact" className="text-gray-500 hover:text-blue-600">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-500 hover:text-blue-600">Regular Cleaning</a></li>
                <li><a href="#" className="text-gray-500 hover:text-blue-600">Deep Cleaning</a></li>
                <li><a href="#" className="text-gray-500 hover:text-blue-600">Move In/Out</a></li>
                <li><a href="#" className="text-gray-500 hover:text-blue-600">Special Events</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-500">
                <li>📞 (555) 123-4567</li>
                <li>📧 info@happyhands.com</li>
                <li>📍 123 Cleaning Street</li>
                <li>🕒 Mon-Sat: 8am - 7pm</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} HappyHands. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
