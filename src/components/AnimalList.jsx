import React from 'react';
import AnimalCard from './AnimalCard';

export default function AnimalList({ animals }) {
  if (!animals || animals.length === 0) {
    return <p>Нет животных для отображения.</p>;
  }

  return (
    <section className="grid">
      {animals.map((a) => (
        <AnimalCard key={a.id} animal={a} />
      ))}
    </section>
  );
}
