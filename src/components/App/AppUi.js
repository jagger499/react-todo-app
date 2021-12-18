/* eslint-disable no-lone-blocks */
import React,{ useContext } from "react";
import TodoCounter from "../TodoCounter/TodoCounter";
import TodoSearch from "../TodoSearch/TodoSearch";
import TodoList from "../TodoList/TodoList";
import TodoItem from "../TodoItem/TodoItem";
import CreateTodoItem from "../CreateTodoItem/CreateTodoItem";
import { TodoContext } from "../../context/TodoContext";

const AppUi = () =>{
    const {
      error, 
      loading, 
      searchedTodos,
      completedTodos,
      deleteTodo 
    } = useContext(TodoContext);
    return(
        <>
        <TodoCounter/>
        <TodoSearch/>
          <TodoList>
            {loading && <p>cargando</p>}
            {(!loading && !searchedTodos.length) && <p>crea tu primer todo</p>}
            {error && <p>desesperate hubo un error</p>}
            {searchedTodos.map(item => (
              <TodoItem 
                key={item.key}
                completed={item.completed} 
                text={item.text}
                onComplete={() => completedTodos(item.text)}
                onDelete={() => deleteTodo(item.text)}
              />
            ))}
          </TodoList>
        <CreateTodoItem/>
      </>
    )
}
export default AppUi;