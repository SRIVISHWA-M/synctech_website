import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, MessageSquare } from "lucide-react";

interface Bubble {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  text: string;
  color: string;
  textColor: string;
  isEmoji: boolean;
}

const NotFound: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const cardRect = useRef({ x: 0, y: 0, w: 0, h: 0 });
  const draggedBubbleId = useRef<number | null>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const prevMousePos = useRef({ x: 0, y: 0 });
  const dragOffset = useRef({ x: 0, y: 0 });

  // Update card rectangle position dynamically on resize and scroll
  const updateCardRect = () => {
    const card = cardRef.current;
    const canvas = canvasRef.current;
    if (card && canvas) {
      const rect = card.getBoundingClientRect();
      const canvasRect = canvas.getBoundingClientRect();
      cardRect.current = {
        x: rect.left - canvasRect.left,
        y: rect.top - canvasRect.top,
        w: rect.width,
        h: rect.height,
      };
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      setTimeout(updateCardRect, 50); // delay slightly to let layout adjust
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    // Initial bubbles list (responsive radii)
    const isMobile = window.innerWidth < 768;
    const bubbles: Bubble[] = [
      { id: 1, x: 120, y: 150, vx: (Math.random() - 0.5) * 4, vy: Math.random() * 2, r: isMobile ? 45 : 65, text: "404", color: "rgba(37, 99, 235, 0.20)", textColor: "#1e3a8a", isEmoji: false },
      { id: 2, x: window.innerWidth - 120, y: 180, vx: (Math.random() - 0.5) * 4, vy: Math.random() * 2, r: isMobile ? 40 : 55, text: "Oops!", color: "rgba(6, 182, 212, 0.20)", textColor: "#083344", isEmoji: false },
      { id: 3, x: 180, y: 300, vx: (Math.random() - 0.5) * 4, vy: Math.random() * 2, r: isMobile ? 35 : 50, text: "Lost", color: "rgba(59, 130, 246, 0.15)", textColor: "#1d4ed8", isEmoji: false },
      { id: 4, x: window.innerWidth - 200, y: 350, vx: (Math.random() - 0.5) * 4, vy: Math.random() * 2, r: isMobile ? 55 : 75, text: "SyncTech", color: "rgba(37, 99, 235, 0.22)", textColor: "#1e3a8a", isEmoji: false },
      { id: 5, x: 100, y: window.innerHeight - 200, vx: (Math.random() - 0.5) * 4, vy: Math.random() * 2, r: isMobile ? 30 : 40, text: "👾", color: "rgba(244, 63, 94, 0.18)", textColor: "", isEmoji: true },
      { id: 6, x: window.innerWidth / 2 - 150, y: window.innerHeight - 150, vx: (Math.random() - 0.5) * 4, vy: Math.random() * 2, r: isMobile ? 30 : 40, text: "🚀", color: "rgba(16, 185, 129, 0.18)", textColor: "", isEmoji: true },
      { id: 7, x: window.innerWidth / 2 + 150, y: window.innerHeight - 180, vx: (Math.random() - 0.5) * 4, vy: Math.random() * 2, r: isMobile ? 30 : 40, text: "🔍", color: "rgba(245, 158, 11, 0.18)", textColor: "", isEmoji: true },
      { id: 8, x: window.innerWidth - 150, y: window.innerHeight - 220, vx: (Math.random() - 0.5) * 4, vy: Math.random() * 2, r: isMobile ? 35 : 45, text: "Bug", color: "rgba(239, 68, 68, 0.18)", textColor: "#7f1d1d", isEmoji: false },
    ];

    const gravity = 0.15;
    const damping = 0.99;
    const restitution = 0.65; // Bounciness

    // Mouse handlers
    const getPos = (e: MouseEvent | TouchEvent) => {
      const rect = canvas.getBoundingClientRect();
      if ("touches" in e) {
        if (e.touches.length === 0) return { x: 0, y: 0 };
        return {
          x: e.touches[0].clientX - rect.left,
          y: e.touches[0].clientY - rect.top,
        };
      }
      return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleStart = (e: MouseEvent | TouchEvent) => {
      const pos = getPos(e);
      mousePos.current = pos;
      prevMousePos.current = pos;

      // Check if clicked/touched inside any bubble
      for (const b of bubbles) {
        const dx = pos.x - b.x;
        const dy = pos.y - b.y;
        if (Math.sqrt(dx * dx + dy * dy) < b.r) {
          draggedBubbleId.current = b.id;
          dragOffset.current = { x: dx, y: dy };
          b.vx = 0;
          b.vy = 0;
          break;
        }
      }
    };

    const handleMove = (e: MouseEvent | TouchEvent) => {
      const pos = getPos(e);
      prevMousePos.current = mousePos.current;
      mousePos.current = pos;

      if (draggedBubbleId.current !== null) {
        const b = bubbles.find((x) => x.id === draggedBubbleId.current);
        if (b) {
          b.x = pos.x - dragOffset.current.x;
          b.y = pos.y - dragOffset.current.y;
          
          // Calculate drag velocity based on drag displacement
          b.vx = (mousePos.current.x - prevMousePos.current.x) * 0.8;
          b.vy = (mousePos.current.y - prevMousePos.current.y) * 0.8;
        }
      }
    };

    const handleEnd = () => {
      draggedBubbleId.current = null;
    };

    // Event listeners
    canvas.addEventListener("mousedown", handleStart);
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseup", handleEnd);

    canvas.addEventListener("touchstart", handleStart);
    window.addEventListener("touchmove", handleMove);
    window.addEventListener("touchend", handleEnd);

    // Physics Update and Render Loop
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Bubble-to-bubble collision
      for (let i = 0; i < bubbles.length; i++) {
        for (let j = i + 1; j < bubbles.length; j++) {
          const b1 = bubbles[i];
          const b2 = bubbles[j];

          const dx = b2.x - b1.x;
          const dy = b2.y - b1.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const minDist = b1.r + b2.r;

          if (dist < minDist) {
            const overlap = minDist - dist;
            const nx = dx / (dist || 1);
            const ny = dy / (dist || 1);

            // Avoid resolving overlap if one is currently dragged
            if (b1.id !== draggedBubbleId.current && b2.id !== draggedBubbleId.current) {
              b1.x -= nx * overlap * 0.5;
              b1.y -= ny * overlap * 0.5;
            } else if (b1.id === draggedBubbleId.current) {
              b2.x += nx * overlap;
            } else {
              b1.x -= nx * overlap;
            }

            // Elastic velocity swap
            const rvx = b2.vx - b1.vx;
            const rvy = b2.vy - b1.vy;
            const velAlongNormal = rvx * nx + rvy * ny;

            if (velAlongNormal < 0) {
              const impulse = -(1 + restitution) * velAlongNormal / 2;
              
              if (b1.id !== draggedBubbleId.current) {
                b1.vx -= nx * impulse;
                b1.vy -= ny * impulse;
              }
              if (b2.id !== draggedBubbleId.current) {
                b2.vx += nx * impulse;
                b2.vy += ny * impulse;
              }
            }
          }
        }
      }

      // Update positions and handle environment collision
      bubbles.forEach((b) => {
        const isDragged = b.id === draggedBubbleId.current;

        if (!isDragged) {
          b.vy += gravity; // Gravity
          b.vx *= damping; // Friction
          b.vy *= damping;

          b.x += b.vx;
          b.y += b.vy;

          // Wall collisions
          if (b.x - b.r < 0) {
            b.x = b.r;
            b.vx = -b.vx * restitution;
          } else if (b.x + b.r > canvas.width) {
            b.x = canvas.width - b.r;
            b.vx = -b.vx * restitution;
          }

          // Ceiling and Floor collisions
          if (b.y - b.r < 0) {
            b.y = b.r;
            b.vy = -b.vy * restitution;
          } else if (b.y + b.r > canvas.height) {
            b.y = canvas.height - b.r;
            b.vy = -b.vy * restitution;
            b.vx *= 0.95; // Extra ground friction
          }

          // Collision with central glassmorphic card
          const card = cardRect.current;
          if (card.w > 0) {
            const closestX = Math.max(card.x, Math.min(b.x, card.x + card.w));
            const closestY = Math.max(card.y, Math.min(b.y, card.y + card.h));

            const dx = b.x - closestX;
            const dy = b.y - closestY;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < b.r) {
              let nx = dx / (distance || 1);
              let ny = dy / (distance || 1);

              if (distance === 0) {
                const dl = b.x - card.x;
                const dr = card.x + card.w - b.x;
                const dt = b.y - card.y;
                const db = card.y + card.h - b.y;
                const minDist = Math.min(dl, dr, dt, db);
                if (minDist === dl) { nx = -1; ny = 0; b.x = card.x - b.r; }
                else if (minDist === dr) { nx = 1; ny = 0; b.x = card.x + card.w + b.r; }
                else if (minDist === dt) { nx = 0; ny = -1; b.y = card.y - b.r; }
                else { nx = 0; ny = 1; b.y = card.y + card.h + b.r; }
              } else {
                b.x = closestX + nx * b.r;
                b.y = closestY + ny * b.r;
              }

              const dotProduct = b.vx * nx + b.vy * ny;
              b.vx = (b.vx - 2 * dotProduct * nx) * restitution;
              b.vy = (b.vy - 2 * dotProduct * ny) * restitution;
            }
          }
        }

        // DRAW BUBBLE (Radial Gradient for glossy 3D Glass Look)
        const radGrad = ctx.createRadialGradient(
          b.x - b.r * 0.3,
          b.y - b.r * 0.3,
          b.r * 0.1,
          b.x,
          b.y,
          b.r
        );
        radGrad.addColorStop(0, "rgba(255, 255, 255, 0.7)");
        radGrad.addColorStop(0.3, b.color);
        radGrad.addColorStop(0.95, b.color.replace("0.2", "0.02"));
        radGrad.addColorStop(1, "rgba(255, 255, 255, 0.05)");

        ctx.save();
        ctx.shadowBlur = isDragged ? 25 : 12;
        ctx.shadowColor = b.isEmoji ? "rgba(6, 182, 212, 0.12)" : "rgba(37, 99, 235, 0.15)";
        ctx.fillStyle = radGrad;

        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.fill();

        // 3D Glass Rim
        ctx.strokeStyle = isDragged ? "rgba(255, 255, 255, 0.8)" : "rgba(255, 255, 255, 0.5)";
        ctx.lineWidth = isDragged ? 2 : 1;
        ctx.stroke();
        ctx.restore();

        // Draw text inside
        ctx.fillStyle = b.isEmoji ? "#0f172a" : b.textColor;
        ctx.font = b.isEmoji
          ? `${b.r * 0.9}px sans-serif`
          : `bold ${Math.max(12, b.r * 0.28)}px 'Plus Jakarta Sans', sans-serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(b.text, b.x, b.y);
      });

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resizeCanvas);
      canvas.removeEventListener("mousedown", handleStart);
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseup", handleEnd);
      canvas.removeEventListener("touchstart", handleStart);
      window.removeEventListener("touchmove", handleMove);
      window.removeEventListener("touchend", handleEnd);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-[#F3F8FF] via-white to-[#EBF3FF] flex items-center justify-center font-sans select-none"
    >
      {/* Background Decorative Blobs */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[80%] max-w-[900px] h-[400px] bg-blue-100/50 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-100/40 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] left-10 w-96 h-96 bg-blue-50/60 blur-[120px] rounded-full pointer-events-none" />

      {/* Physics Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 block z-0" />

      {/* CENTRAL GLASSMORPHIC CARD */}
      <div
        ref={cardRef}
        className="relative max-w-[420px] w-[90%] bg-white/70 border border-white/40 shadow-[0_24px_60px_-15px_rgba(37,99,235,0.08)] backdrop-blur-xl rounded-[2.5rem] p-8 md:p-10 text-center z-10 animate-fade-in"
      >
        {/* Glowing Indicator Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wider mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Error 404
        </div>

        {/* Title */}
        <h1 className="text-7xl md:text-8xl font-black bg-gradient-to-r from-blue-700 via-cyan-500 to-blue-800 bg-clip-text text-transparent tracking-tighter leading-none mb-4">
          404
        </h1>

        {/* Subtitle */}
        <h2 className="text-slate-900 text-xl font-extrabold tracking-tight mb-3">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-8">
          The page you are looking for has been moved, deleted, or never existed. Fling the bubbles around while you find your way back!
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3">
          <Link
            to="/"
            className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-sm tracking-wide shadow-[0_8px_20px_-6px_rgba(37,99,235,0.4)] hover:scale-[1.01] hover:shadow-[0_12px_24px_-6px_rgba(37,99,235,0.5)] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" /> Go Back Home
          </Link>
          <Link
            to="/contact"
            className="w-full py-3.5 rounded-2xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 hover:text-slate-900 font-bold text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 text-blue-500" /> Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
