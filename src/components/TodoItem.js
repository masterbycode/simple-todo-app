import React from 'react'

export const TodoItem = (props)=>{
     const completedStyle = {
  fontStyle: "italic",
  color: "#d35e0f",
  opacity: 0.4,
  textDecoration: "line-through",
}
     return <li className="todo-item" key={props.todo.id} id={props.todo.id}> 
     <input onChange ={()=>{props.handleChecked(props.todo.id)}} type="checkbox" checked={props.todo.completed}/>
     {props.todo.title}
      <input onClick={()=>{
           props.delete(props.todo.id)
      }}  type="button" value="delete"/>
      <span style={props.todo.completed ? completedStyle : null}>
      {props.todo.title}
    </span>

     </li>
}