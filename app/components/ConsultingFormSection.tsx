"use client";

import React, { useState } from 'react';

interface FormData {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const ConsultingFormSection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const subjectOptions = [
    "Family Law",
    "Personal Injury",
    "Criminal Law",
    "Business Law",
    "Education Law"
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
      isValid = false;
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
      isValid = false;
    } else if (!/^[0-9\s]*$/.test(formData.phone)) {
       newErrors.phone = "Please enter a valid phone number.";
       isValid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
       newErrors.email = "Please enter a valid email address.";
       isValid = false;
    }
    if (!formData.subject) {
      newErrors.subject = "Please select a subject.";
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
    if (validateForm()) {
      console.log("Form Data:", formData);
      alert("Form submitted (placeholder - check console for data)");
    } else {
      console.log("Validation failed", errors);
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <h2 className="text-3xl font-bold font-heading mb-6 text-gray-800">Request Free Consulting</h2>
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
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
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="5XX XXX XX XX"
                  pattern="[0-9\s]*"
                  title="Please enter a valid phone number (digits and spaces allowed)."
                  className={`w-full px-3 py-2 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                  aria-invalid={errors.phone ? "true" : "false"}
                />
                {errors.phone && <p className="text-red-600 text-xs mt-1">{errors.phone}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  title="Please enter a valid email address (e.g., user@example.com)."
                  className={`w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                  aria-invalid={errors.email ? "true" : "false"}
                />
                {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={`w-full px-3 py-2 border ${errors.subject ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-white`}
                  aria-invalid={errors.subject ? "true" : "false"}
                >
                  <option value="" disabled>Select a subject...</option>
                  {subjectOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
                {errors.subject && <p className="text-red-600 text-xs mt-1">{errors.subject}</p>}
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
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
                  className="w-full bg-[#c09306] text-black hover:bg-[#a98105] font-semibold py-3 px-4 rounded-[2rem] shadow transition-colors duration-150 font-heading"
                >
                  Send Request
                </button>
              </div>
            </form>
          </div>

          {/* Right Column: Text Content */}
          <div className="text-gray-700" data-aos="fade-left">
            <h3 className="text-2xl font-bold font-heading mb-4 text-gray-800">
              We are here to fight against any violance with experience
            </h3>
            <p className="mb-4">
              At HOPE Law Firm, we are steadfast in our commitment to combating all forms of violence. Our dedicated team brings a wealth of experience to these challenging situations, ensuring that those affected receive robust and knowledgeable legal representation. 
            </p>
            <p className="mb-6">
              We understand the profound impact violence has, and we are here not just to fight vigorously for your rights within the legal system, but to stand with you, offering guidance and strength throughout the process. You don&apos;t have to face this alone; our experienced professionals are ready to advocate fiercely on your behalf.
            </p>
            <p className="font-semibold font-heading">Alex Adams</p>
            <p className="text-sm text-gray-600">CEO, HOPE Law Firm</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ConsultingFormSection;
