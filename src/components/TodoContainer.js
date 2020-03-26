import React ,{useState} from 'react';
import {TodoList} from './TodosList';
import {Header} from  './Header';
import {InputTodo} from './InputTodo';
import { v4 as uuidv4 } from 'uuid';

export const TodoContainer =()=>{
    const [todos,setTodos] = useState([ {   
                id:uuidv4(),
                title : "helo i am fine",
                completed : true
            },{
                id:uuidv4(),
                title : "hello how are you",
                completed : false
            }]);
    const handleChecked = (id)=>{
        setTodos(
             todos.map((todo)=>{
            if(todo.id === id){
                todo.completed = !todo.completed;
            }
            return todo;
        })
        )
    }
    const addTodo = (title)=>{
        const todo = {
            id :uuidv4(),
            title : title,
            completed : false
        }
        setTodos([...todos  ,{...todo}])
    }
   const deleteTodo = (id)=>{
       setTodos(todos.filter((todo=>{
           if(todo.id !== id){
               return todo;
           }
       })))
   } 
    return (
            <div className="container">
                <Header/>
                <InputTodo addTodo={addTodo}/>
                <TodoList handleChecked={handleChecked} deleteTodo={deleteTodo} todos={todos}/>
            </div> 
        );
}
