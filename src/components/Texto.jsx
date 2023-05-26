import { generaTexto } from '../data/DataFake';
import PropTypes from 'prop-types';

export const Texto = ({texto}) => {
    return <h3>{texto}</h3>;
}

Texto.propTypes = {
    texto: PropTypes.string.isRequired,
}

Texto.defaultProps = {
    texto: generaTexto(),
}
