import React, {useState} from 'react';

function Searchbar(props) {
    const {setSearch} = props;

    const [keyword, setKeyword] = useState("")
    const BarStyling = {border: "none", padding: "8px"};

    // updates internal state
    const changeHandler = (e) => {
        const newValue = e.target.value
        setKeyword(newValue)
    }

    // calls callback
    const submitHandler = () => {
        setSearch(keyword);
    }

    return (
        <div data-testid='searchbar'>
            <form data-testid='search-form'
                  onSubmit={submitHandler}>
                <input
                    data-testid='search-input'
                    style={BarStyling}
                    value={keyword}
                    placeholder={"search"}
                    onChange={changeHandler}
                />
            </form>
        </div>
    );
}

export default Searchbar