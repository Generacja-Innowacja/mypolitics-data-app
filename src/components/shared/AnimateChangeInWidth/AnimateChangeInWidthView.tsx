import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface Props {
  children: React.ReactNode;
  duration: number;
  className?: string;
}

const AnimateChangeInWidth: React.FC<Props> = ({
  children,
  duration,
  className,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [width, setWidth] = useState<number | "auto">("auto");

  useEffect(() => {
    if (containerRef.current) {
      const resizeObserver = new ResizeObserver((entries) => {
        const observedWidth = entries[0].contentRect.width;
        setWidth(observedWidth);
      });

      resizeObserver.observe(containerRef.current);

      return () => {
        resizeObserver.disconnect();
      };
    }
  }, []);

  return (
    <motion.div
      style={{ width }}
      animate={{ width }}
      transition={{ duration }}
      className={className}
    >
      <div ref={containerRef}>{children}</div>
    </motion.div>
  );
};

export default AnimateChangeInWidth;
