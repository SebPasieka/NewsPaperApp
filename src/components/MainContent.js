import React from "react"
import Searchbar from "./Searchbar"
import ArticleList from "./ArticleList"
// maincontent is responsible for executing search and passing data to aticlelist
function MainContent() {

    // use maincontent has on state
    const mainContentFunction = (keyword) => {
        console.log(keyword)
    }

    return(
        <main>
            <Searchbar keywordChangesCallback = {mainContentFunction}/>
            <ArticleList />
        </main>
    )
}

export default MainContent