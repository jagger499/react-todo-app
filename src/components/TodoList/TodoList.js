import React from "react";
import styles from './createTodoItem.module.css';

const TodoList = (props) =>{
    return(
        <section>
            <ul className={styles.ul}> 
                {props.children}
            </ul>
        </section>
    )
};

export default TodoList;