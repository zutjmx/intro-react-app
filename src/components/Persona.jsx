import { Fragment } from 'react';
import PropTypes from 'prop-types';
import { generaNombre, generaApellidos, generaEmail, generaNumeroCelular, generaSueldo } from '../data/DataFake';

export const Persona = ({nombre,apellidos,email,celular,sueldo}) => {
    return (
        <Fragment>
            <p>Cliente: {nombre} {apellidos}</p>
            <p>Email: {email}</p>
            <p>Celular: {celular}</p>
            <h4>Sueldo bruto: {sueldo}</h4>
            <h4>Sueldo neto: {sueldo - 5000}</h4>
        </Fragment>
    );
}

Persona.propTypes = {
    nombre: PropTypes.string.isRequired,
    apellidos: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    celular: PropTypes.string.isRequired,
    sueldo: PropTypes.number.isRequired,
}

Persona.defaultProps = {
    nombre: generaNombre(),
    apellidos: generaApellidos(),
    email: generaEmail(),
    celular: generaNumeroCelular(),
    sueldo: generaSueldo(),
}