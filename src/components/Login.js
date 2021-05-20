import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import AuthService from "../Services/authService"

const Login = (props) => {
    const {setAuth} = props
    const history = useHistory()
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
        AuthService.verify(state.username, state.password)
            .then(() => {
                isLogined = true;
                loginFailed = false;
                setState({...state, isLogined: isLogined, loginFailed: loginFailed});
                setAuth(isLogined);
                history.push("/");
            })
            .catch(() => {
                isLogined = false;
                loginFailed = true;
                setState({...state, isLogined: isLogined, loginFailed: loginFailed});
                setAuth(isLogined);
            })

    }

    return (
        <div>
            <input name="username" type="text" data-testid="username" onChange={handleInputChange}/>
            <input name="password" type="password" data-testid="password" onChange={handleInputChange}/>
            <button data-testid="submit" onClick={submitClick}> Submit</button>
            {state.loginFailed &&
            <p data-testid="failedLoginMessage">login failed</p>
            }
        </div>);
}
export default Login