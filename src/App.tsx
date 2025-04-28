import React, { useEffect } from 'react';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import HologramCard from './components/HologramCard/HologramCard';
import Footer from './components/Footer/Footer';
import './styles/main.scss';
import { initAnimations } from './scripts/gsap/gsapAnimations';
import { initParticles } from './scripts/threejs/particleEffects';

const App: React.FC = () => {
  useEffect(() => {
    initAnimations();
    initParticles();
  }, []);

  return (
    <div className="main-layout">
      <Header />
      <main>
        <Profile />
        <section>
          <h2>Experiencia</h2>
          <HologramCard
            title="Desarrollador Frontend"
            content="Trabaj� en XYZ Company (2022-2025), desarrollando aplicaciones web con React y TypeScript."
          />
          <HologramCard
            title="Dise�ador UI/UX"
            content="Colabor� en ABC Studio (2020-2022), dise�ando interfaces intuitivas y modernas."
          />
        </section>
        <section>
          <h2>Habilidades</h2>
          <HologramCard
            title="Tecnolog�as"
            content="React, TypeScript, GSAP, Three.js, SCSS, Vite"
          />
          <HologramCard
            title="Herramientas"
            content="Figma, VS Code, Git, Webpack"
          />
        </section>
        <section>
          <h2>Proyectos</h2>
          <HologramCard
            title="CV Futurista"
            content="Un CV web interactivo con animaciones 3D y efectos hologr�ficos."
          />
          <HologramCard
            title="Portafolio Web"
            content="Portafolio personal con dise�o minimalista y responsive."
          />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;