export const GET_TODOS = 'GET_TODOS';
export const GET_TODOS_LOADING = 'ADD_TODO_LOADING';
export const GET_TODOS_ERROR = 'ADD_TODO_ERROR';

export const getTodos = (payload) => ({
    type: GET_TODOS,
    payload
});

export const getTodosLoading = () => ({
    type: GET_TODOS_LOADING,
});

export const getTodosError = (err) => ({
    type: GET_TODOS_ERROR,
    err
});


export const getTodosData = () => (dispatch) => {
    dispatch(getTodosLoading());
     fetch('http://localhost:8080/todos')
        .then(res => res.json())
        .then(res => dispatch(getTodos(res)))
        .catch(error => dispatch(getTodosError(error)));
}