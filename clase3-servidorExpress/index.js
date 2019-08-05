const express  = require('express');

const app = express();

const bodyParser = require('body-parser');
//configuracion del bodyParser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

console.log('funcionandoooo')

const artistas = [
    {id:1, nombre:'J Quiles'},
    {id:2, nombre: 'Daddy'},
    {id:3, nombre: 'Yandel'}
];
const albums = [
    {genero:'reg',artista:artistas[2].nombre, titulo:'el album de Yandel'},
    {genero:'reg',artista:artistas[1].nombre, titulo:'el album de Daddy'}
];

// creando los endpoints
app.get('/artists', (req, res) => { //cuando se hace un htttp get del directorio raiz '/' 
    res.json(artistas); //se devuelve una respuesta
});

app.get('/artists/:id', (req, res) => { // en este caso le agregamos un parametro especifico 'id'
    console.log(`GET : --> ${req.params.id}`);

    const id = parseInt(req.params.id); //parseo lo que llega desde el 'id' puesto en la url
    const artista = artistas.find(a => a.id === id); //filtro mi lista segun el 'id' buscado

    if(artista){ // chequeamos ese 'id' enviado
        res.json(artista); // muestro el artista encontrado
    } else{
        // RESPUESTA PERSONALIZADA
        res.status(404).send('No existe el artista buscado'); // respuesta negativa
        // RESPUESTA CLASICA DEL NAVEGADOR
        // res.status(404).end();
    }
    
});
// añadiendo un objeto a la coleccion
app.post('artistas', (req, res)=>{
    const newArtista = req.body;
    artistas.push(newArtista);

    newArtista.id= artistas[artistas.length()-1].id+ 1;

    res.json(newArtista);
})

app.get('/albums', (req, res) => {
    res.json(albums);
})

app.listen(3000);