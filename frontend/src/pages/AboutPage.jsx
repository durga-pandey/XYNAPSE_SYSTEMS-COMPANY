import { useEffect, useRef } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";

import { FaStar } from "react-icons/fa";

const teamMembers = [
  {
    name: "Aarav Sharma",
    role: "Team Lead",
    img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
    color: "#ec4899",
  },
  {
    name: "Neha Verma",
    role: "Copy Editor",
    img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
    color: "#6366f1",
  },
  {
    name: "Ritika Singh",
    role: "Chief Editor",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    color: "#6366f1",
  },
  {
    name: "Karan Mehta",
    role: "Team Lead",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    color: "#ec4899",
  },

  // repeat with variations (total 12)
  {
    name: "Ananya Rao",
    role: "UI Designer",
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    color: "#6366f1",
  },
  {
    name: "Rahul Khanna",
    role: "Backend Engineer",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    color: "#ec4899",
  },
  {
    name: "Pooja Nair",
    role: "Project Manager",
    img: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c",
    color: "#ec4899",
  },
  {
    name: "Vikram Joshi",
    role: "DevOps Lead",
    img: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef",
    color: "#6366f1",
  },

  {
    name: "Sneha Patel",
    role: "QA Engineer",
    img: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7",
    color: "#6366f1",
  },
  {
    name: "Arjun Malhotra",
    role: "Product Owner",
    img: "https://images.unsplash.com/photo-1545996124-0501ebae84d0",
    color: "#ec4899",
  },
  {
    name: "Meera Iyer",
    role: "Content Strategist",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    color: "#ec4899",
  },
  {
    name: "Rohan Das",
    role: "Frontend Developer",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    color: "#6366f1",
  },
];

const funFacts = [
  "Our team loves coffee and creative brainstorming.",
  "We celebrate birthdays with fun mini-parties.",
  "Every Friday is casual fun day at office.",
  "Team has members from 5 different countries.",
  "We code, laugh, and innovate together daily.",
  "Late-night coding sessions often turn into idea marathons.",
  "Music plays softly in the background during deep work.",
  "Team brainstorming sessions spark our most creative solutions.",
];

const clientCircles = [
  {
    img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce",
    text: "Happy client from tech industry loving our work.",
  },
  {
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
    text: "Client appreciating our innovative design solutions daily.",
  },
  {
    img: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39",
    text: "Partnered with global startups for scalable projects.",
  },
  {
    img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce",
    text: "Long-term client enjoying smooth communication with team.",
  },
];

