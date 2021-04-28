import React from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Login from "./components/Login"
import Article from "./components/Article"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./App.css"


function App() {
    return (
        <Router>
        <div>
            <Header />
            <Switch>
                <Route path="/" exact component={MainContent} />
                <Route path="/login" component={Login} />
                <Route path="/main" component={MainContent} />
                <Route path="/article" component={Article} />
            </Switch>
        </div>
        </Router>
    )
}

export default App