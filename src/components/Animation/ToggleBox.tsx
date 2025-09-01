// components/ToggleBox.js
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ToggleBox() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="space-y-4">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Toggle Box
      </button>

      <AnimatePresence>
        {isVisible && (
          <motion.div
            key="box"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 1 }}
            className="bg-green-400 p-6 rounded"
          >
            I’m an animated box!
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
