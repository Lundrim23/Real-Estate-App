import React, { useState } from 'react';
import './searchBar.scss';

const types = ['buy', 'rent'];

function SearchBar() {
  const [query, setQuery] = useState({
    type: 'buy',
    location: '',
    MinPrice: 0,
    MaxPrice: 0,
  });

  const switchType = (value) => {
    setQuery((prev) => ({ ...prev, type: value }));
  };
  return (
    <div className="searchBar">
      <div className="type">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => switchType(type)}
            className={query.type === type ? 'active' : ''}
          >
            {type}
          </button>
        ))}
      </div>
      <form action="">
        <input type="text" name="location" placeholder="City Location" />
        <input
          type="number"
          name="MinPrice"
          min={0}
          max={100000}
          placeholder="Min Price"
        />
        <input
          type="number"
          name="MaxPrice"
          min={0}
          max={100000}
          placeholder="Max Price"
        />
        <button>
          <img src="/search.png" alt="search" />
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
