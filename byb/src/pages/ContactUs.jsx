import React from "react";

const ContactForm = () => {
  return (
    <div className="bg-lightGray min-h-screen flex items-center justify-center px-4 py-16">
      <div className="bg-white w-full max-w-5xl rounded-xl shadow-md p-8">
      <h2 className="text-3xl font-bold text-center p-6 text-darkBlue mb-6">
  Contact Us
</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-darkBlue">Get in Touch</h2>
            <ul className="space-y-3 text-black text-sm">
              <li><strong>Email:</strong> support@yourdomain.com</li>
              <li><strong>Phone:</strong> +91 98765 43210</li>
              <li><strong>Address:</strong> Your Street, Your City, India</li>
            </ul>
          </div>

          <form className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-darkBlue mb-1">
                Full Name
              </label>
              <input
                type="text"
                className="w-full border border-lightGray rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="Full name"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-darkBlue mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full border border-lightGray rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="Email"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-darkBlue mb-1">
                Message
              </label>
              <textarea
                rows="4"
                className="w-full border border-lightGray rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-royalBlue hover:bg-accent text-white font-semibold py-3 rounded-md transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
