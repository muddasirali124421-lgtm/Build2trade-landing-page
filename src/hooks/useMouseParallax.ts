import { useState, useEffect, useCallback, useRef } from 'react';

interface ParallaxOffset {
  x: number;
  y: number;
}

export function useMouseParallax(intensity: number = 15): ParallaxOffset {
  const [offset, setOffset] = useState<ParallaxOffset>({ x: 0, y: 0 });
  const frameRef = useRef<number | null>(null);
  const targetRef = useRef<ParallaxOffset>({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    // Skip on mobile devices (touch devices)
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;

    // Calculate offset from center (-1 to 1)
    const xOffset = (clientX / innerWidth - 0.5) * 2;
    const yOffset = (clientY / innerHeight - 0.5) * 2;

    targetRef.current = {
      x: xOffset * intensity,
      y: yOffset * intensity,
    };
  }, [intensity]);

  useEffect(() => {
    // Skip on mobile devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const animate = () => {
      setOffset(prev => ({
        x: prev.x + (targetRef.current.x - prev.x) * 0.1,
        y: prev.y + (targetRef.current.y - prev.y) * 0.1,
      }));
      frameRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    frameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [handleMouseMove]);

  return offset;
}

interface ParallaxOptions {
  maxOffset?: number;
  smoothness?: number;
}

// Hook for individual image/component parallax with custom options
export function useElementParallax(options: number | ParallaxOptions = 20): {
  ref: React.RefObject<HTMLDivElement | null>;
  style: React.CSSProperties;
} {
  // Support both number (intensity) and options object
  const maxOffset = typeof options === 'number' ? options : (options.maxOffset ?? 20);
  const smoothness = typeof options === 'number' ? 0.08 : (options.smoothness ?? 0.08);

  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('translate3d(0px, 0px, 0px)');
  const frameRef = useRef<number | null>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Skip on mobile
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Calculate distance from element center
      const distX = (e.clientX - centerX) / (rect.width / 2);
      const distY = (e.clientY - centerY) / (rect.height / 2);

      // Clamp values
      mouseRef.current = {
        x: Math.max(-1, Math.min(1, distX)) * maxOffset,
        y: Math.max(-1, Math.min(1, distY)) * maxOffset,
      };
    };

    const animate = () => {
      setTransform(prev => {
        const match = prev.match(/translate3d\(([^,]+),\s*([^,]+),/);
        const currentX = match ? parseFloat(match[1]) : 0;
        const currentY = match ? parseFloat(match[2]) : 0;

        const newX = currentX + (mouseRef.current.x - currentX) * smoothness;
        const newY = currentY + (mouseRef.current.y - currentY) * smoothness;

        // Stop animation when close to target
        if (Math.abs(mouseRef.current.x - newX) < 0.1 && Math.abs(mouseRef.current.y - newY) < 0.1) {
          return `translate3d(${mouseRef.current.x.toFixed(2)}px, ${mouseRef.current.y.toFixed(2)}px, 0px)`;
        }

        return `translate3d(${newX.toFixed(2)}px, ${newY.toFixed(2)}px, 0px)`;
      });

      frameRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    frameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [maxOffset, smoothness]);

  return {
    ref,
    style: {
      transform,
      willChange: 'transform',
      transition: 'none',
    },
  };
}
