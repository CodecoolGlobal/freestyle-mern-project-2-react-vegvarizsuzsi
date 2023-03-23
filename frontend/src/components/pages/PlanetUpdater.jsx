import { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import PlanetForm from "../PlanetForm";

const updatePlanet = (planet) => {
    return fetch(`/api/planets/${planet._id}`, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(planet),
    }).then(res => res.json())
};

const fetchPlanet = (id) => {
    return fetch(`/api/planets/${id}`)
        .then((res) => res.json())
}

function PlanetUpdater() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [planet, setplanet] = useState(null);
    const [updateLoading, setUpdateLoading] = useState(false);


    useEffect(() => {
        fetchPlanet(id)
            .then((planet) => {
                setplanet(planet);
            })
    }, [id])

    function handleUpdateplanet(planet) {
        setUpdateLoading(true)
        updatePlanet(planet)
        .then(() => {
            setUpdateLoading(false)
            navigate("/planets")
        })
    }
    console.log(planet)

    return (
        <>
            <PlanetForm
                planet={planet}
                onSave={handleUpdateplanet}
                disabled={updateLoading}
                onCancel={() => navigate("/planets")} />

        </>
    )
}

export default PlanetUpdater