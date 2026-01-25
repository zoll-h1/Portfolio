// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const container = {
  hidden : { opacity : 0},
  show : {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  },
};
const item = {
  hidden: { opacity: 0, y: 30},
  show: { opacity : 1, y: 0},
};
export default function Hero() {
  return (
    <section className="min-h-screen pt-24 flex items-center justify-center relative overflow-hidden">
      {/* Background effects will be added later (blobs/noise) */}

      <motion.div
         variants={container}
         initial="hidden"
         animate="show"
         className="relative z-10 text-center px-6 max-w-3xl"
         >
        <motion.p variants={item} className="text-lg sm:text-xl text-gray-400 mb-4">
          Hi, I'm Nurbek 
        </motion.p>

        <motion.h1 variants={item} className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
          Nurbek
        </motion.h1>

        <motion.h2 variants={item} className="text-2xl sm:text-3xl text-gray-300 mb-8">
          Computer Science Student • Backend & Systems
        </motion.h2>

        <motion.p variants={item} className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto mb-12">
          Here is my small portfolio 
        </motion.p>

        <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-8 py-3 border border-white/20 text-white rounded-lg hover:bg-white/10 transition-colors"
          >
            Contact Me
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
