import React from 'react'
import { connect } from 'react-redux'
import { Creators as TodoActions } from '../ducks/reducer'
import FormatterDate from '../componentes/date'

const Main = props => {
    let input

    const handlerInput = event => {
        const name = input.value
        if (event.keyCode === 13) {
            input.value = ''
            props.add({
                id: new Date().getTime(),
                name: name,
                date: new Date(),
                toogle: false
            })
        }
    }

    const buildRows = todos => {
        return todos.map(todo => {
            const color = todo.toogle ? '#699366' : '#7c7c77' 
            return (
                <tr key={todo.id} style={{backgroundColor: color}}>
                    <td>{todo.name}</td>
                    <td><FormatterDate>{todo.date}</FormatterDate></td>
                    <td><button onClick={() => props.toogle(todo)}>Complete</button></td>
                    <td><button onClick={() => props.remove(todo)}>Excluir</button></td>
                </tr>
            )
        })
    }

    return(
        <div className="main">
           <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <h1>Tarefas</h1>
                <div>
                    <div style={{display: 'flex'}}><div className="complete"></div> - Complete</div>
                    <div style={{display: 'flex'}}><div className="notComplete"></div> - Não completado</div>
                </div>
           </div>
            <input ref={r => input = r} onKeyUp={handlerInput} style={{marginBottom: 15}} type="text" maxLength={20} placeholder="Nome" />
            <table>
                <thead>
                    <tr><th>Nome</th>
                    <th>data</th>
                    <th>complete</th>
                    <th>excluir</th></tr>
                </thead>
                <tbody>
                    { buildRows(props.todos) }
                </tbody>
            </table>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

const { add, remove, toogle } = TodoActions

export default connect(mapStateToProps, { add, remove, toogle })(Main)