import React from 'react'
import ReactDOM from 'react-dom/client'
import { HolaMundoApp } from "./HolaMundoApp";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <HolaMundoApp nombre = {'Jesús'} 
               apellidos = {'Zúñiga Trejo'} 
               email = {'zutjmx@gmail.com'}
               sueldo = {30000}
               titulo = {'Actuario'}
               texto = {'Cualquier texto'}
               producto = {{propiedad1:1,propiedad2:2,propiedad3:3}}
    /> */}
    <HolaMundoApp />
  </React.StrictMode>,
  
)
