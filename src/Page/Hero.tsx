import { motion } from "framer-motion";

const Hero = ({
  title = "Empowering Financial Growth",
  subtitle = "Invest smarter with real-time AI insights designed to help you grow securely and confidently.",
  primaryBtn = "Join Now",
  secondaryBtn = "View Plans",
  features = [
    { value: "99.9%", label: "Uptime Reliability" },
    { value: "Fast", label: "Payout Processing" },
    { value: "Global", label: "User Access" },
    { value: "24/7", label: "Customer Support" },
  ],
}) => {
  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        {/* Animated Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight text-gray-900 dark:text-white"
        >
          {title.split(" ").map((word, i) => (
            <span
              key={i}
              className={`${
                i === 1
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500"
                  : ""
              }`}
            >
              {word}{" "}
            </span>
          ))}
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10"
        >
          {subtitle}
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex justify-center gap-4"
        >
          <button className="px-6 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
            {primaryBtn}
          </button>
          <button className="px-6 py-3 rounded-full border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition">
            {secondaryBtn}
          </button>
        </motion.div>

        {/* Feature Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16"
        >
          {features.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center bg-white/80 dark:bg-gray-800/50 backdrop-blur-md py-6 px-4 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition"
            >
              <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                {item.value}
              </span>
              <span className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                {item.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
