import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ChevronDownIcon } from 'lucide-react';
export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqCategories = [{
    category: 'General',
    questions: [{
      question: 'What services does Klausway-technology offer?',
      answer: 'We offer comprehensive IT consulting, CMS development and implementation, 24/7 IT support and maintenance, cybersecurity solutions, data management, and system integration services. Our solutions are tailored to meet the unique needs of businesses across various industries.'
    }, {
      question: 'How long has Klausway-technology been in business?',
      answer: 'Klausway-technology was founded in 2009 and has been providing cutting-edge IT solutions for over 15 years. We have successfully completed over 500 projects and maintain a 98% client satisfaction rate.'
    }, {
      question: 'What industries do you serve?',
      answer: 'We serve a wide range of industries including e-commerce, healthcare, education, finance, retail, and enterprise technology. Our team has expertise in delivering industry-specific solutions that comply with relevant regulations and best practices.'
    }]
  }, {
    category: 'Services & Pricing',
    questions: [{
      question: 'How much do your services cost?',
      answer: 'Our pricing varies based on the scope and complexity of each project. We offer flexible packages starting from $2,999 for small businesses, $7,999 for growing businesses, and custom enterprise solutions. Contact us for a detailed quote tailored to your specific needs.'
    }, {
      question: 'Do you offer ongoing support after project completion?',
      answer: 'Yes! We provide comprehensive support packages ranging from 3 to 12 months depending on your chosen plan. Our support includes regular maintenance, updates, bug fixes, and technical assistance. We also offer 24/7 emergency support for enterprise clients.'
    }, {
      question: 'Can you work with our existing systems?',
      answer: 'Absolutely! We specialize in system integration and can seamlessly work with your existing infrastructure. Our team has experience integrating with various platforms, legacy systems, and third-party software to ensure smooth operations.'
    }]
  }, {
    category: 'CMS & Development',
    questions: [{
      question: 'What CMS platforms do you work with?',
      answer: 'We work with a variety of CMS platforms including WordPress, Drupal, and custom-built solutions. We also specialize in headless CMS architectures for businesses requiring flexibility and scalability. Our team will recommend the best platform based on your specific requirements.'
    }, {
      question: 'How long does it take to implement a CMS?',
      answer: 'Implementation timelines vary based on project complexity. A basic CMS setup typically takes 4-6 weeks, while more complex enterprise solutions may take 3-6 months. We provide detailed project timelines during the consultation phase.'
    }, {
      question: 'Will I be able to update content myself?',
      answer: 'Yes! All our CMS solutions are designed with user-friendliness in mind. We provide comprehensive training to ensure your team can confidently manage and update content. We also offer ongoing support if you need assistance.'
    }]
  }, {
    category: 'Security & Compliance',
    questions: [{
      question: 'How do you ensure data security?',
      answer: 'We implement enterprise-grade security measures including data encryption, secure authentication, regular security audits, penetration testing, and compliance with industry standards. All our solutions are built with security as a top priority.'
    }, {
      question: 'Are your solutions HIPAA compliant?',
      answer: 'Yes, we have extensive experience developing HIPAA-compliant systems for healthcare providers. Our healthcare solutions include all necessary security measures, audit trails, and documentation required for HIPAA compliance.'
    }, {
      question: 'Do you perform regular security updates?',
      answer: 'Yes, our support packages include regular security updates and patches. We monitor systems 24/7 for potential vulnerabilities and apply critical security updates promptly to ensure your infrastructure remains secure.'
    }]
  }];
  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  let globalIndex = 0;
  return <div className="min-h-screen bg-black text-white w-full">
      <Header />
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Find answers to common questions about our services, pricing, and
            processes.
          </p>
        </div>
      </section>
      {/* FAQ Sections */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          {faqCategories.map((category, catIndex) => <div key={catIndex}>
              <h2 className="text-3xl font-bold mb-6 text-teal-400">
                {category.category}
              </h2>
              <div className="space-y-4">
                {category.questions.map(faq => {
              const currentIndex = globalIndex++;
              return <div key={currentIndex} className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 overflow-hidden">
                      <button onClick={() => toggleQuestion(currentIndex)} className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors">
                        <span className="font-semibold pr-8">
                          {faq.question}
                        </span>
                        <ChevronDownIcon size={24} className={`flex-shrink-0 text-teal-400 transition-transform ${openIndex === currentIndex ? 'rotate-180' : ''}`} />
                      </button>
                      {openIndex === currentIndex && <div className="px-6 pb-5">
                          <p className="text-gray-300 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>}
                    </div>;
            })}
              </div>
            </div>)}
        </div>
      </section>
      {/* Contact CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team is here to help. Get in touch with us for personalized
            assistance.
          </p>
          <a href="/contact" className="inline-block px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-teal-500/50 transition-all">
            Contact Us
          </a>
        </div>
      </section>
      <Footer />
    </div>;
}