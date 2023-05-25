import { faker } from '@faker-js/faker/locale/es_MX';
import { Fragment } from 'react';
import PropTypes from 'prop-types';

const generaTitulo = () => {
    const titulo = faker.commerce.productName();
    return titulo;
}

const generaTexto = () => {
    const texto = faker.lorem.paragraph();
    return texto;
}

const generaNombre = () => {
    return faker.person.firstName();
}

const generaApellidos = () => {
    return faker.person.lastName();
}

const generaEmail = (nombre, apellidos) => {
    return faker.internet.email({firstName: nombre, lastName: apellidos});
}

const HolaMundo = ({nombre,apellidos,email,titulo,sueldo,producto}) => {

    console.log(producto);

    const tituloPrincipal = titulo? titulo : generaTitulo();
    const primerNombre = nombre? nombre : generaNombre();
    const apPaternoMaterno = apellidos? apellidos : generaApellidos();
    const correElectronico = email? email : generaEmail(primerNombre, apPaternoMaterno);

    return (
        <Fragment>
            <h1>{tituloPrincipal}</h1>
            <h3>{generaTexto()}</h3>
            <p>Cliente: {primerNombre} {apPaternoMaterno}</p>
            <p>Email: {correElectronico}</p>
            <h4>Sueldo bruto: {sueldo}</h4>
            <h4>Sueldo neto: {sueldo - 5000}</h4>
            <div>Producto: {JSON.stringify(producto)}</div>
        </Fragment>
    );
}

HolaMundo.propTypes = {
    nombre: PropTypes.string.isRequired,
    apellidos: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired,
    sueldo: PropTypes.number.isRequired,
    producto: PropTypes.object,
}

export {
    HolaMundo,
}