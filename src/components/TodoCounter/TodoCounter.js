import React from 'react';
import styles from './createTodoItem.module.css';

const TodoCounter = ({ totalToDos, completedToDos}) =>{
    return(
        <>
            <h2 className={styles.counter}>completados {completedToDos} de {totalToDos}</h2>
        </>
    );
};

export default TodoCounter;
