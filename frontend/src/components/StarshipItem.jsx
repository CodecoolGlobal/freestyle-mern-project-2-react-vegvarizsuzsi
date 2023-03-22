import { useState } from "react";


function StarshipItem({ starship }) {
  const [name,] = useState(starship.name);
  const [cost_in_credits,] = useState(starship.cost_in_credits);
  const [length,] = useState(starship.length)
  const [passangers,] = useState(starship.passangers);
  const [starship_class,] = useState(starship.starship_class);


  return (
    <div className="card">
      <img src='placeholder.jpg' alt='this is not' />
      <h3>{name}</h3>
      <p>Cost: {cost_in_credits} credits</p>
      <p>Length: {length} m</p>
      <p>Passangers: {passangers}</p>
      <p>Starship class: {starship_class}</p>
    </div>
  )
}

export default StarshipItem
