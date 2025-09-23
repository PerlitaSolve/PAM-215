const productos = [
    {nombre: "Laptop", precio: 12000},
    {nombre: "Mouse", precio: 250},
    {nombre: "Teclado", precio: 750},
    {nombre: "Monitor", precio: 3000}
];

const precios= productos.filter(producto=>producto.precio>1000);

const nom= precios.map(precios=>precios.nombre);

console.log(precios);
console.log(nom);



