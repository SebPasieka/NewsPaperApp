import React from "react";

const ArticleList = ({articles = []}) => {

    return (
        <div>
            {articles.length > 0 &&
            <ul>
                {articles.map(item => (
                    <li key={item.id} data-testid='article-entry'>
                        {item.id}
                    </li>
                ))}
            </ul>
            }

            {!articles.length &&
            <p data-testid='nothing-found-message'>nothing found</p>
            }

        </div>
    );
}


// should be moved to mainContent
/*useEffect(() => {
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
*/
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
export default ArticleList