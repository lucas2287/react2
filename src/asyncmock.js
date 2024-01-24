const productos = [
    {id: "1",nombre : "celulares", precio: 500, img: "../img/celulares.jpg",idCat: "2"},
    {id: "2",nombre : "computadoras", precio: 400, img: "../img/computadoras.jpg",idCat: "2"},
    {id: "3",nombre : "tablets", precio: 300, img: "../img/tablets.jpg",idCat: "2"},
    {id: "4",nombre : "smart", precio: 200, img: "../img/smart.jpg",idCat: "2"},

]

export const getProductos = () => {
    return new Promise ( (resolve)  =>  {
        setTimeout( ()=> {
            resolve(productos);
            
        }, 100);

    })
}




export const getProductosPorCategoria = () => {
    return new promise (resolve => {
        setTimeout (() => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria)
            resolve (productosCategoria);
        }, 100)
    })
}