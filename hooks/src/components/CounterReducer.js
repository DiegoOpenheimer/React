import React, { useReducer } from 'react'

const reducer = (state, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return { ...state, counter: action.value + state.counter }
        case 'DECREMENT':
            return { ...state, counter: action.value - state.counter }
        default:
            return { ...state }
    }
}

const CounterReducer = () => {

    const [ state, dispatch ] = useReducer(reducer, { counter: 0 })
    const { counter } = state
    return(
        <div>
            <p>COUNTER REDUCER: { counter }</p>
            <button onClick={() => dispatch({type: 'INCREMENT', value: 1})}>+</button>
            <button onClick={() => dispatch({type: 'INCREMENT', value: -1})}>-</button>
            <hr />
        </div>
    )

}

export default CounterReducer