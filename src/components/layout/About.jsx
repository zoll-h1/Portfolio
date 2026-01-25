import GlassCard from "../ui/GlassCard";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20 border-t border-white/10">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-3xl font-bold tracking-tight">About</h2>
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once : true, amounr : 0.2}}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.15
              },
            },
          }}    
        className="mt-10 grid gap-6 sm:grid-cols-2"
        >
          <motion.div
           variants={{
            hidden: { opacity: 0, y: 30},
            show: { opacity: 1, y : 0},
           }}
          >
          <GlassCard className="p-6">
            <h3 className="text-xl font-semibold">Who I am</h3>
            <p className="mt-3 text-white/70 leading-relaxed">
              I'm beginner Web-Developer | 18 years old , For a Moment don't have really impressive projects ,
              but it's only temporary
            </p>
            </GlassCard>
            </motion.div>
            <motion.div
              variants={{
                hidden: {opacity: 0, y:30},
                show: {opacity:1, y:0}
              }}
              >
            <GlassCard className="p-6">
            <h3 className="text-xl font-semibold">Skills</h3>
            <ul className="mt-3 space-y-2 text-white/70">
              <li> Python , Java (OOP) </li>
              <li> Git, Linux (Fedora-Hyprland)</li>
              <li> HTML/CSS, React basics</li>
            </ul>
          </GlassCard>
        </motion.div>
      </motion.div>
      </div>
    </section>
  );
}
