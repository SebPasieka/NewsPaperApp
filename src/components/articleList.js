import React from "react"
import Date from "./date"


const ArticleList = ({articles = []}) => {

    return (
        <div data-testid='articlelist'>
            {articles.length > 0 &&
                <ul>
                {articles.map(item => (
                    <div key={item.id} className="articleBox" data-testid='article-entry'>
                        <a data-testid='article-link' href={item.url}> [{item.publisher}]{item.title} </a>
                        <p data-testid='article-date'>{ Date.ConvertDate(item.dateCreated) }</p>
                    </div>
                ))}
                </ul>
            }

            {!articles.length &&
            <p data-testid='nothing-found-message'>nothing found</p>
            }

        </div>
    );
}

export default ArticleList