// Core
import React from "react";

//Types
import {string} from "prop-types";

const LocalSearch = ({keyword, setKeyword}) => {

    const handleSearchChange = (e) => {
        e.preventDefault()
        setKeyword(e.target.value.toLowerCase())
    }

    return (
        <div className={'container pt-4 pb-4'}>
            <input
                type="search"
                placeholder={'Filter'}
                value={keyword}
                onChange={handleSearchChange}
                className={'form-control mb-4'}
            />
        </div>
    )
}

LocalSearch.prototype = {
    keyword: string.isRequired,
    setKeyword: string.isRequired
}

export default LocalSearch;