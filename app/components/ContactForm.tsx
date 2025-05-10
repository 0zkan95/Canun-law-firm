"use client";

import React, { useState } from 'react';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactFormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: ContactFormErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
      isValid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
       newErrors.email = "Please enter a valid email address.";
       isValid = false;
    }
     if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required.";
      isValid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(false);
    if (validateForm()) {
      console.log("Contact Form Data:", formData);
      setIsSubmitted(true);
    } else {
      console.log("Validation failed", errors);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold font-heading mb-6 text-center text-gray-800">Send Us a Message</h2>
      {isSubmitted ? (
        <p className="text-center text-green-600 bg-green-100 p-4 rounded-md">
          Thank you for your message! We&apos;ll get back to you soon.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          <div>
            <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              id="contact-name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={`w-full px-3 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
              aria-invalid={errors.name ? "true" : "false"}
            />
            {errors.name && <p className="text-red-600 text-xs mt-1">{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              id="contact-email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              title="Please enter a valid email address (e.g., user&apos;@example.com)."
              className={`w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email}</p>}
          </div>
           <div>
            <label htmlFor="contact-subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
            <input
              type="text"
              id="contact-subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className={`w-full px-3 py-2 border ${errors.subject ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
              aria-invalid={errors.subject ? "true" : "false"}
            />
            {errors.subject && <p className="text-red-600 text-xs mt-1">{errors.subject}</p>}
          </div>
          <div>
            <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              id="contact-message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              className={`w-full px-3 py-2 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
              aria-invalid={errors.message ? "true" : "false"}
            ></textarea>
            {errors.message && <p className="text-red-600 text-xs mt-1">{errors.message}</p>}
          </div>
          <div>
            <button 
              type="submit" 
              className="w-full bg-transparent border-2 border-[#a67f06] text-[#a67f06] hover:bg-[#a67f06] hover:text-white font-semibold py-3 px-4 rounded-md shadow transition-colors duration-150 font-heading cursor-pointer"
            >
              Send Message
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
