import { motion } from "framer-motion";
import { h1 } from "framer-motion/client";

const list = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

export default function StaggeredList() {
  const items = ["one", "two", "three", "four", "five"];

  return (
    <motion.ul
      variants={list}
      initial="hidden"
      animate="visible"
      className="space-y-2 px-10 py-20 bg-amber-400"
    >
      {items.map((e) => (
        <motion.li key={e} variants={item}>
          {e}
        </motion.li>
      ))}
    </motion.ul>
  );
}
