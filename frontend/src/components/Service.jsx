import { useState } from "react";
import {
  FaCode,
  FaCloud,
  FaRobot,
  FaMobileAlt,
  FaPencilRuler,
  FaShieldAlt,
} from "react-icons/fa";

const services = [
  {
    title: "Custom Software Development",
    description:
      "We create tailored software solutions that align perfectly with your business goals. From automating workflows to building complex enterprise systems, our software enhances efficiency, reduces manual effort, and drives measurable results.",
    icon: <FaCode className="text-white w-6 h-6" />,
  },
  {
    title: "Cloud Integration",
    description:
      "Our team ensures seamless migration and integration of your applications to leading cloud platforms. We optimize scalability, reliability, and performance, enabling your business to leverage the full power of cloud computing without disruption.",
    icon: <FaCloud className="text-white w-6 h-6" />,
  },
  {
    title: "AI & Machine Learning",
    description:
      "Leverage intelligent systems with our AI & Machine Learning solutions. We design predictive models, automate decision-making processes, and extract actionable insights from your data to help your business stay ahead in a competitive landscape.",
    icon: <FaRobot className="text-white w-6 h-6" />,
  },
  {
    title: "Mobile App Development",
    description:
      "We develop high-performance mobile applications for both iOS and Android platforms. Our apps are designed for speed, usability, and engagement, ensuring seamless user experiences that drive adoption and customer satisfaction.",
    icon: <FaMobileAlt className="text-white w-6 h-6" />,
  },
  {
    title: "UI/UX Design",
    description:
      "Our design team crafts intuitive and visually appealing user interfaces that enhance engagement and satisfaction. We focus on human-centered design principles, accessibility, and consistent branding to elevate your digital presence.",
    icon: <FaPencilRuler className="text-white w-6 h-6" />,
  },
  {
    title: "Cybersecurity Solutions",
    description:
      "Protect your digital assets with our comprehensive cybersecurity solutions. We offer vulnerability assessments, threat monitoring, and robust security protocols to safeguard your business against cyber attacks and data breaches.",
    icon: <FaShieldAlt className="text-white w-6 h-6" />,
  },
];

const Service = () => {
  const [flippedIndex, setFlippedIndex] = useState(null);

  return (
    <div>
      <section className="w-full py-16">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-5xl md:text-6xl font-extrabold text-white text-center mb-6">
            Our Services
          </h2>

          <p className="text-center text-white/90 text-lg md:text-xl max-w-3xl mx-auto mb-16 leading-relaxed">
            Explore our comprehensive range of professional software solutions,
            designed to boost efficiency, drive innovation, and transform your
            business digitally.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
            {services.map((service, index) => (
              <div key={index} className="relative perspective">
                <div
                  className={`card bg-white p-8 pt-16 rounded-2xl shadow-lg min-h-[360px] transition-transform duration-700 ease-in-out ${
                    flippedIndex === index ? "rotate-y-360" : ""
                  }`}
                  onClick={() =>
                    setFlippedIndex(flippedIndex === index ? null : index)
                  }
                >
                  {/* Circle with icon */}
                  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-purple-500 w-20 h-20 rounded-full flex items-center justify-center shadow-md">
                    {service.icon}
                  </div>
                  {/* Card content */}
                  <h3 className="text-2xl font-bold mb-4 text-center text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 text-center text-base leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          .perspective {
            perspective: 1000px;
          }

          .card {
            transform-style: preserve-3d;
          }

          /* Desktop hover flip */
          @media (hover: hover) and (pointer: fine) {
            .card:hover {
              transform: rotateY(360deg);
            }
          }

          /* Mobile tap flip */
          .rotate-y-360 {
            transform: rotateY(360deg);
          }
        `}</style>
      </section>
    </div>
  );
};

export default Service;
