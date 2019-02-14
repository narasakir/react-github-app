import React, { PropTypes } from 'react'
import Search from 'components/Search'
import UserInfo from 'components/UserInfo'
import Actions from 'components/Actions'
import Repos from 'components/Repos'
import style from './app.css'

const AppContent = ({ userInfo, repos, starred, handleSearch, getRepos, getStarred, isFetching }) => (
  <div className={style.app}>
    <Search isDisabled={isFetching} handleSearch={handleSearch} />

    {isFetching && <div>Carregando...</div>}

    {!!userInfo && <UserInfo {...userInfo} />}

    {!!userInfo && <Actions getRepos={getRepos} getStarred={getStarred} />}

    {
      !!repos.length && <Repos
        title={'Repositórios'}
        repos={repos}
      />
    }

    {
      !!starred.length && <Repos
        title={'Favoritos'}
        repos={starred}
      />
    }
  </div>
)

AppContent.propTypes = {
  userInfo: PropTypes.object,
  repos: PropTypes.array.isRequired,
  starred: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  handleSearch: PropTypes.func.isRequired,
  getRepos: PropTypes.func.isRequired,
  getStarred: PropTypes.func.isRequired,
}

export default AppContent
