import * as THREE from "three";

export const initParticleEffects = () => {
  const canvas = document.getElementById(
    "particle-canvas",
  ) as HTMLCanvasElement;
  if (!canvas) {
    console.error("No se encontró el elemento #particle-canvas en el DOM");
    return;
  }

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000,
  );
  camera.position.z = 50;

  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true,
  });
  renderer.setSize(window.innerWidth, window.innerHeight);

  const particleCount = 1000;
  const positions = new Float32Array(particleCount * 3);
  const velocities = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount; i++) {
    const i3 = i * 3;
    positions[i3] = (Math.random() - 0.5) * 100;
    positions[i3 + 1] = (Math.random() - 0.5) * 100;
    positions[i3 + 2] = (Math.random() - 0.5) * 100;

    velocities[i3] = (Math.random() - 0.5) * 0.05;
    velocities[i3 + 1] = (Math.random() - 0.5) * 0.05;
    velocities[i3 + 2] = (Math.random() - 0.5) * 0.05;
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

  const createCircularTexture = (): THREE.Texture => {
    const size = 64;
    const canvas = document.createElement("canvas");
    canvas.width = canvas.height = size;
    const ctx = canvas.getContext("2d")!;
    const radius = size / 2;

    const gradient = ctx.createRadialGradient(
      radius,
      radius,
      0,
      radius,
      radius,
      radius,
    );
    gradient.addColorStop(0, "rgba(255, 255, 255, 0.8)");
    gradient.addColorStop(0.4, "rgba(255, 255, 255, 0.3)");
    gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(radius, radius, radius, 0, Math.PI * 2);
    ctx.fill();

    return new THREE.CanvasTexture(canvas);
  };

  const material = new THREE.PointsMaterial({
    size: 6,
    map: createCircularTexture(),
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });

  const updateParticleColor = () => {
    const textColor = getComputedStyle(document.documentElement)
      .getPropertyValue("--text-color")
      .trim();
    material.color.set(textColor);
  };

  updateParticleColor();

  const particles = new THREE.Points(geometry, material);
  scene.add(particles);

  const clock = new THREE.Clock();

  const animate = () => {
    requestAnimationFrame(animate);

    const delta = clock.getDelta();

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      positions[i3] += velocities[i3] * delta * 60;
      positions[i3 + 1] += velocities[i3 + 1] * delta * 60;
      positions[i3 + 2] += velocities[i3 + 2] * delta * 60;

      for (let j = 0; j < 3; j++) {
        if (positions[i3 + j] > 50 || positions[i3 + j] < -50)
          velocities[i3 + j] *= -1;
      }
    }

    geometry.attributes.position.needsUpdate = true;
    renderer.render(scene, camera);
  };

  animate();

  const observer = new MutationObserver((mutations) => {
    if (mutations.some((m) => m.attributeName === "data-theme"))
      updateParticleColor();
  });
  observer.observe(document.documentElement, { attributes: true });

  const handleResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  };
  window.addEventListener("resize", handleResize);

  console.log("Partículas inicializadas correctamente");

  return () => {
    window.removeEventListener("resize", handleResize);
    observer.disconnect();
  };
};
