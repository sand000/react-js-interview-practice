// components/GestureBox.js
import { motion } from "framer-motion";

export default function GestureBox() {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      drag
      dragConstraints={{ left: -100, right: 100, top: -50, bottom: 50 }}
      className="w-32 h-32 bg-pink-400 rounded-lg flex items-center justify-center"
    >
      Drag me
    </motion.div>
  );
}
