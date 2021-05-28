import React, { useState } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import MainContent from "./components/MainContent"
import Login from "./components/Login"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import ProtectedRoute from "./ProtectedRoute"
//import 'bulma/css/bulma.min.css';
import "./App.css"


function App() {
    const [isAuth, setIsAuth] = useState(false)

    const setAuth = (state) => {
        setIsAuth(state)
    }
    return (
        <Router>
        <div>
            <Header />
            <Switch>
                <Route path="/login">
                    <Login setAuth={setAuth} />
                </Route>
                <ProtectedRoute component={MainContent} isAuth={isAuth}/>
            </Switch>
            <Footer />
        </div>
        </Router>
    )
}

export default App