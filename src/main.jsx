import React from 'react'
import ReactDOM from 'react-dom/client'
import { HolaMundo } from "./components/HolaMundo";
import { faker } from '@faker-js/faker/locale/es_MX';

const generaProducto = () => {
  const descripcion = faker.commerce.product();
  const precio = faker.number.int({min:300,max:5000});
  const fabricante = faker.company.name();
  const producto = {
    descripcion,
    precio,
    fabricante
  }
  return producto;
}

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
