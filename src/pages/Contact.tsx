import React, { useState, lazy } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { MapPinIcon, PhoneIcon, MailIcon, ClockIcon, SendIcon } from 'lucide-react';
export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const contactInfo = [{
    icon: <MapPinIcon size={24} />,
    title: 'Visit Us',
    content: '123 Tech Street, San Francisco, CA 94105'
  }, {
    icon: <PhoneIcon size={24} />,
    title: 'Call Us',
    content: '+1 (555) 123-4567'
  }, {
    icon: <MailIcon size={24} />,
    title: 'Email Us',
    content: 'info@techsolutions.com'
  }, {
    icon: <ClockIcon size={24} />,
    title: 'Business Hours',
    content: 'Mon-Fri: 9:00 AM - 6:00 PM PST'
  }];
  return <div className="min-h-screen bg-black text-white w-full">
      <Header />
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your IT infrastructure? Let's start a
            conversation.
          </p>
        </div>
      </section>
      {/* Contact Info Cards */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => <div key={index} className="p-6 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 text-center">
                <div className="text-teal-400 mb-4 flex justify-center">
                  {info.icon}
                </div>
                <h3 className="font-semibold mb-2">{info.title}</h3>
                <p className="text-gray-400 text-sm">{info.content}</p>
              </div>)}
          </div>
        </div>
      </section>
      {/* Contact Form & Map */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8">
            <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Full Name *
                </label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-teal-500 transition-colors" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Email Address *
                </label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-teal-500 transition-colors" placeholder="john@example.com" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Company
                  </label>
                  <input type="text" name="company" value={formData.company} onChange={handleChange} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-teal-500 transition-colors" placeholder="Your Company" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Phone
                  </label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-teal-500 transition-colors" placeholder="+1 (555) 123-4567" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Service Interested In
                </label>
                <select name="service" value={formData.service} onChange={handleChange} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-teal-500 transition-colors">
                  <option value="">Select a service</option>
                  <option value="consulting">IT Consulting</option>
                  <option value="cms">CMS Development</option>
                  <option value="support">IT Support</option>
                  <option value="security">Cybersecurity</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Message *
                </label>
                <textarea name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-teal-500 transition-colors resize-none" placeholder="Tell us about your project..."></textarea>
              </div>
              <button type="submit" className="w-full px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-teal-500/50 transition-all flex items-center justify-center space-x-2">
                <span>Send Message</span>
                <SendIcon size={20} />
              </button>
            </form>
          </div>
          {/* Map */}
          <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8">
            <h2 className="text-3xl font-bold mb-6">Our Location</h2>
            <div className="bg-black rounded-xl overflow-hidden h-96 mb-6">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0977203145436!2d-122.39912368468186!3d37.78799897975762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sTwitter%20HQ!5e0!3m2!1sen!2sus!4v1647887654321!5m2!1sen!2sus" width="100%" height="100%" style={{
              border: 0
            }} allowFullScreen loading="lazy"></iframe>
            </div>
            <div className="space-y-4">
              <p className="text-gray-300">
                Visit our office in the heart of San Francisco's tech district.
                We're always happy to meet in person to discuss your project
                needs.
              </p>
              <div className="p-4 bg-teal-500/10 rounded-lg border border-teal-500/20">
                <p className="text-sm text-teal-400 font-semibold mb-2">
                  Schedule a Visit
                </p>
                <p className="text-sm text-gray-300">
                  Please call ahead or book an appointment online to ensure
                  someone from our team is available to meet with you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>;
}