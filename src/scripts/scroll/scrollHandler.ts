import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const initParallax = () => {
  // Selecciona los elementos que tendr�n efecto parallax
  const parallaxElements = document.querySelectorAll(".main-layout section");

  parallaxElements.forEach((element) => {
    gsap.to(element, {
      y: -50, // Mueve el elemento 50px hacia arriba mientras se desplaza
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start: "top bottom", // Comienza el efecto cuando el elemento entra en la vista
        end: "bottom top", // Termina cuando el elemento sale de la vista
        scrub: true, // Sincroniza el movimiento con el scroll
      },
    });
  });
};
