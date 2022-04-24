import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { login } from "../Redux/Login/action";
import styled from "styled-components";
import Button from '@mui/material/Button';

const LoginBox = styled.div`
  width: 350px;
  height: 300px%;
  // border:2px solid green;
  margin: auto;
  margin-top: 10%;
  // background-color: rgb(235, 216, 195);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 10px;
  padding: 10px;
`;

export const Login = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const { isAuthenticated,loading,error,token} = useSelector((state) => state.login);
  // console.log(token)

  const handlelogin = () => {
    const userDetails = {
      username,
      password,
    };
    dispatch(login(userDetails));
    
  };
  if (token) {
    navigate("/");
  }


  const disabled = username.length === 0 || password.length === 0;

  return (
    <LoginBox>
      <div className="App">
        <h1>Login</h1>

        <label>
          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <br />
        <label>
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <br />
        <Button style={{backgroundColor:"rgb(253,93,93)"}} disabled={disabled} onClick={()=>handlelogin()}>
          Login
        </Button>
        <hr />
        {loading && <div>Loading...</div> || error && <div>somthing went wrong</div> }
        <p>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </LoginBox>
  );
};
