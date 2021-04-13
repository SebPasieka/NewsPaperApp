import React from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import Articlefetch from "./components/ArticleFetch";
import Login from "./components/Login"
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
            </Switch>
        </div>
        </Router>
    )
}

export default App