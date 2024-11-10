import React from 'react';

function Contactme() {
  return (
    <section
    id="contact"
    className="my-12 py-24 flex items-center justify-center relative"
  >
    <form className="flex flex-col items-center w-full max-w-md mx-auto z-10">
      <div className="mb-6 w-full">
        <label
          htmlFor="email"
          className="text-white block mb-2 text-sm font-medium"
        >
          Your email
        </label>
        <input
          name="email"
          type="email"
          id="email"
          required
          className="bg-[#11071F] border border-[#ccb9e5] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
          placeholder="abc@gmail.com"
        />
      </div>
      
      <div className="mb-6 w-full">
        <label
          htmlFor="subject"
          className="text-white block text-sm mb-2 font-medium"
        >
          Subject
        </label>
        <input
          name="subject"
          type="text"
          id="subject"
          required
          className="bg-[#11071F] border border-[#ccb9e5] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
          placeholder="Just saying hi"
        />
      </div>
      
      <div className="mb-6 w-full">
        <label
          htmlFor="message"
          className="text-white block text-sm mb-2 font-medium"
        >
          Message
        </label>
        <textarea
          name="message"
          id="message"
          className="bg-[#11071F] border border-[#ccb9e5] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
          placeholder="Let's talk about..."
        />
      </div>
  
      <button
        type="submit"
        className="bg-[#ccb9e5] hover:bg-primary-600 text-[#11071F] font-medium py-2.5 px-5 rounded-lg w-full"
      >
        Send Message
      </button>
    </form>
  </section>
  
  );
}

export default Contactme;
