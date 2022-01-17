
import { useState ,useEffect } from "react";

const useLocalStorage = (itemname,initialValue) => {
  const [item, setItem] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [sincronizedItem , setSincronizedItem] = useState(true);

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
        setSincronizedItem(true);
      }catch(error){
        setError(error);
      }
    },1000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sincronizedItem]);
    
    const saveTodos = (newTodos) =>{
      try{
        const stringifyTodos = JSON.stringify(newTodos);
        localStorage.setItem(itemname, stringifyTodos);
        setItem(newTodos);
      } catch(error) {
        setError(error);
      }
    }

    const sincronize = () => {
      setLoading(true);
      setSincronizedItem(false);
    }

    return{
      item,
      saveTodos,
      loading,
      error,
      sincronize,
    };
}

export default useLocalStorage;