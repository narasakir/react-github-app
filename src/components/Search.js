import React from 'react'

const Search = ({ handleSearch }) => (
  <div className='search'>
    <input
      type='search'
      placeholder='Digite o nome do usuario no Github'
      onKeyUp={handleSearch}
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
