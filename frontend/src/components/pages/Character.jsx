import { useState, useEffect } from 'react';

import CharacterItem from '../CharacterItem'

function Character() {

    const [characters, setCharacters] = useState(0)

    useEffect(() => {
        const fetchCharacters = async () => {
            const response = await fetch('/api/characters');
            const json = await response.json()

            if (response.ok) {
                setCharacters(json)
            }
        }

        fetchCharacters()

    }, [])


    return (
        <div>
            <div>
                {characters && characters.map(character =>
                    <CharacterItem key={character._id} character={character} />)}
            </div>
        </div>
    )
}



export default Character