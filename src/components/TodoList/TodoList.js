import React from "react";
import styles from './createTodoItem.module.css';

const TodoList = (props) =>{
    return(
        <section>
            <ul className={styles.ul}> 
            {props.error && props.onError()}
            {props.loading && props.onLoading()}
            {(!props.loading && !props.numberCompletedTodos) && props.onEmptyTodos()}
            {(props.numberCompletedTodos && !props.searchedTodos.length === 0) && props.onEmptySearch(props.search)}
            {props.searchedTodos.map(
                todo => props.render(todo)
            )}
            </ul>
        </section>
    )
};

export default TodoList;