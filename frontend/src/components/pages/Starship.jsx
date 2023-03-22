import { useState, useEffect } from 'react'

import StarshipItem from '../StarshipItem'

function Starship() {

    const [starships, setStarships] = useState(0)

    useEffect(() => {
        const fetchStarships = async () => {
            const response = await fetch('/api/starships');
            const json = await response.json()

            if (response.ok) {
                setStarships(json)
            }
        }

        fetchStarships()

    }, [])


    return (
        <div>
            <div>
                {starships && starships.map(starship =>
                    <StarshipItem key={starship._id} starship={starship} />)}
            </div>
        </div>
    )
}



export default Starship