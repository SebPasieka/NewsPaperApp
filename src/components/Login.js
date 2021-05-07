import React, {useState} from "react"
import App from "../App"
import {Redirect, Router} from "react-router-dom"

const Login = (props) => {
    const {setAuth} = props
    const [state, setState] = useState({
        username: '',
        password: '',
        isLogined: false,
        loginFailed: false
    })

    const handleInputChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setState({
            ...state,
            [name]: value
        })
    }

    const submitClick = (e) => {
        e.preventDefault()
        let isLogined = false;
        let loginFailed = true;
        if ((state.username === "username") && (state.password === "password")) {
            isLogined = true;
            loginFailed = false;
        }
        setState({...state, isLogined: isLogined, loginFailed: loginFailed});
        setAuth(isLogined);
    }

    return (
        <div>
            <input name="username" type="text" data-testid="username" onChange={handleInputChange}/>
            <input name="password" type="password" data-testid="password" onChange={handleInputChange}/>
            <button data-testid="submit" onClick={submitClick}> Submit</button>
            {state.loginFailed &&
            <p data-testid="failedLoginMessage">login failed</p>
            }
            {state.isLogined &&
            <Redirect to={{pathname: "/"}} />
            }
        </div>);
}
export default Login