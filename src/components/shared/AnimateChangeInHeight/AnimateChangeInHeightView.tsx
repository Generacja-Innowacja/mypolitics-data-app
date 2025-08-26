import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface Props {
  children: React.ReactNode;
  duration: number;
  className?: string;
}

const AnimateChangeInHeight: React.FC<Props> = ({
  children,
  duration,
  className,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [height, setHeight] = useState<number | "auto">("auto");

  useEffect(() => {
    if (containerRef.current) {
      const resizeObserver = new ResizeObserver((entries) => {
        const observedHeight = entries[0].contentRect.height;
        setHeight(observedHeight);
      });

      resizeObserver.observe(containerRef.current);

      return () => {
        resizeObserver.disconnect();
      };
    }
  }, []);

  return (
    <motion.div
      style={{ height }}
      animate={{ height }}
      transition={{ duration }}
      className={className}
    >
      <div ref={containerRef}>{children}</div>
    </motion.div>
  );
};

export default AnimateChangeInHeight;
