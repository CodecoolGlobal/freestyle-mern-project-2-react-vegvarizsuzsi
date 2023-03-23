import { useState } from "react";
import { Link } from "react-router-dom";

const deleteStarship = (id) => {
  return fetch(`/api/starships/${id}`, { method: "DELETE" }).then((res) =>
    res.json()
  );
};
function StarshipItem({ starship }) {
  const [name] = useState(starship.name);
  const [cost_in_credits] = useState(starship.cost_in_credits);
  const [length] = useState(starship.length);
  const [passengers] = useState(starship.passengers);
  const [starship_class] = useState(starship.starship_class);
  const [img] = useState(starship.img);
  const [, setStarships] = useState([]);

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this Starship?"
    );

    if (confirmed) {
      try {
        await deleteStarship(id);
        setStarships((starhips) => {
          return starhips.filter((Starship) => Starship._id !== id);
        });
        setTimeout(() => {
          alert("Your delete was successful");
        }, 100);
      } catch (error) {
        console.error(error);
        alert("Failed to delete Starship");
      }
    }
  };
  return (
    <div className="card">
      <img
        src={img}
        alt=""
        className="img"
        style={{
          resizeModel: "cover",
          height: 200,
          width: 170,
        }}
      />
      <h3>{name}</h3>
      <p>Cost: {cost_in_credits} credits</p>
      <p>Length: {length} m</p>
      <p>Passengers: {passengers}</p>
      <p>Starship class: {starship_class}</p>
      <Link to={`/starships/update/${starship._id}`}>
        <button type="button">Edit</button>
      </Link>
      <button type="button" onClick={() => handleDelete(starship._id)}>
        Delete
      </button>
    </div>
  );
}

export default StarshipItem;
