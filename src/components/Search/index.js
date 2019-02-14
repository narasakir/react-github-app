import React from 'react'
import style from './search.css'

const Search = ({ handleSearch, isDisabled }) => (
  <div className={style.search}>
    <input
      type='search'
      placeholder='Digite o nome do usuario no Github'
      onKeyUp={handleSearch}
      disabled={isDisabled}
    />
  </div>
)

Search.propTypes = {
  handleSearch: React.PropTypes.func.isRequired,
  isDisabled: React.PropTypes.bool.isRequired
}

export default Search
