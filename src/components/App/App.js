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

import TodoError from '../status/Error';
import TodoLoading from '../status/Loading';
import EmptyTodos from '../status/Empty';
import ChangeAlert from "../changeAlert/changeAlert";

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
    sincronize,
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
      <TodoList 
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        search={search}
        numberCompletedTodos={numberCompletedTodos}
        onError={() => <TodoError/>}
        onLoading={() => <TodoLoading/>}
        onEmptyTodos={() => <EmptyTodos/>}
        onEmptySearch={
          (searchedText) => <p>No hay resultado para {searchedText}</p>
        }
        render={item => (
          <TodoItem 
            key={item.text}
            completed={item.completed} 
            text={item.text}
            onComplete={() => completedToDos(item.text)}
            onDelete={() => deleteTodo(item.text)}
          />
        )}
      />
      { /*<TodoList>
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
        </TodoList>*/ }
     {(openModal)?
      <Modal>
        <TodoForm addTodo={addTodo} 
                  setOpenModal={setOpenModal}/>
      </Modal>:<></>
      }
    <CreateTodoItem openModal={openModal} setOpenModal={setOpenModal}/>
    <ChangeAlert 
      sincronize={sincronize}
    />
  </>
)
}

export default App;
