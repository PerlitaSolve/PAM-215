const persona = {
    nombre: "Perla Sarahí",
    edad: 19,
    direccion: {
        ciudad: "Qro",
        pais: "MX"
    }
};

//destructuración

const { nombre, edad, direccion}=persona;

console.log("Me llamo " + nombre + ", tengo "+ edad+ " y vivo en "+ direccion.ciudad);