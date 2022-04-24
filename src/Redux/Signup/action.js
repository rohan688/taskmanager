//action type
export const SIGNUP_LOADING = "SIGNUP_LOADING";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILURE = "SIGNUP_FAILURE";

//action create
export const signuploading = ()=>({
    type:SIGNUP_LOADING
}) 

export const signupsuccess = (payload)=>({
    type:SIGNUP_SUCCESS,
    payload
})

export const signupfailure = ()=>({
    type:SIGNUP_FAILURE
})



export const signup =(payload)=> (dispatch) => {
    
    dispatch(signuploading())
    fetch('https://masai-api-mocker.herokuapp.com/auth/register', {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
        .then(res => dispatch(signupsuccess({username,token:res.token})))
        .catch(err => dispatch(signupfailure(err)))
}