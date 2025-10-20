import { motion } from "framer-motion";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const brandColor = "#22A0B7";

  const services = [
    {
      title: "AI Portfolio Management",
      description:
        "Our intelligent algorithms continuously optimize your investment portfolio based on market conditions and your risk profile.",
      icon: "🤖",
    },
    {
      title: "Automated Trading",
      description:
        "Set your parameters and let our bots execute trades 24/7, taking advantage of every market opportunity.",
      icon: "⚡",
    },
    {
      title: "Risk Analysis",
      description:
        "Comprehensive risk assessment tools to help you make informed decisions and protect your assets.",
      icon: "🛡️",
    },
    {
      title: "Yield Optimization",
      description:
        "Maximize your returns with our advanced yield farming strategies across multiple DeFi protocols.",
      icon: "📈",
    },
    {
      title: "Security Vaults",
      description:
        "Enterprise-grade security solutions including multi-sig wallets and cold storage options.",
      icon: "🔒",
    },
    {
      title: "Tax Reporting",
      description:
        "Automated tax reporting tools that track your transactions and generate necessary documents.",
      icon: "🧾",
    },
  ];

  return (
    <div className="w-full py-20 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16" data-aos="fade-up">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: `linear-gradient(to right, ${brandColor}, ${brandColor})`,
              }}
            >
              Premium
            </span>{" "}
            Services
          </motion.h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive solutions designed to maximize your crypto investment
            potential.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 p-0.5 shadow-xl hover:shadow-2xl transition-all"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              whileHover={{ y: -5 }}
            >
              {/* Hover Glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(135deg, ${brandColor}, ${brandColor})`,
                }}
              ></div>

              {/* Card Content */}
              <div className="relative h-full bg-gray-900 rounded-lg p-8 flex flex-col">
                <div
                  className="mb-6 w-16 h-16 rounded-full flex items-center justify-center text-2xl shadow-lg"
                  style={{
                    background: `linear-gradient(to right, ${brandColor}, ${brandColor})`,
                  }}
                >
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-400 flex-grow">{service.description}</p>

                <div className="mt-6">
                  <button
                    className="text-sm font-medium transition-colors"
                    style={{ color: brandColor }}
                  >
                    Learn more →
                  </button>
                </div>

                {/* Glow Accent */}
                <div
                  className="absolute -bottom-1 -right-1 w-32 h-32 rounded-full opacity-20 blur-xl group-hover:opacity-40 transition-opacity"
                  style={{
                    background: `linear-gradient(to right, ${brandColor}, ${brandColor})`,
                  }}
                ></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
