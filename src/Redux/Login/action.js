///type of action
export const LOGIN_LOADING = 'LOGIN_LOADING';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

//action creator
export const loginLoading = () => ({
    type: LOGIN_LOADING
});

export const loginSuccess = (payload) => ({
    type: LOGIN_SUCCESS,
    payload: payload
}); 

export const loginFailure = () => ({
    type: LOGIN_FAILURE
});

export const logout = () => ({
    type: "LOGOUT"
});


export const login =({username,password})=> (dispatch) => {
    
    dispatch(loginLoading())
    fetch('https://masai-api-mocker.herokuapp.com/auth/login', {
        method: 'POST',
        body: JSON.stringify({username,password}),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
        .then(res => dispatch(loginSuccess({username,token:res.token})))
        .catch(err => dispatch(loginFailure(err)))
}

