import React, {useState} from "react";
import { useHistory } from "react-router-dom";
const HeaderForm = () => {

    const [category, setCategory] = useState("")
    const [id, setId] = useState(null)
    const history = useHistory()

    const submitHandler = (e) => {
        e.preventDefault()
        history.push(`/${category}/${id}`)
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <p>
                    Search For:
                    <select onChange={e => setCategory(e.target.value)}>
                        <option value ="person">Person</option>
                        <option value ="planet">Planet</option>

                    </select>
                    ID:
                    <input type = "number" onChange={e => setId(e.target.value)}/>
                    <button className="btn btn-primary">Search</button>
                </p>
            </form>
        </div>
    )
}

export default HeaderForm