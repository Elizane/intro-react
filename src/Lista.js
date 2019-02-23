import React, { Component } from 'react'
import MostrarAluno from './MostrarAluno'
class Lista extends Component{
    render(){
        return(
            <ul>
                {this.props.alunos.map(aluno => 
                <li>
                    <MostrarAluno aluno={aluno}/>
                </li>)}
            </ul>
        )
    }
}
export default Lista