import { socials } from "../../data/socials";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto max-w-5xl px-6 text-sm text-white/60">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} Nurbek. All rights reserved.</div>
          <div className="flex flex-wrap gap-4">
            {socials.map((social) => {
              const isExternal = social.href.startsWith("http");
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  {social.label}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
