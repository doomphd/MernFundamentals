import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom"
import DeleteButton from './DeleteButton';

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
            <td colSpan={2}>Actions</td>

          </tr>
        </thead>
        <tbody>
        {
            products.map((product, i)=>(
              <tr key={i}>  
                <td> <Link to={`/products/${product._id}`}>{product.title}</Link></td>
                <td> {product.price}</td>
                <td> {product.description}</td>
                <td> <Link to={`/products/update/${product._id}`}> Edit</Link></td>
                <td> <DeleteButton id={product._id} reloadList={reloadList}/></td>

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
