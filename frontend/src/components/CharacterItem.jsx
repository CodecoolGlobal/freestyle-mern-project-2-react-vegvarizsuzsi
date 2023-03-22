import { useState } from "react";
import './CharacterCards.css'

function CharacterItem({ character }) {
  const [name,] = useState(character.name);
  const [birth_year,] = useState(character.birth_year);
  const [height,] = useState(character.height)
  const [mass,] = useState(character.mass);
  const [gender,] = useState(character.gender);

  return (
    <div className="card">
      <img src='placeholder.jpg' alt='this is not' />
      <h2>{name}</h2>
      <p>Birth Year: {birth_year}</p>
      <p>Height: {height} cm</p>
      <p>Mass: {mass} kg</p>
      <p>Gender: {gender}</p>      
    </div>
  )
}

export default CharacterItem