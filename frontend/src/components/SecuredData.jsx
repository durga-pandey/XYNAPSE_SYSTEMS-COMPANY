const SecuredData = () => {
  return (
    <div>
      <section className="w-full py-14 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-32 items-center text-center lg:text-left">
          <div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-5">
              100% Secured Data
            </h2>

            <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-7 max-w-xl mx-auto lg:mx-0">
              We protect your data with enterprise-grade security, advanced
              encryption, and secure cloud infrastructure to ensure complete
              privacy, integrity, and protection against unauthorized access at
              all times.
            </p>

            <button className="px-7 py-3 sm:px-8 sm:py-4 rounded-full bg-white text-gray-900 font-semibold hover:scale-105 transition-transform duration-300 shadow-lg">
              Learn More
            </button>
          </div>

          <div className="flex justify-center">
            <div className="relative circle-wrap">
              <div className="ring">
                <div className="arm arm-blue">
                  <span className="dot blue"></span>
                </div>

                <div className="arm arm-pink">
                  <span className="dot pink"></span>
                </div>

                <div className="inner-circle">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full rounded-full object-cover"
                    src="https://res.cloudinary.com/dcll0n88n/video/upload/v1771703893/video-2_qpg7f2.mp4"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-14 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-[250px] items-center text-center lg:text-left">
          <div className="flex justify-center order-1 lg:order-1">
            <div className="relative circle-wrap">
              <div className="ring">
                <div className="arm arm-blue">
                  <span className="dot blue"></span>
                </div>

                <div className="arm arm-pink">
                  <span className="dot pink"></span>
                </div>

                <div className="inner-circle">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full rounded-full object-cover"
                    src="https://res.cloudinary.com/dcll0n88n/video/upload/v1771704157/video-1_rroyft.mp4"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="order-2 lg:order-2">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-5">
              24/7 Customer Support
            </h2>

            <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-7 max-w-xl mx-auto lg:mx-0">
              Our dedicated support team is available around the clock to
              resolve issues quickly and ensure a smooth, uninterrupted
              experience for your business.
            </p>

            <button className="px-7 py-3 sm:px-8 sm:py-4 rounded-full bg-white text-gray-900 font-semibold hover:scale-105 transition-transform duration-300 shadow-lg">
              Learn More
            </button>
          </div>
        </div>
      </section>

      <style jsx>{`
        /* RESPONSIVE CIRCLE SIZE */
        .circle-wrap {
          width: 260px;
          height: 260px;
        }

        @media (min-width: 640px) {
          .circle-wrap {
            width: 320px;
            height: 320px;
          }
        }

        @media (min-width: 1024px) {
          .circle-wrap {
            width: 420px;
            height: 420px;
          }
        }

        .ring {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }

        .arm {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          mask: radial-gradient(transparent 63%, black 65%);
        }

        .arm-blue {
          background: conic-gradient(
            #6366f1 0deg 108deg,
            transparent 108deg 360deg
          );
          animation: spinBlue 4s linear infinite;
        }

        .arm-pink {
          background: conic-gradient(
            #ec4899 0deg 108deg,
            transparent 108deg 360deg
          );
          animation: spinPink 4s linear infinite;
        }

        .dot {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          transform: translateX(calc(50% - 2px));
        }

        .blue {
          background: #6366f1;
          box-shadow: 0 0 18px #6366f1;
        }

        .pink {
          background: #ec4899;
          box-shadow: 0 0 18px #ec4899;
        }

        @keyframes spinBlue {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spinPink {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        .inner-circle {
          position: absolute;
          inset: 14px;
          border-radius: 50%;
          background: #0b0b14;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 5;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default SecuredData;
