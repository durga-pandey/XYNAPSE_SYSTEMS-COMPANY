import { useEffect, useRef } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Bubble = () => {
  const bubbleCanvasRef = useRef(null);

  useEffect(() => {
    const canvas = bubbleCanvasRef.current;
    const ctx = canvas.getContext("2d");

    const SAFE_PADDING = 40;
    const TOTAL = 12;
    let bubbles = [];

    const initBubbles = () => {
      bubbles = Array.from({ length: TOTAL }).map(() => {
        const baseR = 10 + Math.random() * 15;
        return {
          baseR,
          r: baseR,
          targetR: baseR,
          x: SAFE_PADDING + Math.random() * (canvas.width - SAFE_PADDING * 2),
          y: SAFE_PADDING + Math.random() * (canvas.height - SAFE_PADDING * 2),
          vx: -0.6 + Math.random() * 1.2,
          vy: -0.6 + Math.random() * 1.2,
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

    const pickPulseGroup = () => {
      const ids = [...Array(TOTAL).keys()]
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);

      bubbles.forEach((b, i) => {
        b.targetR = ids.includes(i) ? b.baseR * 2.2 : b.baseR;
      });
    };

    pickPulseGroup();
    const interval = setInterval(pickPulseGroup, 3500);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      bubbles.forEach((b) => {
        b.x += b.vx;
        b.y += b.vy;

        if (b.x - b.r < SAFE_PADDING) {
          b.x = SAFE_PADDING + b.r;
          b.vx *= -1;
        }
        if (b.x + b.r > canvas.width - SAFE_PADDING) {
          b.x = canvas.width - SAFE_PADDING - b.r;
          b.vx *= -1;
        }
        if (b.y - b.r < SAFE_PADDING) {
          b.y = SAFE_PADDING + b.r;
          b.vy *= -1;
        }
        if (b.y + b.r > canvas.height - SAFE_PADDING) {
          b.y = canvas.height - SAFE_PADDING - b.r;
          b.vy *= -1;
        }

        b.r += (b.targetR - b.r) * 0.05;

        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,255,0.18)";
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="w-full min-h-[500px] md:min-h-[550px] lg:min-h-[600px] grid grid-cols-1 md:grid-cols-1 lg:grid-cols-[45%_45%] gap-6 md:gap-8 px-4 md:px-8 lg:px-8  py-12 md:py-14 lg:py-16 items-center justify-center">
      <div className="flex flex-col items-center md:items-center lg:items-start justify-center text-center lg:text-left text-white gap-6 max-w-full md:max-w-[90%]">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-snug md:leading-[1.25] tracking-tight">
          Why Choose Our Software Solutions
        </h2>

        <ul className="flex flex-col gap-4 mt-6">
          <li className="flex items-center gap-3 text-base">
            <HiArrowNarrowRight className="text-pink-400 text-2xl flex-shrink-0" />
            Cutting-edge real-time monitoring tools for efficient operations.
          </li>
          <li className="flex items-center gap-3 text-base">
            <HiArrowNarrowRight className="text-pink-400 text-2xl flex-shrink-0" />
            Intelligent workflow automation to save time and reduce errors.
          </li>
          <li className="flex items-center gap-3 text-base">
            <HiArrowNarrowRight className="text-pink-400 text-2xl flex-shrink-0" />
            Scalable and secure platform built for growing businesses.
          </li>
          <li className="flex items-center gap-3 text-base">
            <HiArrowNarrowRight className="text-pink-400 text-2xl flex-shrink-0" />
            Intuitive dashboards & analytics for data-driven decisions.
          </li>
          <li className="flex items-center gap-3 text-base">
            <HiArrowNarrowRight className="text-pink-400 text-2xl flex-shrink-0" />
            Dedicated support and continuous updates to keep you ahead.
          </li>
        </ul>
      </div>

      <div className="relative w-full h-64 sm:h-80 md:h-80 lg:h-full flex items-center justify-center overflow-hidden rounded-3xl mt-8 md:mt-6 lg:mt-0">
        <canvas ref={bubbleCanvasRef} className="w-full h-full" />
      </div>
    </section>
  );
};

export default Bubble;
