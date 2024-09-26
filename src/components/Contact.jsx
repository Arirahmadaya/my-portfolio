const Contact = () => {
  return (
    <section id="contact" className="px-12 py-24 bg-gray-900 text-white">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold text-center mb-12">My Contact</h2>
        <div className="max-w-lg mx-auto">
          <p className="text-xl text-center mb-6">
            Please fill out the form below to get in touch.
          </p>
          <form className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full p-4 bg-gray-800 text-white rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full p-4 bg-gray-800 text-white rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                required
                rows="5"
                className="w-full p-4 bg-gray-800 text-white rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full py-3 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
