export default function GlassCard({ children, className = ""}) {
    return (
        <div
         className={[
            "rounded-2xl border border-white/10 bg-white/[0.06] backdrop-blur-xl",
            "shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_20px_60px_rgba(0,0,0,0.55)]",
            "hover:border-white/20 transition-colors",
            className,
         ].join(" ")}
        >
            {children}
        </div>
    );
}