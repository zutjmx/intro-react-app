import PropTypes from 'prop-types';
import { generaProducto } from '../data/DataFake';

export const Producto = ({producto}) => {
    return <div>Producto: {JSON.stringify(producto)}</div>;
}

Producto.propTypes = {
    producto: PropTypes.object.isRequired
}

Producto.defaultProps = {
    producto: generaProducto()
}
