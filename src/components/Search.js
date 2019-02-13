import React from 'react'

const Search = ({ handleSearch, isDisabled }) => (
  <div className='search'>
    <input
      type='search'
      placeholder='Digite o nome do usuario no Github'
      onKeyUp={handleSearch}
      disabled={isDisabled}
      onChange={(e) => {
        console.log(e)
      }}
    />
  </div>
)

Search.propTypes = {
  handleSearch: React.PropTypes.func.isRequired
}

export default Search
