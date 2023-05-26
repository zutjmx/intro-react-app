import { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Titulo } from './components/Titulo';
import { Texto } from './components/Texto';
import { Persona } from './components/Persona';
import { Producto } from './components/Producto';

import { generaTitulo, 
         generaNombre, 
         generaApellidos, 
         generaEmail, 
         generaTexto, 
         generaProducto, 
         generaSueldo } from './data/DataFake';

const HolaMundoApp = ({nombre,apellidos,email,titulo,texto,sueldo,producto}) => {
    return (
        <Fragment>
            <Titulo titulo={titulo}/>
            <Texto texto={texto}/>
            <Persona nombre={nombre}
                     apellidos={apellidos}
                     email={email}
                     sueldo={sueldo} 
            />
            <Producto producto={producto} />
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