import React, { useState, useMemo } from 'react';
import AnimalList from './components/AnimalList';
import { initialAnimals } from './data/animals';
import './styles.css';

export default function App() {
  // фиксированный список — удаление отключено
  const [animals] = useState(initialAnimals);
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return animals;
    return animals.filter((a) => a.name.toLowerCase().includes(q));
  }, [query, animals]);

  return (
    <div className="app-container">
      <header>
        <h1>Карточки животных</h1>
      </header>

      <div className="controls">
        <input
          className="search-input"
          placeholder="Поиск по названию"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <main>
        <AnimalList animals={filtered} />
      </main>

      <footer>
        <p>Учебный проект — карточки животных</p>
      </footer>
    </div>
  );
}
