import axios from 'axios';
import React, { useState } from 'react';

const CreateForm = (props) => {
    const {reloadList} = props
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState("")

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:8000/api/products`, {title, price, description})
            .then(res=>{
                setTitle("")
                setPrice(0)
                setDescription("")
                reloadList()
            })
            .catch(err=>console.log(err))
    }
    return <form onSubmit={submitHandler}>
    <p>
        <label>Title: </label>
        <input type = "text" name = "title" value ={title} onChange = {e=>setTitle(e.target.value)}/>
    </p>
    <p>
        <label>Price: </label>
        <input type = "number" name = "price" value ={price} onChange = {e=>setPrice(e.target.value)}/>
    </p>
    <p>
        <label>Description: </label>
        <input type = "text" name = "description" value ={description} onChange = {e=>setDescription(e.target.value)}/>
    </p>
    <button>Submit</button>
    </form>
};

export default CreateForm;
