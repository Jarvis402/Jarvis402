'use client';

import { useEffect, useRef } from 'react';

export default function MatrixRain() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let mousePos = { x: 0.5, y: 0.5 };

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Track mouse position
    const handleMouseMove = (e) => {
      mousePos = {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      };
    };
    window.addEventListener('mousemove', handleMouseMove);

    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const charArray = chars.split('');

    const fontSize = 14;
    let columns = Math.floor(canvas.width / fontSize);

    // Array of drops - one per column
    const drops = [];
    const dropSpeeds = [];

    const initDrops = () => {
      columns = Math.floor(canvas.width / fontSize);
      for (let i = 0; i < columns; i++) {
        drops[i] = Math.random() * -100; // Start at random positions
        dropSpeeds[i] = 0.5 + Math.random() * 0.5; // Random speed variation
      }
    };
    initDrops();

    // Draw function
    const draw = () => {
      // Black background with transparency for trail effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;

      // Calculate perspective shift based on mouse position
      const perspectiveX = (mousePos.x - 0.5) * 30; // Horizontal shift
      const perspectiveY = (mousePos.y - 0.5) * 15; // Vertical influence

      for (let i = 0; i < drops.length; i++) {
        // Random character
        const char = charArray[Math.floor(Math.random() * charArray.length)];

        // Calculate position with perspective
        const baseX = i * fontSize;
        const y = drops[i] * fontSize;

        // Apply perspective shift based on column position and mouse
        const columnRatio = i / columns;
        const distanceFromCenter = Math.abs(columnRatio - 0.5);
        const perspectiveShift = perspectiveX * (columnRatio - 0.5) * 2.5;
        const x = baseX + perspectiveShift;

        // Color gradient - brighter at the front and influenced by mouse proximity
        const opacity = Math.min(1, (canvas.height - y) / canvas.height);
        const mouseDistanceX = Math.abs(mousePos.x - columnRatio);
        const brightnessBoost = Math.max(0, 1 - mouseDistanceX * 2) * 0.4;

        // Use logo-inspired blue gradient color with mouse-based brightness
        const finalOpacity = (opacity * 0.7) + brightnessBoost;
        // Mix between bright cyan and royal blue based on position
        const colorMix = y / canvas.height;
        const r = Math.floor(0 * (1 - colorMix) + 0 * colorMix);
        const g = Math.floor(180 * (1 - colorMix) + 102 * colorMix);
        const b = Math.floor(216 * (1 - colorMix) + 204 * colorMix);
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${Math.min(1, finalOpacity)})`;

        // Draw character with slight size variation based on perspective
        const sizeMultiplier = 1 + (distanceFromCenter * 0.3 * Math.abs(perspectiveX) / 15);
        ctx.save();
        ctx.translate(x, y);
        ctx.scale(sizeMultiplier, 1);
        ctx.fillText(char, 0, 0);
        ctx.restore();

        // Adjust speed based on mouse Y position
        const speedMultiplier = 1 + (perspectiveY / 10);
        const currentSpeed = dropSpeeds[i] * speedMultiplier;

        // Reset drop to top after it passes the screen
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        // Move drop down
        drops[i] += currentSpeed;
      }
    };

    // Animation loop
    const interval = setInterval(draw, 50);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', setCanvasSize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none opacity-40"
      style={{ zIndex: 1 }}
    />
  );
}
