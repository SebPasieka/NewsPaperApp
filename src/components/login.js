import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import AuthService from "../services/authService"

const Login = (props) => {
    const {setAuth} = props
    const history = useHistory()
    const [state, setState] = useState({
        username: '',
        password: '',
        isLogined: false,
        loginFailed: false
    })
    let generateBase64Token = (username, password) =>  btoa(username+':'+password)

    useEffect(() => {
        if (localStorage.getItem('credentials') !== null) {
            const foundCredentials = localStorage.getItem("credentials")
            AuthService.verify(foundCredentials)
                .then(() => {
                    state.isLogined = true;
                    state.loginFailed = false;
                    setState({...state, isLogined: state.isLogined, loginFailed: state.loginFailed});
                    setAuth(state.isLogined);
                    history.push("/");
                })
                .catch(() => {
                    state.isLogined = false;
                    state.loginFailed = true;
                    setState({...state, isLogined: state.isLogined, loginFailed: state.loginFailed});
                    setAuth(state.isLogined);
                })
        }
    }, [])


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
            AuthService.verify(generateBase64Token(state.username, state.password))
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
        <React.Fragment>
            <input name="username" type="text" data-testid="username" onChange={handleInputChange}/>
            <input name="password" type="password" data-testid="password" onChange={handleInputChange}/>
            <button data-testid="submit" onClick={submitClick}> Submit</button>
            {state.loginFailed &&
            <p data-testid="failedLoginMessage">login failed</p>
            }
        </React.Fragment>);
}
export default Login