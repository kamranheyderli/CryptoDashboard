import React from 'react'
import { CiSearch } from "react-icons/ci";

const SearchInput = () => {
    return (
        <div className='input_container'>
            <input type="text" placeholder='Search' />
            <CiSearch className='search_icons'  />
        </div>
    )
}

export default SearchInput