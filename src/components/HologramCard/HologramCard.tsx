import React from 'react';

interface HologramCardProps {
  title: string;
  content: string;
}

const HologramCard: React.FC<HologramCardProps> = ({ title, content }) => {
  return (
    <div className="hologram-card">
      <h3 className="card-title">{title}</h3>
      <p className="card-content">{content}</p>
    </div>
  );
};

export default HologramCard;