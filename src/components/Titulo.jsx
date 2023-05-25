import { generaTitulo } from '../data/DataFake';
import PropTypes from 'prop-types';

export const Titulo = ({titulo}) => {
    return <h1>{titulo}</h1>;
}

Titulo.propTypes = {
    titulo: PropTypes.string.isRequired
}

Titulo.defaultProps = {
    titulo: generaTitulo()
}
