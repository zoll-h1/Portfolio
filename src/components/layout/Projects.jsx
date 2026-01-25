import GlassCard from "../ui/GlassCard";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
const demoProjects = [
  { title : "Java Desktop calculator (Soon)",
    desc:"A desktop calculator built with Java to practice OOP concepts, UI logic, and event handling",
    link:"#",
    tech:"Java + OOP * Desktop UI",   
  },
  { title : "Python telegram Bot",
    desc:"A simple telegram bot ,  featuring basic transactions and user interaction",
    link:"https://github.com/zoll-h1/telegram-bot.git",
    tech:"Python + SqlAlchemy *  FastApi",
  },
  { title :"Personal Portfolio Website",
    desc:"My personal porfolio built with modern frontend tools and smooth animation",
    link:"https://github.com/zoll-h1/Portfolio.git",
    tech:"React * Tailwind * Framer Motion",   
  },
];
export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-20 border-t border-white/10">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-3xl font-bold tracking-tight">Projects</h2>

        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once : true }}
          variants={{
            hidden: {},
            show: {
              transition : {
                staggerChildren: 0.15,
              },
            },
          }}
          className="mt-10 grid gap-6 sm:grid-cols-2"
          >
          {demoProjects.map((p) => (
            <motion.div
              key={p.title}
              variants={{
                hidden: { opacity : 0 , y : 30},
                show: { opacity: 1, y:0},
              }}
            >
            <GlassCard className="p-6">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="mt-3 text-white/70">{p.desc}</p>
              <motion.a
                href={p.link}
                target="_blank"
                rel="noopener noreferror"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block mt-4 text-sm text-blue-400 hover:text-blue-300"
              >
                <p className="mt-2 text-sm text-white/50">{p.tech}</p>
                View on GitHub 
              </motion.a>
            </GlassCard>
           </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
