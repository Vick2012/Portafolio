import React from 'react';

const Profile: React.FC = () => {
  return (
    <section className="profile">
      <img
        src="https://via.placeholder.com/150"
        alt="Profile"
        className="profile-image"
      />
      <h2 className="profile-name">Tu Nombre</h2>
      <p className="profile-title">Desarrollador Web | Experto en UI/UX</p>
      <p>
        Apasionado por crear experiencias digitales únicas con tecnologías
        modernas como React, TypeScript y Three.js.
      </p>
    </section>
  );
};

export default Profile;