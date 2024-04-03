export const todoReducer = (initialState, action) => {


    switch (action.type) {
        case 'Agregar TODO':
            return [ ...initialState, action.payload]
        case 'Eliminar TODO':
            return initialState.filter( todo => todo.id !== action.payload );
        case 'Toggle TODO':
            return initialState.map(todo => {

                if ( todo.id === action.payload) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }
                return todo;
            });
        default:
            return initialState;
    }

}