import React, {useEffect, useState} from 'react';
import axios from 'axios'
import {useParams} from "react-router-dom"

const Detail = () => {

  const [product, setProduct] = useState(null)
  const {id} = useParams()

  useEffect(()=>{
    axios.get(`http://localhost:8000/api/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.log(err))
  },[])


  return (
    <div>
  {
    product?(
      <>
        <h1>Product Details</h1>
        <h3> Title: {product.title}</h3>
        <h3> Price: {product.price}</h3>
        <h3> Description: {product.description}</h3>
      </>
    ):(
      <h1> Loading...</h1>
    )
  }

</div>
  )
};

export default Detail;