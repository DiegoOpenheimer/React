import { createActions, createReducer } from 'reduxsauce'

const INITIAL_STATE = []

export const { Types, Creators } = createActions({
    add: ['todo'],
    toogle: ['todo'],
    remove: ['todo'],
})

const add = (state = INITIAL_STATE, action) => [ ...state, action.todo ]

const toogle = (state = INITIAL_STATE, action) => [ ...state.map(todo => {
    if (action.todo.id === todo.id) {
     todo.toogle = !todo.toogle
    } 
    return todo
 }) ]

 const remove = (state = INITIAL_STATE, action) => [ ...state.filter(todo => todo.id !== action.todo.id) ]

export default createReducer(INITIAL_STATE, {
    [Types.ADD]: add,
    [Types.TOOGLE]: toogle,
    [Types.REMOVE]: remove,
})