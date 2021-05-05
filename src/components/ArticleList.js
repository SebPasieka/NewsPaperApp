import React from "react"
import moment from "moment"


const ArticleList = ({articles = []}) => {
// date component exportieren
    return (
        <div data-testid='articlelist'>
            {articles.length > 0 &&
                <ul>
                {articles.map(item => (
                    <div key={item.id} className="articleBox" data-testid='article-entry'>
                        <a href={item.url}> [{item.publisher}]{item.title} </a>
                        <p>{moment(item.dateCreated).format("dddd, MMM DD - HH:mm a")} </p>
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