import React, { useState } from 'react';
import { portfolioData } from '../../data/portfolio';
import SectionHeader from '../ui/SectionHeader';

const Contact = () => {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);

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
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const tempEmailDomains = [
    'tempmail.com', 'guerrillamail.com', 'mailinator.com', '10minutemail.com',
    'yopmail.com', 'throwaway.com', 'fakeinbox.com', 'temp-mail.org',
    'disposable.com', 'trashmail.com', 'tempemail.com', 'tmpmail.com'
  ];

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personal.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      window.location.href = `mailto:${personal.email}`;
    }
  };

  const validateField = (name, value) => {
    switch (name) {
      case 'firstName':
        if (!value.trim()) return 'First name is required';
        if (value.trim().length < 2) return 'Must be at least 2 characters';
        return '';
      case 'email': {
        if (!value.trim()) return 'Email is required';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Please enter a valid email address';
        const domain = value.split('@')[1]?.toLowerCase() || '';
        if (tempEmailDomains.some(d => domain.includes(d))) {
          return 'Temporary email addresses are not permitted';
        }
        return '';
      }
      case 'subject':
        if (!value.trim()) return 'Subject is required';
        return '';
      case 'message':
        if (!value.trim()) return 'Message is required';
        if (value.trim().length < 10) return 'Message must be at least 10 characters';
        return '';
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (touched[name]) {
      setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    Object.keys(formData).forEach(key => {
      const err = validateField(key, formData[key]);
      if (err) newErrors[key] = err;
    });

    setTouched({
      firstName: true,
      lastName: true,
      email: true,
      subject: true,
      message: true
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const submitData = new FormData();
      submitData.append('firstName', formData.firstName);
      submitData.append('lastName', formData.lastName || '');
      submitData.append('email', formData.email);
      submitData.append('subject', formData.subject);
      submitData.append('message', formData.message);
      submitData.append('timestamp', new Date().toISOString());

      await fetch(personal.googleScriptUrl, {
        method: 'POST',
        body: submitData,
        mode: 'no-cors'
      });

      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
      });
      setTouched({});
      setErrors({});
    } catch (err) {
      console.error('Submission error:', err);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="contact" 
      className="py-16 md:py-24 bg-white border-b border-[#E5E0D8]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dual-layer Section Header */}
        <SectionHeader
          index="05 / INQUIRIES"
          eyebrow="Get In Touch"
          title="Contact & Inquiries"
          description="Direct lines of communication for audit inquiries, professional opportunities, and compliance discussions."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Contact & Availability */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h3 className="text-2xl font-serif text-[#192D40] font-normal mb-3">
                Let's discuss an engagement.
              </h3>
              <p className="text-sm sm:text-base text-[#353B40]/80 leading-relaxed font-light">
                Whether you have an inquiry regarding audit documentation, statutory compliance, or potential full-time opportunities, feel free to reach out directly.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4 border border-[#E5E0D8] bg-[#F6F4EF]/50 p-6">
              
              {/* Email item */}
              <div className="pb-4 border-b border-[#E5E0D8]">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#71816F] block mb-1">
                  Email Address
                </span>
                <div className="flex items-center justify-between gap-2">
                  <a 
                    href={`mailto:${personal.email}`}
                    className="text-sm sm:text-base text-[#192D40] font-medium hover:text-[#B39A73] transition-colors break-all"
                  >
                    {personal.email}
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="px-2.5 py-1 text-xs border border-[#E5E0D8] bg-white text-[#353B40] hover:text-[#192D40] hover:border-[#B39A73] rounded-xs transition-colors shrink-0 font-mono"
                    title="Copy email to clipboard"
                  >
                    {copied ? "Copied!" : "Copy"}
                  </button>
                </div>
              </div>

              {/* Phone item */}
              <div className="pb-4 border-b border-[#E5E0D8]">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#71816F] block mb-1">
                  Telephone
                </span>
                <a 
                  href={`tel:${personal.phoneRaw}`}
                  className="text-sm sm:text-base text-[#192D40] font-medium hover:text-[#B39A73] transition-colors font-mono"
                >
                  {personal.phone}
                </a>
              </div>

              {/* Location */}
              <div className="pb-4 border-b border-[#E5E0D8]">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#71816F] block mb-1">
                  Primary Location
                </span>
                <p className="text-sm sm:text-base text-[#192D40] font-medium">
                  {personal.location}
                </p>
              </div>

              {/* LinkedIn & Professional Network */}
              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#71816F] block mb-1">
                  Professional Network
                </span>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm sm:text-base text-[#192D40] font-medium hover:text-[#B39A73] transition-colors"
                >
                  <span>LinkedIn Profile</span>
                  <span className="text-xs font-mono">↗</span>
                </a>
              </div>

            </div>

            {/* Response Time Note */}
            <div className="flex items-center gap-2 text-xs text-[#71816F] font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-[#71816F]"></span>
              <span>Expected response time: within {personal.responseTime}</span>
            </div>
          </div>

          {/* Right Column: Google Apps Script Contact Form */}
          <div className="lg:col-span-7 bg-[#F6F4EF]/30 border border-[#E5E0D8] p-6 sm:p-10">
            <h4 className="text-xl font-serif text-[#192D40] font-normal mb-6 pb-3 border-b border-[#E5E0D8]">
              Send a Direct Message
            </h4>

            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-[#71816F]/15 border border-[#71816F] text-[#192D40] text-sm">
                <p className="font-semibold mb-1">Message transmitted successfully.</p>
                <p className="text-xs text-[#353B40]">Thank you for reaching out. Ravi will review your inquiry within {personal.responseTime}.</p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-300 text-red-800 text-sm">
                <p className="font-semibold mb-1">Transmission issue.</p>
                <p className="text-xs">There was an unexpected error submitting the message. Please contact Ravi directly at <a href={`mailto:${personal.email}`} className="underline">{personal.email}</a>.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="firstName" className="block text-xs uppercase tracking-wider font-mono text-[#353B40] mb-1.5">
                    First Name <span className="text-[#B39A73]">*</span>
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full px-3.5 py-2.5 text-sm bg-white border ${
                      touched.firstName && errors.firstName ? 'border-red-500' : 'border-[#E5E0D8]'
                    } focus:border-[#B39A73] focus:outline-hidden text-[#192D40] transition-colors`}
                    placeholder="e.g. Maya"
                  />
                  {touched.firstName && errors.firstName && (
                    <p className="text-xs text-red-600 mt-1">{errors.firstName}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-xs uppercase tracking-wider font-mono text-[#353B40] mb-1.5">
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#E5E0D8] focus:border-[#B39A73] focus:outline-hidden text-[#192D40] transition-colors"
                    placeholder="e.g. Sharma"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-xs uppercase tracking-wider font-mono text-[#353B40] mb-1.5">
                  Email Address <span className="text-[#B39A73]">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full px-3.5 py-2.5 text-sm bg-white border ${
                    touched.email && errors.email ? 'border-red-500' : 'border-[#E5E0D8]'
                  } focus:border-[#B39A73] focus:outline-hidden text-[#192D40] transition-colors`}
                  placeholder="name@company.com"
                />
                {touched.email && errors.email && (
                  <p className="text-xs text-red-600 mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs uppercase tracking-wider font-mono text-[#353B40] mb-1.5">
                  Subject / Nature of Inquiry <span className="text-[#B39A73]">*</span>
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full px-3.5 py-2.5 text-sm bg-white border ${
                    touched.subject && errors.subject ? 'border-red-500' : 'border-[#E5E0D8]'
                  } focus:border-[#B39A73] focus:outline-hidden text-[#192D40] transition-colors`}
                  placeholder="e.g. Audit Support / Opportunity Discussion"
                />
                {touched.subject && errors.subject && (
                  <p className="text-xs text-red-600 mt-1">{errors.subject}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-xs uppercase tracking-wider font-mono text-[#353B40] mb-1.5">
                  Message <span className="text-[#B39A73]">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full px-3.5 py-2.5 text-sm bg-white border ${
                    touched.message && errors.message ? 'border-red-500' : 'border-[#E5E0D8]'
                  } focus:border-[#B39A73] focus:outline-hidden text-[#192D40] transition-colors resize-y`}
                  placeholder="Please describe your organization, requirements, or inquiry..."
                />
                {touched.message && errors.message && (
                  <p className="text-xs text-red-600 mt-1">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#192D40] text-[#F6F4EF] text-xs font-semibold uppercase tracking-wider rounded-xs hover:bg-[#B39A73] disabled:opacity-50 transition-colors duration-200 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Transmitting Message...</span>
                  </>
                ) : (
                  <span>Send Message →</span>
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
