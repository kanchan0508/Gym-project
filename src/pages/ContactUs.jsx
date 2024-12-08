import React from "react";

const ContactUs = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen py-16 px-6 lg:px-16">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
          Get in Touch with Us
        </h1>
        <p className="text-lg text-gray-600">
          Have questions or suggestions? We'd love to hear from you!
        </p>
      </div>

      {/* Form Section */}
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-xl p-8 lg:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left - Contact Info */}
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Contact Information
            </h2>
            <p className="text-gray-600 mb-4">
              Feel free to reach out to us using the form or the details below.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-500 mr-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16.5 3.5a8.38 8.38 0 014.75 4.75m-4.75-4.75a8.38 8.38 0 00-4.75 4.75M21 21l-5.197-5.197m-6.585 1.197a5 5 0 116.586-6.586 5 5 0 01-6.586 6.586z"
                  />
                </svg>
                123 GymFluencer Street, Fitness City
              </li>
              <li className="flex items-center text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-500 mr-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8h2a2 2 0 012 2v8a2 2 0 01-2 2h-6a2 2 0 01-2-2v-2m-4 4h-1a2 2 0 01-2-2v-6a2 2 0 012-2h4m0 0V7a4 4 0 118 0v1m-8 0h8"
                  />
                </svg>
                contact@gymfluencer.com
              </li>
              <li className="flex items-center text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-500 mr-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.752 11.168l-.647 3.252m-.62 3.248h3.862m4.074-4.9l-1.73 3.792a9.715 9.715 0 01-8.972 5.202 9.715 9.715 0 01-8.972-5.202L1.682 12.5m4.074-4.9l1.732-3.792A9.715 9.715 0 0114.752 3.5m0 0h3.862M4.752 8.832l-.647-3.252"
                  />
                </svg>
                +1 234 567 890
              </li>
            </ul>
          </div>

          {/* Right - Contact Form */}
          <form className="space-y-6">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-gray-800 font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="Enter your name"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-gray-800 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="Enter your email"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="text-gray-800 font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="Type your message here"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-bold py-3 rounded-md hover:bg-blue-600 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
