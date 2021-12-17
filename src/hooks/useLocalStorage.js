
import React,{ useState ,useEffect } from "react";

const useLocalStorage = (itemname,initialValue) => {
  const [item, setItem] = useState(initialValue);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() =>{
      let parsedItems;
      const localStorageitems = localStorage.getItem(itemname);
      if(!localStorageitems){
        localStorage.setItem(itemname, JSON.stringify(initialValue));
        parsedItems = (initialValue);
      } else {
        parsedItems = JSON.parse(localStorageitems);
      }

      setItem(parsedItems)
      setLoading(false)
    },1000)
    })
    
    const saveTodos = (newTodos) =>{
      const stringifyTodos = JSON.stringify(newTodos);
      localStorage.setItem(itemname, stringifyTodos);
      setItem(newTodos);
    }
    return[
      item,
      saveTodos
    ]
}

export default useLocalStorage;