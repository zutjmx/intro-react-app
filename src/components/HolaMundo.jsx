import { faker } from '@faker-js/faker/locale/es_MX';
import { Fragment } from 'react';

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

const HolaMundo = (props) => {

    const nombre = props.nombre? props.nombre : generaNombre();
    const apellidos = props.apellidos? props.apellidos : generaApellidos();
    const email = props.email? props.email : generaEmail(nombre, apellidos);

    return (
        <Fragment>
            <h1>{generaTitulo()}</h1>
            <div>{generaTexto()}</div>
            <p>Cliente: {nombre} {apellidos}</p>
            <p>Email: {email}</p>
        </Fragment>
    );
}

export {
    HolaMundo,
}