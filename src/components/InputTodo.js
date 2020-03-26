import React ,{useRef}from 'react'

export const InputTodo =(props)=>{
    const inputRef = useRef(null);
    const handleSubmit = (e)=>{
         e.preventDefault();
        props.addTodo(inputRef.current.value);
    }
    return (
         <form  className="form-container" onSubmit={handleSubmit}>
         <input ref={inputRef} type="text" placeholder="enter todo"/>
            <input type="submit" value="Submit" />
         </form>
                )
}