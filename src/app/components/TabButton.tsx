import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function TabButton(prompt: {
  active: boolean;
  selectTab: () => {};
  children: ReactNode;
}) {
  const buttonClasses = prompt.active ? "text-white " : "text-[#ADB7BE] ";
  const btnVariants = {
    default: { width: 0 },
    active: { width: "calc(100% - 0.75rem)" },
  };
  return (
    <button onClick={prompt.selectTab}>
      <p
        className={`flex flex-row mt-8 mr-4 hover:text-white ${buttonClasses}`}
      >
        {prompt.children}
      </p>
      <motion.div
        animate={prompt.active ? "active" : "default"}
        variants={btnVariants}
        className="h-1 bg-color-main mr-3 mt-2"
      ></motion.div>
    </button>
  );
}
