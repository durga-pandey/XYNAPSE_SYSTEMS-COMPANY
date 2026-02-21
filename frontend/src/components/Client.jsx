const Client = () => {
  return (
    <div>
      <section className="w-full lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="flex flex-col items-center lg:items-start">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-20 text-center lg:text-left">
              Companies We've Worked With
            </h2>

            <div className="flex justify-center lg:justify-start w-full">
              <div className="w-full max-w-md h-[400px] rounded-xl shadow-lg overflow-hidden">
                <img
                  src="/images/working-main.jpg"
                  alt="Company"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:scale-[1.02] transition-transform duration-300 shadow-lg min-h-[150px]">
              <p className="text-white/80 text-lg mb-4 leading-relaxed">
                Working with this team has been a game-changer. Their solutions
                streamlined our workflow, increased efficiency, and
                significantly boosted overall productivity.
              </p>
              <p className="text-pink-500 font-semibold">- TechCorp</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:scale-[1.02] transition-transform duration-300 shadow-lg min-h-[150px]">
              <p className="text-white/80 text-lg mb-4 leading-relaxed">
                Exceptional service and reliable support. They delivered exactly
                what we needed, helping us modernize our platform with smooth
                implementation.
              </p>
              <p className="text-pink-500 font-semibold">- InnovateX</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:scale-[1.02] transition-transform duration-300 shadow-lg min-h-[150px]">
              <p className="text-white/80 text-lg mb-4 leading-relaxed">
                Their expertise in software development helped us achieve our
                goals faster. The team was professional, responsive, and highly
                skilled.
              </p>
              <p className="text-pink-500 font-semibold">- Alpha Solutions</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Client;
