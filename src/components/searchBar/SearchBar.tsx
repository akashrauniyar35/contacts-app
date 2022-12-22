import React, { useState } from 'react'
import "./SearchBar.css"
import { MdSearch, MdAddCircleOutline, MdRefresh } from 'react-icons/md';
function SearchBar({ value, addModalToggler, onSearch, onRefresh }: any) {
    // const [input, setInput] = useState(String)
    // console.log('search value', input)
    return (
        <div className="searchBar__container">
            <div className="search__box">
                <span className="search__icon">
                    <MdSearch />
                </span>
                <input value={value} placeholder='Search' className="search__input" onChange={e => onSearch(e.target.value)} />
            </div>
            <button className="button" onClick={onRefresh}> <MdRefresh /></button>
            <button className="button" onClick={addModalToggler}><MdAddCircleOutline /></button>
        </div >
    )
}

export default SearchBar