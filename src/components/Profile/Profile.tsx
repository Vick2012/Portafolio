const Profile: React.FC = () => {
  return (
    <section className="profile">
      <h1>Victor Alfonso Alarcón Ospina</h1>
      <p>
        Ingeniero de Software | Apasionado por la tecnología y por los desafíos
      </p>
      <div className="social-links">
        <a
          href="https://github.com/Vick2012"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>{" "}
        |{" "}
        <a
          href="https://linkedin.com/in/victoralarcon"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>{" "}
        |{" "}
        <a
          href="https://www.instagram.com/victoralarcon/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>{" "}
        |{" "}
        <a href="mailto:victorsloan2012@gmail.com">victorsloan2012@gmail.com</a>
      </div>
    </section>
  );
};

export default Profile;
