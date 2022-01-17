import React,{ useContext } from "react";
import { useState } from "react/cjs/react.development";

const TodoForm = ({ addTodo, setOpenModal }) =>{
    const [value, setValue] = useState('');
    const onChange = (event) =>{
        setValue(event.target.value);
    }
    const onSubmit = (event) =>{
        event.preventDefault();
        addTodo(value);
        setOpenModal(false);
    }
    return(
    <form onSubmit={onSubmit}>
        <label></label>
        <textarea placeholder={'cortar la cebolla'} onChange={onChange}/>
        <div>
            <button type={'button'} onClick={() => setOpenModal(false)}>cancelar</button>
            <button type={'submit'}>guardar</button>
        </div>
    </form>
    )
}
export default TodoForm;