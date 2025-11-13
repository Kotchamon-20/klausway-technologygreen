import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { TargetIcon, EyeIcon, AwardIcon, UsersIcon } from 'lucide-react';
export function About() {
  const values = [{
    icon: <TargetIcon size={32} />,
    title: 'Innovation',
    description: 'Pushing boundaries with cutting-edge solutions'
  }, {
    icon: <UsersIcon size={32} />,
    title: 'Client-Focused',
    description: 'Your success is our priority'
  }, {
    icon: <AwardIcon size={32} />,
    title: 'Excellence',
    description: 'Delivering quality in every project'
  }, {
    icon: <EyeIcon size={32} />,
    title: 'Transparency',
    description: 'Open communication and honest partnerships'
  }];
  const team = [{
    name: 'John Anderson',
    role: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop'
  }, {
    name: 'Lisa Martinez',
    role: 'CTO',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop'
  }, {
    name: 'David Kim',
    role: 'Head of Cybersecurity',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop'
  }, {
    name: 'Rachel Thompson',
    role: 'Lead CMS Developer',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop'
  }];
  return <div className="min-h-screen bg-black text-white w-full">
      <Header />
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent">
            About TechSolutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Leading the way in IT consulting and CMS solutions since 2009
          </p>
        </div>
      </section>
      {/* Company Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-300 mb-4">
              Founded in 2009, TechSolutions has grown from a small startup to a
              leading provider of IT consulting and CMS solutions. Our journey
              has been driven by a passion for technology and a commitment to
              helping businesses succeed.
            </p>
            <p className="text-gray-300">
              Today, we serve clients across various industries, delivering
              innovative solutions that drive growth and efficiency. Our team of
              experts combines technical excellence with business acumen to
              deliver results that matter.
            </p>
          </div>
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop" alt="Team collaboration" className="rounded-xl shadow-2xl" />
          </div>
        </div>
      </section>
      {/* Mission & Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 bg-white/5 backdrop-blur-md rounded-xl border border-white/10">
            <h3 className="text-3xl font-bold mb-4 text-teal-400">
              Our Mission
            </h3>
            <p className="text-gray-300">
              To empower businesses with innovative IT solutions that drive
              growth, efficiency, and competitive advantage in the digital age.
            </p>
          </div>
          <div className="p-8 bg-white/5 backdrop-blur-md rounded-xl border border-white/10">
            <h3 className="text-3xl font-bold mb-4 text-teal-400">
              Our Vision
            </h3>
            <p className="text-gray-300">
              To be the most trusted partner for businesses seeking to transform
              their IT infrastructure and achieve digital excellence.
            </p>
          </div>
        </div>
      </section>
      {/* Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => <div key={index} className="text-center p-6">
                <div className="text-teal-400 mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-400 text-sm">{value.description}</p>
              </div>)}
          </div>
        </div>
      </section>
      {/* Team */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => <div key={index} className="text-center group">
                <div className="mb-4 overflow-hidden rounded-xl">
                  <img src={member.image} alt={member.name} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-teal-400 text-sm">{member.role}</p>
              </div>)}
          </div>
        </div>
      </section>
      <Footer />
    </div>;
}