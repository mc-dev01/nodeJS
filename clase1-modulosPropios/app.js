const { agregarCliente, eliminarCliente, modificarCliente } = require('./funciones');

let listado = [];

agregarCliente('mateo', listado);
agregarCliente('joaco', listado);

console.log(listado);

listado = eliminarCliente('mateo', listado);

console.log(listado);

listado = modificarCliente('joaco', listado, 'parcerito');

console.log(listado);