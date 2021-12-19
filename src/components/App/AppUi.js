/* eslint-disable no-lone-blocks */
import React,{ useContext } from "react";
import TodoCounter from "../TodoCounter/TodoCounter";
import TodoSearch from "../TodoSearch/TodoSearch";
import TodoList from "../TodoList/TodoList";
import TodoItem from "../TodoItem/TodoItem";
import CreateTodoItem from "../CreateTodoItem/CreateTodoItem";
import { TodoContext } from "../../context/TodoContext";
import Modal from "../modal/modal";
import TodoForm from "../TodoForm/form";

const AppUi = () =>{
    const {
      error, 
      loading, 
      searchedTodos,
      completedToDos,
      deleteTodo,
      openModal,
      setOpenModal,
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
                key={item.text}
                completed={item.completed} 
                text={item.text}
                onComplete={() => completedToDos(item.text)}
                onDelete={() => deleteTodo(item.text)}
              />
            ))}
          </TodoList>
         {(openModal)?
          <Modal>
            <TodoForm/>
          </Modal>:<></>
          }
        <CreateTodoItem openModal={openModal} setOpenModal={setOpenModal}/>
      </>
    )
}
export default AppUi;