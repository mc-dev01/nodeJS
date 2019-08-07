fetch('http://localhost:3000/artists')
.then(res => res.json())
.then(artists => {
    console.table(artists);
    const tabla = document.querySelector('#losArtistas tbody')
    tabla.innerHTML=`
    <tr>
    <th>Id</th>
    <th>Nombre</th>
    </tr>`;
    artists.forEach(cantante => {
        tabla.innerHTML+=`
        <tr>
            <td>${cantante.id}</td>
            <td>${cantante.nombre}</td>
        </tr>`
    });
})

const form = document.getElementById('new-artist');
form.onsubmit = function (e){
    e.preventDefault()

    const newArtist = {
        nombre: document.querySelector('input[name="nombre"]').value
    }

    
    fetch('http://localhost:3000/artists', {
        method: 'post',
        body: JSON.stringify(newArtist),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(data => {
            const tabla = document.querySelector('#losArtistas tbody');
            tabla.innerHTML += `
            <tr>
                <td>${data.id}</td>
                <td>${data.nombre}</td>
            </tr>`;
        });
}