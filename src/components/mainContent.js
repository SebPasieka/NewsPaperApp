import React, {useEffect, useState} from "react"
import Searchbar from "./searchbar"
import ArticleList from "./articleList"
import SandboxApi from './sandboxApi'
import Logout from "./logout"


const MainContent = () => {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        SandboxApi.fetchArticles()
            .then((result) => {
                if (result.error) {
                    throw Error("There has been an error.\n" +
                        "Cannot communicate with the API.")
                }
                setArticles(result.documents);
            })
            .catch (err => {
                alert(err.message)
            })
    }, [])

    const setSearch = (keyword) => {
        SandboxApi.fetchArticles(keyword)
            .then((result) => {
                if (result.error) {
                    throw Error("There has been an error.\n" +
                        "Cannot communicate with the API.")
                }
                setArticles(result.documents);
            })
            .catch (err => {
                alert(err.message)
            })
    };

    return(
        <main>
            <Searchbar setSearch={setSearch}/>
            <ArticleList articles={articles}/>
            <Logout />
        </main>
    )
}

export default MainContent