import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer'

const init = ( ) => {
    return  JSON.parse(localStorage.getItem('todos')) || [] ;
}

export const useTodo = (initialState) => {

  
    const [todos, dispatch] = useReducer(todoReducer, initialState, init)

    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos));

    }, [todos])
    
    const handleNewTodo = (todo) => 
        {
        const action = {
            type: 'Agregar TODO',
            payload: todo
                        }
        dispatch(action);
        }

    const handDeleteTodo = (id) => 
        {
        dispatch({
            type:'Eliminar TODO',
            payload: id
                })   
        }

        const handToggleTodo = (id) => 
        {
            dispatch({
                type:'Toggle TODO',
                payload: id
                }) ;

            console.log(id);
        }       
        
        

  return {todos, 
    todosCount: todos.length, 
    pendingTodosCount: todos.filter(todo => !todo.done).length,
     handDeleteTodo,
     handToggleTodo,
     handleNewTodo }

}
