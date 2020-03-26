import React from 'react'
import {TodoItem} from './TodoItem';
export const TodoList = (props)=>{
   return  props.todos.map((todo)=>{
        return <TodoItem delete={props.deleteTodo} handleChecked={props.handleChecked} todo={todo}/>
    })
}
