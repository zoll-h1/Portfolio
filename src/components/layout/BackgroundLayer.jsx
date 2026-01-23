export default function BackgroundLayer() {
    return (
        <div>
            <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"/>
            {/* Blob 1 */}
            <div className="absolute -top-32 -left-32 h-[520px] w-[520px] rounded-full bg-blue-600/25 blur-3xl"/>
            {/* Blob 2 */}
            <div className="absolute top-24 -right-40 h-[620px] w-[620px] rounded-full bg-fuchsia-500/20 blur-3xl" />
            {/* Blob 3 */}
            <div className="absolute -bottom-48 left-1/3 h-[640px] w-[640px] rounded-full bg-cyan-400/15 blur-3xl"/>
            {/* Soft vignette */}
            <dev className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black"/>
        </div>
    );
}