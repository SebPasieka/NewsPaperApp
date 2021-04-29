import React, {useState} from "react";

const Login = () => {
    const [state, setState] = useState({
        username: '',
        password: '',
        isLogined: false,
        loginFailed: false
    })

    const handleInputChange = (event) => { 
        setState({
            ...state,
            [event.target.name]: event.target.value
        })
    }

    const submitClick = () => {
        let isLogined = false;
        let loginFailed = true;
        if ((state.username == "username") && (state.password == "password")) {
            isLogined = true;
            loginFailed = false;
        }
        setState({...state, isLogined: isLogined, loginFailed: loginFailed});
    }
    return (
        <div>
            <input type="text" data-testid="username" hint="username" onChange={handleInputChange}/>
            <input type="password" data-testid="password" hint="password" onChange={handleInputChange}/>
            <button data-testid="submit" onClick={submitClick}> Submit</button>
            {state.loginFailed &&
                <p data-testid="failedLoginMessage">login failed</p>
            }
        </div>);
}
export default Login