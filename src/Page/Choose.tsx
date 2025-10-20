import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import oneimg from "../assets/hdjdkdd 1.svg";
import twoimg from "../assets/pngwing.com (39) 1.svg";
import threeimg from "../assets/—Pngtree—creative hand-painted network security logo_5008553 1.svg";

const Choose = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);

  const brandColor = "#22A0B7";

  const features = [
    {
      id: 1,
      image: threeimg,
      headline: "Smart Investment Intelligence",
      text: "Harness data-driven insights powered by AI to forecast trends, identify opportunities, and guide every financial decision with clarity and precision.",
    },
    {
      id: 2,
      image: twoimg,
      headline: "Automated Portfolio Growth",
      text: "Let our algorithmic systems work for you — executing optimized trades and compounding your gains around the clock with zero emotional bias.",
    },
    {
      id: 3,
      image: oneimg,
      headline: "Bank-Level Security",
      text: "Your funds and data are protected by 256-bit SSL encryption, multi-layer authentication, and offline cold storage ensuring unmatched reliability.",
    },
  ];

  return (
    <div className="w-full py-20 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Choose{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: `linear-gradient(to right, ${brandColor}, ${brandColor})`,
              }}
            >
              Mining Matrix Capital
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Built for investors who value performance, innovation, and trust.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 p-0.5 shadow-xl transition-all hover:shadow-2xl"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              {/* Gradient border glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(135deg, ${brandColor}, ${brandColor})`,
                }}
              ></div>

              {/* Inner content */}
              <div className="relative h-full bg-gray-900 rounded-lg p-6 flex flex-col items-center text-center">
                {/* Icon */}
                <div
                  className="mb-6 p-4 rounded-full shadow-lg"
                  style={{
                    background: `linear-gradient(to right, ${brandColor}, ${brandColor})`,
                  }}
                >
                  <img
                    src={feature.image}
                    alt={feature.headline}
                    className="w-16 h-16 object-contain"
                  />
                </div>

                {/* Text */}
                <h3 className="text-2xl font-bold text-white mb-3">
                  {feature.headline}
                </h3>
                <p className="text-gray-400 mb-6">{feature.text}</p>

                {/* Glow accent */}
                <div
                  className="absolute -bottom-1 -right-1 w-32 h-32 rounded-full opacity-20 blur-xl group-hover:opacity-40 transition-opacity"
                  style={{
                    background: `linear-gradient(to right, ${brandColor}, ${brandColor})`,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {[
            { value: "99.9%", label: "System Uptime" },
            { value: "24/7", label: "Global Support" },
            { value: "12M+", label: "Transactions Processed" },
            { value: "256-bit", label: "Encryption Security" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50 hover:border-[#22A0B7]/60 transition-all text-center"
            >
              <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Choose;
