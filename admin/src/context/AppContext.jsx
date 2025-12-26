import React, { createContext } from 'react'

export const AppContext = createContext()

const AppContextPrvider = (props) => {
    const value = {}
    return (<AppContext.Provider value={value}>
        {
            props.children
        }
    </AppContext.Provider>)
}
export default AppContextPrvider