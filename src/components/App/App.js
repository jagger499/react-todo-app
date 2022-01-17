//import './App.css';
import React from "react";
import useTodos from "./useTodos";
import TodoHeader from "../TodoHeader/header";
import TodoCounter from '../TodoCounter/TodoCounter'
import TodoSearch from '../TodoSearch/TodoSearch'
import TodoList from "../TodoList/TodoList";
import TodoItem from "../TodoItem/TodoItem";
import CreateTodoItem from "../CreateTodoItem/CreateTodoItem";
import Modal from "../modal/modal";
import TodoForm from "../TodoForm/form";

function App() {
  const {
    error, 
    loading, 
    searchedTodos,
    completedToDos,
    deleteTodo,
    openModal,
    setOpenModal,
    numberCompletedTodos,
    totalToDos,
    setSearch ,
    search,
    addTodo,
  } = useTodos();

  return(
    <>
      <TodoHeader>
        <TodoCounter 
          numberCompletedTodos={numberCompletedTodos}
          totalToDos={totalToDos}
        />
        <TodoSearch
          search={search}
          setSearch={setSearch}
        />
      </TodoHeader>
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
        <TodoForm addTodo={addTodo} 
                  setOpenModal={setOpenModal}/>
      </Modal>:<></>
      }
    <CreateTodoItem openModal={openModal} setOpenModal={setOpenModal}/>
  </>
)
}

export default App;
