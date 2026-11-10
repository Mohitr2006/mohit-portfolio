import { useEffect, useRef } from "react";

/**
 * ScatterPlot
 * A noisy scatter with a fitted line that draws in once on mount.
 * Points near the pointer highlight. Respects prefers-reduced-motion.
 *
 * Colors come from the CSS variables --accent and --muted (with fallbacks),
 * so it follows your light/dark theme. Pass `accent` / `muted` to override.
 */

// Seeded random so the plot looks the same on every render
function makeRandom(seed) {
  let s = seed;
  const rand = () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
  const gauss = () => (rand() + rand() + rand() + rand() - 2) / 0.58;
  return { rand, gauss };
}

// The "true" trend the line follows. Output is 0 (top) to 1 (bottom).
const fit = (x) => 0.68 - 0.42 * x + 0.07 * Math.sin(x * 9);

export default function ScatterPlot({
  count = 150,
  seed = 7,
  noise = 0.06,
  height = 240,
  hoverRadius = 70,
  accent,
  muted,
  className,
  style,
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const { rand, gauss } = makeRandom(seed);
    const points = Array.from({ length: count }, () => {
      const x = rand();
      return { x, y: fit(x) + gauss() * noise };
    });

    let width = 0;
    let h = 0;
    let progress = reduceMotion ? 1 : 0;
    let pointer = null;
    let frame = 0;
    let startTime = null;

    const cssVar = (name, fallback) =>
      getComputedStyle(canvas).getPropertyValue(name).trim() || fallback;

    const px = (x) => 4 + x * (width - 8);
    const py = (y) => 8 + Math.min(Math.max(y, 0), 1) * (h - 16);

    function draw() {
      const accentColor = accent || cssVar("--accent", "#2F43E8");
      const mutedColor = muted || cssVar("--muted", "#5B6475");

      ctx.clearRect(0, 0, width, h);

      for (const p of points) {
        const X = px(p.x);
        const Y = py(p.y);
        const near = pointer && Math.hypot(X - pointer.x, Y - pointer.y) < hoverRadius;
        ctx.globalAlpha = near ? 1 : 0.5;
        ctx.fillStyle = near ? accentColor : mutedColor;
        ctx.beginPath();
        ctx.arc(X, Y, near ? 4 : 2.5, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      ctx.strokeStyle = accentColor;
      ctx.lineWidth = 2;
      ctx.lineCap = "round";
      ctx.beginPath();
      const steps = 160;
      const end = Math.floor(steps * progress);
      for (let s = 0; s <= end; s++) {
        const t = s / steps;
        if (s === 0) ctx.moveTo(px(t), py(fit(t)));
        else ctx.lineTo(px(t), py(fit(t)));
      }
      ctx.stroke();
    }

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      h = rect.height;
      canvas.width = width * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      draw();
    }

    function tick(ts) {
      if (startTime === null) startTime = ts;
      const t = Math.min((ts - startTime - 300) / 1600, 1);
      progress = t < 0 ? 0 : 1 - Math.pow(1 - t, 3); // ease-out
      draw();
      if (t < 1) frame = requestAnimationFrame(tick);
    }

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      pointer = { x: e.clientX - rect.left, y: e.clientY - rect.top };
      draw();
    };
    const onLeave = () => {
      pointer = null;
      draw();
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);

    const colorScheme = window.matchMedia("(prefers-color-scheme: dark)");
    colorScheme.addEventListener("change", draw);

    canvas.addEventListener("pointermove", onMove);
    canvas.addEventListener("pointerleave", onLeave);

    resize();
    if (!reduceMotion) frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      colorScheme.removeEventListener("change", draw);
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerleave", onLeave);
    };
  }, [count, seed, noise, hoverRadius, accent, muted]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      aria-hidden="true"
      style={{
        display: "block",
        width: "100%",
        height,
        touchAction: "pan-y",
        ...style,
      }}
    />
  );
}