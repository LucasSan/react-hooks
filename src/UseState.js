import React, { useState } from 'react'

const UseState = props => {
    const [counter, setCounter] = useState(0)

    return (
        <div>
            <h1>useState:</h1>
            <button onClick={() => setCounter(counter + 1)}>Contador: {counter}</button>
            <hr />
        </div>
    )
}

export default UseState
