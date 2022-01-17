
import { useState ,useEffect } from "react";

const useLocalStorage = (itemname,initialValue) => {
  const [item, setItem] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setTimeout(() =>{
      try{
        let parsedItems;
        const localStorageitems = localStorage.getItem(itemname);
        if(!localStorageitems){
          localStorage.setItem(itemname, JSON.stringify(initialValue));
          parsedItems = (initialValue);
        } else {
          parsedItems = JSON.parse(localStorageitems);
        }
        setItem(parsedItems);
      setLoading(false);
      }catch(error){
        setError(error);
      }
    },1000)
    })
    
    const saveTodos = (newTodos) =>{
      try{
        const stringifyTodos = JSON.stringify(newTodos);
        localStorage.setItem(itemname, stringifyTodos);
        setItem(newTodos);
      } catch(error) {
        setError(error);
      }
    }

    return{
      item,
      saveTodos,
      loading,
      error,
    };
}

export default useLocalStorage;