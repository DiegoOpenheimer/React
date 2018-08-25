import React from 'react'

const Distance = ({ distance, form }) => {
    let distanceSrt
    if ( form === 'metric' ) {
        distanceSrt = (distance / 1000) + 'km'
    } else {
        distanceSrt = (distance * 0.621371).toFixed(2) + 'm'
    }
    return <span>{distanceSrt}</span>
}

export default Distance