import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>
        © 2025 Tu Nombre |{' '}
        <a href="https://github.com" className="footer-link">
          GitHub
        </a>{' '}
        |{' '}
        <a href="https://linkedin.com" className="footer-link">
          LinkedIn
        </a>
      </p>
    </footer>
  );
};

export default Footer;