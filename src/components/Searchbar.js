import React, { useState } from 'react';

function Searchbar() {
    const [keyword, setKeyword] = useState("")
    const BarStyling = {border: "none", padding: "8px"};
    return (
        <input
            style={BarStyling}
            value={keyword}
            placeholder={"search"}
            onChange={e => {setKeyword(e.target.value)}}
        />
    );
}
export default Searchbar