export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto max-w-5xl px-6 text-sm text-white/60">
        © {new Date().getFullYear()} Nurbek. All rights reserved.
      </div>
    </footer>
  );
}
