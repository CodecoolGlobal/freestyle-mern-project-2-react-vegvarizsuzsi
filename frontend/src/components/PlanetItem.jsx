import { useState } from "react";
import { Link } from "react-router-dom";

const deletePlanet = (id) => {
    return fetch(`/api/planets/${id}`, { method: "DELETE" }).then((res) => res.json())

};


function PlanetItem({ planet }) {
    const [name,] = useState(planet.name);
    const [diameter,] = useState(planet.diameter);
    const [climate,] = useState(planet.climate)
    const [terrain,] = useState(planet.terrain);
    const [population,] = useState(planet.population);
    const [img, setImg] = useState(planet.img);
    const [, setPlanets] = useState([])

    const handleDelete = async (id) => {
        const confirmed = window.confirm('Are you sure you want to delete this Planet?')

        if (confirmed) {

            try {
                await deletePlanet(id);
                setPlanets((planets) => {
                    return planets.filter((Planet) => Planet._id !== id)
                });
                setTimeout(() => {
                    alert("Your delete was successful")
                }, 100);
            } catch (error) {
                console.error(error);
                alert("Failed to delete Planet")
            }
        }
    }


    return (
        <div className="card">
            <img src={img} alt='' className="img"
                style={{
                    resizeModel: "cover",
                    height: 200,
                    width: 170
                }} />
            <h2>{name}</h2>
            <p>Diameter: {diameter} km</p>
            <p>Climate: {climate}</p>
            <p>Terrain: {terrain}</p>
            <p>Population: {population}</p>
            <Link to={`/planets/update/${planet._id}`}>
                <button type="button">Edit</button>
            </Link>
            <button type="button" onClick={() => handleDelete(planet._id)}>Delete</button>
        </div>
    )
}

export default PlanetItem
