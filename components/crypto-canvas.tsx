"use client"
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  color: string;
}

const CryptoCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const mousePosition = useRef({ x: 0, y: 0 });
  const animationFrameId = useRef<number>(0);

  const colors = [
    'rgba(255, 0, 128, 0.6)', // Fuchsia
    'rgba(138, 43, 226, 0.6)', // Purple
    'rgba(0, 255, 255, 0.6)',  // Cyan
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const handleResize = () => {
      if(typeof window !== 'undefined'){
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        initParticles();
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current.x = e.clientX;
      mousePosition.current.y = e.clientY;
    };

    const initParticles = () => {
      particles.current = [];
      const particleCount = Math.min(Math.floor(window.innerWidth * 0.05), 100);
      
      for (let i = 0; i < particleCount; i++) {
        particles.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.5 + 0.2,
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.current.forEach((particle, index) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color.replace('0.6', `${particle.opacity}`);
        ctx.fill();
        
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Check if we need to bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX *= -1;
        }
        
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY *= -1;
        }
        
        // Draw connections between nearby particles
        particles.current.forEach((particle2, index2) => {
          if (index === index2) return;
          
          const dx = particle.x - particle2.x;
          const dy = particle.y - particle2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.15 * (1 - distance / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particle2.x, particle2.y);
            ctx.stroke();
          }
        });
        
        // Interaction with mouse
        const dx = particle.x - mousePosition.current.x;
        const dy = particle.y - mousePosition.current.y;
        const mouseDistance = Math.sqrt(dx * dx + dy * dy);
        
        if (mouseDistance < 150) {
          const angle = Math.atan2(dy, dx);
          const force = (150 - mouseDistance) * 0.01;
          particle.speedX += Math.cos(angle) * force;
          particle.speedY += Math.sin(angle) * force;
          
          // Limit speed
          const speed = Math.sqrt(particle.speedX * particle.speedX + particle.speedY * particle.speedY);
          if (speed > 2) {
            particle.speedX = (particle.speedX / speed) * 2;
            particle.speedY = (particle.speedY / speed) * 2;
          }
        }
        
        // Add some random movement
        if (Math.random() < 0.05) {
          particle.speedX += (Math.random() - 0.5) * 0.2;
          particle.speedY += (Math.random() - 0.5) * 0.2;
        }
      });
      
      animationFrameId.current = requestAnimationFrame(drawParticles);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    
    handleResize();
    drawParticles();
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId.current);
    };
  }, []);

  return (
    <motion.canvas
      ref={canvasRef}
      className="absolute inset-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    />
  );
};

export default CryptoCanvas;