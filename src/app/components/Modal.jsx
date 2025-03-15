import React, { useState } from 'react';
import { X } from 'lucide-react';
import  { datastore } from "../serveractions/actions"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const Modal = ({ isOpen, onClose }) => {
    const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    comments: '',
  });

  if (!isOpen) return null;

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log('Form submitted:', formData);
  //   onClose();
  // };
   const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
  
      try {
        console.log(formData);
        await datastore(formData); // Assuming datastore is async
  
        toast.success('Form submitted successfully!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          comments: '',
        });
      
      } catch (error) {
        console.error(error);
        toast.error('Failed to submit form');
      } finally {
        setLoading(false);
      }
    };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-xl w-full max-w-lg flex relative overflow-hidden">
        {/* Left Side: Image */}
        <div className="hidden md:block w-1/3">
          <img
            src="https://winworldrealty.in/wp-content/uploads/2024/02/Trinity-Infratech-Enters-Gurugram-Real-Estate-Market-With-Three-New-Projects.jpg"
            alt="Building"
            className="w-full h-full object-cover rounded-l-xl"
          />
        </div>

        {/* Right Side: Form */}
        <div className="w-full md:w-2/3 p-6">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
          >
            <X size={20} />
          </button>

          {/* Modal Content */}
          <h2 className="text-xl font-bold mb-4">Contact Information</h2>
          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="comments" className="block text-sm font-medium text-gray-700 mb-1">
                Comments
              </label>
              <textarea
                id="comments"
                name="comments"
                value={formData.comments}
                onChange={handleChange}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
            >
              Submit
            </button>
          </form>

          {/* WhatsApp and Email Buttons */}
          <div className="flex justify-between mt-3">
            {/* WhatsApp Button */}
            <a
              href={`https://wa.me/91${formData.phone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-[48%] bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors text-center"
            >
              WhatsApp
            </a>

            {/* Email Button */}
            <a
              href={`mailto:${formData.email}?subject=Contact Request&body=${formData.comments}`}
              className="w-[48%] bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-colors text-center"
            >
              Email
            </a>
          </div>
        </div>
      </div>

      {/* Responsive Adjustments */}
      <style jsx>{`
        @media (max-width: 768px) {
          .max-w-lg {
            width: 90%;
          }

          .md\\:block {
            display: none;
          }

          .rounded-l-xl {
            border-radius: 0;
          }

          .w-full {
            width: 100%;
          }

          .px-3 {
            padding-left: 12px;
            padding-right: 12px;
          }

          .py-2 {
            padding-top: 10px;
            padding-bottom: 10px;
          }
        }
      `}</style>
    </div>
  );
};
