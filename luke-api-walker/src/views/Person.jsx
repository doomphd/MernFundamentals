import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios, { Axios } from 'axios';

const Person = () => {
  
  const [person, setPerson] = useState(null)
  const {id} = useParams()

  useEffect(() => {
    axios.get(`https://swapi.dev/api/people/` + id)
    .then(res => {
      setPerson(res.data)
    })
    .catch(err => {
      setPerson(null)
    })
  }, [])
  
  return( 
    <div>
      {
        person?(
          <div>
            <h1>Person Name: {person.name}</h1>
            <p>Height: {person.height}</p>
            <p>Mass: {person.mass}</p>
            <p>Hair Color: {person.hair_color}</p>
            <p>Skin Color: {person.skin_color}</p>

          </div>) :
          <h1>loading...</h1>


      }
    
    </div>
  )
}

export default Person;
