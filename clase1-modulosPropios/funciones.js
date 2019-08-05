const agregarCliente = (nombre, lista) =>{
    lista.push(nombre);
}
const eliminarCliente = (nombre, lista) => lista.filter( i => i!=nombre)

const modificarCliente = (nombre,lista, newName) => lista.map(i => i==nombre ? newName: i);


module.exports = {
    agregarCliente,
    eliminarCliente,
    modificarCliente
}