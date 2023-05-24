import React from 'react'
import ReactDOM from 'react-dom/client'
import { HolaMundo } from "./components/HolaMundo";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <HolaMundo nombre = {'Jesús'} apellidos = {'Zúñiga Trejo'} email = {'zutjmx@gmail.com'}/> */}
    <HolaMundo />
  </React.StrictMode>,
  
)
