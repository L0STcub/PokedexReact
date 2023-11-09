import React from 'react'
import Navbar from '../components/Navbar'

const randomFacts = [
  "Pokemon is short for 'Pocket Monsters' in Japanese.",
  "Pikachu is the mascot of Pokemon and one of the most recognizable Pokemon species.",
  "There are 898 unique Pokemon species as of the latest generation.",
  "Legendary Pokemon are rare and powerful Pokemon often associated with legends and myths.",
  "The first Pokemon video games, Pokemon Red and Green, were released in 1996 in Japan.",
  "Eevee can evolve into eight different Pokemon species, depending on various factors.",
  "Arceus is known as the 'Original One' or the 'God of Pokemon' due to its lore.",
  "Pokemon evolution is a fundamental concept in the Pokemon games, where Pokemon transform into a different species.",
];

function About() {
  const randomFact = randomFacts[Math.floor(Math.random() * randomFacts.length)];

  return (
    <>
      <Navbar />
      <div className="about-container">
        <h1>About Pokemon</h1>
        <p>{randomFact}</p>
      </div>
    </>
  );
}

export default About;