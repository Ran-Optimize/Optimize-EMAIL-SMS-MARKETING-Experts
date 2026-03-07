import React, { useEffect, useRef } from 'react';

interface Point {
  x: number;
  y: number;
  originX: number;
  originY: number;
  vx: number;
  vy: number;
}

const InteractiveGrid: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const pointsRef = useRef<Point[]>([]);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      if (canvas.parentElement) {
        canvas.width = canvas.parentElement.clientWidth;
        canvas.height = canvas.parentElement.clientHeight;
      } else {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
      initPoints();
    };

    const initPoints = () => {
      pointsRef.current = [];
      const spacing = 40; // Grid spacing
      const rows = Math.ceil(canvas.height / spacing);
      const cols = Math.ceil(canvas.width / spacing);

      for (let i = 0; i <= rows; i++) {
        for (let j = 0; j <= cols; j++) {
          const x = j * spacing;
          const y = i * spacing;
          pointsRef.current.push({
            x,
            y,
            originX: x,
            originY: y,
            vx: 0,
            vy: 0,
          });
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Physics settings
      const mouseRadius = 200; // Increased radius
      const mouseForce = 3; // Increased force
      const springFactor = 0.1;
      const friction = 0.90;

      ctx.strokeStyle = 'rgba(59, 130, 246, 0.2)'; // Slightly more visible
      ctx.lineWidth = 1;

      // Update points
      pointsRef.current.forEach(point => {
        const dx = point.x - mouseRef.current.x;
        const dy = point.y - mouseRef.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Mouse repulsion
        if (distance < mouseRadius) {
          const angle = Math.atan2(dy, dx);
          const force = (mouseRadius - distance) / mouseRadius;
          const push = force * mouseForce;
          
          point.vx += Math.cos(angle) * push;
          point.vy += Math.sin(angle) * push;
        }

        // Spring back to origin
        const ox = point.originX - point.x;
        const oy = point.originY - point.y;
        
        point.vx += ox * springFactor;
        point.vy += oy * springFactor;

        // Apply friction
        point.vx *= friction;
        point.vy *= friction;

        // Move point
        point.x += point.vx;
        point.y += point.vy;
      });

      // Draw lines connecting points
      const spacing = 40;
      const cols = Math.ceil(canvas.width / spacing) + 1;

      ctx.beginPath();
      for (let i = 0; i < pointsRef.current.length; i++) {
        const point = pointsRef.current[i];
        
        // Connect right
        if ((i + 1) % cols !== 0 && i + 1 < pointsRef.current.length) {
            const nextPoint = pointsRef.current[i + 1];
            ctx.moveTo(point.x, point.y);
            ctx.lineTo(nextPoint.x, nextPoint.y);
        }

        // Connect down
        if (i + cols < pointsRef.current.length) {
            const bottomPoint = pointsRef.current[i + cols];
            ctx.moveTo(point.x, point.y);
            ctx.lineTo(bottomPoint.x, bottomPoint.y);
        }
      }
      ctx.stroke();

      frameRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    
    // Initial setup
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full pointer-events-none mix-blend-screen opacity-40"
    />
  );
};

export default InteractiveGrid;
