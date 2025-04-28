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
            content="Trabajé en XYZ Company (2022-2025), desarrollando aplicaciones web con React y TypeScript."
          />
          <HologramCard
            title="Diseñador UI/UX"
            content="Colaboré en ABC Studio (2020-2022), diseñando interfaces intuitivas y modernas."
          />
        </section>
        <section>
          <h2>Habilidades</h2>
          <HologramCard
            title="Tecnologías"
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
            content="Un CV web interactivo con animaciones 3D y efectos holográficos."
          />
          <HologramCard
            title="Portafolio Web"
            content="Portafolio personal con diseño minimalista y responsive."
          />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;