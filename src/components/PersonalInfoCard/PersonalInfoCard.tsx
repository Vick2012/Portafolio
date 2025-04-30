const PersonalInfoCard: React.FC = () => {
  return (
    <section className="personal-info-card">
      <h2>Personal Information</h2>
      <div className="personal-details">
        <h3>Personal Details</h3>
        <p>
          <strong>Age:</strong> 39 years
        </p>
        <p>
          <strong>Location:</strong> Bogotá, Colombia
        </p>
        <hr className="divider" />
      </div>
      <div className="education">
        <h3>Studies</h3>
        <p>
          <strong>Professional title:</strong> Ingeniero de Software
        </p>
        <p>
          <strong>Institution:</strong> Universidad Manuela Beltran (2022 -
          2026)
        </p>
      </div>
      <div className="skills"></div>
    </section>
  );
};

export default PersonalInfoCard;
