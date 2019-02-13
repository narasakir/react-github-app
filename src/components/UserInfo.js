import React, { PropTypes } from 'react'

const UserInfo = ({ username, repos, photo, followers, following, login }) => (
  <div className='user-info'>
    <img src={photo} />
    <h1 className='user-name'>
      <a href={`https://github.com/${login}`}>{username}</a>
    </h1>
    <ul className='repos-info'>
      <li>- Repositorios: {repos}</li>
      <li>- Seguidores: {followers}</li>
      <li>- Seguindo: {following}</li>
    </ul>
  </div>
)

UserInfo.propTypes = {
  username: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  repos: PropTypes.number.isRequired,
  followers: PropTypes.number.isRequired,
  following: PropTypes.number.isRequired
}

export default UserInfo
