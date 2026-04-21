import { motion } from 'framer-motion';

interface FloatingDotsProps {
  count?: number;
  variant?: 'blue' | 'mixed';
}

export const FloatingDots: React.FC<FloatingDotsProps> = ({ 
  count = 12,
  variant = 'blue' 
}) => {
  // Color configuration based on variant
  const getColors = () => {
    if (variant === 'blue') {
      return [
        'rgba(59, 130, 246, 0.5)',   // Blue
        'rgba(100, 149, 237, 0.4)',  // Light blue
        'rgba(255, 255, 255, 0.3)',  // White
      ];
    }
    // Mixed variant (for variety)
    return [
      'rgba(241, 179, 47, 0.7)',    // Yellow
      'rgba(59, 130, 246, 0.5)',    // Blue
      'rgba(255, 255, 255, 0.4)',   // White
    ];
  };

  const colors = getColors();

  return (
    <>
      {[...Array(count)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: `${10 + (i * 8) % 85}%`,
            top: `${15 + (i * 7) % 70}%`,
            width: `${6 + (i % 3) * 2}px`,
            height: `${6 + (i % 3) * 2}px`,
            backgroundColor: colors[i % colors.length],
          }}
          animate={{
            y: [-15 - (i % 3) * 10, 15 + (i % 3) * 10, -15 - (i % 3) * 10],
            opacity: [0.5, 0.9, 0.5],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 3 + (i % 4),
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        />
      ))}
    </>
  );
};

export default FloatingDots;
