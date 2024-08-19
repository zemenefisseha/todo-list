import React from 'react'
import { useState } from 'react';
import {BiCheckDouble,BiEdit, BiTrash, BiCheckCircle, BiReset, BiRefresh  } from "react-icons/bi";
import './Todolist.css';

function Todolist() {
   const [todos, settodos]= useState([])
    const [inputvalue, setInputValue]= useState('')
    const [editIndex, setEditIndex]= useState(-1)

 const addTodo =() => {
      if (inputvalue.trim()!== ''){
        if(editIndex !== -1) {
            const updateTodos =[...todos]
            updateTodos[editIndex] ={task:inputvalue, completed: updateTodos [editIndex].completed}
            settodos(updateTodos)
            setInputValue('')
            setEditIndex(-1)
        }else{
            settodos([...todos, {task:inputvalue, completed: false}])
            setInputValue('')
        }
      }
    }

     const startEdit =(index) => {
        setInputValue(todos[index].task)
        setEditIndex(index)
     }
     const cancelEdit = () => {
        setInputValue('')
        setEditIndex (-1)
     }
     const removeTodo =(index) => {
         const updatedTodos = todos.filter((_, i) => i !== index)

         settodos(updatedTodos)
         }
    const toggleCompleted = (index) => {
      const updatedTodos = [...todos];
      updatedTodos[index].completed = !updatedTodos[index].completed;
      settodos(updatedTodos);
    }
    
    return (
    <div className='todo-contanier'>
        <h1>TO-DO-List</h1>
        <div className="input-section">
            <input type="text" value={inputvalue} onChange={ (e) => setInputValue(e.target.value)} 
            placeholder= 'Enter a new Task'
            className="input-field" />
            {editIndex !== -1 ? (
         <>
         <button onClick={addTodo} className="update-btn"> <BiCheckDouble /></button>
         <button onClick={cancelEdit} className="cancel-btn"> <BiRefresh /></button>
         </>
            ) : (
         <button onClick={addTodo} className= "add-btn">Add</button>
            )}
         </div>
      <ul className='todo-list'>
        {todos.map((todo, index) => (
        <li key={index} className={todo.completed ? 'completed' : ''}>
         {todo.task}
         <div className="btn-group">
          <button className="btn-edit" onClick= {() => startEdit (index) }> <BiEdit /> </button>
          <button className="btn-remove" onClick={() => removeTodo (index)}> <BiTrash /> </button>
          <button className="btn-done" onClick = {() => toggleCompleted(index)}> 
            {todo.completed ? <BiReset /> : <BiCheckCircle />}
             </button>
            </div>
         </li>
         )) }

         </ul>
         </div>
       
  )
}

export default Todolist;
