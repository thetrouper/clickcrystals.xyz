type ContainerProps = {
  children: React.ReactNode;
  tapScale?: number | string;
  className?: string;
  hoverScale?: number | string;
}

import { motion } from "framer-motion";

export const Container = ({children, tapScale = 0.95, className = "", hoverScale = 1, ...props}: ContainerProps) => {
  return (
    <motion.div
      className={`transition scale-1 inline cursor-pointer ${className}`}
      whileTap={{ scale: tapScale }}
      whileHover={{ scale: hoverScale }}
      transition={{ duration: 0.1 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};
