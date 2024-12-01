'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch('/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'خطایی رخ داد');
      }

      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const contactInfo = [
    {
      title: 'آدرس',
      value: 'بن‌ژیوار، تهران، پاسداران، میدان هروی، جنب مرکز خرید گلستان، پلاک ٦٥',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      title: 'تلفن تماس',
      value: '۰۲۱-۲۸۱۱۱۱۹٥',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      )
    },
    {
      title: 'ایمیل',
      value: 'info@bonzhivar.com',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  return (
    <div dir="rtl" className="min-h-screen bg-background">
      {/* Hero Section with Cover Image */}
      <div className="relative h-[40vh] bg-accent/10">
        <img
          src="/Contact/1.webp"
          alt="Contact Us Cover"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-extrabold text-white font-IranYekan text-center drop-shadow-2xl">
            با ما در ارتباط باشید
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="group relative overflow-hidden"
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 transition-all duration-500"></div>
              
              {/* Content */}
              <div className="relative p-8 flex flex-col items-center text-center">
                {/* Icon Container */}
                <div className="mb-6 relative">
                  {/* Icon Background */}
                  <div className="absolute -inset-2 blur-xl rounded-full transition-all duration-500"></div>
                  
                  {/* Icon */}
                  <div className="relative bg-background border-2 border-accent/10 p-4 rounded-2xl
                    transform group-hover:scale-110 group-hover:border-accent/20 
                    transition-all duration-500 shadow-lg">
                    <svg className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      {info.icon.props.children}
                    </svg>
                  </div>
                </div>

                {/* Text Content */}
                <div className="space-y-3">
                  <h3 className="text-accent font-IranYekan font-bold text-lg
                    group-hover:scale-105 transition-transform duration-500">
                    {info.title}
                  </h3>
                  <div className="h-px w-12 bg-accent/20 mx-auto transform origin-left
                    group-hover:w-24 transition-all duration-500"></div>
                  <p className="text-gray-600 font-IranYekan text-base leading-relaxed
                    max-w-[280px] mx-auto">
                    {info.value}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto pb-16">
          {/* Form Section */}
          <div className="bg-background border-2 border-accent/20 rounded-3xl p-8 shadow-lg">
            <h2 className="text-3xl font-extrabold text-accent font-IranYekan mb-8 text-center">
              ارسال پیام
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-accent font-IranYekan mb-2">
                  نام و نام خانوادگی
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-background border-2 border-accent/20 
                    text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 
                    focus:ring-accent/20 focus:border-accent transition-all duration-300 
                    font-IranYekan text-right hover:border-accent/40"
                  placeholder="نام و نام خانوادگی خود را وارد کنید"
                />
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-accent font-IranYekan mb-2">
                  ایمیل
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-background border-2 border-accent/20 
                    text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 
                    focus:ring-accent/20 focus:border-accent transition-all duration-300 
                    font-IranYekan text-right hover:border-accent/40"
                  placeholder="ایمیل خود را وارد کنید"
                />
              </div>

              {/* Message Input */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-accent font-IranYekan mb-2">
                  پیام
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className="w-full px-4 py-3 rounded-xl bg-background border-2 border-accent/20 
                    text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 
                    focus:ring-accent/20 focus:border-accent transition-all duration-300 
                    font-IranYekan text-right hover:border-accent/40 resize-none"
                  placeholder="پیام خود را وارد کنید"
                />
              </div>

              {/* Error Message */}
              {error && (
                <div className="rounded-xl bg-red-50 p-4 border border-red-100">
                  <p className="text-red-600 text-sm font-IranYekan text-right">
                    {error}
                  </p>
                </div>
              )}

              {/* Success Message */}
              {success && (
                <div className="rounded-xl bg-green-50 p-4 border border-green-100">
                  <p className="text-green-600 text-sm font-IranYekan text-right">
                    پیام شما با موفقیت ارسال شد
                  </p>
                </div>
              )}

              {/* Submit Button */}
              <div className="flex justify-end pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-accent/10 text-accent px-8 py-3 rounded-xl 
                    font-medium border-2 border-accent/20 hover:bg-accent/20 transition-all 
                    duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed 
                    font-IranYekan text-sm group relative overflow-hidden"
                >
                  <span className="relative z-10">
                    {loading ? 'در حال ارسال...' : 'ارسال پیام'}
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
