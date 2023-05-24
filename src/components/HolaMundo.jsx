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

const HolaMundo = () => {
    return (
        <Fragment>
            <h1>{generaTitulo()}</h1>
            <div>{generaTexto()}</div>
        </Fragment>
    );
}

export {
    HolaMundo,
}