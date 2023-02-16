const contenedorProductos =document.getElementById("contenedorProductos")



const postres = [
    {id: 1, nombre: "Cannolis", imagen:"../imagenes/Cannolis.jpg", precio: 35, cantidad: 1},
    {id: 2, nombre: "Cheesecake", imagen:"../imagenes/cheesecake.jpg", precio: 120, cantidad: 1},
    {id: 3, nombre: "Macarons", imagen:"../imagenes/macarons.jpg", precio: 60, cantidad: 1},
    {id: 4, nombre: "Mostachon", imagen:"../imagenes/mostachon.jpg", precio: 210, cantidad: 1},
    {id: 5, nombre: "Roles de canela", imagen:"../imagenes/roles de canela.jpg", precio: 25, cantidad: 1},
    {id: 6, nombre: "Churros", imagen:"../imagenes/Churros.jpg", precio:20 , cantidad: 1},
    {id: 7, nombre: "Flan Napolitano", imagen:"../imagenes/Flan napolitano.jpg", precio: 80, cantidad: 1},
    {id: 8, nombre: "Pay de piña", imagen:"../imagenes/pay de piña.jpg", precio: 150, cantidad: 1},
    {id: 9, nombre: "Pastel Red Velet", imagen:"../imagenes/Red velvet.jpg", precio: 180, cantidad: 1},
    {id: 10, nombre: "Pastel de Mil Hojas", imagen:"../imagenes/Patel de mil hojas.jpg", precio: 220, cantidad: 1},
]

postres.forEach(item => {
    contenedorProductos.innerHTML +=
    `
    <div class="card" style="width: 18rem;">
        <img src="${item.imagen} " class="card-img-top" alt="${item.nombre}">
        <div class="card-body">
    <h3 class="card-title">${item.nombre}</h3>
    <p>PRECIO: ${item.precio}</p>
    <button class="btn btn-primary" id= postres${item.id}>AGREGAR AL CARRITO</butto>
        </div>
</div>
    `
})
