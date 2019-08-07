const express  = require('express');
const cors = require('cors');

const app = express();

const bodyParser = require('body-parser');
//configuracion del bodyParser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(cors());

console.log('funcionandoooo')

const artistas = [
    {id:1, nombre:'J Quiles'},
    {id:2, nombre: 'Daddy'},
    {id:3, nombre: 'Yandel'},
    {id:4, nombre: 'Wisin'}
];

// CREANDO ENDPOINTS
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
app.post('/artists', (req, res)=>{
    const newArtista = req.body;
    
    newArtista.id= artistas[artistas.length-1].id+ 1;
    
    artistas.push(newArtista);
    
    res.json(newArtista);
});
// borrando un elemento segun id
app.delete('/artists/:id', (req,res)=>{
    const id = parseInt(req.params.id);

    for(let i=0; i < artistas.length; i++){
        if(artistas[i]===id){
            artistas.splice(i,1);
            return res.send('Objeto correctamente eliminado.')
        }
    }
    res.status(404).send('El artista no existe');
});

// modificando un objeto de mi listado
app.put('/artists/:id', (req, res) => {
    // voy a editar un elemento, primero necesito saber que elemento.
    const id_modificar = req.params.id;
    // necesito saber que ponerle
    const actor = req.body;
    console.log(actor);
    const index = artistas.findIndex(a => a.id == id_modificar);
    if (index >= 0) {
        const nuevoActor = {
            ...artistas[index],
            ...actor
        }
        artistas[index] = nuevoActor;
        return res.json(artistas);
    }

    else return res.status(404).send('NO PODES');
});


app.listen(3000);