import React, { useState } from 'react';

function Searchbar(props) {
    const {setSearch} = props;

    const [keyword, setKeyword] = useState("")
    const BarStyling = {border: "none", padding: "8px"};
    const changeHandler = (e) => {
        const newValue = e.target.value
        setKeyword(newValue)
        setSearch(newValue)
    }
    return (
        <input
            style={BarStyling}
            value={keyword}
            placeholder={"search"}
            onChange={changeHandler}
        />
    );
}
export default Searchbar