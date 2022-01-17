import React from "react";
import styles from './createTodoItem.module.css';

const TodoSearch = ({ search, setSearch }) =>{
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