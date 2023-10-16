import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router/index.jsx'
import './i18n';



ReactDOM.createRoot(document.getElementById('root')).render(
    

    <RouterProvider router={router} />

)