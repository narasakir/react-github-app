import React from 'react'
import style from './repos.css'

const Repos = ({ title, repos }) => (
  <div className={style.repos}>
    <h2>{title}</h2>
    <ul>
      {
        repos.map((repo, index) => (
          <li key={index}><a href={repo.link} target='_blank'>{repo.name}</a></li>
        ))
      }
    </ul>
  </div>
)

Repos.defaultProps = {
  className: ''
}

Repos.propTypes = {
  className: React.PropTypes.string,
  title: React.PropTypes.string.isRequired,
  repos: React.PropTypes.array.isRequired
}

export default Repos
