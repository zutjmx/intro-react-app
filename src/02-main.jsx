import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { faker } from '@faker-js/faker/locale/es_MX';
import './index.css'

//Texto con faker
const texto = faker.hacker.phrase();

//Se anidan componentes html con React
// const li = React.createElement('li', null, texto);
// const ul = React.createElement('ul', null, li);
// const div = React.createElement('h1', null, ul);

//Otra forma
const div = <div><ul><li>{texto}</li></ul></div>;

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  div
)
