import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initAnimations = () => {
  // Animación para el Header
  gsap.from('.header', {
    y: -50,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
  });

  // Animación para el Profile
  gsap.from('.profile', {
    opacity: 0,
    scale: 0.8,
    duration: 1,
    delay: 0.5,
    ease: 'back.out(1.7)',
  });

  // Animación para las tarjetas
  gsap.from('.hologram-card', {
    opacity: 0,
    y: 50,
    duration: 0.8,
    stagger: 0.3,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.hologram-card',
      start: 'top 80%',
    },
  });

  // Animación para el Footer
  gsap.from('.footer', {
    opacity: 0,
    y: 20,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.footer',
      start: 'top 90%',
    },
  });
};