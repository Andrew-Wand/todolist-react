import React, { useState } from 'react'

function SearchBar(props) {

    // const [search, setSearch] = useState('');

  return (
        <div className="search-bar">
            <input type="text" placeholder='Search here...' onChange={e => props.search(e.target.value)} />
        </div>
  )
}

export default SearchBar