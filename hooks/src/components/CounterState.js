import React, { useState } from 'react'

const CounterState = () => {

    const [ counter, setCounter ] = useState(0)

    return(
        <div>
            <p>COUNTER STATE: { counter }</p>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={() => setCounter(counter - 1)}>-</button>
            <hr />
        </div>
    )

}

export default CounterState