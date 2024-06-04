const mercancia1 = {
    nombre: "salchichas",
    cantidad: 1,
    marca: "cartuja"
}

const mercancia2 = {
    nombre: "panes",
    cantidad: 20,
    marca: "big mama",
}

const mercancia3 = {
    nombre: "cebolla",
    cantidad: 30,
    marca: "mercado",
}


const mercancia4 = {
    nombre: "repollo",
    cantidad: 8,
    marca: "mercado",
}





const productos = [mercancia1, mercancia2, mercancia3, mercancia4]

//agregar un nuevo producto
const agregarElemento = () =>{
    let nombre = prompt("nombre del producto")
    let cantidad = parseInt(prompt("Ingrese la cantidad de productos:"))
    let marca = prompt("¿cual es la marca?")

    const productoExistente = productos.find(producto => producto.nombre === nombre);
    if (productoExistente) {
        alert(`El producto ${nombre} ya está en la lista.`);
        return;
    }

    const producto = {
        nombre: nombre,
        cantidad: cantidad,
        marca: marca
    }

    productos.push(producto)
}

//eliminar algun producto
const eliminarElemento = () =>{
    let nombre = prompt("nombre del producto que desea eliminar:")
    let index = -1

    // Buscar el índice del producto en el array
    for (let i = 0; i < productos.length; i++) {
        if (productos[i].nombre === nombre) {
            index = i
            break
        }
    }

    // Si el producto se encuentra, eliminarlo
    if (index !== -1) {
        productos.splice(index, 1);
        alert(`Producto ${nombre} eliminado correctamente.`);
    } else {
        alert(`Producto ${nombre} no encontrado.`);
    }
}





let opcion;
while (opcion !== "salir") {
    opcion = prompt("Seleccione una opcion:\n1. Agregar producto\n2. Eliminar producto\n3. mostrar\nEscriba 'salir' para salir.");

    switch (opcion) {
        case "1":
            agregarElemento();
            break;
        case "2":
            eliminarElemento();
            break;

        case "3":
            console.table(productos);
            break;

        case "salir":
            alert("Saliendo...");
            break;
        default:
            alert("Opción no válida.");
            break;
    }
    console.log(productos);
}


