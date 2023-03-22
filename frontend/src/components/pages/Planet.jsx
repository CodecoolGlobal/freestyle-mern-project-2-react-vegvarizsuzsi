import { useState, useEffect } from 'react'

import PlanetItem from '../PlanetItem'

function Planet() {

    const [planets, setPlanets] = useState(0)

    useEffect(() => {
        const fetchPlanets = async () => {
            const response = await fetch('/api/planets');
            const json = await response.json()

            if (response.ok) {
                setPlanets(json)
            }
        }

        fetchPlanets()

    }, [])


    return (
        <div>
            <div>
                {planets && planets.map(planet =>
                    <PlanetItem key={planet._id} planet={planet} />)}
            </div>
        </div>
    )
}



export default Planet