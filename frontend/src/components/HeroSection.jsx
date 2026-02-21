import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";

const HeroSection = () => {
  const officeImages = [
    "/images/office-1.jpg",
    "/images/office-2.jpeg",
    "/images/office-3.png",
    "/images/office-4.jpg",
    "/images/office-5.jpg",
  ];

  return (
    <div>
      <section className="relative w-full overflow-hidden flex items-center justify-center text-white min-h-[auto] md:min-h-screen py-10 sm:py-14 md:py-24">
        <div className="relative z-10 w-full flex flex-col items-center text-center px-4 sm:px-6 space-y-6 sm:space-y-10 md:space-y-14">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight mb-3 sm:mb-4">
              Welcome to Our Office
            </h1>
            <p className="text-base sm:text-lg md:text-2xl text-white/80">
              Explore our modern workspace and vibrant environment.
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-[95%] sm:max-w-4xl md:max-w-5xl lg:max-w-6xl bg-white/10 backdrop-blur-xl rounded-2xl shadow-xl p-3 sm:p-4 md:p-6">
            <Swiper
              modules={[Autoplay, Navigation]}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              navigation={true}
              loop={true}
              spaceBetween={20}
              slidesPerView={1}
              className="custom-swiper"
            >
              {officeImages.map((img, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={img}
                    alt={`Office ${index + 1}`}
                    className="w-full h-48 sm:h-60 md:h-72 lg:h-80 object-cover rounded-xl"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <style jsx>{`
              .custom-swiper .swiper-button-prev,
              .custom-swiper .swiper-button-next {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                width: 44px;
                height: 44px;
                border-radius: 9999px;
                background: rgba(255, 255, 255, 0.2);
                display: flex;
                align-items: center;
                justify-content: center;
                color: black !important;
                z-index: 30;
                box-shadow: 0 4px 18px rgba(0, 0, 0, 0.35);
                transition: transform 180ms ease, background 180ms ease;
              }

              .custom-swiper .swiper-button-prev {
                left: 8px;
              }
              .custom-swiper .swiper-button-next {
                right: 8px;
              }

              @media (max-width: 768px) {
                .custom-swiper .swiper-button-prev,
                .custom-swiper .swiper-button-next {
                  width: 48px;
                  height: 48px;
                  left: 6px;
                  right: 6px;
                }
              }

              .custom-swiper .swiper-button-prev::after,
              .custom-swiper .swiper-button-next::after {
                font-size: 20px;
                opacity: 1;
              }

              .custom-swiper .swiper-button-prev:hover,
              .custom-swiper .swiper-button-next:hover {
                transform: translateY(-50%) scale(1.08);
                background: rgba(255, 255, 255, 0.35);
              }
            `}</style>
          </div>
        </div>

        <svg
          className="absolute w-full h-full top-0 left-0"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            className="animate-wave1"
            fill="rgba(255,255,255,0.3)"
            d="M0,100 C360,150 1080,50 1440,100 L1440,0 L0,0 Z"
          />
          <path
            className="animate-wave2"
            fill="rgba(255,255,255,0.2)"
            d="M0,180 C360,230 1080,130 1440,180 L1440,0 L0,0 Z"
          />
          <path
            className="animate-wave3"
            fill="rgba(255,255,255,0.1)"
            d="M0,260 C360,310 1080,210 1440,260 L1440,0 L0,0 Z"
          />
        </svg>

        <style jsx>{`
          .animate-wave1 {
            animation: waveMove1 8s linear infinite,
              waveUpDown1 6s ease-in-out infinite alternate;
          }
          .animate-wave2 {
            animation: waveMove2 10s linear infinite,
              waveUpDown2 7s ease-in-out infinite alternate;
          }
          .animate-wave3 {
            animation: waveMove3 12s linear infinite,
              waveUpDown3 8s ease-in-out infinite alternate;
          }

          @keyframes waveMove1 {
            0% {
              transform: translateX(0);
            }
            50% {
              transform: translateX(-25%);
            }
            100% {
              transform: translateX(0);
            }
          }
          @keyframes waveMove2 {
            0% {
              transform: translateX(0);
            }
            50% {
              transform: translateX(-30%);
            }
            100% {
              transform: translateX(0);
            }
          }
          @keyframes waveMove3 {
            0% {
              transform: translateX(0);
            }
            50% {
              transform: translateX(-35%);
            }
            100% {
              transform: translateX(0);
            }
          }

          @keyframes waveUpDown1 {
            0%,
            100% {
              transform: translateY(0);
            }
            25% {
              transform: translateY(15px);
            }
            50% {
              transform: translateY(5px);
            }
            75% {
              transform: translateY(10px);
            }
          }
          @keyframes waveUpDown2 {
            0%,
            100% {
              transform: translateY(0);
            }
            25% {
              transform: translateY(10px);
            }
            50% {
              transform: translateY(15px);
            }
            75% {
              transform: translateY(5px);
            }
          }
          @keyframes waveUpDown3 {
            0%,
            100% {
              transform: translateY(0);
            }
            25% {
              transform: translateY(20px);
            }
            50% {
              transform: translateY(10px);
            }
            75% {
              transform: translateY(15px);
            }
          }
        `}</style>
      </section>
    </div>
  );
};

export default HeroSection;
