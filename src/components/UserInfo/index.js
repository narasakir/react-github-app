import React, { PropTypes } from 'react'
import style from './user-info.css'

const UserInfo = ({ username, repos, photo, followers, following, login }) => (
  <div className={style.userInfo}>
    <img src={photo} />
    <h1 className='user-name'>
      <a href={`https://github.com/${login}`} target='_blank'>{username}</a>
    </h1>
    <ul className={style.reposInfo}>
      <li>- Repositorios: {repos}</li>
      <li>- Seguidores: {followers}</li>
      <li>- Seguindo: {following}</li>
    </ul>
  </div >
)

UserInfo.propTypes = {
  username: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  repos: PropTypes.number.isRequired,
  followers: PropTypes.number.isRequired,
  following: PropTypes.number.isRequired
}

export default UserInfo
