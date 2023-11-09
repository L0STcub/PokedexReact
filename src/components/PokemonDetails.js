import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../App.css';

const PokemonDetails = () => {
  const { id } = useParams();
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        if (response.ok) {
          const data = await response.json();
          setPokemonData(data);
        } else {
          throw new Error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);

  if (!pokemonData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="card-container">
      <div className="pokemon-card">
        <div className="pokemon-image-container">
          <img
            src={pokemonData.sprites.front_default}
            alt={pokemonData.name}
            className="pokemon-image"
          />
        </div>
        <div className="pokemon-details">
          <h2>{pokemonData.name}</h2>
          <div className="ability-details">
            <h3>Abilities:</h3>
            <ul className="pokemon-list">
              {pokemonData.abilities.map((ability, index) => (
                <li key={index}>{ability.ability.name}</li>
              ))}
            </ul>
          </div>
          <div className="type-details">
            <h3>Types:</h3>
            <ul className="pokemon-list">
              {pokemonData.types.map((type, index) => (
                <li key={index}>{type.type.name}</li>
              ))}
            </ul>
          </div>
          <div className="stats-details">
            <h3>Stats:</h3>
            <ul className="pokemon-list">
              {pokemonData.stats.map((stat, index) => (
                <li key={index}>{stat.stat.name}: {stat.base_stat}</li>
              ))}
            </ul>
          </div>
          <div className="moves-details">
            <h3>Moves:</h3>
            <ul className="pokemon-list">
              {pokemonData.moves.slice(0, 5).map((move, index) => (
                <li key={index}>{move.move.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetails;
