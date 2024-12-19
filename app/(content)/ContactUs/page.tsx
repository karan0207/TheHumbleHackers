import Wrapper from "@/components/global/wrapper";

export default function ContactPage() {
  return (
    <Wrapper>
      <main className="container mx-auto px-4 py-12 font-sans">
        {/* About Us Section */}
        <section className="bg-gradient-to-r from-purple-500 via-purple-700 to-black text-gray-300 shadow-md rounded-lg p-8 mb-10">
          <h1 className="text-4xl font-bold text-center text-purple-200 mb-6 tracking-wide">
            About Us
          </h1>
          <p className="text-lg leading-relaxed">
            We are a small AI agency specializing in content marketing and immersive AI/VR solutions. 
            Our remote-first team is passionate about leveraging cutting-edge technology to empower 
            businesses worldwide. While our roots are remote, we have a base in the vibrant city of 
            Singapore, where innovation meets opportunity.
          </p>
        </section>

        {/* Address Section */}
        <section className="bg-gradient-to-r from-purple-500 via-purple-700 to-black text-gray-300 shadow-md rounded-lg p-8 mb-10">
          <h2 className="text-4xl font-bold text-center text-purple-200 mb-6 tracking-wide">
            Our Address
          </h2>
          <div className="text-lg leading-relaxed">
            <p>
              <strong className="text-gray-100">Location:</strong> Singapore Office
            </p>
            <p>123 AI Lane, Innovation Hub, Singapore 567890</p>
            <p>
              <strong className="text-gray-100">Email:</strong> contact@aiagency.com
            </p>
            <p>
              <strong className="text-gray-100">Phone:</strong> +65 1234 5678
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="bg-gradient-to-r from-purple-500 via-purple-700 to-black text-gray-300 shadow-md rounded-lg p-8">
          <h2 className="text-4xl font-bold text-center text-purple-200 mb-6 tracking-wide">
            Contact Us
          </h2>
          <form className="space-y-6">
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-lg font-medium text-gray-100 mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-3 border border-purple-400 bg-transparent text-gray-300 placeholder-zinc-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-300"
                placeholder="Enter your name"
              />
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-lg font-medium text-gray-100 mb-2"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 border border-purple-400 bg-transparent text-gray-300 placeholder-zinc-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-300"
                placeholder="Enter your email"
              />
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="block text-lg font-medium text-gray-100 mb-2"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full px-4 py-3 border border-purple-400 bg-transparent text-gray-800 placeholder-zinc-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-300"
                placeholder="Write your message here"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-purple-400 to-blue-500 text-white font-medium text-lg rounded-lg shadow-md hover:from-purple-500 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-purple-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </section>
      </main>
    </Wrapper>
  );
}
