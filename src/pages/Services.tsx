import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { CloudIcon, CodeIcon, ServerIcon, ShieldIcon, DatabaseIcon, SettingsIcon, ZapIcon, HeadphonesIcon, CheckCircleIcon } from 'lucide-react';
export function Services() {
  const services = [{
    icon: <CloudIcon size={48} />,
    title: 'IT Consulting & Strategy',
    description: 'Strategic IT planning and consulting to align technology with your business objectives.',
    features: ['Technology roadmap development', 'Digital transformation consulting', 'IT infrastructure assessment', 'Business process optimization']
  }, {
    icon: <CodeIcon size={48} />,
    title: 'CMS Development & Implementation',
    description: 'Custom content management systems tailored to your specific needs and workflows.',
    features: ['Custom CMS development', 'WordPress & Drupal solutions', 'Headless CMS architecture', 'Content migration services']
  }, {
    icon: <ServerIcon size={48} />,
    title: 'IT Support & Maintenance',
    description: '24/7 technical support to ensure your systems run smoothly and efficiently.',
    features: ['24/7 helpdesk support', 'Proactive system monitoring', 'Regular maintenance & updates', 'Emergency response services']
  }, {
    icon: <ShieldIcon size={48} />,
    title: 'Cybersecurity Solutions',
    description: 'Comprehensive security measures to protect your digital assets from threats.',
    features: ['Security audits & assessments', 'Penetration testing', 'Data encryption solutions', 'Compliance management']
  }, {
    icon: <DatabaseIcon size={48} />,
    title: 'Data Management',
    description: 'Efficient data storage, backup, and recovery solutions for business continuity.',
    features: ['Database design & optimization', 'Cloud data migration', 'Backup & disaster recovery', 'Data analytics integration']
  }, {
    icon: <SettingsIcon size={48} />,
    title: 'System Integration',
    description: 'Seamless integration of various software systems and platforms.',
    features: ['API development & integration', 'Legacy system modernization', 'Third-party software integration', 'Workflow automation']
  }];
  return <div className="min-h-screen bg-black text-white w-full">
      <Header />
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive IT solutions designed to drive your business forward
          </p>
        </div>
      </section>
      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => <div key={index} className="p-8 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 hover:border-teal-500/50 transition-all">
                <div className="text-teal-400 mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => <li key={idx} className="flex items-start space-x-2">
                      <CheckCircleIcon size={20} className="text-teal-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>)}
                </ul>
              </div>)}
          </div>
        </div>
      </section>
      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Why Choose TechSolutions?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-teal-400 mb-4 flex justify-center">
                <ZapIcon size={48} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-400">
                Quick turnaround times without compromising on quality
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-teal-400 mb-4 flex justify-center">
                <HeadphonesIcon size={48} />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-400">
                Round-the-clock technical support for your peace of mind
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-teal-400 mb-4 flex justify-center">
                <ShieldIcon size={48} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Solutions</h3>
              <p className="text-gray-400">
                Enterprise-grade security measures in all our implementations
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>;
}