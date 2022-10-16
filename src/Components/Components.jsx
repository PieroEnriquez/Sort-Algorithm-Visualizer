import React, { useState } from 'react'

export const AnimationSpeed = props => {
    const [speed, setSpeed] = useState(4)
    const [indicator, setIndicator] = useState('Average')

    return (
        <>
            <p className='indicator'>{indicator} speed</p>
            <button className='header-button' onClick={() => {
                if (speed > 1) setSpeed(speed - 1)

                if (speed < 4) setIndicator('Fast')
                if (speed < 6 && speed > 3) setIndicator('Average')
                if (speed < 9 && speed > 6) setIndicator('Slow')
            }}>-</button>
            <p id='counter'>{speed}</p>
            <button className='header-button' onClick={() => {
                if (speed < 10) setSpeed(speed + 1)

                if (speed > 1 && speed < 6) setIndicator('Average')
                if (speed < 7 && speed > 3) setIndicator('Slow')
                if (speed <= 10 && speed > 6) setIndicator('Very Slow')
            }}>+</button>
        </>
    )
}
