import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer"
import MainContent from "./components/MainContent";
import Login from "./components/Login"
import ArticleList from "./components/ArticleList"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
//import 'bulma/css/bulma.min.css';
import "./App.css"


function App() {
    return (
        <Router>
        <div>
            <Header />
            <Switch>
                <Route path="/" exact component={MainContent} />
                <Route path="/login" component={Login} />
                <Route path="/articles" component={ArticleList} />
            </Switch>
            <Footer />
        </div>
        </Router>
    )
}

export default App