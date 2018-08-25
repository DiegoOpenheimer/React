import React from 'react'

const Duration = ({duration}) => {
    const hour = Math.floor(duration / 3600).toString().padStart(2, '0')
    const minutes = Math.floor((duration%3600)/60).toString().padStart(2, '0')
    const seconds = Math.floor((duration%3600)%60).toString().padStart(2, '0')
    const durationStr = [hour, minutes, seconds]
    return <span>{durationStr.join(':')}</span>
}

export default Duration