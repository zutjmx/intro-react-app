import { faker } from '@faker-js/faker/locale/es_MX';

const generaPersona = () => {
    return {
        nombre: faker.person.firstName(),
        apellidos: faker.person.lastName(),
        email: generaEmail(),
        celular: faker.phone.number(),
        sueldo: generaSueldo()
    };
}

const generaProducto = () => {
  const descripcion = faker.commerce.product();
  const precio = faker.number.int({min:300,max:5000});
  const fabricante = faker.company.name();
  const producto = {
    descripcion,
    precio,
    fabricante
  }
  return producto;
}

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

const generaSueldo = () => {
    return faker.number.int({min:20000,max:40000});
}

export {
    generaProducto,
    generaTitulo,
    generaTexto,
    generaNombre,
    generaApellidos,
    generaEmail,
    generaSueldo,
    generaPersona
}