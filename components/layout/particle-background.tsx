"use client";

import { useTheme } from "next-themes";
import { useEffect, useRef } from "react";

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const setSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setSize();
    window.addEventListener("resize", setSize);

    // Particle properties
    const particles: Array<{
      x: number;
      y: number;
      speedX: number;
      speedY: number;
    }> = [];

    const particleCount = 100;

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 - 0.25,
      });
    }

    // Animation
    const animate = () => {
      const backgroundColor =
        resolvedTheme === "dark"
          ? "rgba(2, 6, 23, 0.1)"
          : "rgba(229, 231, 235, 0.1)";

      const particleColor =
        resolvedTheme === "dark"
          ? "rgba(56, 189, 248, 0.5)"
          : "rgba(59, 130, 246, 0.5)";

      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, 1, 0, Math.PI * 2);
        ctx.fillStyle = particleColor;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", setSize);
    };
  }, [resolvedTheme]);

  const backgroundGradient =
    resolvedTheme === "dark"
      ? "linear-gradient(to bottom, #020617, #172554)"
      : "linear-gradient(to bottom, #e5e7eb, #3b82f6)";

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10"
      style={{ background: backgroundGradient }}
    />
  );
}
