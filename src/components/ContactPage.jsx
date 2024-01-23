// src/components/AboutPage.jsx
import React, { useState } from "react";
import axios from "axios";
import Navigation from "./Navigation";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Constructing the mailto link with form data
    const mailtoLink = `mailto:perezalejandra.e@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(formData.message)}`;

    window.open(mailtoLink, "_blank");

    setFormData({
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    // h-screen flex flex-col md:flex-row justify-center items-start
    <div className="flex flex-col min-h-screen cursor-grab">
      <div className="flex-grow">
        <Navigation />

        <div className="my-20 py-8 lg:py-16 px-4 mx-auto h-64 max-w-screen-md">
          <h1 className="text-center rounded-full bg-aquamarine mb-4 py-2 text-3xl font-extrabold text-majorelleBlue-500 md:text-5xl lg:text-6xl">
            Let's build together.
          </h1>
          <p className="mb-8 lg:mb-16 font-light text-center text-majorelleBlue-500 sm:text-xl">
            Whether you're a startup looking to improve user experience or a
            large coporation looking to redesign its digital assets, I'm someone
            who can help you achieve your goals. Contact me today to start a
            conversation!
          </p>
          <form className="space-y-8" onSubmit={handleSubmit}>
            <div>
              <label
                for="subject"
                className="block mb-2 text-md font-semibold text-majorelleBlue-500"
              >
                Subject
              </label>
              <input
                type="text"
                name="subject"
                onChange={handleChange}
                value={formData.subject} // Bind value to formData.subject
                className="block p-3 w-full text-sm rounded-full border border-2 border-majorelleBlue-500 focus:ring-majorelleBlue-500"
                placeholder="Let me know how I can help you..."
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                for="message"
                className="block mb-2 text-md font-semibold text-majorelleBlue-500"
              >
                Your message
              </label>
              <textarea
                name="message"
                rows="6"
                onChange={handleChange}
                value={formData.message}
                xs
                className="block p-3 w-full text-sm rounded-lg border border-2 border-majorelleBlue-500 focus:ring-majorelleBlue-500"
                placeholder="Leave your thoughts here..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="py-3 px-5 text-sm font-semibold text-center text-majorelleBlue-500 shadow-lg shadow-majorelleBlue-500/50 rounded-full bg-jasmine-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-majorelleBlue-500"
            >
              Send message
            </button>
          </form>
        </div>
      </div>

      <footer className="bg-almond mt-4 w-full py-4 md:flex md:items-center md:justify-between flex-shrink-0 h-1/10">
        <div className="text-majorelleBlue-500 max-w-screen-lg mx-auto px-4">
          <ul className="flex flex-wrap items-center justify-center mt-3 text-sm font-medium sm:mt-0">
            <li className="mr-4">
              <a href="https://github.com/ae-perez" target="_blank">
                <svg
                  class="w-6 h-6"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </li>
            <li className="mr-4">
              <a
                href="https://www.linkedin.com/in/alejandraelizabeth/"
                target="_blank"
              >
                <svg
                  class="w-6 h-6"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 15 15"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                    clip-rule="evenodd"
                  />
                  <path d="M3 5.012H0V15h3V5.012Z" />
                </svg>
              </a>
            </li>
            <li>
              <a href="/contact">
                <svg
                  class="w-6 h-6"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 16"
                >
                  <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                  <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                </svg>
              </a>
            </li>
          </ul>
          <span className="text-sm sm:text-center">
            © 2024 Alejandra Perez. Made with ♥️.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;
