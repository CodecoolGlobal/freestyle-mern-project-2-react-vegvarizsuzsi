import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import StarshipForm from "../StarshipForm";

const updateStarship = (starship) => {
  return fetch(`/api/starships/${starship._id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(starship),
  }).then((res) => res.json());
};

const fetchStarship = (id) => {
  return fetch(`/api/starships/${id}`).then((res) => res.json());
};

function StarshipUpdater() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [starship, setStarship] = useState(null);
  const [updateLoading, setUpdateLoading] = useState(false);

  useEffect(() => {
    fetchStarship(id).then((starship) => {
      setStarship(starship);
    });
  }, [id]);

  function handleUpdateStarship(starship) {
    setUpdateLoading(true);
    updateStarship(starship).then(() => {
      setUpdateLoading(false);
      navigate("/starships");
    });
  }
  console.log(starship);

  return (
    <>
      <StarshipForm
        starship={starship}
        onSave={handleUpdateStarship}
        disabled={updateLoading}
        onCancel={() => navigate("/starships")}
      />
    </>
  );
}

export default StarshipUpdater;
