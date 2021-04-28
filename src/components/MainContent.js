import React from "react"
import Searchbar from "./Searchbar"
import ArticleList from "./ArticleList"

function MainContent() {
    return(
        <main>
            <Searchbar />
            <ArticleList />
        </main>
    )
}

export default MainContent