
import React, { useState, useEffect } from 'react'


const Pokemon = (props) => {
    const [pokemon, setPokemon] = useState([]);
    const [displayPokemon, setdisplayPokemon] = useState(false)

    
    const handleAppearance = (event) => {
        event.preventDefault();
        setdisplayPokemon(true);


      }

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(response => response.json())
            .then(response => setPokemon(response.results))
    }, []);
 
    return (
        <div>
            <button onClick={(event) => handleAppearance(event)}>Fetch Pokemon</button>
            {displayPokemon && pokemon.map((pokemon, index)=>{
                return (<div key={index}>{pokemon.name}</div>)
            })}
        </div>
    );
}
export default Pokemon;

