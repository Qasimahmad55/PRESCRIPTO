import React, { createContext } from 'react'

export const DoctorContext = createContext()

const DoctorContextPrvider = (props) => {
    const value = {}
    return (<DoctorContext.Provider value={value}>
        {
            props.children
        }
    </DoctorContext.Provider>)
}
export default DoctorContextPrvider