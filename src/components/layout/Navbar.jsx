import { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];


export default function Navbar() {
  // open = mobile menu open/close
  const [open, setOpen] = useState(false);

  // active = current section id ("about", "projects", "contact")
  const [active, setActive] = useState("");



  // Scroll spy: detect which section is currently on screen
  useEffect(() => {
  const ids = navLinks.map((l) => l.href.slice(1)); // ["about","projects","contact"]

  const onScroll = () => {
    // выбираем секцию, чей верх ближе всего к верхней “линии чтения”
    // line = точка на экране (чуть ниже navbar)
    const line = 140;

    let current = "";
    let best = Infinity;

    for (const id of ids) {
      const el = document.getElementById(id);
      if (!el) continue;

      const rect = el.getBoundingClientRect();
      const dist = Math.abs(rect.top - line);

      // учитываем только секции, которые уже дошли до верхней зоны экрана
      if (rect.top <= line + 80 && dist < best) {
        best = dist;
        current = id;
      }
    }

    if (current) setActive(current);
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  return () => window.removeEventListener("scroll", onScroll);
}, []);



  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/70 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo / Name */}
          <a href="#top" className="text-2xl font-bold text-white">
            Nurbek
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex gap-8">
            {navLinks.map((l) => {
              const id = l.href.slice(1); // "#about" -> "about"
              const isActive = active === id;

              return (
                <a
                  key={l.href}
                  href={l.href}
                  className={`transition-colors ${
                    isActive ? "text-white" : "text-gray-300 hover:text-white"
                  }`}
                >
                  {l.label}
                </a>
              );
            })}
          </div>

          {/* Mobile button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white hover:bg-white/10 transition-colors"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {/* Burger icon (3 lines -> X) */}
            <span className="relative block h-4 w-5">
              <span
                className={[
                  "absolute left-0 top-0 h-0.5 w-5 bg-white transition-transform duration-200",
                  open ? "translate-y-1.5 rotate-45" : "",
                ].join(" ")}
              />
              <span
                className={[
                  "absolute left-0 top-1.5 h-0.5 w-5 bg-white transition-opacity duration-200",
                  open ? "opacity-0" : "opacity-100",
                ].join(" ")}
              />
              <span
                className={[
                  "absolute left-0 top-3 h-0.5 w-5 bg-white transition-transform duration-200",
                  open ? "-translate-y-1.5 -rotate-45" : "",
                ].join(" ")}
              />
            </span>
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="md:hidden mt-4 rounded-2xl border border-white/10 bg-white/[0.06] backdrop-blur-xl overflow-hidden"
            >
              <div className="p-2">
                {navLinks.map((l) => {
                  const id = l.href.slice(1);
                  const isActive = active === id;

                  return (
                    <a
                      key={l.href}
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className={`block rounded-xl px-4 py-3 transition-colors ${
                        isActive
                          ? "bg-white/10 text-white"
                          : "text-gray-200 hover:bg-white/10"
                      }`}
                    >
                      {l.label}
                    </a>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}








// React hook: lets a component "remember" a value between renders
// useState returns: [currentValue, functionToUpdateIt]
// import { useState, useEffect } from "react";



// // Framer Motion:
// // - motion = special React components that can animate (motion.div, motion.a, etc.)
// // - AnimatePresence = enables exit animations when something is removed from the DOM
// // eslint-disable-next-line no-unused-vars
// import { motion, AnimatePresence } from "framer-motion";

// /*
//   const = "constant binding"
//   - It means: the VARIABLE NAME cannot be reassigned to a different value later.
//   - But if the value is an object/array, you can still change its inside (mutate) (not recommended usually).
  
//   Example:
//     const x = 5;      // OK
//     x = 6;            // ERROR (cannot reassign)
    
//     const arr = [1];
//     arr.push(2);      // OK (mutating array contents)
// */
// const navLinks = [
//   // Each link object has:
//   // label = text shown to user
//   // href  = anchor target (it scrolls to <section id="about"> etc.)
//   { label: "About", href: "#about" },
//   { label: "Projects", href: "#projects" },
//   { label: "Contact", href: "#contact" },
// ];

// // "export default" means: this file exports ONE main thing.
// // You can import it without curly braces: import Navbar from "./Navbar";
// export default function Navbar() {
//   /*
//     useState(false)
//     - We create a piece of state called "open"
//     - open = is the mobile menu opened? (true/false)
//     - setOpen = function to update open
//     Initially: open = false
//   */
//   const [open, setOpen] = useState(false);
//   const [active, setActive] = useState("");

//   useEffect(() => {
//   const sections = navLinks.map((l) =>
//     document.querySelector(l.href)
//   );

//   const onScroll = () => {
//     const scrollY = window.scrollY + 120; // offset for fixed navbar

//     sections.forEach((section) => {
//       if (!section) return;

//       const top = section.offsetTop;
//       const height = section.offsetHeight;
//       const id = section.getAttribute("id");

//       if (scrollY >= top && scrollY < top + height) {
//         setActive(id);
//       }
//     });
//   };

//   window.addEventListener("scroll", onScroll);
//   onScroll(); // run once on mount

//   return () => window.removeEventListener("scroll", onScroll);
// }, []);


//   return (
//     // <nav> semantic HTML tag: "this is navigation"
//     // fixed + top/left/right => always sticks to top of screen
//     // z-50 => stays above other content
//     // bg-gray-900/70 + backdrop-blur => glass navbar
//     // border-b => bottom border line
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/70 backdrop-blur-md border-b border-white/10">
//       {/* Centered container with max width, padding */}
//       <div className="max-w-7xl mx-auto px-6 py-4">
//         {/* Flex row: left = logo, right = links/button */}
//         <div className="flex justify-between items-center">
//           {/* Logo / Name
//               href="#top" tries to scroll to element with id="top"
//               (We can add id="top" somewhere later for perfect behavior)
//           */}
//           <a href="#top" className="text-2xl font-bold text-white">
//             Nurbek
//           </a>

//           {/* Desktop links (hidden on mobile)
//               hidden md:flex:
//               - hidden by default (mobile)
//               - becomes flex starting from md breakpoint
//           */}
//           <div className="hidden md:flex gap-8">
//             {/* map = loop over navLinks array to create elements
//                 l is one link object: {label, href}
//             */}
//             {navLinks.map((l) => (
//               <a
//                 // key is required by React when rendering lists
//                 // it helps React update items efficiently
//                 key={l.href}
//                 href={l.href}
//                 className="text-gray-300 hover:text-white transition-colors"
//               >
//                 {/* Show label text */}
//                 {l.label}
//               </a>
//             ))}
//           </div>

//           {/* Mobile button (shown only on mobile)
//               md:hidden:
//               - visible on mobile
//               - hidden starting from md
//           */}
//           <button
//             type="button"
//             // Styling: small rounded button with glass-ish background
//             className="md:hidden inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white hover:bg-white/10 transition-colors"
//             // Accessibility: screen readers will say "Open menu"
//             aria-label="Open menu"
//             // Accessibility: tells if menu is open or closed
//             aria-expanded={open}
//             /*
//               onClick handler:
//               setOpen((v) => !v)
//               - v is the previous value of open
//               - !v flips it (true -> false, false -> true)
//               This is the safest way because it always uses the latest state.
//             */
//             onClick={() => setOpen((v) => !v)}
//           >
//             {/* Burger icon built with 3 lines (spans)
//                 relative container so lines can be absolutely positioned inside
//             */}
//             <span className="relative block h-4 w-5">
//               {/* Top line */}
//               <span
//                 className={[
//                   // Position + size of line
//                   "absolute left-0 top-0 h-0.5 w-5 bg-white transition-transform duration-200",
//                   // If menu is open: move down and rotate to become part of "X"
//                   open ? "translate-y-1.5 rotate-45" : "",
//                 ].join(" ")} // join array -> one className string
//               />
//               {/* Middle line */}
//               <span
//                 className={[
//                   "absolute left-0 top-1.5 h-0.5 w-5 bg-white transition-opacity duration-200",
//                   // If open: hide middle line (X shape needs only two lines)
//                   open ? "opacity-0" : "opacity-100",
//                 ].join(" ")}
//               />
//               {/* Bottom line */}
//               <span
//                 className={[
//                   "absolute left-0 top-3 h-0.5 w-5 bg-white transition-transform duration-200",
//                   // If open: move up and rotate opposite to form "X"
//                   open ? "-translate-y-1.5 -rotate-45" : "",
//                 ].join(" ")}
//               />
//             </span>
//           </button>
//         </div>

//         {/* Mobile menu (animated)
//             AnimatePresence is needed so exit animation plays when open becomes false
//             Without it: the menu would disappear instantly (no exit animation)
//         */}
//         <AnimatePresence>
//           {/* Conditional rendering:
//               If open === true => render the menu
//               If open === false => render nothing
//           */}
//           {open && (
//             <motion.div
//               /*
//                 initial/animate/exit:
//                 - initial: starting style when it appears
//                 - animate: style after it appears
//                 - exit: style when it disappears (only works with AnimatePresence)
//               */
//               initial={{ opacity: 0, y: -8 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -8 }}
//               // transition controls speed + easing
//               transition={{ duration: 0.18, ease: "easeOut" }}
//               // Menu panel styling (glass card look)
//               className="md:hidden mt-4 rounded-2xl border border-white/10 bg-white/[0.06] backdrop-blur-xl overflow-hidden"
//             >
//               {/* Inner padding */}
//               <div className="p-2">
//                 {navLinks.map((l) => (
//                   <a
//                     key={l.href}
//                     href={l.href}
//                     /*
//                       Close menu after clicking a link:
//                       - user taps "Projects"
//                       - page scrolls to #projects
//                       - menu closes so it doesn't cover the content
//                     */
//                     onClick={() => setOpen(false)}
//                     className="block rounded-xl px-4 py-3 text-gray-200 hover:bg-white/10 transition-colors"
//                   >
//                     {l.label}
//                   </a>
//                 ))}
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </nav>
//   );
// }
