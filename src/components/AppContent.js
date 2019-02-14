import React, { PropTypes } from 'react'
import Search from './Search'
import UserInfo from './UserInfo'
import Actions from './Actions'
import Repos from './Repos'

const AppContent = ({ userInfo, repos, starred, handleSearch, getRepos, getStarred, isFetching }) => (
  <div className='app'>
    <Search isDisabled={isFetching} handleSearch={handleSearch} />

    {isFetching && <div>Carregando...</div>}

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
  starred: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  handleSearch: PropTypes.func.isRequired,
  getRepos: PropTypes.func.isRequired,
  getStarred: PropTypes.func.isRequired,
}

export default AppContent
