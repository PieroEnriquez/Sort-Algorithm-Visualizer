import React, { useState } from 'react'

export const AnimationSpeed = props => {
    const [speed, setSpeed] = useState(3)

    return (
        <>
            <button className='header-button' onClick={() => {
                if (speed > 0) setSpeed(speed - 1)
            }}>-</button>
            <p id='counter'>{speed}</p>
            <button className='header-button' onClick={() => {
                if (speed < 10) setSpeed(speed + 1)
            }}>+</button>
        </>
    )
}
