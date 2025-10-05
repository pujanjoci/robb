import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Updated Google Apps Script Web App URL
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzDqSMX54eCxni1TBfwwXEfe-HfSzzABtpAivyiIjrf7FPjfQldvzUYoovYxZVcGnS4/exec';

  // Comprehensive temporary email domain list
  const tempEmailDomains = [
    'tempmail.com', 'guerrillamail.com', 'mailinator.com', '10minutemail.com',
    'yopmail.com', 'throwaway.com', 'fakeinbox.com', 'temp-mail.org',
    'disposable.com', 'trashmail.com', 'tempemail.com', 'tempmail.org',
    'tmpmail.com', 'fake-mail.com', 'mytemp.email', 'throwawaymail.com',
    'tempinbox.com', 'fakeemail.com', 'tempmail.net', 'trashmail.net',
    'dispostable.com', 'maildrop.cc', 'getnada.com', 'tempail.com',
    'emailondeck.com', 'throwawayemail.com', 'tempr.email', 'anonmail.com'
  ];

  // Validation functions
  const validateFirstName = (firstName) => {
    if (!firstName.trim()) return 'First name is required';
    if (firstName.trim().length < 2) return 'First name must be at least 2 characters';
    if (!/^[a-zA-Z\s]*$/.test(firstName)) return 'First name can only contain letters and spaces';
    return '';
  };

  const validateLastName = (lastName) => {
    if (lastName.trim() && !/^[a-zA-Z\s]*$/.test(lastName)) {
      return 'Last name can only contain letters and spaces';
    }
    return '';
  };

  const validateEmail = (email) => {
    if (!email.trim()) return 'Email address is required';
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return 'Please enter a valid email address';
    
    const domain = email.split('@')[1].toLowerCase();
    if (tempEmailDomains.some(tempDomain => domain.includes(tempDomain))) {
      return 'Temporary email addresses are not allowed. Please use a permanent email.';
    }
    
    return '';
  };

  const validateMessage = (message) => {
    if (!message.trim()) return 'Message is required';
    if (message.trim().length < 10) return 'Message must be at least 10 characters long';
    if (message.trim().length > 1000) return 'Message must be less than 1000 characters';
    return '';
  };

  const validateField = (name, value) => {
    switch (name) {
      case 'firstName':
        return validateFirstName(value);
      case 'lastName':
        return validateLastName(value);
      case 'email':
        return validateEmail(value);
      case 'message':
        return validateMessage(value);
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Real-time validation only for touched fields
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({
        ...prev,
        [name]: error
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    
    // Mark field as touched
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));

    // Validate the field
    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    const newTouched = {};
    
    // Validate all required fields
    const fieldsToValidate = ['firstName', 'email', 'message'];
    fieldsToValidate.forEach(field => {
      newTouched[field] = true;
      newErrors[field] = validateField(field, formData[field]);
    });

    // Validate optional fields if they have content
    if (formData.lastName.trim()) {
      newTouched.lastName = true;
      newErrors.lastName = validateLastName(formData.lastName);
    }

    setTouched(newTouched);
    setErrors(newErrors);

    return !Object.values(newErrors).some(error => error);
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validateForm()) {
    setSubmitStatus({
      type: 'error',
      message: 'Please fix the errors above before submitting.'
    });
    return;
  }

  setIsSubmitting(true);
  setSubmitStatus(null);

  try {
    // Prepare clean data
    const submissionData = {
      firstName: formData.firstName.trim(),
      lastName: formData.lastName.trim(),
      email: formData.email.trim().toLowerCase(),
      subject: formData.subject.trim(),
      message: formData.message.trim(),
    };

    console.log('Submitting data:', submissionData);

    // Convert to form-encoded data
    const formDataToSend = new URLSearchParams();
    Object.keys(submissionData).forEach((key) => {
      formDataToSend.append(key, submissionData[key]);
    });

    // Send to Google Apps Script (no response reading)
    await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: formDataToSend,
    });

    // ✅ Assume success if no error thrown
    setSubmitStatus({
      type: 'success',
      message: "✅ Message sent successfully! I\ll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: '',
    });
    setErrors({});
    setTouched({});
  } catch (error) {
    console.error('Submission error:', error);
    setSubmitStatus({
      type: 'error',
      message: `❌ Error: ${error.message}. Please check your connection and try again, or email me directly at shrestharavi26@gmail.com.`,
    });
  } finally {
    setIsSubmitting(false);
  }
};

  // Check if form is valid for submission
  const isFormValid = () => {
    return formData.firstName.trim() && 
           formData.email.trim() && 
           formData.message.trim().length >= 10 &&
           !Object.values(errors).some(error => error);
  };

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
            
            {/* Status Message */}
            {submitStatus && (
              <div className={`mb-6 p-4 rounded-lg ${
                submitStatus.type === 'success' 
                  ? 'bg-green-900/50 border border-green-600 text-green-300' 
                  : 'bg-red-900/50 border border-red-600 text-red-300'
              }`}>
                {submitStatus.message}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                    First Name *
                  </label>
                  <input 
                    type="text" 
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    className={`w-full px-4 py-3 rounded-lg bg-gray-700/50 border transition-colors duration-300 outline-none ${
                      errors.firstName ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20' : 'border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20'
                    }`}
                    placeholder="Ex: Ravi"
                  />
                  {errors.firstName && (
                    <p className="mt-1 text-sm text-red-400">{errors.firstName}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                    Last Name
                  </label>
                  <input 
                    type="text" 
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-3 rounded-lg bg-gray-700/50 border transition-colors duration-300 outline-none ${
                      errors.lastName ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20' : 'border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20'
                    }`}
                    placeholder="Ex: Shrestha"
                  />
                  {errors.lastName && (
                    <p className="mt-1 text-sm text-red-400">{errors.lastName}</p>
                  )}
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address *
                </label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  className={`w-full px-4 py-3 rounded-lg bg-gray-700/50 border transition-colors duration-300 outline-none ${
                    errors.email ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20' : 'border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20'
                  }`}
                  placeholder="Ex: info@ravishrestha.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input 
                  type="text" 
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="w-full px-4 py-3 rounded-lg bg-gray-700/50 border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-colors duration-300 outline-none"
                  placeholder="Message Subject"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea 
                  id="message"
                  name="message"
                  rows="5" 
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  className={`w-full px-4 py-3 rounded-lg bg-gray-700/50 border transition-colors duration-300 outline-none resize-none ${
                    errors.message ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20' : 'border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20'
                  }`}
                  placeholder="Write me something you want to talk to me about (minimum 10 characters)."
                ></textarea>
                <div className="flex justify-between mt-1">
                  {errors.message ? (
                    <p className="text-sm text-red-400">{errors.message}</p>
                  ) : (
                    <p className="text-sm text-gray-400">
                      {formData.message.length >= 10 ? 'Message length is good!' : 'Minimum 10 characters required'}
                    </p>
                  )}
                  <p className={`text-sm ${
                    formData.message.length < 10 ? 'text-yellow-400' : 'text-green-400'
                  }`}>
                    {formData.message.length}/10
                  </p>
                </div>
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting || !isFormValid()}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] disabled:scale-100 shadow-lg hover:shadow-xl disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <svg className="w-4 h-4 inline-block ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;