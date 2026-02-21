const Projects = () => {
  return (
    <div>
      <section className="w-full py-24">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white text-center mb-6">
            Our Projects
          </h2>

          <p className="text-white/80 text-base sm:text-lg text-center max-w-3xl mx-auto mb-16">
            Explore some of our latest projects showcasing innovation,
            performance, scalability, and modern digital solutions built for
            real businesses.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[50px]">
            <div className="bg-white/5 border border-white/20 rounded-3xl overflow-hidden hover:scale-105 hover:shadow-2xl transition-transform duration-300">
              <img
                src="/images/project-1.jpg"
                alt="Project 1"
                className="w-full h-[260px] object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">
                  Enterprise Dashboard
                </h3>
                <p className="text-white/80 text-lg leading-relaxed">
                  Secure enterprise dashboard built to manage complex data
                  analytics, user roles, and real-time system monitoring
                  efficiently, improving team productivity and operational
                  visibility.
                </p>
              </div>
            </div>

            <div className="bg-white/5 border border-white/20 rounded-3xl overflow-hidden hover:scale-105 hover:shadow-2xl transition-transform duration-300">
              <img
                src="/images/project-2.png"
                alt="Project 2"
                className="w-full h-[260px] object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">
                  SaaS Platform
                </h3>
                <p className="text-white/80 text-lg leading-relaxed">
                  Modern SaaS platform designed with scalable architecture,
                  intuitive user interface, and high-performance backend
                  infrastructure for seamless operations and enhanced user
                  satisfaction.
                </p>
              </div>
            </div>

            <div className="bg-white/5 border border-white/20 rounded-3xl overflow-hidden hover:scale-105 hover:shadow-2xl transition-transform duration-300">
              <img
                src="/images/project-3.jpeg"
                alt="Project 3"
                className="w-full h-[260px] object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">
                  E-commerce Solution
                </h3>
                <p className="text-white/80 text-lg leading-relaxed">
                  Full-featured e-commerce solution with secure payment
                  gateways, inventory management, and optimized user experience
                  across desktop and mobile devices for maximum customer
                  engagement.
                </p>
              </div>
            </div>

            <div className="bg-white/5 border border-white/20 rounded-3xl overflow-hidden hover:scale-105 hover:shadow-2xl transition-transform duration-300">
              <img
                src="/images/project-4.png"
                alt="Project 4"
                className="w-full h-[260px] object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">
                  Workflow Automation
                </h3>
                <p className="text-white/80 text-lg leading-relaxed">
                  Custom web application to automate business workflows, reduce
                  manual effort, improve productivity, and deliver reliable
                  performance for critical operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
