import { useState, useRef, useEffect } from 'react'
import './App.css'

const WavyCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      draw();
    };

    const draw = () => {
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      const baseSize = Math.min(canvas.width, canvas.height) * 0.3;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.beginPath();
      ctx.fillStyle = '#840032';
      ctx.filter = 'blur(80px)';

      const segments = 360;
      const waveCount = 5;
      const waveAmplitude = 60;

      for (let i = 0; i <= segments; i++) {
        const angle = (i / segments) * 2 * Math.PI;

        // Rhythmic sine modulation
        const radius = baseSize + Math.sin(angle * waveCount) * waveAmplitude;

        const x = cx + Math.cos(angle) * radius;
        const y = cy + Math.sin(angle) * radius;

        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }

      ctx.closePath();
      ctx.fill();
    };

    window.addEventListener('resize', resize);
    resize();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      className='animate-movement'
      ref={canvasRef}
      style={{
        display: 'block',
        width: '2000px',
        height: '1000px',
        background: 'transparent'
      }}
    />
  );
};

export default WavyCanvas;

