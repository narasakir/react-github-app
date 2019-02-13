import React, { PropTypes } from 'react'
import Search from './Search'
import UserInfo from './UserInfo'
import Actions from './Actions'
import Repos from './Repos'

const AppContent = ({ userInfo, repos, starred, handleSearch, getRepos, getStarred }) => (
  <div className='app'>
    <Search handleSearch={handleSearch} />

    {!!userInfo && <UserInfo {...userInfo} />}

    {!!userInfo && <Actions getRepos={getRepos} getStarred={getStarred} />}

    {
      !!repos.length && <Repos
        className={'repos'}
        title={'Repositórios'}
        repos={repos}
      />
    }

    {
      !!starred.length && <Repos
        className={'starred'}
        title={'Favoritos'}
        repos={starred}
      />
    }
  </div>
)

AppContent.propTypes = {
  userInfo: PropTypes.object.isRequired,
  repos: PropTypes.array.isRequired,
  starred: PropTypes.array.isRequired
}

export default AppContent
