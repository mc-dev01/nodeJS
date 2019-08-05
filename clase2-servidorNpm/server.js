const http = require('http');
const port = 3000;

//funcion que maneja los pedidos
const handle = (req,res) => {
    res.WriteHead(200, {
        'Content-Type':'text/plain'
    });
    res.end('Hola Mundo, no esta trucado');
};

//creamos el objeto servidor
const server = http.createServer(handle);

//ponemos al servidor a escuchar pedidos
server.listen(port, err => {
    if(err){
        return console.log('algo no esta funcionando en la escucha',err)
    };
})