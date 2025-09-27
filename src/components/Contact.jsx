import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-neutral-900 text-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <span className="w-1 h-6 bg-blue-500 mr-3"></span>
                Contact Information
              </h3>
              <p className="text-gray-300 mb-8">
                Feel free to reach out through any of these channels. I typically respond within 24 hours.
              </p>
            </div>
            
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start p-4 rounded-lg hover:bg-gray-800 transition-colors duration-300">
                <div className="bg-blue-600/20 p-3 rounded-lg mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-blue-400">Email</p>
                  <p className="text-gray-300">shrestharavi26@gmail.com</p>
                  <p className="text-sm text-gray-400 mt-1">I'll get back to you quickly</p>
                </div>
              </div>
              
              {/* Phone */}
              <div className="flex items-start p-4 rounded-lg hover:bg-gray-800 transition-colors duration-300">
                <div className="bg-green-600/20 p-3 rounded-lg mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-green-400">Phone</p>
                  <p className="text-gray-300">+977 (98) 6647 8812</p>
                  <p className="text-sm text-gray-400 mt-1">Mon-Fri from 9am to 5pm</p>
                </div>
              </div>
              
              {/* Location */}
              <div className="flex items-start p-4 rounded-lg hover:bg-gray-800 transition-colors duration-300">
                <div className="bg-purple-600/20 p-3 rounded-lg mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-purple-400">Location</p>
                  <p className="text-gray-300">Bhaktapur, Nepal</p>
                  <p className="text-sm text-gray-400 mt-1">Available for remote work</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700">
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <span className="w-1 h-6 bg-blue-500 mr-3"></span>
              Send a Message
            </h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg bg-gray-700/50 border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-colors duration-300 outline-none"
                    placeholder="Ex: Ravi"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg bg-gray-700/50 border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-colors duration-300 outline-none"
                    placeholder="Ex: Shrestha"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 rounded-lg bg-gray-700/50 border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-colors duration-300 outline-none"
                  placeholder="Ex: info@ravishrestha.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-lg bg-gray-700/50 border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-colors duration-300 outline-none"
                  placeholder="Message Subject"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea 
                  rows="5" 
                  className="w-full px-4 py-3 rounded-lg bg-gray-700/50 border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-colors duration-300 outline-none resize-none"
                  placeholder="Write me something you want to talk to me about."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
              >
                Send Message
                <svg className="w-4 h-4 inline-block ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;