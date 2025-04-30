import { gsap } from "gsap";

export const initAnimations = () => {
  // Animaci�n de entrada para el t�tulo del perfil
  gsap.from(".profile h1", {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 0.5,
  });

  // Animaci�n para las tarjetas hologr�ficas
  gsap.from(".hologram-card", {
    opacity: 0,
    scale: 0.8,
    stagger: 0.2,
    duration: 0.8,
    delay: 1,
  });
};
