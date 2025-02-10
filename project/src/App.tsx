import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Home, User, Mail, Menu, X } from 'lucide-react';
import emailjs from 'emailjs-com';
import logo from './assets/3B-logo-circle.png'; // Import the logo image

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isMessageSent, setIsMessageSent] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.send('service_1gpqi8g', 'YOUR_TEMPLATE_ID', formData, 'YOUR_USER_ID')
      .then((result) => {
        console.log(result.text);
        setIsMessageSent(true);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <BrowserRouter basename="/">
      <div className="relative min-h-screen">
        {/* Navigation Bar */}
        <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              <div className="flex-shrink-0 flex items-center">
                <a href="#home" className="flex items-center space-x-2">
                  <img 
                    src={logo} // Use the imported logo image
                    alt="3 Brothers Marketing Logo"
                    className="h-8 w-auto"
                  />
                  <span className="text-xl font-bold text-gray-900">3Brothers</span>
                </a>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-8">
                <button
                  onClick={() => scrollToSection('home')}
                  className="flex items-center space-x-1 text-gray-600 hover:text-gray-900"
                >
                  <Home size={18} />
                  <span>Home</span>
                </button>
                <button
                  onClick={() => scrollToSection('about')}
                  className="flex items-center space-x-1 text-gray-600 hover:text-gray-900"
                >
                  <User size={18} />
                  <span>About</span>
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="flex items-center space-x-1 text-gray-600 hover:text-gray-900"
                >
                  <Mail size={18} />
                  <span>Contact</span>
                </button>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-gray-600 hover:text-gray-900"
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
                <button
                  onClick={() => scrollToSection('home')}
                  className="flex items-center space-x-2 w-full px-3 py-2 text-gray-600 hover:text-gray-900"
                >
                  <Home size={18} />
                  <span>Home</span>
                </button>
                <button
                  onClick={() => scrollToSection('about')}
                  className="flex items-center space-x-2 w-full px-3 py-2 text-gray-600 hover:text-gray-900"
                >
                  <User size={18} />
                  <span>About</span>
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="flex items-center space-x-2 w-full px-3 py-2 text-gray-600 hover:text-gray-900"
                >
                  <Mail size={18} />
                  <span>Contact</span>
                </button>
              </div>
            </div>
          )}
        </nav>

        {/* Content Sections */}
        <section
          id="home"
          className="min-h-screen pt-16 flex items-center bg-gradient-to-b from-blue-50 to-white"
        >
          <div className="max-w-7xl mx-auto px-4 py-20">
            <div className="text-center">
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                EMPOWERING GROWTH, ELEVATING BRANDS
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Transforming market presence across Minnesota, North Dakota, and Wisconsin with personalized sales and distribution strategies
              </p>
              <button
                onClick={() => scrollToSection('about')}
                className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition duration-300"
              >
                Learn More
              </button>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="min-h-screen pt-16 flex items-center bg-white"
        >
          <div className="max-w-7xl mx-auto px-4 py-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt="Business meeting"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  About Us
                </h2>
                <p className="text-gray-600 mb-6">
                  We are a passionate team dedicated to creating exceptional
                  experiences and delivering innovative solutions. Our mission is to
                  help businesses grow and succeed in the digital age.
                </p>
                <p className="text-gray-600">
                  With years of experience and a commitment to excellence, we strive
                  to exceed expectations and build lasting relationships with our
                  clients.
                </p>
              </div>
            </div>

            {/* Mission Statement Section */}
            <div className="mt-20">
              <div className="bg-gradient-to-r from-blue-100 to-blue-200 rounded-xl p-12 shadow-xl">
                <div className="max-w-4xl mx-auto text-center">
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                    Our Mission
                  </h3>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                    <p className="text-gray-700 leading-relaxed text-lg">
                      At 3 Brothers Marketing, our mission is to provide exceptional sales and account management services with a deep commitment to giving love and attention to the brands that often go unnoticed in the Minnesota, North Dakota, and Wisconsin markets. We strive to elevate these brands by building meaningful relationships with key retailers and distributors, ensuring their products receive the visibility and strategic placement they deserve. Through customized strategies, thoughtful execution, and a focus on driving real growth, we bring passion and care to every partnership. Our approach is rooted in integrity, collaboration, and a genuine dedication to delivering sustainable success for brands that are ready to shine.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="min-h-screen pt-16 flex items-center bg-gray-50"
        >
          <div className="max-w-7xl mx-auto px-4 py-20">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
                Contact Us
              </h2>
              <div className="bg-white rounded-lg shadow-lg p-24 flex items-start">
                <form className="space-y-12 w-full" onSubmit={handleSubmit}>
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-2xl font-medium text-gray-700"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-2xl"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-2xl font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-2xl"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-2xl font-medium text-gray-700"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-2xl"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white text-2xl px-12 py-6 rounded-md hover:bg-blue-700 transition duration-300"
                  >
                    Send Message
                  </button>
                  {isMessageSent && (
                    <div className="mt-4 text-green-600 text-center text-2xl">
                      Your message has been delivered. We will reach out to you in the next business day.
                    </div>
                  )}
                </form>
                <div className="ml-8">
                  <img 
                    src={logo} // Use the imported logo image
                    alt="3 Brothers Marketing Logo"
                    className="h-32 w-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;