import React, { Component } from 'react'
import Lista from './Lista'

class App extends Component {
  state = {
    alunos : [
      {
        nome : 'Elizane',
        matricula : '201411640022',
        idade: 31
      },
      {     
        nome : 'Lohana',
        matricula : '201411640032',
        idade: 24
      },
      {
        nome : 'Yago',
        matricula : '201411640042',
        idade: 25
      },
      {
        nome : 'Jean',
        matricula : '201411640052',
        idade: 31
      }
    ]
  }
  render() {
    return (
      <div>
        Hello Word
        <Lista alunos={this.state.alunos} />
      </div>
    )
  }
}
export default App
