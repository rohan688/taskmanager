import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom"
import { signup } from "../redux/signup/action";
import styled from 'styled-components'
import Button from '@mui/material/Button';

const LoginBox = styled.div`
width: 350px;
height: 300px%;
// border:2px solid green;
margin: auto;
margin-top: 10%;
// background-color: rgb(235,216,195);
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
border-radius: 10px;
padding: 10px;
margin-bottom: 20px;
`


// "name": "MASAI School",
// "email": "hello@masai.com"
// "password": "secret",
// "username": "masai-school",
// "mobile": "9876543210",
// "description": "A Transformation in education!" 


export const Signup = ()=>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [form, setForm] = useState({
       name:"",
       email:"",
       password:"",
       username:"",
       mobile:"",
       description:""
    })
    const inputHandle = (e)=>{
         const {value, id} = e.target;
         setForm({...form, [id]:value});
    }

    const loading = useSelector(store=>store.signup.loading);
    const error = useSelector(store=>store.signup.error);
    const isauthenticated = useSelector(store=>store.signup.isauthenticated);
    // console.log(loading, error, isauthenticated);
    const handleSubmit = ()=>{
        dispatch(signup(form)); 

        if(isauthenticated){
            navigate("/login");
        }
        
    }
    

    const  disabled = form.name.length === 0 || form.password.length === 0 || form.username.length === 0 || form.mobile.length === 0 || form.description.length === 0;
    return (
        <div className="login">
            <LoginBox>

            <h1>Signup</h1>
            <input onChange={(e)=>{inputHandle(e)}} type="text" name="" id="name" placeholder="name" /> <br /><br />
            <input onChange={(e)=>{inputHandle(e)}} type="text" name="" id="email" placeholder="email"/> <br /> <br />
            <input onChange={(e)=>{inputHandle(e)}} type="text" name="" id="password" placeholder="Password"/> <br /> <br />
            <input onChange={(e)=>{inputHandle(e)}} type="text" name="" id="username" placeholder="username"/> <br /> <br />
            <input onChange={(e)=>{inputHandle(e)}} type="text" name="" id="mobile" placeholder="mobile"/> <br /> <br />
            <input onChange={(e)=>{inputHandle(e)}} type="text" name="" id="description" placeholder="description"/> <br /> <br />
            <Button style={{backgroundColor:"rgb(253,93,93)"}} onClick={()=>{handleSubmit()}}  disabled={disabled}>Signup</Button>
            <hr />
            {loading && <p>Loading...</p> || error && <p>somthing went wrong</p>}
             <span>Already Have Account?</span>
            <span onClick={()=>navigate("/login")} style={{color:'blue', cursor:"spanointer", fontWeight:"400", fontSize:"18px"}} > Login</span>
            </LoginBox>
        </div>
    )
}