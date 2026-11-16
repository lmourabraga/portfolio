import React, { useEffect, useRef } from 'react';

export const CosmicBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const particleCount = 100;
    const connectionDistance = 170;
    const mouseConnectionDistance = 190;
    const mouse = { x: -1000, y: -1000, radius: 240, active: false };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      baseAlpha: number;
      alphaSpeed: number;
      alphaOffset: number;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.size = Math.random() * 2 + 0.8;
        this.baseAlpha = Math.random() * 0.6 + 0.3;
        this.alphaSpeed = Math.random() * 0.025 + 0.008;
        this.alphaOffset = Math.random() * Math.PI * 2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas!.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas!.height) this.vy *= -1;

        // Subtle mouse repulsion / gravity
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < mouse.radius && mouse.active) {
          const force = (mouse.radius - distance) / mouse.radius;
          const angle = Math.atan2(dy, dx);
          this.x -= Math.cos(angle) * force * 1.5;
          this.y -= Math.sin(angle) * force * 1.5;
        }
      }

      draw(time: number) {
        if (!ctx) return;
        const currentAlpha = this.baseAlpha + Math.sin(time * this.alphaSpeed + this.alphaOffset) * 0.25;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(190, 220, 250, ${Math.max(0.2, Math.min(1, currentAlpha))})`;
        ctx.fill();
      }
    }

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    let startTime = performance.now();

    const animate = (timestamp: number) => {
      const time = (timestamp - startTime) * 0.001;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw particle-to-particle mesh connections
      particles.forEach((p, i) => {
        p.update();
        p.draw(time);

        // Connect to mouse if close
        if (mouse.active) {
          const dxMouse = mouse.x - p.x;
          const dyMouse = mouse.y - p.y;
          const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
          if (distMouse < mouseConnectionDistance) {
            const mouseOpacity = (1 - (distMouse / mouseConnectionDistance)) * 0.45;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(34, 197, 94, ${mouseOpacity})`; // emerald accent touch on mouse connection
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }

        // Connect to other particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            const opacity = (1 - (distance / connectionDistance)) * 0.3;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(160, 185, 215, ${opacity})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const handleResize = () => {
      init();
    };

    init();
    animationFrameId = requestAnimationFrame(animate);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 bg-[#020617] overflow-hidden pointer-events-none">
      {/* Deep Cosmic Nebula Gradient Orbs */}
      <div className="absolute top-[-15%] left-[-10%] w-[65%] h-[65%] bg-emerald-500/12 blur-[140px] rounded-full animate-pulse" style={{ animationDuration: '14s' }} />
      <div className="absolute bottom-[5%] right-[-10%] w-[60%] h-[60%] bg-brand-500/12 blur-[130px] rounded-full animate-pulse" style={{ animationDuration: '22s' }} />
      <div className="absolute top-[30%] right-[15%] w-[45%] h-[45%] bg-blue-600/10 blur-[150px] rounded-full animate-pulse" style={{ animationDuration: '19s' }} />
      
      {/* Noise & Grain Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.045] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* Vignette Gradient Overlay to soften edges & unify content */}
      <div className="absolute inset-0 bg-radial from-transparent via-[#020617]/40 to-[#020617]/85 pointer-events-none" />

      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-95"
      />
    </div>
  );
};
