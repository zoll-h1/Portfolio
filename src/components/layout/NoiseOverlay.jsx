export default function NoiseOverlay() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 opacity-[0.10] mix-blend-overlay">
      {/* Pure CSS noise using repeating gradients */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 1px, transparent 1px, transparent 2px),
            repeating-linear-gradient(90deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 3px)
          `,
        }}
      />
    </div>
  );
}
