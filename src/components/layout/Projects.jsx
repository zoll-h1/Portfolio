import GlassCard from "../ui/GlassCard";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
const demoProjects = [
  { title : "Project one", desc:"Short Description", link:"#"},
  { title : "Project two", desc:"Short Description", link:"#"},
  { title : "Project three", desc:"Short Desciption", link:"#"},
];
export default function Projects() {
  return (
    <section id="projects" className="py-20 border-t border-white/10">
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
