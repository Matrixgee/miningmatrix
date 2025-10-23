import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  const brandColor = "#22A0B7";

  return (
    <div className="bg-gradient-to-b from-[#0E0E0E] to-[#1a1a1a] text-white min-h-screen pt-32 pb-20">
      {/* Header Section */}
      <section className="text-center max-w-3xl mx-auto px-4 mb-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold mb-6"
        >
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: `linear-gradient(to right, ${brandColor}, ${brandColor})`,
            }}
          >
            Contact Us
          </span>
        </motion.h1>
        <p className="text-gray-300 text-lg">
          We’re here to assist you with any questions, partnership
          opportunities, or investment inquiries. Reach out and our team will
          respond shortly.
        </p>
      </section>

      {/* Contact Info Section */}
      <section className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
        {[
          {
            icon: (
              <FaEnvelope className="text-3xl" style={{ color: brandColor }} />
            ),
            title: "Email",
            info: "support@miningmatrixcapitalpro.com",
            link: "mailto:support@miningmatrixcapitalpro.com",
          },
          {
            icon: (
              <FaPhoneAlt className="text-3xl" style={{ color: brandColor }} />
            ),
            title: "Phone",
            info: "+1 (678) 888-5012",
            link: "tel:+16788885012",
          },
          {
            icon: (
              <FaMapMarkerAlt
                className="text-3xl"
                style={{ color: brandColor }}
              />
            ),
            title: "Address",
            info: "Davis Farm Dr NW, Kenneshaw, Georgia",
            link: "https://maps.google.com",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-[#22A0B7]/40 transition-all duration-300 text-center"
          >
            <div className="flex justify-center mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <a
              href={item.link}
              className="text-gray-400 hover:text-white transition-colors"
            >
              {item.info}
            </a>
          </motion.div>
        ))}
      </section>

      {/* Contact Form */}
      <section className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gray-900/60 p-10 rounded-2xl border border-gray-700 shadow-lg"
        >
          <h2 className="text-3xl font-bold mb-6 text-center">
            Send Us a Message
          </h2>
          <div
            className="h-1 w-20 mx-auto mb-8 rounded-full"
            style={{ backgroundColor: brandColor }}
          />

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-[#22A0B7]"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-[#22A0B7]"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-4 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-[#22A0B7]"
            />
            <textarea
              placeholder="Your Message"
              rows={6}
              className="w-full p-4 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-[#22A0B7]"
            ></textarea>

            <div className="text-center">
              <button
                type="submit"
                className="px-8 py-4 rounded-lg font-medium transition-all duration-300 shadow-lg"
                style={{
                  backgroundColor: brandColor,
                  color: "white",
                }}
              >
                Send Message
              </button>
            </div>
          </form>
        </motion.div>
      </section>

      {/* Map Section */}
      <section className="container mx-auto px-4 mt-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden border border-gray-700"
        >
          <iframe
            title="Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.264904214878!2d-84.60573832335397!3d34.02023087469932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5133bba1b17fb%3A0x50b775b0783d0730!2sDavis%20Farm%20Dr%20NW%2C%20Kennesaw%2C%20GA%2030144!5e0!3m2!1sen!2sus!4v1694649175675!5m2!1sen!2sus"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        </motion.div>
      </section>
    </div>
  );
};

export default ContactUs;
