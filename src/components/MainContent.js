import React, {useEffect, useState} from "react"
import Searchbar from "./Searchbar"
import ArticleList from "./ArticleList"
import SandboxApi from '../SandboxApi';


const MainContent = () => {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        SandboxApi.fetchArticles()
            .then((result) => setArticles(result.documents))
            .catch(() => {
                // todo handle error
            })
    }, [])

    // use maincontent has on state
    const setSearch = (keyword) => {
        console.log(keyword)
    }

    return(
        <main>
            <Searchbar setSearch={setSearch}/>
            <ArticleList articles={articles}/>
        </main>
    )
}

export default MainContent