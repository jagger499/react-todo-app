//import './App.css';
import TodoCounter from "./components/TodoCounter/TodoCounter";
import TodoSearch from "./components/TodoSearch/TodoSearch";
import TodoList from "./components/TodoList/TodoList";
import TodoItem from "./components/TodoItem/TodoItem";
import CreateTodoItem from "./components/CreateTodoItem/CreateTodoItem";
function App() {
  const toDos = [
    { text: 'como que hay que hacer cosas', completed: false },
    { text: 'como que hay que hacer cosas', completed: false },
    { text: 'como que hay que hacer cosas', completed: false },
    { text: 'como que hay que hacer cosas', completed: false },
  ]
  return (
    <>
      <TodoCounter/>
      <TodoSearch/>
      <TodoList>
        {toDos.map(item => (
          <TodoItem text={item.text}/>
        ))}
      </TodoList>
      <CreateTodoItem/>
    </>
  );
}

export default App;
