import React, { useState } from "react"
import Header from "./components/header"
import Footer from "./components/footer"
import MainContent from "./components/mainContent"
import Login from "./components/login"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import ProtectedRoute from "./components/protectedRoute"
//import 'bulma/css/bulma.min.css';
import "./App.css"

function App() {
    const [isAuth, setIsAuth] = useState(false)

    const setAuth = (state) => {
        setIsAuth(state)
    }
    return (
        <Router basename="/NewsPaperApp" >
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