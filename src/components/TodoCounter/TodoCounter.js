import React from 'react';
import styles from './createTodoItem.module.css';
const TodoCounter = ({ numberCompletedTodos, totalToDos }) =>{
    return(
        <>
            <h2 className={styles.counter}>completados {numberCompletedTodos} de {totalToDos}</h2>
        </>
    );
};

export default TodoCounter;
