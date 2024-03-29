import { useState } from "react";
import { Link } from "react-router-dom";
import "./CharacterCards.css";

const deleteCharacter = (id) => {
  return fetch(`/api/characters/${id}`, { method: "DELETE" }).then((res) =>
    res.json()
  );
};

function CharacterItem({ character }) {
  //characters --> nem kellenek a setterek
  const [name] = useState(character.name);
  const [birthYear] = useState(character.birthYear);
  const [height] = useState(character.height);
  const [mass] = useState(character.mass);
  const [gender] = useState(character.gender);
  const [img] = useState(character.img);
  const [, setCharacters] = useState([]);

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this character?"
    );

    if (confirmed) {
      try {
        await deleteCharacter(id);
        setCharacters((characters) => {
          return characters.filter((character) => character._id !== id);
        });
        setTimeout(() => {
          alert("Your delete was successful");
        }, 100);
      } catch (error) {
        console.error(error);
        alert("Failed to delete character");
      }
    }
  };

  return (
    <div className="card">
      {img ? (
        <img
          src={img}
          alt=""
          className="img"
          style={{
            objectFit: "cover",
            height: 200,
            width: 170,
          }}
        />
      ) : (
        <img
          src="placeholder.jpg"
          alt=""
          className="img"
          style={{
            objectFit: "cover",
            height: 200,
            width: 170,
          }}
        />
      )}
      <h2>{name}</h2>
      <p>Birth year: {birthYear}</p>
      <p>Height: {height} cm</p>
      <p>Mass: {mass} kg</p>
      <p>Gender: {gender}</p>
      <Link to={`/update/${character._id}`}>
        <button type="button">Edit</button>
      </Link>
      <button type="button" onClick={() => handleDelete(character._id)}>
        Delete
      </button>
    </div>
  );
}

export default CharacterItem;
