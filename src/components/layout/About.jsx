import GlassCard from "../ui/GlassCard";
export default function About() {
  return (
    <section id="about" className="py-20 border-t border-white/10">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-3xl font-bold tracking-tight">About</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <GlassCard className="p-6">
            <h3 className="text-xl font-semibold">Who I am</h3>
            <p className="mt-3 text-white/70 leading-relaxed">
              Short Bio
            </p>
            </GlassCard>

            <GlassCard className="p-6">
            <h3 className="text-xl font-semibold">Skills</h3>
            <ul className="mt-3 space-y-2 text-white/70">
              <li> Python , Java (OOP) </li>
              <li> Git, Linux (Fedora-Hyprland)</li>
              <li> HTML/CSS, React basics</li>
            </ul>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
