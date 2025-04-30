export const initParallax = async () => {
  const { gsap } = await import("gsap");
  const { ScrollTrigger } = await import("gsap/ScrollTrigger");

  gsap.registerPlugin(ScrollTrigger);

  gsap.to(".hologram-card", {
    y: 20,
    scrollTrigger: {
      trigger: ".hologram-card",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });
};
