import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleNewTodoSubmit = (event) => {
    event.preventDefault();

    if(newTodo.length === 0){
      return 
    }

    const todoItem = {
      text: newTodo,
      complete: false
    }
    setTodos([...todos, todoItem])
    setNewTodo("");
  }

  const handleTodoDelete = (delIdx) => {
    const filteredTodos = todos.filter( (todo, i) =>{
      return i !== delIdx
    }); 
    setTodos(filteredTodos);
  }

  const handleComplete = (idx) => {
    const updatedTodos = todos.map((todo, i) => {

      if(idx === i){
        //mutating directly not good practice 
        //todo.complete = !todo.complete
        const updatedTodo = {...todo, complete: !todo.complete}
        return updatedTodo
      }
      return todo
    })
    setTodos(updatedTodos)
  }
  return (
    <div style ={{textAlign: "center"}} >
      <form 
        onSubmit = {(event) => {
          handleNewTodoSubmit(event)
      }}>
        <input 
          onChange= {(event) => {
          setNewTodo(event.target.value);
         }}
          type ="text"
          value = {newTodo}/>

      <div>
        <button>Add</button>
      </div>
      </form>
      {
        todos.map((todo, i) => {
          const todoClasses = ["bold", "italics"]
          if(todo.complete){
            todoClasses.push("line-through")
          }
          return (
            <div key = {i}>
              <input 
                onChange={(event) => {
                  handleComplete(i)  
                }}
              checked={todo.complete} type ="checkbox" />
            <span className ={todoClasses.join(" ")}>{todo.text}</span>
            <button onClick= {(event) => {
              handleTodoDelete(i);
            }}>Delete</button>
            </div>
          );  
      })}
    </div>

  );
}

export default App;
