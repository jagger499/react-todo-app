import React,{ useContext } from "react";
import styles from './createTodoItem.module.css';
import { TodoContext } from "../../context/TodoContext";

const TodoSearch = () =>{
    const { setSearch , search } = useContext(TodoContext);
    const onSearchValueChange = (event) =>{
        setSearch(event.target.value);
    }
    return(
        <>
            <input type={'text'} className={styles.input} 
            onChange={onSearchValueChange} 
            placeholder={'cebolla'}
            value={search}/>
        </>
    )
};

export default TodoSearch;