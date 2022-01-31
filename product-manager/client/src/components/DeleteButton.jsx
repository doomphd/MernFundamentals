import React from 'react';
import axios from "axios"
import {useHistory} from "react-router-dom"

const DeleteButton = (props) => {
  const {id,reloadList } = props
  const history = useHistory()

  const clickHandler = ()=>{
    axios.delete(`http://localhost:8000/api/products/delete/${id}`)
      .then(res=> {
        reloadList();
        history.push("/")
      })
      .catch(err=>console.log(err))
  }

  return <button onClick={clickHandler}>
      Delete
      </button>;
};

export default DeleteButton;