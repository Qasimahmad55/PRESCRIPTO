import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import AdminContextPrvider, { AdminContext } from './context/AdminContext.jsx'
import DoctorContextPrvider from './context/DoctorContext.jsx'
import AppContextPrvider from './context/AppContext.jsx'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AdminContextPrvider>
      <DoctorContextPrvider>
        <AppContextPrvider>
          <App />
        </AppContextPrvider>
      </DoctorContextPrvider>
    </AdminContextPrvider>
  </BrowserRouter>,
)
