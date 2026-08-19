// src/pages/Contact.jsx
//
// This form uses useState to "remember" what the user types.
// Each keystroke updates the formData object via onChange.

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault(); // stop the page from reloading
    console.log("Contact form submitted:", formData);
    setSubmitted(true);
  }

  return (
    <div className="max-w-xl mx-auto px-6 py-16">
      <p className="font-mono text-copper text-sm tracking-widest mb-2">
        GET IN TOUCH
      </p>
      <h1 className="font-display text-4xl mb-8">Contact us</h1>

      {submitted ? (
        <p className="bg-sage/10 border border-sage text-sage rounded-xl p-4">
          Thanks! We'll get back to you soon.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border border-espresso/20 rounded-lg px-4 py-3 focus:outline-none focus:border-copper"
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            required
            className="border border-espresso/20 rounded-lg px-4 py-3 focus:outline-none focus:border-copper"
          />
          <textarea
            name="message"
            placeholder="Your message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="border border-espresso/20 rounded-lg px-4 py-3 focus:outline-none focus:border-copper"
          />
          <button
            type="submit"
            className="bg-copper text-ivory px-6 py-3 rounded-full hover:opacity-90 transition-opacity self-start"
          >
            Send message
          </button>
        </form>
      )}
    </div>
  );
}
