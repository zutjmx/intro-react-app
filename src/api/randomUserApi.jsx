const getUsuarioRandom = async () => {
    const respuesta = await fetch('https://randomuser.me/api/');
    const usuario = await respuesta.json();
    return usuario;
}

export {
    getUsuarioRandom
}
