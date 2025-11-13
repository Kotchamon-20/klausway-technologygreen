import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { CalendarIcon, UserIcon, ArrowRightIcon } from 'lucide-react';
export function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const categories = [{
    id: 'all',
    label: 'All Posts'
  }, {
    id: 'technology',
    label: 'Technology'
  }, {
    id: 'cms',
    label: 'CMS'
  }, {
    id: 'security',
    label: 'Security'
  }, {
    id: 'best-practices',
    label: 'Best Practices'
  }];
  const posts = [{
    title: 'The Future of Content Management Systems in 2024',
    category: 'cms',
    excerpt: 'Explore the latest trends and innovations shaping the future of CMS platforms and how businesses can leverage them.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    author: 'Sarah Johnson',
    date: 'March 15, 2024',
    readTime: '5 min read'
  }, {
    title: 'Cybersecurity Best Practices for Modern Businesses',
    category: 'security',
    excerpt: 'Essential security measures every business should implement to protect their digital assets from evolving threats.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop',
    author: 'Michael Chen',
    date: 'March 12, 2024',
    readTime: '7 min read'
  }, {
    title: 'Cloud Migration: A Complete Guide for Enterprises',
    category: 'technology',
    excerpt: 'Step-by-step guide to successfully migrating your enterprise infrastructure to the cloud with minimal disruption.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
    author: 'David Kim',
    date: 'March 10, 2024',
    readTime: '10 min read'
  }, {
    title: 'Optimizing Website Performance: Tips and Tricks',
    category: 'best-practices',
    excerpt: 'Proven strategies to improve your website speed and performance for better user experience and SEO.',
    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=800&h=600&fit=crop',
    author: 'Emily Rodriguez',
    date: 'March 8, 2024',
    readTime: '6 min read'
  }, {
    title: 'Headless CMS vs Traditional CMS: Which is Right for You?',
    category: 'cms',
    excerpt: 'A comprehensive comparison of headless and traditional CMS architectures to help you make the right choice.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop',
    author: 'Sarah Johnson',
    date: 'March 5, 2024',
    readTime: '8 min read'
  }, {
    title: 'AI and Machine Learning in IT Infrastructure',
    category: 'technology',
    excerpt: 'How artificial intelligence is revolutionizing IT operations and infrastructure management.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
    author: 'Michael Chen',
    date: 'March 1, 2024',
    readTime: '9 min read'
  }];
  const filteredPosts = selectedCategory === 'all' ? posts : posts.filter(post => post.category === selectedCategory);
  return <div className="min-h-screen bg-black text-white w-full">
      <Header />
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent">
            Our Blog
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Insights, tips, and best practices from our team of IT experts
          </p>
        </div>
      </section>
      {/* Categories */}
      <section className="pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(cat => <button key={cat.id} onClick={() => setSelectedCategory(cat.id)} className={`px-6 py-2 rounded-lg font-medium transition-all ${selectedCategory === cat.id ? 'bg-gradient-to-r from-teal-500 to-teal-600 text-white' : 'bg-white/10 text-gray-300 hover:bg-white/20'}`}>
                {cat.label}
              </button>)}
          </div>
        </div>
      </section>
      {/* Blog Posts */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => <article key={index} className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 overflow-hidden hover:border-teal-500/50 transition-all group">
                <div className="relative overflow-hidden h-48">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-teal-500/80 text-white rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <div className="flex items-center space-x-2">
                      <UserIcon size={14} />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CalendarIcon size={14} />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <button className="flex items-center space-x-2 text-teal-400 hover:text-teal-300 font-semibold text-sm">
                    <span>Read More</span>
                    <ArrowRightIcon size={16} />
                  </button>
                </div>
              </article>)}
          </div>
        </div>
      </section>
      <Footer />
    </div>;
}