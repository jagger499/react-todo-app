import React from "react";
import TodoCounter from "../TodoCounter/TodoCounter";
import TodoSearch from "../TodoSearch/TodoSearch";
import TodoList from "../TodoList/TodoList";
import TodoItem from "../TodoItem/TodoItem";
import CreateTodoItem from "../CreateTodoItem/CreateTodoItem";

const AppUi = (props) =>{
    const { completedTodos,
            totalToDos,
            search,
            setSearch,
            searchedTodos,
            deleteTodo,
            completedToDos
        } = props; 
    return(
        <>
        <TodoCounter
          completedToDos={completedToDos}
          totalToDos={totalToDos}
        />
        <TodoSearch
          search={search}
          setSearch={setSearch}
        />
        <TodoList>
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