import React from 'react'
import ReactDOM from 'react-dom/client'
import { HolaMundo } from "./components/HolaMundo";
import { generaProducto } from './data/DataFake';

const miProducto = generaProducto();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HolaMundo nombre = {'Jesús'} 
               apellidos = {'Zúñiga Trejo'} 
               email = {'zutjmx@gmail.com'}
               sueldo = {30000}
               titulo = {'Actuario'}
               producto = {miProducto}
    />
    {/* <HolaMundo /> */}
  </React.StrictMode>,
  
)
