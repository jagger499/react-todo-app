import React, { useContext } from 'react';
import styles from './createTodoItem.module.css';
import { TodoContext } from '../../context/TodoContext';
const TodoCounter = () =>{
    const {
        numberCompletedTodos,
        totalToDos,
    } = useContext(TodoContext);
    return(
        <>
            <h2 className={styles.counter}>completados {numberCompletedTodos} de {totalToDos}</h2>
        </>
    );
};

export default TodoCounter;
