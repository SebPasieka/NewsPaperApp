import React from "react";
import SandboxApi from "../SandboxApi";

class Article extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            items: [],
            isLoaded: false,
        };
    }

    componentDidMount() {
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
    }

    render() {
        const { error, items, isLoaded } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div>
                    <ul>
                      {items.map(item => (
                           <li key={item.id}>
                              {item.id}
                          </li>
                       ))}
                    </ul>
                </div>
            );
        }
    }
}

export default Article