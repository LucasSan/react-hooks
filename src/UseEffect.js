import React, { useEffect, useState } from 'react'

const UseEffect = props => {
    const [counter, setCounter] = useState(0)
    useEffect(() => {
        console.log('useEffect')
        const timer = setInterval(() => {
            setCounter(old => old + 1)
        }, 1000)
        return () => {
            console.log('unmount')
            clearInterval(timer)
        }
    }, [])

    return (
        <div>
            <h1>useEffect:</h1>
            <p>Contador: { counter }</p>
            <hr />
        </div>
    )
}

export default UseEffect
