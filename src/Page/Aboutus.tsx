import { motion } from "framer-motion";
import { FaShieldAlt, FaChartLine, FaUserTie, FaGlobe } from "react-icons/fa";
import logo from "../assets/Miningmatrixlogo-removebg-preview.png";

const AboutUs = () => {
  const brandColor = "#22A0B7";

  const values = [
    {
      icon: <FaShieldAlt className="text-3xl" style={{ color: brandColor }} />,
      title: "Security",
      description:
        "We implement best-in-class security protocols to ensure your investments are protected at all times.",
    },
    {
      icon: <FaChartLine className="text-3xl" style={{ color: brandColor }} />,
      title: "Performance",
      description:
        "Our investment strategies are designed to maximize returns while managing risk in volatile markets.",
    },
    {
      icon: <FaUserTie className="text-3xl" style={{ color: brandColor }} />,
      title: "Expertise",
      description:
        "Our team consists of seasoned professionals with deep expertise in finance, technology, and blockchain.",
    },
    {
      icon: <FaGlobe className="text-3xl" style={{ color: brandColor }} />,
      title: "Global Vision",
      description:
        "We operate with a global perspective, identifying opportunities across markets and regions.",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-[#0E0E0E] to-[#1a1a1a] text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div
            className="absolute top-1/2 left-1/4 w-96 h-96 rounded-full filter blur-3xl"
            style={{ backgroundColor: brandColor }}
          />
        </div>

        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl font-bold mb-6">
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(to right, ${brandColor}, ${brandColor})`,
                }}
              >
                About Top Capital Mining
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-10">
              Pioneering the future of investment through innovative blockchain
              technology and expert financial solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div
                className="h-1 w-20 mb-8 rounded-full"
                style={{ backgroundColor: brandColor }}
              />
              <p className="text-gray-300 mb-6">
                Founded in 2018, Top Capital Mining was established with a clear
                vision: to bridge the gap between traditional finance and the
                emerging world of cryptocurrency and blockchain technology.
              </p>
              <p className="text-gray-300 mb-6">
                In a rapidly evolving financial landscape, we recognized the
                need for a platform that could provide secure, accessible, and
                profitable investment opportunities in digital assets.
              </p>
              <p className="text-gray-300">
                Today, we serve thousands of investors across the globe, helping
                them navigate the complexities of cryptocurrency investments
                with confidence.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div
                className="absolute inset-0 rounded-xl transform rotate-3"
                style={{ backgroundColor: `${brandColor}33` }}
              />
              <img
                src={logo}
                alt="Top logo"
                className="relative z-10 max-w-md mx-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <div
              className="h-1 w-20 mx-auto mb-6 rounded-full"
              style={{ backgroundColor: brandColor }}
            />
            <p className="text-gray-300 max-w-2xl mx-auto">
              These principles guide everything we do at Top Capital Mining.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-[#22A0B7]/40 transition-all duration-300"
              >
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-2xl p-12 text-center max-w-4xl mx-auto border"
            style={{
              backgroundColor: "#0F1C1D",
              borderColor: `${brandColor}33`,
            }}
          >
            <h2 className="text-3xl font-bold mb-6">
              Ready to Start Your Investment Journey?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of investors who trust Top Capital Mining to guide
              their cryptocurrency investments.
            </p>
            <a
              href="/auth/register"
              className="inline-flex items-center px-8 py-4 rounded-lg font-medium transition-all duration-300 shadow-lg"
              style={{
                backgroundColor: brandColor,
                color: "white",
              }}
            >
              Create Your Account
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
