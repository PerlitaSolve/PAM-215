const personas=[
    {nombre: "Ana", edad: 22},
    {nombre: "Luis", edad: 35},
    {nombre: "Maria", edad:28}
];

const lu= personas.find(personas=>personas.nombre=="Luis");

const suma= personas.reduce((acum, personas)=>acum+personas.edad,0);
const perso= personas.forEach(personas=>console.log(personas));

console.log(lu);
console.log(suma);