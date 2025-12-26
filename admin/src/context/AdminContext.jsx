import React, { createContext } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
export const AdminContext = createContext()
const AdminContextPrvider = (props) => {
    const [doctors, setDoctors] = useState([])
    const [aToken, setAToken] = useState(localStorage.getItem('aToken') ? localStorage.getItem('aToken') : '')

    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const getAllDoctors = async () => {
        try {
            const { data } = await axios.post(backendUrl + '/api/admin/all-doctors', {}, { headers: { aToken } })
            if (data.success) {
                setDoctors(data.doctors)
                console.log(data.doctors)
                toast.success("Doctors Fetched Successfully")
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    const changeAvailabilty = async (docId) => {
        try {
            const { data } = await axios.post(backendUrl + '/api/admin/change-availablity', { docId }, { headers: { aToken } })
            if (data.success) {
                toast.success(data.message)
                getAllDoctors()
            }
            else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    const value = {
        aToken, setAToken, backendUrl, doctors, getAllDoctors, changeAvailabilty
    }
    return (<AdminContext.Provider value={value}>
        {
            props.children
        }
    </AdminContext.Provider>)
}
export default AdminContextPrvider