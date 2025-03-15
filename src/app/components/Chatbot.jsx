import React, { useState } from 'react';
import  { datastore } from "../serveractions/actions"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    comment: ''
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  // const handleSubmit = (e) => {
  //  try{
  //   e.preventDefault();
  //   console.log(formData);
  //   datastore(formData);

  //   alert('Form submitted');
  //   setFormData({
  //     name: '',
  //     email: '',
  //     phone: '',
  //     comment: ''
  //   });
  //   setIsOpen(false);
  //  }catch(error){
  //   console.log(error);
  //  }
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
        comment: ''
      });
      setIsOpen(false);
    } catch (error) {
      console.error(error);
      toast.error('Failed to submit form');
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8">
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
      >
        {isOpen ? 'Close' : 'Contact Us!'}
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed bottom-16 right-4 w-72 sm:w-80 md:w-96 bg-white rounded-lg shadow-xl border border-gray-200 p-4 z-50">
          <h2 className="text-lg font-semibold mb-2">Contact Us</h2>
          <form onSubmit={handleSubmit} className="space-y-2">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              name="comment"
              value={formData.comment}
              onChange={handleChange}
              placeholder="Your Comment"
              rows="3"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
