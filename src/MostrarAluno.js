import React, { Component } from 'react'
class MostrarAluno extends Component{
    render(){

            //Destructuring ES6
            const {aluno} = this.props

            return(
                <div>
                    {`Nome Aluno: ${aluno.nome} - Matricula: ${aluno.matricula}`}
                </div>
        )
    }
}
export default MostrarAluno