import React from "react";

class ArticleFetch extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            items: [],
            isLoaded: false,
        };
    }

    componentDidMount() {

        const requestOptions = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic '+btoa('sebastian.pasieka:9WGDbRz2Hf'),
            }
        };
        const url = 'https://sandbox-api.ipool.asideas.de/sandbox/api/search?types=article&publisher=welt%2C%20WELT&q=test'
        fetch(url, requestOptions)
            .then(response => response.json())
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

export default ArticleFetch