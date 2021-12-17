//import './App.css';
import React,{ useState, useEffect } from "react";
import AppUi from "./AppUi";
import useLocalStorage from "../../hooks/useLocalStorage";

function App() {
  //todos quemados para probar el correcto funcionamiento hardcode
  /* const toDosDefault = [
    { key: 1,text: 'curso de react', completed: false },
    { key: 2,text: 'complete webpackage course', completed: false },
    { key: 3,text: 'como que hay que hacer cosas', completed: true },
    { key: 4,text: 'cebolla bitches', completed: false },
  ]; */
  
  //estado de todos buscados y de todos que iteran para hacer la lista
  const [toDos, saveTodos ] = useLocalStorage('TODOS_V1',[]);
  const [search, setSearch] = useState('');
  

  //todos completados en la aplicacion y total de todos
  const numberCompletedTodos = toDos.filter(toDo => !!toDo.completed).length;
  const totalToDos = toDos.length;


  //filtrando por criterio de busqueda en el input los todos que incluyen el texto
  let searchedTodos = [];
  if(searchedTodos.length>= 1){
    searchedTodos = toDos;
  }else{
    searchedTodos = toDos.filter( todo =>{
      const todoText = todo.text.toLowerCase();
      const searchText = search.toLowerCase();
      return todoText.includes(searchText);
    })
  }

  //filtrar todo completado y marcarlo como tal con su key y guardarlo en todos
  const completedToDos = (text) =>{
    const todoIndex = toDos.findIndex(todo => todo.text === text );
    const newTodos = [...toDos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  }

  //filtrar y eliminar el todo por el texto que llega como un parametro
  const deleteTodo = (text) =>{
    const todoIndex = toDos.findIndex(todo => todo.text === text );
    const newTodos = [...toDos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos)
  }

  return (
    <>
      <AppUi
        completedToDos={numberCompletedTodos}
        completedTodos={completedToDos}
        deleteTodo={deleteTodo}
        totalToDos={totalToDos}
        search={search}
        setSearch={setSearch}
        searchedTodos={searchedTodos}
      />
    </>
  );
}

export default App;
