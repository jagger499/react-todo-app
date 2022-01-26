
import { useReducer ,useEffect } from "react";

const useLocalStorage = (itemname,initialValue) => {
  const [state, dispatch] = useReducer(reducer, initialState({ initialValue }));
  const {
    sincronizedItem,
    item,
    loading,
    error,
  } = state;

  // action creators
  const onError = (error) => dispatch({ type: actionTypes.error, payload: error });
  const onSuccess = (parsedItems) => dispatch({ type: actionTypes.success, payload: parsedItems });
  const onSave = (item) => dispatch({ type: actionTypes.save, payload: item });
  const onSincronize = () => dispatch({ type: actionTypes.sincronize })
  // const [item, setItem] = useState(initialValue);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(false);
  // const [sincronizedItem , setSincronizedItem] = useState(true);

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
        onSuccess(parsedItems);
        // setItem(parsedItems);
        // setLoading(false);
        // setSincronizedItem(true);
      }catch(error){
        onError(error);
      }
    },1000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sincronizedItem]);
    
    const saveTodos = (newTodos) =>{
      try{
        const stringifyTodos = JSON.stringify(newTodos);
        localStorage.setItem(itemname, stringifyTodos);
        onSave(newTodos);
      } catch(error) {
        onError(error);
      }
    }

    const sincronize = () => {
      // setLoading(true);
      // setSincronizedItem(false);
      onSincronize();
    }

    return{
      item,
      saveTodos,
      loading,
      error,
      sincronize,
    };
}

const initialState =  ({initialValue}) => ({
  sincronizedItem: true,
  item: initialValue,
  loading: true,
  error: false,
});

const actionTypes = {
  error: 'ERROR',
  success: 'SUCCESS',
  save: 'ONSAVE',
  sincronize: 'SINCRONIZE',
}

const reducerObject = (state, payload) => ({
  [actionTypes.error] : { ...state, error: true},
  [actionTypes.success] : { 
    ...state,error: false, 
    item: payload, 
    loading: false, 
    sincronizedItem: true
  },
  [actionTypes.save] : { 
    ...state, item: payload
  },
  [actionTypes.sincronize] : {
    ...state, loading: true, sincronizedItem: true,
  }
})

const reducer = (state, action) => {
  return reducerObject(state, action.payload)[action.type] || state;
}


export default useLocalStorage;