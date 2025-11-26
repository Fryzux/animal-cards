import React from 'react';

export default function AnimalCard({ animal }) {
  return (
    <article className="card">
      <div className="img-wrap">
        <img src={animal.image} alt={animal.name} loading="lazy" />
        <div className="overlay">
          <h3>{animal.name}</h3>
        </div>
      </div>
    </article>
  );
}
