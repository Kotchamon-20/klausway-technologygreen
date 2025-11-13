import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ExternalLinkIcon } from 'lucide-react';
export function Portfolio() {
  const [filter, setFilter] = useState('all');
  const projects = [{
    title: 'Global Retail Platform',
    category: 'e-commerce',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    description: 'Complete e-commerce solution with integrated CMS and payment processing',
    tech: ['React', 'Node.js', 'MongoDB']
  }, {
    title: 'Healthcare Management System',
    category: 'healthcare',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
    description: 'HIPAA-compliant patient management system for medical facilities',
    tech: ['Angular', 'PostgreSQL', 'AWS']
  }, {
    title: 'Enterprise CMS Platform',
    category: 'enterprise',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop',
    description: 'Custom content management system for Fortune 500 company',
    tech: ['Vue.js', 'Python', 'Docker']
  }, {
    title: 'Educational Learning Portal',
    category: 'education',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop',
    description: 'Online learning platform with course management and video streaming',
    tech: ['React', 'Firebase', 'WebRTC']
  }, {
    title: 'Financial Services Dashboard',
    category: 'enterprise',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    description: 'Real-time analytics dashboard for financial data management',
    tech: ['React', 'D3.js', 'GraphQL']
  }, {
    title: 'Restaurant Chain Management',
    category: 'e-commerce',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop',
    description: 'Multi-location restaurant management with online ordering system',
    tech: ['Next.js', 'Stripe', 'PostgreSQL']
  }];
  const categories = [{
    id: 'all',
    label: 'All Projects'
  }, {
    id: 'e-commerce',
    label: 'E-Commerce'
  }, {
    id: 'healthcare',
    label: 'Healthcare'
  }, {
    id: 'enterprise',
    label: 'Enterprise'
  }, {
    id: 'education',
    label: 'Education'
  }];
  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);
  return <div className="min-h-screen bg-black text-white w-full">
      <Header />
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent">
            Our Portfolio
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Showcasing successful projects across various industries
          </p>
        </div>
      </section>
      {/* Filter */}
      <section className="pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(cat => <button key={cat.id} onClick={() => setFilter(cat.id)} className={`px-6 py-2 rounded-lg font-medium transition-all ${filter === cat.id ? 'bg-gradient-to-r from-teal-500 to-teal-600 text-white' : 'bg-white/10 text-gray-300 hover:bg-white/20'}`}>
                {cat.label}
              </button>)}
          </div>
        </div>
      </section>
      {/* Projects Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => <div key={index} className="group bg-white/5 backdrop-blur-md rounded-xl border border-white/10 overflow-hidden hover:border-teal-500/50 transition-all">
                <div className="relative overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, idx) => <span key={idx} className="px-3 py-1 bg-teal-500/20 text-teal-400 rounded-full text-xs">
                        {tech}
                      </span>)}
                  </div>
                  <button className="flex items-center space-x-2 text-teal-400 hover:text-teal-300 font-semibold text-sm">
                    <span>View Project</span>
                    <ExternalLinkIcon size={16} />
                  </button>
                </div>
              </div>)}
          </div>
        </div>
      </section>
      <Footer />
    </div>;
}