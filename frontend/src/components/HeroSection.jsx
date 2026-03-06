import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import { Camera, MapPin } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const HeroSection = () => {
  const officeImages = [
    "/images/office-1.jpg",
    "/images/office-2.jpeg",
    "/images/office-3.png",
    "/images/office-4.jpg",
    "/images/office-5.jpg",
  ];

  return (
    <section className="relative w-full bg-[#030712] overflow-hidden py-24 lg:min-h-screen flex items-center">
      
      {/* 1. MATCHED BACKGROUND (Consistency) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]" />
      </div>

      {/* 2. MATCHED WRAPPER (Alignment) */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-10 w-full">
        
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Side: Text Content */}
          <div className="lg:w-1/3 text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-xs font-black uppercase tracking-widest">
              <Camera size={14} /> Virtual Tour
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tighter">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 text-nowrap">Creative Hub</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 font-medium leading-relaxed">
              Step inside our modern workspace engineered for innovation, collaboration, and high-performance engineering.
            </p>
            <div className="flex items-center gap-3 text-slate-500 text-sm font-bold">
              <MapPin size={18} className="text-purple-500" />
              <span>Xynapse Headquarters, Tech Park</span>
            </div>
          </div>

          {/* Right Side: Swiper with "EffectCoverflow" for Tagra Look */}
          <div className="lg:w-2/3 w-full relative">
            {/* Glass Box Container */}
            <div className="relative p-2 md:p-4 rounded-[3rem] bg-white/5 border border-white/10 backdrop-blur-3xl shadow-2xl">
              <Swiper
                modules={[Autoplay, Navigation, Pagination, EffectCoverflow]}
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 2.5,
                  slideShadows: false,
                }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                navigation={true}
                pagination={{ clickable: true }}
                loop={true}
                className="office-swiper rounded-[2.5rem]"
              >
                {officeImages.map((img, index) => (
                  <SwiperSlide key={index} className="max-w-[100%] md:max-w-[80%]">
                    <img
                      src={img}
                      alt={`Office ${index + 1}`}
                      className="w-full h-[300px] md:h-[500px] object-cover rounded-[2.5rem] shadow-2xl"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Custom Swiper Styles for Dark Theme */}
            <style jsx global>{`
              .office-swiper .swiper-button-next,
              .office-swiper .swiper-button-prev {
                background: rgba(255, 255, 255, 0.1);
                backdrop-filter: blur(10px);
                width: 50px;
                height: 50px;
                border-radius: 50%;
                color: white !important;
                border: 1px solid rgba(255, 255, 255, 0.1);
              }
              .office-swiper .swiper-button-next:after,
              .office-swiper .swiper-button-prev:after {
                font-size: 18px;
                font-weight: bold;
              }
              .office-swiper .swiper-pagination-bullet {
                background: rgba(255, 255, 255, 0.3);
                opacity: 1;
              }
              .office-swiper .swiper-pagination-bullet-active {
                background: #22d3ee; /* Cyan-400 */
                width: 24px;
                border-radius: 4px;
              }
            `}</style>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;