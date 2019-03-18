// qdo quiser passar um valor pra outro componente
import React, { useContext, useState, useEffect } from 'react'
import UseContextDeep from './UseContextDeep'
import MyContext from './MyContext'

const UseContext = props => {
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
            <MyContext.Provider value={counter}>
                <UseContextDeep />
            </MyContext.Provider>
        </div>
    )
}

export default UseContext
