import React, { useState } from 'react';
import { Link, ArrowDown, Globe2, Beer, Plus, Minus, Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import light from '../assets/light.png';
import dark from '../assets/dark.png';

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex items-center justify-between w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-gray-900">{question}</span>
        {isOpen ? (
          <Minus className="w-5 h-5 text-[#f5e003]" />
        ) : (
          <Plus className="w-5 h-5 text-[#f5e003]" />
        )}
      </button>
      {isOpen && (
        <div className="mt-2 text-gray-600">
          {answer}
        </div>
      )}
    </div>
  );
}

function App() {
  const [selectedZone, setSelectedZone] = useState('');

  const scrollToTools = () => {
    const toolsSection = document.getElementById('tools');
    toolsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const faqs = [
    {
      question: "How do I get access to these tools?",
      answer: "Access to our tools is granted through your ABInBev corporate credentials. New users can request access through the 'Get Started' section below. Your request will be reviewed by your regional administrator."
    },
    {
      question: "What kind of support is available?",
      answer: "We provide 24/7 technical support, comprehensive documentation, and regular training sessions. Our dedicated support team is available via email, phone, or through our internal ticketing system."
    },
    {
      question: "How secure are these platforms?",
      answer: "Our platforms implement enterprise-grade security measures, including end-to-end encryption, multi-factor authentication, and regular security audits. We comply with all global data protection regulations."
    },
    {
      question: "Can I integrate these tools with other systems?",
      answer: "Yes, both platforms offer robust API integration capabilities and can be connected with other internal ABInBev systems as well as approved third-party applications."
    },
    {
      question: "What training is required to use these tools?",
      answer: "We provide comprehensive onboarding training for all new users. Additional advanced training modules are available based on your role and requirements."
    }
  ];

  const zones = [
    "North America",
    "Central America",
    "South America",
    "Europe",
    "Africa",
    "Asia Pacific"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-black bg-opacity-95 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              {/* <Beer className="w-8 h-8 text-[#f5e003]" />
               */}
              <img
                src={dark}
                alt="ABInBev Logo"
                className="h-12 w-15 mx-4 mb-2"
              />
              {/* <span className="text-white font-semibold text-xl">ABInBev</span> */}
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="/" className="text-white hover:text-[#f5e003] transition-colors">Home</a>
              <a href="/features" className="text-white hover:text-[#f5e003] transition-colors">Features</a>
              <a href="/about" className="text-white hover:text-[#f5e003] transition-colors">About Us</a>
              <a href="/faq" className="text-white hover:text-[#f5e003] transition-colors">FAQs</a>
              <a href="/contact" className="text-white hover:text-[#f5e003] transition-colors">Contact Us</a>
            </nav>
            <a
              href="/login"
              className="bg-[#f5e003] text-black px-4 py-2 rounded hover:bg-[#e5b611] transition-colors"
            >
              Login to Tools
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="min-h-screen relative flex flex-col items-center justify-center text-center px-4 pt-16">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1436076863939-06870fe779c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")'
          }}
        ></div>

        <div className="z-10">
          <div className="flex items-center justify-center mb-6">
            <img
              src={light}
              alt="ABInBev Logo"
              className="h-24 mx-auto mb-6"
            />
          </div>
          <h2 className="text-2xl font-medium text-[#e5b611] mb-8">To a Future With More Cheers</h2>
          <p className="text-xl text-black mb-8 max-w-2xl mx-auto">
            Bringing people together for a better world through innovation and technology
          </p>
          <button
            onClick={scrollToTools}
            className="group flex items-center gap-2 mx-auto bg-[#f5e003] text-black px-8 py-4 rounded-full hover:bg-[#e5b611] transition-all duration-300"
          >
            Explore Our Tools
            <ArrowDown className="group-hover:translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </div>

      {/* Tools Section */}
      <div id="tools" className="min-h-screen">
        {/* Enablers of Confidence */}
        <div className="min-h-[50vh] bg-[#000000] flex items-center">
          <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 text-white mb-8 md:mb-0">
              <h2 className="text-4xl font-bold mb-4">Enablers of Confidence</h2>
              <p className="text-lg mb-6 text-[#d3a238]">
                Empower your decision-making with our comprehensive analytics and insights platform.
                Built to provide you with the confidence you need to drive success.
              </p>
              <a
                href="/enablers"
                className="inline-flex items-center gap-2 bg-[#f5e003] text-black px-6 py-3 rounded-lg hover:bg-[#e5b611] transition-all duration-300"
              >
                Access Tool <Link className="w-4 h-4" />
              </a>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <Globe2 className="w-48 h-48 text-[#f5e003] opacity-80" />
            </div>
          </div>
        </div>

        {/* Commercial Connectedness */}
        <div className="min-h-[50vh] bg-[#f5e003] flex items-center">
          <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row-reverse items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-4xl font-bold text-black mb-4">Commercial Connectedness</h2>
              <p className="text-lg mb-6 text-black">
                Connect, collaborate, and grow with our integrated commercial platform.
                Streamline your operations and enhance business relationships.
              </p>
              <a
                href="https://universe-inky.vercel.app/"
                className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-opacity-80 transition-all duration-300"
              >
                Access Tool <Link className="w-4 h-4" />
              </a>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-48 h-48">
                <div className="absolute inset-0 bg-black rounded-full opacity-10"></div>
                <Globe2 className="absolute inset-0 w-full h-full text-black" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </div>

      {/* Get Started Section */}
      <div className="bg-black text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-lg mb-8">Does not have access? Raise onboarding request.</p>

          <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-4">
            <input
              type="email"
              placeholder="Your AB-InBev email"
              className="flex-1 px-4 py-3 rounded text-black"
            />
            <select
              value={selectedZone}
              onChange={(e) => setSelectedZone(e.target.value)}
              className="px-4 py-3 rounded text-black"
            >
              <option value="">Select Zone</option>
              {zones.map((zone) => (
                <option key={zone} value={zone}>{zone}</option>
              ))}
            </select>
            <button className="bg-[#f5e003] text-black px-8 py-3 rounded hover:bg-[#e5b611] transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Footer */}
      <footer className="bg-black text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* About Column */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                {/* <Beer className="w-8 h-8 text-[#f5e003]" />
                <span className="text-white font-semibold text-xl">ABInBev</span> */}

                <img
                  src={dark}
                  alt="ABInBev Logo"
                  className="h-12 w-15 mx-4 mb-2"
                />
              </div>
              <p className="text-gray-400 mb-4">
                Bringing people together for a better world through innovation and technology.
                Our tools empower businesses to make data-driven decisions and drive growth.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com//abinbevind/" className="text-gray-400 hover:text-[#f5e003] transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://x.com/abinbev" className="text-gray-400 hover:text-[#f5e003] transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="https://in.linkedin.com/company/ab-inbev-india" className="text-gray-400 hover:text-[#f5e003] transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://instagram.com/abinbevgccindia" className="text-gray-400 hover:text-[#f5e003] transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/about" className="text-gray-400 hover:text-[#f5e003] transition-colors">About Us</a>
                </li>
                <li>
                  <a href="/features" className="text-gray-400 hover:text-[#f5e003] transition-colors">Features</a>
                </li>
                <li>
                  <a href="/documentation" className="text-gray-400 hover:text-[#f5e003] transition-colors">Documentation</a>
                </li>
                <li>
                  <a href="/support" className="text-gray-400 hover:text-[#f5e003] transition-colors">Support</a>
                </li>
                <li>
                  <a href="/privacy" className="text-gray-400 hover:text-[#f5e003] transition-colors">Privacy Policy</a>
                </li>
              </ul>
            </div>

            {/* Tools */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Our Tools</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/enablers" className="text-gray-400 hover:text-[#f5e003] transition-colors">Enablers of Confidence</a>
                </li>
                <li>
                  <a href="/connectedness" className="text-gray-400 hover:text-[#f5e003] transition-colors">Commercial Connectedness</a>
                </li>
                <li>
                  <a href="/analytics" className="text-gray-400 hover:text-[#f5e003] transition-colors">Analytics Dashboard</a>
                </li>
                <li>
                  <a href="/training" className="text-gray-400 hover:text-[#f5e003] transition-colors">Training Resources</a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-2 text-gray-400">
                  <Mail className="w-5 h-5 text-[#f5e003]" />
                  <a href="mailto:info@abinbev-india.com" className="hover:text-[#f5e003] transition-colors">
                    info@abinbev-india.com
                  </a>
                </li>
                {/* <li className="flex items-center gap-2 text-gray-400">
                  <Phone className="w-5 h-5 text-[#f5e003]" />
                  <a href="tel:+1234567890" className="hover:text-[#f5e003] transition-colors">
                    +1 (234) 567-890
                  </a>
                </li> */}
                <li className="flex items-start gap-2 text-gray-400">
                  <MapPin className="w-5 h-5 text-[#f5e003] mt-1" />
                  <span>
                    AB InBev India, <br />
                    Bagmane World Technology Center SEZ, Mahadevapura,<br />
                    Bengaluru, Karnataka 560048
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright Bar */}
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© 2025 Anheuser-Busch InBev. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;