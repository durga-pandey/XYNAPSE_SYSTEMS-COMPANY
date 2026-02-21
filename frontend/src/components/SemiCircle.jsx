import { useEffect, useRef } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const SemiCircle = () => {
  const semiCanvasRef = useRef(null);

  useEffect(() => {
    const canvas = semiCanvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    let progress = 0;
    let mode = "pink";

    const animate = () => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      const cx = w / 2;
      const r = Math.min(w, h) * 0.38;
      const thickness = 100;

      const cy = h / 2 + thickness / 2 + 60;

      const baseGradient = ctx.createLinearGradient(cx - r, cy, cx + r, cy);
      baseGradient.addColorStop(0, "#0f2027");
      baseGradient.addColorStop(0.5, "#203a43");
      baseGradient.addColorStop(1, "#2c5364");

      ctx.beginPath();
      ctx.arc(cx, cy, r, Math.PI, 0);
      ctx.lineWidth = thickness;
      ctx.lineCap = "butt";
      ctx.strokeStyle = baseGradient;
      ctx.stroke();

      const activeGradient = ctx.createLinearGradient(cx - r, cy, cx + r, cy);
      if (mode === "pink") {
        activeGradient.addColorStop(0, "#ff5f9e");
        activeGradient.addColorStop(1, "#ff86b3");
      } else {
        activeGradient.addColorStop(0, "#0f2027");
        activeGradient.addColorStop(0.5, "#203a43");
        activeGradient.addColorStop(1, "#2c5364");
      }

      ctx.beginPath();
      ctx.arc(cx, cy, r, Math.PI, Math.PI + Math.PI * progress);
      ctx.lineWidth = thickness;
      ctx.lineCap = "butt";
      ctx.strokeStyle = activeGradient;
      ctx.stroke();

      progress += 0.002;
      if (progress >= 1) {
        progress = 0;
        mode = mode === "pink" ? "dark-blue" : "pink";
      }

      requestAnimationFrame(animate);
    };

    animate();
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
   <section
  className="w-full min-h-[480px] md:min-h-[550px] lg:min-h-[600px]
  grid grid-cols-1 lg:grid-cols-2
  gap-8 px-4 md:px-8 lg:px-12 py-8 md:py-12 lg:py-16
  items-center"
>
  {/* LEFT */}
  <div
    className="relative w-full
    h-60 sm:h-72 md:h-[420px] lg:h-[480px]
    flex items-center justify-center"
  >
    <canvas ref={semiCanvasRef} className="w-full h-full" />
  </div>

  {/* RIGHT */}
  <div className="w-full h-full flex items-center mt-10 lg:mt-0">
    <div
      className="flex flex-col items-center lg:items-start justify-center
      text-white px-2 md:px-4 lg:px-12 text-center lg:text-left gap-5 max-w-full md:max-w-[90%]"
    >
      <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold">
        Powering Modern Software Products
      </h3>

      <ul className="flex flex-col gap-4 mt-2">
        <li className="flex items-center gap-3">
          <HiArrowNarrowRight className="text-pink-400 text-2xl" />
          High-performance architectures designed for scalability and speed.
        </li>
        <li className="flex items-center gap-3">
          <HiArrowNarrowRight className="text-pink-400 text-2xl" />
          Smart automation workflows that reduce manual effort and costs.
        </li>
        <li className="flex items-center gap-3">
          <HiArrowNarrowRight className="text-pink-400 text-2xl" />
          Secure, cloud-ready systems built for long-term growth.
        </li>
        <li className="flex items-center gap-3">
          <HiArrowNarrowRight className="text-pink-400 text-2xl" />
          Clean dashboards and analytics for real-time business insights.
        </li>
        <li className="flex items-center gap-3">
          <HiArrowNarrowRight className="text-pink-400 text-2xl" />
          Reliable engineering support with continuous product improvements.
        </li>
      </ul>
    </div>
  </div>
</section>

  );
};

export default SemiCircle;
