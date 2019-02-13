import React, { Component } from 'react'
import AppContent from './components/AppContent'

class App extends Component {
  constructor() {
    super()
    this.state = {
      userInfo: {
        username: 'Raphael Narasaki 2',
        photo: '#',
        repos: 12,
        followers: 10,
        following: 10,
        login: 'narasakir'
      },
      repos: [{
        link: '#',
        name: 'Nome do Repo'
      }],
      starred: [{
        link: '#',
        name: 'Nome do Repo'
      }]
    }
  }

  render() {
    return (
      <AppContent {...this.state} />
    )
  }
}

export default App
