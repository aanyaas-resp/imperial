import { gsap, ScrollTrigger } from "./gsap";

/**
 * Fades and slides every `.reveal` element inside `root` as it enters the
 * viewport. Elements that enter together are animated in one staggered batch.
 */
export function revealWithin(root: Element, selector = ".reveal") {
  const items = Array.from(root.querySelectorAll<HTMLElement>(selector));
  if (items.length === 0) return;

  gsap.set(items, { opacity: 0, y: 40 });

  ScrollTrigger.batch(items, {
    start: "top 88%",
    once: true,
    onEnter: (batch) =>
      gsap.to(batch, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.12,
        overwrite: true,
      }),
  });
}
