import React, { Component } from 'react'
import Search from './components/Search'
import UserInfo from './components/UserInfo'
import Actions from './components/Actions'
import Repos from './components/Repos'

class App extends Component {
  render() {
    return (
      <div className='app'>
        <Search />
        <UserInfo />
        <Actions />
        <Repos
          className={'repos'}
          title={'Repositórios'}
          repos={[{
            link: '#',
            name: 'Nome do Repo'
          }]}
        />
        <Repos
          className={'starred'}
          title={'Favoritos'}
          repos={[{
            link: '#',
            name: 'Nome do Repo Favorito'
          }]}
        />
      </div>
    )
  }
}

export default App
