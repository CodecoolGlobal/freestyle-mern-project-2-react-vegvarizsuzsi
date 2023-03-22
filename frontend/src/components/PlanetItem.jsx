import { useState } from "react";


function PlanetItem({ planet }) {
    const [name,] = useState(planet.name);
    const [diameter,] = useState(planet.diameter);
    const [climate,] = useState(planet.climate)
    const [terrain,] = useState(planet.terrain);
    const [population,] = useState(planet.population);


    return (
        <div className="card">
            <img src='placeholder.jpg' alt='this is not' />
            <h2>{name}</h2>
            <p>Diameter: {diameter} km</p>
            <p>Climate: {climate}</p>
            <p>Terrain: {terrain}</p>
            <p>Population: {population}</p>
        </div>
    )
}

export default PlanetItem
