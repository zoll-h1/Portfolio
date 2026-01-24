import { motion } from "framer-motion";
export default function Hero() {
  return (
    <section className="min-h-screen pt-24 flex items-center justify-center relative overflow-hidden">
      {/* Background effects will be added later (blobs/noise) */}

      <motion.div
         initial={{ opacity: 0, y: 40}}
         animate={{ opacity: 1, y: 0}}
         transition={{ duration: 0.8, ease: "easeOut"}}
         className="relative z-10 text-center px-6 max-w-3xl"
         >
        <p className="text-lg sm:text-xl text-gray-400 mb-4">
          Hi, I'm Nurbek
        </p>

        <h1 className="text-5xl sm:text-7xl font-bold text-white mb-6 tracking-tight">
          Nurbek
        </h1>

        <h2 className="text-2xl sm:text-3xl text-gray-300 mb-8">
          Computer Science Student • Backend & Systems
        </h2>

        <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto mb-12">
          Here is my small portfolio 
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
        </div>
      </motion.div>
    </section>
  );
}
