import { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import CharacterForm from "../CharacterForm";

const updateCharacter = (character) => {
    return fetch(`/api/characters/${character._id}`, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(character),
    }).then(res => res.json())
};

const fetchCharacter = (id) => {
    return fetch(`/api/characters/${id}`)
        .then((res) => res.json())
}

function CharacterUpdater() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [character, setCharacter] = useState(null);
    const [updateLoading, setUpdateLoading] = useState(false);


    useEffect(() => {
        fetchCharacter(id)
            .then((character) => {
                setCharacter(character);
            })
    }, [id])

    function handleUpdateCharacter(character) {
        setUpdateLoading(true)
        updateCharacter(character)
        .then(() => {
            setUpdateLoading(false)
            navigate("/")
        })
    }
    console.log(character)

    return (
        <>
            <CharacterForm
                character={character}
                onSave={handleUpdateCharacter}
                disabled={updateLoading}
                onCancel={() => navigate("/")} />

        </>
    )
}

export default CharacterUpdater