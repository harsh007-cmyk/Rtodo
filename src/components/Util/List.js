import React, { useEffect, useState } from 'react'
import ListItem from './ListItem'
import './List.css';
const Local_Storage_Key='react-app-todos';
function List() {
const [todos,setTodos]=useState([])
const handleInput=(e)=>{
  setTodoInp(e.target.value);
}

useEffect(()=>{
  const stored=JSON.parse(localStorage.getItem(Local_Storage_Key));
  if(stored)setTodos(()=>{
    return stored;
  });
},[])

useEffect(()=>{
  localStorage.setItem(Local_Storage_Key,JSON.stringify(todos));
},[todos])




const handleSubmit=(e)=>{
  setTodos([{id:Math.random()*1000,text:todosinp},...todos])
}

function deleteItem(id){
  setTodos(todos.filter((todo)=>id!=todo.id))
}


const[todosinp,setTodoInp]=useState("");
  return (
    <div className='list-container'>
      <div className='todo-input-form'>
      <input type="text" onChange={handleInput} placeholder='Add a todo'/>
            <button onClick={handleSubmit}>Add Todo</button>
            </div>
      {/* dynamic rendering - data driven rendering */}
    
      {todos.map( todo => (
        <ListItem deleteItem={deleteItem} Id={todo.id} text={todo.text}/>
      ))}
    
    </div>
  )
}

export default List