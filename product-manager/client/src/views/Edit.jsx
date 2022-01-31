import React, {useEffect, useState} from 'react';
import axios from "axios"
import {useParams, useHistory} from "react-router-dom"

const Edit = () => {
    const {id} = useParams()
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState("")
    const history = useHistory()



    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/update/${id}`)
            .then(res=>{
                setTitle("")
                setPrice(0)
                setDescription("")
            })
            .catch(err=>console.log(err))
    },[])

    const submitHandler =(e) =>{
        e.preventDefault()
        axios.put(`http://localhost:8000/api/products/update/${id}`, {title, price, description})
            .then(res=>history.push("/"))
            .catch(err=>console.log(err))
    }

  return (
      <div>
      <h1> Edit form</h1>
      <form onSubmit={submitHandler}>
      <p>
        <label> Title</label>
        <input type="text" name="title" value={title} onChange={e=>setTitle(e.target.value)} />
      </p>
      <p>
        <label> Price</label>
        <input type="number" name="price" value={price} onChange={e=>setPrice(e.target.value)} />
      </p>
      <p>
        <label> Description</label>
        <input type="text" name="description" value={description} onChange={e=>setDescription(e.target.value)} />
      </p>
      <button> Submit</button>
    </form>

    </div>)
};

export default Edit;