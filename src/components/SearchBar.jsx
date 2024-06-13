import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ keyword, keywordChange }) => {
  const keywordChangeHandler = (event) => {
    keywordChange(event.target.value);
  };

  return (
        <section className="search-bar">
            <input
                type="text"
                placeholder="Search notes by title here...."
                value={keyword}
                onChange={keywordChangeHandler}
            />
        </section>
  );
};

SearchBar.propTypes = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};

export default SearchBar;
