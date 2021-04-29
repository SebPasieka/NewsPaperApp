import React, {useState, useEffect} from "react";
import SandboxApi from "../SandboxApi";
// articlelist receives items via property 
const ArticleList = () => {
    const [state, setState] = useState({
        error: false,
        items: [],
        isLoaded: false
    });
    // should be moved to mainContent
    useEffect(() => {
        SandboxApi.fetchArticles()
            .then((result) => {
                setState({
                    ...state, items: result.documents, isLoaded: true, error: false
                })
            })
            .catch(() => {
                setState({
                    ...state, items: [], isLoaded: true, error: true
                })
            })
    }, [])
    /*componentDidMount() {
        SandboxApi.fetchArticles()
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.documents
                    });

                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    })
                }
            )
    }*/

    return (
        <div>
            <ul>
                {state.items.map(item => (
                    <li key={item.id}>
                        {item.id}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ArticleList