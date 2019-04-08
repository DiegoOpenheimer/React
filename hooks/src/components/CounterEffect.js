import React, { useState, useEffect } from 'react'

const CounterEffect = (props) => {

    const [ counter, setCounter ] = useState(0)
    useEffect(() => {
        console.log('COUNTER EFFECT DID MOUNT')
        return () => {
            console.log('COUNTER EFFECT UNMOUNT')
        }
    }, [ ])

    return(
        <div>
            <p>COUNTER EFFECT: { counter }</p>
            <p>PROPS: { props.counter }</p>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={() => setCounter(counter - 1)}>-</button>
            <hr />
        </div>
    )

}

export default CounterEffect