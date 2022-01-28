import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom"

const DisplayTable = (props) => {
    const {refresh, reloadList} = props

    const [products, setProducts] = useState(null)

    useEffect(()=> {
        axios.get(`http://localhost:8000/api/products`)
            .then(res => setProducts(res.data))
            .catch(err => console.log(err))
    },[refresh])
    
    return (

    <div>
    {
    products?(
      <table>
        <thead>
          <tr>
            <td>Title</td>
            <td>Price</td>
            <td>Description</td>
          </tr>
        </thead>
        <tbody>
        {
            products.map((product, i)=>(
              <tr key={i}>  
                <td> <Link to={`/products/${product._id}`}>{product.title}</Link></td>
                <td> {product.price}</td>
                <td> {product.description}</td>

              </tr>
            ))
          } 
        </tbody>
      </table>
    ):
    <h1> Loading...</h1>

  }
</div>
    )    
};

export default DisplayTable;
