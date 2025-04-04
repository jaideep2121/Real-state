import React, { useState, useRef, useEffect } from 'react';
import { X } from 'lucide-react';
import { datastore } from "../serveractions/actions";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Modal = ({ isOpen, onClose }) => {
  const [loading, setLoading] = useState(false);
  const modalRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    comment: '',
  });

  // Close modal on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      console.log(formData);
      await datastore(formData);

      toast.success('Form submitted successfully!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        comment: '',
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
  const handleWhatsApp = () => {
    const message = encodeURIComponent(`Hello, I'm interested in your services.`);
    window.open(`https://wa.me/9311591038?text=${message}`, '_blank');
  };
  const handleEmail = () => {
    const subject = encodeURIComponent('Contact Request');
    const body = encodeURIComponent('Hello, I am interested in your services.');
    window.open(`mailto:stellorreators2024@gmail.com?subject=${subject}&body=${body}`, '_blank');
  };
  
  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center p-4 z-20">
      <div
        ref={modalRef}
        className="bg-white rounded-xl w-full max-w-lg flex relative overflow-hidden"
      >
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
              <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">
                Comments
              </label>
              <textarea
                id="comment"
                name="comment"
                value={formData.comment}
                onChange={handleChange}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
              disabled={loading}
            >
              {loading ? 'Submitting...' : 'Submit'}
            </button>
          </form>

          {/* WhatsApp and Email Buttons */}
          <div className="flex justify-between mt-3">
            {/* WhatsApp Button */}
            <a
 onClick={handleWhatsApp}
  rel="noopener noreferrer"
  className="w-[48%] bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors text-center"
>
  WhatsApp
</a>


            {/* Email Button */}
            <a
  onClick={handleEmail}
  className="w-[48%] bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-colors text-center"
>
  Email
</a>

          </div>
        </div>
      </div>
    </div>
  );
};
