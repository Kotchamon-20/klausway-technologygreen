import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { CloudIcon, ShieldIcon, CodeIcon, ServerIcon, ArrowRightIcon } from 'lucide-react';
export function Home() {
  const services = [{
    icon: <CloudIcon size={32} />,
    title: 'IT Consulting & Strategy',
    description: 'Expert guidance to align your IT infrastructure with business goals.'
  }, {
    icon: <CodeIcon size={32} />,
    title: 'CMS Implementation',
    description: 'Custom content management solutions tailored to your needs.'
  }, {
    icon: <ServerIcon size={32} />,
    title: 'IT Support & Maintenance',
    description: '24/7 technical support to keep your systems running smoothly.'
  }, {
    icon: <ShieldIcon size={32} />,
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your digital assets.'
  }];
  return <div className="min-h-screen bg-black text-white w-full">
      <Header />
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-600/20 rounded-full blur-3xl animate-pulse"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent">
              Empowering Businesses with Next-Gen CMS & IT Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your digital infrastructure with cutting-edge technology
              and expert guidance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-teal-500/50 transition-all flex items-center justify-center space-x-2">
                <span>Get a Free Consultation</span>
                <ArrowRightIcon size={20} />
              </Link>
              <Link to="/services" className="px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-lg font-semibold hover:bg-white/20 transition-all">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Services Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-teal-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-400">
              Comprehensive IT solutions for modern businesses
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => <div key={index} className="p-6 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 hover:bg-white/10 hover:border-teal-500/50 transition-all group">
                <div className="text-teal-400 mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm">{service.description}</p>
              </div>)}
          </div>
          <div className="text-center mt-12">
            <Link to="/services" className="inline-flex items-center space-x-2 text-teal-400 hover:text-teal-300 font-semibold">
              <span>View All Services</span>
              <ArrowRightIcon size={20} />
            </Link>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-12 bg-gradient-to-r from-teal-500/10 to-teal-600/10 backdrop-blur-md rounded-2xl border border-teal-500/20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can help your business thrive with
              cutting-edge technology
            </p>
            <Link to="/contact" className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-teal-500/50 transition-all">
              <span>Schedule a Consultation</span>
              <ArrowRightIcon size={20} />
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>;
}