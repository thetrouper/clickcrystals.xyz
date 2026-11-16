type ContainerProps = {
  children: React.ReactNode;
  tapScale?: number | string;
  className?: string;
  hoverScale?: number | string;
};

import { motion } from 'framer-motion';

export const Container = ({
  children,
  tapScale = 0.95,
  className = '',
  hoverScale = 1,
  ...props
}: ContainerProps) => {
  return (
    <motion.div
      className={`transition scale-1 inline cursor-pointer ${className}`}
      whileTap={{ scale: tapScale, opacity: 0.85 }}
      whileHover={{ scale: hoverScale, opacity: 0.92 }}
      transition={{ duration: 0.08, ease: 'easeOut' }}
      {...props}
    >
      {children}
    </motion.div>
  );
};
