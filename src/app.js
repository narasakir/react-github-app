import React, { Component } from 'react'

class App extends Component {
  render() {
    return (
      <div className='app'>
        <div className='search'>
        <input type='search' placeholder="Digite o nome do usuario no Github"/>
        </div>
        <div className='user-info'>
          <img src='' />
          <h1 className='user-name'>
            <a href='#'>Raphael Narasaki</a>
          </h1>
          <ul className='repos-info'>
            <li>- Repositorios: 122</li>
            <li>- Seguidores: 10</li>
            <li>- Seguindo: 10</li>
          </ul>

          <div className='actions'>
            <button>Ver Repositorios</button>
            <button>Ver Favoritos</button>
          </div>

          <div className='repos'>
            <h2>Repositorios:</h2>
            <ul>
              <li><a href='#'>Nome do Repositorio</a></li>
            </ul>
          </div>

          <div className='starred'>
            <h2>Favoritos</h2>
            <ul >
              <li><a href='#'>Nome do Repositorio</a></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default App
