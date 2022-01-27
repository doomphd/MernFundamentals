import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios, { Axios } from 'axios';

const Planet = () => {
  
  const [planet, setPlanet] = useState(null)
  const {id} = useParams()

  useEffect(() => {
    axios.get(`https://swapi.dev/api/planets/` + id)
    .then(res => {
      setPlanet(res.data)
    })
    .catch(err => {
      setPlanet(null)
    })
  }, [id])
  
  return( 
    <div>
      {
        planet?(
          <div>
            <h1>Planet Name: {planet.name}</h1>
            <p>Climate: {planet.climate}</p>
            <p>Terrain: {planet.terrain}</p>
            <p>Surface Water: {planet.surface_water}</p>
            <p>Population: {planet.population}</p>

          </div>) :
          <h1>loading...</h1>


      }
    
    </div>
  )
}

export default Planet;
