// path module
const path = require('path');
// file system module
const fs = require('fs');

const directorio = path.join(__dirname, 'archivo.txt');

console.log(`El directorio es: ${directorio}`);

/* fs.readFile(directorio, (err, data) => {
    console.log(err);
    console.log(data);

    console.log(data.toString());

    const listado = JSON.parse(data.toString());
    console.log(listado);
    console.log(listado.nombre);
}) */

const persona={
    nombre: 'Otro',
    edad: 28
}

// sobreescribo el archivo con el texto del objeto persona
fs.writeFile(directorio, JSON.stringify(persona), err =>{
    if(err){
        console.log('Surgio un error');
    }else{
        console.log('Se guardo el archivo');
    }
})
fs.readFile(directorio, (err,data)=>{
    const listado = JSON.parse(data.toString());
    console.log(listado);
})
