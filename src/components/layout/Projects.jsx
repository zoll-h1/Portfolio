import GlassCard from "../ui/GlassCard";
const demoProjects = [
  { title : "Project one", desc:"Short Description"},
  { title : "Project two", desc:"Short Description"},
  { title : "Project three", desc:"Short Desciption"},
];
export default function Projects() {
  return (
    <section id="projects" className="py-20 border-t border-white/10">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-3xl font-bold tracking-tight">Projects</h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {demoProjects.map((p) => (
            <GlassCard key={p.title} className="p-6">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="mt-3 text-white/70">{p.desc}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