const AboutPage = () => {
  const bubbleCanvasRef = useRef(null);

  useEffect(() => {
    const canvas = bubbleCanvasRef.current;
    const ctx = canvas.getContext("2d");

    const SAFE_PADDING = 40;
    const TOTAL = 14;
    let bubbles = [];

    const COLORS = [
      "rgba(236,72,153,0.28)", // pink
      "rgba(99,102,241,0.28)", // blue
    ];

    const initBubbles = () => {
      bubbles = Array.from({ length: TOTAL }).map(() => {
        const baseR = 10 + Math.random() * 16;
        return {
          baseR,
          r: baseR,
          targetR: baseR,
          x: SAFE_PADDING + Math.random() * (canvas.width - SAFE_PADDING * 2),
          y: SAFE_PADDING + Math.random() * (canvas.height - SAFE_PADDING * 2),
          vx: -0.5 + Math.random(),
          vy: -0.5 + Math.random(),
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
        };
      });
    };

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      initBubbles();
    };

    resize();
    window.addEventListener("resize", resize);

    const pulse = () => {
      bubbles.forEach((b) => {
        b.targetR = Math.random() > 0.7 ? b.baseR * 2.1 : b.baseR;
      });
    };

    const pulseInterval = setInterval(pulse, 3000);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      bubbles.forEach((b) => {
        b.x += b.vx;
        b.y += b.vy;

        if (b.x - b.r < SAFE_PADDING || b.x + b.r > canvas.width - SAFE_PADDING)
          b.vx *= -1;
        if (
          b.y - b.r < SAFE_PADDING ||
          b.y + b.r > canvas.height - SAFE_PADDING
        )
          b.vy *= -1;

        b.r += (b.targetR - b.r) * 0.05;

        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.fillStyle = b.color;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      clearInterval(pulseInterval);
    };
  }, []);

  return (
    <>
      <div className="w-full min-h-screen flex items-center justify-center px-4 sm:px-6">
        <div className="max-w-8xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-[100px] items-center">
          {/* LEFT IMAGE SECTION */}
          <div className="relative flex items-center justify-center mt-10 md:mt-0">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              alt="Hand"
              className="
          object-cover rounded-xl relative z-10
          w-[90%] h-[320px]
          sm:w-[400px] sm:h-[400px]
          lg:w-96 lg:h-[480px]
        "
            />

            {/* Animated Circle */}
            <div
              className="
          absolute z-20
          left-1/2 -translate-x-1/2
          -bottom-24 sm:-bottom-28
          lg:left-auto lg:bottom-auto
          lg:top-1/2 lg:-translate-y-1/2
          lg:right-[-90px]
        "
            >
              <div className="circle-wrap">
                <div className="ring">
                  <div className="arm arm-blue">
                    <span className="dot blue"></span>
                  </div>
                  <div className="arm arm-pink">
                    <span className="dot pink"></span>
                  </div>

                  <div className="inner-circle">
                    <img
                      src="https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9"
                      alt="Team"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>

            <style jsx>{`
              .circle-wrap {
                width: 200px;
                height: 200px;
              }

              @media (min-width: 640px) {
                .circle-wrap {
                  width: 230px;
                  height: 230px;
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
                box-shadow: 0 0 16px #6366f1;
              }

              .pink {
                background: #ec4899;
                box-shadow: 0 0 16px #ec4899;
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
                inset: 12px;
                border-radius: 50%;
                background: #fff;
                overflow: hidden;
                z-index: 5;
              }
            `}</style>
          </div>

          {/* RIGHT TEXT SECTION */}
          <div className="flex flex-col text-white text-center md:text-left mt-16 md:mt-0">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-8">
              Introduction to Our Team
            </h2>

            <button className="mx-auto md:mx-0 flex items-center gap-2 w-fit px-6 py-3 bg-white text-gray-900 rounded-full font-semibold hover:scale-105 transition mb-8">
              Our Story <FaArrowRight />
            </button>

            <div className="space-y-4 text-white/90 leading-relaxed max-w-xl mx-auto md:mx-0">
              <p className="text-base sm:text-lg tracking-wide">
                We are a software-driven team focused on building scalable,
                secure, and user-centric digital products that help businesses
                grow and innovate faster in competitive markets across
                industries worldwide today.
              </p>

              <p className="text-base sm:text-lg tracking-wide">
                By combining modern technologies with strong engineering
                practices, we deliver reliable digital solutions that improve
                efficiency and create long-term value for growing enterprises
                worldwide today.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="w-full py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* LEFT TEXT */}
          <div className="text-white text-center md:text-left">
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-12 leading-tight">
              Our Team Members
            </h2>

            <p className="text-white/90 text-lg sm:text-xl leading-relaxed mb-10">
              Our team is a diverse group of passionate professionals working
              together to design, develop, and deliver high-quality digital
              solutions that help businesses scale efficiently while maintaining
              innovation, performance, long-term reliability, and technical
              excellence across modern platforms.
            </p>

            <p className="text-white/90 text-lg sm:text-xl leading-relaxed">
              Each team member brings unique expertise, strong problem-solving
              skills, and a collaborative mindset, allowing us to build reliable
              software, exceed client expectations, deliver consistent results,
              and continuously adapt to evolving industry standards and emerging
              technologies.
            </p>
          </div>

          <div className="relative bg-white rounded-2xl p-6 sm:p-8 shadow-xl overflow-hidden min-h-[440px]">
            <div className="absolute inset-0 z-0 pointer-events-none">
              <canvas ref={bubbleCanvasRef} className="w-full h-full block" />
            </div>

            <div className="absolute inset-0 z-[1] bg-gradient-to-br from-white/60 via-white/40 to-white/20 backdrop-blur-sm" />

            <div className="relative z-10">
              <Swiper
                modules={[Autoplay, Navigation]}
                autoplay={{ delay: 3500, disableOnInteraction: false }}
                navigation
                loop
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                  640: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 1 },
                }}
                className="team-swiper"
              >
                {Array.from({ length: 3 }).map((_, slideIndex) => (
                  <SwiperSlide key={slideIndex}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {teamMembers
                        .slice(slideIndex * 4, slideIndex * 4 + 4)
                        .map((member, i) => (
                          <div
                            key={i}
                            className="relative rounded-xl p-6 text-white flex flex-col items-center text-center
                backdrop-blur-xl border border-white/20
                shadow-[0_8px_30px_rgba(0,0,0,0.25)]
                transition-all duration-300"
                            style={{
                              backgroundColor: `${member.color}88`,
                            }}
                          >
                            <img
                              src={member.img}
                              className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-white/80"
                            />
                            <h3 className="text-lg font-bold">{member.name}</h3>
                            <p className="text-white/90 text-sm">
                              {member.role}
                            </p>
                          </div>
                        ))}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          {/* HEADING */}
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
            Our Team Speciality
          </h2>

          {/* PARAGRAPH (≈30 words) */}
          <p className="max-w-3xl mx-auto text-white/90 text-lg sm:text-xl leading-relaxed mb-16">
            Our team combines technical expertise, creative thinking, and
            strategic execution to deliver scalable, secure, and
            high-performance digital solutions that consistently exceed client
            expectations across industries.
          </p>

          {/* CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 place-items-center">
            {/* CARD 1 */}
            <div
              className="w-64 h-[340px] bg-white/15 backdrop-blur-xl
        rounded-t-full rounded-b-none
        border border-white/20
        shadow-[0_10px_40px_rgba(0,0,0,0.35)]
        flex flex-col items-center justify-start pt-10 text-center
      "
            >
              <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden mb-6">
                <img
                  src="https://images.unsplash.com/photo-1527980965255-d3b416303d12"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-white text-xl font-bold">Aarav Sharma</h3>
              <p className="text-white/80 mt-2 text-sm">
                Leadership · Architecture · Strategy
              </p>
            </div>

            {/* CARD 2 */}
            <div
              className="w-64 h-[340px] bg-white/15 backdrop-blur-xl
        rounded-t-full rounded-b-none
        border border-white/20
        shadow-[0_10px_40px_rgba(0,0,0,0.35)]
        flex flex-col items-center justify-start pt-10 text-center
      "
            >
              <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden mb-6">
                <img
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-white text-xl font-bold">Neha Verma</h3>
              <p className="text-white/80 mt-2 text-sm">
                Content · UX Writing · Brand Voice
              </p>
            </div>

            {/* CARD 3 */}
            <div
              className="w-64 h-[340px] bg-white/15 backdrop-blur-xl
        rounded-t-full rounded-b-none
        border border-white/20
        shadow-[0_10px_40px_rgba(0,0,0,0.35)]
        flex flex-col items-center justify-start pt-10 text-center
      "
            >
              <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden mb-6">
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-white text-xl font-bold">Ritika Singh</h3>
              <p className="text-white/80 mt-2 text-sm">
                Quality · Editing · Content Strategy
              </p>
            </div>

            {/* CARD 4 */}
            <div
              className="w-64 h-[340px] bg-white/15 backdrop-blur-xl
        rounded-t-full rounded-b-none
        border border-white/20
        shadow-[0_10px_40px_rgba(0,0,0,0.35)]
        flex flex-col items-center justify-start pt-10 text-center
      "
            >
              <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden mb-6">
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-white text-xl font-bold">Karan Mehta</h3>
              <p className="text-white/80 mt-2 text-sm">
                Development · Performance · Scalability
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full px-4 sm:px-6 py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* LEFT DIV */}
          <div className="flex flex-col gap-6">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white">
              Fun Facts About Our Team
            </h2>

            <ul className="flex flex-col gap-4 mt-4">
              {funFacts.map((fact, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-white text-lg sm:text-xl"
                >
                  <FaStar className="text-pink-500 mt-1 flex-shrink-0" />
                  <span>{fact}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative flex flex-wrap justify-center items-center gap-10 mt-10 lg:mt-0">
            {clientCircles.map((client, idx) => (
              <div key={idx} className="relative flex flex-col items-center">
                <div className="w-52 h-52 sm:w-60 sm:h-60 rounded-full border-4 border-white flex items-center justify-center relative">
                  <div className="w-44 h-44 sm:w-48 sm:h-48 rounded-full border-2 border-dotted border-white flex items-center justify-center absolute">
                    <div className="absolute inset-x-0 bottom-[70px] text-center text-white text-xs sm:text-sm px-2">
                      {client.text}
                    </div>
                  </div>
                  <div className="absolute -bottom-3 -left-3 w-24 h-24 sm:w-20 sm:h-20 rounded-full border-2 border-white overflow-hidden">
                    <img
                      src={client.img}
                      alt={`Client ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
