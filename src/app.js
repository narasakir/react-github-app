import React, { Component } from 'react'
import AppContent from './components/AppContent'
import ajax from '@fdaciuk/ajax'

class App extends Component {
  constructor() {
    super()
    this.state = {
      userInfo: null,
      repos: [],
      starred: []
    }
  }

  getGitHubApiUrl(username, type) {
    const internalType = type ? `/${type}` : ''
    return `https://api.github.com/users/${username}${internalType}`
  }

  handleSearch(e) {
    const value = e.target.value
    const keyCode = e.wich || e.keyCode
    const ENTER = 13;
    if (keyCode === ENTER) {
      ajax().get(this.getGitHubApiUrl(value))
        .then((result) => {
          console.log(result)
          this.setState({
            userInfo: {
              username: result.name,
              photo: result.avatar_url,
              login: result.login,
              repos: result.public_repos,
              followers: result.followers,
              following: result.following
            },
            repos: [],
            starred: [],
          })
        })
    }
  }

  getRepos(type) {
    return (e) => {
      ajax().get(this.getGitHubApiUrl(this.state.userInfo.login, type))
        .then((result) => {
          this.setState({
            [type]: result.map((repo) => ({
              name: repo.name,
              link: repo.html_url
            })),
          })
        })
    }
  }


  render() {
    return (
      <AppContent
        {...this.state}
        handleSearch={(e) => this.handleSearch(e)}
        getRepos={this.getRepos('repos')}
        getStarred={this.getRepos('starred')}
      />
    )
  }
}

export default App
