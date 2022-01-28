import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import CreateForm from '../components/CreateForm';
import DisplayTable from '../components/DisplayTable'


const Main = () => {
    const [message, setMessage] = useState("Loading...")
    const [refresh, setRefresh] = useState(false)

    useEffect(() => {
        axios.get(`http://localhost:8000/api`)
            .then(res=>setMessage(res.data.message))
            .catch(res=>setMessage("error"))
    }, [])

    const reloadList = ()=>{
        setRefresh(!refresh)
      }
  return (
      
    <div>
      <h1>Product Manager </h1>
      <CreateForm reloadList ={reloadList} />
      <DisplayTable refresh={refresh} reloadList ={reloadList} />
      </div>
)

  
};

export default Main;
