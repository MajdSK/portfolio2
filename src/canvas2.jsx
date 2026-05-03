import { useState, useRef, useEffect } from 'react'
import './App.css'

const NavCanvas = () => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const resize = () => {
      canvas.width = 50;
      canvas.height = 500;
      draw();
    };
    const draw = () => {
      const cx = canvas.width / 2;
      const cy = 0;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      ctx.fillStyle = '#840032';
      const segments = 9;
      for (let i = 0; i <= segments; i++) {
        const x = cx + 2.5;
        const y = cy + (i % 2 == 0 ? 90 * i : 90 * i + 10);
        if (i % 2 == 0) {
          ctx.arc(x + 2.5, y, 5, 0, 2 * Math.PI);
          ctx.fillStyle = "#F4ECD6";
          ctx.fill();
        }
        else {
          ctx.lineTo(x, y, x + y, x);
        }
      };
      ctx.closePath();
    };
    window.addEventListener('resize', resize);
    resize();
  }, []);
  return (
    <canvas
      ref={canvasRef}
      style={{
        display: 'inline',
        width: '50px',
        height: '500px',
        background: 'transparent'
      }}
    />
  );
}
export default NavCanvas;