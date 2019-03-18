import React, { useContext } from 'react'
import MyContext from './MyContext'

const D1 = props => {
    const value = useContext(MyContext)
    return (
        <p>Contador: {value}</p>
    )
}

const UseContextDeep = props => {
    return (
        <div>
            <h1>useContext:</h1>
            <D1  />
        </div>
    )
}

export default UseContextDeep
