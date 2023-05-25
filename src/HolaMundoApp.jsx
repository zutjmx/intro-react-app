import { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Titulo } from './components/Titulo';

import { generaTitulo, generaNombre, generaApellidos, generaEmail, generaTexto, generaProducto, generaSueldo } from './data/DataFake';

const HolaMundoApp = ({nombre,apellidos,email,titulo,texto,sueldo,producto}) => {
    return (
        <Fragment>
            <Titulo titulo={titulo}/>
            <h3>{texto}</h3>
            <p>Cliente: {nombre} {apellidos}</p>
            <p>Email: {email}</p>
            <h4>Sueldo bruto: {sueldo}</h4>
            <h4>Sueldo neto: {sueldo - 5000}</h4>
            <div>Producto: {JSON.stringify(producto)}</div>
        </Fragment>
    );
}

HolaMundoApp.propTypes = {
    nombre: PropTypes.string.isRequired,
    apellidos: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired,
    texto: PropTypes.string.isRequired,
    sueldo: PropTypes.number.isRequired,
    producto: PropTypes.object.isRequired,
}

HolaMundoApp.defaultProps = {
    nombre: generaNombre(),
    apellidos: generaApellidos(),
    email: generaEmail(),
    titulo: generaTitulo(),
    texto: generaTexto(),
    sueldo: generaSueldo(),
    producto: generaProducto(),
}

export {
    HolaMundoApp,
}